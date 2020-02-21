import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private apiUrl:string     //Stores apiUrl for getting employee details
  
  constructor(private httpClient:HttpClient) 
  { 
    this.apiUrl=environment.baseUrl    
  }

  /**
   * Gets all Employees from local storage
   */
  public getAllData():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/employees`)
  }

  /**
   * Gets a single Employee from local storage
   */
  public getData(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.apiUrl}/employees/${id}`)
  }

  /**
   * Posts data of new Employee in local storage
   * @param employee 
   */
  public addData(employee:Employee):Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.apiUrl}/employees`,employee)
  }

  /**
   * Updates data of existing Employee in local storage
   * @param employee 
   * @param id 
   */
  public editData(employee:Employee,id:number):Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.apiUrl}/employees/${id}`,employee)
  }

  /**
   * Deletes an Employee from local storage
   * @param id 
   */
  public deleteData(id:number):Observable<Employee>
  {
      return this.httpClient.delete<Employee>(`${this.apiUrl}/employees/${id}`)
  }

  /**
   * Searchs data of Employee from local storage
   * @param searchText 
   */
  public searchData(searchText:string):Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/employees?q=${searchText}`)
  }

  /**
   * Sorts data of Employee according to given field from local storage
   * @param sortField 
   */
  public sortData(sortField:string):Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/employees?${sortField}`)
  }
}
