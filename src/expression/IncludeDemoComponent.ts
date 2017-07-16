import { Componet, VMComponet } from 'cmpx';


@VMComponet({
    name:'incchilde',
    tmpl:`<div>
        {{this.text}}

</div>`
})
class IncludeChildComponent extends Componet{
    text = "IncludeChildComponent";
}

@VMComponet({
    name:'incdemo',
    include:[IncludeChildComponent],
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
        {{include tmpl="tmpl1" param="{$index:$index, item:item}" /}}
    {{/for}}
    </div>

    <div class="head1">{{{: '{{include render="this.render" /}}' }}}</div>
    <div class="desc1">引用render模板，支持动态模板，并通过param传值</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    <div class="content1">
        {{include render="this.render" param="{id:'11111'}" /}}
    </div>

    <div class="head1">include默认内容</div>
    <div class="desc1">引用模板不存在使用默认内容</div>
    <div class="content1">
        {{tmpl id="tmpl222"}}
            tmpl222Text
        {{/tmpl}}
        {{include tmpl="tmpl222"}}
            include1Text
        {{/include}}
        {{include tmpl="sdfasdfasdfasfdsf"}}
            include2Text
        {{/include}}
    </div>

    <div class="head1">include默认内容</div>
    <div class="desc1">引用模板不存在使用默认内容</div>
    <div class="content1">
        {{include render="this.renderCp" /}}
    </div>

</div>`
})
export default class IncludeDemoComponent extends Componet{
    render:any;
    renderCp;

    constructor(){
        super();
        this.render = this.$render(`<div>
            render ok ({{this.num}}) [{{:param.id}}]
        </div>`);
        this.makeList(5);
        this.renderCp = this.$render(new IncludeChildComponent())
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
        console.time('inc');
        this.$update();
        console.timeEnd('inc');
    }

}