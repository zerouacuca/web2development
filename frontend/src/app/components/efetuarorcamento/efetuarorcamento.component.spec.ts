import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarorcamentoComponent } from './efetuarorcamento.component';

describe('EfetuarorcamentoComponent', () => {
  let component: EfetuarorcamentoComponent;
  let fixture: ComponentFixture<EfetuarorcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfetuarorcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfetuarorcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
