import { Componet, VMComponet, VMVar, CmpxEvent } from 'cmpx';

@VMComponet({
    name:'childitem',
    tmpl:'<div>{{this.text}}\n\r</div>'
})
export class ChildItemComponent extends Componet{
    text:string = 'text';
    setText(text:string){
        this.text = text;
        this.$update();
    }
}

@VMComponet({
    name:'childitem2',
    tmpl:`<div>
    <input type="text" model="{{#this.text}}" />
</div>`
})
export class ChildItem2Component extends Componet{
    text:string = 'text';
    ev:CmpxEvent = new CmpxEvent();

    onChanged(){
        this.ev.trigger([this.text]);
        super.onChanged();
    }
}


@VMComponet({
    name:'loaditem',
    tmplUrl:'tmpl1.html',
    styleUrl:'css1.css'
})
export class LoadItemComponent extends Componet{
    text:string = 'loaditem text';
}

@VMComponet({
    name:'incitem',
    tmpl:`<div>
    {{include tmpl="incTmpl" /}}
    <div>aaa:{{this.text}}</div>
</div>`
})
export class IncItemComponent extends Componet{
    text:string = 'inc text';
}

@VMComponet({
    name:'childcmp',
    include:[ChildItemComponent, ChildItem2Component, LoadItemComponent, IncItemComponent],
    tmpl:`<div>
    <div class="head1">父子属性通讯1</div>
    <div class="desc1">通过标签属性通讯</div>
    <div class="content1">
        <span class="text">定义input1变量</span>
        <span class="input">
            <input type="text" model="{{#this.text}}" />
            {{this.text}}
            <childitem text="{{this.text}}" />
        </span>
    </div>

    <div class="head1">$var方式访问子组件</div>
    <div class="desc1">通过定义$var通讯</div>
    <div class="content1">
        <span class="text">定义input1变量</span>
        <span class="input">
            <input type="text" model="{{#this.text1}}"
                change="{{@ childitem1.text=element.value;childitem1.$update();}}" />
            {{this.text1}}
            <childitem $var="childitem1" />
        </span>
    </div>

    <div class="head1">事件方式通讯</div>
    <div class="desc1">通过事件方式通讯</div>
    <div class="content1">
        <span class="input">
            <childitem2 ev="{{@ this.text2=arguments[0];this.$update()}}" text="text111" />
            {{this.text2}}
        </span>
    </div>

    <loaditem />

    <incitem>
    {{tmpl id="incTmpl"}}
        tmpl:{{this.text}}
    {{/tmpl}}
    </incitem>
</div>`
})
export default class ChildComponet extends Componet{
    text:string = 'a';
    onReady(){
        setTimeout(()=>{
            this.childitem1 && this.childitem1.setText('111111')
        }, 2000);
    }

    @VMVar()
    childitem1:ChildItemComponent;

}