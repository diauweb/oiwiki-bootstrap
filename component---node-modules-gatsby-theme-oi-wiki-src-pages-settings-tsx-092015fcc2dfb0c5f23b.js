(self.webpackChunkgatsby_oi_wiki=self.webpackChunkgatsby_oi_wiki||[]).push([[890],{3645:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var n=a(2122),o=a(8481),r=a(1253),l=a(7294),c=a(5505),i=a(4621),d=l.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.row,d=void 0!==i&&i,s=(0,r.Z)(e,["classes","className","row"]);return l.createElement("div",(0,n.Z)({className:(0,c.Z)(a.root,o,d&&a.row),ref:t},s))})),s=(0,i.Z)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(d),m=a(1291),u=a(2933);var h=l.createContext(),p=a(5126),f=l.forwardRef((function(e,t){var a=e.actions,c=e.children,i=e.name,d=e.value,f=e.onChange,b=(0,r.Z)(e,["actions","children","name","value","onChange"]),g=l.useRef(null),k=(0,u.Z)({controlled:d,default:e.defaultValue,name:"RadioGroup"}),v=(0,o.Z)(k,2),y=v[0],Z=v[1];l.useImperativeHandle(a,(function(){return{focus:function(){var e=g.current.querySelector("input:not(:disabled):checked");e||(e=g.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var E=(0,m.Z)(t,g),C=(0,p.Z)(i);return l.createElement(h.Provider,{value:{name:C,onChange:function(e){Z(e.target.value),f&&f(e,e.target.value)},value:y}},l.createElement(s,(0,n.Z)({role:"radiogroup",ref:E},b),c))})),b=a(8725),g=a(453),k=a(1664),v=l.forwardRef((function(e,t){e.checked;var a=e.classes,o=e.className,i=e.control,d=e.disabled,s=(e.inputRef,e.label),m=e.labelPlacement,u=void 0===m?"end":m,h=(e.name,e.onChange,e.value,(0,r.Z)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),p=(0,b.Z)(),f=d;void 0===f&&void 0!==i.props.disabled&&(f=i.props.disabled),void 0===f&&p&&(f=p.disabled);var v={disabled:f};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===i.props[t]&&void 0!==e[t]&&(v[t]=e[t])})),l.createElement("label",(0,n.Z)({className:(0,c.Z)(a.root,o,"end"!==u&&a["labelPlacement".concat((0,k.Z)(u))],f&&a.disabled),ref:t},h),l.cloneElement(i,v),l.createElement(g.Z,{component:"span",className:(0,c.Z)(a.label,f&&a.disabled)},s))})),y=(0,i.Z)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(v),Z=a(3729),E=l.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,d=e.checkedIcon,s=e.classes,m=e.className,h=e.defaultChecked,p=e.disabled,f=e.icon,g=e.id,k=e.inputProps,v=e.inputRef,y=e.name,E=e.onBlur,C=e.onChange,w=e.onFocus,x=e.readOnly,$=e.required,R=e.tabIndex,S=e.type,z=e.value,N=(0,r.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=(0,u.Z)({controlled:i,default:Boolean(h),name:"SwitchBase",state:"checked"}),I=(0,o.Z)(F,2),B=I[0],P=I[1],M=(0,b.Z)(),q=p;M&&void 0===q&&(q=M.disabled);var O="checkbox"===S||"radio"===S;return l.createElement(Z.Z,(0,n.Z)({component:"span",className:(0,c.Z)(s.root,m,B&&s.checked,q&&s.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){E&&E(e),M&&M.onBlur&&M.onBlur(e)},ref:t},N),l.createElement("input",(0,n.Z)({autoFocus:a,checked:i,defaultChecked:h,className:s.input,disabled:q,id:O&&g,name:y,onChange:function(e){var t=e.target.checked;P(t),C&&C(e,t)},readOnly:x,ref:v,required:$,tabIndex:R,type:S,value:z},k)),B?d:f)})),C=(0,i.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(E),w=a(9123),x=(0,w.Z)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),$=(0,w.Z)(l.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var R=(0,i.Z)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return l.createElement("div",{className:(0,c.Z)(a.root,t&&a.checked)},l.createElement(x,{fontSize:n}),l.createElement($,{fontSize:n,className:a.layer}))})),S=a(7595),z=a(8231);var N=l.createElement(R,{checked:!0}),F=l.createElement(R,null),I=l.forwardRef((function(e,t){var a=e.checked,o=e.classes,i=e.color,d=void 0===i?"secondary":i,s=e.name,m=e.onChange,u=e.size,p=void 0===u?"medium":u,f=(0,r.Z)(e,["checked","classes","color","name","onChange","size"]),b=l.useContext(h),g=a,v=(0,z.Z)(m,b&&b.onChange),y=s;return b&&(void 0===g&&(g=b.value===e.value),void 0===y&&(y=b.name)),l.createElement(C,(0,n.Z)({color:d,type:"radio",icon:l.cloneElement(F,{fontSize:"small"===p?"small":"medium"}),checkedIcon:l.cloneElement(N,{fontSize:"small"===p?"small":"medium"}),classes:{root:(0,c.Z)(o.root,o["color".concat((0,k.Z)(d))]),checked:o.checked,disabled:o.disabled},name:y,checked:g,onChange:v,ref:t},f))})),B=(0,i.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,S.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,S.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(I),P=l.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.color,d=void 0===i?"secondary":i,s=e.edge,m=void 0!==s&&s,u=e.size,h=void 0===u?"medium":u,p=(0,r.Z)(e,["classes","className","color","edge","size"]),f=l.createElement("span",{className:a.thumb});return l.createElement("span",{className:(0,c.Z)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[m],"small"===h&&a["size".concat((0,k.Z)(h))])},l.createElement(C,(0,n.Z)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:(0,c.Z)(a.switchBase,a["color".concat((0,k.Z)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},p)),l.createElement("span",{className:a.track}))})),M=(0,i.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,S.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,S.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(P),q=a(920),O=a(838),L=a(3332),D=a(1690),A=a(169),T=a(9535),_=a(8856),H=(0,q.Z)((function(e){return{root:function(t){return{background:t?t.main:void 0,color:t?t.contrastText:e.palette.background.default,margin:"1em 1.2em 1em 0",padding:0,width:"8em",height:"8em",border:".1em solid",borderColor:e.palette.divider,"&:hover":{background:t?t.dark:void 0}}},label:{lineHeight:"1.2em",textAlign:"left",justifyContent:"left",position:"absolute",bottom:".4em",left:".3em",width:"calc(100% - .6em)"}}})),j=function(e){var t=H("auto"===e.data.main?void 0:e.data);return l.createElement(O.Z,{item:!0},l.createElement(L.Z,{classes:t,onClick:function(){return e.onClick(e.data)}},e.data.desc))},G=function(e){var t=e.location,a=(0,_.y)(),n=a[0],o=a[1],r=function(e){o({theme:{primary:"auto"===e.main?null:e}})},c=function(e){if("auto"===e.main)throw new Error("invalid color");o({theme:{secondary:e.id}})};return l.createElement(A.Z,{location:t,noMeta:"true",noEdit:"true",noToC:"true",title:"设置"},l.createElement(O.Z,{container:!0,direction:"column",spacing:2},l.createElement(O.Z,{item:!0},l.createElement(D.Z,null,"暗色模式",l.createElement(f,{name:"theme-mode",value:n.darkMode.type,onChange:function(e){o({darkMode:{type:e.target.value}})}},l.createElement(y,{value:"user-preference",control:l.createElement(B,null),label:"跟随系统"}),l.createElement(y,{value:"always-on",control:l.createElement(B,null),label:"总是打开"}),l.createElement(y,{value:"always-off",control:l.createElement(B,null),label:"总是关闭"})))),l.createElement(O.Z,{item:!0},l.createElement(D.Z,null,"动画",l.createElement(s,null,l.createElement(y,{control:l.createElement(M,{checked:n.animation.smoothScroll,onChange:function(e){o({animation:{smoothScroll:e.target.checked}})},name:"animation-smooth-scroll"}),label:"使用平滑滚动"})))),l.createElement(O.Z,{item:!0},l.createElement(D.Z,null,"等宽字体",l.createElement(s,null,l.createElement(y,{control:l.createElement(M,{checked:n.theme.fallbackMonoFont,onChange:function(e){o({theme:{fallbackMonoFont:e.target.checked}})},name:"monofont"}),label:"使用浏览器默认字体"})))),l.createElement(O.Z,{item:!0},"导航栏颜色",l.createElement(O.Z,{container:!0},T.Z.map((function(e){return l.createElement(j,{data:e,key:e.main,onClick:r})})))),l.createElement(O.Z,{item:!0},"强调色",l.createElement(O.Z,{container:!0},T.Z.map((function(e){return"0"!==e.id&&l.createElement(j,{data:e,key:e.main,onClick:c})}))))))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-oi-wiki-src-pages-settings-tsx-092015fcc2dfb0c5f23b.js.map