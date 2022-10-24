import {Creator} from "./creator";
import {ProductFirst} from "./product-first";
import {Product} from "./product";

export class CreatorFisrt extends Creator {
    factory(): Product {
        return new ProductFirst();
    }
}