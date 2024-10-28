import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoclienteComponent } from './orcamentocliente.component';

describe('OrcamentoclienteComponent', () => {
  let component: OrcamentoclienteComponent;
  let fixture: ComponentFixture<OrcamentoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrcamentoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
