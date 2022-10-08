import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/models/size.model';
import { Topping } from 'src/app/models/topping.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() size: Size;
  @Input() topping: Topping;
  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

  get checked(): boolean {
    const result = this.size.toppings.includes(this.topping);
    return result;
  }

  click(): boolean {
    setTimeout(() => {
      if (this.checked) {
        const index: number = this.size.toppings.indexOf(this.topping);
        this.size.toppings.splice(index, 1);
      } else {
        let rate: number = this.topping.rate;
        this.size.toppings.forEach(x => rate += x.rate);
        console.log(rate)
        if (rate > 4) {
          this.orderService.error = "You cannot choose more than 4 toppings";
          this.orderService.eraseError();
        } else {
          this.size.toppings.push(this.topping);
        }
      }
    });
    return false;
  }

}
