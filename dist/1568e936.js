import{d as H,r as I,o as J,b as E,c as M,f as K,F as L,q as N,n as R,u as o,e as Q,k as T,s as V,l as W}from"./b22c9277.js";import{P as F}from"./9837cbe8.js";import{g as O}from"./f761d461.js";import{b as X,c as Y}from"./6c555e4a.js";import{u as Z,a as $}from"./7fc37c3a.js";import{u as oo}from"./aebd3814.js";import{u as eo}from"./13a7e6a7.js";import{_ as ro}from"./66dda505.js";import"./cb277961.js";const so={class:"pictures"},to=H({__name:"ScrollMarquee.ce",setup(lo){W(s=>{var t,r,l,p,v,f,m,h,b,g,y,w,k,x,P,_,q,C;return{"9b789158":((r=(t=o(e))==null?void 0:t.grid)==null?void 0:r.columns)||1,"7cb29418":((p=(l=o(e))==null?void 0:l.grid)==null?void 0:p.rows)||1,beac380c:((f=(v=o(e))==null?void 0:v.grid)==null?void 0:f.gap)||0,"4ae62406":((b=(h=(m=o(i))==null?void 0:m.position)==null?void 0:h.coordinate)==null?void 0:b[0])||1,"7fcc5f47":((w=(y=(g=o(i))==null?void 0:g.position)==null?void 0:y.coordinate)==null?void 0:w[1])||1,"67b52bf0":((P=(x=(k=o(i))==null?void 0:k.position)==null?void 0:x.dimension)==null?void 0:P[0])||1,"010ba549":((C=(q=(_=o(i))==null?void 0:_.position)==null?void 0:q.dimension)==null?void 0:C[1])||1,"28b56b28":o(D)}});const{bridge:S}=Y(),{type:{dimension:U},properties:{root:e,pictures:i,picture:n}}=eo(),j={down:"yPercent",left:"xPercent",right:"xPercent",up:"yPercent"},z={down:"column-reverse",left:"row",right:"row-reverse",up:"column"},c=I([]);X(U),Z(e.events.impressions);const{handleClick:u}=$(e.events.click),{handleMediaReady:A}=oo({expensiveEvents:[F],preloadUrls:[e.events.click.url]}),{duration:B=100,direction:a="left"}=e.options||{},D=z[a],G=j[a],d=O.timeline({defaults:{duration:B,ease:"none",repeat:-1},paused:!0}).set({},{},100).progress(.5);return S("on",F,({positionRatio:s})=>{O.to(d,{progress:s})}),J(()=>{c.value.forEach(s=>{d.to(s,{[G]:a==="left"||a==="up"?-100:100})})}),(s,t)=>(E(),M("div",{class:"root",role:"link",style:R(o(e).style),onClick:t[0]||(t[0]=(...r)=>o(u)&&o(u)(...r))},[K("div",so,[(E(),M(L,null,N(3,r=>Q(T(o(V)),{key:r,".crossOrigin":"anonymous",".sources":o(n).picture.sources,".src":o(n).picture.src,".load":o(A),style:R(o(n).style),class:"picture",ref_for:!0,ref:l=>{c.value.push(l)}},null,8,[".sources",".src",".load","style"])),64))])],4))}}),io=`:host :host{display:block}:host :host>.root{width:100%;aspect-ratio:var(--width)/var(--height)}@supports not (aspect-ratio: auto){:host :host{position:relative;padding-top:calc(var(--height) / var(--width) * 100%)}:host :host>.root{position:absolute;top:0;left:0;width:100%;height:100%}}.root{display:grid;grid-template:repeat(var(--7cb29418),1fr)/repeat(var(--9b789158),1fr);gap:var(--beac380c);cursor:pointer}.pictures{grid-area:var(--7fcc5f47)/var(--4ae62406)/calc(var(--7fcc5f47) + var(--010ba549))/calc(var(--4ae62406) + var(--67b52bf0));display:flex;flex-direction:var(--28b56b28)}.picture{flex:1 0 auto}
`,ao=ro(to,[["styles",[io]]]);export{ao as default};
