import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor( private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
     this.getProducts();
  }
  getProducts() {
    this.productService.getAllProducts()
                       .then(products => this.products = products)
                       .catch(error => console.error(error));
  }

  deleteProduct(event: Event, product: Product){
    event.stopPropagation();
    this.productService.deleteProduct(product.id)
                       .then(() => this.getProducts )
                       .catch(error => console.error(error));
  }

  selectProduct(product: Product) {
    this.router.navigate( ['products', product.id] );
  }


}
