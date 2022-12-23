import { Prototype } from "./prototype-interface";

export class Persons implements Prototype {
    public persons: string[];

    constructor(persons: string[] = []) {
        this.persons = persons
        this.laod()
    }

    private laod(): void {
        this.persons.push(
            'John',
            'Doe'
        );
    }

    public getData(): string[] {
        return this.persons;
    }

    public clone(): Prototype {
        return new Persons(this.getData())
    }

}