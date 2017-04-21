import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent, ProductDetailsComponent, WelcomComponent } from './components';


import { ProductService, WowMountsService } from './services';


const routes: Route[] = [

 // TO DO add 404 component for wild card  route.
 {path: '', component: WelcomComponent},
 {path: 'welcome', redirectTo: '' },
 {path: 'products', component: ProductListComponent},
 {path: 'products/:id', component: ProductDetailsComponent},
 {path: 'wow-mounts', component: ProductListComponent},
 // {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    WelcomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, WowMountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
