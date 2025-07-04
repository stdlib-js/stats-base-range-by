"use strict";var q=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var p=q(function(J,m){
var d=require('@stdlib/math-base-assert-is-nan/dist');function R(i,r,v,t,c,s){var l,o,u,a,e,n,f;if(l=r.data,o=r.accessors[0],i===1||v===0)return n=c.call(s,o(l,t),0,t,r),n===void 0||d(n)?NaN:0;for(e=t,f=0;f<i&&(a=c.call(s,o(l,e),f,e,r),a===void 0);f++)e+=v;if(f===i)return NaN;for(u=a,f+=1,f;f<i;f++)if(e+=v,n=c.call(s,o(l,e),f,e,r),n!==void 0){if(d(n))return n;n<a?a=n:n>u&&(u=n)}return u-a}m.exports=R
});var y=q(function(K,j){
var B=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/array-base-arraylike2object/dist'),z=p();function C(i,r,v,t,c,s){var l,o,u,a,e,n;if(i<=0)return NaN;if(n=w(r),n.accessorProtocol)return z(i,n,v,t,c,s);if(i===1||v===0)return a=c.call(s,r[t],0,t,r),a===void 0||B(a)?NaN:0;for(u=t,e=0;e<i&&(o=c.call(s,r[u],e,u,r),o===void 0);e++)u+=v;if(e===i)return NaN;for(l=o,e+=1,e;e<i;e++)if(u+=v,a=c.call(s,r[u],e,u,r),a!==void 0){if(B(a))return a;a<o?o=a:a>l&&(l=a)}return l-o}j.exports=C
});var O=q(function(L,N){
var D=require('@stdlib/strided-base-stride2offset/dist'),E=y();function F(i,r,v,t,c){return E(i,r,v,D(i,v),t,c)}N.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=O(),H=y();G(P,"ndarray",H);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
