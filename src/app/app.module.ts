import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShopsComponent} from './components/shops/shops.component';
import {MapComponent} from './components/map/map.component';
import {MainComponent} from './components/main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import {AddShopDialogComponent} from './components/button/add-shop-dialog/add-shop-dialog.component';
import {ShopsService} from './shared/services/shops.service';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ShopPageComponent} from './components/shop-page/shop-page.component';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {MapsService} from './shared/services/maps.service';
import {apiKey} from './shared/apiKey';
import { ProdctsListComponent } from './components/shop-page/prodcts-list/prodcts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    MapComponent,
    MainComponent,
    AddShopDialogComponent,
    HeaderComponent,
    ButtonComponent,
    ShopPageComponent,
    ProdctsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: `${apiKey}`
    })
  ],
  providers: [
    ShopsService,
    MapsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddShopDialogComponent
  ]
})
export class AppModule {
}
