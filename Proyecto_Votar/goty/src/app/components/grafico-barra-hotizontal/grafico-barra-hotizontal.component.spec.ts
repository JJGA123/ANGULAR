import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarraHotizontalComponent } from './grafico-barra-hotizontal.component';

describe('GraficoBarraHotizontalComponent', () => {
  let component: GraficoBarraHotizontalComponent;
  let fixture: ComponentFixture<GraficoBarraHotizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarraHotizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarraHotizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
