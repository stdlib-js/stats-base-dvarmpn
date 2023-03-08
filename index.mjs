// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a){var i,f,u,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===a)return 0;for(i=a<0?(1-r)*a:0,f=0,u=0,s=0;s<r;s++)f+=(o=t[i]-n)*o,u+=o,i+=a;return f/d-u/r*(u/d)}function e(r,n,e,t,a,i){var f,u,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===a)return 0;for(f=i,u=0,o=0,l=0;l<r;l++)u+=(d=t[f]-n)*d,o+=d,f+=a;return u/s-o/r*(o/s)}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
