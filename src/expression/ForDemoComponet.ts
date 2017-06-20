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

</div>`
})
export default class ForDemoComponet extends Componet{

    constructor(){
        super();
        this.makeList(5);
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
  
    
}