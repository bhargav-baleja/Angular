import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string='http://localhost:3000/employees'
  constructor(private httpClient:HttpClient) { 
  }

  getAllData():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
  }
  getData(id:number)
  {
    return this.httpClient.get(this.baseUrl+id)
  }
  addData(employee)
  {
    return this.httpClient.post(this.baseUrl,employee)
  }
  editData(employee,id:number)
  {
    return this.httpClient.put(this.baseUrl+id,employee)
  }
  deleteData(id:number)
  {
    if(confirm("Are you Sure ?"+id))
    {
      return this.httpClient.delete(`${this.baseUrl}`+`/${id}`).subscribe()
    }
  }
}
