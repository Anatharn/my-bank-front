import { Links } from "../hal/links";

export class Account {

    name:string
    code:string
    bank?:string
    category?:string
    _links!: Links

    constructor(name: string = "", code: string = ""){
        this.name = name
        this.code = code
    }
}
export class SumAccount {

    sum: number
    _links!: Links

    constructor(sum: number = 0) {
        this.sum = sum
    }
}