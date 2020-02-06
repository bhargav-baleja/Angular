import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails;
  public searchText='';
  order:string=''
  constructor(private httpClient:HttpClient) { 
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/employees').subscribe(data=>{
    this.employeeDetails=data
    console.log(this.employeeDetails);
    })
  }
  deleEmployee(id:number)
  {
    if(confirm("Are you Sure ?"))
    {
    this.httpClient.delete(`http://localhost:3000/employees/${id}`).subscribe()
  }
}
toggleUp()
{
  this.order='fullName'
}
toggleDown()
{
  this.order=''
}
}
