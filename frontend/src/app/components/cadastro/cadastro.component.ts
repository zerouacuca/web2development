import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../services/cep.service'; 
import { HttpClient } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [provideNgxMask()]
})
export class CadastroComponent {
  cpf: string = '';
  nome: string = '';
  email: string = '';
  tel: string = '';
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  localidade: string = '';
  estado: string = ''; // Adicionando campo para o estado
  numero: string = ''; // Adicionando campo para o número
  complemento: string = ''; // Adicionando campo para o complemento

  constructor(private cepService: CepService, private http: HttpClient) {}

  buscarCep() {
    this.cepService.buscarCep(this.cep).subscribe(
      (data) => {
        this.rua = data.logradouro;
        this.bairro = data.bairro;
        this.localidade = data.localidade;
        this.estado = data.uf; // Preenchendo o estado com o dado da API
      },
      (error) => {
        console.error('Erro ao buscar CEP', error);
      }
    );
  }

  onSubmit() {
    const cadastroData = {
      cpf: this.cpf,
      nome: this.nome,
      email: this.email,
      tel: this.tel,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      localidade: this.localidade,
      estado: this.estado, // Adicionando estado ao objeto de cadastro
      numero: this.numero, // Adicionando número ao objeto de cadastro
      complemento: this.complemento // Adicionando complemento ao objeto de cadastro
    };

    this.http.post('/clientes/autocadastro', cadastroData).subscribe(
      () => {
        alert('Cadastro realizado com sucesso! Verifique seu email para receber a senha.')
      },
      (error) => {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar: ' + error.error.message);
      }
    );
  }
}
