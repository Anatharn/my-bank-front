import { Links } from "../hal/links"

export class Bank {

    name: string
    _links!: Links

    constructor(name: string = "") {
        this.name = name
    }
}