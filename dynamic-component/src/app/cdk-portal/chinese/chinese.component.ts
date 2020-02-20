import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit {

  public name:string
  public emojiType:string
  constructor() { 
    this.name='BHARGAV'
  }
  
  ngOnInit() {
  }

}
