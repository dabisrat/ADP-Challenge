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
  isCreating = false;
  newProductName: string;
  newProductDescription: string;
  constructor( private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
     this.getProducts();
  }
  getProducts(): void {
     this.productService.getAllProducts()
                       .then(products => this.products = products)
                       .catch(error => console.error(error));
  }

  deleteProduct(event: Event, product: Product): void {
    event.stopPropagation();
     this.productService.deleteProduct(product.id)
                       .then(() => this.products = this.products.filter( currentProduct => currentProduct !== product ) )
                       .catch(error => console.error(error));
  }

  selectProduct(product: Product): void {
    this.router.navigate( ['products', product.id] );
  }

  addProduct() {
    const id = this.products.length + 1;
    const newProduct = Object.assign({}, {id: id}, {name: this.newProductName, description: this.newProductDescription});
    this.productService.addProduct(newProduct)
                       .then( () => this.newProductDescription = this.newProductName = '')
                       .then( () => this.products = this.products.concat(newProduct) )
                       .catch(error => console.error);
  }

  toggleState(event: Event) {
    this.isCreating = !this.isCreating;
  }
}
