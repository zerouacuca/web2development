import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-relatoriodata',
    standalone: true,
    imports: [HeaderfuncionarioComponent, NgFor, CommonModule, FormsModule],
    templateUrl: './relatoriodata.component.html',
    styleUrls: ['./relatoriodata.component.css']
})

export class RelatoriodataComponent implements OnInit {

    requests = [
        { date: '2023-10-01', receita: 150.50 },
        { date: '2023-10-02', receita: 220.75 },
        { date: '2023-10-03', receita: 100.00 },
        { date: '2023-10-03', receita: 200.00 },
        { date: '2023-10-08', receita: 300.00 },
    ];

    filteredRequests = this.requests; // Array que será filtrado

    startDate: string | null = null; // Data inicial do filtro
    endDate: string | null = null;   // Data final do filtro

    constructor(private router: Router) {}

    ngOnInit(): void {
        // Código a ser executado durante a inicialização do componente
    }

    // Função de filtragem por data
    filtrarPorData(): void {
        const start = new Date(this.startDate || '2000-01-01');
        const end = new Date(this.endDate || '2100-12-31');

        this.filteredRequests = this.requests.filter(request => {
            const requestDate = new Date(request.date);
            return requestDate >= start && requestDate <= end;
        });
    }
}
