import { Component, OnInit } from '@angular/core';
import * as GuitarProducts from '../data/product.json';

@Component({
  selector: 'app-guitarcards',
  templateUrl: './guitarcards.component.html',
  styleUrls: ['./guitarcards.component.css']
})
export class GuitarcardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product: any = (GuitarProducts as any).default;
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