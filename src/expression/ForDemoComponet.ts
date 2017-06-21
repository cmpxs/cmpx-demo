import { Componet, VM } from 'cmpx';

@VM({
    name:'fortest',
    tmpl:`<div>
    
    <div class="head1">{{{: '{{for item in this.list}}{{/for}}' }}}</div>
    <div class="desc1">遍历数组，如果数组元素添加或删除等变动，立即重新生成view</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    <div class="content1">
    {{for item in this.list}}
    <div>
        {{$index}}: item({{item.id}})
    </div>
    {{/for}}
    </div>

    <div class="head1">{{{: '{{for item in this.list sync}}{{/for}}' }}}</div>
    <div class="desc1">遍历数组，启动sync属性，如果数组元素添加或删除等变动，根据变动同步到view</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
        <button click="{{@this.add()}}">add数据({{this.num}})</button>
    </div>
    <div class="content1">
    {{for item in this.list sync}}
    <div>
        <a href="javascript:void(0)" click={{@this.upIndex($index)}}>upIndex</a>
        <a href="javascript:void(0)" click={{@this.removeIndex($index)}}>removeIndex</a>
        {{$index}}: item({{item.id}})
    </div>
     {{if $odd}}[{{:new Date().valueOf()}}]{{else}}[odd]{{/if}}
    {{/for}}
    </div>

    <div class="head1">{{{: '{{for item in this.list sync="this.forSync"}}{{/for}}' }}}</div>
    <div class="desc1">遍历数组，启动sync属性并指定同步方式，如果数组元素添加或删除等变动，根据变动同步到view</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
        <button click="{{@this.add()}}">add数据({{this.num}})</button>
    </div>
    <div class="content1">
    {{for item in this.list sync="this.forSync"}}
    <div>
        <a href="javascript:void(0)" click={{@this.upIndex($index)}}>upIndex</a>
        <a href="javascript:void(0)" click={{@this.removeIndex($index)}}>removeIndex</a>
        {{$index}}: item({{item.id}})
    </div>
    {{/for}}
    </div>

    <div class="head1">{{{: '{{for item in this.list}} {{include /}} {{/for}}' }}}</div>
    <div class="desc1">遍历数组，结合include，实现无限循环</div>
    <div class="toolbar1">
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
        <button click="{{@this.add()}}">add数据({{this.num}})</button>
    </div>
    <div class="content1">
    {{tmpl id="tmpl1" let="$index=param.index, item=param.item"}}
    <div style="margin-left:20px;">
        {{:$index}}: item({{:item.id}}, {{:item.name}})
        {{for cItem in item.children}}
            {{include tmpl="tmpl1" param="{index:$index, item:cItem}"}}
        {{/for}}
    </div>
    {{/tmpl}}
    {{for item in this.list2 sync}}
        {{include tmpl="tmpl1" param="{index:$index, item:item}"}}
    {{/for}}
    </div>

</div>`
})
export default class ForDemoComponet extends Componet{

    constructor(){
        super();
        this.makeList(5);

        setTimeout(()=>{
            let index = 1;
            var p = this.list2[index-1];
            this.list2[index-1] = this.list2[index];
            this.list2[index] = p;
            this.$update();
        }, 5000);
    }

    text:string = 'text';
    changeText(){
        this.text = new Date().toString();
        this.$update();
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
    
    upIndex(index:number){
        if (index == 0) return;
        var p = this.list[index-1];
        this.list[index-1] = this.list[index];
        this.list[index] = p;
        this.$update();
    }
    
    removeIndex(index:number){
        this.list.splice(index, 1);
        this.num  = this.list.length;
        this.$update();
    }
    
    add(){
        this.list.push({id:new Date().valueOf()+ ""+(this.list.length-1)});
        this.num  = this.list.length;
        this.$update();
    }

    //返回index, 如果不存在返回-1
    forSync(item, count, index, list){
        return list.indexOf(item);
    }

    list2 = [{
        id: 1,
        name: 'test1',
        children: [{
            id: 11,
            name: 'test1.child1',
            children: []
        }, {
            id: 12,
            name: 'test1.child2',
            children: [{
                id: 121,
                name: 'test1.child2.child1',
                children: [{
                    id: 1211,
                    name: 'test1.child2.child1.child1',
                    children: null
                }]
            }]
        }]
    }, {
        id: 2,
        name: 'test2',
        children: []
    }, {
        id: 3,
        name: 'test3',
        children: []
    }];

    
}