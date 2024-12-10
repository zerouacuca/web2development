import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../shared/models/funcionario.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";

@Component({
  selector: 'app-listar-funcionario',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderfuncionarioComponent],
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario | null = null;
  exibirSenha: boolean = false;

  constructor(private funcionarioService: FuncionarioService) {}

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
  }

  fecharModal(): void {
    this.funcionarioSelecionado = null;
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
