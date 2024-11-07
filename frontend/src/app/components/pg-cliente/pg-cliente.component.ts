import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component"; 
import { LoginComponent } from '../../auth/login/login.component'; 
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-pg-cliente',
  standalone: true,
  imports: [HeaderComponent, LoginComponent, NgFor, NgIf, CommonModule, RouterLink],
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

  constructor(private router: Router) {}

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
}

