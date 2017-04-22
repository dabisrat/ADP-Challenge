import { Product } from './../../interfaces/product-model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
selectedProduct;
  constructor( private router: Router, private route: ActivatedRoute, private productService: ProductService) { 
    this.goToProducts = this.goToProducts.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this)
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.productService.getProdutById(params.id)
                         .then(this.setSelectedProduct)
                         .catch(error => console.error(error));
    });
  }

  setSelectedProduct(product: Product): void {
    if (product) {
      this.selectedProduct = Object.assign({}, product);
    } else {
      // TODO route to 404 page;
      this.selectedProduct = undefined;
   }
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product)
                       .then(this.goToProducts)
                       .catch(error => console.error(error));
  }

}
