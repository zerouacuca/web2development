import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriodataComponent } from './relatoriodata.component';

describe('RelatoriodataComponent', () => {
  let component: RelatoriodataComponent;
  let fixture: ComponentFixture<RelatoriodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoriodataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
