import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pagamento {
  solicitacaoId: number;
  dataHoraPagamento: string;
  valor: number;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class PagarServicoService {
  private apiUrl = 'http://localhost:8080/api/pagamento'; // Substitua pelo endpoint correto

  constructor(private http: HttpClient) {}

  confirmarPagamento(pagamento: Pagamento): Observable<any> {
    return this.http.post(`${this.apiUrl}`, pagamento);
  }
}
