import { TestBed } from '@angular/core/testing';
import { MostrarOrcamentoService } from './mostrarorcamento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MostrarOrcamentoService', () => {
  let service: MostrarOrcamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Adicionado para simular HttpClient
      providers: [MostrarOrcamentoService]
    });
    service = TestBed.inject(MostrarOrcamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
