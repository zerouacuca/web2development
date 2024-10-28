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

  atualizar() : void{
    if(this.formCategoria.form.valid){
      this.categoriaService.atualizar(this.categoria);
      this.router.navigate(["/categorias/listar"])
    }
  }

  listarTodos(): Categoria[]{
    return this.categoriaService.listarTodos();
  }
}
