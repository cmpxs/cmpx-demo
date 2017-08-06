import { Componet, CmpxEvent } from 'cmpx';
export declare class ChildItemComponent extends Componet {
    text: string;
    setText(text: string): void;
}
export declare class ChildItem2Component extends Componet {
    text: string;
    ev: CmpxEvent;
    onChanged(): void;
}
export declare class LoadItemComponent extends Componet {
    text: string;
}
export declare class IncItemComponent extends Componet {
    text: string;
}
export default class ChildComponet extends Componet {
    text: string;
    onReady(): void;
    childitem1: ChildItemComponent;
}
