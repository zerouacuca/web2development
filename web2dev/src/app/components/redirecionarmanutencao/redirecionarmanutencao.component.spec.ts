import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecionarmanutencaoComponent } from './redirecionarmanutencao.component';

describe('RedirecionarmanutencaoComponent', () => {
  let component: RedirecionarmanutencaoComponent;
  let fixture: ComponentFixture<RedirecionarmanutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirecionarmanutencaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedirecionarmanutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
