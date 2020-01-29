import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email-services.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {

  private _isNewEmailOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  constructor(private emailservice: EmailService) { }

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  toggleNewEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  handleEmail(form: NgForm) {

    if (form.invalid) return;

    this.emailservice.enviar(this.email).subscribe(
      (resp) => {
        this.emailList.push(this.email);
        this.email = {
          destinatario: '',
          assunto: '',
          conteudo: ''
        }
        form.reset();
        this.toggleNewEmail();
      }, (error) => { console.log(error) }
    )
  }
}
