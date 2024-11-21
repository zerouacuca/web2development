import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Solicitacao {
    descricaoEquipamento: string;
    categoriaEquipamento: string;
    descricaoDefeito: string;
}

@Injectable({
    providedIn: 'root',
})
export class SolicitacaoManutencaoService {
    private apiUrl = 'http://localhost:8080/api/solicitacaomanutencao';

    constructor(private http: HttpClient) {}

    enviarSolicitacao(solicitacao: Solicitacao): Observable<any> {
        return this.http.post(this.apiUrl, solicitacao);
    }
}
