import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarOrcamentoService {
  private baseUrl = 'http://localhost:8080/api/orcamento';

  constructor(private http: HttpClient) {}

  getOrcamento(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
