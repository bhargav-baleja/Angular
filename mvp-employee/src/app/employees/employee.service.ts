import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string='http://localhost:3000/employees'
  constructor(private httpClient:HttpClient,private route:Router) { 
  }

  getAllData():Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.baseUrl}`)
  }
  getData(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.baseUrl}`+`/${id}`)
  }
  addData(employee:FormGroup)
  {
    return this.httpClient.post(`${this.baseUrl}`,employee.value).subscribe()
  }
  editData(employee:FormGroup,id:number)
  {
    return this.httpClient.put(`${this.baseUrl}`+`/${id}`,employee.value).subscribe()
  }
  deleteData(id:number)
  {
    if(confirm("Are you Sure ?"+id))
    {
      return this.httpClient.delete(`${this.baseUrl}`+`/${id}`).subscribe()
    }
  }
  getId(id:number)
  {
      this.route.navigate(['/employee-form-container',id])
  }
}
