import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent, PostDetailsComponent, WelcomComponent } from './components';


import { PostService, WowMountsService } from './services';
import { LimitToPipe } from './pipes';


const routes: Route[] = [

 // TO DO add 404 component for wild card  route.
 {path: '', component: WelcomComponent},
 {path: 'welcome', redirectTo: '' },
 {path: 'posts', component: PostListComponent},
 {path: 'posts/:id', component: PostDetailsComponent},
 {path: 'wow-mounts', component: PostListComponent},
 {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    WelcomComponent,
    LimitToPipe,
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
