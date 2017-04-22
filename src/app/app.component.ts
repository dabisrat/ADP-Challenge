
import { Component, Inject } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground!';
  routes = [
    {route: 'products'},
    {route: 'wow-mounts'}
    ];
  constructor( ) {}
}
