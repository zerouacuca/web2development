import { HeaderComponent } from "../header/header.component";
import { Component, ViewChild } from '@angular/core';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

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
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe, HeaderComponent],
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.css']
})
export class NovaSolicitacaoComponent {
  model: any;

  @ViewChild('instance', { static: true })
  instance: NgbTypeahead = new NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor(private router: Router) {}

  // Método para exibir alerta e redirecionar
  realizarSolicitacao() {
    alert('Solicitação realizada com sucesso!');
    this.router.navigate(["pgcliente"]);
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
