import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { map, catchError } from 'rxjs/operators';
let CadastroComponent = class CadastroComponent {
    constructor(httpCliente, roteador) {
        this.httpCliente = httpCliente;
        this.roteador = roteador;
        this.formCadastro = new FormGroup({
            nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
            username: new FormControl('', [
                Validators.required
            ]),
            senha: new FormControl('', [
                Validators.required
            ]),
            telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4,5}')]),
            avatar: new FormControl('', [Validators.required], this.validarImagem.bind(this))
        });
        this.mensagemError = '';
    }
    ngOnInit() {
    }
    handleCadastroUsuario() {
        if (this.formCadastro.valid) {
            const userData = new User(this.formCadastro.value);
            console.log('teste');
            this.httpCliente.post('http://localhost:3200/users', userData).
                subscribe((resp) => {
                console.log(resp);
                this.formCadastro.reset();
                setTimeout(() => {
                    this.roteador.navigate(['']);
                }),
                    (responseError) => {
                        this.mensagemError = responseError.error.body;
                    };
            });
        }
        else {
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
    validarImagem(campoAvatar) {
        return this.httpCliente.head(campoAvatar.value, { observe: 'response' }).
            pipe(map((response) => { return response.ok ? null : { urlInvalida: true }; }), catchError((error) => { return [{ urlInvalid: true }]; }));
    }
};
CadastroComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cadastro',
        templateUrl: './cadastro.component.html',
        styleUrls: ['./cadastro.component.css']
    })
], CadastroComponent);
export { CadastroComponent };
//# sourceMappingURL=cadastro.component.js.map