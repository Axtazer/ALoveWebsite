import{_ as c,o as l,c as i,b as e,n as g,d as u,w as a,v as m,t as _,e as T,F as h,r as p}from"./index-41fc7580.js";var d=0;const f={name:"Fun",components:{},data(){return{titleClass:"title",msgClass:"msg",msg:"",magnifique:!0,newTodo:"",todos:[{id:d++,text:"Kiss You"},{id:d++,text:"Fuck You"},{id:d++,text:"Love You"}]}},methods:{toggle(){this.magnifique=!this.magnifique},addTodo(){this.todos.push({id:d++,text:this.newTodo}),this.newTodo=""},removeTodo(r){this.todos=this.todos.filter(o=>o!==r)}}},v=e("br",null,null,-1),b=e("br",null,null,-1),x=e("br",null,null,-1),k=e("br",null,null,-1),y=e("img",{src:"https://img.freepik.com/vecteurs-premium/profil-silhouette-homme-avatar-masculin-icone-anonyme-visage-censure_434359-85.jpg",style:{"max-width":"30%"}},null,-1),w=e("br",null,null,-1),A=e("br",null,null,-1),C=e("br",null,null,-1),E=e("br",null,null,-1),F=e("h2",null," Toggle button : ",-1),B={key:0},q={key:1},I=e("button",null,"Add Todo",-1),L=["onClick"];function N(r,o,O,S,s,n){return l(),i(h,null,[v,b,x,e("h1",{class:g(s.titleClass),style:{"font-family":"'Bungee Shade'"}},"Je t'aime",2),u(" (THIS PEOPLE)"),k,y,w,a(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.msg=t),placeholder:"Ton message"},null,512),[[m,s.msg]]),A,C,e("span",null,[u("Ton message: "),E,u(_(s.msg),1)]),F,e("button",{onClick:o[1]||(o[1]=(...t)=>n.toggle&&n.toggle(...t))},"I'm the TOGGLE BUTTON"),s.magnifique?(l(),i("h1",B,"Tavu ce MAGNIFIQUE TEXTE WAAAAAA! ✨")):(l(),i("h1",q,"Oh non tu l'as fais partir :(")),e("form",{onSubmit:o[3]||(o[3]=T((...t)=>n.addTodo&&n.addTodo(...t),["prevent"]))},[a(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.newTodo=t)},null,512),[[m,s.newTodo]]),I],32),e("ul",null,[(l(!0),i(h,null,p(s.todos,t=>(l(),i("li",{key:t.id},[u(_(t.text)+" ",1),e("button",{onClick:U=>n.removeTodo(t)},"X",8,L)]))),128))])],64)}const G=c(f,[["render",N]]);export{G as default};
