import { Component } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../shared/models/categoria.model';
import { CommonModule } from '@angular/common';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listar-categoria',
  standalone: true,
  imports: [CommonModule, HeaderfuncionarioComponent, RouterModule],
  templateUrl: './listar-categoria.component.html',
  styleUrl: './listar-categoria.component.css'
})
export class ListarCategoriaComponent {
  categorias : Categoria[] = [];

  constructor(private categoriaService : CategoriaService){}

  listarTodos() : Categoria[]{
    return this.categoriaService.listarTodos();
    // return[
    //   new Categoria(1, "Notebook"),
    //   new Categoria(2, "teclado")
    // ]
  }

  ngOnInit() : void{
    this.categorias = this.listarTodos();
  }

}
