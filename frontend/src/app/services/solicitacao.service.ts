import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitacaoCreateDTO } from '../shared/models/SolicitacaoCreateDTO';
import { Solicitacao } from '../shared/models/solicitacao.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private apiUrl = 'http://localhost:8081/solicitacao';

  constructor(private http: HttpClient) { }

  // Método para listar todas as solicitações do usuário
  listarSolicitacoes(): Observable<Solicitacao[]> {
    const usuarioId = sessionStorage.getItem("id");
    return this.http.get<Solicitacao[]>(`${this.apiUrl}/listar/${usuarioId}`);
  }

  // Método para listar solicitações abertas (filtradas no backend ou no frontend)
  listarSolicitacoesAbertas(): Observable<Solicitacao[]> {
    const usuarioId = sessionStorage.getItem("id");
    return new Observable(observer => {
      this.http.get<Solicitacao[]>(`${this.apiUrl}/listar/${usuarioId}`).subscribe(
        (data) => {
          // Filtra as solicitações com status 'ABERTA'
          const filteredRequests = data.filter(solicitacao => solicitacao.status === 'ABERTA');
          observer.next(filteredRequests); // Retorna os dados filtrados
          observer.complete(); // Finaliza o Observable
        },
        (error) => {
          console.error('Erro ao buscar as solicitações:', error);
          observer.error(error); // Emite o erro
        }
      );
    });
  }

  // Método para criar uma solicitação
  createSolicitacao(solicitacao: SolicitacaoCreateDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, solicitacao);
  }
}
