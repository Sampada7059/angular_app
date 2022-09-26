import { Component, OnInit } from '@angular/core';
import * as DrumProducts from '../data/drums.json'
@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.css']
})
export class DrumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  drums: any = (DrumProducts as any).default;
  productDetail = false;
  showproductDetailsToggle(){
    this.productDetail=!this.productDetail;
  }
  toggleContent(){
    var content='';
    if(this.productDetail){
      content = 'fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }
  
}
