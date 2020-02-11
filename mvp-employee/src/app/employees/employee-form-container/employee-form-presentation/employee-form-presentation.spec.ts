import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormPresentation } from './employee-form-presentation';

describe('EmployeeComponent', () => {
  let component: EmployeeFormPresentation;
  let fixture: ComponentFixture<EmployeeFormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});