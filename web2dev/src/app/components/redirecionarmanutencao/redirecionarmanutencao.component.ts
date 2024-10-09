import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-redirecionarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent],
  templateUrl: './redirecionarmanutencao.component.html',
  styleUrl: './redirecionarmanutencao.component.css'
})
export class RedirecionarmanutencaoComponent {
  constructor(private router: Router) {}
  voltar(){
    this.router.navigate(["aplicarmanutencao"]);
  }
}
