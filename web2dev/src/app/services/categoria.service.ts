import { Injectable } from '@angular/core';
import { Categoria } from '../shared/models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient

const LS_CHAVE = "categorias"

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:4200/categorias/';

  constructor(private http: HttpClient) { }

  listarTodos(): Categoria[] {
    const categorias = localStorage[LS_CHAVE];
    return categorias ? JSON.parse(categorias) : [];
  }
  inserir(categoria: Categoria): void {
    const categorias = this.listarTodos();
    categoria.id = new Date().getTime();
    categorias.push(categoria);
    localStorage[LS_CHAVE] = JSON.stringify(categorias);
  }
  buscarPorId(id: number): Categoria | undefined {
    const categorias = this.listarTodos();
    return categorias.find(categoria => categoria.id === id);
  }
  atualizar(categoria: Categoria): void {
    const categorias = this.listarTodos();
    categorias.forEach((obj, index, objs) => {
      if (categoria.id === obj.id) {
        objs[index] = categoria
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(categorias);
  }
  excluir(id: number): Observable<void> {
    let categorias = this.listarTodos();
    categorias = categorias.filter(categoria => categoria.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(categorias);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
