import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/product.model';
import { CustomerInvoice } from '../../models/customer.model';
import { CreateInvoiceService } from '../../services/invoice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkoutProducts: Products[];
  totalPrice = 0;
  invoice: CustomerInvoice;
  userCartDetail: FormGroup;
  submitted = false;

  constructor(private productService: ProductService,
    private invoiceService: CreateInvoiceService,
    private spinner: NgxSpinnerService,
    private router: Router, ) {
    this.invoice = new CustomerInvoice();
  }

  ngOnInit() {
    this.getLocalProduct();
    this.userCartDetail = new FormGroup({
      orderName: new FormControl('', [Validators.required]),
      orderPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      orderEmail: new FormControl('', [Validators.required, Validators.email]),
      orderAddress: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log('input Form', this.userCartDetail);
  }

  getLocalProduct() {
    const products = this.productService.getLocalCartProducts();
    this.checkoutProducts = products;
    products.forEach((product) => {
      this.totalPrice += product.unitPrice;
    });

    console.log('checkoutPr', this.checkoutProducts);
  }



  createInvoice() {
    this.invoice.totalValue = this.totalPrice;
    this.invoice.productValue = 0;
    this.invoice.discountValue = 0;
    this.invoice.totalValue = this.totalPrice;
    this.invoice.status = 1;
    this.invoice.orderName = this.userCartDetail.get("orderName").value;
    this.invoice.orderPhone = this.userCartDetail.get("orderPhone").value;
    this.invoice.orderEmail = this.userCartDetail.get("orderEmail").value;
    this.invoice.orderAddress = this.userCartDetail.get("orderAddress").value;


    this.checkoutProducts.forEach((product) => {
      this.invoice.productIds.push(product.productUID);
    });


    console.log(this.invoice);
    this.submitted = true;
    if (this.userCartDetail.invalid) {
      return;
    }

    this.spinner.show();
    this.invoiceService.createInvoice('invoice', this.invoice).subscribe(
      res => {
        console.log(res);
        alert('Success Order');
        this.spinner.hide();
        //this.getLocalProduct();
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
        this.spinner.hide();
      }
    );

  }
}
