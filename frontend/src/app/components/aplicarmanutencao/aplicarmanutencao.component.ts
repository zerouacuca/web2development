import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Solicitacao } from '../../shared/models/solicitacao.model';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-aplicarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent, CommonModule, FormsModule],
  templateUrl: './aplicarmanutencao.component.html',
  styleUrl: './aplicarmanutencao.component.css'
})
export class AplicarmanutencaoComponent implements OnInit {

  solicitacao: any = null;
  descricaoManutencao: string = '';
  orientacoesCliente: string = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Obter o id da URL
    if (id) {
      this.solicitacaoService.buscarPorId(id).subscribe(solicitacao => {
        this.solicitacao = solicitacao;
      });
    }
  }

  efetuarManutencao() {
    if (this.descricaoManutencao.trim() === '' || this.orientacoesCliente.trim() === '') {
      alert('Preencha todos os campos para efetuar a manutenção.');
      return;
    }

    const manutencaoDTO = {
      descricaoManutencao: this.descricaoManutencao,
      orientacoesCliente: this.orientacoesCliente,
    };

    const solicitacaoId = this.solicitacao?.id; // ID da solicitação
    if (solicitacaoId) {
      this.solicitacaoService.efetuarManutencao(solicitacaoId, manutencaoDTO)
        .subscribe({
          next: (response) => {
            alert(`Manutenção efetuada com sucesso!\n${response.message}`);
            localStorage.setItem('statusSolicitacao', 'AGUARDANDO PAGAMENTO');
            this.router.navigate(['pgfuncionario']);
          },
          error: (err) => {
            console.error('Erro ao efetuar manutenção:', err);
            alert('Ocorreu um erro ao tentar efetuar a manutenção. Tente novamente.');
          },
        });
    } else {
      alert('Solicitação não encontrada!');
    }
  }

  redirecionarManutencao() {
    this.router.navigate(["redirecionarmanutencao"]);
  }


}
