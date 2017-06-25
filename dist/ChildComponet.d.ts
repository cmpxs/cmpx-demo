import { Componet, CmpxEvent } from 'cmpx';
export declare class ChildItemComponent extends Componet {
    text: string;
    setText(text: string): void;
}
export declare class ChildItem2Component extends Componet {
    text: string;
    ev: CmpxEvent;
    onUpdate(cb: any): void;
}
export declare class LoadItemComponent extends Componet {
    text: string;
}
export default class ChildComponet extends Componet {
    text: string;
    onReady(cb: any): void;
    childitem1: ChildItemComponent;
}
