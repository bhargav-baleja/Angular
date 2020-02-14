import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})

export class EmployeeListPresentation{
    @Input() public employees$:Observable<Employee>;
    @Output() public deleteEvent=new EventEmitter<number>();
    constructor() {}

    onDelete(id:number):void
    {
        this.deleteEvent.emit(id)
    }
}