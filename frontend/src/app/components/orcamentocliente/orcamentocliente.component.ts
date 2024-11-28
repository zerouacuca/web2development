import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MostrarOrcamentoService } from '../../services/mostrarorcamento.service';

@Component({
  selector: 'app-orcamentocliente',
  standalone: true,
  imports: [HeaderComponent, NgIf, CommonModule, FormsModule],
  templateUrl: './orcamentocliente.component.html',
  styleUrls: ['./orcamentocliente.component.css']
})
export class OrcamentoclienteComponent implements OnInit {

  valorOrcado: string = 'R$ 0,00';
  estadoSolicitacao: string = 'ORÇADA';
  descricaoEquipamento: string = 'Não informado';
  categoria: string = 'Não informado';
  descricaoDefeito: string = 'Não informado';
  dataSolicitacao: string = 'Não informado';
  popupVisible = false;
  popupMessage = '';
  modalVisible = false;
  justificativa = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orcamentoService: MostrarOrcamentoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.orcamentoService.getOrcamento(id).subscribe(
        data => {
          this.valorOrcado = data.valorOrcado ? `R$ ${data.valorOrcado}` : 'R$ 0,00';
          this.estadoSolicitacao = data.estado ? data.estado : 'ORÇADA';
          this.descricaoEquipamento = data.descricaoEquipamento || 'Não informado';
          this.categoria = data.categoria || 'Não informado';
          this.descricaoDefeito = data.descricaoDefeito || 'Não informado';
          this.dataSolicitacao = data.dataSolicitacao || 'Não informado';
        },
        error => {
          console.error('Erro ao buscar orçamento:', error);
        }
      );
    }
  }

  aprovarOrcamento() {
    this.popupMessage = `Serviço Aprovado no Valor ${this.valorOrcado}`;
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
