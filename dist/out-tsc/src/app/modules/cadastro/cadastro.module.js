import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
let CadastroModule = class CadastroModule {
};
CadastroModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            CadastroComponent
        ],
        imports: [
            CommonModule,
            HttpClientModule
        ]
    })
], CadastroModule);
export { CadastroModule };
//# sourceMappingURL=cadastro.module.js.map