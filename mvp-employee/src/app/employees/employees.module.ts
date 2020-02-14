import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule} from '@angular/common/http'
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from './employee.service';

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
    ReactiveFormsModule
  ],
  providers:[EmployeeService]
})
export class EmployeesModule { }
