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
    @Output() public deleteEvent=new EventEmitter<number>();
    @Output() public searchEvent=new EventEmitter<string>();
    @Output() public sortEvent=new EventEmitter<string>();
    constructor() {}

    public onDelete(id:number):void
    {
        this.deleteEvent.emit(id)
    }
    public searchData(event:string):void
    {
        this.searchEvent.emit(event)
    }
    public sortAscending():void
    {
        this.sortBy=document.activeElement.id
        this.sortEvent.emit(`_sort=${this.sortBy}&_order=asc`)
    }
    public sortDescending():void
    {
        this.sortBy=document.activeElement.id
        this.sortEvent.emit(`_sort=${this.sortBy}&_order=desc`)
    }
}