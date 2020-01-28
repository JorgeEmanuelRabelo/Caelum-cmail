import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedModule } from 'src/app/components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CaixaDeEntradaRoutingModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }
