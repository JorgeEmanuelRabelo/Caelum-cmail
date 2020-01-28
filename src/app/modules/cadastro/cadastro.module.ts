import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedModule } from 'src/app/components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
