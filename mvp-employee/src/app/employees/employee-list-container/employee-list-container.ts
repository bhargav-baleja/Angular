import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})

export class EmployeeListContainer implements OnInit{
    public employeeDetails$:Observable<Employee[]>;
    
    constructor(private employeeService:EmployeeService,private route:Router) {
      
    }

    ngOnInit()
    {
        this.getAllEmployee()
    }

    private getAllEmployee():void
    {
        this.employeeDetails$=this.employeeService.getAllData()
    }

    public deleteEmployee(id:number):void
    {
        this.employeeService.deleteData(id).subscribe(()=>
        {
            this.getAllEmployee()
        })
    }
    public searchText(searchInfo:string):void
    {
        this.employeeDetails$=this.employeeService.searchData(searchInfo)
    }
    public sortData(sortField:string):void
    {
        this.employeeDetails$=this.employeeService.sortData(sortField)
    }
}