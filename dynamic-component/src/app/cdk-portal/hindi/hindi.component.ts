import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {

  public birthDate:Date
  private toggle:boolean
  public money:number
  public digit:number
  public object:Object
  public toPercentage:number
  public str:string

  constructor()
  {
    this.birthDate=new Date(1999,3,8)
    this.toggle=true
    this.money=160.554469
    this.digit=2.9252952948579
    this.object={name:'Bhargav',city:'Valsad'}
    this.toPercentage=0.4569345639
    this.str='Bhargav'
  }
  
  ngOnInit() {
  }

  get dateFormat()
  {
    return this.toggle?'shortDate':'fullDate'
  }

  public changeToggle():void
  {
    this.toggle=!this.toggle
  }
}
