(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{422:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(425),r=Object(a.a)([function(e){return e.show.list}],(function(e){return e})),o=Object(a.a)([function(e){return e.show.kanban}],(function(e){return e}))},426:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z",fill:"#92929D"}))}},427:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(429),r=n(96),o=function(){return function(e){var t,n;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(a.a.get("tasks.json"));case 3:t=o.sent,n=t.data,e({type:r.c,payload:n}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.error("[Action: fetchTasks] - ".concat(o.t0));case 11:case"end":return o.stop()}}),null,null,[[0,8]])}},i=function(e,t){return{type:r.b,payload:{e:e,type:t}}},l=function(e){return{type:r.a,payload:e}}},429:function(e,t,n){"use strict";var a=n(436),r=n.n(a).a.create({baseURL:"https://square-dashboard-6ffae.firebaseio.com"});t.a=r},433:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(425),r=Object(a.a)([function(e){return e.tasks}],(function(e){return e})),o=function(e,t){return e.tasks.filter((function(e){return e.type===t}))}},434:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(75),i=n(48),l=n(421),c=n(76),d=n.n(c),p=n(427),u=function(){return r.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41155 7.00032L13.6886 12.2822C14.079 12.6729 14.0787 13.306 13.688 13.6964C13.2973 14.0867 12.6641 14.0864 12.2738 13.6957L6.99628 8.41348L1.70658 13.6953C1.31577 14.0856 0.682602 14.0851 0.292368 13.6943C-0.0978661 13.3035 -0.0973954 12.6703 0.293419 12.2801L5.58271 6.99863L0.29565 1.70679C-0.094698 1.31609 -0.0944116 0.682921 0.296289 0.292573C0.68699 -0.0977741 1.32016 -0.0974878 1.7105 0.293213L6.99797 5.58547L12.2739 0.317343C12.6648 -0.0728905 13.2979 -0.0724199 13.6881 0.318395C14.0784 0.709209 14.0779 1.34237 13.6871 1.73261L8.41155 7.00032Z"}))},s=function(){return r.a.createElement("svg",{width:"15",height:"14",viewBox:"0 0 18 17",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2ZM17 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12ZM11 17H1C0.447715 17 0 16.5523 0 16C0 15.4477 0.447715 15 1 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17Z"}))},f="#92929d",m="#fc5a5a",g="#ffffff",h=i.default.section.withConfig({displayName:"TaskModal__Wrapper",componentId:"sc-10ab0nb-0"})(["position:absolute;top:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:rgba(23,23,37,0.4);z-index:100;"]),b=i.default.div.withConfig({displayName:"TaskModal__Modal",componentId:"sc-10ab0nb-1"})(["display:flex;flex-direction:column;min-width:300px;width:30%;min-height:30vh;background-color:",";border-radius:20px;padding:20px 25px;"],g),x=i.default.div.withConfig({displayName:"TaskModal__Header",componentId:"sc-10ab0nb-2"})(["display:flex;justify-content:space-between;align-items:center;color:",";font-size:14px;height:50px;border-bottom:1px solid #e2e2ea;"],f),w=i.default.button.withConfig({displayName:"TaskModal__Button",componentId:"sc-10ab0nb-3"})(["background-color:",";border:none;outline:none;cursor:pointer;svg{fill:",";:hover{fill:#0062ff;}}"],g,f),y=i.default.div.withConfig({displayName:"TaskModal__Title",componentId:"sc-10ab0nb-4"})(["color:#171725;font-size:24px;margin:30px 0;"]),C=i.default.div.withConfig({displayName:"TaskModal__Description",componentId:"sc-10ab0nb-5"})(["display:flex;svg{fill:",";}"],f),v=i.default.div.withConfig({displayName:"TaskModal__ShapeWrapper",componentId:"sc-10ab0nb-6"})(["width:20px;"]),k=i.default.div.withConfig({displayName:"TaskModal__HeaderD",componentId:"sc-10ab0nb-7"})(["display:flex;flex-direction:column;margin-bottom:10px;"]),E=i.default.span.withConfig({displayName:"TaskModal__TitleD",componentId:"sc-10ab0nb-8"})(["font-size:14px;letter-spacing:0.1px;color:#171725;margin:0 0 10px 10px;"]),_=i.default.span.withConfig({displayName:"TaskModal__TextD",componentId:"sc-10ab0nb-9"})(["margin-left:10px;color:",";font-size:14px;"],f),T=i.default.button.withConfig({displayName:"TaskModal__Delete",componentId:"sc-10ab0nb-10"})(["display:flex;justify-content:center;align-items:center;margin-top:30px;background-color:",";outline:none;cursor:pointer;color:",";height:38px;border-radius:20px;border:1px solid ",";:hover{color:",";background-color:",";}"],m,g,m,m,g),j={deleteTask:p.a},I=Object(o.b)(null,j)((function(e){var t=e.type,n=e.title,a=e.onClose,o=e.id,i=document.getElementById("modal");return d.a.createPortal(r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(x,null,r.a.createElement("span",null,t),r.a.createElement(w,{onClick:a},r.a.createElement(u,null))),r.a.createElement(y,null,r.a.createElement("span",null,n)),r.a.createElement(C,null,r.a.createElement(v,null,r.a.createElement(s,null)),r.a.createElement(k,null,r.a.createElement(E,null,"Description"),r.a.createElement(_,null,n,". Next Friday should be done. Next Monday we should deliver the first iteration. Make sure, we have a good result to be delivered by the day."))),r.a.createElement(T,{onClick:function(){return function(t){e.deleteTask(t)}(o)}},"Delete"))),i)})),O=n(422),N=n(431),S=function(){return r.a.createElement("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.95615 10.0438C4.28134 10.369 4.80841 10.3693 5.13391 10.0446L5.13413 10.0444L5.13467 10.0438L8.9059 6.27261L10.3201 4.8584C11.1663 4.01226 11.1663 2.64041 10.3201 1.79427C9.47398 0.948134 8.10212 0.948134 7.25599 1.79427L2.07054 6.97972C2.07028 6.97998 2.07002 6.98024 2.06976 6.98049C0.703701 8.34739 0.70396 10.5629 2.07054 11.9295C3.43737 13.2963 5.65345 13.2963 7.02028 11.9295L11.2629 7.68683C11.4582 7.49156 11.7748 7.49156 11.97 7.68683C12.1653 7.88209 12.1653 8.19867 11.97 8.39393L7.72739 12.6366C5.97003 14.3939 3.12079 14.3939 1.36343 12.6366C-0.382329 10.8908 -0.393853 8.06754 1.32886 6.30756L1.32867 6.30737L1.36343 6.27261L6.54888 1.08716C7.78554 -0.149497 9.79056 -0.149497 11.0272 1.08716C12.2639 2.32382 12.2639 4.32885 11.0272 5.56551L9.61301 6.97972L5.84177 10.751L5.80702 10.7857L5.80656 10.7853C5.08824 11.4667 3.95339 11.4553 3.24905 10.751C2.53309 10.035 2.53309 8.87419 3.24905 8.15823L8.4345 2.97278C8.62976 2.77752 8.94634 2.77752 9.1416 2.97278C9.33687 3.16804 9.33687 3.48463 9.1416 3.67989L3.95615 8.86534C3.63072 9.19077 3.63072 9.71841 3.95615 10.0438Z",fill:"#92929D"}))},M=n(432);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=i.default.div.withConfig({displayName:"Task__Wrapper",componentId:"fevp8m-0"})(["display:flex;justify-content:",";flex-direction:",";cursor:move;border-radius:20px;padding:15px;margin:0 5px 10px 5px;background:",";border:",";opacity:",";"],(function(e){return!e.option&&"space-around"}),(function(e){return e.option?"column":"row"}),(function(e){return e.drag?"repeating-linear-gradient(\n    45deg,\n    white,\n    white 5px,\n    #f1f1f5 5px,\n    #f1f1f5 10px\n  )":"white"}),(function(e){return e.drag?"1px dashed #92929d":"1px dashed white"}),(function(e){return e.drag?"0.999":"1"})),A=i.default.div.withConfig({displayName:"Task__TextStyles",componentId:"fevp8m-1"})(["font-size:14px;letter-spacing:0.1px;color:#92929d;"]),z=i.default.div.withConfig({displayName:"Task__Titles",componentId:"fevp8m-2"})(["display:flex;flex-direction:column;"]),R=Object(i.default)(A).withConfig({displayName:"Task__Title",componentId:"fevp8m-3"})(["color:#171725;margin-bottom:7px;text-decoration:",";"],(function(e){return 0===e.data.score.days&&"line-through"})),W=Object(i.default)(A).withConfig({displayName:"Task__Team",componentId:"fevp8m-4"})(["color:#696974;"]),Z=Object(i.default)(A).withConfig({displayName:"Task__Attach",componentId:"fevp8m-5"})(["display:flex;align-items:center;svg{margin-right:5px;}"]),B=Object(i.default)(A).withConfig({displayName:"Task__Status",componentId:"fevp8m-6"})(["margin:0 15px 0 20px;display:flex;align-items:center;svg{margin-right:5px;fill:#92929d;width:14px;height:14px;}"]),P=Object(i.default)(B).withConfig({displayName:"Task__Activity",componentId:"fevp8m-7"})(["background-color:",";color:",";padding:5px;border-radius:5px;margin:0;span:last-child{margin-left:5px;}svg{fill:",";}"],(function(e){return e.data.score.colors.bg}),(function(e){return e.data.score.colors.text}),(function(e){return e.data.score.colors.text})),F=i.default.div.withConfig({displayName:"Task__Info",componentId:"fevp8m-8"})(["display:flex;margin:15px 0 10px 0;"]),U=i.default.div.withConfig({displayName:"Task__Score",componentId:"fevp8m-9"})(["display:flex;flex-direction:",";align-items:",";"],(function(e){return e.option?"column":"row-reverse"}),(function(e){return!e.option&&"center"})),J=i.default.div.withConfig({displayName:"Task__ScoreLine",componentId:"fevp8m-10"})(["background-color:#e2e2ea;width:100%;height:3px;border-radius:2.5px;min-width:",";div{height:3px;background-color:#3dd598;width:",""],(function(e){return!e.option&&"150px"}),(function(e){return"".concat(e.data.line,"%")})),q=Object(i.default)(W).withConfig({displayName:"Task__ScoreLineTitle",componentId:"fevp8m-11"})(["display:flex;justify-content:flex-end;width:100%;margin-left:",";"],(function(e){return!e.option&&"10px"})),G=i.default.div.withConfig({displayName:"Task__Users",componentId:"fevp8m-12"})(["display:grid;grid-template-columns:repeat(6,1fr);grid-gap:10px;margin:10px 0 0 0;"]);t.a=Object(o.b)((function(e){return{option:Object(O.a)(e)}}))((function(e){var t=e.data,n=D(r.a.useState(!1),2),a=n[0],o=n[1],i=D(r.a.useState(!1),2),c=i[0],d=i[1],p=function(){o((function(e){return!e}))},u=t.users.map((function(e,t){return r.a.createElement(l.a,L({key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,L({},e,{draggable:!0,onDragStart:function(e){d((function(e){return!e})),e.dataTransfer.setData("text/html",t.id)},onClick:p,drag:c}),r.a.createElement(z,null,r.a.createElement(R,e,t.title),r.a.createElement(W,null,t.team)),r.a.createElement(F,null,r.a.createElement(Z,null,r.a.createElement(S,null),t.attach),r.a.createElement(B,null,r.a.createElement(N.a,null),t.status),t.score.days>0&&r.a.createElement(P,e,r.a.createElement(M.a,null),r.a.createElement("span",null,t.score.days),r.a.createElement("span",null,"days left"))),r.a.createElement(U,e,r.a.createElement(q,e,t.line,"%"),r.a.createElement(J,e,r.a.createElement("div",null))),r.a.createElement(G,null,u)),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(I,L({},t,{onClose:p}))))}))},462:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(75),i=n(48),l=n(130),c=n(427),d=n(433),p=n(434),u=n(422),s=n(426);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g="#0062ff",h="#e2e2ea",b=16,x=i.default.div.withConfig({displayName:"TaskWrapper__Wrapper",componentId:"sc-8ecske-0"})(["width:",";"],(function(e){return e.option?"280px":"auto"})),w=i.default.div.withConfig({displayName:"TaskWrapper__Header",componentId:"sc-8ecske-1"})(["border-radius:15px 15px 0 0;border-top:1px solid ",";border-left:1px solid ",";border-right:1px solid ",";display:flex;justify-content:space-between;"],h,h,h),y=i.default.span.withConfig({displayName:"TaskWrapper__Title",componentId:"sc-8ecske-2"})(["font-size:16px;letter-spacing:0.1px;color:#696974;padding:15px 20px;"]),C=i.default.div.withConfig({displayName:"TaskWrapper__More",componentId:"sc-8ecske-3"})(["padding:0 20px;display:flex;align-items:center;cursor:not-allowed;@media (max-width:450px){display:none;}"]),v=Object(i.default)("div").withConfig({displayName:"TaskWrapper__TasksWrapper",componentId:"sc-8ecske-4"})(["height:auto;border-left:1px solid ",";border-right:1px solid ",";padding:20px 0;background:",";"],h,h,(function(e){return e.dragOver?"repeating-linear-gradient(\n    45deg,\n    white,\n    white 5px,\n    #E3ECFB 5px,\n    #E3ECFB 10px\n  )":"none"})),k=i.default.div.withConfig({displayName:"TaskWrapper__Cross",componentId:"sc-8ecske-5"})(["position:absolute;left:50%;top:25%;width:","px;height:","px;:before,:after{position:absolute;left:0;content:'';height:","px;width:2px;background-color:#92929d;}:before{transform:rotate(90deg);}:after{transform:rotate(180deg);}"],b,b,b),E=i.default.button.withConfig({displayName:"TaskWrapper__Button",componentId:"sc-8ecske-6"})(["height:35px;width:100%;border-radius:0 0 15px 15px;outline:none;border:1px solid ",";position:relative;cursor:not-allowed;background-color:white;:hover{border:1px dashed ",";}:hover ",":before{background-color:",";}:hover ",":after{background-color:",";}"],h,g,k,g,k,g),_=function(e){return e.data.map((function(e){return r.a.createElement(p.a,{data:e,key:e.id})}))},T=Object(o.b)((function(e){return{option:Object(u.a)(e)}}),{dragAndDrop:c.b})((function(e){var t=e.type,n=m(r.a.useState(!1),2),a=n[0],o=n[1];return r.a.createElement(x,f({onDrop:function(n){e.dragAndDrop(n,t),o(!1)},onDragOver:function(e){e.preventDefault()},onDragEnter:function(){o((function(e){return!e}))},onDragLeave:function(){o((function(e){return!e}))}},e),r.a.createElement(w,null,r.a.createElement(y,null,t),r.a.createElement(C,null,r.a.createElement(s.a,null))),r.a.createElement(v,{dragOver:a},r.a.createElement(_,e)),r.a.createElement(E,null,r.a.createElement(k,null)))})),j=n(124),I="#3dd598",O=i.default.span.withConfig({displayName:"Checkbox__CheckboxCustom",componentId:"sc-1vf7zbf-0"})(["position:absolute;top:0;left:0;height:14px;width:14px;background-color:transparent;border-radius:5px;border:2px solid #b5b5be;::after{position:absolute;content:'';left:2px;top:2px;height:0;width:0;border-radius:5px;border:solid white;border-width:0 3px 3px 0;opacity:1;}"]),N=i.default.label.withConfig({displayName:"Checkbox__CheckboxLabel",componentId:"sc-1vf7zbf-1"})(["display:flex;position:relative;cursor:pointer;font-size:14px;letter-spacing:0.1px;color:#696974;margin:15px 0 0 10px;input{position:absolute;opacity:0;cursor:pointer;}input:checked ~ ","{background-color:",";border-radius:5px;opacity:1;border:2px solid ",";}input:checked ~ ","::after{transform:rotate(45deg) scale(1);opacity:1;left:5px;top:2px;width:3px;height:6px;border:solid white;border-width:0 2px 2px 0;background-color:transparent;border-radius:0;}"],O,I,I,O),S=i.default.span.withConfig({displayName:"Checkbox__Text",componentId:"sc-1vf7zbf-2"})(["margin:0 0 0 30px;"]),M=function(e){var t=e.name,n=e.value,a=e.checked,o=e.handleCheckbox;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement("input",{type:"checkbox",value:n,name:t,onChange:o,checked:a}),r.a.createElement(S,null,n),r.a.createElement(O,null)))};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=i.default.div.withConfig({displayName:"ContentTitleSelector__Sort",componentId:"sc-1fe769e-0"})(["display:flex;justify-content:space-between;position:relative;width:200px;height:38px;box-shadow:0 0 7px rgba(41,41,50,0.1);border-radius:8px;background-color:white;cursor:pointer;"]),z=i.default.div.withConfig({displayName:"ContentTitleSelector__Select",componentId:"sc-1fe769e-1"})(["position:absolute;width:199px;height:110px;left:0;top:39px;background:white;border:1px solid #f1f1f5;box-shadow:0 5px 15px rgba(68,68,79,0.1);border-radius:8px;display:flex;flex-direction:column;z-index:1;"]),R=i.default.div.withConfig({displayName:"ContentTitleSelector__ArrowWrapper",componentId:"sc-1fe769e-2"})(["height:100%;width:30px;border-left:1px solid #f1f1f5;display:flex;align-items:center;justify-content:center;"]),W=i.default.div.withConfig({displayName:"ContentTitleSelector__Arrow",componentId:"sc-1fe769e-3"})(["height:0;width:0;border:solid #92929d;border-width:0 2px 2px 0;display:flex;padding:3px;"]),Z=Object(i.default)(W).withConfig({displayName:"ContentTitleSelector__ArrowDown",componentId:"sc-1fe769e-4"})(["transform:rotate(45deg);"]),B=Object(i.default)(W).withConfig({displayName:"ContentTitleSelector__ArrowUp",componentId:"sc-1fe769e-5"})(["transform:rotate(135deg);"]),P=i.default.div.withConfig({displayName:"ContentTitleSelector__ShowWrapper",componentId:"sc-1fe769e-6"})(["display:flex;align-items:center;padding:0 0 0 20px;"]),F=i.default.span.withConfig({displayName:"ContentTitleSelector__Show",componentId:"sc-1fe769e-7"})(["font-size:14px;letter-spacing:0.5px;color:#696974;"]),U=i.default.span.withConfig({displayName:"ContentTitleSelector__What",componentId:"sc-1fe769e-8"})(["font-size:14px;letter-spacing:0.1px;color:#44444f;margin-left:10px;"]),J={showMore:function(e){return{type:j.a,payload:e}}},q=Object(o.b)((function(e){return{showState:Object(u.b)(e)}}),J)((function(e){var t=e.showState,n=e.showMore,a=H(r.a.useState(!1),2),o=a[0],i=a[1],l=H(r.a.useState(["All tasks"]),2),c=l[0],d=l[1],p=function(){i((function(e){return!e}))},u=function(e){var a=e.target.name;d([e.target.value]),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,D({},a,!t[a])))};return r.a.createElement(A,{onClick:function(e){e.target===e.currentTarget&&i((function(e){return!e}))}},r.a.createElement(P,{onClick:p},r.a.createElement(F,null,"Show:"),r.a.createElement(U,null,c[c.length-1])),r.a.createElement(R,{onClick:p},o?r.a.createElement(Z,null):r.a.createElement(B,null)),o&&r.a.createElement(z,null,r.a.createElement(M,{handleCheckbox:u,value:"Backlog",name:"backlog",checked:t.backlog}),r.a.createElement(M,{handleCheckbox:u,value:"In progress",name:"progress",checked:t.progress}),r.a.createElement(M,{handleCheckbox:u,value:"Complete",name:"complete",checked:t.complete})))})),G=function(){return r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H6C5.44772 0 5 0.447715 5 1C5 1.55228 5.44772 2 6 2ZM5 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H5C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16ZM12 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9Z"}))},K=function(){return r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 11L2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1L0 11C0 11.5523 0.447715 12 1 12C1.55228 12 2 11.5523 2 11ZM16 8V1C16 0.447715 15.5523 0 15 0C14.4477 0 14 0.447715 14 1L14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8ZM9 1L9 15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15L7 1C7 0.447715 7.44772 0 8 0C8.55229 0 9 0.447715 9 1Z"}))},V=function(){return r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 2H15C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM1 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H1C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16ZM15 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9Z"}))};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=i.default.div.withConfig({displayName:"ContentTitleSwitcher__Wrapper",componentId:"i4zoff-0"})(["display:flex;margin-left:20px;@media (max-width:450px){display:none;}"]),Y=i.default.div.withConfig({displayName:"ContentTitleSwitcher__Icon",componentId:"i4zoff-1"})(["width:38px;height:38px;display:flex;justify-content:center;align-items:center;background-color:#fff;cursor:pointer;svg{fill:#b5b5be;}"]),$=Object(i.default)(Y).withConfig({displayName:"ContentTitleSwitcher__Kanban",componentId:"i4zoff-2"})(["border-radius:10px 0 0 10px;background-color:",";svg{fill:",";}"],(function(e){return e.type?"#b5b5be":"#fff"}),(function(e){return e.type?"#fff":"#b5b5be"})),ee=Object(i.default)(Y).withConfig({displayName:"ContentTitleSwitcher__Default",componentId:"i4zoff-3"})(["border-right:1px solid #f1f1f5;border-left:1px solid #f1f1f5;background-color:",";svg{fill:",";}"],(function(e){return e.type?"#b5b5be":"#fff"}),(function(e){return e.type?"#fff":"#b5b5be"})),te=Object(i.default)(Y).withConfig({displayName:"ContentTitleSwitcher__Gantt",componentId:"i4zoff-4"})(["border-radius:0 10px 10px 0;cursor:not-allowed;"]),ne={switcher:function(e){return{type:j.b,payload:e}}},ae=Object(o.b)(null,ne)((function(e){var t=e.switcher,n=Q(r.a.useState(!0),2),a=n[0],o=n[1],i=Q(r.a.useState(!1),2),l=i[0],c=i[1];return r.a.createElement(X,null,r.a.createElement($,{type:a?1:0,onClick:function(){t(!0),o(!0),c(!1)}},r.a.createElement(K,null)),r.a.createElement(ee,{type:l?1:0,onClick:function(){t(!1),c(!0),o(!1)}},r.a.createElement(V,null)),r.a.createElement(te,null,r.a.createElement(G,null)))})),re=i.default.div.withConfig({displayName:"ContentTitle__Wrapper",componentId:"sc-5ln6ss-0"})(["display:flex;align-items:center;justify-content:space-between;@media (max-width:450px){justify-content:center;}"]),oe=i.default.div.withConfig({displayName:"ContentTitle__Title",componentId:"sc-5ln6ss-1"})(["@media (max-width:1050px){display:none;}"]),ie=i.default.span.withConfig({displayName:"ContentTitle__Username",componentId:"sc-5ln6ss-2"})(["font-size:24px;text-align:center;letter-spacing:0.1px;color:#171725;@media (max-width:450px){display:none;}"]),le=i.default.span.withConfig({displayName:"ContentTitle__Text",componentId:"sc-5ln6ss-3"})(["font-size:18px;letter-spacing:0.1px;color:#92929d;margin-left:10px;font-family:'Roboto',sans-serif;"]),ce=i.default.div.withConfig({displayName:"ContentTitle__Controls",componentId:"sc-5ln6ss-4"})(["display:flex;margin-right:20px;"]),de=function(){return r.a.createElement(re,null,r.a.createElement(oe,null,r.a.createElement(ie,null,"Hi James,"),r.a.createElement(le,null,"here’s your currently tasks")),r.a.createElement(ce,null,r.a.createElement(q,null),r.a.createElement(ae,null)))},pe=i.default.div.withConfig({displayName:"Content__Wrapper",componentId:"sc-15lt75f-0"})(["display:flex;flex-direction:column;width:100%;min-width:250px;background-color:#fafafa;padding:40px;@media (max-width:450px){padding:10px;}"]),ue=i.default.div.withConfig({displayName:"Content__Tasks",componentId:"sc-15lt75f-1"})(["margin-top:35px;display:grid;grid-template-columns:",";grid-template-rows:",";grid-column-gap:20px;grid-row-gap:20px;"],(function(e){return e.option?"repeat(auto-fill, minmax(280px, 1fr))":"none"}),(function(e){return e.option?"none":"repeat(4, auto)"})),se="Backlog",fe="In Progress",me="Complete",ge={fetchTasks:c.c};t.default=Object(o.b)((function(e){return{tasks:Object(d.b)(e),option:Object(u.a)(e),showState:Object(u.b)(e),backlog:Object(d.a)(e,se),progress:Object(d.a)(e,fe),complete:Object(d.a)(e,me)}}),ge)((function(e){var t=e.tasks,n=e.showState,a=e.backlog,o=e.progress,i=e.complete;return r.a.useEffect((function(){!t.length&&e.fetchTasks()}),[]),r.a.createElement(pe,null,r.a.createElement(de,null),t.length?r.a.createElement(ue,e,n.backlog&&r.a.createElement(T,{data:a,type:"Backlog"}),n.progress&&r.a.createElement(T,{data:o,type:"In Progress"}),n.complete&&r.a.createElement(T,{data:i,type:"Complete"}),r.a.createElement(T,{data:[],type:"New"})):r.a.createElement(l.a,null))}))}}]);