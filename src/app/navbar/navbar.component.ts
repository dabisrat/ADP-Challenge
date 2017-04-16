import { HttpMethodsService } from './../http-methods.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `  
    <ul class="navBar">
      <li> <a href=""> Welcome</a> </li>
      <li> <a href="products"> Product List</a> </li>
    </ul>
  `,
  styles: [`
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration:none;
}

li a:hover {
    background-color: #111;
    font-weight: bold;
}
  `]
})
export class NavbarComponent implements OnInit {
  @Input() products;
  constructor( private httpMethods: HttpMethodsService ) { }

  ngOnInit() {
  }
  onClick(): void {
    console.log();
  }

}
// I need to route the welcome and productList anchors to the their respective templets.