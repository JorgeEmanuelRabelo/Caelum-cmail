import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
let FormFieldDirective = class FormFieldDirective {
    constructor(campo) {
        this.campo = campo;
    }
    ngOnInit() {
        const campo = this.campo.nativeElement;
        campo.setAttribute('placeholder', ' ');
        campo.classList.add('mdl-textfield__input');
    }
};
FormFieldDirective = tslib_1.__decorate([
    Directive({
        selector: '[cmailFormField]'
    })
], FormFieldDirective);
export { FormFieldDirective };
//# sourceMappingURL=form-field.directive.js.map