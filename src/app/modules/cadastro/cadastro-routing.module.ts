import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotas: Routes = [
  {
    path: '',
    component: CadastroComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroRoutingModule { }
