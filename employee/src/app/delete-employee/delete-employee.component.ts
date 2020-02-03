import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  public id:number;
  constructor(private httpClient:HttpClient,private routes:ActivatedRoute) { }
  
  ngOnInit() {
    this.id=this.routes.snapshot.params['id'];
    this.httpClient.delete(`http://localhost:3000/employees/${this.id}`).subscribe()
  }

}
