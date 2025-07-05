"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var p=q(function(I,m){
var d=require('@stdlib/math-base-assert-is-nan/dist');function P(i,e,o,c,f,s){var u,t,v,r,a,n,l;if(u=e.data,t=e.accessors[0],i===1||o===0)return n=f.call(s,t(u,c),0,c,u),n===void 0||d(n)?NaN:0;for(a=c,l=0;l<i&&(r=f.call(s,t(u,a),l,a,u),r===void 0);l++)a+=o;if(l===i)return NaN;for(v=r,l+=1,l;l<i;l++)if(a+=o,n=f.call(s,t(u,a),l,a,u),n!==void 0){if(d(n))return n;n<r?r=n:n>v&&(v=n)}return v-r}m.exports=P
});var y=q(function(J,x){
var B=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=p();function z(i,e,o,c,f,s){var u,t,v,r,a,n;if(i<=0)return NaN;if(n=R(e),n.accessorProtocol)return w(i,n,o,c,f,s);if(i===1||o===0)return r=f.call(s,e[c],0,c,e),r===void 0||B(r)?NaN:0;for(v=c,a=0;a<i&&(t=f.call(s,e[v],a,v,e),t===void 0);a++)v+=o;if(a===i)return NaN;for(u=t,a+=1,a;a<i;a++)if(v+=o,r=f.call(s,e[v],a,v,e),r!==void 0){if(B(r))return r;r<t?t=r:r>u&&(u=r)}return u-t}x.exports=z
});var N=q(function(K,j){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=y();function E(i,e,o,c,f){return D(i,e,o,C(i,o),c,f)}j.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=N(),G=y();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
