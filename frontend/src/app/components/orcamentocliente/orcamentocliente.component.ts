import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MostrarOrcamentoService } from '../../services/mostrarorcamento.service';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from '../../shared/models/solicitacao.model';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-orcamentocliente',
  standalone: true,
  imports: [HeaderComponent, NgIf, CommonModule, FormsModule, RouterModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './orcamentocliente.component.html',
  styleUrls: ['./orcamentocliente.component.css']
})
export class OrcamentoclienteComponent implements OnInit {

  
  solicitacaoId : number = 0;
  solicitacao : Solicitacao | null = null;
  popupVisible = false;
  popupMessage = '';
  modalVisible = false;
  justificativa = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orcamentoService: MostrarOrcamentoService,
    private http: HttpClient,
  ) {
    this.route.params.subscribe(params =>{
      this.solicitacaoId  = params['id'];
    })
  }

  ngOnInit(): void {
    // Busca os dados da solicitação pelo ID
    this.orcamentoService.buscarSolicitacaoPorId(this.solicitacaoId).subscribe({
      next: (data: Solicitacao) => {
        this.solicitacao = data; // Armazena a solicitação retornada
      },
      error: (err) => {
        console.error('Erro ao carregar solicitação:', err);
        alert('Erro ao carregar os dados da solicitação!');
      }
    });
  }

  aprovarOrcamento() {
    this.popupMessage = `Serviço Aprovado no Valor ${this.solicitacao?.preco}`;
    localStorage.setItem('statusSolicitacao', 'APROVADA');
    this.showPopup();
  }

  rejeitarOrcamento() {
    this.modalVisible = true;
  }

  confirmarRejeicao() {
    this.popupMessage = `Serviço Rejeitado: ${this.justificativa}`;
    localStorage.setItem('statusSolicitacao', 'REJEITADA');
    this.closeModal();
    this.showPopup();
  }

  showPopup() {
    this.popupVisible = true;
  }
  
  closeModal() {
    this.modalVisible = false;
  }

  closePopup() {
    this.popupVisible = false;
    this.router.navigate(['pgcliente']);
  }
}
