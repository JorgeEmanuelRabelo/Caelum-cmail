import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HeaderComponent,
            FormFieldDirective,
            FormGroupComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        exports: [
            HeaderComponent,
            FormFieldDirective,
            FormGroupComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map