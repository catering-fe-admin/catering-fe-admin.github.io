(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5934],{1194:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return i(68626)}])},53198:function(e,t,i){"use strict";var n=i(85893),l=i(53816),r=i(53252),a=i(18979);i(67294);let d=e=>{let{rowsNum:t,cellsNum:i}=e;return[...Array(t)].map((e,t)=>(0,n.jsx)(l.Z,{children:[...Array(i)].map((e,t)=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(a.Z,{animation:"wave",variant:"text"})},t))},t))};t.Z=d},74368:function(e,t,i){"use strict";i.d(t,{$U:function(){return p},Bi:function(){return s},Iy:function(){return d},Kd:function(){return v},U2:function(){return u},WL:function(){return o},Wd:function(){return a},cB:function(){return h},ec:function(){return x},hN:function(){return f},sl:function(){return r},y_:function(){return c}});var n=i(27484),l=i.n(n);let r=["PUBLIC","PRIVATE","DELETED"],a={PUBLIC:"公開",PRIVATE:"非公開",DELETED:"削除"},d={END_FOLLOWING_MONTH:"30日(月末)",DATE_10_FOLLOWING_MONTH:"10日",DATE_15_FOLLOWING_MONTH:"15日",DATE_20_FOLLOWING_MONTH:"20日"},o={END_NEXT_MONTH:"翌月末",DATE_25_NEXT_MONTH:"翌月25日",DATE_20_NEXT_MONTH:"翌月20日",DATE_15_NEXT_MONTH:"翌月15日",DATE_10_NEXT_MONTH:"翌月10日",DATE_5_SECOND_MONTH:"翌々月5日",DATE_10_SECOND_MONTH:"翌々月10日"},s=e=>{let t=e.split("-");return"".concat(parseInt(t[0]),"年").concat(parseInt(t[1]),"月").concat(parseInt(t[2]),"日")},u=(e,t,i)=>{t=parseInt(t),e.scrollTop+e.clientHeight>=e.scrollHeight-t&&i()},c=e=>{let t=null==e?void 0:e.map(e=>({id:e.customerFacility.id,name:e.customerFacility.name})),i=new Map;null==t||t.forEach(e=>{i.has(e.name)||i.set(e.name,e)});let n=Array.from(i.values());return n.sort((e,t)=>e.name.localeCompare(t.name,"ja"))};var m=new Date;let h=new Date(m.getFullYear(),m.getMonth(),1),v=new Date(m.getFullYear(),m.getMonth()+1,0),p=e=>{let t=new Date(e);return t.setMonth(t.getMonth()+1),t.setDate(0),t},x=e=>e?l()(e).format("YYYY-MM-DD"):null,f=e=>{let t=Intl.NumberFormat("en-US"),i=t.format(Math.floor(parseInt(e)));return i}},81820:function(e,t,i){"use strict";var n=i(10987);let l=(0,n.rh)({todos:{list:e=>[e],detail:e=>[e]},adminBulletins:{list:e=>[e],detail:e=>[e]},adminPrefectures:{list:e=>[e],detail:e=>[e]},adminItems:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCourses:{list:e=>[e],detail:e=>[e]},adminSuppliers:{list:e=>[e],detail:e=>[e],holiday:e=>[e]},adminAllergens:{list:e=>[e],detail:e=>[e]},adminItemPacks:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminItemPacksInventories:{list:e=>[e]},adminItemPackLogs:{list:e=>[e]},adminMenus:{list:e=>[e],detail:e=>[e]},adminTimeSections:{list:e=>[e],detail:e=>[e]},adminCustomers:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchases:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminCustomersFacilities:{list:e=>[e],detail:e=>[e]},facilityKinds:{list:e=>[e],detail:e=>[e]},adminWarehouses:{list:e=>[e],detail:e=>[e]},adminSupplierInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerPurchaseMenus:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseSingles:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMousses:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseRices:{list:e=>[e],detail:e=>[e]},adminServes:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminItemDeliveries:{list:e=>[e]},adminCustomerDeliveries:{list:e=>[e],deliver:e=>[e],exportDeliverySlip:e=>[e]},adminCustomerDeliveriesGenerate:{list:e=>[e],detail:e=>[e]},adminCustomerDeliveriesExportDeliverySlip:{list:e=>[e]},adminCustomerDeliveriesDeliver:{list:e=>[e]},publicTemperature:{list:e=>[e]},publicClosingType:{list:e=>[e]},publicPaymentType:{list:e=>[e]},publicTimezoneType:{list:e=>[e]},publicDeliveryFrequency:{list:e=>[e]}});t.Z=l},17197:function(e,t,i){"use strict";i.d(t,{nj:function(){return v},Ew:function(){return c},og:function(){return m},Dd:function(){return h}});var n=i(36492),l=i(48228),r=i(29180);let a=e=>r.Z.get("admin/menus",{params:e}),d=(e,t)=>r.Z.get("admin/menus/".concat(e),{params:t}),o=e=>r.Z.post("admin/menus",e),s=(e,t)=>r.Z.put("admin/menus/".concat(e),t);var u=i(81820);let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.Z.adminMenus.list(e).queryKey,l=()=>{let t=new URLSearchParams;return Object.keys(e).forEach(i=>{"sort"===i?e[i].forEach(e=>{t.append(i,e)}):t.append(i,e[i])}),a(t)},r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.Z.adminMenus.detail(e).queryKey,l=()=>d(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},h=()=>(0,l.D)(e=>o(e)),v=e=>(0,l.D)(t=>s(e,t))},68626:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return L}});var n=i(85893),l=i(67294),r=i(41664),a=i.n(r),d=i(35937),o=i.n(d),s=i(9198),u=i.n(s),c=i(79878),m=i(86874),h=i(74368),v=i(66476),p=i(69417),x=i(86886),f=i(93946);let g=e=>{let{handleSetFilterApplied:t}=e,[i,r]=(0,l.useState)({dateFrom:h.cB,dateTo:h.Kd});return(0,n.jsxs)(x.ZP,{container:!0,spacing:5,padding:"24px",justifyContent:"center",children:[(0,n.jsxs)(x.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,n.jsx)(x.ZP,{item:!0,lg:6,md:6,xs:12,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(u(),{selected:null==i?void 0:i.dateFrom,showYearDropdown:!0,showMonthDropdown:!0,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",customInput:(0,n.jsx)(v.Z,{fullWidth:!0,label:"年月日",autoComplete:"off"}),id:"dateFrom",onChange:e=>r({...i,dateFrom:e}),clearIcon:(0,n.jsx)(f.Z,{edge:"end",onClick:e=>r({...i,dateFrom:e}),children:(0,n.jsx)(c.Z,{fontSize:"1.25rem",icon:"ic:baseline-clear"})})})})}),(0,n.jsx)(x.ZP,{item:!0,lg:6,md:6,xs:12,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(u(),{selected:null==i?void 0:i.dateTo,showYearDropdown:!0,showMonthDropdown:!0,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",customInput:(0,n.jsx)(v.Z,{fullWidth:!0,label:"年月日",autoComplete:"off"}),id:"date",onChange:e=>r({...i,dateTo:e}),clearIcon:(0,n.jsx)(f.Z,{edge:"end",onClick:e=>r({...i,dateTo:e}),children:(0,n.jsx)(c.Z,{fontSize:"1.25rem",icon:"ic:baseline-clear"})})})})})]}),(0,n.jsx)(x.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,n.jsx)(x.ZP,{item:!0,xs:2,children:(0,n.jsx)(p.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:()=>t(i),children:"検索"})})})]})};var j=i(27484),w=i.n(j),Z=i(17197),T=i(36822),D=i(90629),M=i(7906),_=i(295),E=i(53252),y=i(72882),P=i(53184),S=i(70519),b=i(53816),C=i(26280),N=i(13113),I=i(53198),F=[{id:"date",label:"日付",align:"left",width:300,withSort:!0},{id:"timeSection.name",label:"時間帯",align:"left",width:300,withSort:!0},{id:"items.item.course.name",label:"カテゴリー",align:"left",width:300,withSort:!0},{id:"items.item.name",label:"品名",align:"left",width:300,withSort:!0},{id:"items.item.allergens.allergen.name",label:"アレルゲン",align:"left",width:300,withSort:!0},{id:"items.item.cookMethod",label:"調理方法",align:"left",width:300,withSort:!1},{id:"action",label:"アクション",align:"right",width:200}];let O=e=>{let{filterApplied:t}=e,[i,r]=(0,l.useState)(0),[d,o]=(0,l.useState)(10),[s,u]=(0,l.useState)("desc"),[c,m]=(0,l.useState)("date"),h=(e,t)=>{r(t)},v=e=>{o(+e.target.value),r(0)},x=e=>{u(c===e&&"asc"===s?"desc":"asc"),m(e)},f={page:i+1,size:d,sort:["".concat(c,",").concat(s),"timeSection.typeOrder,asc","timeSection.name,asc"],dateFrom:(null==t?void 0:t.dateFrom)?w()(t.dateFrom).format("YYYY-MM-DD"):"",dateTo:(null==t?void 0:t.dateTo)?w()(t.dateTo).format("YYYY-MM-DD"):""};Object.keys(f).map(e=>{f[e]||delete f[e]});let{data:g,isFetching:j}=(0,Z.Ew)(f),O=null==g?void 0:g.data,Y=(null==O?void 0:O.content)||[],k=null==O?void 0:O.totalElements,A=(e=>{if((null==e?void 0:e.length)>0){let t=[];return null==e||e.map(e=>{var i;null==e||null===(i=e.items)||void 0===i||i.map((i,n)=>{var l;let r=(null==e?void 0:null===(l=e.items)||void 0===l?void 0:l.length)-1==n;t.push({menuId:null==e?void 0:e.id,date:0==n?null==e?void 0:e.date:null,timeSection:0==n?null==e?void 0:e.timeSection:null,withBorder:!!r,isFirstItem:0==n,...i})})}),t}})(Y);return(0,n.jsxs)(D.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,n.jsx)(y.Z,{children:(0,n.jsxs)(M.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(P.Z,{children:(0,n.jsx)(b.Z,{children:F.map(e=>(0,n.jsx)(E.Z,{align:null==e?void 0:e.align,style:{width:null==e?void 0:e.width,padding:"8px"},children:(null==e?void 0:e.withSort)?(0,n.jsxs)(C.Z,{active:c===e.id,direction:c===e.id?s:"asc",onClick:()=>x(e.id),children:[e.label,c===e.id?(0,n.jsx)(T.Z,{component:"span",sx:N.Z,children:"desc"===s?"sorted descending":"sorted ascending"}):null]}):e.label},e.id))})}),(0,n.jsx)(_.Z,{children:j?(0,n.jsx)(I.Z,{rowsNum:10,cellsNum:7}):null==A?void 0:A.map(e=>{var t,i,l,r,d,o,s,u;return(0,n.jsxs)(b.Z,{hover:!0,children:[(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:e.date}),(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:null===(t=e.timeSection)||void 0===t?void 0:t.name}),(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:null===(i=e.item)||void 0===i?void 0:null===(l=i.course)||void 0===l?void 0:l.name}),(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.name}),(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:null===(d=e.item)||void 0===d?void 0:null===(o=d.allergens)||void 0===o?void 0:o.map((t,i)=>{var n,l,r;let a=(null==e?void 0:null===(n=e.item)||void 0===n?void 0:null===(l=n.allergens)||void 0===l?void 0:l.length)-1==i;return"".concat(null==t?void 0:null===(r=t.allergen)||void 0===r?void 0:r.name).concat(a?"":",")})}),(0,n.jsx)(E.Z,{align:"left",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},children:null==e?void 0:null===(s=e.item)||void 0===s?void 0:s.cookMethod}),(0,n.jsx)(E.Z,{align:"right",sx:{border:(null==e?void 0:e.withBorder)?"1":"0"},rowSpan:1,children:(null==e?void 0:e.isFirstItem)&&(0,n.jsx)(a(),{href:"/menu/".concat(null==e?void 0:e.menuId),children:(0,n.jsx)(p.Z,{variant:"contained",color:"success",children:"詳細"})})})]},null==e?void 0:null===(u=e.item)||void 0===u?void 0:u.id)})})]})}),(0,n.jsx)(S.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:k,rowsPerPage:d,page:i,onPageChange:h,onRowsPerPageChange:v,labelRowsPerPage:"表示件数"})]})};var Y=i(66242),k=i(44267),A=i(78445);let B=()=>{let[e,t]=(0,l.useState)({dateFrom:(0,h.ec)(h.cB),dateTo:(0,h.ec)(h.Kd)}),i=e=>{let i=o()({dateFrom:(0,h.ec)(null==e?void 0:e.dateFrom),dateTo:(0,h.ec)(null==e?void 0:e.dateTo)},e=>!!e)||{};t(i)};return(0,n.jsx)(x.ZP,{container:!0,spacing:6,children:(0,n.jsx)(x.ZP,{item:!0,xs:12,children:(0,n.jsxs)(Y.Z,{children:[(0,n.jsx)(A.Z,{title:"献立マスター",action:(0,n.jsx)(a(),{href:"/menu/create",children:(0,n.jsx)(p.Z,{variant:"contained",color:"info",children:"新規献立登録"})})}),(0,n.jsxs)(k.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[(0,n.jsx)(g,{handleSetFilterApplied:i}),(0,n.jsx)(O,{filterApplied:e})]})]})})})};var L=B}},function(e){e.O(0,[8360,7851,8271,2288,6682,6261,7064,3863,7815,7206,5024,7727,9774,2888,179],function(){return e(e.s=1194)}),_N_E=e.O()}]);