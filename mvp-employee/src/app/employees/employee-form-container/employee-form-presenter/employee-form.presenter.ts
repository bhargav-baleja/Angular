import { Injectable } from '@angular/core';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Injectable()

export class EmployeeFormPresenter {

    public address:FormArray;
    public id:number;
    public departments:string[]=['Angular','DevOps','QA','.Net','ML','UI/UX'];
    public employeeForm:FormGroup;
    
    constructor(private fb:FormBuilder){}

    /**
     * Creates a new Employee Form
     */
    public createEmployeeForm():FormGroup
    {
      return this.employeeForm=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(4)]],
      emailId:['',[Validators.required]],
      address:this.fb.array([this.createAddress()]),
      mobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      department:[''],
      gender: ['male'],
      hireDate:[''],
      permanent:['']
      })
    }

    /**
     * Creates a new address
     */
    public createAddress(): FormGroup 
    {
        return this.fb.group({
          city: [''],
          street: [''],
          zipCode:[''],
          state:[''],
        });
      }

    /**
     * Adding new address
     */
    public addAddress():void
    {
        this.address = this.employeeForm.get('address') as FormArray;
        this.address.push(this.createAddress());
    }

    /**
     * Removes an address
     * @param index 
     */
    public removeGroup(index: number):void
    {
      const control = <FormArray>this.employeeForm.controls['address'];
      control.removeAt(index);
    }
}