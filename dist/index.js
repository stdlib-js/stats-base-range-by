"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var y=c(function(E,q){
var s=require('@stdlib/math-base-assert-is-nan/dist');function R(n,e,v,l,o){var t,u,i,a,r;if(n<=0)return NaN;if(n===1||v===0)return a=l.call(o,e[0],0,0,e),a===void 0||s(a)?NaN:0;for(v<0?i=(1-n)*v:i=0,r=0;r<n&&(u=l.call(o,e[i],r,i,e),u===void 0);r++)i+=v;if(r===n)return NaN;for(t=u,r+=1,r;r<n;r++)if(i+=v,a=l.call(o,e[i],r,i,e),a!==void 0){if(s(a))return a;a<u?u=a:a>t&&(t=a)}return t-u}q.exports=R
});var d=c(function(F,p){
var m=require('@stdlib/math-base-assert-is-nan/dist');function j(n,e,v,l,o,t){var u,i,a,r,f;if(n<=0)return NaN;if(n===1||v===0)return r=o.call(t,e[0],0,0,e),r===void 0||m(r)?NaN:0;for(a=l,f=0;f<n&&(i=o.call(t,e[a],f,a,e),i===void 0);f++)a+=v;if(f===n)return NaN;for(u=i,f+=1,f;f<n;f++)if(a+=v,r=o.call(t,e[a],f,a,e),r!==void 0){if(m(r))return r;r<i?i=r:r>u&&(u=r)}return u-i}p.exports=j
});var O=c(function(G,N){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=y(),z=d();w(B,"ndarray",z);N.exports=B
});var C=O();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
