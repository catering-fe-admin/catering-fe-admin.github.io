(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{66242:function(t,e,o){"use strict";o.d(e,{Z:function(){return v}});var r=o(87462),n=o(63366),i=o(67294),a=o(63961),s=o(94780),l=o(90948),p=o(71657),d=o(90629),u=o(1588),c=o(34867);function m(t){return(0,c.Z)("MuiCard",t)}(0,u.Z)("MuiCard",["root"]);var x=o(85893);let h=["className","raised"],g=t=>{let{classes:e}=t;return(0,s.Z)({root:["root"]},m,e)},f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),b=i.forwardRef(function(t,e){let o=(0,p.Z)({props:t,name:"MuiCard"}),{className:i,raised:s=!1}=o,l=(0,n.Z)(o,h),d=(0,r.Z)({},o,{raised:s}),u=g(d);return(0,x.jsx)(f,(0,r.Z)({className:(0,a.Z)(u.root,i),elevation:s?8:void 0,ref:e,ownerState:d},l))});var v=b},44267:function(t,e,o){"use strict";o.d(e,{Z:function(){return b}});var r=o(87462),n=o(63366),i=o(67294),a=o(63961),s=o(94780),l=o(90948),p=o(71657),d=o(1588),u=o(34867);function c(t){return(0,u.Z)("MuiCardContent",t)}(0,d.Z)("MuiCardContent",["root"]);var m=o(85893);let x=["className","component"],h=t=>{let{classes:e}=t;return(0,s.Z)({root:["root"]},c,e)},g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=i.forwardRef(function(t,e){let o=(0,p.Z)({props:t,name:"MuiCardContent"}),{className:i,component:s="div"}=o,l=(0,n.Z)(o,x),d=(0,r.Z)({},o,{component:s}),u=h(d);return(0,m.jsx)(g,(0,r.Z)({as:s,className:(0,a.Z)(u.root,i),ownerState:d,ref:e},l))});var b=f},87109:function(t,e,o){"use strict";o.d(e,{Z:function(){return I}});var r,n=o(63366),i=o(87462),a=o(67294),s=o(63961),l=o(94780),p=o(98216),d=o(15861),u=o(47167),c=o(74423),m=o(90948),x=o(1588),h=o(34867);function g(t){return(0,h.Z)("MuiInputAdornment",t)}let f=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b=o(71657),v=o(85893);let w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Z=(t,e)=>{let{ownerState:o}=t;return[e.root,e[`position${(0,p.Z)(o.position)}`],!0===o.disablePointerEvents&&e.disablePointerEvents,e[o.variant]]},M=t=>{let{classes:e,disablePointerEvents:o,hiddenLabel:r,position:n,size:i,variant:a}=t,s={root:["root",o&&"disablePointerEvents",n&&`position${(0,p.Z)(n)}`,a,r&&"hiddenLabel",i&&`size${(0,p.Z)(i)}`]};return(0,l.Z)(s,g,e)},y=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Z})(({theme:t,ownerState:e})=>(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===e.variant&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},"start"===e.position&&{marginRight:8},"end"===e.position&&{marginLeft:8},!0===e.disablePointerEvents&&{pointerEvents:"none"})),C=a.forwardRef(function(t,e){let o=(0,b.Z)({props:t,name:"MuiInputAdornment"}),{children:l,className:p,component:m="div",disablePointerEvents:x=!1,disableTypography:h=!1,position:g,variant:f}=o,Z=(0,n.Z)(o,w),C=(0,c.Z)()||{},I=f;f&&C.variant,C&&!I&&(I=C.variant);let S=(0,i.Z)({},o,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:x,position:g,variant:I}),B=M(S);return(0,v.jsx)(u.Z.Provider,{value:null,children:(0,v.jsx)(y,(0,i.Z)({as:m,ownerState:S,className:(0,s.Z)(B.root,p),ref:e},Z,{children:"string"!=typeof l||h?(0,v.jsxs)(a.Fragment,{children:["start"===g?r||(r=(0,v.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,v.jsx)(d.Z,{color:"text.secondary",children:l})}))})});var I=C},42070:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return o(60310)}])},66476:function(t,e,o){"use strict";var r=o(85893),n=o(67294),i=o(98271),a=o(90948);let s=(0,a.ZP)(i.Z)(t=>{let{theme:e,style:o}=t;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:e.spacing(1),fontSize:e.typography.body2.fontSize,color:"".concat(e.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(e.palette.customColors.main,", 0.2)"),transition:e.transitions.create(["border-color","box-shadow"],{duration:e.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(e.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:e.palette.error.main},"&.Mui-focused":{boxShadow:e.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:e.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:e.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:e.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:e.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:e.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:e.palette.error.main},"&.Mui-error":{borderColor:e.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(e.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:e.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:e.spacing(1,0,0),color:e.palette.text.secondary,fontSize:e.typography.body2.fontSize,"&.Mui-error":{color:e.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:o||11,"&:after":{fontSize:"1.6rem !important"}}}}),l=(0,n.forwardRef)((t,e)=>{let{size:o="small",InputLabelProps:n,style:i,...a}=t;return(0,r.jsx)(s,{size:o,inputRef:e,...a,variant:"filled",InputLabelProps:{...n,shrink:!0},style:i})});l.displayName="CustomTextField",e.Z=l},60310:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return C}});var r=o(85893),n=o(67294),i=o(86501),a=o(25675),s=o.n(a),l=o(79878),p=o(66476),d=o(8928),u=o(17562),c=o(95715),m=o(90948),x=o(36822);let h=(0,m.ZP)(x.Z)(t=>{let{theme:e}=t;return{width:"100%",maxWidth:400,position:"relative",[e.breakpoints.up("md")]:{"&:before":{zIndex:-1,top:"-79px",content:'""',left:"-46px",width:"238px",height:"234px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='239' height='234' viewBox='0 0 239 234' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='88.5605' y='0.700195' width='149' height='149' rx='19.5' stroke='%23".concat(e.palette.primary.main.slice(1),"' stroke-opacity='0.16'/%3E%3Crect x='0.621094' y='33.761' width='200' height='200' rx='10' fill='%23").concat(e.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")},"&:after":{zIndex:-1,content:'""',width:"180px",right:"-57px",height:"180px",bottom:"-54px",position:"absolute",backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='181' height='181' viewBox='0 0 181 181' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.30469' y='1.44312' width='178' height='178' rx='19' stroke='%23".concat(e.palette.primary.main.slice(1),"' stroke-opacity='0.16' stroke-width='2' stroke-dasharray='8 8'/%3E%3Crect x='22.8047' y='22.9431' width='135' height='135' rx='10' fill='%23").concat(e.palette.primary.main.slice(1),"' fill-opacity='0.08'/%3E%3C/svg%3E\")")}}}});var g=o(69417),f=o(66242),b=o(44267),v=o(93946),w=o(87109),Z=o(15861),M=o(2734);let y=()=>{let[t,e]=(0,n.useState)({username:"",password:"",showPassword:!1}),o=(0,c.a)();(0,M.Z)();let a=e=>{e.preventDefault(),o.login({username:t.username,password:t.password},()=>{i.ZP.error("Invalid username or password")})},d=()=>{e({...t,showPassword:!t.showPassword})},m=o=>r=>{e({...t,[o]:r.target.value})};return(0,r.jsx)(x.Z,{className:"content-center",children:(0,r.jsx)(h,{children:(0,r.jsx)(f.Z,{children:(0,r.jsxs)(b.Z,{sx:{p:t=>"".concat(t.spacing(10.5,8,8)," !important")},children:[(0,r.jsxs)(x.Z,{sx:{mb:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(s(),{src:"/images/logo.jpg",alt:"me",width:184,height:62}),(0,r.jsx)(Z.Z,{variant:"h3",sx:{ml:2.5,fontWeight:700},children:u.Z.templateName})]}),(0,r.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:a,children:[(0,r.jsx)(p.Z,{autoFocus:!0,fullWidth:!0,id:"username",label:"ログインID",sx:{mb:4},placeholder:"000000",onChange:m("username")}),(0,r.jsx)(p.Z,{fullWidth:!0,sx:{mb:1.5},label:"パスワード",value:t.password,id:"auth-login-password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",onChange:m("password"),type:t.showPassword?"text":"password",InputProps:{endAdornment:(0,r.jsx)(w.Z,{position:"end",children:(0,r.jsx)(v.Z,{edge:"end",onClick:d,onMouseDown:t=>t.preventDefault(),"aria-label":"toggle password visibility",children:(0,r.jsx)(l.Z,{fontSize:"1.25rem",icon:t.showPassword?"tabler:eye":"tabler:eye-off"})})})}}),(0,r.jsx)(g.Z,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:4},children:"ログイン"})]})]})})})})};y.getLayout=t=>(0,r.jsx)(d.Z,{children:t}),y.guestGuard=!0;var C=y}},function(t){t.O(0,[8360,8271,9774,2888,179],function(){return t(t.s=42070)}),_N_E=t.O()}]);