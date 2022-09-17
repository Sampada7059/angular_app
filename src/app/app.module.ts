import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NewcardsComponent } from './newcards/newcards.component';
import { ViolincardsComponent } from './violincards/violincards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    CarouselComponent,
    CardsComponent,
    DetailsComponent,
    ProductsComponent,
    NewcardsComponent,
    ViolincardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
