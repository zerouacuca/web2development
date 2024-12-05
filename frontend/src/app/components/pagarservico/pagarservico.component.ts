import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagarServicoService } from '../../services/pagarservico.service';

interface Pagamento {
  solicitacaoId: number;
  dataHoraPagamento: string;
  valor: number;
  estado: string;
}

@Component({
  selector: 'app-pagarservico',
  standalone: true,
  imports: [],
  templateUrl: './pagarservico.component.html',
  styleUrls: ['./pagarservico.component.css'],
  providers: [PagarServicoService],
})
export class PagarservicoComponent {
  valor: number = 450.0;

  constructor(
    private pagarServicoService: PagarServicoService,
    private router: Router
  ) {}

  confirmarPagamento() {
    const dataHoraPagamento = new Date().toISOString(); // Formato padrão para envio ao back-end
    const solicitacaoId = 123; // Este ID pode ser dinâmico
    const pagamento: Pagamento = {
      solicitacaoId,
      dataHoraPagamento,
      valor: this.valor,
      estado: 'PAGO',
    };

    this.pagarServicoService.confirmarPagamento(pagamento).subscribe({
      next: (response) => {
        alert('Pagamento realizado com sucesso!');
        this.router.navigate(['pgcliente']);
      },
      error: (err) => {
        console.error('Erro ao processar o pagamento:', err);
        alert('Erro ao realizar pagamento, tente novamente mais tarde.');
      },
    });
  }
}
