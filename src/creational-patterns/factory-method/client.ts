import {Creator} from "./creator";

export class FactoryClient {
    public runCode(creator: Creator): string {
        return creator.run()
    }
}