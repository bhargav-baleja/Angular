import { Component, OnInit, Input } from '@angular/core';
import { NameComponent } from '../../name.component';

@Component({
  selector: 'app-gujarati',
  templateUrl: './gujarati.component.html',
  styleUrls: ['./gujarati.component.css']
})
export class GujaratiComponent implements NameComponent{

  @Input() data:string;

}
