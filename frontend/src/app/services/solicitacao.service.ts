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

  buscarPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

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

  enviarRedirecionamento(funcionarioSelecionado: string) {
    /* const url = `${this.apiUrl}/redirecionar/${id}}`;
    const body = { valorOrcado };
    return this.http.put(url, body); */
  }
  
  // Método para criar uma solicitação
  createSolicitacao(solicitacao: SolicitacaoCreateDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, solicitacao);
  }

  buscarSolicitacaoPorId(id: number): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(`${this.apiUrl}/${id}`);
  }

  confirmarOrcamento(id: string, valorOrcado: number): Observable<any> {
    const url = `${this.apiUrl}/orcar/${id}?valorOrcado=${valorOrcado}`;
    const body = { valorOrcado };
    return this.http.put(url, body);
  }

  finalizarSolicitacao(id: string): Observable<any> {
    const url = `${this.apiUrl}/finalizarsolicitacao/${id}`;
    const body = {};
    return this.http.put(url, body);
  }

  efetuarManutencao(
    id: string,
    manutencaoDTO: { descricaoManutencao: string; orientacoesCliente: string },
  ): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/efetuarManutencao/${id}`,
      manutencaoDTO
    );
  }



  // solicitacao.service.ts
  listarFuncionarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/funcionarios`);
  }


  redirecionarManutencao(redirecionamento: any): Observable<any> {
    const url = `${this.apiUrl}/solicitacoes/redirecionar`; // Endpoint para redirecionamento
    return this.http.post<any>(url, redirecionamento);
  }

  // Método para listar solicitações finalizadas agrupadas por data
  listarFinalizadasPorData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listarfinalizadaspordata`);
  }

  // Método para listar solicitações finalizadas agrupadas por categoria
  listarFinalizadasPorCategoria(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listarfinalizadasporcategoria`);
  }

  resgatarServico(id: number){
    return this.http.put(`${this.apiUrl}/resgatar/${id}`, {});
  }

}
