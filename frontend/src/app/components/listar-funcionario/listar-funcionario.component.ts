import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../shared/models/funcionario.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-funcionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css'
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario | null = null;
  exibirSenha: boolean = false;
  
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  listarFuncionarios(): void {
    this.funcionarioService.listarTodos().subscribe(
      (data: Funcionario[]) => {
        this.funcionarios = data;
      },
      (error) => {
        console.error('Erro ao listar funcionários', error);
      }
    );
  }

  
  abrirModal(funcionario: Funcionario): void {
    this.funcionarioSelecionado = funcionario;
    const modal = document.getElementById('funcionarioModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  
  fecharModal(): void {
    this.funcionarioSelecionado = null;
    const modal = document.getElementById('funcionarioModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  alternarExibicaoSenha(): void {
    this.exibirSenha = !this.exibirSenha;
  }

  remover(event: Event, funcionario: Funcionario): void {
    event.preventDefault();  

    this.funcionarioService.remover(funcionario.id).subscribe(
      () => {
        this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id); 
      },
      (error) => {
        console.error('Erro ao remover funcionário', error);
      }
    );
  }
}
