(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5878],{93473:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mousse-menu-order",function(){return i(14655)}])},97065:function(e,t,i){"use strict";var n=i(85893),l=i(67294),r=i(41609),o=i.n(r),a=i(24697),d=i(74368),u=i(7323),s=i(66476),c=i(36822),m=i(84962);let v=e=>{let{error:t,helperText:i,defaultValue:r={},value:v={id:"",name:""},onChange:h,label:p="施設名",disabled:x,selectorSelectedKey:f="name",additionalParams:g={}}=e,[Z,j]=(0,l.useState)(""),[y]=(0,a.Nr)(Z,300),P={page:1,size:5,[f]:y,...g};o()(P.name)&&delete P.name;let{data:D,fetchNextPage:C,hasNextPage:b,isFetchingNextPage:k}=(0,u.uv)(P,{select:e=>{var t;return null==e?void 0:null===(t=e.pages)||void 0===t?void 0:t.flatMap(e=>{var t;return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.content})}}),w=e=>{let t=e.currentTarget;(0,d.U2)(t,30,async()=>{b&&(k||C())})},T=(e,t,i)=>{e&&"blur"===e.type?j(""):"reset"!==i&&j(t)},M=e=>null==e?void 0:e[f];return(0,n.jsx)(m.Z,{options:D||[],getOptionLabel:e=>M(e)||"",id:"dropdownCustomerFacilities",onInputChange:T,onChange:(e,t)=>h(t),disabled:x,renderInput:e=>(0,n.jsx)(s.Z,{...e,label:p,error:t,helperText:i}),renderOption:(e,t)=>(0,l.createElement)(c.Z,{...e,component:"li",key:null==t?void 0:t.id},M(t)||""),ListboxProps:{onScroll:w,style:{maxHeight:150}},defaultValue:r,value:v})};t.Z=v},67686:function(e,t,i){"use strict";var n=i(85893),l=i(67294),r=i(41609),o=i.n(r),a=i(24697),d=i(74368),u=i(4568),s=i(66476),c=i(84962),m=i(36822);let v=e=>{let{error:t,helperText:i,withAdditionalParams:r,additionalParams:v,defaultValue:h={},value:p={},onChange:x,label:f="",selectorSelectedKey:g="name",disabled:Z=!1,disableClearable:j,contentsModifier:y}=e,[P,D]=(0,l.useState)(""),[C]=(0,a.Nr)(P,300),b={page:1,size:10,[g]:C,...v};Object.keys(b).map(e=>{b[e]||delete b[e]});let{data:k,fetchNextPage:w,hasNextPage:T,isFetchingNextPage:M}=(0,u.SG)(b,{enabled:!Z&&(!r||!o()(v)),select:e=>{var t;let i=null==e?void 0:null===(t=e.pages)||void 0===t?void 0:t.flatMap(e=>{var t;return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.content});return y?y(i):i}}),S=e=>{let t=e.currentTarget;(0,d.U2)(t,30,async()=>{T&&(M||w())})},I=(e,t,i)=>{e&&"blur"===e.type?D(""):"reset"!==i&&D(t)},_=e=>{var t;let i={...e,code:null==e?void 0:e.code,name:null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.name};return null==i?void 0:i[g]};return(0,n.jsx)(c.Z,{options:k||[],getOptionLabel:e=>_(e)||"",id:"autocomplete-custom",disableClearable:j,onInputChange:I,onChange:(e,t)=>x(t),disabled:Z,renderInput:e=>(0,n.jsx)(s.Z,{...e,label:f,error:t,helperText:i}),renderOption:(e,t)=>(0,l.createElement)(m.Z,{...e,component:"li",key:null==t?void 0:t.id},_(t)||""),ListboxProps:{onScroll:S,style:{maxHeight:150}},defaultValue:h,value:p})};t.Z=v},53198:function(e,t,i){"use strict";var n=i(85893),l=i(53816),r=i(53252),o=i(18979);i(67294);let a=e=>{let{rowsNum:t,cellsNum:i}=e;return[...Array(t)].map((e,t)=>(0,n.jsx)(l.Z,{children:[...Array(i)].map((e,t)=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(o.Z,{animation:"wave",variant:"text"})},t))},t))};t.Z=a},74368:function(e,t,i){"use strict";i.d(t,{$U:function(){return p},Bi:function(){return u},Iy:function(){return a},Kd:function(){return h},U2:function(){return s},WL:function(){return d},Wd:function(){return o},cB:function(){return v},ec:function(){return x},hN:function(){return f},sl:function(){return r},y_:function(){return c}});var n=i(27484),l=i.n(n);let r=["PUBLIC","PRIVATE","DELETED"],o={PUBLIC:"公開",PRIVATE:"非公開",DELETED:"削除"},a={END_FOLLOWING_MONTH:"30日(月末)",DATE_10_FOLLOWING_MONTH:"10日",DATE_15_FOLLOWING_MONTH:"15日",DATE_20_FOLLOWING_MONTH:"20日"},d={END_NEXT_MONTH:"翌月末",DATE_25_NEXT_MONTH:"翌月25日",DATE_20_NEXT_MONTH:"翌月20日",DATE_15_NEXT_MONTH:"翌月15日",DATE_10_NEXT_MONTH:"翌月10日",DATE_5_SECOND_MONTH:"翌々月5日",DATE_10_SECOND_MONTH:"翌々月10日"},u=e=>{let t=e.split("-");return"".concat(parseInt(t[0]),"年").concat(parseInt(t[1]),"月").concat(parseInt(t[2]),"日")},s=(e,t,i)=>{t=parseInt(t),e.scrollTop+e.clientHeight>=e.scrollHeight-t&&i()},c=e=>{let t=null==e?void 0:e.map(e=>({id:e.customerFacility.id,name:e.customerFacility.name})),i=new Map;null==t||t.forEach(e=>{i.has(e.name)||i.set(e.name,e)});let n=Array.from(i.values());return n.sort((e,t)=>e.name.localeCompare(t.name,"ja"))};var m=new Date;let v=new Date(m.getFullYear(),m.getMonth(),1),h=new Date(m.getFullYear(),m.getMonth()+1,0),p=e=>{let t=new Date(e);return t.setMonth(t.getMonth()+1),t.setDate(0),t},x=e=>e?l()(e).format("YYYY-MM-DD"):null,f=e=>{let t=Intl.NumberFormat("en-US"),i=t.format(Math.floor(parseInt(e)));return i}},81820:function(e,t,i){"use strict";var n=i(10987);let l=(0,n.rh)({todos:{list:e=>[e],detail:e=>[e]},adminBulletins:{list:e=>[e],detail:e=>[e]},adminPrefectures:{list:e=>[e],detail:e=>[e]},adminItems:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCourses:{list:e=>[e],detail:e=>[e]},adminSuppliers:{list:e=>[e],detail:e=>[e],holiday:e=>[e]},adminAllergens:{list:e=>[e],detail:e=>[e]},adminItemPacks:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminItemPacksInventories:{list:e=>[e]},adminItemPackLogs:{list:e=>[e]},adminMenus:{list:e=>[e],detail:e=>[e]},adminTimeSections:{list:e=>[e],detail:e=>[e]},adminCustomers:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchases:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminSupplierPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminCustomersFacilities:{list:e=>[e],detail:e=>[e]},facilityKinds:{list:e=>[e],detail:e=>[e]},adminWarehouses:{list:e=>[e],detail:e=>[e]},adminSupplierInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerInvoiceMonthlies:{list:e=>[e],export:e=>[e],detail:e=>[e]},adminCustomerPurchaseMenus:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseSingles:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMousses:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseRices:{list:e=>[e],detail:e=>[e]},adminServes:{list:e=>[e],detail:e=>[e]},adminCustomerPurchaseMonthlies:{list:e=>[e],detail:e=>[e]},adminItemDeliveries:{list:e=>[e]},adminCustomerDeliveries:{list:e=>[e],deliver:e=>[e],exportDeliverySlip:e=>[e]},adminCustomerDeliveriesGenerate:{list:e=>[e],detail:e=>[e]},adminCustomerDeliveriesExportDeliverySlip:{list:e=>[e]},adminCustomerDeliveriesDeliver:{list:e=>[e]},publicTemperature:{list:e=>[e]},publicClosingType:{list:e=>[e]},publicPaymentType:{list:e=>[e]},publicTimezoneType:{list:e=>[e]},publicDeliveryFrequency:{list:e=>[e]}});t.Z=l},62661:function(e,t,i){"use strict";i.d(t,{N:function(){return c},X0:function(){return v},UU:function(){return m},yc:function(){return h}});var n=i(36492),l=i(48228),r=i(29180);let o=e=>r.Z.get("admin/customer-purchase-mousses",{params:e}),a=e=>r.Z.post("admin/customer-purchase-mousses/preview",e),d=e=>r.Z.post("admin/customer-purchase-mousses",e),u=e=>r.Z.put("admin/customer-purchase-mousses",e);var s=i(81820);let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.Z.adminCustomerPurchaseMousses.list(e).queryKey,l=()=>o(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},m=()=>(0,l.D)(e=>a(e)),v=()=>(0,l.D)(e=>d(e)),h=()=>(0,l.D)(e=>u(e))},18055:function(e,t,i){"use strict";i.d(t,{WJ:function(){return x},dj:function(){return v},aV:function(){return m},Dq:function(){return h},WB:function(){return p}});var n=i(36492),l=i(48228),r=i(29180);let o=e=>r.Z.get("admin/customers",{params:e}),a=e=>r.Z.get("admin/customers/export",{params:e}),d=(e,t)=>r.Z.get("admin/customers/".concat(e),{params:t}),u=e=>r.Z.post("admin/customers",e),s=(e,t)=>r.Z.put("admin/customers/".concat(e),t);var c=i(81820);let m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.Z.adminCustomers.list(e).queryKey,l=()=>o(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.Z.adminCustomers.export(e).queryKey,l=()=>a(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.Z.adminCustomers.detail(e).queryKey,l=()=>d(e),r={...t};return(0,n.a)({queryKey:i,queryFn:l,...r})},p=()=>(0,l.D)(e=>u(e)),x=e=>(0,l.D)(t=>s(e,t))},7323:function(e,t,i){"use strict";i.d(t,{gr:function(){return f},G9:function(){return p},XD:function(){return h},uv:function(){return v},kW:function(){return x},Sl:function(){return g}});var n=i(59403),l=i(36492),r=i(48228),o=i(29180);let a=e=>o.Z.get("admin/customer-facilities",{params:e}),d=(e,t)=>o.Z.get("admin/customer-facilities/".concat(e),{params:t}),u=e=>o.Z.post("admin/customer-facilities",e,{headers:{"Content-Type":"multipart/form-data"}}),s=(e,t)=>o.Z.put("admin/customer-facilities/".concat(e),t,{headers:{"Content-Type":"multipart/form-data"}}),c=(e,t)=>o.Z.put("admin/customer-facilities/".concat(e,"/password/reset"),t);var m=i(81820);let v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminCustomersFacilities.list(e).queryKey,l=t=>a({...e,page:t});return(0,n.N)({queryKey:i,queryFn:e=>{let{pageParam:t}=e;return l(t)},getNextPageParam:e=>{var t,i;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.last)return null;let n=(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.number)+1;return n+1},...t})},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminCustomersFacilities.list(e).queryKey,n=()=>a(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminCustomersFacilities.detail(e).queryKey,n=()=>d(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},x=()=>(0,r.D)(e=>u(e)),f=e=>(0,r.D)(t=>s(e,t)),g=e=>(0,r.D)(()=>c(e))},4568:function(e,t,i){"use strict";i.d(t,{s3:function(){return g},qo:function(){return p},x5:function(){return h},bZ:function(){return x},SG:function(){return v},tj:function(){return f}});var n=i(59403),l=i(36492),r=i(48228),o=i(29180);let a=e=>o.Z.get("admin/item-packs",{params:e}),d=e=>o.Z.get("admin/item-packs/export",{params:e,responseType:"blob"}),u=e=>o.Z.get("admin/item-packs/".concat(e)),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.Z.post("admin/item-packs",e,{...t})},c=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.Z.put("admin/item-packs/".concat(e),t,{...i})};var m=i(81820);let v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminItemPacks.list(e).queryKey,l=t=>a({...e,...t});return(0,n.N)({queryKey:i,queryFn:e=>{let{pageParam:t}=e;return l(t)},getNextPageParam:e=>{var t,i;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.last)return null;let n=(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.number)+1;return{page:n+1}},...t})},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminItemPacks.list(e).queryKey,n=()=>a(e);return(0,l.a)({queryKey:i,queryFn:n,...t})},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminItemPacks.export(e).queryKey,n=()=>d(e),r={...t};return(0,l.a)({queryKey:i,queryFn:n,...r})},x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m.Z.adminItemPacks.detail(e).queryKey,n=()=>u(e);return(0,l.a)({queryKey:i,queryFn:n,...t})},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.D)(t=>s(t,e))},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.D)(i=>c(e,i,t))}},14655:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ei}});var n=i(85893),l=i(67294),r=i(11163),o=i(66242),a=i(86886),d=i(78445),u=i(44267),s=i(9198),c=i.n(s),m=i(86874),v=i(66476),h=i(69417),p=i(69368),x=i(8168),f=i(97065);let g=(0,l.forwardRef)((e,t)=>(0,n.jsx)(v.Z,{...e,inputRef:t,label:null==e?void 0:e.label,autoComplete:"off"}));g.displayName="CustomDateInput";let Z=e=>{let{filter:t,handleChange:i,setFilterApplied:l}=e;return(0,n.jsxs)(a.ZP,{container:!0,spacing:5,paddingTop:"24px",padding:"0 24px",justifyContent:"center",children:[(0,n.jsxs)(a.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,n.jsx)(a.ZP,{item:!0,md:5.825,xs:12,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(c(),{id:"requireAtFrom",showYearDropdown:!0,showMonthDropdown:!0,selected:null==t?void 0:t.requireAtFrom,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",onChange:i("requireAtFrom"),customInput:(0,n.jsx)(g,{fullWidth:!0,label:"献立日"})})})}),(0,n.jsx)(a.ZP,{item:!0,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"},children:"〜"}),(0,n.jsx)(a.ZP,{item:!0,md:5.825,xs:12,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(c(),{id:"requireAtTo",showYearDropdown:!0,showMonthDropdown:!0,selected:null==t?void 0:t.requireAtTo,placeholderText:"YYYY/MM/DD",onChange:i("requireAtTo"),customInput:(0,n.jsx)(g,{fullWidth:!0})})})})]}),(0,n.jsxs)(a.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,n.jsx)(a.ZP,{item:!0,md:5.825,xs:12,children:(0,n.jsx)(f.Z,{defaultValue:null==t?void 0:t.customerFacility,value:null==t?void 0:t.customerFacility,onChange:i("customerFacility")})}),(0,n.jsx)(a.ZP,{item:!0,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"}}),(0,n.jsxs)(a.ZP,{item:!0,md:5.825,xs:12,children:[(0,n.jsx)(x.Z,{label:"発注未済",control:(0,n.jsx)(p.Z,{checked:(null==t?void 0:t.orderStatus)==="notCompleted",onChange:i("orderStatus"),value:"notCompleted"})}),(0,n.jsx)(x.Z,{label:"発注済み",control:(0,n.jsx)(p.Z,{checked:(null==t?void 0:t.orderStatus)==="completed",onChange:i("orderStatus"),value:"completed"})}),(0,n.jsx)(x.Z,{label:"全注文",control:(0,n.jsx)(p.Z,{checked:(null==t?void 0:t.orderStatus)==="all",onChange:i("orderStatus"),value:"all"})})]})]}),(0,n.jsx)(a.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,n.jsx)(a.ZP,{xs:2,children:(0,n.jsx)(h.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:()=>l(t),children:"検索"})})})]})};var j=i(25675),y=i.n(j),P=i(15861),D=i(85945),C=i(27484),b=i.n(C),k=i(50361),w=i.n(k),T=i(57632),M=i(81820),S=i(62661),I=i(70519),_=i(36822),q=i(7906),A=i(295),F=i(53252),N=i(72882),E=i(53184),O=i(53816),Y=i(26280),L=i(13113),H=i(53198),W=i(96486),G=i(4568),K=i(4431),Q=i(89825),B=i(93946),R=i(67686);let V=e=>{var t,i,l,r,o,d,u,s;let{displayedRow:h,idx:x,editedPurchaseList:f,purchaseList:g,setEditedPurchaseList:Z}=e,{isHaveOrdered:j,itemPacks:y,requireAt:P,totalPackQtyGlobal:D,uuid:C}=h||{},k=null==y?void 0:y[x],{itemPack:w}=k||{},{data:T}=(0,G.bZ)(null==w?void 0:w.id,{enabled:!!(null==w?void 0:w.id)}),M=(e,t,i)=>{if(e>=0){t[e]=i,Z(t);return}Z(t=[...t,i])},S=e=>{let t=(0,W.cloneDeep)(f),i=(0,W.cloneDeep)(g),n=(null==t?void 0:t.find(e=>(null==e?void 0:e.uuid)===C))||(null==i?void 0:i.find(e=>(null==e?void 0:e.uuid)===C));n.isHaveOrdered=e.target.checked;let l=null==f?void 0:f.findIndex(e=>(null==e?void 0:e.uuid)===C);M(l,t,n)},I=e=>{let{isClickPlus:t,isClickMinus:i,newData:n,inputValue:l}=e,r=parseFloat(n.totalPackQtyGlobal);return t?r+1:i?r-1:l},_=e=>{let{inputValue:t,isClickPlus:i,isClickMinus:n}=e,l=(0,W.cloneDeep)(f),r=(0,W.cloneDeep)(g),o=(null==l?void 0:l.find(e=>(null==e?void 0:e.uuid)===C))||(null==r?void 0:r.find(e=>(null==e?void 0:e.uuid)===C)),a=I({isClickPlus:i,isClickMinus:n,newData:o,inputValue:t});o.totalPackQtyGlobal=a;let d=null==f?void 0:f.findIndex(e=>(null==e?void 0:e.uuid)===C);M(d,l,o)},q=e=>{let t=(0,W.cloneDeep)(f),i=(0,W.cloneDeep)(g),n=(null==t?void 0:t.find(e=>(null==e?void 0:e.uuid)===C))||(null==i?void 0:i.find(e=>(null==e?void 0:e.uuid)===C));n.itemPacks[x].itemPack.id=null==e?void 0:e.id,n.itemPacks[x].itemPack.code=null==e?void 0:e.code;let l=null==f?void 0:f.findIndex(e=>(null==e?void 0:e.uuid)===C);M(l,t,n)},A=e=>{let t=(0,W.cloneDeep)(f),i=(0,W.cloneDeep)(g),n=(null==t?void 0:t.find(e=>(null==e?void 0:e.uuid)===C))||(null==i?void 0:i.find(e=>(null==e?void 0:e.uuid)===C));n.requireAt=e?b()(e).format("YYYY-MM-DD"):null;let l=null==f?void 0:f.findIndex(e=>(null==e?void 0:e.uuid)===C);M(l,t,n)},N=e=>null==e?void 0:e.filter(e=>null==e?void 0:e.isAlaCarteAllowed);return(0,n.jsxs)(O.Z,{hover:!0,children:[(0,n.jsx)(F.Z,{children:(0,n.jsx)(p.Z,{checked:j,onChange:S})}),(0,n.jsx)(F.Z,{children:null==w?void 0:null===(t=w.item)||void 0===t?void 0:null===(i=t.course)||void 0===i?void 0:i.name}),(0,n.jsx)(F.Z,{children:null==w?void 0:null===(l=w.item)||void 0===l?void 0:l.name}),(0,n.jsx)(F.Z,{children:(0,n.jsxs)(a.ZP,{container:!0,spacing:2,justifyContent:"right",alignItems:"center",children:[(0,n.jsx)(a.ZP,{item:!0,xs:8,children:(0,n.jsx)(R.Z,{withAdditionalParams:!0,additionalParams:{name:null==w?void 0:null===(r=w.item)||void 0===r?void 0:r.name},defaultValue:(null==w?void 0:w.id)?{id:null==w?void 0:w.id,unitQtyOnPack:null==T?void 0:null===(o=T.data)||void 0===o?void 0:o.unitQtyOnPack}:{},value:(null==w?void 0:w.id)?{id:null==w?void 0:w.id,unitQtyOnPack:null==T?void 0:null===(d=T.data)||void 0===d?void 0:d.unitQtyOnPack}:{},selectorSelectedKey:"unitQtyOnPack",onChange:e=>q(e),disableClearable:!0,error:!(null==w?void 0:w.id),helperText:(null==w?void 0:w.id)?"":"必要",contentsModifier:N})}),(0,n.jsx)(a.ZP,{item:!0,children:"切"})]})}),(0,n.jsx)(F.Z,{children:(null==T?void 0:null===(u=T.data)||void 0===u?void 0:u.unitPrice)?"".concat(null==T?void 0:null===(s=T.data)||void 0===s?void 0:s.unitPrice,"円"):"-"}),(0,n.jsx)(F.Z,{children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(c(),{id:"requireDate-".concat(x),showYearDropdown:!0,showMonthDropdown:!0,selected:P?new Date(null==P?void 0:P.split("/").join("-")):null,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",customInput:(0,n.jsx)(v.Z,{fullWidth:!0}),onChange:A})})}),(0,n.jsx)(F.Z,{children:(0,n.jsxs)(a.ZP,{container:!0,spacing:2,justifyContent:"right",alignItems:"center",children:[(0,n.jsx)(a.ZP,{item:!0,xs:8,children:(0,n.jsx)(v.Z,{fullWidth:!0,type:"number",inputProps:{style:{textAlign:"center"}},defaultValue:D,value:D,id:"totalPackQtyGlobal-".concat(x),onChange:e=>_({inputValue:e.target.value})})}),(0,n.jsx)(a.ZP,{item:!0,children:"食"})]})}),(0,n.jsx)(F.Z,{children:(0,n.jsxs)(a.ZP,{container:!0,justifyContent:"right",alignItems:"center",minHeight:"70px",children:[(0,n.jsx)(a.ZP,{item:!0,children:(0,n.jsx)(B.Z,{onClick:()=>_({isClickPlus:!0}),children:(0,n.jsx)(K.Z,{fontSize:"small"})})}),(0,n.jsx)(a.ZP,{item:!0,children:(0,n.jsx)(B.Z,{onClick:()=>_({isClickMinus:!0}),children:(0,n.jsx)(Q.Z,{fontSize:"small"})})})]})})]})};var X=[{id:"manufacture",label:"メーカーへ発注",withSort:!1,width:200},{id:"category",label:"カテゴリ",withSort:!1,width:200},{id:"items.item.name",label:"品名",withSort:!1,width:250},{id:"internalVolume",label:"内容量",withSort:!1,width:250},{id:"unitPrice",label:"単価",withSort:!1,width:250},{id:"date",label:"希望納品日",withSort:!1,width:200},{id:"order",label:"注文数",withSort:!1,width:200},{id:"action",label:"",withSort:!1,width:100}];let U=e=>{var t,i;let{filterApplied:o}=e,d=(0,D.NL)(),u=(0,r.useRouter)(),{customerFacilityId:s,issueAtPeriodFrom:c,issueAtPeriodTo:m}=u.query||{},{mutate:v}=(0,S.X0)(),[p,x]=(0,l.useState)(0),[f,g]=(0,l.useState)(5),[Z,j]=(0,l.useState)("desc"),[y,P]=(0,l.useState)(""),[C,k]=(0,l.useState)([]),[W,G]=(0,l.useState)([]),K=(e,t)=>{x(t)},Q=e=>{g(+e.target.value),x(0)},B=e=>{j(y===e&&"asc"===Z?"desc":"asc"),P(e)},R=()=>{if((null==W?void 0:W.length)===0)return;let e=null==W?void 0:W.map(e=>{var t,i;return{id:(null==e?void 0:e.id)||null,requireAt:(null==e?void 0:e.requireAt)||null,customerFacility:{id:null==e?void 0:null===(t=e.customerFacility)||void 0===t?void 0:t.id},totalPackQtyGlobal:(null==e?void 0:e.totalPackQtyGlobal)?parseFloat(null==e?void 0:e.totalPackQtyGlobal):0,itemPacks:null==e?void 0:null===(i=e.itemPacks)||void 0===i?void 0:i.map(e=>{var t;return{id:(null==e?void 0:e.id)||null,itemPack:{id:(null==e?void 0:null===(t=e.itemPack)||void 0===t?void 0:t.id)||null}}}),isHaveOrdered:null==e?void 0:e.isHaveOrdered}});v(e,{onSuccess:async()=>{await d.refetchQueries(M.Z.adminCustomerPurchaseMousses._def),G([])}})},U={page:p+1,size:f,...{...(null==o?void 0:o.requireAtFrom)&&{requireAtFrom:b()(null==o?void 0:o.requireAtFrom).format("YYYY-MM-DD")},...(null==o?void 0:o.requireAtTo)&&{requireAtTo:b()(null==o?void 0:o.requireAtTo).format("YYYY-MM-DD")},...(null==o?void 0:null===(t=o.customerFacility)||void 0===t?void 0:t.id)&&{customerFacilityId:null==o?void 0:null===(i=o.customerFacility)||void 0===i?void 0:i.id},...(null==o?void 0:o.orderStatus)!="all"&&{isHaveOrdered:(null==o?void 0:o.orderStatus)==="completed"}},...{...s&&{customerFacilityId:s},...c&&{requireAtFrom:c},...m&&{requireAtTo:m}},...y&&{sort:"".concat(y,",").concat(Z)}},{data:z,isFetching:J}=(0,S.N)(U,{staleTime:1/0}),$=null==z?void 0:z.data,ee=null==$?void 0:$.content,et=null==$?void 0:$.totalElements;return(0,l.useEffect)(()=>{var e;if(!z||J)return;let t=M.Z.adminCustomerPurchaseMousses.list(U).queryKey,i=d.getQueryData(t);d.setQueryData(t,()=>{var e;if(!i)return;let t=w()(i);return t.data.content=null===(e=t.data.content)||void 0===e?void 0:e.map(e=>(null==e?void 0:e.uuid)?e:{uuid:(0,T.Z)(),...e}),t});let n=null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.content;k(n)},[ee,J]),(0,l.useEffect)(()=>()=>{d.removeQueries(M.Z.adminCustomerPurchaseMousses._def)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.Z,{children:(0,n.jsxs)(q.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(E.Z,{children:(0,n.jsx)(O.Z,{children:X.map(e=>(0,n.jsx)(F.Z,{align:e.align,style:{width:null==e?void 0:e.width},children:(null==e?void 0:e.withSort)?(0,n.jsxs)(Y.Z,{active:y===e.id,direction:y===e.id?Z:"asc",onClick:()=>B(e.id),children:[e.label,y===e.id?(0,n.jsx)(_.Z,{component:"span",sx:L.Z,children:"desc"===Z?"sorted descending":"sorted ascending"}):null]}):e.label},e.id))})}),(0,n.jsx)(A.Z,{children:J?(0,n.jsx)(H.Z,{rowsNum:10,cellsNum:8}):(null==C?void 0:C.length)===0?(0,n.jsx)(O.Z,{children:(0,n.jsx)(F.Z,{colSpan:null==X?void 0:X.length,align:"center",children:"「該当する品目はありません。」"})}):null==C?void 0:C.map((e,t)=>{var i;let l=(null==W?void 0:W.find(t=>(null==t?void 0:t.uuid)===(null==e?void 0:e.uuid)))||e;return null==l?void 0:null===(i=l.itemPacks)||void 0===i?void 0:i.map((e,i)=>(0,n.jsx)(V,{idx:i,displayedRow:l,editedPurchaseList:W,purchaseList:C,setEditedPurchaseList:G},"".concat(null==l?void 0:l.uuid,"-").concat(t,"-").concat(i)))})})]})}),(0,n.jsx)(I.Z,{rowsPerPageOptions:[5,10,15],component:"div",count:et,rowsPerPage:f,page:p,onPageChange:K,onRowsPerPageChange:Q,labelRowsPerPage:"表示件数"}),(0,n.jsxs)(a.ZP,{container:!0,xs:12,height:"52px",padding:"0 24px",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(a.ZP,{item:!0}),(0,n.jsx)(a.ZP,{item:!0,xs:2,children:(0,n.jsx)(h.Z,{variant:"contained",color:"success",fullWidth:!0,onClick:R,children:"登録"})})]})]})},z=()=>(0,n.jsxs)(a.ZP,{container:!0,item:!0,xs:12,spacing:2,children:[(0,n.jsx)(a.ZP,{item:!0,children:(0,n.jsx)(P.Z,{variant:"h5",component:"p",children:"リールホーム学園前"})}),(0,n.jsx)(a.ZP,{item:!0,children:(0,n.jsx)(y(),{src:"/images/logo/gakuenmae.png",width:24,height:24,alt:"gakuenmae"})})]}),J=e=>{let{filterApplied:t}=e,i=(0,r.useRouter)(),l=i.query.customerFacilityId;return(0,n.jsxs)(a.ZP,{container:!0,xs:12,alignItems:"center",children:[!l&&(0,n.jsx)(a.ZP,{item:!0,paddingLeft:"24px",paddingBottom:"24px",children:(0,n.jsx)(z,{})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(U,{filterApplied:t})})]})};var $=i(18055),ee=i(7323);let et=()=>{var e,t;let i=(0,r.useRouter)(),{customerId:s,customerFacilityId:c}=i.query||{},[m,v]=(0,l.useState)({requireAtFrom:null,requireAtTo:null,customerFacility:{},orderStatus:"all"}),[h,p]=(0,l.useState)(m),x=e=>t=>{var i;let n={requireAtFrom:t,requireAtTo:t,customerFacility:t,orderStatus:null==t?void 0:null===(i=t.target)||void 0===i?void 0:i.value},l=null==n?void 0:n[e];v({...m,[e]:l})},{data:f}=(0,$.Dq)(s,{enabled:!!s}),g=null==f?void 0:null===(e=f.data)||void 0===e?void 0:e.name,{data:j}=(0,ee.G9)(c,{enabled:!!c}),y=null==j?void 0:null===(t=j.data)||void 0===t?void 0:t.name;return(0,n.jsx)(a.ZP,{container:!0,spacing:6,children:(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(d.Z,{title:"「献立メニュー」注文検索/一覧"}),(0,n.jsxs)(u.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[c?(0,n.jsxs)(_.Z,{sx:{paddingLeft:"36px",marginBottom:"24px"},children:[(0,n.jsxs)(P.Z,{sx:{marginBottom:"10px"},children:["顧客名: ",g]}),(0,n.jsxs)(P.Z,{children:["施設名: ",y]})]}):(0,n.jsx)(Z,{filter:m,handleChange:x,setFilterApplied:p}),(0,n.jsx)(J,{filterApplied:h})]})]})})})};var ei=et}},function(e){e.O(0,[3662,8360,7851,8271,2288,6682,6261,6644,7064,3863,7815,361,387,7727,9774,2888,179],function(){return e(e.s=93473)}),_N_E=e.O()}]);