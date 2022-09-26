import { Component, OnInit } from '@angular/core';
import * as KeyboardProducts from '../data/keyboard.json' 
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  keyboard: any = (KeyboardProducts as any).default;
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

