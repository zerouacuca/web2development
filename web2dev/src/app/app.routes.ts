import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PgClienteComponent } from './components/pg-cliente/pg-cliente.component';

export const routes: Routes = [
    {'path': 'login', component:LoginComponent},
    {'path': 'pgcliente', component:PgClienteComponent}
];
