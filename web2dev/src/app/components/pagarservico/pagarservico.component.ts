import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

interface Pagamento {
  solicitacaoId: number;
  dataHoraPagamento: string;
  valor: number;
  estado: string;
}
@Component({
  selector: 'app-pagarservico',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pagarservico.component.html',
  styleUrl: './pagarservico.component.css'
})
export class PagarservicoComponent {
  valor: number = 450.00;
  constructor(private router: Router) {}
  confirmarPagamento(){
      const dataHoraPagamento = new Date().toLocaleString();
      const solicitacaoId = 123; // Exemplo de ID de solicitação, pode vir da API ou do local storage
  
      const pagamento: Pagamento = {
        solicitacaoId,
        dataHoraPagamento,
        valor: this.valor,
        estado: 'PAGO'
      };
  
      alert('Pagamento realizado com sucesso!');
      this.router.navigate(["pgcliente"]);
  }
}
