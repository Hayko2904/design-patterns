import {Creator} from "./creator";
import {ProductSecond} from "./product-second";
import {Product} from "./product";

export class CreatorSecond extends Creator {
    factory(): Product {
        return new ProductSecond();
    }
}