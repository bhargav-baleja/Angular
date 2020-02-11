import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormContainer } from './employee-form-container';

describe('EmployeeComponent', () => {
  let component: EmployeeFormContainer;
  let fixture: ComponentFixture<EmployeeFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});