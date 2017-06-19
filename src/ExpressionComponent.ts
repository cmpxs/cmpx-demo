import { Componet, VM } from 'cmpx';

@VM({
    name:'expression',
    tmpl:`<div>
    <div>绑定语句{{{: ': {{表达式}}' }}}</div>
    <div>
        <button click="{{@this.changeText()}}">刷新数据</button>
    </div>
    <div>{{this.text}}</div>
    <br />

    <div>只读语句{{{: ': {{: 表达式}}' }}}</div>
    <div>
        <button click="{{@this.changeText()}}">刷新数据, 不会变，由于没有绑定</button>
    </div>
    <div>{{:this.text}}, 是第一次的值</div>
    <br />

    <div>只写语句{{{: ': {{> 属性}}' }}}</div>
    <div>
        <button click="{{@this.changeText()}}">刷新数据, 不会变，由于只写</button>
    </div>
    <div>
    <input type="text" model={{> this.text}}>
    </div>
    <br />

    <div>读写语句{{{: ': {{# 属性}}' }}}</div>
    <div>
        <button click="{{@this.changeText()}}">刷新数据, 会变</button>
    </div>
    <div>
    <input type="text" model={{# this.text}}>
    </div>
    <br />

    <div>事件绑定语句{{{: ': {{@ 执行表达式}}' }}}</div>
    <div>
        <button click="{{@this.changeText(event);console.log(event);}}">点击刷新数据, 可以获取event内容</button>
    </div>
    <br />

    <div>语句{{{: '{{for}}: {{for item in list}}{{/for}}' }}}</div>
    <div>
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
    </div>
    {{for item in this.list}}
    <div>
        {{$index}}: item({{item.id}})
    </div>
    {{/for}}
    <br />


    <div>语句{{{: '{{for}}: {{for item in list sync}}{{/for}}' }}}</div>
    <div>
        <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
        <button click="{{@this.add()}}">add数据({{this.num}})</button>
    </div>
    {{for item in this.list sync}}
    <div>
        <a href="javascript:void(0)" click={{@this.upIndex($index)}}>upIndex</a>
        <a href="javascript:void(0)" click={{@this.removeIndex($index)}}>removeIndex</a>
        {{$index}}: item({{item.id}})
    </div>
     {{if $odd}}[{{:new Date().valueOf()}}]{{else}}[odd]{{/if}}
    {{/for}}
    <br />

    <div>语句{{{: '{{if}}: {{if ok}}{{/if}}' }}}</div>
    <div>
        <button click="{{@this.ok1=!this.ok1; this.$update()}}">ok1({{this.ok1}})</button>
        <button click="{{@this.ok2=!this.ok2; this.$update()}}">ok2({{this.ok2}})</button>
        <button click="{{@this.ok3=!this.ok3; this.$update()}}">ok3({{this.ok3}})</button>
    </div>
    <div>
        {{if this.ok1}}
            ok1:true
        {{else this.ok2}}
            ok1:false ok2:true
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
    <br />

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
export default class ExpressionComponent extends Componet{
    render:any;

    constructor(){
        super();
        this.makeUserList(5);
        this.render = this.$render(`<div>
            render ok ({{this.num}})
        </div>`);
    }

    text:string = 'text';
    changeText(){
        this.text = new Date().toString();
        this.$update();
    }

    list:Object[];
    num:number = 0;
    makeUserList(num:number){
        let list = [];
        for (var i=0;i<num;i++)
            list.push({id:new Date().valueOf()+ ""+i});
        this.list = list;
        this.num = num;
    }

    randNum(){
        let num = Math.round(1+ Math.random()*5);
        this.makeUserList(num);
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
  
    ok1 = true;
    ok2 = true;
    ok3 = true;
    
}