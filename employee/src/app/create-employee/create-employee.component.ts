import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public operation:string="POST";
  employeeForm:FormGroup
  departments=['Angular','DevOps','QA','.Net','ML','UI/UX'];

  constructor(private fb:FormBuilder,private httpClient:HttpClient) { 

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
  }

  addAddress() {
    const newAddress = this.employeeForm.controls.address as FormArray;
    newAddress.push(this.fb.group({
      city: '',
      street: '',
      zipCode:'',
      state:'',
    }));
  }

  putpostBook()
  {
      let info={
        fullName:this.employeeForm.get('fullName').value,
        emailId:this.employeeForm.get('emailId').value,
        mobileNumber:this.employeeForm.get('mobileNumber').value,
        department:this.employeeForm.get('department').value,
        gender: this.employeeForm.get('gender').value,
        hireDate:this.employeeForm.get('hireDate').value,
        permanent:this.employeeForm.get('permanent').value
        }
        console.log(info)
        this.httpClient.post('http://localhost:3000/employees',info).subscribe();
    }
  }
