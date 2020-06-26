import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonasComponent } from './donas.component';

describe('DonasComponent', () => {
  let component: DonasComponent;
  let fixture: ComponentFixture<DonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
