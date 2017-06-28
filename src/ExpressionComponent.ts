import { Componet, VM } from 'cmpx';
import ForDemoComponent from './expression/ForDemoComponet';
import BindDemoComponet from './expression/BindDemoComponet';
import IfDemoComponet from './expression/IfDemoComponet';
import IncludeDemoComponent from './expression/IncludeDemoComponent';

@VM({
    name:'expression',
    include:[BindDemoComponet, ForDemoComponent,
        IfDemoComponet, IncludeDemoComponent],
    tmpl:`<div>
    <div class="head">
        <a href="javascript:void(0)" click={{@this.tabs(0)}}>绑定{{{:'{{}}'}}}</a>
        <a href="javascript:void(0)" click={{@this.tabs(1)}}>for语句</a>
        <a href="javascript:void(0)" click={{@this.tabs(2)}}>if语句</a>
        <a href="javascript:void(0)" click={{@this.tabs(3)}}>tmpl & include</a>
        <a href="javascript:void(0)" click={{@this.tabs(9)}}>其它</a>
    </div>
    {{ifx this.index == 0}}
        <binddemo />
    {{else this.index == 1}}
        <fortest />
    {{else this.index == 2}}
        <ifdemo />
    {{else this.index == 3}}
        <incdemo />
    {{else}}
    {{/ifx}}
</div>`
})
export default class ExpressionComponent extends Componet{


    index:number = 0;
    tabs(index:number){
        this.index = index;
        this.$update();
    }


}