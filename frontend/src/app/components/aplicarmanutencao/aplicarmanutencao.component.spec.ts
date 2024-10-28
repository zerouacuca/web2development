import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarmanutencaoComponent } from './aplicarmanutencao.component';

describe('AplicarmanutencaoComponent', () => {
  let component: AplicarmanutencaoComponent;
  let fixture: ComponentFixture<AplicarmanutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicarmanutencaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicarmanutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
