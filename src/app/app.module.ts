

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent, PostListComponent, PostDetailsComponent } from './components';


import { PostService, WowMountsService } from './services';
import { LimitToPipe } from './pipes';



const routes: Route[] = [
 {path: '', redirectTo: 'posts', pathMatch: 'full'},
 {path: 'posts', component: PostsComponent, children: [
  //  {path: 'posts', component: PostListComponent},
   {path: 'details/:id', component: PostDetailsComponent},
 ]},
// {path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    LimitToPipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService, WowMountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
