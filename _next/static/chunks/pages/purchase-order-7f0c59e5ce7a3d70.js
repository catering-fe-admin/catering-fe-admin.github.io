(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6291],{38436:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/purchase-order",function(){return i(8927)}])},24959:function(e,t,i){"use strict";var n=i(85893),l=i(67294),r=i(41609),s=i.n(r),a=i(24697),o=i(74368),u=i(86965),d=i(66476),c=i(84962),p=i(36822);let m=e=>{let{error:t,helperText:i,withAdditionalParams:r,additionalParams:m,defaultValue:h={},value:v={id:"",name:""},onChange:x,label:f="仕入先",type:g,selectorSelectedKey:P="name",disabled:Z,id:y="dropdownItems",disableClearable:T=!1,customOptions:j}=e,[D,M]=(0,l.useState)(""),[_]=(0,a.Nr)(D,300),b={page:1,size:10,name:_,...g&&{type:g},...m};s()(b.name)&&delete b.name;let{data:N,fetchNextPage:A,hasNextPage:E,isFetchingNextPage:C}=(0,u.By)(b,{enabled:!r||!s()(m),select:e=>{var t;return null==e?void 0:null===(t=e.pages)||void 0===t?void 0:t.flatMap(e=>{var t;return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.content})}}),S=e=>{let t=e.currentTarget;(0,o.U2)(t,30,async()=>{E&&(C||A())})},w=(e,t,i)=>{e&&"blur"===e.type?M(""):"reset"!==i&&M(t)};return(0,n.jsx)(c.Z,{options:j||N||[],getOptionLabel:e=>(null==e?void 0:e[P])||"",id:y,disableClearable:T,onInputChange:w,onChange:(e,t)=>x(t),disabled:Z,renderInput:e=>(0,n.jsx)(d.Z,{...e,label:f,error:t,helperText:i}),renderOption:(e,t)=>(0,l.createElement)(p.Z,{...e,component:"li",key:null==t?void 0:t.id},null==t?void 0:t[P]),ListboxProps:{onScroll:S,style:{maxHeight:150}},defaultValue:h,value:v})};t.Z=m},53198:function(e,t,i){"use strict";var n=i(85893),l=i(53816),r=i(53252),s=i(18979);i(67294);let a=e=>{let{rowsNum:t,cellsNum:i}=e;return[...Array(t)].map((e,t)=>(0,n.jsx)(l.Z,{children:[...Array(i)].map((e,t)=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.Z,{animation:"wave",variant:"text"})},t))},t))};t.Z=a},74368:function(e,t,i){"use strict";i.d(t,{$U:function(){return v},Bi:function(){return u},Iy:function(){return a},Kd:function(){return h},U2:function(){return d},WL:function(){return o},Wd:function(){return s},cB:function(){return m},ec:function(){return x},hN:function(){return f},sl:function(){return r},y_:function(){return c}});var n=i(27484),l=i.n(n);let r=["PUBLIC","PRIVATE","DELETED"],s={PUBLIC:"公開",PRIVATE:"非公開",DELETED:"削除"},a={END_FOLLOWING_MONTH:"30日(月末)",DATE_10_FOLLOWING_MONTH:"10日",DATE_15_FOLLOWING_MONTH:"15日",DATE_20_FOLLOWING_MONTH:"20日"},o={END_NEXT_MONTH:"翌月末",DATE_25_NEXT_MONTH:"翌月25日",DATE_20_NEXT_MONTH:"翌月20日",DATE_15_NEXT_MONTH:"翌月15日",DATE_10_NEXT_MONTH:"翌月10日",DATE_5_SECOND_MONTH:"翌々月5日",DATE_10_SECOND_MONTH:"翌々月10日"},u=e=>{let t=e.split("-");return"".concat(parseInt(t[0]),"年").concat(parseInt(t[1]),"月").concat(parseInt(t[2]),"日")},d=(e,t,i)=>{t=parseInt(t),e.scrollTop+e.clientHeight>=e.scrollHeight-t&&i()},c=e=>{let t=null==e?void 0:e.map(e=>({id:e.customerFacility.id,name:e.customerFacility.name})),i=new Map;null==t||t.forEach(e=>{i.has(e.name)||i.set(e.name,e)});let n=Array.from(i.values());return n.sort((e,t)=>e.name.localeCompare(t.name,"ja"))};var p=new Date;let m=new Date(p.getFullYear(),p.getMonth(),1),h=new Date(p.getFullYear(),p.getMonth()+1,0),v=e=>{let t=new Date(e);return t.setMonth(t.getMonth()+1),t.setDate(0),t},x=e=>e?l()(e).format("YYYY-MM-DD"):null,f=e=>{let t=Intl.NumberFormat("en-US"),i=t.format(Math.floor(parseInt(e)));return i}},81820:function(e,t,i){"use strict";var n=i(10987);let l=(0,n.rh)({todos:{list:e=>[e],detail:e=>[e]},adminBulletins:{list:e=>[e],detail:e=>[e]},adminPrefectures:{list:e=>[e],detail:e=>[e]},adminItems:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCourses:{list:e=>[e],detail:e=>[e]},adminSuppliers:{list:e=>[e],detail:e=>[e],holiday:e=>[e]},adminAllergens:{list:e=>[e],detail:e=>[e]},adminItemPacks:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminItemPacksInventories:{list:e=>[e]},adminItemPackLogs:{list:e=>[e]},adminMenus:{list:e=>[e],detail:e=>[e]},adminTimeSections:{list:e=>[e],detail:e=>[e]},adminCustomers:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchases:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminCustomersFacilities:{list:e=>[e],detail:e=>[e]},facilityKinds:{list:e=>[e],detail:e=>[e]},adminWarehouses:{list:e=>[e],detail:e=>[e]},adminSupplierInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerPurchaseMenus:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseSingles:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMousses:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseRices:{list:e=>[e],detail:e=>[e]},adminServes:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminItemDeliveries:{list:e=>[e]},adminCustomerDeliveries:{list:e=>[e],deliver:e=>[e],exportDeliverySlip:e=>[e]},adminCustomerDeliveriesGenerate:{list:e=>[e],detail:e=>[e]},adminCustomerDeliveriesExportDeliverySlip:{list:e=>[e]},adminCustomerDeliveriesDeliver:{list:e=>[e]},publicTemperature:{list:e=>[e]},publicClosingType:{list:e=>[e]},publicPaymentType:{list:e=>[e]},publicTimezoneType:{list:e=>[e]},publicDeliveryFrequency:{list:e=>[e]}});t.Z=l},41285:function(e,t,i){"use strict";i.d(t,{EW:function(){return f},dW:function(){return h},ep:function(){return g},zz:function(){return m},xm:function(){return v},W1:function(){return x}});var n=i(36492),l=i(48228),r=i(29180);let s=e=>r.Z.get("admin/supplier-purchases",{params:e}),a=e=>r.Z.get("admin/supplier-purchases/".concat(e,"/export/invoice"),{responseType:"blob"}),o=e=>r.Z.get("admin/supplier-purchases/".concat(e)),u=e=>r.Z.post("admin/supplier-purchases",e),d=(e,t)=>r.Z.put("admin/supplier-purchases/".concat(e),t),c=e=>r.Z.get("admin/supplier-purchase-monthlies",{params:e});var p=i(81820);let m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=p.Z.adminSupplierPurchases.list(e).queryKey,l=()=>s(e);return(0,n.a)({queryKey:i,queryFn:l,...t})},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=p.Z.adminSupplierPurchases.export(e).queryKey,l=()=>a(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=p.Z.adminSupplierPurchases.detail(e).queryKey,l=()=>o(e);return(0,n.a)({queryKey:i,queryFn:l,...t})},x=()=>(0,l.D)(e=>u(e)),f=e=>(0,l.D)(t=>d(e,t)),g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=p.Z.adminSupplierPurchaseMonthlies.list(e).queryKey,l=()=>c(e);return(0,n.a)({queryKey:i,queryFn:l,...t})}},86965:function(e,t,i){"use strict";i.d(t,{UP:function(){return T},kD:function(){return Z},Ac:function(){return x},Dc:function(){return f},fO:function(){return g},By:function(){return v},vv:function(){return P},eF:function(){return y}});var n=i(59403),l=i(36492),r=i(48228),s=i(29180);let a=e=>s.Z.get("admin/suppliers",{params:e}),o=(e,t)=>s.Z.get("admin/suppliers/".concat(e),{params:t}),u=e=>s.Z.post("admin/suppliers",e),d=(e,t)=>s.Z.put("admin/suppliers/".concat(e),t),c=(e,t)=>s.Z.get("admin/suppliers/".concat(e,"/holiday"),{params:t}),p=(e,t)=>s.Z.post("admin/suppliers/".concat(e,"/holiday"),null,{params:t}),m=(e,t)=>s.Z.delete("admin/suppliers/".concat(e,"/holiday"),{params:t});var h=i(81820);let v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminSuppliers.list(e).queryKey,l=t=>a({...e,...t});return(0,n.N)({queryKey:i,queryFn:e=>{let{pageParam:t}=e;return l(t)},getNextPageParam:e=>{var t,i;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.last)return null;let n=(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.number)+1;return{page:n+1}},...t})},x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminSuppliers.list(e).queryKey,n=()=>a(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminSuppliers.detail(e).queryKey,n=()=>o(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminSuppliers.holiday(e).queryKey,n=()=>c(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},P=()=>(0,r.D)(e=>u(e)),Z=e=>(0,r.D)(t=>d(e,t)),y=e=>(0,r.D)(t=>p(e,t)),T=e=>(0,r.D)(t=>m(e,t))},8927:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return W}});var n=i(85893),l=i(67294),r=i(41664),s=i.n(r),a=i(74368),o=i(9198),u=i.n(o),d=i(86874),c=i(86965),p=i(24959),m=i(66476),h=i(69417),v=i(86886);let x=(0,l.forwardRef)((e,t)=>(0,n.jsx)(m.Z,{...e,inputRef:t,label:null==e?void 0:e.label,autoComplete:"off"}));x.displayName="CustomDateInput";let f=e=>{var t;let{setParams:i}=e,[r,s]=(0,l.useState)({supplier:null,issueAtPeriodFrom:a.cB,issueAtPeriodTo:a.Kd}),o=e=>t=>{let i=["issueAtPeriodFrom","issueAtPeriodTo","supplier"].includes(e)?t:t.target.value;"issueAtPeriodTo"==e&&(i=(0,a.$U)(i)),s({...r,[e]:i})},{data:m}=(0,c.Dc)(null==r?void 0:null===(t=r.supplier)||void 0===t?void 0:t.id,{enabled:!!(null==r?void 0:r.supplier)}),f=()=>{var e;let{issueAtPeriodFrom:t,issueAtPeriodTo:n}=r||{};i({issueAtPeriodFrom:(0,a.ec)(t),issueAtPeriodTo:(0,a.ec)(n),supplierId:null==m?void 0:null===(e=m.data)||void 0===e?void 0:e.id})};return(0,n.jsxs)(v.ZP,{container:!0,spacing:5,padding:"24px",justifyContent:"center",children:[(0,n.jsxs)(v.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,n.jsx)(v.ZP,{item:!0,lg:4,md:12,xs:12,children:(0,n.jsx)(p.Z,{type:"NORMAL",value:null==r?void 0:r.supplier,onChange:o("supplier"),label:"仕入先名"})}),(0,n.jsxs)(v.ZP,{item:!0,container:!0,lg:8,md:12,xs:12,spacing:2,alignItems:"flex-end",children:[(0,n.jsx)(v.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(u(),{id:"issueAtPeriodFrom",showMonthYearPicker:!0,selected:null==r?void 0:r.issueAtPeriodFrom,dateFormat:"yyyy/MM",placeholderText:"YYYY-MM",onChange:o("issueAtPeriodFrom"),customInput:(0,n.jsx)(x,{fullWidth:!0,label:"発注年月"})})})}),(0,n.jsx)(v.ZP,{item:!0,xs:.35,lg:.35,md:.35,textAlign:"center",marginBottom:1,display:{xs:"none",lg:"block",md:"block"},children:"〜"}),(0,n.jsx)(v.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(u(),{id:"issueAtPeriodTo",showMonthYearPicker:!0,selected:null==r?void 0:r.issueAtPeriodTo,dateFormat:"yyyy/MM",placeholderText:"YYYY-MM",onChange:o("issueAtPeriodTo"),customInput:(0,n.jsx)(x,{fullWidth:!0})})})})]})]}),(0,n.jsx)(v.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,n.jsx)(v.ZP,{item:!0,xs:2,children:(0,n.jsx)(h.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:f,children:"検索"})})})]})};var g=i(27484),P=i.n(g),Z=i(76831),y=i.n(Z),T=i(41285),j=i(36822),D=i(90629),M=i(7906),_=i(295),b=i(53252),N=i(72882),A=i(53184),E=i(70519),C=i(53816),S=i(26280),w=i(13113),I=i(53198),O=[{id:"issueAtPeriod",label:"",align:"left",width:200},{id:"subTotalPrice",label:"仕入額",align:"left",withSort:!0},{id:"subTotalTax",label:"消費税",align:"left",withSort:!0},{id:"totalPrice",label:"合計",align:"left",withSort:!0},{id:"action",label:"アクション",align:"right",width:200}];let F=e=>{let{additionalParams:t}=e,[i,r]=(0,l.useState)(0),[o,u]=(0,l.useState)(10),[d,c]=(0,l.useState)("desc"),[p,m]=(0,l.useState)("issueAtPeriod"),v=(e,t)=>{r(t)},x=e=>{u(+e.target.value),r(0)},f=e=>{c(p===e&&"asc"===d?"desc":"asc"),m(e)},g={page:i+1,size:o,sort:"".concat(p,",").concat(d),supplierType:"NORMAL",...t};Object.keys(g).map(e=>{g[e]||delete g[e]});let{data:Z,isFetching:F}=(0,T.ep)(g),Y=null==Z?void 0:Z.data,k=(null==Y?void 0:Y.content)||[],L=null==Y?void 0:Y.totalElements;return(0,n.jsxs)(D.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,n.jsx)(N.Z,{children:(0,n.jsxs)(M.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(A.Z,{children:(0,n.jsx)(C.Z,{children:O.map(e=>(0,n.jsx)(b.Z,{align:null==e?void 0:e.align,style:{width:null==e?void 0:e.width},children:(null==e?void 0:e.withSort)?(0,n.jsxs)(S.Z,{active:p===e.id,direction:p===e.id?d:"asc",onClick:()=>f(e.id),children:[e.label,p===e.id?(0,n.jsx)(j.Z,{component:"span",sx:w.Z,children:"desc"===d?"sorted descending":"sorted ascending"}):null]}):e.label},e.id))})}),(0,n.jsx)(_.Z,{children:F?(0,n.jsx)(I.Z,{rowsNum:10,cellsNum:5}):(null==k?void 0:k.length)==0?(0,n.jsx)(C.Z,{children:(0,n.jsx)(b.Z,{colSpan:null==O?void 0:O.length,align:"center",children:"「該当する品目はありません。」"})}):null==k?void 0:k.map(e=>{var t,i,l,r,o,u;let d=null===(t=null===(i=P()(null==e?void 0:e.issueAtPeriod))||void 0===i?void 0:i.startOf("month"))||void 0===t?void 0:t.format("YYYY-MM-DD");return(0,n.jsxs)(C.Z,{hover:!0,children:[(0,n.jsx)(b.Z,{align:"left",children:null===(l=null===(r=P()(null==e?void 0:e.issueAtPeriod))||void 0===r?void 0:r.locale(y()))||void 0===l?void 0:l.format("MMM")}),(0,n.jsx)(b.Z,{align:"left",children:(0,a.hN)(null==e?void 0:e.subTotalPrice)}),(0,n.jsx)(b.Z,{align:"left",children:(0,a.hN)(null==e?void 0:e.subTotalTax)}),(0,n.jsx)(b.Z,{align:"left",children:(0,a.hN)(null==e?void 0:e.totalPrice)}),(0,n.jsx)(b.Z,{align:"right",children:(0,n.jsx)(s(),{href:{pathname:"/purchase-order-details/[detail]",query:{detail:null==e?void 0:null===(o=e.supplier)||void 0===o?void 0:o.id,issueat:d}},as:"/purchase-order-details/".concat(null==e?void 0:null===(u=e.supplier)||void 0===u?void 0:u.id,"?issueat=").concat(d),children:(0,n.jsx)(h.Z,{variant:"contained",color:"success",children:"詳細"})})})]},null==e?void 0:e.id)})})]})}),(0,n.jsx)(E.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:L,rowsPerPage:o,page:i,onPageChange:v,onRowsPerPageChange:x,labelRowsPerPage:"表示件数"})]})};var Y=i(66242),k=i(44267),L=i(78445);let H=()=>{let[e,t]=(0,l.useState)({issueAtPeriodFrom:(0,a.ec)(a.cB),issueAtPeriodTo:(0,a.ec)(a.Kd)});return(0,n.jsx)(v.ZP,{container:!0,spacing:6,children:(0,n.jsx)(v.ZP,{item:!0,xs:12,children:(0,n.jsxs)(Y.Z,{children:[(0,n.jsx)(L.Z,{title:"仕入発注一覧",action:(0,n.jsx)(s(),{href:"/purchase-order/create",children:(0,n.jsx)(h.Z,{variant:"contained",color:"info",children:"新規仕入作成"})})}),(0,n.jsxs)(k.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[(0,n.jsx)(f,{setParams:t}),(0,n.jsx)(F,{additionalParams:e})]})]})})})};var W=H}},function(e){e.O(0,[8360,7851,8271,2288,6682,6261,6644,3863,7815,3837,7727,9774,2888,179],function(){return e(e.s=38436)}),_N_E=e.O()}]);