// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function c(e,r,t,n,o){var a,i,l,u,f,c;if(f=e-t,e<=0||f<=0)return NaN;if(1===e||0===o)return 0;for(a=o<0?(1-e)*o:0,i=0,l=0,c=0;c<e;c++)i+=(u=n[a]-r)*u,l+=u,a+=o;return i/f-l/e*(l/f)}function p(e,r,t,n,o,a){var i,l,u,f,c,p;if(c=e-t,e<=0||c<=0)return NaN;if(1===e||0===o)return 0;for(i=a,l=0,u=0,p=0;p<e;p++)l+=(f=n[i]-r)*f,u+=f,i+=o;return l/c-u/e*(u/c)}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p}),e.default=c,e.ndarray=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dvarmpn={});
//# sourceMappingURL=index.js.map
