import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    username: new FormControl('', [
      Validators.required
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/')
    ]),
    avatar: new FormControl('')
  })

  constructor() { }

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
}