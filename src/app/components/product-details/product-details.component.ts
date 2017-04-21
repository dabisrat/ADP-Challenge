import { Product } from './../../interfaces/product-model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
// product: Product;
selectedProduct;
testProducts: any = [
  {id: 1, name: 'product1', description: 'a good product for you'},
  {id: 2, name: 'product2', description: 'a good product for you'},
  {id: 3, name: 'product3', description: 'a good product for you'},
];
  constructor( private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      const id = Number(params.id);
      const matchingProduct = this.testProducts.find( product => product.id === id);
      if (matchingProduct) {
        this.selectedProduct = matchingProduct;
      } else {
        this.selectedProduct = {name: 'non-existante', description: 'void of all meaning'};
      }
    });
  }


}
