import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
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
        { date: '2023-10-01', receita: 150.50, numero: '12345', categoria: 'Computador' },
        { date: '2023-10-02', receita: 220.75, numero: '12346', categoria: 'Notebook' },
        { date: '2023-10-03', receita: 100.00, numero: '12347', categoria: 'Celular' },
        { date: '2023-10-03', receita: 200.00, numero: '12348', categoria: 'Tablet' },
        { date: '2023-10-08', receita: 80.00, numero: '12349', categoria: 'Perifericos' },
    ];

    filteredRequests = this.requests;
    startDate: string = '';
    endDate: string = '';
    modalVisivel = false;
    modalImprimirVisivel = false;
    pedidoSelecionado: any = {};

    ngOnInit() {
        this.filtrarPorData();
    }

    filtrarPorData() {
        if (!this.startDate && !this.endDate) {
            this.filteredRequests = this.requests;
        } else {
            const start = new Date(this.startDate);
            const end = new Date(this.endDate);
            this.filteredRequests = this.requests.filter(request => {
                const requestDate = new Date(request.date);
                return requestDate >= start && requestDate <= end;
            });
        }
    }

    conferir(request: any) {
        this.pedidoSelecionado = request;
        this.modalVisivel = true;
    }

    abrirModalImprimir() {
        this.modalImprimirVisivel = true;
    }

    fecharModal() {
        this.modalVisivel = false;
    }

    fecharModalImprimir() {
        this.modalImprimirVisivel = false;
    }

    confirmarImpressao() {
        console.log('Relatório a ser impresso:', this.filteredRequests);
        this.fecharModalImprimir();
    }

    calcularSomaReceita(): number {
        return this.filteredRequests.reduce((soma, request) => soma + request.receita, 0);
    }
}
