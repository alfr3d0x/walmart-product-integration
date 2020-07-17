import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { PRODUCTS_TO_SEARCH } from '../assets/config';
import { URLS } from '../assets/config';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  public getProducts() {
    PRODUCTS_TO_SEARCH.forEach((product) => {
      this.api.getProduct(product).subscribe((data: any) => {
        this.products.push(data?.products[0]);
        console.log(data);
      }, (error: any) => {
        console.log(error);
      });
    });
  }

  public addToCart() {
    let query: string = ""
    this.products.forEach((product: any, index: number, arr: any[]) => {
      query += `${product.offerId}_${index+1}${index + 1 < arr.length ? ',' : ''}`
    });

    window.open(`${URLS.walmartCartCreation}?items=${query}&veh=aff&sourceid=imp_Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0&veh=aff&wmlspartner=imp_1789939&clickid=Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0`);
  }
}
