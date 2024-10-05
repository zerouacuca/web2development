import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-pg-cliente',
  standalone: true,
  imports: [HeaderComponent,LoginComponent],
  templateUrl: './pg-cliente.component.html',
  styleUrl: './pg-cliente.component.css'
})
export class PgClienteComponent {

}
