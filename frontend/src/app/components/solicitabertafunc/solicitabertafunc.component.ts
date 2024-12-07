import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cliente {
  id: number;
  nome: string;
  login: string;
  email: string;
  telefone: string | null;
  endereco: string | null;
  cpf: string;
}

interface Request {
  date: string;
  description: string;
  status: string;
  id_employee: string;
  cliente: Cliente;
}

@Component({
  selector: 'app-solicitabertafunc',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule],
  templateUrl: './solicitabertafunc.component.html',
  styleUrls: ['./solicitabertafunc.component.css']
})

export class SolicitabertafuncComponent implements OnInit {
  requests: Request[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  filteredRequests: Request[] = [...this.requests];
  startDate: string | undefined;
  endDate: string | undefined;

  listarSolicitacoes(): void {
    const usuarioId = sessionStorage.getItem("id");  // Substituir por um valor dinâmico
    this.http.get<Request[]>(`http://localhost:8081/solicitacao/listar/${usuarioId}`).subscribe(
      (data) => {
        console.log(data);
        this.requests = data;
        // Filtra as solicitações com status 'ABERTA'
        this.filteredRequests = this.requests.filter(request => request.status === 'ABERTA');
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

  efetuarAcao(request: Request) {
    switch (request.status) {
      case "REJEITADA":
        request.status = "ABERTA";
        break;
      case "ABERTA":
        this.router.navigate(["efetuarorcamento"]);
        break;
      case "ARRUMADA":
        break;
      case "APROVADA":
        this.router.navigate(["aplicarmanutencao"]);
        break;
      case "PAGA":
        this.router.navigate(["finalizarsolicitacao"]);
        break;
      default:
        break;
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

  onFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.filterRequests(value);
  }

  onStartDateChange(event: Event) {
    const date = (event.target as HTMLInputElement).value;
    this.filterRequestsByDate(date, 'start');
  }

  onEndDateChange(event: Event) {
    const date = (event.target as HTMLInputElement).value;
    this.filterRequestsByDate(date, 'end');
  }

  filterRequests(filter: string) {
    const today = new Date().toISOString().split('T')[0];
    if (filter === 'today') {
      this.filteredRequests = this.requests.filter(request => request.date.split(' ')[0] === today);
    } else if (filter === 'all') {
      this.filteredRequests = [...this.requests];
    } else {
      this.filteredRequests = this.requests;
    }
  }

  filterRequestsByDate(date: string, type: 'start' | 'end') {
    if (type === 'start') {
      this.startDate = date;
    } else {
      this.endDate = date;
    }

    const start = this.startDate ? new Date(this.startDate) : new Date(0);
    const end = this.endDate ? new Date(this.endDate) : new Date();

    this.filteredRequests = this.requests.filter(request => {
      const requestDate = new Date(request.date);
      return requestDate >= start && requestDate <= end;
    });
  }



  // Método para efetuar orçamento
  efetuarOrcamento(solicitacao: Request) {
    solicitacao.status = 'APROVADA';
    this.router.navigate(['efetuarorcamento']);
  }

  // Método para obter as propriedades do botão com base no status da solicitação
  getButtonProperties(solicitacao: Request) {
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