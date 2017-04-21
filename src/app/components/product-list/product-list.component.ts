import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [
  {id: 1, name: 'product1', description: 'a good product for you'},
  {id: 2, name: 'product2', description: 'a good product for you'},
  {id: 3, name: 'product3', description: 'a good product for you'},
];
  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  selectProduct(product: any) {
    console.log(product);
    this.router.navigate( ['products', product.id] );
  }

}
