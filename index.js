// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=u.call(t,y,"$1e"),t=u.call(t,b,"e"),t=u.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=u.call(t,d,"e+0$1"),t=u.call(t,g,"e-0$1"),e.alternate&&(t=u.call(t,h,"$1."),t=u.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function _(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+_(t):_(t)+e}var k=String.fromCharCode,E=isNaN,N=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,n,o,l,p,f,u;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,f=0;f<e.length;f++)if(s(t=e[f]))l+=t;else{if(r=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,E(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,a;for(i=[],a=0,t=V.exec(e);t;)(r=e.slice(a,V.lastIndex-t[0].length)).length&&i.push(r),i.push(T(t)),a=V.lastIndex,t=V.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function F(e){return"string"==typeof e}function I(e){var r,i;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var A,C=Object.prototype,R=C.toString,O=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,G=C.__lookupSetter__;function W(e){return e!=e}function L(e,r,i,t,a){var n,o,c,s,l;if(e<=0)return NaN;if(1===e||0===i)return void 0===(s=t.call(a,r[0],0,0,r))||W(s)?NaN:0;for(c=i<0?(1-e)*i:0,l=0;l<e&&void 0===(o=t.call(a,r[c],l,c,r));l++)c+=i;if(l===e)return NaN;for(n=o,l+=1;l<e;l++)if(c+=i,void 0!==(s=t.call(a,r[c],l,c,r))){if(W(s))return s;s<o?o=s:s>n&&(n=s)}return n-o}return A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(Z.call(e,r)||G.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(e,r,i.get),o&&P&&P.call(e,r,i.set),e},A(L,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,i,t,a,n){var o,c,s,l,p;if(e<=0)return NaN;if(1===e||0===i)return void 0===(l=a.call(n,r[0],0,0,r))||W(l)?NaN:0;for(s=t,p=0;p<e&&void 0===(c=a.call(n,r[s],p,s,r));p++)s+=i;if(p===e)return NaN;for(o=c,p+=1;p<e;p++)if(s+=i,void 0!==(l=a.call(n,r[s],p,s,r))){if(W(l))return l;l<c?c=l:l>o&&(o=l)}return o-c}}),L},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).rangeBy=r();
//# sourceMappingURL=index.js.map
