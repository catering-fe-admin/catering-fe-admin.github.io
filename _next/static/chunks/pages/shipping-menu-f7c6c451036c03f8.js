(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3554],{7263:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shipping-menu",function(){return i(74434)}])},74434:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return _}});var r=i(85893),t=i(67294),n=i(9198),a=i.n(n),d=i(35823),u=i.n(d),o=i(35937),s=i.n(o),c=i(86874),m=i(74368),v=i(21888),x=i(69417),h=i(86886),j=i(67739),y=i(97065),p=i(41609),Z=i.n(p),g=i(66476),w=i(22224);let q=e=>{var l,i;let{error:t,helperText:n,defaultValue:a={},value:d={id:"",value:""},onChange:u,label:o="menu date",readOnly:s=!1}=e,c=null===(i=(l=[{id:1,value:"require",label:"献立日",key:"Menu Date"},{id:2,value:"delivery",label:"出荷日",key:"Delivery Date"},{id:3,value:"work",label:"仕事の日付",key:"Work Date"}]).filter)||void 0===i?void 0:i.call(l,e=>(null==e?void 0:e.value)!==(null==d?void 0:d.value));return(0,r.jsxs)(g.Z,{error:t,helperText:n,fullWidth:!0,select:!0,SelectProps:{readOnly:s,defaultValue:a,value:d,onChange:u},label:o,id:"DropdownMenuDate",children:[!Z()(a)&&(0,r.jsx)(w.Z,{value:a,children:null==a?void 0:a.label}),null==c?void 0:c.map((e,l)=>(0,r.jsx)(w.Z,{value:e,children:null==e?void 0:e.label},l))]})},A=e=>{let{setParams:l,tabValue:i}=e,[n,d]=(0,t.useState)({type:"MENU",customerFacility:{},requireAtFrom:m.cB,requireAtTo:m.Kd,menuDate:{id:1,value:"require",label:"献立日",key:"Menu Date"}}),o=e=>l=>{var i,r;let t=null!==(r=null==l?void 0:null===(i=l.target)||void 0===i?void 0:i.value)&&void 0!==r?r:l;d({...n,[e]:t})},p=()=>{let{type:e,customerFacility:l,requireAtFrom:i,requireAtTo:r,menuDate:t}=n||{},a={require:"requireAtFrom",work:"workAtFrom",delivery:"deliveryAtFrom"},d={require:"requireAtTo",work:"workAtTo",delivery:"deliveryAtTo"},u=s()({type:e,customerFacility:l,menuDate:t,[null==a?void 0:a[null==t?void 0:t.value]]:(0,m.ec)(i),[null==d?void 0:d[null==t?void 0:t.value]]:(0,m.ec)(r)},e=>!!e)||{};return u},Z=e=>{null==e||e.preventDefault();let i=p();l(i)},g=async()=>{var e;let l=p();Object.keys(l).map(e=>{l[e]||delete l[e],delete l.menuDate,delete l.customerFacility});let{data:i}=await (0,v.Mh)({...l,customerFacilityId:null==n?void 0:null===(e=n.customerFacility)||void 0===e?void 0:e.id});i&&u()(i,"献立出荷指示.zip")},w=async()=>{var e;let l=p();Object.keys(l).map(e=>{l[e]||delete l[e],delete l.menuDate,delete l.customerFacility});let{data:i}=await (0,v.tv)({...l,customerFacilityId:null==n?void 0:null===(e=n.customerFacility)||void 0===e?void 0:e.id});if((null==i?void 0:i.message)==="OPERATION.DELIVER.SUCCESS"){let{data:e}=await (0,v.fS)(l);e&&u()(e,"献立出荷指示.csv")}},A={all:{requireAtFrom:null==n?void 0:n.requireAtFrom,requireAtTo:null==n?void 0:n.requireAtTo},current:{requireAtFrom:new Date,requireAtTo:new Date},old:{requireAtFrom:null,requireAtTo:new Date}};return(0,t.useEffect)(()=>{var e,l;d({...n,requireAtFrom:null==A?void 0:null===(e=A[i])||void 0===e?void 0:e.requireAtFrom,requireAtTo:null==A?void 0:null===(l=A[i])||void 0===l?void 0:l.requireAtTo})},[i]),(0,r.jsxs)(h.ZP,{container:!0,spacing:5,padding:"24px",children:[(0,r.jsxs)(h.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,r.jsx)(h.ZP,{item:!0,lg:3,md:3,xs:12,children:(0,r.jsx)(q,{label:"献立日",defaultValue:null==n?void 0:n.menuDate,value:null==n?void 0:n.menuDate,onChange:o("menuDate")})}),(0,r.jsxs)(h.ZP,{item:!0,container:!0,spacing:5,md:7,lg:7,children:[(0,r.jsx)(h.ZP,{item:!0,md:3,lg:3,xs:12,children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(a(),{id:"requireAtFrom",showYearDropdown:!0,showMonthDropdown:!0,selected:null==n?void 0:n.requireAtFrom,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",onChange:o("requireAtFrom"),customInput:(0,r.jsx)(j.Z,{fullWidth:!0,label:"献立日"}),disabled:"current"===i||"old"===i})})}),(0,r.jsx)(h.ZP,{item:!0,lg:.35,md:.35,marginBottom:1,display:{xs:"none",lg:"block",md:"block"},children:"〜"}),(0,r.jsx)(h.ZP,{item:!0,md:3,lg:3,xs:12,children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(a(),{id:"requireAtTo",showYearDropdown:!0,showMonthDropdown:!0,selected:null==n?void 0:n.requireAtTo,placeholderText:"YYYY/MM/DD",dateFormat:"yyyy/MM/dd",onChange:o("requireAtTo"),customInput:(0,r.jsx)(j.Z,{fullWidth:!0}),disabled:"current"===i||"old"===i})})})]}),(0,r.jsx)(h.ZP,{item:!0,md:2,lg:2,xs:2,children:(0,r.jsx)(x.Z,{fullWidth:!0,color:"warning",variant:"contained",size:"small",onClick:g,children:"納品書 一括ダウンロード"})})]}),(0,r.jsxs)(h.ZP,{item:!0,container:!0,spacing:5,alignItems:"flex-end",children:[(0,r.jsx)(h.ZP,{item:!0,lg:10,md:10,xs:12,children:(0,r.jsx)(h.ZP,{item:!0,md:5,lg:5,xs:12,children:(0,r.jsx)(y.Z,{defaultValue:null==n?void 0:n.customerFacility,value:null==n?void 0:n.customerFacility,onChange:o("customerFacility")})})}),(0,r.jsx)(h.ZP,{item:!0,md:2,lg:2,xs:2,children:(0,r.jsx)(x.Z,{fullWidth:!0,color:"warning",variant:"contained",size:"small",onClick:w,children:"発送指示書 CSVダウンロード"})})]}),(0,r.jsx)(h.ZP,{item:!0,container:!0,xs:12,justifyContent:"center",children:(0,r.jsx)(h.ZP,{item:!0,xs:2,children:(0,r.jsx)(x.Z,{fullWidth:!0,color:"warning",variant:"contained",onClick:Z,children:"検索"})})})]})};var D=i(76480),b=i(45670),F=i(30298),f=i(55050),k=i(36822),P=i(40044),T=i(66242),M=i(44267),C=i(78445);let E=()=>{let[e,l]=(0,t.useState)({type:"MENU",customerFacility:{},requireAtFrom:(0,m.ec)(m.cB),requireAtTo:(0,m.ec)(m.Kd),menuDate:{id:1,value:"require",key:"Menu Date"}}),[i,n]=(0,t.useState)("all"),a=(e,l)=>{n(l)};return(0,r.jsx)(h.ZP,{container:!0,spacing:6,children:(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsxs)(T.Z,{children:[(0,r.jsx)(C.Z,{title:"出荷管理ページ（献立）"}),(0,r.jsxs)(M.Z,{sx:{p:0,"&:last-child":{pb:0}},children:[(0,r.jsx)(A,{setParams:l,tabValue:i}),(0,r.jsx)(k.Z,{sx:{width:"100%",typography:"body1"},children:(0,r.jsxs)(b.ZP,{value:i,children:[(0,r.jsx)(k.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,r.jsxs)(F.Z,{onChange:a,children:[(0,r.jsx)(P.Z,{label:"全部",value:"all"}),(0,r.jsx)(P.Z,{label:"本日",value:"current"}),(0,r.jsx)(P.Z,{label:"本日完了",value:"old"})]})}),(0,r.jsx)(f.Z,{value:"all",children:(0,r.jsx)(D.Z,{type:"all",params:e,tabValue:i})}),(0,r.jsx)(f.Z,{value:"current",children:(0,r.jsx)(D.Z,{type:"current",params:e,tabValue:i})}),(0,r.jsx)(f.Z,{value:"old",children:(0,r.jsx)(D.Z,{type:"old",params:e,tabValue:i})})]})})]})]})})})};var _=E}},function(e){e.O(0,[3662,8360,7851,8271,2288,6682,6261,6644,7064,3863,7206,361,748,7727,6752,1395,9774,2888,179],function(){return e(e.s=7263)}),_N_E=e.O()}]);