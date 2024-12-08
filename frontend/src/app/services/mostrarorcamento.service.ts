import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitacao } from '../shared/models/solicitacao.model';

@Injectable({
  providedIn: 'root'
})
export class MostrarOrcamentoService {
  private baseUrl = 'http://localhost:8081/solicitacao/orcamentocliente';

  constructor(private http: HttpClient) {}

  getOrcamento(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  buscarSolicitacaoPorId(id: number): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(`${this.baseUrl}/${id}`);
  }
}
