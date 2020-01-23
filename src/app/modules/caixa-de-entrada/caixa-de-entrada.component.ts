import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  toggleNewEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  handleEmail(form: NgForm) {
    console.log(form);
    if (form.invalid) return;
    console.log(this.email);
    // event.preventDefault();
    this.emailList.push(this.email);
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
    form.reset();
    this.toggleNewEmail();
  }
}
