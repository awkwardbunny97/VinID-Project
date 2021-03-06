import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // API path
    apiURL = 'https://oasis-footware.herokuapp.com/api/';

    // Header Icon Count
    productCount = 0;

    constructor(private httpClient: HttpClient) { }

    // Get All Products
    public getAllProducts(): Observable<Products> {
        return this.httpClient.get<Products>(
            this.apiURL + 'product',
        );
    }

    // Get Item By Id
    public getProductDetail(id): Observable<Products> {
        return this.httpClient.get<Products>(
            this.apiURL + 'product/' + id,
        );
    }

    // Adding new Product to cart db if logged in else localStorage
    addToCart(product): void {
        let a: Products[];

        a = JSON.parse(localStorage.getItem('avct_item')) || [];

        a.push(product);
        localStorage.setItem('avct_item', JSON.stringify(a));
        this.calculateLocalCartProdCounts();
    }

    // Removing cart from local
    removeLocalCartProduct(product) {
        const products: Products[] = JSON.parse(localStorage.getItem('avct_item'));

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === product.id) {
                products.splice(i, 1);
                break;
            }
        }
        // ReAdding the products after remove
        localStorage.setItem('avct_item', JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    }

    // Fetching Locat CartsProducts
    getLocalCartProducts(): Products[] {
        const products: Products[] = JSON.parse(localStorage.getItem('avct_item')) || [];
        return products;
    }

    // returning LocalCarts Product Count
    calculateLocalCartProdCounts() {
        this.productCount = this.getLocalCartProducts().length;
    }

}
