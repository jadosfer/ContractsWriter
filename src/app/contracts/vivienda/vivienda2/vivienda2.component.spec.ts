import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vivienda2Component } from './vivienda2.component';

describe('Vivienda2Component', () => {
  let component: Vivienda2Component;
  let fixture: ComponentFixture<Vivienda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vivienda2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vivienda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
