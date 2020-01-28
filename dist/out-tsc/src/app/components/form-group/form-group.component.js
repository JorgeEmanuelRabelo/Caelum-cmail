import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
let FormGroupComponent = class FormGroupComponent {
    constructor(elemento) {
        this.elemento = elemento;
        this.textoDaLabel = '';
        this.idCampo = '';
        this.campo = new FormControl();
    }
    ngOnInit() {
        const element = this.elemento.nativeElement.querySelector('input');
        this.textoDaLabel = element.name.replace(element.name[0], element.name[0].toUpperCase());
        this.idCampo = element.name;
    }
};
tslib_1.__decorate([
    Input()
], FormGroupComponent.prototype, "campo", void 0);
FormGroupComponent = tslib_1.__decorate([
    Component({
        selector: 'cmail-form-group',
        templateUrl: './form-group.component.html',
        styles: []
    })
], FormGroupComponent);
export { FormGroupComponent };
//# sourceMappingURL=form-group.component.js.map