import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";

@Component({
  selector: 'app-pg-funcionario',
  standalone: true,
  imports: [HeaderfuncionarioComponent],
  templateUrl: './pg-funcionario.component.html',
  styleUrl: './pg-funcionario.component.css'
})
export class PgFuncionarioComponent {

}
