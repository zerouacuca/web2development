import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excluir-categoria',
  standalone: true,
  imports: [],
  templateUrl: './excluir-categoria.component.html',
  styleUrl: './excluir-categoria.component.css'
})

export class ExcluirCategoriaComponent {
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  excluir(event: Event, funcionario: any): void {
    event.preventDefault(); // Previne o comportamento padrão do botão
    if (confirm(`Tem certeza que deseja excluir a categoria do funcionário ${funcionario.nome}?`)) {
      this.categoriaService.excluir(funcionario.categoriaId).subscribe(() => {
        // Após a exclusão, navegue para a lista de categorias
        this.router.navigate(['/categorias/listar']);
      }, (error: any) => {
        console.error('Erro ao excluir a categoria', error);
      });
    }
  }
}

