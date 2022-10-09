// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function c(e){return e!=e}function d(e,r,t,n,o){var a,i,l,u,f;if(e<=0)return NaN;if(1===e||0===t)return void 0===(u=n.call(o,r[0],0,0,r))||c(u)?NaN:0;for(l=t<0?(1-e)*t:0,f=0;f<e&&void 0===(i=n.call(o,r[l],f,l,r));f++)l+=t;if(f===e)return NaN;for(a=i,f+=1;f<e;f++)if(l+=t,void 0!==(u=n.call(o,r[l],f,l,r))){if(c(u))return u;u<i?i=u:u>a&&(a=u)}return a-i}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&i&&i.call(e,r,t.get),_&&l&&l.call(e,r,t.set),e},r(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,a){var i,l,u,f,d;if(e<=0)return NaN;if(1===e||0===t)return void 0===(f=o.call(a,r[0],0,0,r))||c(f)?NaN:0;for(u=n,d=0;d<e&&void 0===(l=o.call(a,r[u],d,u,r));d++)u+=t;if(d===e)return NaN;for(i=l,d+=1;d<e;d++)if(u+=t,void 0!==(f=o.call(a,r[u],d,u,r))){if(c(f))return f;f<l?l=f:f>i&&(i=f)}return i-l}});const{ndarray:_}=d;e.default=d,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangeBy={});
//# sourceMappingURL=index.js.map
