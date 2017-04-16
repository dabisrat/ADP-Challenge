import { HttpMethodsService } from './../http-methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
  <ul>
    <li *ngFor=" let product of httpMethods.getProducts()"> 
    <div>
      <a href="prod">{{product.name}}</a>
      <button (click)="httpMethods.deleteProdut(product)">X</button>
    </div>
    </li>
  </ul>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  constructor(private httpMethods: HttpMethodsService) { 
  }

  ngOnInit() {
  }

}

