import {FactoryInterface} from "./factory-interface";
import {Product} from "./product";
import {Document} from "./document";
import {DocumentSecond} from "./document-second";
import {ProductSecond} from "./product-second";

export class AppSecond implements FactoryInterface {
    createDocument(): Document {
        return new DocumentSecond();
    }

    createProduct(): Product {
        return new ProductSecond();
    }

}