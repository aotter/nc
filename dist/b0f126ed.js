import{d as Fo,b as m,c as Go,j as Ao,n as r,u as o,k as $o,f as b,t as v,N as Ho,m as Io,l as Jo}from"./ca1f3d0c.js";import{C as g}from"./9837cbe8.js";import{A as Ko}from"./2040bebd.js";import{u as Lo,V as Eo}from"./7f539f92.js";import{b as Mo,c as Oo}from"./a32a8370.js";import{u as Po}from"./38d2230a.js";import{u as Qo}from"./2c76a417.js";import{_ as Ro}from"./66dda505.js";const So=Fo({__name:"Card.ce",setup(Xo){Jo(Do=>{var f,t,d,c,h,y,k,w,x,z,C,_,j,A,$,E,N,T,V,q,B,D,F,G,H,I,J,K,L,M,O,P,Q,R,S,U,W,X,Y,Z,oo,lo,io,ao,ro,no,eo,to,co,so,vo,uo,po,fo,mo,bo,go,ho,yo,ko,wo,xo,zo,Co,_o,jo;return{"9c27502c":((t=(f=o(s))==null?void 0:f.grid)==null?void 0:t.rows)||3,c124bcf4:((c=(d=o(s))==null?void 0:d.grid)==null?void 0:c.columns)||3,"1e40662a":((y=(h=o(s))==null?void 0:h.grid)==null?void 0:y.gap)||0,"11a0fb3b":((x=(w=(k=o(n))==null?void 0:k.position)==null?void 0:w.coordinate)==null?void 0:x[0])||1,"4687367c":((_=(C=(z=o(n))==null?void 0:z.position)==null?void 0:C.coordinate)==null?void 0:_[1])||1,"8c6f4f96":(($=(A=(j=o(n))==null?void 0:j.position)==null?void 0:A.dimension)==null?void 0:$[0])||3,"22a2d916":((T=(N=(E=o(n))==null?void 0:E.position)==null?void 0:N.dimension)==null?void 0:T[1])||2,"66b9c2f6":((B=(q=(V=o(l))==null?void 0:V.position)==null?void 0:q.coordinate)==null?void 0:B[0])||1,"018959c8":((G=(F=(D=o(l))==null?void 0:D.position)==null?void 0:F.coordinate)==null?void 0:G[1])||3,"3bafa3aa":((J=(I=(H=o(l))==null?void 0:H.position)==null?void 0:I.dimension)==null?void 0:J[0])||2,"7095deea":((M=(L=(K=o(l))==null?void 0:K.position)==null?void 0:L.dimension)==null?void 0:M[1])||1,"4e931c72":((Q=(P=(O=o(a))==null?void 0:O.position)==null?void 0:P.coordinate)==null?void 0:Q[0])||1,"0d9cad0a":((U=(S=(R=o(a))==null?void 0:R.position)==null?void 0:S.coordinate)==null?void 0:U[1])||3,"7e23e028":((Y=(X=(W=o(a))==null?void 0:W.position)==null?void 0:X.dimension)==null?void 0:Y[0])||2,"99ebc930":((lo=(oo=(Z=o(a))==null?void 0:Z.position)==null?void 0:oo.dimension)==null?void 0:lo[1])||1,"44c5bf12":((ro=(ao=(io=o(i))==null?void 0:io.position)==null?void 0:ao.coordinate)==null?void 0:ro[0])||3,"79abfa53":((to=(eo=(no=o(i))==null?void 0:no.position)==null?void 0:eo.coordinate)==null?void 0:to[1])||3,"05c145be":((vo=(so=(co=o(i))==null?void 0:co.position)==null?void 0:so.dimension)==null?void 0:vo[0])||1,"3aa780ff":((fo=(po=(uo=o(i))==null?void 0:uo.position)==null?void 0:po.dimension)==null?void 0:fo[1])||1,ce7887f6:((go=(bo=(mo=o(e))==null?void 0:mo.position)==null?void 0:bo.coordinate)==null?void 0:go[0])||(o(p)===o(Eo)?1:3),"646568ed":((ko=(yo=(ho=o(e))==null?void 0:ho.position)==null?void 0:yo.coordinate)==null?void 0:ko[1])||1,"051193a2":((zo=(xo=(wo=o(e))==null?void 0:wo.position)==null?void 0:xo.dimension)==null?void 0:zo[0])||1,"39f7cee3":((jo=(_o=(Co=o(e))==null?void 0:Co.position)==null?void 0:_o.dimension)==null?void 0:jo[1])||1,"272cbd90":o(p)===o(Eo)?"start":"end"}});const{t:No}=Po(),{bridge:u}=Oo(),{layout:{dimension:To},properties:{root:s,type:n,title:l,sponsor:a,callToAction:i,logo:e}}=Lo(),{type:{name:p}}=Qo();Mo(To);const Vo=()=>{u("emit",g,Ko)},qo=()=>{u("emit",g,l.events.click)},Bo=()=>{u("emit",g,i.events.click)};return(Do,f)=>{var t,d,c;return m(),Go("div",{class:"root",style:r((t=o(s))==null?void 0:t.style)},[(m(),Ao($o(`${o(Ho)}-${o(p)}`),{class:"type",style:r((d=o(n))==null?void 0:d.style)},null,8,["style"])),b("h1",{class:"title",role:"link",style:r(o(l).style),onClick:qo},v(o(l).text.content),5),b("p",{class:"sponsor",style:r(o(a).style)},v(o(No)("sponsor"))+" | "+v(o(a).text.content),5),b("button",{class:"call-to-action",type:"button",style:r(o(i).style),onClick:Bo},v(o(i).text.content),5),(m(),Ao($o(o(Io)),{class:"logo",style:r((c=o(e))==null?void 0:c.style),onClick:Vo},null,8,["style"]))],4)}}}),Uo=`:host{display:block}:host>.root{width:100%;aspect-ratio:var(--width)/var(--height)}@supports not (aspect-ratio: auto){:host{position:relative;padding-top:calc(var(--height) / var(--width) * 100%)}:host>.root{position:absolute;top:0;left:0;width:100%;height:100%}}.root{display:grid;grid-template:repeat(var(--c124bcf4),1fr)/repeat(var(--9c27502c),1fr);gap:var(--1e40662a)}.type{grid-area:var(--4687367c)/var(--11a0fb3b)/calc(var(--4687367c) + var(--22a2d916))/calc(var(--11a0fb3b) + var(--8c6f4f96));position:relative;z-index:var(--z-index-type);overflow:hidden}.title{grid-area:var(--018959c8)/var(--66b9c2f6)/calc(var(--018959c8) + var(--7095deea))/calc(var(--66b9c2f6) + var(--3bafa3aa));-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;max-width:100%;height:-moz-fit-content;height:fit-content;padding:0 .875rem;overflow:hidden;font-size:.875rem;font-weight:700;color:var(--color-800);cursor:pointer}@media (prefers-color-scheme: dark){.title{color:var(--color-100)}}.sponsor{grid-area:var(--0d9cad0a)/var(--4e931c72)/calc(var(--0d9cad0a) + var(--99ebc930))/calc(var(--4e931c72) + var(--7e23e028));align-self:flex-end;padding:0 .875rem;overflow:hidden;font-size:.625rem;color:var(--color-500);white-space:nowrap}@media (prefers-color-scheme: dark){.sponsor{color:var(--color-600)}}.call-to-action{all:unset;z-index:var(--z-index-call-to-action);display:grid;place-items:center;overflow:hidden;font-size:.875rem;font-weight:700;color:var(--color-900);white-space:nowrap;cursor:pointer;background-color:var(--color-300);transition:all var(--duration-default) var(--ease-default);transform-origin:100% 100%;-webkit-backdrop-filter:blur(.5rem);backdrop-filter:blur(.5rem);grid-area:var(--79abfa53)/var(--44c5bf12)/calc(var(--79abfa53) + var(--3aa780ff))/calc(var(--44c5bf12) + var(--05c145be))}.call-to-action:hover{background-color:var(--color-400-80);border-radius:.625rem 0;transform:scale(1.25)}@media (prefers-color-scheme: dark){.call-to-action{color:var(--color-200);background-color:var(--color-900)}.call-to-action:hover{color:var(--color-100);background-color:var(--color-600-80)}}.logo{grid-area:var(--646568ed)/var(--ce7887f6)/calc(var(--646568ed) + var(--39f7cee3))/calc(var(--ce7887f6) + var(--051193a2));z-index:var(--z-index-logo);align-self:flex-start;justify-self:var(--272cbd90);margin:.25rem}
`,Wo=Ro(So,[["styles",[Uo]]]);export{Wo as default};
