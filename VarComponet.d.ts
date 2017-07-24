import { Componet, Bind } from 'cmpx';
export declare class RedBind extends Bind {
    constructor(element: HTMLElement);
    testcolor: string;
    onUpdate(): void;
    color: string;
    init: boolean;
    onChanged(): void;
    change(): void;
    iii: number;
    onReady(): void;
    onDispose(): void;
    click(event: Event): void;
}
export declare class ViewvarChildComponet extends Componet {
    text: string;
    color: string;
    onInit(cb: any): void;
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
