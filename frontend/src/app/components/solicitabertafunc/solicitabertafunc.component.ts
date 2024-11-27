import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

// Interface para Cliente
interface Cliente {
  id: number;
  nome: string;
  login: string;
  email: string;
  telefone: string | null;
  endereco: string | null;
  cpf: string;
}

// Interface para Solicitação
interface Request {
  id: number;
  description: string;
  date: string;
  status: string;
  cliente: Cliente;  // Adiciona a propriedade 'cliente'
}

@Component({
  selector: 'app-solicitabertafunc',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule],
  templateUrl: './solicitabertafunc.component.html',
  styleUrls: ['./solicitabertafunc.component.css']
})
export class SolicitabertafuncComponent {

  requests: Request[] = [];
  filteredRequests: Request[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  // Método para listar solicitações
  listarSolicitacoes(): void {
    const usuarioId = 1;  // Substituir por um valor dinâmico
    this.http.get<Request[]>(`http://localhost:8081/solicitacao/listarabertas/${usuarioId}`).subscribe(
      (data) => {
        console.log(data);
        this.requests = data;
        this.filterRequestsByStatus();  // Chama o filtro após carregar os dados
      },
      (error) => {
        console.error('Erro ao buscar as solicitações:', error);
      }
    );
  }

  // Método para filtrar solicitações com status 'ABERTA'
  filterRequestsByStatus(): void {
    this.filteredRequests = this.requests.filter(request => request.status === 'ABERTA');
  }

  ngOnInit() {
    this.listarSolicitacoes();  // Chama o método para listar solicitações
    
    // Verifica se há status atualizado no localStorage
    const statusAtualizado = localStorage.getItem("statusSolicitacao");
    if (statusAtualizado) {
      this.requests[1].status = statusAtualizado;
      localStorage.removeItem("statusSolicitacao");
    }
  }

  // Método para efetuar orçamento
  efetuarOrcamento(request: Request) {
    request.status = 'APROVADA';
    this.router.navigate(['efetuarorcamento']);
  }

  // Método para obter as propriedades do botão com base no status da solicitação
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

  // Método para filtrar solicitações por data
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
}