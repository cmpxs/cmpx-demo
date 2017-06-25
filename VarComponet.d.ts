import { Componet } from 'cmpx';
export declare class ViewvarChildComponent extends Componet {
    text: string;
    randomText(): void;
}
export default class ViewvarComponent extends Componet {
    text: string;
    inputEle: HTMLElement;
    constructor();
    list: Object[];
    num: number;
    makeUserList(num: number): void;
    randNum(): void;
    divItems: HTMLElement[];
}
