import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotorComponent } from './automotor.component';

describe('AutomotorComponent', () => {
  let component: AutomotorComponent;
  let fixture: ComponentFixture<AutomotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
