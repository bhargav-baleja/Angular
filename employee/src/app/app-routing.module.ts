import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
  {
    path:"",component:EmployeeDetailsComponent,
  },
  {
    path:"employee-details",component:EmployeeDetailsComponent,
  },
  {
    path:"create-employee/:id" ,component:CreateEmployeeComponent
  },
  {
    path:"create-employee" ,component:CreateEmployeeComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
