import { Component } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'; //p448
import { Funcionario } from '../../shared/models/funcionario.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-funcionario',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css'
})
export class ListarFuncionarioComponent {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();
  }
  listarTodos(): Funcionario[] {
    return this.funcionarioService.listarTodos();
  }
 
  remover($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o funcionário ${funcionario.nome}?`)) {
      this.funcionarioService.remover(funcionario.id!);
      this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id);
    }
  }
}