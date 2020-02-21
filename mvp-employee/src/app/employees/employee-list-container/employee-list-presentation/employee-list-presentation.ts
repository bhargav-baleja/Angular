import { Component, Input, EventEmitter, Output } from '@angular/core';

import { EmployeeListPresenter } from '../employee-list-presenter/employee-list.presenter';


@Component({
  selector: 'employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css'],
  providers:[EmployeeListPresenter]
})

export class EmployeeListPresentation{
  
    private sortBy:string;      //Stores the field by which sorting is done

    @Input() public employees$:Employee;        //Stores the Employee Details 

    @Output() public delete:EventEmitter<number>;       

    @Output() public search:EventEmitter<string>;      

    @Output() public sort:EventEmitter<string>;     

    constructor() 
    {
      this.delete=new EventEmitter<number>();       //Creates a delete event of type number

      this.search=new EventEmitter<string>();      //Creates a serach event of type string

      this.sort=new EventEmitter<string>();        //Creates an delete event of type string
    }

    /**
     * Emits an delete event with id
     * @param id 
     */
    public onDelete(id:number):void
    {
        this.delete.emit(id)
    }

    /**
     * Emits an search event with text to be searched
     * @param searchText 
     */
    public searchData(searchText:string):void
    {
        this.search.emit(searchText)
    }

    /**
     * Emits an sort event with the field for ascending order
     */
    public sortAscending():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=asc`)
    }

    /**
     * Emits an sort event with the field for descending order
     */
    public sortDescending():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=desc`)
    }
}