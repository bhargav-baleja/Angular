import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFormPresenter } from './employee-form-presenter/employee-form.presenter';
import { FormGroup } from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css']
})

export class EmployeeFormPresentation implements OnChanges{

  @Input() employee:Employee
  @Output() createEvent= new EventEmitter<FormGroup>()
  constructor(private empFormPresenter:EmployeeFormPresenter){}
  empForm:FormGroup
  departments:string[]
  ngOnChanges() {
    if(this.employee)
    {
      this.empForm= this.empFormPresenter.createEmployeeForm()
      this.departments=this.empFormPresenter.departments
      console.log(this.employee)
      this.empForm.patchValue(this.employee)
    }
    else
    {
      this.empForm= this.empFormPresenter.createEmployeeForm()
      this.departments=this.empFormPresenter.departments
    }
  }
  get f()
  {
    return this.empForm.controls
  }
  newAddress()
  {
    this.empFormPresenter.addAddress()
  }
  onSubmit()
  {
    this.createEvent.emit(this.empForm)
  }
}