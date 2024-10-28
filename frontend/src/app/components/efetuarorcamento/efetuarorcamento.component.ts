import { Component } from '@angular/core';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-efetuarorcamento',
  standalone: true,
  imports: [HeaderfuncionarioComponent],
  templateUrl: './efetuarorcamento.component.html',
  styleUrl: './efetuarorcamento.component.css'
})
export class EfetuarorcamentoComponent {
  constructor(private router: Router) {}
  confirmarOrcamento(){
    this.router.navigate(["solicitabertas"]);
  }

}
