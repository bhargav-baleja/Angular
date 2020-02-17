import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css']
})

export class EmployeeFormContainer implements OnInit{

  private id:number
  public employeeDetails$:Observable<Employee>;

  constructor(private routes:ActivatedRoute,private employeeService:EmployeeService,private route:Router){
    this.id=this.routes.snapshot.params['id']
  }

  ngOnInit()
  {
    if(this.id)
    {
      this.employeeDetails$=this.employeeService.getData(this.id);
    }
  }

  createEmployee(employeeForm:Employee):void
  {
    if(!this.id)
    {
      this.employeeService.addData(employeeForm).subscribe()
      this.route.navigate(['/employees'])
    }
    else
    {
      this.employeeService.editData(employeeForm,this.id).subscribe()
      this.route.navigate(['/employees'])
    }
  }
}