// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;function c(e,r,t,n,o){var a,i,l,u,c,_;if(c=e-t,e<=0||c<=0)return NaN;if(1===e||0===o)return 0;for(a=o<0?(1-e)*o:0,i=0,l=0,_=0;_<e;_++)i+=(u=n[a]-r)*u,l+=u,a+=o;return i/c-l/e*(l/c)}function _(e,r,t,n,o,a){var i,l,u,c,_,f;if(_=e-t,e<=0||_<=0)return NaN;if(1===e||0===o)return 0;for(i=a,l=0,u=0,f=0;f<e;f++)l+=(c=n[i]-r)*c,u+=c,i+=o;return l/_-u/e*(u/_)}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(l.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{c as default,_ as ndarray};
//# sourceMappingURL=mod.js.map
