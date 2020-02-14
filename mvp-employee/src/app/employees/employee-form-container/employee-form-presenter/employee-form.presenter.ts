import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Injectable()

export class EmployeeFormPresenter {
    public address:FormArray
    public departments:string[]=['Angular','DevOps','QA','.Net','ML','UI/UX'];
    public employeeForm:FormGroup
    
    constructor(private fb:FormBuilder){}

    createEmployeeForm():FormGroup
    {
      return this.employeeForm=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(4)]],
      emailId:['',[Validators.required]],
      address:this.fb.array([this.createItem()]),
      mobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      department:[''],
      gender: ['male'],
      hireDate:[''],
      permanent:['']
      })
    }
    createItem(): FormGroup {
        return this.fb.group({
          city: [''],
          street: [''],
          zipCode:[''],
          state:[''],
        });
      }

    addAddress():void
    {
        this.address = this.employeeForm.get('address') as FormArray;
        this.address.push(this.createItem())
    }

    removeGroup(index: number):void
    {
      const control = <FormArray>this.employeeForm.controls['address'];
      control.removeAt(index);
  }
}
