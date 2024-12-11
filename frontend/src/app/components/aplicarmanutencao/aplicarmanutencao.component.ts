import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aplicarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent, CommonModule, FormsModule],
  templateUrl: './aplicarmanutencao.component.html',
  styleUrl: './aplicarmanutencao.component.css'
})
export class AplicarmanutencaoComponent {

  descricaoManutencao: string = '';
  orientacoesCliente: string = '';

  constructor(private router: Router) {}

  efetuarManutencao() {
    if (this.descricaoManutencao.trim() === "" || this.orientacoesCliente.trim() === "") {
      alert("Preencha todos os campos para efetuar a manutenção.");
      return;
    }

    const dataHoraManutencao = new Date().toLocaleString();
    const funcionario = "Carlos Souza";

    alert(`
        Manutenção efetuada com sucesso!
        Descrição: ${this.descricaoManutencao}
        Orientações para o Cliente: ${this.orientacoesCliente}
        Data/Hora: ${dataHoraManutencao}
        Funcionário: ${funcionario}
    `);

    this.router.navigate(["pgfuncionario"]);

    localStorage.setItem("statusSolicitacao", "AGUARDANDO PAGAMENTO");
  }

  redirecionarManutencao() {
    this.router.navigate(["redirecionarmanutencao"]);
  }

  
}
