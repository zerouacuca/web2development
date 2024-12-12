import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { FuncionarioService } from '../../services/funcionario.service';
import { Solicitacao } from '../../shared/models/solicitacao.model';


@Component({
  selector: 'app-aplicarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent, CommonModule, FormsModule],
  templateUrl: './aplicarmanutencao.component.html',
  styleUrl: './aplicarmanutencao.component.css'
})
export class AplicarmanutencaoComponent implements OnInit {

  isModalOpen: boolean = false; // Controla a exibição do modal
  solicitacao: any = null;
  descricaoManutencao: string = '';
  orientacoesCliente: string = '';

  //coisas do antigo redirecionar
  funcionarioSelecionado: string = "Selecionar";
  funcionarios: any[] = [];
  modalVisivel: boolean = false;
  mensagemModal: string = "";


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Obter o id da URL
    if (id) {
      this.solicitacaoService.buscarPorId(id).subscribe(solicitacao => {
        this.solicitacao = solicitacao;
      });
    }
    this.listarFuncionarios();
  }

  fecharModal(): void {
    this.isModalOpen = false;
  }

  enviarRedirecionamento() {
    this.solicitacaoService.enviarRedirecionamento(this.funcionarioSelecionado);
  }

  listarFuncionarios() {
    const idSession = sessionStorage.getItem("id");  // Obtém o ID do sessionStorage

    // Converte o idSession para número, caso seja uma string
    const idSessionNumber = idSession ? Number(idSession) : null;

    this.funcionarioService.listarTodos().subscribe(
      (funcionarios) => {
        // Filtra os funcionários cujo ID é diferente do ID armazenado no sessionStorage
        this.funcionarios = funcionarios.filter((funcionario) => funcionario.id !== idSessionNumber);
      },
      (error) => {
        console.error('Erro ao listar funcionários', error);
      }
    );
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

  selectOption(funcionario: string) {
    this.funcionarioSelecionado = funcionario;
  }

  mostrarModal() {
    this.mensagemModal = 'Redirecionamento enviado com sucesso!';
    this.modalVisivel = true;
  }

  fecharModal2() {
    this.modalVisivel = false;
  }

  abrirModal(request: Solicitacao): void {
    this.isModalOpen = true;
  }

}
