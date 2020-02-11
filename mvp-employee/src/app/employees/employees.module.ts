import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';


@NgModule({
  declarations: [
    EmployeeFormContainer,
    EmployeeListPresentation,
    EmployeeFormPresentation,
    EmployeeListContainer,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
  ]
})
export class EmployeesModule { }
