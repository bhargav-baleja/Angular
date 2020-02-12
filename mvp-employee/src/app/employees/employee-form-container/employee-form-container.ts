import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css']
})

export class EmployeeFormContainer implements OnInit{

  id:number
  employeeDetails$:Observable<Employee>;

  constructor(private routes:ActivatedRoute,private employeeService:EmployeeService){
    this.id=this.routes.snapshot.params['id']
  }

  ngOnInit()
  {
    if(this.id)
    {
      this.employeeDetails$=this.employeeService.getData(this.id);
    }
  }

  createEmployee(empForm:FormGroup)
  {
    if(!this.id)
    {
      this.employeeService.addData(empForm)
    }
    else
    {
      this.employeeService.editData(empForm,this.id)
    }
  }
}