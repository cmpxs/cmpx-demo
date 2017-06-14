import { Componet, VM } from "cmpx";

@VM({
    name:'formtest',
    tmpl:`<div>
    <div class="row">
        <span class="text">input test</span>
        <span class="input">
            <input type="text" value="{{#this.model.input}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">select test</span>
        <span class="input">
            <select value="{{#this.model.select}}">
                <option value="">请选择</option>
                <option value="1">option1</option>
                <option value="2">option2</option>
            </select>
        </span>
    </div>
    <div class="row">
        <span class="text">checkbox value</span>
        <span class="input">
            <input type="checkbox" checked="{{#this.model.checked}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">textarea test</span>
        <span class="input">
            <textarea value="{{#this.model.textarea}}"></textarea>
        </span>
    </div>
    <div>
        <span class="text">结果</span>
        <span class="input">
            <textarea style="width:500px;height:100px;"
                value="{{JSON.stringify(this.model)}}"></textarea>
        </span>
    </div>
</div>`,
    style:`
    .row {margin: 3px 3px;}
    .text {
        margin-right: 10px;
        width: 120px;
        text-align: right;
        display: inline-block;
        vertical-align: top;
    }
    .input {}
`
})
export default class FormComponet extends Componet{
    model = {
        input:'',
        select:'1',
        checked:true,
        textarea:''
    };

    constructor(){
        super();
    }

}