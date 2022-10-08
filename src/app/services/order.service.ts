import { Injectable } from "@angular/core";
import {environment} from '../../environments/environment';
import { Size } from "../models/size.model";
import { Topping } from "../models/topping.model";

@Injectable()
export class OrderService {

    sizes: Size[];
    toppings: Topping[];

    constructor() {
        this.reset();
    }

    // Normally these data should be requested from the API and be valid
    reset(): void {
        const sizes = [];
        environment.sizes.forEach(x => {
            sizes.push(x);
        });
        this.sizes = sizes;

        const toppings = [];
        environment.toppings.forEach(x => {
            toppings.push(x);
        });
        this.toppings = toppings;
    }

    error: string;

    eraseError(): void {
        setTimeout(() => {
            this.error = undefined;
        }, 5000)

    }
}