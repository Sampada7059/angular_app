import { Component, OnInit } from '@angular/core';
import * as ViolinProducts from '../data/violin.json';
@Component({
  selector: 'app-violincards',
  templateUrl: './violincards.component.html',
  styleUrls: ['./violincards.component.css']
})
export class ViolincardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  violin: any = (ViolinProducts as any).default;
  Detail = false;
  showproductDetailsToggle(){
    this.Detail=!this.Detail;
  }
  toggleContent(){
    var content='';
    if(this.Detail){
      content = 'fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }
  
}
