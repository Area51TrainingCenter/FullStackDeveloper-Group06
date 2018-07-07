import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoComponent } from './activo.component';

describe('ActivoComponent', () => {
  let component: ActivoComponent;
  let fixture: ComponentFixture<ActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
