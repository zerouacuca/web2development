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
