import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { Size } from 'src/app/models/size.model';
import { Topping } from 'src/app/models/topping.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

  get toppings(): Topping[] {
    return this.orderService.toppings;
  }

  get sizes(): Size[] {
    return this.orderService.sizes;
  }

  getToppingCaption(topping: Topping): string {
    return `${topping.name} ($${topping.price.toFixed(2)})`;
  }

  getSizeCaption(size: Size): string {
    return `${size.name} ($${size.price.toFixed(2)})`;
  }

  getSubtotal(size: Size): number {
    if (size.toppings.length === 0) {
      return 0;
    }
    let result = size.price;
    size.toppings.forEach(x => result += x.price);
    return result;
  }

  getOffer(size: Size): Offer {
    if (!size.offers || size.offers.length === 0 || size.toppings.length === 0) {
      return null;
    }

    let rate: number = 0;
    size.toppings.forEach(x => rate += x.rate);

    let result: Offer;
    for (let i = 0; i < size.offers.length; i++) {
      let offer = size.offers[i];
      if (offer.toppingsCount <= rate) {
        result = offer;
        break;
      }
    }
    return result;
  }

  getOfferAmount(size: Size, offer: Offer): number {
    if (!size.offers || size.offers.length === 0 || !offer) {
      return 0;
    }
    let amount = offer.percent ? this.getSubtotal(size) * offer.value/100 : offer.value;
    return amount;
  }

  getOfferStr(size: Size, offer: Offer): string {
    const amount: number = this.getOfferAmount(size, offer);
    if (!amount) {
      return "";
    }
    return `${offer.name}: $${amount.toFixed(2)}`;
  }

  getTotal(): number {
    let result: number = 0;
    this.sizes.forEach(x => {
      const offer: Offer = this.getOffer(x);
      const offerAmount: number = this.getOfferAmount(x, offer);
      result += offerAmount ? offerAmount : this.getSubtotal(x);
    })
    return result;
  }
}
