import { Componet } from 'cmpx';
export default class ForDemoComponet extends Componet {
    constructor();
    text: string;
    changeText(): void;
    list: Object[];
    num: number;
    makeList(num: number): void;
    randNum(): void;
    upIndex(index: number): void;
    removeIndex(index: number): void;
    add(): void;
    forSync(item: any, count: any, index: any, list: any): any;
    list2: {
        id: number;
        name: string;
        children: {
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                children: {
                    id: number;
                    name: string;
                    children: any;
                }[];
            }[];
        }[];
    }[];
}
