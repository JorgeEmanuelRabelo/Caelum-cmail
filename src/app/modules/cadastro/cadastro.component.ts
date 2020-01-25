import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [
      Validators.required
    ]),
    senha: new FormControl('', [
      Validators.required
    ]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4,5}')]),
    avatar: new FormControl('', [Validators.required], this.validarImagem.bind(this))
  })

  constructor(private httpCliente: HttpClient) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if (this.formCadastro.valid) {
      this.formCadastro.reset();
    } else {
      this.validaCamposFormulario();
    }
  }

  validaCamposFormulario() {
    this.formCadastro.markAllAsTouched();
    // const camposForm = this.formCadastro.controus
    // Object.keys(camposForm).forEach(f => {
    //   const control = this.formCadastro.get(f);
    //   control.markAsTouched({ onlySelf: true });
    // });

  }


  validarImagem(campoAvatar: FormControl) {
    return this.httpCliente.head(campoAvatar.value, { observe: 'response' }).
      pipe(map((response: HttpResponseBase) => { return response.ok ? null : { urlInvalida: true } }),
        catchError((error) => { return [{ urlInvalid: true }] }));
  }
}