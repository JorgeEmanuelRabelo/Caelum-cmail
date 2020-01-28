import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const rotas: Routes = [
  {
    path: '',
    component: LoginComponent
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
export class LoginRoutingModule { }
