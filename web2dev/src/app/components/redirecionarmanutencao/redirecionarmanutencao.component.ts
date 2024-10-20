import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirecionarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent],
  templateUrl: './redirecionarmanutencao.component.html',
  styleUrls: ['./redirecionarmanutencao.component.css']
})
export class RedirecionarmanutencaoComponent {
  funcionarioSelecionado: string = "Selecionar";
  modalVisivel: boolean = false; 
  mensagemModal: string = ""; 

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(["aplicarmanutencao"]);
  }

  selectOption(funcionario: string) {
    this.funcionarioSelecionado = funcionario;
  }

  mostrarModal() {
    if (this.funcionarioSelecionado === "Selecionar" || this.funcionarioSelecionado === "Maria") {
      this.mensagemModal = "Opção de redirecionamento de manutenção inválida. Selecione um funcionário e que não seja você mesmo";
    } else {
      this.mensagemModal = "Redirecionamento enviado com sucesso!";
    }
    this.modalVisivel = true; 
  }

  fecharModal() {
    this.modalVisivel = false;
  }
}
