import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../services/cep.service'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
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

  constructor(private cepService: CepService) {}

  buscarCep() {
    this.cepService.buscarCep(this.cep).subscribe(
      (data) => {
        this.rua = data.logradouro;
        this.bairro = data.bairro;
        this.localidade = data.localidade;
      },
      (error) => {
        console.error('Erro ao buscar CEP', error);
      }
    );
  }

  onSubmit() {
    console.log('Form submitted', {
      cpf: this.cpf,
      nome: this.nome,
      email: this.email,
      tel: this.tel,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      localidade: this.localidade
    });
  }
}
