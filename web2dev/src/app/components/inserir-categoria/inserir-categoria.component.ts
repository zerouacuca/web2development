
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";

@Component({
  selector: 'app-inserir-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderfuncionarioComponent],
  templateUrl: './inserir-categoria.component.html',
  styleUrl: './inserir-categoria.component.css'
})
export class InserirCategoriaComponent {

  @ViewChild('formCategoria') formCategoria! : NgForm;
  categoria : Categoria = new Categoria();

  constructor(
    private categoriaService : CategoriaService,
    private router: Router
  ){}

  inserir() : void{
    if(this.formCategoria.form.valid){
      this.categoriaService.inserir(this.categoria);
      this.router.navigate(["/categorias/listar"])
    }
  }

  listarTodos(): Categoria[]{
    return this.categoriaService.listarTodos();
  }

  

}
