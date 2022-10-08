import { Component, OnInit } from '@angular/core';
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
}
