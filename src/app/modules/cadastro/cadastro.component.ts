import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators'

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
  mensagemError = '';

  constructor(private httpCliente: HttpClient, private roteador: Router) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);
      console.log('teste')
      this.httpCliente.post('http://127.0.1.1:3200/users', userData).
        subscribe((resp) => {
          console.log(resp);
          this.formCadastro.reset();
          setTimeout(() => {
            this.roteador.navigate(['']);
          }),
            (responseError: HttpErrorResponse) => {
              this.mensagemError = responseError.error.body;
            }
        });
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