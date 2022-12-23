export interface Prototype {
    getData(): string[]

    clone(): Prototype
}