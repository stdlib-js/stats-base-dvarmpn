"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=d(function(C,m){
function _(r,e,v,u,a,R){var s,o,i,n,t,q;if(t=r-v,r<=0||t<=0)return NaN;if(r===1||a===0)return 0;for(s=R,o=0,i=0,q=0;q<r;q++)n=u[s]-e,o+=n*n,i+=n,s+=a;return o/t-i/r*(i/t)}m.exports=_
});var x=d(function(D,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=p();function b(r,e,v,u,a){return O(r,e,v,u,a,E(r,a))}c.exports=b
});var l=d(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=x(),h=p();g(y,"ndarray",h);j.exports=y
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=l(),f,M=w(k(__dirname,"./native.js"));z(M)?f=A:f=M;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
