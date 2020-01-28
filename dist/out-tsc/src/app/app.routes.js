import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { RouterModule } from '@angular/router';
const rotas = [
    { path: 'login', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inbox' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
export const modulesRoteamento = RouterModule.forRoot(rotas);
//# sourceMappingURL=app.routes.js.map