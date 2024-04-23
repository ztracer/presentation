function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DJIozAuP.js","assets/modules/unplugin-icons-BaoYVvhx.js","assets/modules/vue-BLmQdX0u.js","assets/modules/shiki-vbwtq7uO.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BdKwG4Wz.js","assets/index-B_itl62A.js","assets/monaco/bundled-types-Ccmk4N9V.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-CFoY-kCx.css","assets/index-C7RlXL1f.css","assets/slidev/index-DBnNC4YX.js","assets/slidev/SlidesShow-BwQDDk1Z.js","assets/slidev/bottom-BWDsHvw6.js","assets/bottom-DbIWt59F.css","assets/slidev/IconButton-ChrORvDW.js","assets/slidev/title-renderer-D5OlwG84.js","assets/slidev/context-DCcASDl6.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as y,_ as $}from"../monaco/bundled-types-Ccmk4N9V.js";import{d as V,a6 as P,o,c as r,H as e,b as v,e as l,f as z,i as D,g as a,a7 as B,y as E,k as N,a5 as g,a0 as O,Q as w,l as f,F as I,t as R,h as H}from"../modules/vue-BLmQdX0u.js";import{a as x,c as C,e as S,f as T,g as M,w as U,h as A,j as L}from"./index-DBnNC4YX.js";import{Q,G as j,r as F,u as G,S as W,a as K,N as X}from"./SlidesShow-BwQDDk1Z.js";import{_ as h,u as Y}from"../index-B_itl62A.js";import{P as q}from"./PrintStyle-Ct9Wuf8W.js";import{u as J}from"./DrawingPreview-BdKwG4Wz.js";import"../modules/file-saver-DY7lxZlc.js";import"./bottom-BWDsHvw6.js";import"../modules/unplugin-icons-BaoYVvhx.js";import"./IconButton-ChrORvDW.js";import"./title-renderer-D5OlwG84.js";import"./context-DCcASDl6.js";import"../modules/shiki-vbwtq7uO.js";const Z="/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},te=V({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(u,{emit:i}){const n=u,t=P(n,"modelValue",i);function s(){t.value=!1}return(c,d)=>(o(),r(B,null,[e(t)?(o(),v("div",ee,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:d[0]||(d[0]=m=>s())}),l("div",{class:D(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[z(c.$slots,"default")],2)])):a("v-if",!0)],1024))}}),oe=h(te,[["__file","D:/slidev/test/node_modules/@slidev/client/internals/Modal.vue"]]),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},le=["innerHTML"],ae=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),O("dev ")])])],-1),ie=V({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(u,{emit:i}){const t=P(u,"modelValue",i),s=E(()=>typeof y.info=="string");return(c,d)=>(o(),r(oe,{modelValue:e(t),"onUpdate:modelValue":d[0]||(d[0]=m=>g(t)?t.value=m:null),class:"px-6 py-4"},{default:N(()=>[l("div",se,[s.value?(o(),v("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,le)):a("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=h(ie,[["__file","D:/slidev/test/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=V({__name:"Controls",setup(u){const i=w(),n=w();return(_,t)=>(o(),v(I,null,[f(Q,{modelValue:e(x),"onUpdate:modelValue":t[0]||(t[0]=s=>g(x)?x.value=s:null)},null,8,["modelValue"]),f(j),i.value?(o(),r(e(i),{key:0})):a("v-if",!0),n.value?(o(),r(e(n),{key:1,modelValue:e(C),"onUpdate:modelValue":t[1]||(t[1]=s=>g(C)?C.value=s:null)},null,8,["modelValue"])):a("v-if",!0),e(y).info?(o(),r(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":t[2]||(t[2]=s=>g(S)?S.value=s:null)},null,8,["modelValue"])):a("v-if",!0)],64))}}),de=h(re,[["__file","D:/slidev/test/node_modules/@slidev/client/internals/Controls.vue"]]),ue=V({__name:"play",setup(u){F();const{next:i,prev:n,isEmbedded:_,isPrintMode:t}=Y(),{isDrawing:s}=J(),c=R();function d(p){var b;M.value||((b=p.target)==null?void 0:b.id)==="slide-container"&&(p.screenX/window.innerWidth>.6?i():n())}G(c);const m=E(()=>T.value||M.value);w();const k=w();return $(()=>import("./DrawingControls-DJIozAuP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])).then(p=>k.value=p.default),(p,b)=>(o(),v(I,null,[e(t)?(o(),r(q,{key:0})):a("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:c,class:D(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[f(W,{class:"w-full h-full",style:H({background:"var(--slidev-slide-container-background, black)"}),width:e(t)?e(U).width.value:void 0,scale:e(A),"is-main":!0,onPointerdown:d},{default:N(()=>[f(K,{"render-context":"slide"})]),controls:N(()=>[e(t)?a("v-if",!0):(o(),v("div",{key:0,class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[f(X,{class:"m-auto",persist:m.value},null,8,["persist"])],2)),!e(y).drawings.presenterOnly&&!e(_)&&k.value?(o(),r(e(k),{key:1,class:"ml-0"})):a("v-if",!0)]),_:1},8,["style","width","scale"]),a("v-if",!0)],2),e(t)?a("v-if",!0):(o(),r(de,{key:1}))],64))}}),Ce=h(ue,[["__file","D:/slidev/test/node_modules/@slidev/client/pages/play.vue"]]);export{Ce as default};
