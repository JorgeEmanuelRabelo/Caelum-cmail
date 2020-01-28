import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CaixaDeEntradaComponent = class CaixaDeEntradaComponent {
    constructor() {
        this._isNewEmailOpen = false;
        this.emailList = [];
        this.email = {
            destinatario: '',
            assunto: '',
            conteudo: ''
        };
    }
    get isNewEmailOpen() {
        return this._isNewEmailOpen;
    }
    toggleNewEmail() {
        this._isNewEmailOpen = !this._isNewEmailOpen;
    }
    handleEmail(form) {
        console.log(form);
        if (form.invalid)
            return;
        console.log(this.email);
        // event.preventDefault();
        this.emailList.push(this.email);
        this.email = {
            destinatario: '',
            assunto: '',
            conteudo: ''
        };
        form.reset();
        this.toggleNewEmail();
    }
};
CaixaDeEntradaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-caixa-de-entrada',
        templateUrl: './caixa-de-entrada.component.html',
        styleUrls: ['./caixa-de-entrada.component.css']
    })
], CaixaDeEntradaComponent);
export { CaixaDeEntradaComponent };
//# sourceMappingURL=caixa-de-entrada.component.js.map