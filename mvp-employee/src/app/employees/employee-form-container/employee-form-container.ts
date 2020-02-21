import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css']
})

export class EmployeeFormContainer implements OnInit{

  private id:number;       //Stores id of Employee

  public employeeDetails$:Observable<Employee>;      //Stores the details of Employee

  constructor(private routes:ActivatedRoute,private employeeService:EmployeeService,private route:Router)
  {
    this.id=this.routes.snapshot.params['id'];     //Gets the id of Employee from routeLink
  }

  ngOnInit()
  {
    if(this.id)
    {
      alert("Updating existing Employee")
      this.employeeDetails$=this.employeeService.getData(this.id);   
    }
    else
    {
      alert("Creating new Employee");
    }
  }

  /**
   * Creating or Updating an Employee
   * @param employeeForm 
   */
  patchEmployee(employeeForm:Employee):void
  {
    if(!this.id)
    {
      this.employeeService.addData(employeeForm).subscribe(()=>
      {
        alert("Employee Created");
        this.route.navigate(['/employees']);
      })
    }
    else
    {
      this.employeeService.editData(employeeForm,this.id).subscribe(()=>
      {
        alert("Employee Updated");
        this.route.navigate(['/employees']);
      })
      
    }
  }
}