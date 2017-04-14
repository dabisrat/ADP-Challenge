import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <p>
      product-list Works!
    </p>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// I need to accesss a service method that does a GET request to retrive the data. bind it to the components model, loop throught the array, and display the product names with something similar to ng-repeat. Each anchor element would route to a prodcut page template with product data dynamicly generated.
