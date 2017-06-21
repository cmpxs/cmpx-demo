
import { Componet, VM } from "cmpx";
import FormComponet from './FormComponet';
import ExpressionComponent from './ExpressionComponent';
import ViewvarComponent from './VarComponet';
import ChildComponet from './ChildComponet';

@VM({
    name:'app',
    include:[FormComponet, ExpressionComponent, ViewvarComponent, ChildComponet],
    tmpl:`<div class="app">
    <div>{{this.name}}</div>
    <div class="head">
        <a href="javascript:void(0)" click={{@this.tabs(0)}}>语句&绑定</a>
        <a href="javascript:void(0)" click={{@this.tabs(1)}} >form</a>
        <a href="javascript:void(0)" click={{@this.tabs(2)}} >模板变量(@viewvar)</a>
        <a href="javascript:void(0)" click={{@this.tabs(3)}} >组件</a>
    </div>
    <div class="content">
    {{if this.index == 0}}
        <expression />
    {{else this.index == 1}}
        <formtest />
    {{else this.index == 2}}
        <viewvar />
    {{else this.index == 3}}
        <childcmp />
    {{/if}}
    </div>
</div>`,
    style:`
        .app .head {
            margin: 5px 10px;
            font-size: 18px;
        }
        .app .head a {
            margin-right: 10px;
        }
        .app .content {
            border: solid 1px;
            padding: 6px;
        }
        .app .content .row {margin: 3px 3px;}
        .app .content .text {
            margin-right: 10px;
            width: 120px;
            text-align: right;
            display: inline-block;
            vertical-align: top;
        }
        .app .content .input {}

        .app .head1 {
            font-weight: bold;
            margin: 8px 5px;
        }
        .app .desc1 {
            margin: 6px 25px;
            font-size: 14px
        }
        .app .toolbar1 {
            margin: 5px 5px;
        }
        .app .content1 {
            margin: 5px 10px 30px 10px;
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