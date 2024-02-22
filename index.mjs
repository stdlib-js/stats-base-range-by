// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";function e(r,e,i,t,a){var o,f,l,d,s;if(r<=0)return NaN;if(1===r||0===i)return void 0===(d=t.call(a,e[0],0,0,e))||n(d)?NaN:0;for(l=i<0?(1-r)*i:0,s=0;s<r&&void 0===(f=t.call(a,e[l],s,l,e));s++)l+=i;if(s===r)return NaN;for(o=f,s+=1;s<r;s++)if(l+=i,void 0!==(d=t.call(a,e[l],s,l,e))){if(n(d))return d;d<f?f=d:d>o&&(o=d)}return o-f}r(e,"ndarray",(function(r,e,i,t,a,o){var f,l,d,s,u;if(r<=0)return NaN;if(1===r||0===i)return void 0===(s=a.call(o,e[0],0,0,e))||n(s)?NaN:0;for(d=t,u=0;u<r&&void 0===(l=a.call(o,e[d],u,d,e));u++)d+=i;if(u===r)return NaN;for(f=l,u+=1;u<r;u++)if(d+=i,void 0!==(s=a.call(o,e[d],u,d,e))){if(n(s))return s;s<l?l=s:s>f&&(f=s)}return f-l}));const{ndarray:i}=e;export{e as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
