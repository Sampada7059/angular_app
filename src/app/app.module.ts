import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { DealsComponent } from './deals/deals.component';
import { StoredealsComponent } from './deals/storedeals/storedeals.component';
import { CartItemsComponent } from './cartitem/cartitem.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DrumsComponent } from './drums/drums.component';



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
    ViolincardsComponent,
    RegisterComponent,
    ContactComponent,
    ProductdetailsComponent,
    LoginComponent,
    DealsComponent,
    StoredealsComponent,
    CartItemsComponent,
    KeyboardComponent,
    DrumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
