import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})

export class EmployeeListPresentation{
  
    sortBy:string

    @Input() public employees$:Observable<Employee>;
    @Output() public delete
    @Output() public search
    @Output() public sort

    constructor() {
      this.delete=new EventEmitter<number>();
      this.search=new EventEmitter<string>();
      this.sort=new EventEmitter<string>();
    }

    public onDelete(id:number):void
    {
        this.delete.emit(id)
    }
    public searchData(event:string):void
    {
        this.search.emit(event)
    }
    public sortAscending():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=asc`)
    }
    public sortDescending():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=desc`)
    }
}