import{_ as t}from"./index-00b224cf.js";window.__routes=[];async function E(){var i;const s=Object.assign({"../pages/About.tsx":()=>t(()=>import("./About-71cfba5d.js"),["assets/About-71cfba5d.js","assets/index-00b224cf.js","assets/index-04490b11.css","assets/index-7c53ac46.js","assets/App-5b8c3fd2.js","assets/App-e12e197a.css"]),"../pages/User/About.tsx":()=>t(()=>import("./About-71eecfe0.js"),["assets/About-71eecfe0.js","assets/index-00b224cf.js","assets/index-04490b11.css","assets/index-7c53ac46.js","assets/App-5b8c3fd2.js","assets/App-e12e197a.css"]),"../pages/User/index.tsx":()=>t(()=>import("./index-60eaecf5.js"),["assets/index-60eaecf5.js","assets/index-00b224cf.js","assets/index-04490b11.css","assets/index-7c53ac46.js","assets/App-5b8c3fd2.js","assets/App-e12e197a.css"]),"../pages/index.tsx":()=>t(()=>import("./index-ecfd2a59.js"),["assets/index-ecfd2a59.js","assets/index-00b224cf.js","assets/index-04490b11.css","assets/index-7c53ac46.js","assets/App-5b8c3fd2.js","assets/App-e12e197a.css"])}),n=[];for(const a of Object.keys(s)){const e=(i=a.match(/\.\/pages\/(.*)\.tsx$/))==null?void 0:i[1];if(!e)continue;const r=e.includes("$")?e.replace("$",":"):e.replace(/\/index/,""),o=e==="index"?"/":`/${r.toLowerCase()}`;window.__routes.find(m=>m==o)||window.__routes.push(o);const{Action:_,action:d,Loader:u,loader:c,ErrorBoundary:p,default:f}=await s[a]();n.push({path:o,Element:f,loader:c||u,action:d||_,ErrorBoundary:p})}return n}export{E as default};
