(function(e){function t(t){for(var o,s,u=t[0],a=t[1],c=t[2],l=0,d=[];l<u.length;l++)s=u[l],i[s]&&d.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/in-view/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("d3b7")},"5cb5":function(e,t,n){},d7fb:function(e,t,n){"use strict";var o=n("5cb5"),i=n.n(o);i.a},e3ca:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"class"},[n("h2",[e._v("In-View")]),n("p",[e._v("1")]),n("p",[e._v("2")]),n("p",[e._v("3")]),n("p",[e._v("4")]),n("p",[e._v("5")]),n("p",[e._v("6")]),n("p",[e._v("I fade in every time")]),n("p",[e._v("8")]),n("p",[e._v("9")]),n("p",[e._v("10")]),n("div",{staticClass:"grid"},[n("p",[e._v("We")]),n("p",[e._v("fade")]),n("p",[e._v("in")]),n("p",[e._v("once")]),n("p",[e._v("5")]),n("p",[e._v("6")]),n("p",[e._v("7")]),n("p",[e._v("8")]),n("p",[e._v("9")])])])}],r=(n("5ec2"),n("f18d"),n("d143"),n("fe27"),n("f4d2"),n("b953")),s=n("05f8"),u=n.n(s),a=(n("2075"),n("9048")),c=(n("0026"),n("f2ac"),n("2e52"),n("abd2"),n("0627"),n("070c")),p=n("7487"),l="above-view",d="in-view",f="below-view",v=[l,d,f],h=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c["a"])(this,e),this.opts=Object(r["a"])({el:null,els:null,selectors:[],delay:0,run:!0,onEnter:function(e){return t.setClass(e,d)},onLeaveTop:function(e){return t.setClass(e,l)},onLeaveBottom:function(e){return t.setClass(e,f)},once:!1},n),!this.opts.selectors.length&&n.selector&&(this.opts.selectors=[n.selector]),window.wivCount||(window.wivCount=0),this.id=window.wivCount++,this.localCount=0,this.status={},this.inViewOnce=[],this.run&&this.update()}return Object(p["a"])(e,[{key:"getNodes",value:function(){return this.opts.el?[this.opts.el]:this.els?this.opts.els:this.opts.selectors.map(function(e){return[].slice.call(document.querySelectorAll.bind(document)(e))}).reduce(function(e,t){return e.concat(t)},[])}},{key:"setClass",value:function(e,t){v.forEach(function(t){return e.classList.remove(t)}),e.classList.add(t)}},{key:"getNodeId",value:function(e){return e.getAttribute("data-wiv-id")}},{key:"update",value:function(){var e=this,t=this.getNodes(),n=[],o=[],i=[],r=[],s=[];t.forEach(function(t){var u=t?t.clientHeight:0,a=t?t.getBoundingClientRect():{},c=!1;e.getNodeId(t)||(t.setAttribute("data-wiv-id","".concat(e.id,":").concat(e.localCount++)),c=!0);var p=e.getNodeId(t);if(!e.opts.once||!e.inViewOnce.includes(p)){var v=e.status[p],h="".concat(v);h=u&&a.top+u<=0?l:a.top>=window.innerHeight?f:d,v!=h&&(n.push(t),v==l&&h==d?o.push(t):v==d&&h==l?r.push(t):v==f&&h==d?i.push(t):v==d&&h==f&&s.push(t),c&&(h==d?o.push(t):h==l?r.push(t):s.push(t)),h==d&&e.inViewOnce.push(p),e.status[p]=h)}});var u=o.concat(i);r.concat(s);this.opts.onEnter&&u.forEach(function(t,n){setTimeout(function(){return e.opts.onEnter(t)},n*e.opts.delay)}),this.opts.onLeaveTop&&r.forEach(function(t,n){setTimeout(function(){return e.opts.onLeaveTop(t)},n*e.opts.delay)}),this.opts.onLeaveBottom&&s.forEach(function(t,n){setTimeout(function(){return e.opts.onLeaveBottom(t)},n*e.opts.delay)})}}]),e}(),w={mounted:function(){window.addEventListener("scroll",this.updateInView),window.addEventListener("mousewheel",this.updateInView),window.addEventListener("resize",this.updateInView)},data:function(){return{inViewGroups:[]}},methods:{inView:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,o,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:{},n=i.length>1&&void 0!==i[1]?i[1]:0,"string"==typeof t?t={selectors:[t]}:u()(t)&&(t={selectors:t}),t=Object(r["a"])({delay:t.delay||n},t),o=new h(t),this.inViewGroups.push(o),!o.run){e.next=10;break}return e.next=9,this.$nextTick();case 9:o.update();case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateInView:function(){var e=this;window.requestAnimationFrame(function(){e.inViewGroups.forEach(function(e){return e.update()})})}},beforeDestroy:function(){window.removeEventListener("scroll",this.updateInView),window.removeEventListener("mousewheel",this.updateInView),window.removeEventListener("resize",this.updateInView)}},b={mixins:[w],mounted:function(){this.inView(".class > p:nth-of-type(7)"),this.inView({selector:".grid p",once:!0,delay:100})}},m=b,_=(n("d7fb"),n("f08f")),y=Object(_["a"])(m,o,i,!1,null,null,null);y.options.__file="App.vue";t["a"]=y.exports}});
//# sourceMappingURL=app.aceb8bfe.js.map