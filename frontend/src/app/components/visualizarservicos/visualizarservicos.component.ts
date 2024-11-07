import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizarservicos',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './visualizarservicos.component.html',
  styleUrls: ['./visualizarservicos.component.css']
})
export class VisualizarservicosComponent {
  estado: string = 'APROVADA'; // Estado atual da solicitação
  historicoPassos = [
    { dataHora: '2024-09-14 10:00', funcionario: 'João Silva', estado: 'CRIADA' },
    { dataHora: '2024-09-15 14:30', funcionario: 'Maria Oliveira', estado: 'ORÇADA' },
    { dataHora: '2024-09-16 09:00', funcionario: 'Pedro Santos', estado: 'APROVADA' }
  ];

  constructor(private router: Router) {}

  mostrarOrcamento() {
    alert('Visualizando orçamento');
    this.router.navigate(['orcamento']);
  }

  resgatarServico() {
    alert('Serviço resgatado');
    this.router.navigate(['resgatar']);
  }

  pagarServico() {
    alert('Redirecionando para pagamento');
    this.router.navigate(['pagamento']);
  }

  visualizarServico() {
    alert('Visualizando detalhes do serviço');
  }
}
