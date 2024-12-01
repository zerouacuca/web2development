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

  // Método 'remover' para excluir o funcionário
  remover(event: Event, funcionario: Funcionario): void {
    event.preventDefault();  // Evita o comportamento padrão do link (navegar para outra página)

    // Lógica para remover o funcionário
    this.funcionarioService.remover(funcionario.id).subscribe(
      () => {
        this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id);  // Remove o funcionário da lista
      },
      (error) => {
        console.error('Erro ao remover funcionário', error);
      }
    );
  }
}
