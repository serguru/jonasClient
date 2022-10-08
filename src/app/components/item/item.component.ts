import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/models/size.model';
import { Topping } from 'src/app/models/topping.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() size: Size;
  @Input() topping: Topping;
  constructor() { }

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
        this.size.toppings.push(this.topping);
      }
    });
    return false;
  }

}
