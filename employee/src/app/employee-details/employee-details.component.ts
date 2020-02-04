import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails;
  public searchText='';
  order:string='fullName'
  constructor(private httpClient:HttpClient,private orderPipe: OrderPipe) { 
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/employees').subscribe(data=>{
    this.employeeDetails=data
    console.log(this.employeeDetails);
    console.log(this.orderPipe.transform(this.employeeDetails, this.order));
    })
  }
  deleEmployee(id:number)
  {
    if(confirm("Are you Sure ?"))
    {
    this.httpClient.delete(`http://localhost:3000/employees/${id}`).subscribe()
  }
}
}
