import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesadoComponent } from './cesado.component';

describe('CesadoComponent', () => {
  let component: CesadoComponent;
  let fixture: ComponentFixture<CesadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
