(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3904],{55993:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins/[id]",function(){return i(54670)}])},9857:function(n,e,i){"use strict";var t=i(85893),l=i(41664),s=i.n(l),o=i(69417),r=i(90948),u=i(15861),d=i(36822);i(8928);var a=i(20431);let c=(0,r.ZP)(d.Z)(n=>{let{theme:e}=n;return{[e.breakpoints.down("md")]:{width:"90vw"}}}),p=(0,r.ZP)("img")(n=>{let{theme:e}=n;return{[e.breakpoints.down("lg")]:{height:450,marginTop:e.spacing(10)},[e.breakpoints.down("md")]:{height:400},[e.breakpoints.up("lg")]:{marginTop:e.spacing(20)}}}),h=()=>(0,t.jsxs)(d.Z,{className:"content-center",children:[(0,t.jsxs)(d.Z,{sx:{p:5,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(u.Z,{variant:"h2",sx:{mb:1.5},children:"Page Not Found :("}),(0,t.jsx)(u.Z,{sx:{mb:6,color:"text.secondary"},children:"Oops! \uD83D\uDE16 The requested URL was not found on this server."}),(0,t.jsx)(o.Z,{href:"/bulletins",component:s(),variant:"contained",children:"Back to Home"})]}),(0,t.jsx)(p,{height:"500",alt:"error-illustration",src:"/images/pages/404.png"})]}),(0,t.jsx)(a.Z,{})]});e.Z=h},54670:function(n,e,i){"use strict";i.r(e);var t=i(85893),l=i(67294),s=i(11163),o=i(9857),r=i(69769),u=i(11750),d=i(29501);let a=()=>{let n=(0,s.useRouter)(),{id:e}=n.query,[i,a]=(0,l.useState)([]),[c,p]=(0,l.useState)(null),{isFetching:h}=(0,u.BZ)(e,{enabled:!!e,onSuccess:n=>{if(n){var e;let{docs:i,...t}=(null==n?void 0:n.data)||{};p({...t,date:new Date(null==t?void 0:null===(e=t.date)||void 0===e?void 0:e.split("/").join("-")),file1:null==i?void 0:i.find(n=>(null==n?void 0:n.position)==1),file2:null==i?void 0:i.find(n=>(null==n?void 0:n.position)==2),file3:null==i?void 0:i.find(n=>(null==n?void 0:n.position)==3)}),a(i)}}});return h?(0,t.jsx)("div",{style:{marginTop:"-150px"},children:(0,t.jsx)(r.Z,{})}):c?(0,t.jsx)(d.Z,{id:e,defaultValue:c,docs:i}):(0,t.jsx)(o.Z,{})};e.default=a}},function(n){n.O(0,[8360,7851,8271,2288,3863,7657,7727,9501,9774,2888,179],function(){return n(n.s=55993)}),_N_E=n.O()}]);