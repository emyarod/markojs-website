!function(){function r(r,n){var t=new Error('Cannot find module "'+r+'"'+(n?' from "'+n+'"':""));return t.code="MODULE_NOT_FOUND",t}function n(r){this.id=this.filename=r,this.loaded=!1,this.exports=void 0}function t(r,n,t){var i=t&&t.globals;if(O[r]=n,i)for(var e=b||global,o=0;o<i.length;o++){var a=i[o],u=E[r]=d(r);e[a]=u.exports}}function i(r,n){$[r]=n}function e(r,n){j[r]=n}function o(r,n){M[r]=n}function a(r,n,t){I[r+"/"+n]=t}function u(r){var n,t=0,i=r.length;for(n=0;n<i;n++){var e=r[n];"."===e||(".."===e?t--:(r[t]=e,t++))}return 1===t?"/":(t>2&&0===r[t-1].length&&t--,r.length=t,r.join("/"))}function f(r,n){var t=n.split("/"),i="/"==r?[""]:r.split("/");return u(i.concat(t))}function s(r){var n,t=r.lastIndexOf(".");return t===-1||(n=r.lastIndexOf("/"))!==-1&&n>t?null:r.substring(0,t)}function v(r){r=r.substring(1);var n=r.indexOf("/");"@"===r.charAt(1)&&(n=r.indexOf("/",n+1));var t=n===-1?r.length:n;return[r.substring(0,t),r.substring(t)]}function l(r,n){"/"===r.charAt(r.length-1)&&(r=r.slice(0,-1));var t=M[r];if(t)return t;var i,e,o=v(n),a=o[0],u=r.indexOf("/");u<0?(i=r,e=""):("@"===r.charAt(0)&&(u=r.indexOf("/",u+1)),i=r.substring(0,u),e=r.substring(u));var f=I[a+"/"+i];if(f){var s="/"+i+"$"+f;return e&&(s+=e),s}}function c(r,n){var t;if("."===r.charAt(0))t=f(n,r);else if("/"===r.charAt(0))t=u(r.split("/"));else{for(var i=m.length,e=0;e<i;e++){var o=m[e]+r,a=c(o,n);if(a)return a}t=l(r,n)}if(t){var v;void 0!==(v=$[t])&&(v||(v="index"),t=f(t,v));var d=j[t];d&&(t=d);var h=O[t];if(void 0===h){var g;if(null===(g=s(t))||void 0===(h=O[g]))return;t=g}return[t,h]}}function d(t,i){if(!t)throw r("");var e=c(t,i);if(!e)throw r(t,i);var o=e[0],a=y[o];if(void 0!==a)return a;if(E.hasOwnProperty(o))return E[o];var u=e[1];return a=new n(o),y[o]=a,a.load(u),a}function h(r,n){var t=d(r,n);return t.exports}function g(r,n){var t=!n||n.wait!==!1;return t&&!_?A.push([r,n]):void h(r,"/")}function p(){_=!0;for(var r;r=A.length;){var n=A;A=[];for(var t=0;t<r;t++){var i=n[t];g(i[0],i[1])}if(!_)break}}function x(r){m.push(r)}var b;if("undefined"!=typeof window){if(b=window,b.$_mod)return;b.global=b}var w,O={},m=[],_=!1,A=[],y={},I={},M={},$={},j={},D={},E={};n.cache=y;var F=n.prototype;F.load=function(n){var t=this.id;if(n&&n.constructor===Function){var i=t.lastIndexOf("/"),e=t.substring(0,i),o=D[e]||(D[e]={}),a=function(r){var n=o[r]||(o[r]=d(r,e));return n.exports};a.resolve=function(n){if(!n)throw r("");var t=c(n,e);if(!t)throw r(n,e);return t[0]},a.cache=y,a.runtime=w,this.exports={},n.call(this,a,this.exports,this,t,e)}else this.exports=n;this.loaded=!0};var N=0,P=function(){N--,N||p()};F.__runtime=w={def:t,installed:a,run:g,main:i,remap:e,builtin:o,require:h,resolve:c,join:f,ready:p,searchPath:x,loaderMetadata:function(r){F.__loaderMetadata=r},pending:function(){return _=!1,N++,{done:P}}},b?b.$_mod=w:module.exports=w}();
$_mod.def("/markojs-website$1.0.0/routes/docs/components/version-switcher/component-browser", function(require, exports, module, __filename, __dirname) { module.exports = {
    switchVersion(e) {
        var location = e.target.value;
        if (location) {
            window.location.href = location;
        }
    }
}
});
$_mod.remap("/marko$4.0.0-rc.22/components/index","/marko$4.0.0-rc.22/components/index-browser");
$_mod.remap("/marko$4.0.0-rc.22/components/init-components","/marko$4.0.0-rc.22/components/init-components-browser");
$_mod.installed("marko$4.0.0-rc.22","warp10","1.3.3");
$_mod.def("/warp10$1.3.3/src/finalize",function(r,n,e,t,a){function f(r,n,e){for(var t=r,a=0;a<e;a++)t=t[n[a]];return t}function i(r){if("Date"===r.type)return new Date(r.value);throw new Error("Bad type")}var o=Array.isArray;e.exports=function(r){if(!r)return r;var n=r.$$;if(n){var e,t=r.o;if(n&&(e=n.length))for(var a=0;a<e;a++){var u,l=n[a],v=l.r;u=o(v)?f(t,v,v.length):i(v);var c=l.l,h=c.length-1;if(h===-1){t=r.o=u;break}var g=f(t,c,h);g[c[h]]=u}return n.length=0,null==t?null:t}return r}});
$_mod.def("/warp10$1.3.3/finalize",function(i,a,e,f,n){e.exports=i("/warp10$1.3.3/src/finalize")});
$_mod.remap("/marko$4.0.0-rc.22/components/util","/marko$4.0.0-rc.22/components/util-browser");
$_mod.def("/marko$4.0.0-rc.22/components/util-browser",function(o,t,n,e,r){function _(o,t){if(o){var n="string"==typeof o?(t||$).getElementById(o):o;if(n){for(var e=n._w;e;){var r=e.$__rootFor;if(!r)break;e=r}return e}}}function i(o,t,n,e){var r=o[m[t]];r&&r.call(o,n,e),o.emit(t,n,e)}function u(o){var t=o._w;if(t)for(t.$__destroyShallow(),o._w=null;t=t.$__rootFor;)t.$__rootFor=null,t.$__destroyShallow()}function f(o){for(var t=o.firstChild;t;)1==t.nodeType&&(u(t),f(t)),t=t.nextSibling}function c(){return"wc"+s++}function l(o,t){return o.getElementById(t)}function a(o,t,n){if(t)return n?[t,o.id,n]:[t,o.id]}var d={},$=document,m={};["create","render","update","mount","destroy"].forEach(function(o){m[o]="on"+o[0].toUpperCase()+o.substring(1)});var s=0;t.$__componentLookup=d,t.$__getComponentForEl=_,t.$__emitLifecycleEvent=i,t.$__destroyComponentForEl=u,t.$__destroyElRecursive=f,t.$__nextComponentId=c,t.$__getElementById=l,t.$__attachBubblingEvent=a});
$_mod.def("/marko$4.0.0-rc.22/components/bubble",function(e,t,c,d,o){c.exports=["click","dblclick","mousedown","mouseup","dragstart","drag","drop","dragend","keydown","keypress","keyup","select","change","submit","reset","input","attach","detach"]});
$_mod.def("/marko$4.0.0-rc.22/components/event-delegation",function(t,n,o,r,e){function a(t,n){var o=t._vattrs;if(o)return t._vattrs[n];var r=t.getAttribute(n);if(r){var e=r.split(" ");return 3==e.length&&(e[2]=parseInt(e[2],10)),e}}function i(t,n,o){var r=n[0],e=n[1],a=n[2],i=f[e];if(i){var c=i[r];if(!c)throw Error("Method not found: "+r);null!=a&&"number"==typeof a&&(a=i.$__bubblingDomEvents[a],_(a)||(a=[a])),a?c.apply(i,a.concat(o,t)):c.call(i,o,t)}}function c(n){var o=n.body;t("/marko$4.0.0-rc.22/components/bubble").forEach(function(t){o.addEventListener(t,function(n){var o=!1,r=n.stopPropagation;n.stopPropagation=function(){r.call(n),o=!0};var e=n.target;if(e){var c,u="data-_on"+t;do if((c=a(e,u))&&(i(e,c,n),o))break;while((e=e.parentNode)&&e.getAttribute)}})})}function u(){}var f=t("/marko$4.0.0-rc.22/components/util-browser").$__componentLookup,_=Array.isArray,l="$MED";n.$__handleNodeAttach=u,n.$__handleNodeDetach=u,n.$__delegateEvent=i,n.$__getEventAttribute=a,n.$__init=function(t){t[l]||(t[l]=!0,c(t))}});
$_mod.installed("marko$4.0.0-rc.22","events-light","1.0.5");
$_mod.main("/events-light$1.0.5","src/index");
$_mod.def("/events-light$1.0.5/src/index",function(e,t,r,n,i){function o(e){return"function"==typeof e}function s(e){if(!o(e))throw TypeError("Invalid listener")}function l(e,t,r){switch(r.length){case 1:t.call(e);break;case 2:t.call(e,r[1]);break;case 3:t.call(e,r[1],r[2]);break;default:t.apply(e,u.call(r,1))}}function c(e,t,r,n){s(r);var i=e.$e||(e.$e={}),l=i[t];return l?o(l)?i[t]=n?[r,l]:[l,r]:n?l.unshift(r):l.push(r):i[t]=r,e}function f(){this.$e=this.$e||{}}var u=Array.prototype.slice;f.EventEmitter=f,f.prototype={$e:null,emit:function(e){var t=arguments,r=this.$e;if(r){var n=r&&r[e];if(!n){if("error"===e){var i=t[1];if(!(i instanceof Error)){var s=i;i=new Error("Error: "+s),i.context=s}throw i}return!1}if(o(n))l(this,n,t);else{n=u.call(n);for(var c=0,f=n.length;c<f;c++){var a=n[c];l(this,a,t)}}return!0}},on:function(e,t){return c(this,e,t,!1)},prependListener:function(e,t){return c(this,e,t,!0)},once:function(e,t){function r(){this.removeListener(e,r),t&&(t.apply(this,arguments),t=null)}return s(t),this.on(e,r),this},removeListener:function(e,t){s(t);var r,n=this.$e;if(n&&(r=n[e]))if(o(r))r===t&&delete n[e];else for(var i=r.length-1;i>=0;i--)r[i]===t&&r.splice(i,1);return this},removeAllListeners:function(e){var t=this.$e;t&&delete t[e]},listenerCount:function(e){var t=this.$e,r=t&&t[e];return r?o(r)?1:r.length:0}},r.exports=f});
$_mod.def("/marko$4.0.0-rc.22/runtime/events",function(e,n,r,t,i){var o=e("/events-light$1.0.5/src/index");r.exports=new o});
$_mod.def("/marko$4.0.0-rc.22/components/nextRepeatedId",function(e,n,o,r,l){var t="$rep";o.exports=function(e,n,o){var r=e.global[t]||(e.global[t]={}),l=n+"-"+o,a=r[l];return a=null==a?r[l]=0:++r[l],l.slice(0,-2)+"["+a+"]"}});
$_mod.installed("marko$4.0.0-rc.22","raptor-util","3.1.0");
$_mod.def("/raptor-util$3.1.0/extend",function(r,n,t,o,e){t.exports=function(r,n){if(r||(r={}),n)for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r}});
$_mod.remap("/marko$4.0.0-rc.22/components/registry","/marko$4.0.0-rc.22/components/registry-browser");
$_mod.remap("/marko$4.0.0-rc.22/components/loadComponent","/marko$4.0.0-rc.22/components/loadComponent-dynamic");
$_mod.def("/marko$4.0.0-rc.22/components/loadComponent-dynamic",function(n,o,t,c,e){"use strict";t.exports=function(o){return n(o)}});
$_mod.def("/marko$4.0.0-rc.22/components/State",function(t,_,i,e,n){function r(t,_){var i=t.constructor.prototype;_ in i||Object.defineProperty(i,_,{get:function(){return this.$__raw[_]},set:function(t){this.$__set(_,t,!1)}})}function s(t,_){if(this.$__component=t,this.$__raw=_||{},this.$__dirty=!1,this.$__old=null,this.$__changes=null,this.$__forced=null,_)for(var i in _)r(this,i);Object.seal(this)}var o=t("/raptor-util$3.1.0/extend");s.prototype={$__reset:function(){var t=this;t.$__dirty=!1,t.$__old=null,t.$__changes=null,t.$__forced=null},$__replace:function(t){var _,i=this,e=this.$__raw;for(_ in e)_ in t||i.$__set(_,void 0,!1,!1);for(_ in t)i.$__set(_,t[_],!0,!1)},$__set:function(t,_,i,e){var n=this.$__raw;if(i&&r(this,t),e){var s=this.$__forced||(this.$__forced={});s[t]=!0}else if(n[t]===_)return;this.$__dirty||(this.$__dirty=!0,this.$__old=n,this.$__raw=n=o({},n),this.$__changes={},this.$__component.$__queueUpdate()),this.$__changes[t]=_,void 0===_?delete n[t]:n[t]=_},toJSON:function(){return this.$__raw}},i.exports=s});
$_mod.def("/marko$4.0.0-rc.22/runtime/dom-insert",function(r,e,n,t,i){function o(r){if("string"==typeof r){var e=r;if(r=document.getElementById(e),!r)throw Error("Not found: "+e)}return r}function s(r){a(r),u(r)}var d=r("/raptor-util$3.1.0/extend"),f=r("/marko$4.0.0-rc.22/components/util-browser"),u=f.$__destroyComponentForEl,a=f.$__destroyElRecursive;n.exports=function(r,e,n){d(r,{appendTo:function(r){r=o(r);var t=e(this,r);return r.appendChild(t),n(this,r)},prependTo:function(r){r=o(r);var t=e(this,r);return r.insertBefore(t,r.firstChild||null),n(this,r)},replace:function(r){r=o(r);var t=e(this,r);return s(r),r.parentNode.replaceChild(t,r),n(this,r)},replaceChildrenOf:function(r){r=o(r);for(var t=e(this,r),i=r.firstChild;i;){var d=i.nextSibling;1===i.nodeType&&s(i),i=d}return r.innerHTML="",r.appendChild(t),n(this,r)},insertBefore:function(r){r=o(r);var t=e(this,r);return r.parentNode.insertBefore(t,r),n(this,r)},insertAfter:function(r){r=o(r);var t=e(this,r);t=t;var i=r.nextSibling,s=r.parentNode;return i?s.insertBefore(t,i):s.appendChild(t),n(this,r)}})}});
$_mod.main("/marko$4.0.0-rc.22","runtime/index");
$_mod.remap("/marko$4.0.0-rc.22/runtime/env-init",!1);
$_mod.def("/marko$4.0.0-rc.22/runtime/createOut",function(t,e,r,n,u){function o(t){a=t}function c(t){return a(t)}var a;c.$__setCreateOut=o,r.exports=c});
$_mod.main("/marko$4.0.0-rc.22/runtime/loader","");
$_mod.remap("/marko$4.0.0-rc.22/runtime/loader/index","/marko$4.0.0-rc.22/runtime/loader/index-browser");
$_mod.remap("/marko$4.0.0-rc.22/runtime/loader/index-browser","/marko$4.0.0-rc.22/runtime/loader/index-browser-dynamic");
$_mod.def("/marko$4.0.0-rc.22/runtime/loader/index-browser-dynamic",function(r,e,n,o,t){"use strict";n.exports=function(e){return r(e)}});
$_mod.def("/marko$4.0.0-rc.22/runtime/index",function(e,r,t,n,m){"use strict";r.createOut=e("/marko$4.0.0-rc.22/runtime/createOut"),r.load=e("/marko$4.0.0-rc.22/runtime/loader/index-browser-dynamic"),r.events=e("/marko$4.0.0-rc.22/runtime/events")});
$_mod.def("/marko$4.0.0-rc.22/runtime/RenderResult",function(t,n,o,e,r){function u(t,n){if(!t.$__components)throw Error("Not added to DOM")}function i(t){var n=t.$__components;if(0===n.length)throw Error("No component");return n}function _(t){this.out=this.$__out=t,this.$__components=void 0}var s=t("/marko$4.0.0-rc.22/runtime/dom-insert"),c=[];o.exports=_;var m=_.prototype={getComponent:function(){u(this,"getComponent");var t=this.$__out.global.$w,n=t&&t[0];return n?n:i(this)[0].$__component},getComponents:function(t){u(this,"getComponents");var n,o=i(this),e=[];for(n=0;n<o.length;n++){var r=o[n].$__component;t&&!t(r)||e.push(r)}return e},afterInsert:function(t){var n=this.$__out,o=n.global.components;return o?(this.$__components=o.$__components,o.$__initComponents(t)):this.$__components=c,this},getNode:function(t){return this.$__out.$__getNode(t)},getOutput:function(){return this.$__out.$__getOutput()},toString:function(){return this.$__out.toString()},toJSON:function(){return this.$__out.$__getOutput()},document:"undefined"!=typeof document&&document};s(m,function(t,n){return t.getNode(n.ownerDocument)},function(t,n){return t.afterInsert(n.ownerDocument)})});
$_mod.installed("marko$4.0.0-rc.22","listener-tracker","2.0.0");
$_mod.main("/listener-tracker$2.0.0","lib/listener-tracker");
$_mod.def("/listener-tracker$2.0.0/lib/listener-tracker",function(e,t,r,n,i){function s(e){return!e.once}function o(e){this.$__target=e,this.$__listeners=[],this.$__subscribeTo=null}function _(e){this.$__target=e}function u(){this.$__subscribeToList=[]}var h=0,c=1,l=2,f="destroy";o.prototype={$__remove:function(e,t){var r=this.$__target,n=this.$__listeners;this.$__listeners=n.filter(function(n){var i=n[h],s=n[c],o=n[l];if(t){if(o&&e(i,o))return r.removeListener(i,o),!1}else if(e(i,s))return r.removeListener(i,o||s),!1;return!0});var i=this.$__subscribeTo;if(!this.$__listeners.length&&i){var s=this,o=i.$__subscribeToList;i.$__subscribeToList=o.filter(function(e){return e!==s})}},on:function(e,t){return this.$__target.on(e,t),this.$__listeners.push([e,t]),this},once:function(e,t){var r=this,n=function(){r.$__remove(function(e,t){return n===t},!0),t.apply(this,arguments)};return this.$__target.once(e,n),this.$__listeners.push([e,t,n]),this},removeListener:function(e,t){return"function"==typeof e&&(t=e,e=null),t&&e?this.$__remove(function(r,n){return e===r&&t===n}):t?this.$__remove(function(e,r){return t===r}):e&&this.removeAllListeners(e),this},removeAllListeners:function(e){var t=this.$__listeners,r=this.$__target;if(e)this.$__remove(function(t,r){return e===t});else{for(var n=t.length-1;n>=0;n--){var i=t[n];r.removeListener(i[h],i[c])}this.$__listeners.length=0}return this}},_.prototype={on:function(e,t){return this.$__target.addEventListener(e,t),this},once:function(e,t){var r=this,n=function(){r.$__target.removeEventListener(e,n),t()};return this.$__target.addEventListener(e,n),this},removeListener:function(e,t){return this.$__target.removeEventListener(e,t),this}},u.prototype={subscribeTo:function(e,t){for(var r,n,i=!t||t.addDestroyListener!==!1,u=this.$__subscribeToList,h=0,c=u.length;h<c;h++){var l=u[h];if(l.$__target===e){r=l;break}}return r||(s(e)&&(n=new _(e)),r=new o(n||e),i&&!n&&r.once(f,function(){r.removeAllListeners();for(var t=u.length-1;t>=0;t--)if(u[t].$__target===e){u.splice(t,1);break}}),r.$__subscribeTo=this,u.push(r)),r},removeAllListeners:function(e,t){var r,n=this.$__subscribeToList;if(e)for(r=n.length-1;r>=0;r--){var i=n[r];if(i.$__target===e){i.removeAllListeners(t),i.$__listeners.length||n.splice(r,1);break}}else{for(r=n.length-1;r>=0;r--)n[r].removeAllListeners();n.length=0}}},t=r.exports=u,t.wrap=function(e){var t,r;return s(e)&&(t=new _(e)),r=new o(t||e),t||e.once(f,function(){r.$__listeners.length=0}),r},t.createTracker=function(){return new u}});
$_mod.def("/raptor-util$3.1.0/inherit",function(t,e,r,o,p){function n(t,e,r){var o=t.prototype,p=t.prototype=Object.create(e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});if(o&&r!==!1)for(var n=Object.getOwnPropertyNames(o),i=0;i<n.length;i++){var c=n[i],a=Object.getOwnPropertyDescriptor(o,c);Object.defineProperty(p,c,a)}return t.$super=e,t.prototype=p,t}r.exports=n,n._inherit=n});
$_mod.def("/marko$4.0.0-rc.22/components/update-manager",function(e,t,n,u,a){"use strict";function i(){if(p.length)try{o(p)}finally{_=!1}}function s(){_||(_=!0,h(i))}function o(e){for(var t=0;t<e.length;t++){var n=e[t];n.update()}e.length=0}function r(e){var t={$__queue:null};l.push(t);try{e()}finally{try{t.$__queue&&o(t.$__queue)}finally{l.length--}}}function f(e){var t=l.length;if(t){var n=l[t-1];n.$__queue?n.$__queue.push(e):n.$__queue=[e]}else s(),p.push(e)}var _=!1,l=[],p=[],c=window,h=c.setImmediate;if(!h)if(c.postMessage){var d=[],g="si";c.addEventListener("message",function(e){var t=e.source;if((t==c||!t&&e.data===g)&&(e.stopPropagation(),d.length>0)){var n=d.shift();n()}},!0),h=function(e){d.push(e),c.postMessage(g,"*")}}else h=setTimeout;t.$__queueComponentUpdate=f,t.$__batchUpdate=r});
$_mod.def("/marko$4.0.0-rc.22/runtime/vdom/VNode",function(i,t,_,n,e){function r(i,t){i.namespaceURI=t;for(var _=i.$__firstChild;_;)_.$__nsAware&&r(_,t),_=_.$__nextSibling}function h(){}h.prototype={$__VNode:function(i){this.$__finalChildCount=i,this.$__childCount=0,this.$__firstChild=void 0,this.$__lastChild=void 0,this.$__parentNode=void 0,this.$__nextSibling=void 0},get firstChild(){var i=this.$__firstChild;if(i&&i.$__DocumentFragment){var t=i.firstChild;return t||i.nextSibling}return i},get nextSibling(){var i=this.$__nextSibling;if(i){if(i.$__DocumentFragment){var t=i.firstChild;return t||i.nextSibling}}else{var _=this.$__parentNode;if(_&&_.$__DocumentFragment)return _.nextSibling}return i},$__appendChild:function(i){if(this.$__childCount++,this.$__isTextArea){if(!i.$__Text)throw TypeError();var t=i.nodeValue;this.$__value=(this.$__value||"")+t}else{var _;i.$__nsAware&&(_=this.namespaceURI)&&!i.namespaceURI&&r(i,_);var n=this.$__lastChild;i.$__parentNode=this,n?n.$__nextSibling=i:this.$__firstChild=i,this.$__lastChild=i}return i},$__finishChild:function(){return this.$__childCount===this.$__finalChildCount&&this.$__parentNode?this.$__parentNode.$__finishChild():this}},_.exports=h});
$_mod.def("/marko$4.0.0-rc.22/runtime/vdom/VElement",function(t,e,i,r,n){function a(t,e){var i=t["data-_noupdate"];return i&&(e&&(t=l({},t)),i.forEach(function(e){delete t[e]})),t}function s(t,e){return e===!0?"":"object"===t?JSON.stringify(e):e.toString()}function o(t){l(this,t),this.$__parentNode=void 0,this.$__nextSibling=void 0}function u(t,e,i,r){var n,a;switch(t){case"svg":n="http://www.w3.org/2000/svg";break;case"math":n="http://www.w3.org/1998/Math/MathML";break;case"textarea":case"TEXTAREA":a=!0}this.$__VNode(i),r&&(e||(e={}),e[p]=r),this.$__attributes=e||$,this.$__isTextArea=a,this.namespaceURI=n,this.nodeName=t,this.$__value=void 0,this.$__constId=r}var _=t("/marko$4.0.0-rc.22/runtime/vdom/VNode"),h=t("/raptor-util$3.1.0/inherit"),l=t("/raptor-util$3.1.0/extend"),c=Object.defineProperty,f="http://www.w3.org/1999/xlink",v="xlink:href",d="href",$=Object.freeze({}),p="data-marko-const",b=/^data-_/;u.prototype={$__VElement:!0,nodeType:1,$__nsAware:!0,$__cloneNode:function(){return new o(this)},e:function(t,e,i,r){var n=this.$__appendChild(new u(t,e,i,r));return 0===i?this.$__finishChild():n},n:function(t){return this.$__appendChild(t.$__cloneNode()),this.$__finishChild()},actualize:function(t){var e,i=this.namespaceURI,r=this.nodeName;e=i?t.createElementNS(i,r):t.createElement(r);var n=this.$__attributes;for(var a in n){var o=n[a];if(("_"!=a[5]||!b.test(a))&&o!==!1&&null!=o){var u=typeof o;"string"!==u&&(o=s(u,o)),a===v?e.setAttributeNS(f,d,o):e.setAttribute(a,o)}}if(this.$__isTextArea)e.value=this.$__value;else for(var _=this.firstChild;_;)e.appendChild(_.actualize(t)),_=_.nextSibling;return e._vattrs=n,e},hasAttributeNS:function(t,e){var i=this.$__attributes[e];return null!=i&&i!==!1},getAttribute:function(t){return this.$__attributes[t]},isSameNode:function(t){if(1==t.nodeType){var e=this.$__constId;if(e){var i=t.$__VNode?t.$__constId:t.getAttribute(p);return e===i}}return!1}},h(u,_);var m=o.prototype=u.prototype;["checked","selected","disabled"].forEach(function(t){c(m,t,{get:function(){var e=this.$__attributes[t];return e!==!1&&null!=e}})}),c(m,"id",{get:function(){return this.$__attributes.id}}),c(m,"value",{get:function(){var t=this.$__value;return null==t&&(t=this.$__attributes.value),null!=t?t.toString():""}}),u.$__morphAttrs=function(t,e){var i,r,n=e.$__attributes||e._vattrs,o=t._vattrs;if(o){if(o===n)return;o=a(o,!0)}else{o={};var u=t.attributes;for(r=u.length-1;r>=0;--r){var _=u[r];if(_.specified!==!1){i=_.name;var h=_.namespaceURI;h===f?o[v]=_.value:o[i]=_.value}}a(o,!1)}n=a(n,!0);for(i in n){var l=n[i];if(i==v)null==l||l===!1?t.removeAttributeNS(f,d):o[i]!=l&&t.setAttributeNS(f,d,l);else if(null==l||l===!1)t.removeAttribute(i);else if(o[i]!==l){if("_"==i[5]&&b.test(i))continue;var c=typeof l;"string"!==c&&(l=s(c,l)),t.setAttribute(i,l)}}for(i in o)i in n||(i==v?t.removeAttributeNS(f,d):t.removeAttribute(i));t._vattrs=n},i.exports=u});
$_mod.installed("marko$4.0.0-rc.22","morphdom","2.3.1");
$_mod.def("/morphdom$2.3.1/dist/morphdom-factory",function(e,n,t,i,r){"use strict";function o(e){!v&&p.createRange&&(v=p.createRange(),v.selectNode(p.body));var n;return v&&v.createContextualFragment?n=v.createContextualFragment(e):(n=p.createElement("body"),n.innerHTML=e),n.childNodes[0]}function a(e,n){var t=e.nodeName,i=n.nodeName;return t===i||!!(n.actualize&&t.charCodeAt(0)<91&&i.charCodeAt(0)>90)&&t===i.toUpperCase()}function d(e,n){return n&&n!==h?p.createElementNS(n,e):p.createElement(e)}function l(e,n){for(var t=e.firstChild;t;){var i=t.nextSibling;n.appendChild(t),t=i}return n}function u(e,n,t){e[t]!==n[t]&&(e[t]=n[t],e[t]?e.setAttribute(t,""):e.removeAttribute(t,""))}function f(){}function c(e){return e.id}function s(e){return function(n,t,i){function r(e){C?C.push(e):C=[e]}function u(e,n){if(e.nodeType===g)for(var t=e.firstChild;t;){var i=void 0;n&&(i=A(t))?r(i):(V(t),t.firstChild&&u(t,n)),t=t.nextSibling}}function s(e,n,t){w(e)!==!1&&(n&&n.removeChild(e),V(e),u(e,t))}function v(e){if(e.nodeType===g)for(var n=e.firstChild;n;){var t=A(n);t&&(I[t]=n),v(n),n=n.nextSibling}}function m(e){y(e);for(var n=e.firstChild;n;){var t=n.nextSibling,i=A(n);if(i){var r=I[i];r&&a(n,r)&&(n.parentNode.replaceChild(r,n),h(r,n))}m(n),n=t}}function h(i,o,d){var l,u=A(o);if(u&&delete I[u],!t.isSameNode||!t.isSameNode(n)){if(!d){if(E(i,o)===!1)return;if(e(i,o),U(i),z(i,o)===!1)return}if("TEXTAREA"!==i.nodeName){var f,c,v,N,C=o.firstChild,y=i.firstChild;e:for(;C;){for(v=C.nextSibling,f=A(C);y;){if(c=y.nextSibling,C.isSameNode&&C.isSameNode(y)){C=v,y=c;continue e}l=A(y);var w=y.nodeType,V=void 0;if(w===C.nodeType&&(w===g?(f?f!==l&&((N=I[f])?y.nextSibling===N?V=!1:(i.insertBefore(N,y),c=y.nextSibling,l?r(l):s(y,i,!0),y=N):V=!1):l&&(V=!1),V=V!==!1&&a(y,C),V&&h(y,C)):w!==S&&w!=T||(V=!0,y.nodeValue=C.nodeValue)),V){C=v,y=c;continue e}l?r(l):s(y,i,!0),y=c}if(f&&(N=I[f])&&a(N,C))i.appendChild(N),h(N,C);else{var B=x(C);B!==!1&&(B&&(C=B),C.actualize&&(C=C.actualize(i.ownerDocument||p)),i.appendChild(C),m(C))}C=v,y=c}for(;y;)c=y.nextSibling,(l=A(y))?r(l):s(y,i,!0),y=c}var O=b[i.nodeName];O&&O(i,o)}}if(i||(i={}),"string"==typeof t)if("#document"===n.nodeName||"HTML"===n.nodeName){var N=t;t=p.createElement("html"),t.innerHTML=N}else t=o(t);var C,A=i.getNodeKey||c,x=i.onBeforeNodeAdded||f,y=i.onNodeAdded||f,E=i.onBeforeElUpdated||f,U=i.onElUpdated||f,w=i.onBeforeNodeDiscarded||f,V=i.onNodeDiscarded||f,z=i.onBeforeElChildrenUpdated||f,B=i.childrenOnly===!0,I={};v(n);var O=n,R=O.nodeType,D=t.nodeType;if(!B)if(R===g)D===g?a(n,t)||(V(n),O=l(n,d(t.nodeName,t.namespaceURI))):O=t;else if(R===S||R===T){if(D===R)return O.nodeValue=t.nodeValue,O;O=t}if(O===t)V(n);else if(h(O,t,B),C)for(var L=0,H=C.length;L<H;L++){var M=I[C[L]];M&&s(M,M.parentNode,!1)}return!B&&O!==n&&n.parentNode&&(O.actualize&&(O=O.actualize(n.ownerDocument||p)),n.parentNode.replaceChild(O,n)),O}}var v,m,h="http://www.w3.org/1999/xhtml",p="undefined"==typeof document?void 0:document,N=p?p.body||p.createElement("div"):{};m=N.hasAttributeNS?function(e,n,t){return e.hasAttributeNS(n,t)}:N.hasAttribute?function(e,n,t){return e.hasAttribute(t)}:function(e,n,t){return null!=e.getAttributeNode(n,t)};var C=m,b={OPTION:function(e,n){u(e,n,"selected")},INPUT:function(e,n){u(e,n,"checked"),u(e,n,"disabled"),e.value!==n.value&&(e.value=n.value),C(n,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,n){var t=n.value;if(e.value!==t&&(e.value=t),e.firstChild){if(""===t&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=t}},SELECT:function(e,n){if(!C(n,null,"multiple")){for(var t=-1,i=0,r=n.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(C(r,null,"selected")){t=i;break}i++}r=r.nextSibling}e.selectedIndex=i}}},g=1,S=3,T=8;t.exports=s});
$_mod.def("/morphdom$2.3.1/factory",function(o,m,d,r,t){d.exports=o("/morphdom$2.3.1/dist/morphdom-factory")});
$_mod.def("/marko$4.0.0-rc.22/components/Component",function(t,e,n,r,i){"use strict";function _(t){t()}function s(t,e){var n=e.id,r=t.$__componentsById[n];return r&&e.$__type==r.$__component.$__type}function o(t,e,n,r){n.push(t),r&&(n=r.concat(n));var i=g[t.$__scope],_=i[e];if(!_)throw Error("Method not found: "+e);_.apply(i,n)}function u(t,e,n){var r=t.id,i=null!=e?r+"-"+e:r;return null!=n&&(i+="["+n+"]"),i}function h(t,e,n){var r,i;for(var _ in e)if(e.hasOwnProperty(_)){var s="update_"+_;if(r=t[s],!r)return;(i||(i=[])).push([_,r])}if(i){for(var o=0,u=i.length;o<u;o++){var h=i[o],a=h[0];r=h[1];var $=e[a],d=n[a];r.call(t,$,d)}b(t,"update"),t.$__reset()}return!0}function a(t,e,n){if(e!=n){if(null==e||null==n)return!0;var r=Object.keys(e),i=Object.keys(n),_=r.length;if(_!==i.length)return!0;for(var s=0;s<_;s++){var o=r[s];if(e[o]!==n[o])return!0}}return!1}function $(t){1==t.nodeType&&E(t)}function d(t){return N.$__handleNodeDetach(t)}function c(t,e){C.call(this),this.id=t,this.el=this.$__state=this.$__roots=this.$__subscriptions=this.$__domEventListenerHandles=this.$__bubblingDomEvents=this.$__customEvents=this.$__scope=this.$__renderInput=null,this.$__destroyed=this.$__updateQueued=this.$__dirty=this.$__settingInput=!1,this.$__document=e}var l,p,f=t("/marko$4.0.0-rc.22/runtime/dom-insert"),v=t("/marko$4.0.0-rc.22/runtime/index"),m=t("/marko$4.0.0-rc.22/components/util-browser"),y=m.$__getComponentForEl,g=m.$__componentLookup,b=m.$__emitLifecycleEvent,E=m.$__destroyComponentForEl,I=m.$__destroyElRecursive,O=m.$__getElementById,C=t("/events-light$1.0.5/src/index"),j=t("/marko$4.0.0-rc.22/runtime/RenderResult"),w=t("/listener-tracker$2.0.0/lib/listener-tracker"),k=t("/raptor-util$3.1.0/inherit"),U=t("/marko$4.0.0-rc.22/components/update-manager"),D=t("/marko$4.0.0-rc.22/runtime/vdom/VElement").$__morphAttrs,L=t("/morphdom$2.3.1/factory"),S=L(D),N=t("/marko$4.0.0-rc.22/components/event-delegation"),R=Array.prototype.slice,q=!1,A={addDestroyListener:!1},B=C.prototype.emit;c.prototype=p={$__isComponent:!0,subscribeTo:function(t){if(!t)throw TypeError();var e=this.$__subscriptions||(this.$__subscriptions=new w),n=t.$__isComponent?l:A;return e.subscribeTo(t,n)},emit:function(t){var e,n=this.$__customEvents;if(n&&(e=n[t])){var r=e[0],i=e[1],_=R.call(arguments,1);o(this,r,_,i)}if(this.listenerCount(t))return B.apply(this,arguments)},getElId:function(t,e){return u(this,t,e)},getEl:function(t,e){var n=this.$__document;return null!=t?O(n,u(this,t,e)):this.el||O(n,u(this))},getEls:function(t){for(var e,n=[],r=0;e=this.getEl(t,r);)n.push(e),r++;return n},getComponent:function(t,e){return g[u(this,t,e)]},getComponents:function(t){for(var e,n=[],r=0;e=g[u(this,t,r)];)n.push(e),r++;return n},destroy:function(){if(!this.$__destroyed){var t,e,n=this.els;this.$__destroyShallow();var r=this.$__rootComponents;if(r)for(t=0,e=r.length;t<e;t++)r[t].destroy();for(t=0,e=n.length;t<e;t++){var i=n[t];I(i);var _=i.parentNode;_&&_.removeChild(i)}}},$__destroyShallow:function(){if(!this.$__destroyed){b(this,"destroy"),this.$__destroyed=!0,this.el=null,this.$__removeDOMEventListeners();var t=this.$__subscriptions;t&&(t.removeAllListeners(),this.$__subscriptions=null),delete g[this.id]}},isDestroyed:function(){return this.$__destroyed},get state(){return this.$__state},set state(t){var e=this.$__state;(e||t)&&(e||(e=this.$__state=new this.$__State(this)),e.$__replace(t||{}),e.$__dirty&&this.$__queueUpdate(),t||(this.$__state=null))},setState:function(t,e){var n=this.$__state;if("object"==typeof t){var r=t;for(var i in r)r.hasOwnProperty(i)&&n.$__set(i,r[i],!0)}else n.$__set(t,e,!0)},setStateDirty:function(t,e){var n=this.$__state;1==arguments.length&&(e=n[t]),n.$__set(t,e,!0,!0)},replaceState:function(t){this.$__state.$__replace(t)},get input(){return this.$__input},set input(t){this.$__settingInput?this.$__input=t:this.$__setInput(t)},$__setInput:function(t,e,n){e=e||this.onInput;var r,i=this.$__input;return this.$__input=void 0,e&&(this.$__settingInput=!0,r=e.call(this,t||{},n),this.$__settingInput=!1),t=this.$__renderInput=r||t,(this.$__dirty=a(this,i,t))&&this.$__queueUpdate(),void 0===this.$__input&&(this.$__input=t),t},forceUpdate:function(){this.$__dirty=!0,this.$__queueUpdate()},$__queueUpdate:function(){this.$__updateQueued||U.$__queueComponentUpdate(this)},update:function(){if(!this.$__destroyed&&this.$__isDirty){var t=this.$__input,e=this.$__state;!this.$__dirty&&e&&e.$__dirty&&h(this,e.$__changes,e.$__old,e)&&(e.$__dirty=!1),this.$__isDirty&&this.shouldUpdate(t,e)!==!1&&this.doUpdate(),this.$__reset()}},get $__isDirty(){return this.$__dirty||this.$__state&&this.$__state.$__dirty},$__reset:function(){this.$__dirty=!1,this.$__updateQueued=!1,this.$__renderInput=null;var t=this.$__state;t&&t.$__reset()},shouldUpdate:function(t,e){return!0},doUpdate:function(){this.rerender()},$__emitLifecycleEvent:function(t,e,n){b(this,t,e,n)},rerender:function(t){t&&(this.input=t);var e=this,n=e.renderer;if(!n)throw TypeError();var r={$w:e},i=e.$__getRootEls({}),_=e.$__document;t=this.$__renderInput||this.$__input,U.$__batchUpdate(function(){function o(t,e){var n,r=t.id;if(m&&r){var i=m.$__preserved[r];if(i&&!i.$__bodyOnly)return q;n=y(t),n&&!s(m,n)&&n.$__destroyShallow()}}function u(t){var e=t.id;if(m&&e){var n=m.$__preserved[e];if(n&&n.$__bodyOnly)return q}}function h(t){N.$__handleNodeAttach(t,c)}var a=n.createOut||v.createOut,c=a(r);c.$__document=e.$__document,n(t,c);for(var l,p=new j(c),f=c.$__getOutput(),m=c.global.components,g={onBeforeNodeDiscarded:d,onNodeDiscarded:$,onNodeAdded:h,onBeforeElUpdated:o,onBeforeElChildrenUpdated:u},b=f.firstChild;b;){var E=b.id;E&&(l=i[E],l&&S(l,b,g)),b=b.nextSibling}p.afterInsert(_),c.emit("$__componentsInitialized")}),this.$__reset()},$__getRootEls:function(t){var e,n,r=this.els;for(e=0,n=r.length;e<n;e++){var i=r[e];t[i.id]=i}var _=this.$__rootComponents;if(_)for(e=0,n=_.length;e<n;e++){var s=_[e];s.$__getRootEls(t)}return t},$__removeDOMEventListeners:function(){var t=this.$__domEventListenerHandles;t&&(t.forEach(_),this.$__domEventListenerHandles=null)},get $__rawState(){var t=this.$__state;return t&&t.$__raw},$__setCustomEvents:function(t,e){if(t){var n=this.$__customEvents={};this.$__scope=e;for(var r=0,i=t.length;r<i;r+=3){var _=t[r],s=t[r+1],o=t[r+2];n[_]=[s,o]}}}},p.elId=p.getElId,f(p,function(t){var e=this.els,n=e.length;if(n>1){for(var r=t.$__document.createDocumentFragment(),i=0;i<n;i++)r.appendChild(e[i]);return r}return e[0]},function(t){return t}),k(c,C),n.exports=c});
$_mod.def("/marko$4.0.0-rc.22/components/defineComponent",function(o,t,n,e,r){"use strict";var p,c,i;n.exports=function(o,t){function n(o,t){c.call(this,o,t)}function e(){p.apply(this,arguments)}if(o.$__isComponent)return o;var r,s;if("function"==typeof o)r=o,s=r.prototype;else{if("object"!=typeof o)throw TypeError();r=function(){},s=r.prototype=o}return s.$__isComponent||i(r,c),s=n.prototype=r.prototype,s.onCreate=s.onCreate||r,s.constructor=o.constructor=n,n.$__isComponent=!0,i(e,p),s.$__State=e,s.renderer=t,n},p=o("/marko$4.0.0-rc.22/components/State"),c=o("/marko$4.0.0-rc.22/components/Component"),i=o("/raptor-util$3.1.0/inherit")});
$_mod.def("/marko$4.0.0-rc.22/components/registry-browser",function(n,o,e,t,r){function i(n,o){return"function"==typeof o&&o(),a[n]=o,delete d[n],delete l[n],n}function c(n){var o=d[n];if(void 0===o&&(o=a[n],"function"==typeof o&&(o=o()),o||(o=f(n)),d[n]=o||null),null==o)throw new Error("Unable to load: "+n);return o}function p(n){var o=l[n];return o?o:(o=c(n),o.Component&&(o=o.Component),o.$__isComponent||(o=u(o,o.renderer)),o.prototype.$__type=n,l[n]=o,o)}function m(n,o){var e,t=p(n);return"function"==typeof t?e=new t(o):t.initComponent&&(e=t),e}var f=n("/marko$4.0.0-rc.22/components/loadComponent-dynamic"),u=n("/marko$4.0.0-rc.22/components/defineComponent"),a={},d={},l={};o.$__register=i,o.$__createComponent=m});
$_mod.def("/marko$4.0.0-rc.22/components/ComponentDef",function(t,n,e,_,o){"use strict";function i(t,n,e,_,o){this.$__out=e,this.$__componentStack=_,this.$__componentStackLen=o,this.$__component=t,this.id=n,this.$__roots=this.$__children=this.$__domEvents=this.$__bubblingDomEvents=void 0,this.$__isExisting=!1,this.$__nextIdIndex=0}var s=t("/marko$4.0.0-rc.22/components/nextRepeatedId"),r=/\[\]$/,$=t("/marko$4.0.0-rc.22/components/util-browser"),d=$.$__nextComponentId,c=$.$__attachBubblingEvent,h=t("/raptor-util$3.1.0/extend"),u=t("/marko$4.0.0-rc.22/components/registry-browser");i.prototype={$__end:function(){this.$__componentStack.length=this.$__componentStackLen},$__addChild:function(t){var n=this.$__children;n?n.push(t):this.$__children=[t]},elId:function(t){return null==t?this.id:"string"==typeof t&&r.test(t)?s(this.$__out,this.id,t):this.id+"-"+t},e:function(t,n,e,_){if(n){var o=this.$__domEvents;this.$__domEvents=(o||(this.$__domEvents=[])).concat([t,n,e,_])}},$__nextId:function(){return this.id?this.id+"-w"+this.$__nextIdIndex++:d(this.$__out)},d:function(t,n){return c(this,t,n)}},i.$__deserialize=function(t,n){var e=t[0],_=n[t[1]],o=t[2],i=t[3],s=i.s,r=i.w,$=_&&u.$__createComponent(_,e);if(i.b&&($.$__bubblingDomEvents=i.b),$.$__updateQueued=!0,s){var d=i.u;if(d)for(var c=0;c<d.length;c++)s[d[c]]=void 0;$.state=s}$.$__input=o,r&&h($,r);var m=i.p,a=i.e;return $.$__setCustomEvents(a,m),{$__component:$,$__roots:i.r,$__domEvents:i.d}},e.exports=i});
$_mod.def("/marko$4.0.0-rc.22/components/init-components-browser",function(e,n,t,o,r){"use strict";function i(e,n,t){var o=e[n];if(!o)throw Error("Method not found: "+n);o.apply(e,t)}function _(e,n,t){return e.addEventListener(n,t,!1),function(){e.removeEventListener(n,t)}}function c(e,n,t,o,r,c){var s=_(n,t,function(t){var _=[t,n];r&&(_=r.concat(_)),i(e,o,_)});c.push(s)}function s(e,n){var t=e.$__component;if(t&&t.$__isComponent){var o=e.$__domEvents;t.$__reset(),t.$__document=n;var r,i,_,s,a,m=e.$__isExisting,$=t.id,v=e.$__roots;if(v){var f,l=[];for(r=0,i=v.length;r<i;r++){var u=v[r],g=$+"-"+u,E=p[g];if(E)E.$__rootFor=t,f?f.push(E):f=t.$__rootComponents=[E];else{var w=h(n,g);w&&(w._w=t,l.push(w))}}t.el=l[0],t.els=l,p[$]=t}else if(!m){var L=h(n,$);L._w=t,t.el=L,t.els=[L],p[$]=t}if(m&&t.$__removeDOMEventListeners(),o){var k=[];for(r=0,i=o.length;r<i;r+=4){_=o[r],s=o[r+1];var C=h(n,o[r+2]);a=o[r+3],c(t,C,_,s,a,k)}k.length&&(t.$__domEventListenerHandles=k)}m?t.$__emitLifecycleEvent("update"):(d.emit("mountComponent",t),t.$__emitLifecycleEvent("mount"))}}function a(e,n){v.$__init(n),n=n||l;for(var t=0,o=e.length;t<o;t++){var r=e[t];r.$__children&&a(r.$__children,n),s(r,n)}}function m(e,n){var t,o=0;if(arguments.length){v.$__init(n||l),e=$(e);var r=e.w,i=e.t;for(n||(n=l),t=r.length;o<t;o++){var _=g.$__deserialize(r[o],i);s(_,n)}}else if(e=f.$components,f.$components={concat:m},e&&(t=e.length))for(;o<t;o++)m(e[o],n)}var $=e("/warp10$1.3.3/finalize"),v=e("/marko$4.0.0-rc.22/components/event-delegation"),f=window,l=document,d=e("/marko$4.0.0-rc.22/runtime/events"),u=e("/marko$4.0.0-rc.22/components/util-browser"),p=u.$__componentLookup,h=u.$__getElementById,g=e("/marko$4.0.0-rc.22/components/ComponentDef");n.$__initClientRendered=a,n.$__initServerRendered=m});
$_mod.def("/marko$4.0.0-rc.22/components/boot",function(o,n,e,r,t){o("/marko$4.0.0-rc.22/components/init-components-browser").$__initServerRendered()});
$_mod.run("/marko$4.0.0-rc.22/components/boot");
$_mod.def("/marko$4.0.0-rc.22/components/ComponentsContext",function(n,t,o,e,_){"use strict";function s(n,t){t||(t=new c(null,null,n)),this.$__out=n,this.$__componentStack=[t],this.$__preserved=i,this.$__componentsById={}}var c=n("/marko$4.0.0-rc.22/components/ComponentDef"),r=n("/marko$4.0.0-rc.22/components/init-components-browser"),i={};s.prototype={get $__components(){return this.$__componentStack[0].$__children},$__beginComponent:function(n){var t=this,o=t.$__componentStack,e=o.length,_=o[e-1],s=n.id;s||(s=n.id=_.$__nextId());var r=new c(n,s,this.$__out,o,e);return this.$__componentsById[s]=r,_.$__addChild(r),o.push(r),r},$__clearComponents:function(){this.$__componentStack=[new c(null,this.$__out)]},$__initComponents:function(n){var t=this.$__components;t&&(r.$__initClientRendered(t,n),this.$__clearComponents())},$__nextComponentId:function(){var n=this.$__componentStack,t=n[n.length-1];return t.$__nextId()},$__preserveDOMNode:function(n,t){var o=this.$__preserved;o===i&&(o=this.$__preserved={}),o[n]={$__bodyOnly:t}}},s.$__getComponentsContext=function(n){var t=n.global;return n.data.components||t.components||(t.components=new s(n))},o.exports=s});
$_mod.def("/marko$4.0.0-rc.22/components/renderer",function(e,t,n,o,r){function _(e,t,n){if("#"===t.charAt(0))return t.substring(1);var o;return o=u.test(t)?d(e,n,t):n+"-"+t}function a(e,t,n){var o=e.$__getRootEls({});for(var r in o){var _=o[r];t.element(_.tagName,{id:r}),n.$__preserveDOMNode(r)}return e.$__reset(),!0}function $(e){var t,n=e.parentOut,o=e.out,r=o.global.components;if(r&&(t=r.$__componentStack)){var _=new m(o,t[t.length-1]);o.data.components=_}o.data.$w=n.data.$w}function i(e,t,n){if("function"==typeof n){var o=n;n=n.prototype,n.onCreate=n.onCreate||o}n=n||{};var r=n.onInput,i=t.type,s=t.roots,d=t.id,u=t.split;return function(t,o){var g=o.global;o.isSync()||g[f]||(g[f]=!0,o.on("beginAsync",$));var C,w,y,b=g.$w,k=void 0!==b,x=d;if(b)x=b.id,C=!0,g.$w=null;else{var I=t&&t.$w||o.data.$w;if(I){y=I[0],y&&(y=y.id);var E=I[1];null!=E&&(E=E.toString()),x=x||_(o,E,y),w=I[2],delete t.$w}}var S=m.$__getComponentsContext(o);if(x=x||S.$__nextComponentId(),v.$__isServer)b=v.$__createComponent(n,x,t,o,i,w,y),t=b.$__updatedInput,b.$__updatedInput=void 0;else{if(!b&&(k&&(b=p[x],b&&b.$__type!==i&&(b=void 0)),b?C=!0:(C=!1,b=v.$__createComponent(i,x),u&&(u=!1,l(b.constructor.prototype,n))),b.$__updateQueued=!0,b.$__setCustomEvents(w,y),C||c(b,"create",t,o),t=b.$__setInput(t,r,o),C&&(!b.$__isDirty||!b.shouldUpdate(t,b.$__state))))return void a(b,o,S);c(b,"render",o)}var h=S.$__beginComponent(b);h.$__roots=s,h.$__isExisting=C,e(t,o,h,b.$__rawState),h.$__end()}}var s=e("/marko$4.0.0-rc.22/components/util-browser"),p=s.$__componentLookup,c=s.$__emitLifecycleEvent,d=e("/marko$4.0.0-rc.22/components/nextRepeatedId"),u=/\[\]$/,m=e("/marko$4.0.0-rc.22/components/ComponentsContext"),v=e("/marko$4.0.0-rc.22/components/registry-browser"),l=e("/raptor-util$3.1.0/extend"),f="$wa";n.exports=i,i.$__resolveComponentKey=_,i.$__preserveComponentEls=a,i.$__handleBeginAsync=$});
$_mod.def("/marko$4.0.0-rc.22/components/index-browser",function(o,n,r,e,t){function m(o){c.on("initComponent",o)}var c=o("/marko$4.0.0-rc.22/runtime/events"),i=o("/marko$4.0.0-rc.22/components/Component"),p=o("/marko$4.0.0-rc.22/components/util-browser");n.onInitComponent=m,n.Component=i,n.getComponentForEl=p.$__getComponentForEl,n.init=o("/marko$4.0.0-rc.22/components/init-components-browser").$__initServerRendered,n.c=o("/marko$4.0.0-rc.22/components/defineComponent"),n.r=o("/marko$4.0.0-rc.22/components/renderer"),n.rc=o("/marko$4.0.0-rc.22/components/registry-browser").$__register,window.$__MARKO_COMPONENTS=n});
$_mod.installed("markojs-website$1.0.0","marko","4.0.0-rc.22");
$_mod.main("/marko$4.0.0-rc.22/components","");
$_mod.def("/markojs-website$1.0.0/routes/docs/components/doc-sidebar/component-browser", function(require, exports, module, __filename, __dirname) { var getComponentForEl = require('/marko$4.0.0-rc.22/components/index-browser'/*'marko/components'*/).getComponentForEl;
var forEach = [].forEach;
var filter = [].filter;
var slice = [].slice;

module.exports = {
    onMount() {
        this.preventOverscroll();
        this.listenForHeaderChanges();
        this.initScrollSpy();
    },

    initScrollSpy() {
        var headersSelector = [1,2,3,4,5,6].map(n => '.doc-content h'+n).join(',');
        var headers = slice.call(document.querySelectorAll(headersSelector));
        var waiting = false;

        this.subscribeTo(window).on('scroll', () => {
            if (!waiting) {
                waiting = true;
                setTimeout(() => {
                    var threshold = window.innerHeight / 3;
                    var closestHeader;
                    var closestTop;

                    headers.map(header => {
                        var top = header.getBoundingClientRect().top;
                        if (closestTop == null || (top < threshold && Math.abs(top) < Math.abs(closestTop))) {
                            closestTop = top;
                            closestHeader = header;
                        }
                    });

                    var anchor = closestHeader.id;
                    var anchorEl = this.el.querySelector('a[href="#'+anchor+'"]') || this.el.querySelector('a.selected');
                    var targetAnchor = anchorEl;
                    var childList = targetAnchor.nextSibling;

                    if (childList) {
                        forEach.call(childList.querySelectorAll('a[href^=\\#]'), (a) => a.classList.remove('selected'));
                    }

                    while (targetAnchor) {
                        var parentList = targetAnchor.closest('ul');
                        var siblings = parentList && filter.call(parentList.querySelectorAll(':scope > li > a[href^=\\#]'), (a) => a !== targetAnchor);
                        siblings && siblings.forEach(a => a.classList.remove('selected'));
                        targetAnchor.classList.add('selected');
                        targetAnchor = parentList && parentList.previousSibling;
                    }

                    this.scrollAnchorIntoView(anchorEl);

                    waiting = false;
                }, 50);
            }
        });
    },

    listenForHeaderChanges() {
        var header = getComponentForEl(document.querySelector('.site-header'));

        forEach.call(this.el.querySelectorAll('a[href^=\\#]'), (a) => {
            this.subscribeTo(a).on('click', () => {
                header.hide();
                header.pause();
                header.resume();
            });
        });

        this.subscribeTo(this.el.querySelector('a.selected')).on('click', (e) => {
            window.scrollTo(0,0);
            header.reset();
            e.preventDefault();
        });

        this.subscribeTo(header)
            .on('reset', () => {
                this.el.classList.remove('no-header');
                this.el.classList.remove('fixed');
                setTimeout(() => this.el.classList.remove('transition'), 0);
            })
            .on('fix', () => {
                this.el.classList.remove('no-header');
                this.el.classList.add('fixed');
                setTimeout(() => this.el.classList.add('transition'), 0);
            })
            .on('hide', () => {
                this.el.classList.add('no-header');
                this.el.classList.add('fixed');
                setTimeout(() => this.el.classList.add('transition'), 0);
            });

        if (window.pageYOffset > header.el.offsetHeight) {
            this.el.classList.add('no-header');
            this.el.classList.add('fixed');
        }
    },

    preventOverscroll() {
        var sidebar = this.getEl('sidebar');
        this.subscribeTo(document.body).on('wheel', (e) => {
            var delta = e.deltaY;
            var scrollTarget = sidebar.scrollTop + delta;
            var topY = 0;
            var bottomY = sidebar.scrollHeight - sidebar.offsetHeight;
            var atTop = scrollTarget <= topY;
            var atBottom = scrollTarget >= bottomY;

            if (delta < 0 && atTop || delta > 0 && atBottom) {
                if (e.target === sidebar || sidebar.contains(e.target)) {
                    if (atTop && sidebar.scrollTop != topY) {
                        sidebar.scrollTop = topY;
                    } else if (atBottom && sidebar.scrollTop != bottomY) {
                        sidebar.scrollTop = bottomY;
                    }
                    e.preventDefault();
                }
            }
        });
    },

    scrollAnchorIntoView(anchorEl) {
        var sidebar = this.getEl('sidebar');
        var anchorTop = anchorEl.offsetTop;
        var sidebarScrollTop = sidebar.scrollTop;
        var sidebarHeight = sidebar.offsetHeight;
        var sidebarScrollBottom = sidebarScrollTop + sidebarHeight;

        var targetList = anchorEl.closest('li');
        var parentList;

        while (true) {
            parentList = targetList.parentNode.closest('ul');
            if (parentList && parentList.offsetHeight < sidebarHeight) {
                targetList = parentList;
            } else {
                break;
            }
        }

        var targetTop = targetList.offsetTop;
        var targetHeight = targetList.offsetHeight;
        var targetBottom = targetTop + targetHeight;
        var targetIsFullyVisible = targetTop > sidebarScrollTop && targetBottom < sidebarScrollBottom;

        if (!targetIsFullyVisible) {
            sidebar.scrollTop = targetTop + targetHeight/2 - sidebarHeight/2;
        }
    }
}
});
$_mod.def("/markojs-website$1.0.0/components/site-search/component-browser", function(require, exports, module, __filename, __dirname) { module.exports = {
    focus(e) {
        var input = this.getEl('input');
        if(e.target != input) {
            input.focus();
        }
    },
    grow() {
        this.el.classList.add('large');
        this.getEl('input').value = '';
    },
    shrink() {
        this.el.classList.remove('large');
    }
}
});
$_mod.def("/markojs-website$1.0.0/components/site-header/component-browser", function(require, exports, module, __filename, __dirname) { var classNames = {
    base: 'headspace',
    fixed: 'headspace--fixed',
    hidden: 'headspace--hidden'
};
var debounce = (cb) => () => window.requestAnimationFrame(cb);
var tolerance = 3;

module.exports = {
    onMount() {
        var scrollLast = window.pageYOffset;
        var startOffset = this.el.offsetHeight;

        var handleScroll = debounce(() => {
            var scrollCurrent = window.pageYOffset;

            if (scrollCurrent <= 0) {
                this.reset()
            } else if (!this.paused && scrollCurrent > startOffset) {
                var toleanceReached = Math.abs(scrollCurrent - scrollLast) >= tolerance;
                var scrollingDown = scrollCurrent > scrollLast;
                var wasAtTop = scrollLast <= startOffset;
                if (toleanceReached || (scrollingDown && wasAtTop)) {
                    scrollCurrent > scrollLast ? this.hide() : this.fix();
                }
            }

            scrollLast = scrollCurrent;
        });

        window.addEventListener('scroll', handleScroll);
    },
    reset() {
        this.removeClass(classNames.fixed);
        this.removeClass(classNames.hidden);
        this.emit('reset');
    },
    fix() {
        this.addClass(classNames.fixed);
        this.removeClass(classNames.hidden);
        this.emit('fix');
    },
    hide() {
        this.addClass(classNames.hidden);
        this.emit('hide');
    },
    addClass(cls) {
        this.el.classList.add(cls);
    },
    removeClass(cls) {
        this.el.classList.remove(cls);
    },
    pause() {
        this.paused = true;
    },
    resume() {
        setTimeout(() =>
            window.requestAnimationFrame(() => {
                this.paused = false;
            })
        );
    }
}
});
$_mod.def("/markojs-website$1.0.0/util/localStorage", function(require, exports, module, __filename, __dirname) { function getMarkoWebsiteKey(key) {
    return `markojs-website:${key}`;
}

exports.get = (key) => localStorage.getItem(getMarkoWebsiteKey(key));
exports.set = (key, value) => localStorage.setItem(getMarkoWebsiteKey(key), value);
exports.getMarkoWebsiteKey = getMarkoWebsiteKey;

});
$_mod.def("/markojs-website$1.0.0/components/code-block-marko/component-browser",function(o,e,s,t,c){"use strict";const n=o("/marko$4.0.0-rc.22/components/index-browser").getComponentForEl,r=o("/markojs-website$1.0.0/util/localStorage");s.exports={changeSyntax:function(){var o=n(document.querySelector(".site-header")),e=document.body.scrollTop,s=this.el.offsetTop;o.pause(),"concise"===r.get("syntax")?(r.set("syntax","html"),document.body.classList.remove("concise")):(r.set("syntax","concise"),document.body.classList.add("concise"));var t=this.el.offsetTop,c=e-s+t;document.body.scrollTop=c,o.resume()}}});