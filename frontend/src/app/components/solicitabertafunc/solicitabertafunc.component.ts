import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitacao } from '../../shared/models/solicitacao.model';

interface Cliente {
  id: number;
  nome: string;
  login: string;
  email: string;
  telefone: string | null;
  endereco: string | null;
  cpf: string;
}

@Component({
  selector: 'app-solicitabertafunc',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule],
  templateUrl: './solicitabertafunc.component.html',
  styleUrls: ['./solicitabertafunc.component.css']
})

export class SolicitabertafuncComponent implements OnInit {
  requests: Solicitacao[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  filteredRequests: Solicitacao[] = [...this.requests];
  startDate: string | undefined;
  endDate: string | undefined;

  listarSolicitacoes(): void {
    const usuarioId = sessionStorage.getItem("id");  // Substituir por um valor dinâmico
    this.http.get<Solicitacao[]>(`http://localhost:8081/solicitacao/listar/${usuarioId}`).subscribe(
      (data) => {
        console.log(data);
        this.requests = data;
        // Filtra as solicitações com status 'ABERTA'
        this.filteredRequests = this.requests.filter(solicitacao => solicitacao.status === 'ABERTA');
      },
      (error) => {
        console.error('Erro ao buscar as solicitações:', error);
      }
    );
  }  

  ngOnInit() {
    this.listarSolicitacoes();

    const statusAtualizado = localStorage.getItem("statusSolicitacao");
    if (statusAtualizado) {
      this.requests[1].status = statusAtualizado;
      localStorage.removeItem("statusSolicitacao");
    }
  }


  getStatusClass(status: string): string {
    switch (status) {
      case 'ORÇADA': return 'orcada';
      case 'REJEITADA': return 'rejeitada';
      case 'ABERTA': return 'aberta';
      case 'ARRUMADA': return 'arrumada';
      case 'APROVADA': return 'aprovada';
      case 'PAGA': return 'paga';
      case 'AGUARDANDO PAGAMENTO': return 'aguardandoPagamento';
      default: return '';
    }
  }

  getActionButtonText(status: string): string {
    switch (status) {
      case 'ORÇADA': return 'Em espera de aprovação';
      case 'REJEITADA': return 'Resgatar Serviço';
      case 'ABERTA': return 'Efetuar Orçamento';
      case 'ARRUMADA': return 'Efetuar Manutenção?';
      case 'APROVADA': return 'Efetuar Manutenção';
      case 'PAGA': return 'Finalizar Solicitação';
      case 'AGUARDANDO PAGAMENTO': return 'Aguarde Pagamento';
      default: return 'Ação Indefinida';
    }
  }

  getActionButtonClass(status: string): string {
    switch (status) {
      case 'ORÇADA':
        return 'orcada';
      case 'REJEITADA':
        return 'rejeitar';
      case 'ABERTA':
        return 'aberta';
      case 'ARRUMADA':
        return 'arrumada';
      case 'APROVADA':
        return 'aprovada';
      case 'PAGA':
        return 'paga';
      case 'AGUARDANDO PAGAMENTO':
        return 'aguardandoPagamento';
      default:
        return '';
    }
  }

  // Método para efetuar orçamento
  efetuarOrcamento(solicitacao: Solicitacao) {
    this.router.navigate(['efetuarorcamento', solicitacao.id]);
  }

  // Método para obter as propriedades do botão com base no status da solicitação
  getButtonProperties(solicitacao: Solicitacao) {
    switch (solicitacao.status) {
      case 'ABERTA':
        return {
          text: 'Efetuar Orçamento',
          class: 'aprovar',
          action: () => this.efetuarOrcamento(solicitacao)
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
          action: () => { }
        };
      default:
        return {
          text: 'Ação Desconhecida',
          class: '',
          action: () => { }
        };
    }
  }
}