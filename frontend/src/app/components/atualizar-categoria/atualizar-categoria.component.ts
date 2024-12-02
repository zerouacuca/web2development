import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atualizar-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './atualizar-categoria.component.html',
  styleUrl: './atualizar-categoria.component.css'
})
export class AtualizarCategoriaComponent {
  @ViewChild('formCategoria') formCategoria! : NgForm;
  categoria : Categoria = new Categoria();

  constructor(
    private categoriaService : CategoriaService,
    private router: Router
  ){}

  atualizar(): void {
    if (this.categoria.id) {
      // Passar o id e o objeto categoria para o serviço
      this.categoriaService.atualizar(this.categoria.id, this.categoria).subscribe(
        response => {
          console.log('Categoria atualizada com sucesso:', response);
          // Aqui você pode redirecionar o usuário ou mostrar uma mensagem de sucesso
        },
        error => {
          console.error('Erro ao atualizar categoria:', error);
        }
      );
    }
  }
}
