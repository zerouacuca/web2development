import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router, RouterModule } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { Solicitacao } from '../../shared/models/solicitacao.model';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-pg-funcionario',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule, RouterModule],
  templateUrl: './pg-funcionario.component.html',
  styleUrls: ['./pg-funcionario.component.css']
})
export class PgFuncionarioComponent implements OnInit {
  
  solicitacoes: Solicitacao[] = [];
  filteredRequests: Solicitacao[] = [];
  startDate: string | undefined;
  endDate: string | undefined;

  constructor(
    private router: Router,
    private solicitacaoService: SolicitacaoService
  ) {}

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
      case 'ORÇADA': return 'orcada';
      case 'REJEITADA': return 'rejeitar';
      case 'ABERTA': return 'aberta';
      case 'ARRUMADA': return 'arrumada';
      case 'APROVADA': return 'aprovada';
      case 'PAGA': return 'paga';
      case 'AGUARDANDO PAGAMENTO': return 'aguardandoPagamento';
      default: return '';
    }
  }
}