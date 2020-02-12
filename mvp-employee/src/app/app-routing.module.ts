import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainer } from './employees/employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employees/employee-form-container/employee-form-container';


const routes: Routes = [
  { path :'employee-list-container' ,component:EmployeeListContainer},
  { path :'employee-form-container/:id' ,component:EmployeeFormContainer},
  { path :'employee-form-container' ,component:EmployeeFormContainer},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
