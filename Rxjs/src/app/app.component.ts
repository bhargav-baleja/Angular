import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  employeeDetails$:Observable<Employee[]>
  constructor(private httpClient:HttpClient){
    this.getEmployeeDetails()

  }

  getEmployeeDetails()
  {
    this.employeeDetails$=this.httpClient.get<Employee[]>('http://localhost:3000/employees')

    this.employeeDetails$.pipe(
      retry(2),
      catchError(err => of([]))
    )
    .subscribe(
      res => console.log('HTTP response',res),
      err => console.log('HTTP error',err),
      () => console.log('HTTP request completed')
    )
  }
}
