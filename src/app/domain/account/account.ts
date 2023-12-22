import { Links } from "../hal/links";
import { AccountLine } from "./account-line";

export class Account {

    id!: number
    name:string;
    accountLines: Array<AccountLine>[] = []
    _links!: Links

    constructor(name: string = ""){
        this.name = name;
    }
}