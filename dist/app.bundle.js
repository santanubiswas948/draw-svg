!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(3),d=(o=r)&&o.__esModule?o:{default:o};var u=document.getElementById("svg"),l={prevX:0,prevY:0,flag:0,flag1:0,total_polygon:0,draw:function(){u.addEventListener("mousedown",function(){u.addEventListener("mousemove",d.default)}),u.addEventListener("mouseup",function(){u.removeEventListener("mousemove",d.default),l.prevX=0,l.prevY=0})},download:function(){document.getElementById("svg").setAttribute("xmlns","http://www.w3.org/2000/svg");var e=document.getElementById("svg").outerHTML,t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(t),o=document.getElementById("link");o.href=n,o.download="san.svg"},clear:function(){document.getElementById("svg").children;for(var e=document.getElementById("svg");e.children.length>0;)e.removeChild(e.firstChild)}};l.draw(),document.getElementById("link").addEventListener("click",function(){l.download()}),document.getElementById("clear_image").addEventListener("click",function(){l.clear()}),t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPositionX=function(e){var t=0;do{isNaN(e.offsetLeft)||(t+=e.offsetLeft)}while(e=e.offsetParent);return t},t.getPositionY=function(e){var t=0;do{isNaN(e.offsetTop)||(t+=e.offsetTop)}while(e=e.offsetParent);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SvgPath=function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","path");for(var n in e)t.setAttributeNS(null,n,e[n]);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(2),d=n(1),u=n(0),l=(o=u)&&o.__esModule?o:{default:o};t.default=function(e){var t=document.getElementById("color_picker").value,n=document.getElementById("svg"),o=e.pageX-(0,d.getPositionX)(n)-(0,d.getPositionX)(document.getElementById("draw_div"))-1,u=e.pageY-(0,d.getPositionY)(n)-(0,d.getPositionY)(document.getElementById("draw_div"))-1;if(0==l.default.prevX)l.default.prevX=o,l.default.prevY=u,l.default.flag=1;else if(1==l.default.flag){var a=l.default.prevX,i=l.default.prevY,f=new r.SvgPath({d:"M"+a+","+i+" L"+o+","+u,fill:"none",stroke:t,"stroke-width":2.2,id:"path"+(n.children.length+1)});n.appendChild(f),l.default.flag=0,l.default.prevX=o,l.default.prevY=u}else{var c=document.getElementById("path"+document.getElementById("svg").children.length),s=c.getAttribute("d"),v=(l.default.prevX+o)/2,g=(l.default.prevY+u)/2;c.setAttribute("d",s+" C"+v+","+g+" "+v+","+g+" "+o+","+u),l.default.prevX=o,l.default.prevY=u}}}]);
//# sourceMappingURL=app.bundle.js.map