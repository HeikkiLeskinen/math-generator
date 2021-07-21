(this["webpackJsonpmath-generator"]=this["webpackJsonpmath-generator"]||[]).push([[0],{107:function(e,t,r){},117:function(e,t){},118:function(e,t,r){"use strict";r.r(t);var n,c=r(0),a=r.n(c),i=r(10),o=r.n(i),s=(r(94),r(35)),l=(r(95),r(148)),u=r(156),b=r(153),j=r(161),d=r(163),f=r(80),g=r(76),O=r.n(g),h=r(27),x=r(155),p=r(157),m=r(158),E=r(150),v=r(159),S=r(152);!function(e){e.START_GAME="START_GAME",e.UPDATE_CONFIG="UPDATE_CONFIG",e.GENERATE_EXERICES="GENERATE_EXERICES",e.SUBMIT_ANSWER="SUBMIT_ANSWER",e.INCREASE_SCORE="INCREASE_SCORE"}(n||(n={}));var y=n,A=r(32),T=r(162),C=r(154),I=r(75),N=r.n(I),R=r(3),w=r(7),D=Object(l.a)({cardRow:{border:"0 solid transparent",boxShadow:"0 0.1875rem 0 #ec131e",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)",alignItems:"center"},exercise:{display:"flex",flexWrap:"nowrap",alignContent:"flex-start",justifyContent:"center",alignItems:"center"},calculation:{flex:.5,textAlign:"end"},answer:{flex:.5,display:"flex",alignItems:"center",marginLeft:"10px",padding:"10px"},inCorrect:{backgroundColor:"#ef5350",color:"#fff",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},input:{border:"10 solid green",fontSize:"3rem",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:400,lineHeight:"1.167",letterSpacing:"0em",color:"#929797"},focused:{color:"#25ad62"},white:{color:"white",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},yellow:{color:"#ffee58",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"},icon:{margin:"10px",display:"flex",height:"50%",width:"50%"}});function _(e){var t=e.exercise,r=e.index,n=D(),a=Object(c.useState)(""),i=Object(A.a)(a,2),o=i[0],l=i[1],u=Object(h.b)(),d=function(e){u({type:y.SUBMIT_ANSWER,payload:{id:e,answer:parseInt(o)}})};return Object(w.jsx)(E.a,{children:Object(w.jsx)(S.a,{className:Object(R.a)(n.cardRow,Object(s.a)({},n.inCorrect,!1===t.correct)),children:Object(w.jsxs)(b.a,{className:n.exercise,children:[Object(w.jsx)(T.a,{className:n.calculation,children:Object(w.jsxs)(C.a,{variant:"h3",children:[t.operators.join(" ")," ="]})}),Object(w.jsxs)(T.a,{className:Object(R.a)(n.answer),children:[Object(w.jsx)(j.a,{inputRef:function(e){return e&&0===r&&e.focus()},value:o,name:t.id,variant:"outlined",onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&l(e.target.value)},onKeyPress:function(e){return function(e,t){"Enter"===e.key&&d(t)}(e,t.id)},InputProps:{className:Object(R.a)(n.input,Object(s.a)({},(n.inCorrect,n.white),!1===t.correct)),classes:{focused:!1===t.correct?n.yellow:n.focused}}}),Object(w.jsx)(T.a,{children:Object(w.jsx)(N.a,{className:n.icon,onClick:function(){return d(t.id)}})})]})]})})},t.id)}r(107);function F(){var e=Object(h.c)((function(e){return{catalogue:e.catalogue}})).catalogue;return Object(w.jsx)("div",{children:e.exercises.filter((function(e){return!0!==e.correct})).map((function(e,t){return Object(w.jsx)(_,{exercise:e,index:t},e.id)}))})}var G=Object(l.a)({targetFailed:{backgroundColor:"#ef5350",color:"#fff",textShadow:"0 0.0625rem 0 rgb(0 0 0 / 15%)"}});var M,P=function(){var e=Object(h.c)((function(e){return{config:e.config,score:e.score,targetReached:void 0===e.targetReached||e.targetReached}})),t=e.config,r=e.score,n=e.targetReached,c=G(),a=Object(h.b)(),i=Object(f.a)({palette:{primary:{main:O.a[500]},secondary:{main:"#11cb5f"}}}),o=["High Digit","Number of Digit","Number of Exercise","Target (%)"],l=[{label:o[0],value:t.highDigit},{label:o[1],value:t.numberOfDigits},{label:o[2],value:t.numberOfExercises},{label:o[3],value:t.target}],g=function(e){return e===o[0]?100:e===o[1]?5:15};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(x.a,{theme:i,children:Object(w.jsxs)(u.a,{container:!0,spacing:1,children:[Object(w.jsxs)(u.a,{item:!0,xs:10,children:[Object(w.jsx)(b.a,{maxWidth:"xl",children:Object(w.jsx)(F,{})}),Object(w.jsx)(b.a,{maxWidth:"xl",style:{paddingTop:"10px"},children:Object(w.jsx)(E.a,{children:Object(w.jsx)(S.a,{children:Object(w.jsxs)(p.a,{cols:4,spacing:30,cellHeight:"auto",children:[l.map((function(e){return Object(w.jsx)(m.a,{cols:1,children:Object(w.jsx)(v.a,{children:Object(w.jsx)(j.a,{label:e.label,type:"number",InputLabelProps:{shrink:!0},variant:"filled",value:e.value,fullWidth:!0,inputProps:{step:1,min:(t=e.label,t===o[0]?0:t===o[1]?2:1),max:g(e.label)},onChange:function(t){return function(e,t){if(!function(e){return!e||0===e.length}(t)){var r=parseInt(t);a(e===o[0]?{type:y.UPDATE_CONFIG,payload:{highDigit:r}}:e===o[1]?{type:y.UPDATE_CONFIG,payload:{numberOfDigits:r}}:e===o[2]?{type:y.UPDATE_CONFIG,payload:{numberOfExercises:r}}:{type:y.UPDATE_CONFIG,payload:{target:r}})}}(e.label,t.currentTarget.value)}})})});var t})),Object(w.jsx)(m.a,{cols:1,children:Object(w.jsx)(v.a,{children:Object(w.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return a({type:y.START_GAME})},children:"GENERATE EXERCISE"})})})]})})})})]}),Object(w.jsx)(u.a,{item:!0,xs:2,children:Object(w.jsxs)("table",{children:[Object(w.jsxs)("tr",{className:Object(R.a)(Object(s.a)({},c.targetFailed,!1===n)),children:[Object(w.jsx)("td",{children:"Total Score:"}),Object(w.jsx)("td",{children:r})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Max Score:"}),Object(w.jsx)("td",{children:t.numberOfExercises})]})]})})]})})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,166)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))},k=r(62),U=r(77),L=r.n(U),B=r(22),H=r.n(B),K=r(12),X=r(28),J=r(160),z=r(164);!function(e){e.WALK="WALK",e.FIGHT="FIGHT",e.OPEN="OPEN"}(M||(M={}));var $=H.a.mark(ee),q={score:0,running:!1,config:{numberOfExercises:10,numberOfDigits:3,target:70,highDigit:10},catalogue:{exercises:[]}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.START_GAME:return Object(X.a)(Object(X.a)({},e),{},{score:0,running:!0,catalogue:V(e.config)});case y.UPDATE_CONFIG:return Object(X.a)(Object(X.a)({},e),{},{config:Object(X.a)(Object(X.a)({},e.config),t.payload)});case y.SUBMIT_ANSWER:var r=t.payload,n=r.id,c=r.answer,a=e.catalogue.exercises.filter((function(e){return e.id===n})).map((function(e){return Object.assign({},e,{correct:Y(e,c)})}))[0];if(a){var i={exercises:e.catalogue.exercises.map((function(e){return a.id===e.id?a:e}))},o=a.correct?e.score+1:e.score-1,s=i.exercises.filter((function(e){return!0!==e.correct})).length,l=0!==s||o/e.config.numberOfExercises*100>=e.config.target;return Object(X.a)(Object(X.a)({},e),{},{score:o,targetReached:l,running:!0,catalogue:i})}return e;default:return e}},V=function(e){var t=ee(e);return{exercises:Object(K.a)(Array(e.numberOfExercises)).map((function(e,r){return{id:Object(z.a)(),operators:t.next().value,category:M.WALK}}))}},Y=function(e,t){var r=Object(J.a)(e.operators.join(""));return r==t},Z=function e(t){return t.length<3||!(Object(J.a)(t.join(""))<=0)&&(Object(J.a)(t.slice(0,3).join(""))>=0&&e(t.slice(2)))};function ee(e){var t,r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.numberOfDigits+(e.numberOfDigits-1);case 1:if(r=Object(K.a)(Array(t)).map((function(t,r){return n=r,c=e.highDigit,n%2===0?Math.floor(Math.random()*c).toString():"+-*:".charAt(Math.floor(2*Math.random()));var n,c})),!Z(r)){n.next=6;break}return n.next=6,r;case 6:n.next=1;break;case 8:case"end":return n.stop()}}),$)}var te=r(79);o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(h.a,{store:Object(k.createStore)(Q,Object(te.composeWithDevTools)(Object(k.applyMiddleware)(L.a))),children:Object(w.jsx)(P,{})})}),document.getElementById("root")),W()},94:function(e,t,r){},95:function(e,t,r){}},[[118,1,2]]]);
//# sourceMappingURL=main.1aca594e.chunk.js.map