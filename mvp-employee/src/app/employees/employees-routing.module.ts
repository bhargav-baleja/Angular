import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';


const routes: Routes = [
  { path :'' ,component:EmployeeListContainer},
  { path :'employee-form-container' ,component:EmployeeFormContainer},
  { path :'employee-form-container/:id' ,component:EmployeeFormContainer},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
