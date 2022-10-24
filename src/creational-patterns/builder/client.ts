import {Builder} from "./builder";

export class BuilderClient {
    private builder: Builder

    constructor(builder: Builder) {
        this.builder = builder
    }


    public createProduct(name: string, balance: number, price: number): void {
        this.builder.setName(name);
        this.builder.setBalance(balance);
        this.builder.setPrice(price);
    }
}