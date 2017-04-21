import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';


const routes: Route[] = [
 {path: '', component: },
 {path: 'products', component: },
 
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HttpMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
