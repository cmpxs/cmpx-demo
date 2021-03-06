import { Componet, VMComponet, Filter, VMFilter, CmpxLib } from 'cmpx';

@VMFilter({
    name:'text',
    alway:false
})
class TextFilter extends Filter{
    onFilter(value:any, p:any, cb:any){
        cb(CmpxLib.encodeHtml(value));
    }
}

@VMFilter({
    name:'add',
    alway:false
})
class AddFilter extends Filter{
    onFilter(value:any, p:any, cb:any){
        console.log('add', value);
        setTimeout(function(){
            cb(value+' | '+ p);
        }, 1000);
    }
}

@VMComponet({
    name:'bind-test',
    tmpl:`<div>
    <div class="head1">只读绑定{{{: ': {{表达式}}' }}}</div>
    <div class="desc1">绑定内容，View只能读取内容，不能写入</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据</button>
    </div>
    <div class="content1">{{this.text}}</div>

    <div class="head1">读写绑定{{{: ': {{# 属性}}' }}}</div>
    <div class="desc1">绑定内容，View可以读取和写入内容，一般用于model或组件间通讯用</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据, 会变</button>
    </div>
    <div class="content1">
    <input type="text" model={{# this.text}}>
    </div>

</div>`
})
class TestChild extends Componet{
    constructor(){
        super();
    }

    text:string = 'text';
    changeText(){
        console.log('aaa');
        this.text = new Date().toString();
        this.$update();
    }

    onInit(){
        console.log('onInit TestChild');
        super.onInit();
    }

    onReady(){
        console.log('onReady TestChild');
        super.onReady();
    }

    onChanged() {
        console.log('onChanged TestChild');
        super.onChanged();
    }


    onUpdate(){
        console.log('onUpdate');
        super.onUpdate();
    }

    onDispose(){
        super.onDispose();
        console.log('onDispose');
    }

}

@VMComponet({
    name:'binddemo',
    tmpl:`<div>

    <div class="head1">只读绑定{{{: ': {{表达式}}' }}}</div>
    <div class="desc1">绑定内容，View只能读取内容，不能写入</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据</button>
    </div>
    <div class="content1">{{this.text}}</div>

    <div class="head1">打印{{{: ': {{: 表达式}}' }}}</div>
    <div class="desc1">向view打印表达内容，并不会做绑定，所以就是第一次值有效，一般用于打印for的内容，减少不必要的同步</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据, 不会变，由于没有绑定</button>
    </div>
    <div class="content1">{{:this.text}}, 是第一次的值"text"</div>

    <div class="head1">只写绑定{{{: ': {{> 属性}}' }}}</div>
    <div class="desc1">绑定内容，View只能写入内容，不能读取内容，一般用于组件间通讯用</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据, 不会变，由于只写</button>
    </div>
    <div class="content1">
    <input type="text" model={{> this.text}}>
    </div>

    <div class="head1">读写绑定{{{: ': {{# 属性}}' }}}</div>
    <div class="desc1">绑定内容，View可以读取和写入内容，一般用于model或组件间通讯用</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据, 会变</button>
    </div>
    <div class="content1">
    <input type="text" model={{# this.text}}>
    </div>

    <div class="head1">事件绑定语句{{{: ': {{@ 执行表达式}}' }}}</div>
    <div class="desc1">绑定事件，一般用于事件处理，可以获取event, element内容</div>
    <div class="toolbar1">
        <button click="{{@this.changeText(event, element);console.log(event, element);}}">点击刷新数据, 可以获取event, element内容(在console里有输出)</button>
    </div>
    <br />

    <div class="head1">过滤器 {{{: ': {{表达式}}' }}}</div>
    <div class="desc1">绑定内容，View只能读取内容，不能写入</div>
    <div class="toolbar1">
        <button click="{{@this.changeText()}}">刷新数据</button>
    </div>
    <div class="content1">{{this.text | text | add:this.tick()}}</div>

    <!--处理子组件-->
    <bind-test text="{{#this.text}}" />
</div>`,
    include:[TestChild, TextFilter, AddFilter]
})
export default class BindDemoComponet extends Componet{

    constructor(){
        super();
    }

    tick(){
        return new Date().valueOf();
    }


    text:string = 'text';
    changeText(){
        this.text = new Date().toString();
        this.$update();
    }

    onChanged(){
        console.log('onChanged binddemo');
        super.onChanged();
    }

}
