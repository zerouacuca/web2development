import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarsevicosComponent } from './visualizarsevicos.component';

describe('VisualizarsevicosComponent', () => {
  let component: VisualizarsevicosComponent;
  let fixture: ComponentFixture<VisualizarsevicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarsevicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarsevicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
