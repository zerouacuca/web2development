import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';
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
    { date: '2023-10-01', receita: 150.50, categoria: 'Computador' },
    { date: '2023-10-02', receita: 220.75, categoria: 'Notebook' },
    { date: '2023-10-03', receita: 100.00, categoria: 'Celular' },
    { date: '2023-10-03', receita: 200.00, categoria: 'Tablet' },
    { date: '2023-10-08', receita: 80.00, categoria: 'Perifericos' },
    { date: '2023-10-10', receita: 280.00, categoria: 'Computador' },
    { date: '2023-10-10', receita: 70.00, categoria: 'Perifericos' },
    { date: '2023-10-11', receita: 50.00, categoria: 'Perifericos' },
    { date: '2023-10-11', receita: 300.00, categoria: 'Computador' }
  ];

  filteredRequests = this.requests; // Array que será filtrado
  selectedCategory: string = 'all'; // Categoria selecionada

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Código a ser executado durante a inicialização do componente
  }

  // Função de filtragem por categoria
  filtrarPorCategoria(): void {
    if (this.selectedCategory === 'all') {
      this.filteredRequests = this.requests;
    } else {
      this.filteredRequests = this.requests.filter(request => request.categoria === this.selectedCategory);
    }
  }
}
