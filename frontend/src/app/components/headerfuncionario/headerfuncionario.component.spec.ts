import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfuncionarioComponent } from './headerfuncionario.component';

describe('HeaderfuncionarioComponent', () => {
  let component: HeaderfuncionarioComponent;
  let fixture: ComponentFixture<HeaderfuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderfuncionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
