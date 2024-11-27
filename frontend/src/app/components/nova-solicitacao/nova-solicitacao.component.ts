import { HeaderComponent } from "../header/header.component";
import { Component, ViewChild } from '@angular/core';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitacaoManutencaoService, Solicitacao } from '../../services/solicitacaomanutencao.service';


const states = [
	'Computador',
	'Celular',
	'Tablet',
	'Fone de ouvido',
	'Mouse',
  'Teclado',
];

@Component({
  selector: 'app-nova-solicitacao',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, HeaderComponent],
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.css']
})
export class NovaSolicitacaoComponent {
  model: any;

  @ViewChild('instance', { static: true })
  instance: NgbTypeahead = new NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  solicitacao: Solicitacao = {
    descricaoEquipamento: '',
    categoriaEquipamento: '',
    descricaoDefeito: '',
};

  constructor(private solicitacaoService: SolicitacaoManutencaoService, private router: Router) {}

  realizarSolicitacao(): void {
    this.solicitacaoService.enviarSolicitacao(this.solicitacao).subscribe({
        next: () => {
            alert('Solicitação realizada com sucesso!');
            this.router.navigate(['pgcliente']);
        },
        error: (err) => {
            alert('Erro ao enviar solicitação. Por favor, tente novamente.');
            console.error('Erro ao enviar solicitação:', err);
        },
    });
  }

search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
  const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
  const inputFocus$ = this.focus$;

  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
          (term === '' ? states : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      ),
  );
};
}