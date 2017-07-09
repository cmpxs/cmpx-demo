import { Componet, VMComponet } from 'cmpx';

@VMComponet({
    name:'ifdemo',
    tmpl:`<div>

    <div class="head1">语句{{{: '{{if}}: {{if ok}}{{/if}}' }}}</div>
    <div class="desc1">处理条件分支</div>
    <div class="toolbar1">
        <button click="{{@this.ok1=!this.ok1; this.$update()}}">ok1({{this.ok1}})</button>
        <button click="{{@this.ok2=!this.ok2; this.$update()}}">ok2({{this.ok2}})</button>
        <button click="{{@this.ok3=!this.ok3; this.$update()}}">ok3({{this.ok3}})</button>
        <button click="{{@this.makeList(3); this.$update()}}">makeList</button>
    </div>
{{tmpl id="tmpl1"}} tmpltext: aaaaa{{/tmpl}}
    <div class="content1">
        {{if this.ok1}}
            ok1:true
        {{else this.ok2}}
            ok1:false ok2:true
            {{include tmpl="tmpl1" /}}
        {{else this.ok3}}
            ok1:false ok2:false ok3:true
        {{else}}
            ok1:false ok2:false ok3:false
            {{for item in this.list}}
            <div>
                {{$index}}: item({{item.id}})
            </div>
            {{/for}}
        {{/if}}
    </div>
    <div class="head1">语句{{{: '{{ifx}}: {{ifx ok}}{{/ifx}}' }}}</div>
    <div class="desc1">处理条件分支, 与if不同它内容不会删除，只是暂时分离出去</div>
    <div class="content1">
	{{ifx this.ok1}}
            ok1:true
        {{else this.ok2}}
            ok1:false ok2:true
            {{include tmpl="tmpl1" /}}
        {{else this.ok3}}
            ok1:false ok2:false ok3:true
        {{else}}
            ok1:false ok2:false ok3:false
            {{for item in this.list}}
            <div>
                {{$index}}: item({{item.id}})
            </div>
            {{/for}}
        {{/ifx}}

    </div>
    <br />

</div>`
})
export default class IfDemoComponet extends Componet{

    constructor(){
        super();
        this.makeList(5);
    }

    ok1 = true;
    ok2 = true;
    ok3 = true;

    list:Object[];
    makeList(num:number){
        let list = [];
        for (var i=0;i<num;i++)
            list.push({id:new Date().valueOf()+ ""+i});
        this.list = list;
    }

}