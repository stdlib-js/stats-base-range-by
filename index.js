// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},d=r()?f:c,_=function(e){return e!=e};function p(e,r,t,n,o){var i,a,l,u,f;if(e<=0)return NaN;if(1===e||0===t)return void 0===(u=n.call(o,r[0],0,0,r))||_(u)?NaN:0;for(l=t<0?(1-e)*t:0,f=0;f<e&&void 0===(a=n.call(o,r[l],f,l,r));f++)l+=t;if(f===e)return NaN;for(i=a,f+=1;f<e;f++)if(l+=t,void 0!==(u=n.call(o,r[l],f,l,r))){if(_(u))return u;u<a?a=u:u>i&&(i=u)}return i-a}return d(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,i){var a,l,u,f,c;if(e<=0)return NaN;if(1===e||0===t)return void 0===(f=o.call(i,r[0],0,0,r))||_(f)?NaN:0;for(u=n,c=0;c<e&&void 0===(l=o.call(i,r[u],c,u,r));c++)u+=t;if(c===e)return NaN;for(a=l,c+=1;c<e;c++)if(u+=t,void 0!==(f=o.call(i,r[u],c,u,r))){if(_(f))return f;f<l?l=f:f>a&&(a=f)}return a-l}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).rangeBy=r();
//# sourceMappingURL=index.js.map
