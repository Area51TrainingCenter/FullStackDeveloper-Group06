import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantanteEdicionComponent } from './cantante-edicion.component';

describe('CantanteEdicionComponent', () => {
  let component: CantanteEdicionComponent;
  let fixture: ComponentFixture<CantanteEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantanteEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantanteEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
