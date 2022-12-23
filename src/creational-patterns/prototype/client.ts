import { Prototype } from "./prototype-interface";

export class PrototypeClient {
    public runCode(prototype: Prototype): Prototype {
        return prototype.clone()
    }
}