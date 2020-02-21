import { Component,Input, Output, EventEmitter} from '@angular/core';

import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css'],
  providers:[EmployeeFormPresenter]
})

export class EmployeeFormPresentation {

  public employeeFormDetails:FormGroup;       //Variable of type FormGroup for storing FormGroup

  public departments:string[];               //Variable for storing Departments

  private employeeDetails:Employee;         //Stores the Employee Details

  @Input() set employee(value:Employee)
  {
    if(value)
    {
      this.employeeDetails=value;
      for(let i=1;i<this.employee.address.length;i++)
      {
        this.newAddress();
      }
      this.employeeFormDetails.patchValue(this.employee);
    }
  }
  get employee()
  {
    return this.employeeDetails;
  }

  @Output() create:EventEmitter<Employee>    

  constructor(private employeeFormPresenter:EmployeeFormPresenter)
  {
    this.create= new EventEmitter<Employee>();     //Creates a create event

    this.employeeFormDetails=this.employeeFormPresenter.createEmployeeForm();

    this.departments=this.employeeFormPresenter.departments;
  }

  get controls()
  {
    return this.employeeFormDetails.controls;
  }

  /**
   * Creates new address
   */
  public newAddress():void
  {
    this.employeeFormPresenter.addAddress();
  }

  /**
   * on Submit emits an event of type Employee
   */
  public onSubmit():void
  {
    this.create.emit(this.employeeFormDetails.value);
  }

  /**
   * Removes address from formGroup from given index
   * @param index 
   */
  public removeAddress(index:number):void
  {
    this.employeeFormPresenter.removeGroup(index);
  }
}