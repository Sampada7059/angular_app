import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { NewcardsComponent } from './newcards/newcards.component';
import { ViolincardsComponent } from './violincards/violincards.component';
const routes: Routes = [
  {path : ' ', component: CarouselComponent} , 
  {path : 'cards', component: CardsComponent},
  {path : 'details', component: DetailsComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'newcards', component: NewcardsComponent},
  {path : 'violincards', component: ViolincardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
