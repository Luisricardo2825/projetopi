import{j as t}from"./index-96a101b3.js";import{L as e,F as i}from"./index-7cf6b094.js";import{a as r,u as c,b as m}from"./App-c441aeb4.js";function f(){const o=r(),n=c(),a=m();return t.jsxs("div",{children:[n.pathname,t.jsx("br",{}),JSON.stringify(o),JSON.stringify(a),window.__routes.map(s=>t.jsxs("div",{children:[t.jsx(e,{to:s,children:s}),t.jsx("br",{})]},s)),t.jsxs(i,{method:"post",children:[t.jsx("input",{name:"name"}),t.jsx("button",{type:"submit",name:"intent",value:"edit",children:"Iniciar actio"})]})]})}async function l(){return(await fetch("https://jsonplaceholder.typicode.com/todos/1")).json()}const p=async({request:o})=>{const n=await o.formData(),a=Object.fromEntries(n);return console.log("Nome:",a),{body:"Deu tudo certo",ok:!0}};export{p as Action,l as Loader,f as default};