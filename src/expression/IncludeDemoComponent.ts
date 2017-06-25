import { Componet, VM } from 'cmpx';

@VM({
    name:'incdemo',
    tmpl:`<div>
        
    <div class="head1">{{{: '{{include tmpl="tmplid" /}}' }}}</div>
    <div class="desc1">引用tmpl1模板，并通过param与let之间传值</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    <div class="content1">
    {{tmpl id="tmpl1" let="$index=param.$index, item = param.item"}}
        <div>
        {{$index}}: item({{item.id}})
        </div>
    {{/tmpl}}
    {{for item in this.list}}
        {{include tmpl="tmpl1" param="{$index:$index, item:item}" }}
    {{/for}}
    </div>

    <div class="head1">{{{: '{{include render="this.render" /}}' }}}</div>
    <div class="desc1">引用render模板，支持动态模板，并通过param传值</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    <div class="content1">
        {{include render="this.render" param="{id:'11111'}" }}
    </di>

</div>`
})
export default class IncludeDemoComponent extends Componet{
    render:any;

    constructor(){
        super();
        this.render = this.$render(`<div>
            render ok ({{this.num}}) [{{:param.id}}]
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