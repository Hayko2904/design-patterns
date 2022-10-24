import {FactoryInterface} from "./factory-interface";
import {Product} from "./product";
import {Document} from "./document";
import {DocumentFirst} from "./document-first";
import {ProductFirst} from "./product-first";

export class AppFirst implements FactoryInterface {
    createDocument(): Document {
        return new DocumentFirst();
    }

    createProduct(): Product {
        return new ProductFirst();
    }

}