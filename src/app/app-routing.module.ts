import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { GuitarcardsComponent } from './guitarcards/guitarcards.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViolincardsComponent } from './violincards/violincards.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { StoredealsComponent } from './deals/storedeals/storedeals.component';
import { CartItemsComponent } from './cartitem/cartitem.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DrumsComponent } from './drums/drums.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path : '', component: CarouselComponent} , 
  {path : 'cards', component: CardsComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'guitarcards' , component: GuitarcardsComponent},
  {path : 'allproducts' , component: AllproductsComponent},
  {path : 'violincards' , component: ViolincardsComponent},
  {path : 'register' , component: RegisterComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'prod_details' , component : ProductdetailsComponent},
  {path : 'login' , component: LoginComponent},
  {path :'deals',component:StoredealsComponent},
  {path : 'cartitem', component: CartItemsComponent},
  {path : 'keyboard' , component : KeyboardComponent},
  {path : 'drums' , component: DrumsComponent},
  {path : 'admin' , component: AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
