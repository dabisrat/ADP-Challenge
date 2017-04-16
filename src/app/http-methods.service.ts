import { products } from './../../products';
import { Injectable } from '@angular/core';
console.log(typeof products['product'][1].id)

export interface Product {
id?: number;
name: string;
description: string;
}


@Injectable()

export class HttpMethodsService {

  getProducts(): Product[] {
    return products['product'];
  }

  addProdut(product: Product): void {
    const productArray = products['product'];
    product.id = productArray.length;
    productArray.push(product);
  }

  deleteProdut(product: Product): Product {
    const productArray = products['product'];
    const copy = productArray.slice();
    copy.forEach( (currentProduct, index) => {
      if (currentProduct.id === product.id) {
        productArray.splice(index, 1);
      }
    });
    return product;
  }
// TODO implament a edit method.
  editProduct( product: Product ) {
    return product;
  }

}
// TODO adding and deleting products will desync prodcut ids and product positions in the array. How can we avoid this?
