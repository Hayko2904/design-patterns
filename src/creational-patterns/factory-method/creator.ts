import { Product } from "./product";

export abstract class Creator {
    public abstract factory(): Product

    public run(): string {
        const product = this.factory();

        return product.getProduct();
    }
}