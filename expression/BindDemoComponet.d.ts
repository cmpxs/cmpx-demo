import { Componet } from 'cmpx';
export default class BindDemoComponet extends Componet {
    constructor();
    tick(): number;
    text: string;
    changeText(): void;
    onUpdate(cb: any): void;
}
