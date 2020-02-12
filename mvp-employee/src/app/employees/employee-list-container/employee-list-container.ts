import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})

export class EmployeeListContainer implements OnInit{
    employeeDetails$:Observable<Employee>;

    constructor(private employeeService:EmployeeService) {
    }

    ngOnInit()
    {
        this.getAllEmployee()
    }

    getAllEmployee()
    {
        this.employeeDetails$=this.employeeService.getAllData()
    }

    deleteEmployee(id:number)
    {
        this.employeeService.deleteData(id)
        this.getAllEmployee()
    }

    editEmployee(id:number)
    {
        this.employeeService.getId(id)
    }
}