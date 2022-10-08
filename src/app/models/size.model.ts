import { Offer } from "./offer.model";
import { Topping } from "./topping.model";

export class Size {
    name: string = null;
    price: number = null;
    toppings: Topping[] = null;
    offers: Offer[] = null;
}