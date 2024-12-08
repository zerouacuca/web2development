import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { SolicitacaoCreateDTO } from '../../shared/models/SolicitacaoCreateDTO';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SolicitacaoService } from '../../services/solicitacao.service'; // Importando o serviço

@Component({
  selector: 'app-nova-solicitacao',
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class NovaSolicitacaoComponent implements OnInit {
  solicitacaoForm: FormGroup;
  categorias$: Observable<Categoria[]> | undefined;

  constructor(
    private fb: FormBuilder, 
    private categoriaService: CategoriaService,
    private solicitacaoService: SolicitacaoService, // Injetando o serviço
    private http: HttpClient
  ) {
    this.solicitacaoForm = this.fb.group({
      description: ['', Validators.required],
      categoria: ['', Validators.required],
      defeito: ['', Validators.required],
      idCliente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.listarTodos(); // Carregar as categorias
    const idCliente = sessionStorage.getItem("id");
    if (idCliente) {
      this.solicitacaoForm.patchValue({
        idCliente: idCliente // Preenche o campo idCliente com o valor do sessionStorage
      });
    }
  }

  onSubmit(): void {
    if (this.solicitacaoForm.valid) {
      const formValue: SolicitacaoCreateDTO = this.solicitacaoForm.value;
      console.log(formValue);

      // Chama o método do serviço para enviar os dados
      this.solicitacaoService.createSolicitacao(formValue).subscribe(
        response => {
          console.log('Solicitação criada com sucesso', response);
          // Aqui você pode adicionar ações como navegação ou mensagem de sucesso
        },
        error => {
          console.error('Erro ao criar solicitação', error);
          // Aqui você pode tratar o erro de forma adequada
        }
      );
    }
  }
}
