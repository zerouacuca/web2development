import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgClienteComponent } from './pg-cliente.component';

describe('PgClienteComponent', () => {
  let component: PgClienteComponent;
  let fixture: ComponentFixture<PgClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
