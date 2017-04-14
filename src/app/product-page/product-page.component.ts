import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  template: `
    <p>
      product-page Works!
    </p>
  `,
  styles: []
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// this component needs access to the JSON Data of the product that was clicked  and render the template with the correct data.