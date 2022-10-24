import {Product} from "./product";

export interface Builder {
    setName(name: string): void
    setBalance(balance: number): void
    setPrice(price: number): void
    getProduct(): Product
}