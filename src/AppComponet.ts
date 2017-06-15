
import { Componet, VM } from "cmpx";
import FormComponet from './FormComponet';
import ExpressionComponent from './ExpressionComponent';

@VM({
    name:'app',
    include:[FormComponet, ExpressionComponent],
    tmpl:`<div class="app">
    <div>{{this.name}}</div>
    <div class="head">
        <a href="javascript:void(0)" click={{@this.tabs(0)}}>语句&表达式</a>
        <a href="javascript:void(0)" click={{@this.tabs(1)}} >form</a>
    </div>
    <div class="content">
    {{if this.index == 0}}
        <expression />
    {{else this.index == 1}}
        <formtest />
    {{/if}}
    </div>
</div>`,
    style:`
        .app .head {
            margin: 5px 10px;
            font-size: 18px;
        }
        .app .content {
            border: solid 1px;
            padding: 6px;
        }
    `
})
export default class AppComponet extends Componet{
    name = "app demo"

    constructor(){
        super();
    }

    index:number = 0;
    tabs(index:number){
        this.index = index;
        this.$update();
    }

}