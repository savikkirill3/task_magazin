import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ShopPageComponent} from './components/shop-page/shop-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: MainComponent},
      {path: 'shop/:id', component: ShopPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
