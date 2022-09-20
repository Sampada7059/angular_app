import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { GuitarcardsComponent } from './guitarcards/guitarcards.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdsComponent } from './ads/ads.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViolincardsComponent } from './violincards/violincards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    CarouselComponent,
    CardsComponent,
    ProductsComponent,
    GuitarcardsComponent,
    CounterComponent,
    CounterchildComponent,
    AdsComponent,
    AllproductsComponent,
    ViolincardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
