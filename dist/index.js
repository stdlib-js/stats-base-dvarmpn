"use strict";var q=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var d=q(function(A,c){
function _(r,i,o,f,t){var s,u,v,a,e,n;if(e=r-o,r<=0||e<=0)return NaN;if(r===1||t===0)return 0;for(t<0?s=(1-r)*t:s=0,u=0,v=0,n=0;n<r;n++)a=f[s]-i,u+=a*a,v+=a,s+=t;return u/e-v/r*(v/e)}c.exports=_
});var y=q(function(B,x){
function E(r,i,o,f,t,s){var u,v,a,e,n,p;if(n=r-o,r<=0||n<=0)return NaN;if(r===1||t===0)return 0;for(u=s,v=0,a=0,p=0;p<r;p++)e=f[u]-i,v+=e*e,a+=e,u+=t;return v/n-a/r*(a/n)}x.exports=E
});var l=q(function(C,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=d(),b=y();O(M,"ndarray",b);j.exports=M
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=l(),m,R=h(g(__dirname,"./native.js"));k(R)?m=w:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
