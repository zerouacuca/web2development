import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgFor, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { Observable } from 'rxjs';

interface Request {
  date: string;
  description: string;
  status: string;
  id_employee?: string;
}

@Component({
  selector: 'app-pg-cliente',
  standalone: true,
  imports: [HeaderComponent, NgFor, CommonModule],
  templateUrl: './pg-cliente.component.html',
  styleUrls: ['./pg-cliente.component.css'],
})
export class PgClienteComponent implements OnInit {
  requests: Request[] = [];  // A lista de solicitações será preenchida pela API

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listarSolicitacoes();

    const statusAtualizado = localStorage.getItem('statusSolicitacao');
    if (statusAtualizado) {
      this.requests[0].status = statusAtualizado;
      localStorage.clear();
    }
  }

 
  listarSolicitacoes(): void {
    const usuarioId = sessionStorage.getItem("id");
    this.http.get<Request[]>(`http://localhost:8081/solicitacao/listar/${usuarioId}`).subscribe(
      (data) => {
        console.log(data);
        this.requests = data;
      },
      (error) => {
        console.error('Erro ao buscar as solicitações:', error);
      }
    );
  }

  aprovarServico() {
    this.router.navigate(['orcamentocliente']);
  }

  resgatarServico(index: number) {
    this.requests[index].status = 'APROVADA';
  }

  pagarServico() {
    this.router.navigate(['pagarservico']);
  }

  visualizarServico() {
    this.router.navigate(['visualizarservicos']);
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
      case 'ORÇADA': return 'Aprovar/Rejeitar serviço';
      case 'REJEITADA': return 'Resgatar Serviço';
      case 'ABERTA': return 'Efetuar Orçamento';
      case 'ARRUMADA': return 'Pagar Serviço';
      case 'APROVADA': return 'Em manutenção';
      case 'PAGA': return 'Finalizar Solicitação';
      case 'AGUARDANDO PAGAMENTO': return 'Aguarde Pagamento';
      default: return 'Visualizar serviço';
    }
  }

  getActionButtonClass(status: string): string {
    switch (status) {
      case 'ORÇADA': return 'orcada';
      case 'REJEITADA': return 'rejeitar';
      case 'ABERTA': return 'aberta';
      case 'ARRUMADA': return 'arrumada';
      case 'PAGA': return 'paga';
      case 'AGUARDANDO PAGAMENTO': return 'aguardandoPagamento';
      default: return 'visualizarServico';
    }
  }

  efetuarAcao(request: Request) {
    switch (request.status) {
      case "REJEITADA":
        request.status = "APROVADA";
        break;
      case "ABERTA":
        this.router.navigate(["efetuarorcamento"]);
        break;
      case "ORÇADA":
        this.router.navigate(["orcamentocliente"]);
        break;
      case "ARRUMADA":
        this.router.navigate(["pagarservico"]);
        break;
      case "PAGA":
        this.router.navigate(["finalizarsolicitacao"]);
        break;
      default:
        this.router.navigate(["visualizarservicos"]);
        break;
    }
  }
}
