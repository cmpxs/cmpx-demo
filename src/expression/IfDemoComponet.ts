import { Componet, VM } from 'cmpx';

@VM({
    name:'ifdemo',
    tmpl:`<div>

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

</div>`
})
export default class IfDemoComponet extends Componet{

    constructor(){
        super();
    }

    ok1 = true;
    ok2 = true;
    ok3 = true;
    
}