import{_ as t}from"./index-9a9f28af.js";window.__routes=[];async function E(){var i;const s=Object.assign({"../pages/About.tsx":()=>t(()=>import("./About-2aea22c7.js"),["assets/About-2aea22c7.js","assets/index-9a9f28af.js","assets/index-04490b11.css","assets/index-b44cb4f0.js","assets/App-7751ac8d.js","assets/App-e12e197a.css"]),"../pages/User/About.tsx":()=>t(()=>import("./About-6fb689ad.js"),["assets/About-6fb689ad.js","assets/index-9a9f28af.js","assets/index-04490b11.css","assets/index-b44cb4f0.js","assets/App-7751ac8d.js","assets/App-e12e197a.css"]),"../pages/User/index.tsx":()=>t(()=>import("./index-a165b0e1.js"),["assets/index-a165b0e1.js","assets/index-9a9f28af.js","assets/index-04490b11.css","assets/index-b44cb4f0.js","assets/App-7751ac8d.js","assets/App-e12e197a.css"]),"../pages/index.tsx":()=>t(()=>import("./index-6b4f2a90.js"),["assets/index-6b4f2a90.js","assets/index-9a9f28af.js","assets/index-04490b11.css","assets/index-b44cb4f0.js","assets/App-7751ac8d.js","assets/App-e12e197a.css"])}),n=[];for(const a of Object.keys(s)){const e=(i=a.match(/\.\/pages\/(.*)\.tsx$/))==null?void 0:i[1];if(!e)continue;const r=e.includes("$")?e.replace("$",":"):e.replace(/\/index/,""),o=e==="index"?"/":`/${r.toLowerCase()}`;window.__routes.find(m=>m==o)||window.__routes.push(o);const{Action:_,action:d,Loader:u,loader:c,ErrorBoundary:p,default:f}=await s[a]();n.push({path:o,Element:f,loader:c||u,action:d||_,ErrorBoundary:p})}return n}export{E as default};