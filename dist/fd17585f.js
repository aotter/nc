import{d as u,r as n,A as m,o as v,b as d,c as s,F as y,G as f,u as h}from"./0381570b.js";import{_ as b}from"./66dda505.js";const w="video/webm; codecs=av01",_="video/mp4; codecs=avc1",k="video/mp4; codecs=hvc1",q="video/webm; codecs=vp9",c={[w]:1,[_]:4,[k]:3,[q]:2},A=["type","src"],F=u({__name:"Video.ce",props:{loadedmetadata:{required:!1,type:Function},sources:{required:!1,type:Array}},setup(t){const i=t,r=n(),l=m(()=>[...i.sources||[]].sort((e,a)=>c[e.type]-c[a.type]));return v(()=>{var e;(e=r.value)==null||e.load()}),(e,a)=>(d(),s("video",{ref_key:"videoElement",ref:r,onLoadedmetadata:a[0]||(a[0]=(...o)=>t.loadedmetadata&&t.loadedmetadata(...o)),playsinline:""},[(d(!0),s(y,null,f(h(l),(o,p)=>(d(),s("source",{type:o.type,key:p,src:o.src},null,8,A))),128))],544))}}),x=`.root{width:100%;height:auto;-webkit-touch-callout:none}
`,V=b(F,[["styles",[x]]]);export{V as default};