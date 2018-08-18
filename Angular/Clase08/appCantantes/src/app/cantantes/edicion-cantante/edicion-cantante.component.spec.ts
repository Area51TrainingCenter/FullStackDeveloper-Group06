import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionCantanteComponent } from './edicion-cantante.component';

describe('EdicionCantanteComponent', () => {
  let component: EdicionCantanteComponent;
  let fixture: ComponentFixture<EdicionCantanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionCantanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionCantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
