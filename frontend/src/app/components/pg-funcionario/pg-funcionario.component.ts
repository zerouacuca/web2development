import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';

interface Request {
    date: string;
    description: string;
    status: string;
    id_employee: string;
}

@Component({
    selector: 'app-pg-funcionario',
    standalone: true,
    imports: [HeaderfuncionarioComponent, NgFor, CommonModule],
    templateUrl: './pg-funcionario.component.html',
    styleUrls: ['./pg-funcionario.component.css']
})
export class PgFuncionarioComponent implements OnInit {
    requests: Request[] = [
        { date: "2024-09-15 10:00", description: "Impressora HP LaserJet", status: "ORÇADA", id_employee: "001" },
        { date: "2024-09-14 09:30", description: "Notebook Dell Inspiron", status: "APROVADA", id_employee: "001" },
        { date: "2024-09-13 08:45", description: "Monitor Samsung", status: "REJEITADA", id_employee: "002" },
        { date: "2024-09-12 11:15", description: "Teclado Logitech", status: "ARRUMADA", id_employee: "002" },
        { date: "2024-10-01 09:00", description: "Mouse Logitech", status: "ABERTA", id_employee: "002" },
        { date: "2024-10-01 09:00", description: "Teclado Logitech", status: "PAGA", id_employee: "002" }
    ];

    filteredRequests: Request[] = [...this.requests];
    startDate: string | undefined;
    endDate: string | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
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
            case 'FINALIZADA': return 'finalizada';
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
            case 'FINALIZADA': return 'finalizada';
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
            case 'FINALIZADA':
                    return 'finalizada';
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
}
