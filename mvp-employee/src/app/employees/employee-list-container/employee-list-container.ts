import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})

export class EmployeeListContainer implements OnInit{

    public employeeDetails$:Observable<Employee[]>;     //Observable for storing employee details
    
    constructor(private employeeService:EmployeeService) {}     

    ngOnInit()
    {
        this.getAllEmployee();
    }

    /**
     * Gets all employee details
     */
    private getAllEmployee():void     
    {
        this.employeeDetails$=this.employeeService.getAllData();
    }

    /**
     * Deleting Employee with the particular id
     * @param id  
     */
    public deleteEmployee(id:number):void
    {
        if(confirm("Are you Sure ? "))
        {
            this.employeeService.deleteData(id).subscribe(()=>
            {
                alert("Employee Deleted");
                this.getAllEmployee();
            })
        }
        else
        {
            alert("Employee not Deleted");
        }
    }

    /**
     * Searching data from Employee List
     * @param searchInfo 
     */
    public searchText(searchInfo:string):void
    {
        this.employeeDetails$=this.employeeService.searchData(searchInfo);
    }

    /**
     * Sorting data for a particular field
     * @param sortField 
     */
    public sortData(sortField:string):void
    {
        this.employeeDetails$=this.employeeService.sortData(sortField);
    }
}