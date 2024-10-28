import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFuncionarioComponent } from './pg-funcionario.component';

describe('PgFuncionarioComponent', () => {
  let component: PgFuncionarioComponent;
  let fixture: ComponentFixture<PgFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgFuncionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
