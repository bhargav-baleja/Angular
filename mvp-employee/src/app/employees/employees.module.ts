import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal'
import { ReactiveFormsModule } from '@angular/forms'

import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    EmployeeFormContainer,
    EmployeeFormPresentation,
    EmployeeListContainer,
    EmployeeListPresentation,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PortalModule
  ],
  entryComponents:[EmployeeFormPresentation],
  providers:[EmployeeService]
})
export class EmployeesModule { }
