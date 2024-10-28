import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatoriocategoria',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './relatoriocategoria.component.html',
  styleUrls: ['./relatoriocategoria.component.css']
})
export class RelatorioCategoriaComponent implements OnInit {

  requests = [
    { date: '2023-10-01', receita: 150.50, categoria: 'Computador', numero: '12345' },
    { date: '2023-10-02', receita: 220.75, categoria: 'Notebook', numero: '12346' },
    { date: '2023-10-03', receita: 100.00, categoria: 'Celular', numero: '12347' },
    { date: '2023-10-03', receita: 200.00, categoria: 'Tablet', numero: '12348' },
    { date: '2023-10-08', receita: 80.00, categoria: 'Perifericos', numero: '12349' },
  ];

  filteredRequests = this.requests;
  selectedCategory = 'all';
  modalVisivel = false;
  modalImprimirVisivel = false;
  pedidoSelecionado: any = {};

  ngOnInit() {
    this.filtrarPorCategoria();
  }

  filtrarPorCategoria() {
    if (this.selectedCategory === 'all') {
      this.filteredRequests = this.requests; 
    } else {
      this.filteredRequests = this.requests.filter(request => request.categoria === this.selectedCategory);
    }
  }

  calcularSomaReceita(): number {
    return this.filteredRequests.reduce((acc, request) => acc + request.receita, 0);
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
}
