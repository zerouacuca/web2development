import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service'; // Sua service para listar os funcionários
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-redirecionarmanutencao',
  standalone: true,
  imports: [HeaderfuncionarioComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './redirecionarmanutencao.component.html',
  styleUrls: ['./redirecionarmanutencao.component.css']
})
export class RedirecionarmanutencaoComponent implements OnInit {
  funcionarioSelecionado: string = "Selecionar";
  funcionarios: any[] = []; 
  modalVisivel: boolean = false; 
  mensagemModal: string = ""; 

  constructor(private router: Router, private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.listarFuncionarios(); 
  }

  listarFuncionarios() {
    this.funcionarioService.listarTodos().subscribe(
      (funcionarios) => {
        this.funcionarios = funcionarios; 
      },
      (error) => {
        console.error('Erro ao listar funcionários', error);
      }
    );
  }

  voltar() {
    this.router.navigate(["aplicarmanutencao"]);
  }

  selectOption(funcionario: string) {
    this.funcionarioSelecionado = funcionario;
  }

  mostrarModal() {
    this.mensagemModal = 'Redirecionamento enviado com sucesso!';
    this.modalVisivel = true;
  }

  fecharModal() {
    this.modalVisivel = false;
  }
}
