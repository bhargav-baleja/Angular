import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  public operation:string="POST";
  employee;
  employeeForm:FormGroup
  Id:number
  departments=['Angular','DevOps','QA','.Net','ML','UI/UX'];

  constructor(private fb:FormBuilder,private httpClient:HttpClient,private routes:ActivatedRoute) { 

  this.employeeForm=this.fb.group({
    fullName:['',[Validators.required]],
    emailId:['',[Validators.required]],
    address:this.fb.array([]),
    mobileNumber:['',[Validators.required]],
    department:[''],
    gender: ['male'],
    hireDate:[''],
    permanent:['']
  })
  }

  ngOnInit() {
    this.Id=this.routes.snapshot.params['id'];
    if(this.Id)
    {
    this.httpClient.get(`http://localhost:3000/employees/${this.Id}`).subscribe(data=>{
      console.log(data);
      this.employee=data
      this.employeeForm.setValue(
        {
          fullName:this.employee.fullName,
          emailId:this.employee.emailId,
          address:this.employee.address,
          mobileNumber:this.employee.mobileNumber,
          department:this.employee.department,
          gender: this.employee.gender,
          hireDate:this.employee.hireDate,
          permanent:this.employee.permanent
        }
      )
    })
  }
}

  onSubmit()
  {
        if(this.Id)
        {
          this.httpClient.put(`http://localhost:3000/employees/${this.Id}`,this.employeeForm.value).subscribe()
        }
        else
        {
            this.httpClient.post('http://localhost:3000/employees',this.employeeForm.value).subscribe();
        }
  }
  addAddress()
  {
    const address = this.employeeForm.controls.address as FormArray;
    address.push(this.fb.group({
      city: [''],
      street: [''],
      zipCode:[''],
      state:[''],
    }));
  }
  resetForm()
  {
      this.employeeForm.reset()
  }

  }

  