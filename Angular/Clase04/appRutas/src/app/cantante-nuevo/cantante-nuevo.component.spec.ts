import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantanteNuevoComponent } from './cantante-nuevo.component';

describe('CantanteNuevoComponent', () => {
  let component: CantanteNuevoComponent;
  let fixture: ComponentFixture<CantanteNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantanteNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantanteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
