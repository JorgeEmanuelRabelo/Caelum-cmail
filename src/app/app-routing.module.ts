import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { LoginModule } from './modules/login/login.module';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';

const rotas: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => LoginModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => CaixaDeEntradaModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
