import { Componet, VM, viewvar } from 'cmpx';

@VM({
    name:'viewvar',
    tmpl:`<div>
    <div>$var定义变量</div>
    <div>
        <span class="text">input1变量</span>
        <span class="input">
            <input type="text" model="{{#this.text}}" $var="input1" />
        </span>
    </div>
    <div>
        <span class="text">input1.value</span>
        <span class="input">
            {{input1.value}}
        </span>
    </div>
    <div>
        <span class="text">model值</span>
        <span class="input">
            {{this.text}}
        </span>
    </div>
    <div>
        <span class="text">this.inputEle</span>
        <span class="input">
            {{this.inputEle&&this.inputEle.value}}
        </span>
    </div>
    <br />

    <div>$array定义数组</div>
    <div>
        <span class="text">foritem数组</span>
        <span class="input">
            <div>
                <button click="{{@this.randNum()}}">刷新数据({{this.num}})</button>
            </div>
            {{for item in this.list}}
            <div $array="foritem">
                {{$index}}: item({{item.id}})
            </div>
            {{/for}}
        </span>
    </div>
    <div>
        <span class="text">foritem ({{foritem.length}})</span>
        <span class="input">
            {{for item in foritem}}
            <div>
                {{: item.innerText}}
            </div>
            {{/for}}
        </span>
    </div>
</div>`
})
export default class ViewvarComponent extends Componet{
    text:string;

    @viewvar('input1')
    inputEle:HTMLElement;

    constructor(){
        super();
        this.makeUserList(5);
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
        let num = Math.round(1+ Math.random()*100);
        this.makeUserList(num);
        console.time('foritem')
        //生成新数组foritem
        this.$update();
        console.timeEnd('foritem')
    }

    @viewvar('foritem')
    divItems:HTMLElement[];

    
}