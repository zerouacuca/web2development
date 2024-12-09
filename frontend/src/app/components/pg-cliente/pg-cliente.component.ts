import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgFor, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { Observable } from 'rxjs';
import { Solicitacao } from '../../shared/models/solicitacao.model';
import { SolicitacaoService } from '../../services/solicitacao.service';

// interface Request {
//   date: string;
//   description: string;
//   status: string;
//   id_employee?: string;
// }

@Component({
  selector: 'app-pg-cliente',
  standalone: true,
  imports: [HeaderComponent, NgFor, CommonModule, RouterModule],
  templateUrl: './pg-cliente.component.html',
  styleUrls: ['./pg-cliente.component.css'],
})
export class PgClienteComponent implements OnInit {
  requests: Request[] = [];  // A lista de solicitações será preenchida pela API

  solicitacoes: Solicitacao[] = [];
  filteredRequests: Solicitacao[] = [];
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private solicitacaoService : SolicitacaoService) { }

    ngOnInit() {
      // Inscreve-se no Observable para carregar as solicitações
      this.solicitacaoService.listarSolicitacoes().subscribe(
        (data: Solicitacao[]) => {
          this.solicitacoes = data;
          this.filteredRequests = [...data]; // Sincroniza lista filtrada
        },
        (error) => {
          console.error('Erro ao carregar as solicitações:', error);
        }
      );
  
      // Atualiza status de uma solicitação específica (se aplicável)
      const statusAtualizado = localStorage.getItem("statusSolicitacao");
      if (statusAtualizado) {
        const index = this.solicitacoes.findIndex(solicitacao => solicitacao.id === 1);
        if (index !== -1) {
          this.solicitacoes[index].status = statusAtualizado;
          localStorage.removeItem("statusSolicitacao");
        }
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

  efetuarAcao(solicitacao: Solicitacao) {
    switch (solicitacao.status) {
      case "REJEITADA":
        solicitacao.status = "ABERTA";
        break;
      case "ABERTA":
        this.router.navigate(["efetuarorcamento", solicitacao.id]);
        break;
      case "ARRUMADA":
        break;
      case "APROVADA":
        this.router.navigate(["aplicarmanutencao"]);
        break;
      case "PAGA":
        this.router.navigate(["finalizarsolicitacao"]);
        break;
      case "ORÇADA":
        this.router.navigate(["orcamentocliente", solicitacao.id])
        break;
      default:
        break;
    }
  }
  // aprovarServico() {
  //   this.router.navigate(['orcamentocliente', solicitacao.id]);
  // }

  // resgatarServico(index: number) {
  //   this.requests[index].status = 'APROVADA';
  // }
// 
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

}
