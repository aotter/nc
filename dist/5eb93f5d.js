import{d as g,A as d,b as e,c as t,F as y,G as m,u as f,f as q}from"./0381570b.js";import{_ as b}from"./66dda505.js";const h="image/apng",w="image/avif",_="image/webp",k="image/jxl",a={[h]:4,[w]:2,[k]:1,[_]:3},x=["srcset","type"],A=["crossorigin","src","srcset"],F=g({__name:"Picture.ce",props:{crossOrigin:{required:!1,type:String},onLoad:{required:!1,type:Function},sources:{required:!1,type:Array},src:{required:!0,type:String},srcset:{required:!1,type:String}},emits:["load"],setup(s,{emit:c}){const n=s,u=d(()=>[...n.sources||[]].sort((r,o)=>a[r.type]-a[o.type])),p=r=>{c("load",r)};return(r,o)=>(e(),t("picture",null,[(e(!0),t(y,null,m(f(u),(i,l)=>(e(),t("source",{srcset:i.srcset,type:i.type,key:l},null,8,x))),128)),q("img",{crossorigin:s.crossOrigin,class:"root",onLoad:p,src:s.src,srcset:s.srcset,draggable:"false",decoding:"async"},null,40,A)]))}}),L=`.root{width:100%;height:auto;-webkit-touch-callout:none}
`,S=b(F,[["styles",[L]]]);export{S as default};