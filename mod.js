// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};function f(r,e,t,n,o){var a,i,u,l,f;if(a=0,r<=0)return a;if(1===t&&1===o){if((l=r%5)>0)for(f=0;f<l;f++)a+=e[f]*n[f];if(r<5)return a;for(f=l;f<r;f+=5)a+=e[f]*n[f]+e[f+1]*n[f+1]+e[f+2]*n[f+2]+e[f+3]*n[f+3]+e[f+4]*n[f+4];return a}for(i=t<0?(1-r)*t:0,u=o<0?(1-r)*o:0,f=0;f<r;f++)a+=e[i]*n[u],i+=t,u+=o;return a}function c(r,e,t,n,o,a,i){var u,l,f,c,_;if(u=0,r<=0)return u;if(l=n,f=i,1===t&&1===a){if((c=r%5)>0)for(_=0;_<c;_++)u+=e[l]*o[f],l+=1,f+=1;if(r<5)return u;for(_=c;_<r;_+=5)u+=e[l]*o[f]+e[l+1]*o[f+1]+e[l+2]*o[f+2]+e[l+3]*o[f+3]+e[l+4]*o[f+4],l+=5,f+=5;return u}for(_=0;_<r;_++)u+=e[l]*o[f],l+=t,f+=a;return u}e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:c});export{f as default,c as ndarray};
//# sourceMappingURL=mod.js.map