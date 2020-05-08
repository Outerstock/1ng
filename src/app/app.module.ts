import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ChildComponent } from './child/child.component';
import { HelloService } from './hello.service';
import { ApimapComponent } from './apimap/apimap.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: ProductListComponent ,
      },
      {
        path: 'products/:productId',
        component: ProductDetailsComponent 
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'hello',
        component: HelloworldComponent
      },
      {
        path: 'apimap',
        component: ApimapComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MapComponent,
    HelloworldComponent,
    ChildComponent,
    ApimapComponent,
    HomeComponent
  ],
  providers: [ HttpClientModule , HelloService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/