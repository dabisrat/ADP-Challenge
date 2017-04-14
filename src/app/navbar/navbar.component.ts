import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <ul class="navBar">
      <li> <a href=""> Welcome</a> </li>
      <li> <a href=""> Product List</a> </li>
    <ul>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// I need to route the welcome and productList anchors to the their respective templets.