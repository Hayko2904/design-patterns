import {Builder} from "./builder";
import {Product} from "./product";

export class ProductBuilder implements Builder {
    protected product: Product = this.reset()

    public reset(): Product {
        return new Product()
    }

    public setBalance(balance: number): void {
        this.product.balance = balance
    }

    public setName(name: string): void {
        this.product.name = name
    }

    public setPrice(price: number): void {
        this.product.price = price
    }

    public getProduct(): Product {
        return this.product
    }
}