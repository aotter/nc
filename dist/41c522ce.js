import{d as G,r as H,o as I,b as R,c as q,f as L,F as N,J as Q,n as F,u as e,e as T,k as V,K as W,l as X}from"./20e3268f.js";import{P as J}from"./1236a3b0.js";import{g as K}from"./e11e3bed.js";import{a as Y}from"./bd02d60c.js";import{u as Z,a as $}from"./890103ee.js";import{u as ee,a as oe}from"./37a621d8.js";import{_ as re}from"./66dda505.js";import"./11070180.js";import"./cb277961.js";const te={class:"pictures"},ae=G({__name:"ScrollMarquee.ce",setup(le){X(t=>{var a,r,l,v,f,m,g,b,h,y,k,x,w,P,_,C,E,M;return{e6a592ce:e(c).dimension[0],e6a59290:e(c).dimension[1],"6068e652":((r=(a=e(o))==null?void 0:a.grid)==null?void 0:r.columns)||1,88513516:((v=(l=e(o))==null?void 0:l.grid)==null?void 0:v.rows)||1,"7126f2fd":((m=(f=e(o))==null?void 0:f.grid)==null?void 0:m.gap)||0,17109389:((h=(b=(g=e(s))==null?void 0:g.position)==null?void 0:b.coordinate)==null?void 0:h[0])||1,"4bf6ceca":((x=(k=(y=e(s))==null?void 0:y.position)==null?void 0:k.coordinate)==null?void 0:x[1])||1,"4a0503b6":((_=(P=(w=e(s))==null?void 0:w.position)==null?void 0:P.dimension)==null?void 0:_[0])||1,"0fe3b966":((M=(E=(C=e(s))==null?void 0:C.position)==null?void 0:E.dimension)==null?void 0:M[1])||1,b5686e6e:e(B)}});const{bridge:O}=Y(),{type:c,properties:S}=ee(),{root:o,pictures:s,picture:n}=S,U={down:"yPercent",left:"xPercent",right:"xPercent",up:"yPercent"},j={down:"column-reverse",left:"row",right:"row-reverse",up:"column"},d=H([]);Z(o.events.impressions);const{handleClick:u}=$(o.events.click),{handleMediaReady:z}=oe({expensiveEvents:[J],preloadUrls:[o.events.click.url]}),{duration:A=100,direction:i="left"}=o.options||{},B=j[i],D=U[i],p=K.timeline({defaults:{duration:A,ease:"none",repeat:-1},paused:!0}).set({},{},100).progress(.5);return O("on",J,({positionRatio:t})=>{K.to(p,{progress:t})}),I(()=>{d.value.forEach(t=>{p.to(t,{[D]:i==="left"||i==="up"?-100:100})})}),(t,a)=>(R(),q("div",{class:"root",role:"link",style:F(e(o).style),onClick:a[0]||(a[0]=(...r)=>e(u)&&e(u)(...r))},[L("div",te,[(R(),q(N,null,Q(3,r=>T(V(e(W)),{key:r,".crossOrigin":"anonymous",".sources":e(n).picture.sources,".src":e(n).picture.src,".load":e(z),style:F(e(n).style),class:"picture",ref_for:!0,ref:l=>{d.value.push(l)}},null,8,[".sources",".src",".load","style"])),64))])],4))}}),se=`:host{aspect-ratio:var(--e6a592ce)/var(--e6a59290)}:host>.root{width:100%;height:100%}@supports not (aspect-ratio: auto){:host:before{float:left;padding-top:calc(var(--e6a59290) / var(--e6a592ce) * 100%);content:""}:host:after{display:block;clear:both;content:""}:host>div{position:absolute;top:0;left:0}}.root{display:grid;grid-template:repeat(var(--88513516),1fr)/repeat(var(--6068e652),1fr);gap:var(--7126f2fd);place-content:center;cursor:pointer}.pictures{grid-area:var(--4bf6ceca)/var(--17109389)/calc(var(--4bf6ceca) + var(--0fe3b966))/calc(var(--17109389) + var(--4a0503b6));display:flex;flex-direction:var(--b5686e6e)}.picture{flex:1 0 auto}
`,ie=re(ae,[["styles",[se]]]);export{ie as default};