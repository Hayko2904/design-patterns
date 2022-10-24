import {Product} from "./product";
import {Document} from "./document";

export interface FactoryInterface {
    createProduct(): Product
    createDocument(): Document
}