(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5332],{57875:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-billing-management",function(){return i(40878)}])},53198:function(e,t,i){"use strict";var l=i(85893),n=i(53816),s=i(53252),o=i(18979);i(67294);let r=e=>{let{rowsNum:t,cellsNum:i}=e;return[...Array(t)].map((e,t)=>(0,l.jsx)(n.Z,{children:[...Array(i)].map((e,t)=>(0,l.jsx)(s.Z,{children:(0,l.jsx)(o.Z,{animation:"wave",variant:"text"})},t))},t))};t.Z=r},74368:function(e,t,i){"use strict";i.d(t,{$U:function(){return x},Bi:function(){return d},Iy:function(){return r},Kd:function(){return h},U2:function(){return u},WL:function(){return a},Wd:function(){return o},cB:function(){return v},ec:function(){return g},hN:function(){return p},sl:function(){return s},y_:function(){return c}});var l=i(27484),n=i.n(l);let s=["PUBLIC","PRIVATE","DELETED"],o={PUBLIC:"公開",PRIVATE:"非公開",DELETED:"削除"},r={END_FOLLOWING_MONTH:"30日(月末)",DATE_10_FOLLOWING_MONTH:"10日",DATE_15_FOLLOWING_MONTH:"15日",DATE_20_FOLLOWING_MONTH:"20日"},a={END_NEXT_MONTH:"翌月末",DATE_25_NEXT_MONTH:"翌月25日",DATE_20_NEXT_MONTH:"翌月20日",DATE_15_NEXT_MONTH:"翌月15日",DATE_10_NEXT_MONTH:"翌月10日",DATE_5_SECOND_MONTH:"翌々月5日",DATE_10_SECOND_MONTH:"翌々月10日"},d=e=>{let t=e.split("-");return"".concat(parseInt(t[0]),"年").concat(parseInt(t[1]),"月").concat(parseInt(t[2]),"日")},u=(e,t,i)=>{t=parseInt(t),e.scrollTop+e.clientHeight>=e.scrollHeight-t&&i()},c=e=>{let t=null==e?void 0:e.map(e=>({id:e.customerFacility.id,name:e.customerFacility.name})),i=new Map;null==t||t.forEach(e=>{i.has(e.name)||i.set(e.name,e)});let l=Array.from(i.values());return l.sort((e,t)=>e.name.localeCompare(t.name,"ja"))};var m=new Date;let v=new Date(m.getFullYear(),m.getMonth(),1),h=new Date(m.getFullYear(),m.getMonth()+1,0),x=e=>{let t=new Date(e);return t.setMonth(t.getMonth()+1),t.setDate(0),t},g=e=>e?n()(e).format("YYYY-MM-DD"):null,p=e=>{let t=Intl.NumberFormat("en-US"),i=t.format(Math.floor(parseInt(e)));return i}},81820:function(e,t,i){"use strict";var l=i(10987);let n=(0,l.rh)({todos:{list:e=>[e],detail:e=>[e]},adminBulletins:{list:e=>[e],detail:e=>[e]},adminPrefectures:{list:e=>[e],detail:e=>[e]},adminItems:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCourses:{list:e=>[e],detail:e=>[e]},adminSuppliers:{list:e=>[e],detail:e=>[e],holiday:e=>[e]},adminAllergens:{list:e=>[e],detail:e=>[e]},adminItemPacks:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminItemPacksInventories:{list:e=>[e]},adminItemPackLogs:{list:e=>[e]},adminMenus:{list:e=>[e],detail:e=>[e]},adminTimeSections:{list:e=>[e],detail:e=>[e]},adminCustomers:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchases:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminCustomersFacilities:{list:e=>[e],detail:e=>[e]},facilityKinds:{list:e=>[e],detail:e=>[e]},adminWarehouses:{list:e=>[e],detail:e=>[e]},adminSupplierInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerPurchaseMenus:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseSingles:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMousses:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseRices:{list:e=>[e],detail:e=>[e]},adminServes:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminItemDeliveries:{list:e=>[e]},adminCustomerDeliveries:{list:e=>[e],deliver:e=>[e],exportDeliverySlip:e=>[e]},adminCustomerDeliveriesGenerate:{list:e=>[e],detail:e=>[e]},adminCustomerDeliveriesExportDeliverySlip:{list:e=>[e]},adminCustomerDeliveriesDeliver:{list:e=>[e]},publicTemperature:{list:e=>[e]},publicClosingType:{list:e=>[e]},publicPaymentType:{list:e=>[e]},publicTimezoneType:{list:e=>[e]},publicDeliveryFrequency:{list:e=>[e]}});t.Z=n},40878:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return em}});var l=i(85893),n=i(67294),s=i(35823),o=i.n(s),r=i(35937),a=i.n(r),d=i(74368),u=i(36492),c=i(29180);let m=e=>c.Z.get("admin/customer-invoice-monthlies",{params:e}),v=e=>c.Z.get("admin/customer-invoice-monthlies/export/invoice",{params:e,responseType:"blob"});var h=i(81820);let x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminCustomerInvoiceMonthlies.list(e).queryKey,l=()=>m(e),n={...t};return(0,u.a)({queryKey:i,queryFn:l,...n})},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=h.Z.adminCustomerInvoiceMonthlies.export(e).queryKey,l=()=>v(e),n={...t};return(0,u.a)({queryKey:i,queryFn:l,...n})};var p=i(9198),P=i.n(p),y=i(86874),f=i(66476),j=i(69417),Z=i(86886);let T=(0,n.forwardRef)((e,t)=>(0,l.jsx)(f.Z,{...e,inputRef:t,label:null==e?void 0:e.label,autoComplete:"off"}));T.displayName="CustomDateInput";let A=e=>{let{handleSetFilterApplied:t}=e,[i,s]=(0,n.useState)({issueAtPeriodFrom:d.cB,issueAtPeriodTo:d.Kd,customerName:"",customerBillingName:""}),o=e=>t=>{let l=["issueAtPeriodFrom","issueAtPeriodTo"].includes(e)?t:t.target.value;"issueAtPeriodTo"==e&&(l=(0,d.$U)(l)),s({...i,[e]:l})};return(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,p:"24px",children:[(0,l.jsxs)(Z.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,l.jsx)(Z.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(y.Z,{children:(0,l.jsx)(P(),{id:"issueAtPeriodFrom",showMonthYearPicker:!0,selected:null==i?void 0:i.issueAtPeriodFrom,dateFormat:"yyyy/MM",placeholderText:"YYYY/MM",onChange:o("issueAtPeriodFrom"),customInput:(0,l.jsx)(T,{fullWidth:!0,label:"請求月"})})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:.35,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"},children:"〜"}),(0,l.jsx)(Z.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(y.Z,{children:(0,l.jsx)(P(),{id:"issueAtPeriodTo",showMonthYearPicker:!0,selected:null==i?void 0:i.issueAtPeriodTo,dateFormat:"yyyy/MM",placeholderText:"YYYY-MM",onChange:o("issueAtPeriodTo"),customInput:(0,l.jsx)(T,{fullWidth:!0})})})})]}),(0,l.jsxs)(Z.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,l.jsx)(Z.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(f.Z,{fullWidth:!0,type:"text",label:"顧客名",value:null==i?void 0:i.customerName,id:"customerName",onChange:o("customerName")})}),(0,l.jsx)(Z.ZP,{item:!0,xs:.35,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"}}),(0,l.jsx)(Z.ZP,{item:!0,lg:5.825,md:5.825,xs:12,children:(0,l.jsx)(f.Z,{fullWidth:!0,type:"text",label:"請求先名",value:null==i?void 0:i.customerBillingName,id:"customerBillingName",onChange:o("customerBillingName")})}),(0,l.jsx)(Z.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,l.jsx)(Z.ZP,{xs:2,children:(0,l.jsx)(j.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:()=>t(i),children:"検索"})})})]})]})};var N=i(11163),_=i(85945),b=i(27484),M=i.n(b),C=i(48228);let D=(e,t)=>c.Z.put("admin/customer-payments/".concat(e),t),I=e=>c.Z.post("admin/customer-payments",e),E=()=>(0,C.D)(e=>I(e)),F=()=>(0,C.D)(e=>{let{id:t,body:i}=e;return D(t,i)});var w=i(7906),B=i(295),O=i(53252),R=i(72882),S=i(53184),k=i(53816),Y=i(53198),L=i(76831),H=i.n(L),W=i(2734);let X=e=>{var t,i;let{customer:n,customerBilling:s,item:r,handleChangeTotalPayed:u,isFirst:c,isLast:m,isOdd:v}=e,{palette:h}=(0,W.Z)(),{issueAtPeriod:x,totalRestAccumulative:p,totalInvoiced:P,totalRestResult:y,totalPayed:Z,totalRestFinal:T}=r,A={...!m&&{border:"0"},...v&&{backgroundColor:h.grey[50]}},N=(()=>{let e=(0,d.ec)(x),t=a()({issueAtPeriod:e,customerId:null==n?void 0:n.id,customerBillingId:null==s?void 0:s.id},e=>!!e)||{};return t})(),{refetch:_}=g(N,{enabled:!1,onSuccess:e=>{(null==e?void 0:e.data)&&o()(null==e?void 0:e.data,"請求書データ.zip")}});return(0,l.jsxs)(k.Z,{hover:!0,children:[(0,l.jsx)(O.Z,{sx:A,children:c?null==n?void 0:n.name:""}),(0,l.jsx)(O.Z,{sx:A,children:c?null==s?void 0:s.name:""}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:x?null===(t=null===(i=M()(x))||void 0===i?void 0:i.locale(H()))||void 0===t?void 0:t.format("YYYY年M月"):null}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:p}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:(0,d.hN)(P)}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:(0,d.hN)(y)}),(0,l.jsx)(O.Z,{sx:{...A,padding:"0px"},align:"center",children:void 0!==Z&&(0,l.jsx)(f.Z,{fullWidth:!0,type:"number",inputProps:{style:{textAlign:"center"}},onChange:u,defaultValue:Z,id:"totalPayed"})}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:(0,d.hN)(T)}),(0,l.jsx)(O.Z,{sx:A,align:"center",children:(0,l.jsx)(j.Z,{variant:"contained",color:"info",onClick:_,size:"small",children:"ダウンロード"})})]})};var K=[{id:"company-name",label:"企業名",width:200},{id:"billing-name",label:"請求先名",width:200},{id:"billing-month",label:"請求月",align:"center",width:100},{id:"carry-over",label:"前月繰越",align:"center",width:150},{id:"sales",label:"当月売上",align:"center",width:150},{id:"billed",label:"当月請求",align:"center",width:150},{id:"deposit",label:"当月入金",align:"center",width:150},{id:"carry-over-next",label:"次月繰越",align:"center",width:150},{id:"invoice",label:"請求書",align:"center",width:250}],U=i(13311),z=i.n(U),G=i(94654),q=i.n(G),V=i(7739),$=i.n(V),Q=i(35161),J=i.n(Q),ee=i(57557),et=i.n(ee),ei=i(78718),el=i.n(ei),en=i(89734),es=i.n(en);let eo=e=>{let{order:t,setOrder:i}=e,l=(e,l)=>n=>{var s,o;let r=(null==n?void 0:null===(s=n.target)||void 0===s?void 0:s.value)!=""?parseFloat(null==n?void 0:null===(o=n.target)||void 0===o?void 0:o.value):0,{customer:a,customerBilling:d,customerPayment:u,content:c}=t[e],m=[...c];m[l].totalPayed=r,m[l].totalRestFinal=m[l].totalRestResult-r,null==c||c.forEach((e,t)=>{if(t>l){let e=m[t-1].totalRestFinal,i=m[t-1].totalRestFinal+m[t].totalInvoiced,l=i-m[t].totalPayed;m[t].totalRestAccumulative=e,m[t].totalRestResult=i,m[t].totalRestFinal=l}});let v=[...t];v[e].customer=a,v[e].customerBilling=d,v[e].customerPayment=u,v[e].content=m,i(v)},n=e=>{let t=$()(e,e=>"".concat(e.customer.id,"_").concat(e.customerBilling.id)),i=J()(t,e=>{let t=J()(e,e=>et()(e,["customer","customerBilling","customerPayment"]));return{customer:el()(e[0].customer,["id","name","code"]),customerBilling:el()(e[0].customerBilling,["id","name"]),content:es()(t,"issueAtPeriod")}}),l=$()(i,"customer.id"),n=q()(l,e=>e);return n},s=e=>q()(e,e=>J()(e.content,t=>({customer:el()(e.customer,["id","code","name"]),customerBilling:el()(e.customerBilling,["id","name"]),customerPayment:null,issueAtPeriod:t.issueAtPeriod,totalInvoiced:t.totalInvoiced,totalPayed:t.totalPayed,totalRestFinal:t.totalRestFinal,totalRestAccumulative:t.totalRestAccumulative,totalRestResult:t.totalRestResult})));return{handleChangeTotalPayed:l,formatData:n,reformatData:s,findTotalPayedDifferences:function(e,t){return q()(e,e=>{let i=z()(t,t=>e.customer.id===t.customer.id&&e.customerBilling.id===t.customerBilling.id&&e.issueAtPeriod===t.issueAtPeriod);return i&&e.totalPayed!==i.totalPayed?{...e,totalPayed:i.totalPayed}:[]})}}},er=e=>{var t;let{filterApplied:i}=e,s=(0,N.useRouter)(),[o,r]=(0,n.useState)([]),[a,d]=(0,n.useState)(!1),u=(0,_.NL)(),{mutate:c}=E(),{mutate:m}=F(),{data:v,isFetching:g}=x({...i,size:2147483647},{onSuccess:e=>{var t,i;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.content)return r(P(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.content))}}),{handleChangeTotalPayed:p,formatData:P,reformatData:y,findTotalPayedDifferences:f}=eo({order:o,setOrder:r}),T=(null==v?void 0:null===(t=v.data)||void 0===t?void 0:t.content)||[],A=()=>{let e=f(T,y(o));(null==e?void 0:e.length)>0&&e.forEach((t,i)=>{var l,n,o,r;let a,v;(null==t?void 0:null===(l=t.customerPayment)||void 0===l?void 0:l.id)?(a=m,v={id:null==t?void 0:null===(n=t.customerPayment)||void 0===n?void 0:n.id,body:{totalPayed:null==t?void 0:t.totalPayed}}):(a=c,v={customer:{id:null==t?void 0:null===(o=t.customer)||void 0===o?void 0:o.id},customerBilling:{id:null==t?void 0:null===(r=t.customerBilling)||void 0===r?void 0:r.id},issueAtPeriod:null==t?void 0:t.issueAtPeriod,totalPayed:null==t?void 0:t.totalPayed}),d(!0),a(v,{onSuccess:()=>{d(!1),i==(null==e?void 0:e.length)-1&&(u.removeQueries(h.Z.adminCustomerInvoiceMonthlies._def),s.push("/order-billing-management"))}})})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R.Z,{children:(0,l.jsxs)(w.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,l.jsx)(S.Z,{children:(0,l.jsx)(k.Z,{children:K.map(e=>(0,l.jsx)(O.Z,{align:"center",style:{width:null==e?void 0:e.width,padding:"8px"},children:e.label},e.id))})}),(0,l.jsx)(B.Z,{children:g?(0,l.jsx)(Y.Z,{rowsNum:10,cellsNum:8}):(null==o?void 0:o.length)==0?(0,l.jsx)(k.Z,{children:(0,l.jsx)(O.Z,{colSpan:null==K?void 0:K.length,align:"center",children:"「該当する品目はありません。」"})}):null==o?void 0:o.map((e,t)=>{var i;return null==e?void 0:null===(i=e.content)||void 0===i?void 0:i.map((i,n)=>{var s;return(0,l.jsx)(X,{customer:null==e?void 0:e.customer,customerBilling:null==e?void 0:e.customerBilling,item:i,handleChangeTotalPayed:p(t,n),isOdd:t%2==1,isFirst:0==n,isLast:n==(null==e?void 0:null===(s=e.content)||void 0===s?void 0:s.length)-1},n)})})})]})}),(0,l.jsx)(Z.ZP,{item:!0,container:!0,xs:12,justifyContent:"flex-end",alignItems:"center",padding:"24px",children:(0,l.jsx)(Z.ZP,{item:!0,xs:2,children:(0,l.jsx)(j.Z,{fullWidth:!0,variant:"contained",color:"success",onClick:A,disabled:a,children:"保存"})})})]})};var ea=i(66242),ed=i(44267),eu=i(78445);let ec=()=>{let[e,t]=(0,n.useState)({issueAtPeriodFrom:(0,d.ec)(d.cB),issueAtPeriodTo:(0,d.ec)(d.Kd)}),i=e=>{let i=(0,d.ec)(null==e?void 0:e.issueAtPeriodFrom),l=(0,d.ec)(null==e?void 0:e.issueAtPeriodTo),n=a()({...e,issueAtPeriodFrom:i,issueAtPeriodTo:l},e=>!!e)||{};t(n)},{refetch:s}=g(e,{enabled:!1,onSuccess:e=>{(null==e?void 0:e.data)&&o()(null==e?void 0:e.data,"請求書データ.zip")}});return(0,l.jsxs)(ea.Z,{children:[(0,l.jsx)(eu.Z,{title:"売上/請求管理",action:(0,l.jsx)(j.Z,{variant:"contained",color:"info",onClick:s,children:"請求書一括ダウンロード"})}),(0,l.jsxs)(ed.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[(0,l.jsx)(A,{handleSetFilterApplied:i}),(0,l.jsx)(er,{filterApplied:e})]})]})};var em=ec}},function(e){e.O(0,[8360,7851,8271,2288,6682,6261,7064,3863,7206,1441,376,7727,9774,2888,179],function(){return e(e.s=57875)}),_N_E=e.O()}]);