import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
@Component({
  selector: 'app-storedeals',
  templateUrl: './storedeals.component.html',
  styleUrls: ['./storedeals.component.css']
})
export class StoredealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
