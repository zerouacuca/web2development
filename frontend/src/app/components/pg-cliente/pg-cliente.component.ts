import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgFor, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  requests = [
    {
      date: '2024-09-15 10:00',
      description: 'Impressora HP LaserJet',
      status: 'ORÇADA',
    },
    {
      date: '2024-09-14 09:30',
      description: 'Notebook Dell Inspiron',
      status: 'APROVADA',
    },
    {
      date: '2024-09-13 08:45',
      description: 'Monitor Samsung',
      status: 'REJEITADA',
    },
    {
      date: '2024-09-12 11:15',
      description: 'Teclado Logitech',
      status: 'ARRUMADA',
    },
    {
      date: '2024-09-11 14:00',
      description: 'Mouse Microsoft',
      status: 'OUTRO',
    },
  ];

  ngOnInit() {
    const statusAtualizado = localStorage.getItem('statusSolicitacao');
    if (statusAtualizado) {
      this.requests[0].status = statusAtualizado;
      localStorage.clear();
    }
  }

  constructor(private router: Router) { }

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
      case 'ORÇADA':
        return 'orcada';
      case 'REJEITADA':
        return 'rejeitar';
      case 'ABERTA':
        return 'aberta';
      case 'ARRUMADA':
        return 'arrumada';
      case 'PAGA':
        return 'paga';
      case 'AGUARDANDO PAGAMENTO':
        return 'aguardandoPagamento';
      default:
        return 'visualizarServico';
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

