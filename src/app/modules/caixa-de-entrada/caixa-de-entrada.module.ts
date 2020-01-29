import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedModule } from 'src/app/components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from 'src/app/services/email-services.service';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CaixaDeEntradaRoutingModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ],
  providers: [EmailService]
})
export class CaixaDeEntradaModule { }
