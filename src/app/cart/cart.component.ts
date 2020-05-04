import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForms;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.cartService.getItems();
    this.checkoutForms = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    console.warn(customerData)

    this.items = this.cartService.clearCart();
    this.checkoutForms.reset();

  }

  ngOnInit(): void {

    this.items = this.cartService.getItems();
  }

}
1