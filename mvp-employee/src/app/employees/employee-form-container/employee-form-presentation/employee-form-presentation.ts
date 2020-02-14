import { Component,Input, Output, EventEmitter} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css'],
  providers:[EmployeeFormPresenter]
})

export class EmployeeFormPresentation {

  public employeeFormDetails:FormGroup
  public departments:string[]
  private employeeDetails:Employee

  @Input() set employee(value:Employee)
  {
    if(value)
    {
      this.employeeDetails=value
      for(let i=1;i<this.employee.address.length;i++)
      {
        this.newAddress()
      }
      this.employeeFormDetails.patchValue(this.employee)
    }
  }
  get employee()
  {
    return this.employeeDetails
  }
  @Output() createEvent= new EventEmitter<Employee>()

  constructor(private employeeFormPresenter:EmployeeFormPresenter){
    this.employeeFormDetails=this.employeeFormPresenter.createEmployeeForm()
    this.departments=this.employeeFormPresenter.departments
  }

  get f()
  {
    return this.employeeFormDetails.controls
  }
  newAddress():void
  {
    this.employeeFormPresenter.addAddress()
  }
  onSubmit():void
  {
    this.createEvent.emit(this.employeeFormDetails.value)
  }
  removeAddress(index:number):void
  {
    this.employeeFormPresenter.removeGroup(index)
  }
}