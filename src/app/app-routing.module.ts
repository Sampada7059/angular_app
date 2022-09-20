import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { GuitarcardsComponent } from './guitarcards/guitarcards.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViolincardsComponent } from './violincards/violincards.component';

const routes: Routes = [
  {path : ' ', component: CarouselComponent} , 
  {path : 'cards', component: CardsComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'guitarcards' , component: GuitarcardsComponent},
  {path : 'allproducts' , component: AllproductsComponent},
  {path : 'violincards' , component: ViolincardsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
