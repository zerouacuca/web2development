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
 
  

  constructor(private router: Router) {
    const agora: Date = new Date();
    const dataHoraFormatada: string = agora.toLocaleString('pt-BR', {
      dateStyle: 'long',
      timeStyle: 'short'
    });

    this.dataHora = `${dataHoraFormatada}`
  }

  finalizarSolicitacao() {
    const agora: Date = new Date();
    const dataHoraFormatada: string = agora.toLocaleString('pt-BR', {
      dateStyle: 'long',
      timeStyle: 'short'
    });

    this.dataHora = `${dataHoraFormatada}`
    if (this.dataHora) {
      alert(`Solicitação finalizada com sucesso em: ${this.dataHora}`);
      this.router.navigate(['pgfuncionario']);
    }
  }
}