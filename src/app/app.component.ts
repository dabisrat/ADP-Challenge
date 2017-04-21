
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground!';
  routes = [
    {route: 'welcome'},
    {route: 'products'},
    {route: 'wow-mounts'}
    ];
  constructor( ) {}
}
