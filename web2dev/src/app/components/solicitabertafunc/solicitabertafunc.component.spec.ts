import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitabertafuncComponent } from './solicitabertafunc.component';

describe('SolicitabertafuncComponent', () => {
  let component: SolicitabertafuncComponent;
  let fixture: ComponentFixture<SolicitabertafuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitabertafuncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitabertafuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
