import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';

interface Request {
  date: string;
  name: string;
  description: string;
  status: string;
}
@Component({
  selector: 'app-solicitabertafunc',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule],
  templateUrl: './solicitabertafunc.component.html',
  styleUrl: './solicitabertafunc.component.css'
})
export class SolicitabertafuncComponent {
 
    requests: Request[] = [
      { date: '2024-09-15 10:00', name: 'Pedro Roiter', description: 'Impressora HP LaserJet', status: 'ABERTA' },
      { date: '2024-09-14 09:30', name: 'Leila Xen', description: 'Notebook Dell Inspiron', status: 'ABERTA' },
      { date: '2024-09-11 14:00', name: 'Fulano de Tal', description: 'Mouse Microsoft', status: 'ABERTA' },
      { date: '2024-09-15 10:00', name: 'Mariana Liu', description: 'Impressora HP LaserJet', status: 'ABERTA' },
      { date: '2024-09-15 10:00', name: 'Gilgamesh', description: 'Impressora HP LaserJet', status: 'ABERTA' }
    ];
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      const statusAtualizado = localStorage.getItem('statusSolicitacao');
      if (statusAtualizado) {
        this.requests[0].status = statusAtualizado;
        localStorage.clear();
      }
    }
  
    efetuarOrcamento(request: Request) {
      request.status = 'APROVADA';
      this.router.navigate(['efetuarorcamento']);
    }
  
    getButtonProperties(request: Request) {
      switch (request.status) {
        case 'ABERTA':
          return {
            text: 'Efetuar Orçamento',
            class: 'aprovar',
            action: () => this.efetuarOrcamento(request)
          };
        case 'ARRUMADA':
          return {
            text: 'Finalizar',
            class: 'finalizar',
            action: () => alert('Serviço finalizado!')
          };
        case 'REJEITADA':
          return {
            text: 'Rejeitada',
            class: 'rejeitada',
            action: () => {} 
          };
        default:
          return {
            text: 'Ação Desconhecida',
            class: '',
            action: () => {}
          };
      }
    }
}
  

