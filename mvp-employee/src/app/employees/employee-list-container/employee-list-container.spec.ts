import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListContainer } from './employee-list-container';

describe('EmployeeComponent', () => {
  let component: EmployeeListContainer;
  let fixture: ComponentFixture<EmployeeListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});