import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainer } from './employees/employee-list-container/employee-list-container';


const routes: Routes = [
  { path :'employee-list-container' ,component:EmployeeListContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
