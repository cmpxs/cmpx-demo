import { Componet, VM } from "cmpx";

@VM({
    name:'formtest',
    tmpl:`<div>
    <div class="row">
        <span class="text">input test</span>
        <span class="input">
            <input type="text" model="{{#this.model.input}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">select test</span>
        <span class="input">
            <select model="{{#this.model.select}}">
                <option value="">请选择</option>
                <option value="1">option1</option>
                <option value="2">option2</option>
            </select>
        </span>
    </div>
    <div class="row">
        <span class="text">checkbox</span>
        <span class="input">
            <input type="checkbox" value="1" checked="{{#this.model.checked}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">checkbox value</span>
        <span class="input">
            <input type="checkbox" value="1" model="{{#this.model.checkbox}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">radio value</span>
        <span class="input">
            <input type="radio" value="1" name="radio1" model="{{#this.model.radio}}" />
            <input type="radio" value="2" name="radio1" model="{{#this.model.radio}}" />
        </span>
    </div>
    <div class="row">
        <span class="text">textarea test</span>
        <span class="input">
            <textarea model="{{#this.model.textarea}}"></textarea>
        </span>
    </div>
    <div>
        <span class="text">结果</span>
        <span class="input">
            <textarea style="width:500px;height:100px;"
                model="{{JSON.stringify(this.model)}}"></textarea>
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
        textarea:'',
        checkbox:'',
        radio:'2'
    };

    constructor(){
        super();
    }

}