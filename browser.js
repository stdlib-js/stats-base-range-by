// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;function f(e){return e!=e}function c(e,r,t,n,o){var i,a,l,u,c;if(e<=0)return NaN;if(1===e||0===t)return void 0===(u=n.call(o,r[0],0,0,r))||f(u)?NaN:0;for(l=t<0?(1-e)*t:0,c=0;c<e&&void 0===(a=n.call(o,r[l],c,l,r));c++)l+=t;if(c===e)return NaN;for(i=a,c+=1;c<e;c++)if(l+=t,void 0!==(u=n.call(o,r[l],c,l,r))){if(f(u))return u;u<a?a=u:u>i&&(i=u)}return i-a}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,i){var a,l,u,c,d;if(e<=0)return NaN;if(1===e||0===t)return void 0===(c=o.call(i,r[0],0,0,r))||f(c)?NaN:0;for(u=n,d=0;d<e&&void 0===(l=o.call(i,r[u],d,u,r));d++)u+=t;if(d===e)return NaN;for(a=l,d+=1;d<e;d++)if(u+=t,void 0!==(c=o.call(i,r[u],d,u,r))){if(f(c))return c;c<l?l=c:c>a&&(a=c)}return a-l}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).rangeBy=r();
//# sourceMappingURL=browser.js.map
