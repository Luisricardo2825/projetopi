import{_ as t}from"./index-a79d0de2.js";window.__routes=[];async function E(){var i;const s=Object.assign({"../pages/About.tsx":()=>t(()=>import("./About-d20d95a4.js"),["assets/About-d20d95a4.js","assets/index-a79d0de2.js","assets/index-04490b11.css","assets/getRouter-a6d22db3.js","assets/App-47b33e63.js","assets/App-e12e197a.css"]),"../pages/User/About.tsx":()=>t(()=>import("./About-5301a884.js"),["assets/About-5301a884.js","assets/index-a79d0de2.js","assets/index-04490b11.css","assets/getRouter-a6d22db3.js","assets/App-47b33e63.js","assets/App-e12e197a.css"]),"../pages/User/index.tsx":()=>t(()=>import("./index-2bc22b19.js"),["assets/index-2bc22b19.js","assets/index-a79d0de2.js","assets/index-04490b11.css","assets/getRouter-a6d22db3.js","assets/App-47b33e63.js","assets/App-e12e197a.css"]),"../pages/index.tsx":()=>t(()=>import("./index-1c2306eb.js"),["assets/index-1c2306eb.js","assets/index-a79d0de2.js","assets/index-04490b11.css","assets/getRouter-a6d22db3.js","assets/App-47b33e63.js","assets/App-e12e197a.css"])}),n=[];for(const a of Object.keys(s)){const e=(i=a.match(/\.\/pages\/(.*)\.tsx$/))==null?void 0:i[1];if(!e)continue;const r=e.includes("$")?e.replace("$",":"):e.replace(/\/index/,""),o=e==="index"?"/":`/${r.toLowerCase()}`;window.__routes.find(m=>m==o)||window.__routes.push(o);const{Action:_,action:d,Loader:u,loader:c,ErrorBoundary:p,default:f}=await s[a]();n.push({path:o,Element:f,loader:c||u,action:d||_,ErrorBoundary:p})}return n}export{E as default};