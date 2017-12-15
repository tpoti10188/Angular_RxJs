
import { ErrorHandler } from 'protractor/built/exitCodes';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { IProduct } from '../xref-screens/product';



@Injectable()
export class ProductService {
   private _productUrl = '../api/products/products.json';
 //  private _productUrl = '../xref-screens/product';
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);

  }
  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      'id': 0,
      'memberCode': null,
      'procedureCode': null,
      'productCode': null
    };
  }
}
