(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),s=c(1);c(9);var l=c(2),i=c.n(l),r=c(0);const o=e=>{let{total:a,itemsPerPage:c,currentPage:t,onPageChange:n}=e;const s=Math.ceil(a/c),l=[];for(let i=1;i<=s;i+=1)l.push(i);const o=1===t,d=t===s;return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:i()("page-item",{disabled:o}),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:()=>{o||n(t-1)},children:"\xab"})}),l.map((e=>Object(r.jsx)("li",{className:i()("page-item",{active:t===e}),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:()=>n(e),children:e})}))),Object(r.jsx)("li",{className:i()("page-item",{disabled:d}),children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":d,onClick:()=>{d||n(t+1)},children:"\xbb"})})]})},d=[3,5,10,20],j=function(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((e=>"Item ".concat(e))),m=()=>{const[e,a]=Object(s.useState)(1),[c,t]=Object(s.useState)(5),n=e*c,l=n-c,i=j.slice(l,n);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(e," (items ").concat(l+1," - ").concat(n>42?42:n," of ").concat(42,")")}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:5,onChange:e=>{t(+e.target.value),a(1)},children:d.map((e=>Object(r.jsx)("option",{value:e,children:e},e)))})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(o,{total:42,itemsPerPage:c,currentPage:e,onPageChange:e=>a(e)}),Object(r.jsx)("ul",{children:i.map((e=>Object(r.jsx)("li",{"data-cy":"item",children:e},e)))})]})};n.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.e7327c82.chunk.js.map