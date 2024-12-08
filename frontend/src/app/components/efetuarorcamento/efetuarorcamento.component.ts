import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { Solicitacao } from '../../shared/models/solicitacao.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-efetuarorcamento',
  standalone: true,
  imports: [HeaderfuncionarioComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './efetuarorcamento.component.html',
  styleUrls: ['./efetuarorcamento.component.css']
})
export class EfetuarorcamentoComponent implements OnInit {

  valorOrcado: number = 0;
  solicitacaoId: number = 0;
  solicitacao: Solicitacao | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService,
    private http: HttpClient,
  ) {
    this.route.params.subscribe(params => {
      this.solicitacaoId = params['id'];
    });
  }

  ngOnInit(): void {
    // Busca os dados da solicitação pelo ID
    this.solicitacaoService.buscarSolicitacaoPorId(this.solicitacaoId).subscribe({
      next: (data: Solicitacao) => {
        this.solicitacao = data; // Armazena a solicitação retornada
      },
      error: (err) => {
        console.error('Erro ao carregar solicitação:', err);
        alert('Erro ao carregar os dados da solicitação!');
      }
    });
  }

  confirmarOrcamento() {
    this.solicitacaoService.confirmarOrcamento(this.solicitacaoId.toString(), this.valorOrcado).subscribe(
      response => {
        console.log('Orçamento confirmado', response);
      },
      error => {
        console.error('Erro ao confirmar orçamento', error);
      }
    );
  }
}
