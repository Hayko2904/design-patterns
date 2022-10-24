import {FactoryInterface} from "./factory-interface";

export class AbstractClient {
    private factory: FactoryInterface;

    constructor(factory: FactoryInterface) {
        this.factory = factory
    }

    public createDocument(): string {
        return this.factory.createDocument().getName()
    }

    public createProduct(): string {
        return this.factory.createProduct().getName()
    }
}