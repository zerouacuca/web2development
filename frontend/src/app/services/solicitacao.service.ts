import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitacaoCreateDTO } from '../shared/models/SolicitacaoCreateDTO';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private apiUrl = 'http://localhost:8081/solicitacao';

  constructor(private http: HttpClient) { }

  // Método para criar a solicitação
  createSolicitacao(solicitacao: SolicitacaoCreateDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, solicitacao);
  }
}