(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1449],{78445:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var l=r(63366),n=r(87462),a=r(67294),o=r(63961),i=r(94780),s=r(15861),d=r(71657),u=r(90948),c=r(1588),m=r(34867);function p(e){return(0,m.Z)("MuiCardHeader",e)}let x=(0,c.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=r(85893);let v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)},g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${x.title}`]:t.title,[`& .${x.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),b=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:i,className:u,component:c="div",disableTypography:m=!1,subheader:p,subheaderTypographyProps:x,title:b,titleTypographyProps:C}=r,P=(0,l.Z)(r,v),w=(0,n.Z)({},r,{component:c,disableTypography:m}),A=Z(w),T=b;null==T||T.type===s.Z||m||(T=(0,h.jsx)(s.Z,(0,n.Z)({variant:i?"body2":"h5",className:A.title,component:"span",display:"block"},C,{children:T})));let k=p;return null==k||k.type===s.Z||m||(k=(0,h.jsx)(s.Z,(0,n.Z)({variant:i?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:k}))),(0,h.jsxs)(g,(0,n.Z)({className:(0,o.Z)(A.root,u),as:c,ref:t,ownerState:w},P,{children:[i&&(0,h.jsx)(j,{className:A.avatar,ownerState:w,children:i}),(0,h.jsxs)(y,{className:A.content,ownerState:w,children:[T,k]}),a&&(0,h.jsx)(f,{className:A.action,ownerState:w,children:a})]}))});var C=b},35613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-order/[type]",function(){return r(7307)}])},97065:function(e,t,r){"use strict";var l=r(85893),n=r(67294),a=r(41609),o=r.n(a),i=r(24697),s=r(74368),d=r(7323),u=r(66476),c=r(36822),m=r(84962);let p=e=>{let{error:t,helperText:r,defaultValue:a={},value:p={id:"",name:""},onChange:x,label:h="施設名",disabled:v,selectorSelectedKey:Z="name",additionalParams:g={}}=e,[j,f]=(0,n.useState)(""),[y]=(0,i.Nr)(j,300),b={page:1,size:5,[Z]:y,...g};o()(b.name)&&delete b.name;let{data:C,fetchNextPage:P,hasNextPage:w,isFetchingNextPage:A}=(0,d.uv)(b,{select:e=>{var t;return null==e?void 0:null===(t=e.pages)||void 0===t?void 0:t.flatMap(e=>{var t;return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.content})}}),T=e=>{let t=e.currentTarget;(0,s.U2)(t,30,async()=>{w&&(A||P())})},k=(e,t,r)=>{e&&"blur"===e.type?f(""):"reset"!==r&&f(t)},F=e=>null==e?void 0:e[Z];return(0,l.jsx)(m.Z,{options:C||[],getOptionLabel:e=>F(e)||"",id:"dropdownCustomerFacilities",onInputChange:k,onChange:(e,t)=>x(t),disabled:v,renderInput:e=>(0,l.jsx)(u.Z,{...e,label:h,error:t,helperText:r}),renderOption:(e,t)=>(0,n.createElement)(c.Z,{...e,component:"li",key:null==t?void 0:t.id},F(t)||""),ListboxProps:{onScroll:T,style:{maxHeight:150}},defaultValue:a,value:p})};t.Z=p},72483:function(e,t,r){"use strict";var l=r(85893),n=r(67294),a=r(9198),o=r.n(a),i=r(86874),s=r(74368),d=r(66476),u=r(69417),c=r(69368),m=r(8168),p=r(86886),x=r(97065),h=r(67686);let v=(0,n.forwardRef)((e,t)=>(0,l.jsx)(d.Z,{...e,inputRef:t,label:null==e?void 0:e.label,autoComplete:"off"}));v.displayName="CustomDateInput";let Z=e=>{let{INITIAL_FILTER:t,type:r,setFilterApplied:a}=e,[d,Z]=(0,n.useState)({...null==t?void 0:t[r],requireAtFrom:s.cB,requireAtTo:s.Kd}),g=e=>t=>{var r;let l={requireAtFrom:t,requireAtTo:t,customerFacility:t,itemPack:t,orderStatus:null==t?void 0:null===(r=t.target)||void 0===r?void 0:r.value},n=null==l?void 0:l[e];Z({...d,[e]:n})};return(0,n.useEffect)(()=>{let e={...null==t?void 0:t[r],requireAtFrom:s.cB,requireAtTo:s.Kd};Z(e)},[r]),(0,l.jsxs)(p.ZP,{container:!0,spacing:5,p:"24px",justifyContent:"center",children:[(0,l.jsxs)(p.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,l.jsx)(p.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(o(),{id:"requireAtFrom",showYearDropdown:!0,showMonthDropdown:!0,selected:null==d?void 0:d.requireAtFrom,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",onChange:g("requireAtFrom"),customInput:(0,l.jsx)(v,{fullWidth:!0,label:"希望納品日"})})})}),(0,l.jsx)(p.ZP,{item:!0,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"},children:"〜"}),(0,l.jsx)(p.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(o(),{id:"requireAtTo",showYearDropdown:!0,showMonthDropdown:!0,selected:null==d?void 0:d.requireAtTo,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",onChange:g("requireAtTo"),customInput:(0,l.jsx)(v,{fullWidth:!0})})})})]}),(0,l.jsxs)(p.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,l.jsx)(p.ZP,{item:!0,lg:5.825,md:12,xs:12,children:(0,l.jsx)(x.Z,{defaultValue:null==d?void 0:d.customerFacility,value:null==d?void 0:d.customerFacility,onChange:g("customerFacility")})}),(0,l.jsx)(p.ZP,{item:!0,lg:.35,display:{md:"none",xs:"none",lg:"block"}}),(0,l.jsx)(p.ZP,{item:!0,lg:5.825,xs:12,children:"normal"===r?(0,l.jsx)(h.Z,{defaultValue:null==d?void 0:d.itemPack,value:null==d?void 0:d.itemPack,onChange:g("itemPack")}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{label:"発注未済",control:(0,l.jsx)(c.Z,{checked:(null==d?void 0:d.orderStatus)==="notCompleted",onChange:g("orderStatus"),value:"notCompleted"})}),(0,l.jsx)(m.Z,{label:"発注済み",control:(0,l.jsx)(c.Z,{checked:(null==d?void 0:d.orderStatus)==="completed",onChange:g("orderStatus"),value:"completed"})}),(0,l.jsx)(m.Z,{label:"全注文",control:(0,l.jsx)(c.Z,{checked:(null==d?void 0:d.orderStatus)==="all",onChange:g("orderStatus"),value:"all"})})]})})]}),(0,l.jsx)(p.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,l.jsx)(p.ZP,{item:!0,xs:2,children:(0,l.jsx)(u.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:()=>a(d),children:"検索"})})})]})};t.Z=Z},7307:function(e,t,r){"use strict";r.r(t);var l=r(85893),n=r(67294),a=r(11163),o=r(74368),i=r(18055),s=r(7323),d=r(72483),u=r(49679),c=r(36822),m=r(15861),p=r(66242),x=r(44267),h=r(78445),v=r(86886);let Z={normal:"単品メニュー注文一覧",mousse:"ムース食注文一覧",rice:"お米注文一覧"},g={customerFacility:{}},j={normal:{...g,itemPack:{}},mousse:{...g,orderStatus:"all"},rice:{...g,orderStatus:"all"}},f=()=>{var e,t;let r=(0,a.useRouter)(),{customerId:g,customerFacilityId:f,type:y}=r.query||{},[b,C]=(0,n.useState)({...j[y],requireAtFrom:(0,o.ec)(o.cB),requireAtTo:(0,o.ec)(o.Kd)}),{data:P}=(0,i.Dq)(g,{enabled:!!g}),w=null==P?void 0:null===(e=P.data)||void 0===e?void 0:e.name,{data:A}=(0,s.G9)(f,{enabled:!!f}),T=null==A?void 0:null===(t=A.data)||void 0===t?void 0:t.name;return(0,n.useEffect)(()=>{let e={...j[y],requireAtFrom:(0,o.ec)(o.cB),requireAtTo:(0,o.ec)(o.Kd)};C(e)},[y]),(0,l.jsx)(v.ZP,{container:!0,spacing:6,sx:{paddingBottom:"60px"},children:(0,l.jsx)(v.ZP,{item:!0,xs:12,children:(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(h.Z,{title:Z[y]}),(0,l.jsxs)(x.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[f?(0,l.jsxs)(c.Z,{sx:{paddingLeft:"36px",marginBottom:"24px"},children:[(0,l.jsxs)(m.Z,{sx:{marginBottom:"10px"},children:["顧客名: ",w]}),(0,l.jsxs)(m.Z,{children:["施設名: ",T]})]}):(0,l.jsx)(d.Z,{INITIAL_FILTER:j,type:y,setFilterApplied:C}),y&&(0,l.jsx)(u.Z,{filterApplied:b,type:y})]})]})})})};t.default=f}},function(e){e.O(0,[8360,7851,8271,2288,6682,6261,6644,3863,4386,1789,5593,7727,6752,6413,9774,2888,179],function(){return e(e.s=35613)}),_N_E=e.O()}]);