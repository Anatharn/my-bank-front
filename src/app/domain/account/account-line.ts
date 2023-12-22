import { Links } from "../hal/links";

export class AccountLine {

    date!: Date;
    details!: string;
    amount!: number;
    currency!: string;
    account!: string
    _links!: Links

    constructor(date: Date = new Date(), details: string = "", amount?: number, currency: string = "EUR"){
        this.date = date;
        this.details = details;
        if(amount){
            this.amount = amount;
        }
        this.currency = currency;
    }
}