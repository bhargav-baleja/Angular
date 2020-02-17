import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {

  private apiUrl:string

  constructor(private httpClient:HttpClient,private route:Router) { 
    this.apiUrl=environment.baseUrl
  }

  public getAllData():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}`)
  }
  public getData(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.apiUrl}`+`/${id}`)
  }
  public addData(employee:Employee):Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.apiUrl}`,employee)
  }
  public editData(employee:Employee,id:number):Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.apiUrl}`+`/${id}`,employee)
  }
  public deleteData(id:number):Observable<Employee>
  {
      return this.httpClient.delete<Employee>(`${this.apiUrl}`+`/${id}`)
  }
  public searchData(searchText:string):Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}?q=${searchText}`)
  }
  public sortData(sortField:string):Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}?${sortField}`)
  }
}
