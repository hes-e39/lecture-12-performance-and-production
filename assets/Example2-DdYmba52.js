import{r,j as s}from"./index-BEJDXG8g.js";const n=t=>{console.log("reallyExpensiveFunction started");const a=[];for(let e=0;e<1e7;e++)a.push(`${t} ${e}`);return a},x=()=>{const[t,a]=r.useState(""),[e,l]=r.useState(!1);return s.jsxs("div",{className:"p-4 flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{children:"Dark theme"}),s.jsx("input",{type:"checkbox",checked:e,onChange:c=>l(c.target.checked)})]}),s.jsx("input",{className:"w-fit",placeholder:"Type here ...",value:t,onChange:c=>a(c.target.value)}),s.jsx(o,{value:t,isDark:e})]})},o=({value:t,isDark:a})=>{const e=r.useMemo(()=>n(t),[t]);return s.jsx("div",{className:`flex flex-col gap-2 p-8 ${a?"bg-slate-500 text-white":""}`,children:e.slice(0,10).map(l=>s.jsx("div",{className:"p-2 bg-gray-300",children:l},l))})};export{x as default};
