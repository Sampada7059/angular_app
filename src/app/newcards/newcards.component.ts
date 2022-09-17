import { Component, OnInit } from '@angular/core';
import * as newcards from '../data/product.json';

@Component({
  selector: 'app-newcards',
  templateUrl: './newcards.component.html',
  styleUrls: ['./newcards.component.css']
})
export class NewcardsComponent implements OnInit {

  constructor() { }
  GuitarProducts = [
    {
      "pid": "100",
      "pname": "Revolt RT39C Acoustic Guitar",
      "status": "Active",
      "color": "green",
      "price": "5450",
      "image": "https://www.musicstores.in/5152-home_default/revolt-rt39c-acoustic-guitar-.jpg"
    },
    {
      "pid": "101",
      "pname": "Carlos Marshello CS39C Acoustic Guitar",
      "status": "InActive",
      "color": "green",
      "price": "16000",
      "image": "https://www.musicstores.in/5078-home_default/carlos-marshello-cs39c-acoustic-guitar-red.jpg"
    },
    
    {
      "pid": "102",
      "pname": "Kepma ES36-E TRANS K10 Semi Acoustic Guitar",
      "status": "Out of Stock",
      "color": "yellow",
      "price": "13500",
      "image": "https://www.musicstores.in/5370-home_default/kepma-es36-e-trans-acoustic-guitar.jpg"
    },
    
    {
      "pid": "103",
      "pname": "Ibanez AEG8E Semi Acoustic Guitar",
      "status": "Active",
      "color": "green",
      "price": "25000",
      "image": "https://www.musicstores.in/3671-home_default/ibanez-aeg8e-semi-acoustic-guitar.jpg"
    },
    
    {
      "pid": "104",
      "pname": "Kepma A1CE Semi Acoustic Guitar - Matte",
      "status": "InActive",
      "color": "red",
      "price": "25000",
      "image": "https://www.musicstores.in/2662-home_default/kepma-a1ce-semi-acoustic-guitar-matte.jpg"
    },
    
    {
      "pid": "105",
      "pname": "Fender Squier Affinity Stratocaster Electric Guitar",
      "status": "Active",
      "color": "green",
      "price": "21000",
      "image": "https://www.musicstores.in/3146-extra_large/fender-squier-affinity-stratocaster-electric-guitar.jpg"
    },
    
    {
      "pid": "106",
      "pname": "Ibanez RG350DXZ Electric Guitar",
      "status": "Out of Stock",
      "color": "yellow",
      "price": "39000",
      "image": "https://www.musicstores.in/3184-home_default/ibanez-rg350dxz-electric-guitar.jpg"
    },
    {
      "pid": "107",
      "pname": "ESP LTD B-105 5-String Bass Guitar",
      "status": "Out of Stock",
      "color": "yellow",
      "price": "29000",
      "image": "https://www.musicstores.in/717-home_default/esp-ltd-b-105-5-string-bass-guitar.jpg"
    },
    {
      "pid": "108",
      "pname": "Cort CR100 Electric Guitar",
      "status": "Out of Stock",
      "color": "yellow",
      "price": "18000",
      "image": "https://www.musicstores.in/3032-home_default/cort-cr100-electric-guitar.jpg"
    }
  ]
  ngOnInit(): void {
  }
prod:any=(newcards as any).default;
}
