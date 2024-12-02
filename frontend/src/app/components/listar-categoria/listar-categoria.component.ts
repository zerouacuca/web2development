import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../shared/models/categoria.model';
import { CommonModule } from '@angular/common';
import { HeaderfuncionarioComponent } from '../headerfuncionario/headerfuncionario.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-categoria',
  standalone: true,
  imports: [CommonModule, HeaderfuncionarioComponent, RouterModule],
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css'],
})
export class ListarCategoriaComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listarTodos().subscribe({
      next: (categorias) => {
        this.categorias = categorias;  // Carregar as categorias recebidas
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  listarCategorias(): void {
    this.categoriaService.listarTodos().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Erro ao listar funcionários', error);
      }
    );
  }

  remover(categoria: Categoria): void {
    if (confirm(`Deseja realmente remover a categoria "${categoria.nome}"?`)) {
      this.categoriaService.remover(categoria.id!).subscribe(
        () => {
          this.categorias = this.categorias.filter((c) => c.id !== categoria.id);
          alert('Categoria removida com sucesso!');
        },
        (erro) => console.error('Erro ao remover categoria', erro)
      );
    }
  }
}
