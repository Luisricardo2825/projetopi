import{_ as t}from"./index-bd2f8fa2.js";window.__routes=[];async function E(){var i;const s=Object.assign({"../pages/About.tsx":()=>t(()=>import("./About-9bcbb4f0.js"),["assets/About-9bcbb4f0.js","assets/index-bd2f8fa2.js","assets/index-04490b11.css","assets/index-499e8aad.js","assets/App-8180a33d.js","assets/App-e12e197a.css"]),"../pages/User/About.tsx":()=>t(()=>import("./About-ef77905d.js"),["assets/About-ef77905d.js","assets/index-bd2f8fa2.js","assets/index-04490b11.css","assets/index-499e8aad.js","assets/App-8180a33d.js","assets/App-e12e197a.css"]),"../pages/User/index.tsx":()=>t(()=>import("./index-409eb6a7.js"),["assets/index-409eb6a7.js","assets/index-bd2f8fa2.js","assets/index-04490b11.css","assets/index-499e8aad.js","assets/App-8180a33d.js","assets/App-e12e197a.css"]),"../pages/index.tsx":()=>t(()=>import("./index-8da7ddb2.js"),["assets/index-8da7ddb2.js","assets/index-bd2f8fa2.js","assets/index-04490b11.css","assets/index-499e8aad.js","assets/App-8180a33d.js","assets/App-e12e197a.css"])}),n=[];for(const a of Object.keys(s)){const e=(i=a.match(/\.\/pages\/(.*)\.tsx$/))==null?void 0:i[1];if(!e)continue;const r=e.includes("$")?e.replace("$",":"):e.replace(/\/index/,""),o=e==="index"?"/":`/${r.toLowerCase()}`;window.__routes.find(m=>m==o)||window.__routes.push(o);const{Action:_,action:d,Loader:u,loader:c,ErrorBoundary:p,default:f}=await s[a]();n.push({path:o,Element:f,loader:c||u,action:d||_,ErrorBoundary:p})}return n}export{E as default};
