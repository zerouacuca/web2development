import { TestBed } from '@angular/core/testing';
import { SolicitacaoManutencaoService } from './solicitacaomanutencao.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolicitacaoManutencaoService', () => {
  let service: SolicitacaoManutencaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Simulação do HttpClient
      providers: [SolicitacaoManutencaoService],
    });
    service = TestBed.inject(SolicitacaoManutencaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
