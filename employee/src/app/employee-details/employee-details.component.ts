import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/employees').subscribe(data=>{
    this.employeeDetails=data
    console.log(this.employeeDetails);
    })
  }

}
