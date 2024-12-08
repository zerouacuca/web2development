import { Component, OnInit } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-efetuarorcamento',
  standalone: true,
  imports: [HeaderfuncionarioComponent, RouterModule],
  templateUrl: './efetuarorcamento.component.html',
  styleUrl: './efetuarorcamento.component.css'
})
export class EfetuarorcamentoComponent implements OnInit {
  
  id: number = 0;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService
  ) {}
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));


  }
  
  confirmarOrcamento() {
    this.router.navigate(["solicitabertas"]);
  }
}
