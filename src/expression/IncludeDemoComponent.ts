import { Componet, VM } from 'cmpx';

@VM({
    name:'incdemo',
    tmpl:`<div>
        
    <div>语句{{{: '{{include & tmpl}}: {{include tmpl="tmplid" /}}' }}}</div>
    <div>
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    {{tmpl id="tmpl1" let="$index=param.$index, item = param.item"}}
        <div>
        {{$index}}: item({{item.id}})
        </div>
    {{/tmpl}}
    {{for item in this.list}}
        {{include tmpl="tmpl1" param="{$index:$index, item:item}" }}
    {{/for}}
    <br />

    <div>语句{{{: '{{include & render}}: {{include render="this.render" /}}' }}}</div>
    <div>
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    <!--param问题没支持-->
    {{include render="this.render" }}

</div>`
})
export default class IncludeDemoComponent extends Componet{
    render:any;

    constructor(){
        super();
        this.render = this.$render(`<div>
            render ok ({{this.num}})
        </div>`);
        this.makeList(5);
    }

    list:Object[];
    num:number = 0;
    makeList(num:number){
        let list = [];
        for (var i=0;i<num;i++)
            list.push({id:new Date().valueOf()+ ""+i});
        this.list = list;
        this.num = num;
    }

    randNum(){
        let num = Math.round(1+ Math.random()*5);
        this.makeList(num);
        this.$update();
    }

}