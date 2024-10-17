import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-inserir-categoria',
  standalone: true,
  imports: [FormsModule],
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

}
