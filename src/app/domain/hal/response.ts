import { Embedded } from "./embedded";
import { Links } from "./links";
import { Page } from "./page";

export class Response<T> {

    _embedded!:Embedded<T>;
    _links!: Links;
    page!: Page;
}