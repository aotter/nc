import{a,E as i}from"./ca1f3d0c.js";const p=(e,r)=>{const t=a;t[e].forEach(o=>{r(...o)});const s=new Proxy(t[e],{get:(o,c)=>Reflect.get(o,c),set:(o,c,n)=>(c in Array.prototype||r(...n),Reflect.set(o,c,n))});return t[e]=s,s},g=Object.assign({"./app.ts":()=>import("./d87a53d3.js"),"./web.ts":()=>import("./aea5239d.js")}),b=g[`./${a[i]||"web"}.ts`];(async()=>{const e=await b();p("bridgeClip",(r,t,...s)=>{try{e[r][t](...s)}catch{console.error(`bridge method: ${r} or event: ${t} is not exist`)}})})();