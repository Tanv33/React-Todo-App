(this.webpackJsonptodoapp_firebase=this.webpackJsonptodoapp_firebase||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),i=n.n(c),o=(n(100),n(101),n(7)),s=n(1),l=n.n(s),d=n(6),u=n(17),b=n(81),j=n(30);Object(b.a)({apiKey:"AIzaSyCqifGo_f5hwguU7GS8c3qH5TAT1_E1nhA",authDomain:"todo-react-860c9.firebaseapp.com",projectId:"todo-react-860c9"});var p=Object(j.e)(),x=n(156),h=n(157),f=n(8),O=n(166),v=n(168),m=n(152),g=n(72),y=n(165),k=n(167),w=n(163),C=n(164),E=n(4),T=Object(j.b)(p,"todo");var S=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(u.a)(c,2),s=i[0],b=i[1];Object(r.useEffect)((function(){var e=Object(j.h)(T,Object(j.g)("timestamp")),t=Object(j.f)(e,(function(e){var t=[];e.forEach((function(e){var n=e.id,r=e.data();t.unshift({id:n,value:r.value})})),b(t)}));return function(){t()}}),[]);var p=function(e){e.target.disabled=!0,e.target.parentElement.children[0].innerHTML='<input type="text" size="28" style=" width: auto;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;" value="'.concat(e.target.parentElement.children[0].innerText,'"/>'),e.target.parentElement.children[0].children[0].addEventListener("blur",function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.j)(Object(j.d)(T,n.target.parentElement.id),{value:"".concat(n.target.value)});case 2:e.target.disabled=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},S=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n){e.next=11;break}return e.prev=2,r={value:n,timestamp:Object(j.i)()},e.next=6,Object(j.a)(T,r);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:a("");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(Object(j.d)(T,t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=Object(f.a)(m.a)((function(e){var t,n=e.theme;return t={},Object(o.a)(t,"&.".concat(g.a.head),{backgroundColor:"#953553",color:n.palette.common.white}),Object(o.a)(t,"&.".concat(g.a.body),{fontSize:14}),t})),L=Object(f.a)(w.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));return Object(E.jsxs)("div",{children:[Object(E.jsxs)("form",{onSubmit:S,style:{margin:"0px 10px",marginTop:"40px",marginBottom:"20px"},children:[Object(E.jsx)(x.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Type your list Here",variant:"outlined",tabIndex:"1",type:"text",value:n,onChange:function(e){a(e.target.value)}}),Object(E.jsx)(h.a,{variant:"contained",onClick:S,style:{margin:"0px 4px",marginTop:"9px",backgroundColor:"#009E60"},children:"Submit"}),Object(E.jsx)(h.a,{variant:"contained",style:{margin:"0px 4px",marginTop:"9px",backgroundColor:"#811331"},onClick:function(){s.forEach(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(Object(j.d)(T,t.id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Delete All"})]}),Object(E.jsx)("div",{children:Object(E.jsx)(y.a,{component:C.a,children:Object(E.jsxs)(O.a,{"aria-label":"customized table",children:[Object(E.jsx)(k.a,{children:Object(E.jsx)(w.a,{children:Object(E.jsx)(z,{sx:{textAlign:"center "},children:"Your Todo List"})})}),Object(E.jsx)(v.a,{children:s.map((function(e,t){return Object(E.jsx)(L,{children:Object(E.jsxs)(z,{component:"th",scope:"row",children:["\u2606\xa0\xa0",Object(E.jsx)("span",{id:e.id,children:e.value}),Object(E.jsx)(h.a,{onClick:p,variant:"contained",style:{margin:"6px",marginLeft:"14px",backgroundColor:"#009E60"},size:"small",children:"Edit"}),Object(E.jsx)(h.a,{size:"small",onClick:function(){A(e.id)},style:{backgroundColor:"#811331"},variant:"contained",children:"Delete"})]})},t)}))})]})})})]})},A=n(160),z=n(159),L=n(161),D=n(162);var F=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z.a,{sx:{flexGrow:1},children:Object(E.jsx)(A.a,{position:"static",sx:{backgroundColor:"#630330"},children:Object(E.jsx)(L.a,{children:Object(E.jsx)(D.a,{variant:"h6",textAlign:"center",component:"div",sx:{flexGrow:1},children:Object(E.jsx)("span",{style:{cursor:"pointer"},children:"Advanced Todo App"})})})})}),Object(E.jsx)(z.a,{children:Object(E.jsx)(S,{})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(F,{})}),document.getElementById("root")),I()}},[[112,1,2]]]);
//# sourceMappingURL=main.c88ecc30.chunk.js.map