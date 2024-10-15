import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Funcionario } from '../../shared/models/funcionario.model';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.css'
})
export class EditarFuncionarioComponent implements OnInit {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario: Funcionario = new Funcionario();
  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.funcionarioService.buscarPorId(id);
    if (res !== undefined)
      this.funcionario = res;
    else
      throw new Error("Funcionario não encontrada: id = " + id);
  }
  atualizar(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.atualizar(this.funcionario);
      this.router.navigate(['/funcionarios/listar']);
    }
  }
}
