import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
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
    selector: 'app-pg-funcionario',
    standalone: true,
    imports: [HeaderfuncionarioComponent, NgFor, CommonModule, RouterModule ],
    templateUrl: './pg-funcionario.component.html',
    styleUrls: ['./pg-funcionario.component.css']
})
export class PgFuncionarioComponent implements OnInit {
    solicitacoes: Solicitacao[] = [];

    constructor(private router: Router, private http: HttpClient) { }

    filteredRequests: Solicitacao[] = [...this.solicitacoes];
    startDate: string | undefined;
    endDate: string | undefined;   

    listarSolicitacoes(): void {
        const usuarioId = sessionStorage.getItem("id");
        this.http.get<Solicitacao[]>(`http://localhost:8081/solicitacao/listar/${usuarioId}`).subscribe(
            (data) => {
                console.log(data);
                this.solicitacoes = data;
                this.filteredRequests = [...this.solicitacoes];  // Atualiza filteredRequests
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
            this.solicitacoes[1].status = statusAtualizado;
            localStorage.removeItem("statusSolicitacao");
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
}
