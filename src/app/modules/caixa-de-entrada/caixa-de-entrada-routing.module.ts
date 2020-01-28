import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotas: Routes = [
  {
    path: '',
    component: CaixaDeEntradaComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [RouterModule]
})
export class CaixaDeEntradaRoutingModule { }
