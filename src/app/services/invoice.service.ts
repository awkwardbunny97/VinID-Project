import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInvoice } from '../models/customer.model';

@Injectable({
    providedIn: 'root'
})
export class CreateInvoiceService {
    // API path
    apiURL = 'https://oasis-footware.herokuapp.com/api/';

    constructor(private httpClient: HttpClient) { }

    // Get All Invoice
    public getAllProducts(): Observable<CustomerInvoice> {
        return this.httpClient.get<CustomerInvoice>(
            this.apiURL + 'invoice',
        );
    }

    // Get Invoice By Id
    public getProductDetail(id): Observable<CustomerInvoice> {
        return this.httpClient.get<CustomerInvoice>(
            this.apiURL + 'invoice/' + id,
        );
    }

    // Create a new invoice
    public createInvoice(item, data): Observable<CustomerInvoice> {
        return this.httpClient.post<CustomerInvoice>(
            this.apiURL + item,
            JSON.stringify(data),
        );
    }

}