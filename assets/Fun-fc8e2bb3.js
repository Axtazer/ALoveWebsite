import{_ as g,r as T,o as l,c as i,e as p,b as e,n as f,d as u,w as _,v as a,t as m,f as b,F as c,g as v}from"./index-38f1a630.js";let d=0;const x={name:"Fun",components:{},data(){return{titleClass:"title",msgClass:"msg",msg:"",magnifique:!0,newTodo:"",todos:[{id:d++,text:"Kiss You"},{id:d++,text:"Fuck You"},{id:d++,text:"Love You"}]}},methods:{toggle(){this.magnifique=!this.magnifique},addTodo(){this.todos.push({id:d++,text:this.newTodo}),this.newTodo=""},removeTodo(r){this.todos=this.todos.filter(o=>o!==r)}}},w=e("br",null,null,-1),k=e("br",null,null,-1),y=e("br",null,null,-1),A=e("br",null,null,-1),C=e("img",{src:"https://cdn.discordapp.com/attachments/889957209537138819/1063793011290550302/photo_bgax_de_moi.jpg",style:{"max-width":"30%"}},null,-1),E=e("br",null,null,-1),F=e("br",null,null,-1),B=e("br",null,null,-1),N=e("br",null,null,-1),V=e("h2",null," Toggle button : ",-1),q={key:0},I={key:1},L=e("button",null,"Add Todo",-1),O=["onClick"];function S(r,o,U,G,s,n){const h=T("router-view");return l(),i(c,null,[w,k,y,p(h,{class:"custom-router-view"}),e("h1",{class:f(s.titleClass),style:{"font-family":"'Bungee Shade'"}},"Je t'aime",2),u(" (THIS PEOPLE)"),A,C,E,_(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.msg=t),placeholder:"Ton message"},null,512),[[a,s.msg]]),F,B,e("span",null,[u("Ton message: "),N,u(m(s.msg),1)]),V,e("button",{onClick:o[1]||(o[1]=(...t)=>n.toggle&&n.toggle(...t))},"I'm the TOGGLE BUTTON"),s.magnifique?(l(),i("h1",q,"Tavu ce MAGNIFIQUE TEXTE WAAAAAA! ✨")):(l(),i("h1",I,"Oh non tu l'as fais partir :(")),e("form",{onSubmit:o[3]||(o[3]=b((...t)=>n.addTodo&&n.addTodo(...t),["prevent"]))},[_(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.newTodo=t)},null,512),[[a,s.newTodo]]),L],32),e("ul",null,[(l(!0),i(c,null,v(s.todos,t=>(l(),i("li",{key:t.id},[u(m(t.text)+" ",1),e("button",{onClick:M=>n.removeTodo(t)},"X",8,O)]))),128))])],64)}const D=g(x,[["render",S]]);export{D as default};