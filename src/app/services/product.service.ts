import { Product } from './../interfaces/product-model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

const baseUrl  = `http://localhost:3000/product/`;
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getAllProducts(): Promise<Product[]> {
    return this.http.get(baseUrl)
                    .toPromise()
                    .then( this.processData )
                    .catch( this.handelError );
  };


  getProdutById(productId: number): Promise<any> {
  return this.http.get(baseUrl + productId)
                  .toPromise()
                  .then(this.processData )
                  .catch(this.handelError);
  }

  deleteProduct(productId: number): Promise<null> {
   return this.http.delete(baseUrl + productId, options)
                   .toPromise()
                   .then(() => console.log(`product ${productId} deleted`))
                   .catch(this.handelError);
  }

  updateProduct(product: Product) {
    return this.http.put(baseUrl + product.id, JSON.stringify(product), options)
                    .toPromise()
                    .then(this.processData)
                    .catch(this.handelError);
}

  addProduct(product: Product) {
    return this.http.post(baseUrl, JSON.stringify(product), options)
                    .toPromise()
                    .then(this.processData)
                    .catch(this.handelError);
  }

  processData(res: Response): Product[] {
    console.log(res.json());
    return res.json();
  }

  handelError(err: Response): void {
    console.error(err);
  }
}
