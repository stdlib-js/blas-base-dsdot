// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e,r,t,o,n){var i,a,f,u,l;if(i=0,e<=0)return i;if(1===t&&1===n){if((u=e%5)>0)for(l=0;l<u;l++)i+=r[l]*o[l];if(e<5)return i;for(l=u;l<e;l+=5)i+=r[l]*o[l]+r[l+1]*o[l+1]+r[l+2]*o[l+2]+r[l+3]*o[l+3]+r[l+4]*o[l+4];return i}for(a=t<0?(1-e)*t:0,f=n<0?(1-e)*n:0,l=0;l<e;l++)i+=r[a]*o[f],a+=t,f+=n;return i}function _(e,r,t,o,n,i,a){var f,u,l,c,_;if(f=0,e<=0)return f;if(u=o,l=a,1===t&&1===i){if((c=e%5)>0)for(_=0;_<c;_++)f+=r[u]*n[l],u+=1,l+=1;if(e<5)return f;for(_=c;_<e;_+=5)f+=r[u]*n[l]+r[u+1]*n[l+1]+r[u+2]*n[l+2]+r[u+3]*n[l+3]+r[u+4]*n[l+4],u+=5,l+=5;return f}for(_=0;_<e;_++)f+=r[u]*n[l],u+=t,l+=i;return f}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dsdot={});
//# sourceMappingURL=index.js.map
