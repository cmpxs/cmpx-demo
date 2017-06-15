
import { Componet, VM } from "cmpx";
import FormComponet from './FormComponet';

@VM({
    name:'app',
    include:[FormComponet],
    tmpl:`<div>
    <div>{{this.name}}</div>
    <formtest />
    <div>
        <button click="{{@this.randNum()}}">刷新数组({{this.num}})</button>
    </div>
    {{for item in this.list}}
    <div>
        {{$index}}: item({{item.id}})
    </div>
    {{/for}}
</div>`
})
export default class AppComponet extends Componet{
    name = "app demo"
    list:Object[];
    num:number = 0;

    constructor(){
        super();
        this.makeUserList(20);
    }

    makeUserList(num:number){
        let list = [];
        for (var i=0;i<num;i++)
            list.push({id:new Date().valueOf()+ ""+i});
        this.list = list;
        this.num = num;
    }

    randNum(){
        let num = Math.round(1+ Math.random()*50);
        this.makeUserList(num);
        this.$update();
    }
}