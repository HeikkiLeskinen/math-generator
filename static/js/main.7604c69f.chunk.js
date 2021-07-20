(this["webpackJsonpmath-generator"]=this["webpackJsonpmath-generator"]||[]).push([[0],{100:function(e,t,n){},116:function(e,t){},117:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(10),o=n.n(i),s=(n(93),n(94),n(152)),l=n(159),u=n(161),b=n(79),j=n(75),f=n.n(j),d=n(31),O=n(154),g=n(155),h=n(156),x=n(149),p=n(157),m=n(151);!function(e){e.START_GAME="START_GAME",e.UPDATE_CONFIG="UPDATE_CONFIG",e.GENERATE_EXERICES="GENERATE_EXERICES",e.SUBMIT_ANSWER="SUBMIT_ANSWER",e.INCREASE_SCORE="INCREASE_SCORE"}(r||(r={}));var E=r,v=n(48),S=n(32),y=n(160),A=n(147),C=n(153),T=n(74),I=n.n(T),N=n(3),w=(n(100),n(7)),R=Object(A.a)({cardRow:{border:"0 solid transparent",boxShadow:"0 0.1875rem 0 #ec131e",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)",alignItems:"center"},exercise:{display:"flex",flexWrap:"nowrap",alignContent:"flex-start",justifyContent:"center",alignItems:"center"},calculation:{flex:.5,textAlign:"end"},answer:{flex:.5,display:"flex",alignItems:"center",marginLeft:"10px",padding:"10px"},inCorrect:{backgroundColor:"#ef5350",color:"#fff",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},input:{border:"10 solid green",fontSize:"3rem",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:400,lineHeight:"1.167",letterSpacing:"0em",color:"#929797"},focused:{color:"#25ad62"},white:{color:"white",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},yellow:{color:"#ffee58",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},icon:{margin:"10px",display:"flex",height:"50%",width:"50%"}});function D(){var e=R(),t=Object(a.useState)(new Map),n=Object(S.a)(t,2),r=n[0],c=n[1],i=Object(d.c)((function(e){return{catalogue:e.catalogue}})).catalogue,o=Object(d.b)(),u=function(e){var t=e.target.name,n=e.target.value;c(r.set(t,n))},b=function(e){o({type:E.SUBMIT_ANSWER,payload:{id:e,answer:r.get(e)}})},j=i.exercises.filter((function(e){return!0!==e.correct})).map((function(t,n){return Object(w.jsx)(x.a,{children:Object(w.jsx)(m.a,{className:Object(N.a)(e.cardRow,Object(v.a)({},e.inCorrect,!1===t.correct)),children:Object(w.jsxs)(s.a,{className:e.exercise,children:[Object(w.jsx)(y.a,{className:e.calculation,children:Object(w.jsxs)(C.a,{variant:"h3",children:[t.operators.join(" ")," ="]})}),Object(w.jsxs)(y.a,{className:Object(N.a)(e.answer),children:[Object(w.jsx)(l.a,{inputRef:function(e){return e&&0===n&&e.focus()},required:!0,name:t.id,variant:"outlined",onChange:u,onKeyPress:function(e){return function(e,t){"Enter"===e.key&&b(t)}(e,t.id)},InputProps:{className:Object(N.a)(e.input,Object(v.a)({},(e.inCorrect,e.white),!1===t.correct)),classes:{focused:!1===t.correct?e.yellow:e.focused}}}),Object(w.jsx)(y.a,{children:Object(w.jsx)(I.a,{className:e.icon,onClick:function(){return b(t.id)}})})]})]})})},t.id)}));return Object(w.jsx)("div",{children:j})}var _,G=function(){var e=Object(d.c)((function(e){return{config:e.config,score:e.score,running:e.running}})),t=e.config,n=(e.score,e.running,Object(d.b)()),r=Object(b.a)({palette:{primary:{main:f.a[500]},secondary:{main:"#11cb5f"}}}),a=["High Digit","Number of Digit","Number of Exercise"],c=[{label:a[0],value:t.highDigit},{label:a[1],value:t.numberOfDigits},{label:a[2],value:t.numberOfExercises}],i=function(e){return e===a[0]?100:e===a[1]?5:15};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(O.a,{theme:r,children:Object(w.jsxs)("article",{children:[Object(w.jsx)(s.a,{maxWidth:"xl",children:Object(w.jsx)(D,{})}),Object(w.jsx)(s.a,{maxWidth:"xl",style:{paddingTop:"10px"},children:Object(w.jsx)(x.a,{children:Object(w.jsx)(m.a,{children:Object(w.jsxs)(g.a,{cols:4,spacing:30,cellHeight:"auto",children:[c.map((function(e){return Object(w.jsx)(h.a,{cols:1,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(l.a,{label:e.label,type:"number",InputLabelProps:{shrink:!0},variant:"filled",value:e.value,fullWidth:!0,inputProps:{step:1,min:(t=e.label,t===a[0]?0:t===a[1]?2:1),max:i(e.label)},onChange:function(t){return function(e,t){if(!function(e){return!e||0===e.length}(t)){var r=parseInt(t);n(e===a[0]?{type:E.UPDATE_CONFIG,payload:{highDigit:r}}:e===a[1]?{type:E.UPDATE_CONFIG,payload:{numberOfDigits:r}}:{type:E.UPDATE_CONFIG,payload:{numberOfExercises:r}})}}(e.label,t.currentTarget.value)}})})});var t})),Object(w.jsx)(h.a,{cols:1,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){return n({type:E.START_GAME})},children:"GENERATE EXERCISE"})})})]})})})})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},F=n(62),P=n(76),W=n.n(P),k=n(22),U=n.n(k),L=n(12),B=n(23),H=n(158),K=n(162);!function(e){e.WALK="WALK",e.FIGHT="FIGHT",e.OPEN="OPEN"}(_||(_={}));var X=U.a.mark(Z),J={score:0,running:!1,config:{numberOfExercises:10,numberOfDigits:3,highDigit:10},catalogue:{exercises:[]}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.START_GAME:return Object(B.a)(Object(B.a)({},e),{},{score:0,running:!0,catalogue:z(e.config)});case E.UPDATE_CONFIG:return Object(B.a)(Object(B.a)({},e),{},{config:Object(B.a)(Object(B.a)({},e.config),t.payload)});case E.INCREASE_SCORE:return Object(B.a)(Object(B.a)({},e),{},{score:t.payload.amount+e.score,running:!1});case E.SUBMIT_ANSWER:var n=t.payload,r=n.id,a=n.answer,c=Q(e.catalogue,r,a);return Object(B.a)(Object(B.a)({},e),{},{score:0,running:!0,catalogue:c});default:return e}},z=function(e){var t=Z(e);return{exercises:Object(L.a)(Array(e.numberOfExercises)).map((function(e,n){return{id:Object(K.a)(),operators:t.next().value,category:_.WALK}}))}},Q=function(e,t,n){return{exercises:e.exercises.map((function(e){return e.id===t?Object.assign({},e,{correct:V(e,n)}):e}))}},V=function(e,t){var n=Object(H.a)(e.operators.join(""));return n==t},Y=function e(t){return t.length<3||!(Object(H.a)(t.join(""))<=0)&&(Object(H.a)(t.slice(0,3).join(""))>=0&&e(t.slice(2)))};function Z(e){var t,n;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=e.numberOfDigits+(e.numberOfDigits-1);case 1:if(n=Object(L.a)(Array(t)).map((function(t,n){return r=n,a=e.highDigit,r%2===0?Math.floor(Math.random()*a).toString():"+-*:".charAt(Math.floor(2*Math.random()));var r,a})),!Y(n)){r.next=6;break}return r.next=6,n;case 6:r.next=1;break;case 8:case"end":return r.stop()}}),X)}var $=n(78);o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(d.a,{store:Object(F.createStore)(q,Object($.composeWithDevTools)(Object(F.applyMiddleware)(W.a))),children:Object(w.jsx)(G,{})})}),document.getElementById("root")),M()},93:function(e,t,n){},94:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.7604c69f.chunk.js.map