import{g as N,a as R,e as o,s as d,p as y}from"./0f44fc6b.js";import{C as c,T as n,I as r,a as m,P as v,R as E,_ as l,S as h}from"./43b0c463.js";import"./903daaf2.js";const i=(s,e)=>{o.emit(s,JSON.stringify(e))},p={[c]:s=>{i(c,s);const{tracks:e=[]}=s;p[n]({name:c,tracks:e})},[r]:s=>{i(r,s)},[m]:s=>{i(m,s)},[v]:s=>{i(v,s)},[E]:(s,e)=>{const{extractColorElement:t,color:a}=e||{},g=a?N(a):t?R(t):[],{expensiveEvents:x=[],preloadUrls:O=[]}=s,k={colorPalette:g,expensiveEvents:x,preloadUrls:O.filter(Boolean)};i(E,k),p[l](k)},[h]:s=>{o.emit(h,s)},[n]:s=>{i(n,s),d(s.tracks)},[l]:s=>{o.emit(l,s)}},T=s=>e=>{try{s(JSON.parse(e))}catch(t){console.error(t)}},f={[c]:s=>{o.on(c,s)},[r]:(s,e)=>{o.once(r,s);const{impressions:t=[]}=e||{},a=[...t],g=[],x=({intersectionRatio:O,isIntersecting:k})=>{!a.length||!k||a.forEach((u,S)=>{clearTimeout(g[S]);const{settings:{ratio:C=.5,remain:I=1e3},tracks:J=[]}=u;O>=C&&(g[S]=setTimeout(()=>{p[n]({name:r,tracks:J}),y(a,S),p[r](t)},I))})};f[m](x)},[m]:s=>{o.on(m,T(s))},[v]:s=>{o.on(v,T(s))},[E]:s=>{o.once(E,s)},[h]:s=>{o.on(h,s)},[n]:s=>{o.on(n,s)},[l]:s=>{o.once(l,s)}};export{p as emit,f as on};