import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-finalizarsolicit',
  standalone: true,
  imports: [HeaderfuncionarioComponent, FormsModule],
  templateUrl: './finalizarsolicit.component.html',
  styleUrl: './finalizarsolicit.component.css'
})
export class FinalizarsolicitComponent {

  dataHora: string = '';

  constructor(private router: Router) {}

  finalizarSolicitacao() {
    if (this.dataHora) {
      alert(`Solicitação finalizada com sucesso em: ${this.dataHora}`);
      this.router.navigate(['pgfuncionario']);
    } else {
      alert('Por favor, preencha a data e hora da finalização.');
    }
  }
}