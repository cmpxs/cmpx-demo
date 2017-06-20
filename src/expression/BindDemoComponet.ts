import { Componet, VM } from 'cmpx';

@VM({
    name:'binddemo',
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

</div>`
})
export default class BindDemoComponet extends Componet{

    constructor(){
        super();
    }


    text:string = 'text';
    changeText(){
        this.text = new Date().toString();
        this.$update();
    }

    
}