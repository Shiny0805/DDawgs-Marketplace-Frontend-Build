/*! For license information please see 4708.51c2027a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4708],{44708:(t,e,n)=>{n.d(e,{secp256k1:()=>M});var r=n(93466),i=n(2989);class o extends i.kb{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,i.GL)(this.buffer)}update(t){(0,r.Gg)(this);const{view:e,buffer:n,blockLen:o}=this,s=(t=(0,i.O0)(t)).length;for(let r=0;r<s;){const f=Math.min(o-this.pos,s-r);if(f!==o)n.set(t.subarray(r,r+f),this.pos),this.pos+=f,r+=f,this.pos===o&&(this.process(e,0),this.pos=0);else{const e=(0,i.GL)(t);for(;o<=s-r;r+=o)this.process(e,r)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){(0,r.Gg)(this),(0,r.J8)(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:o,isLE:s}=this;let{pos:f}=this;e[f++]=128,this.buffer.subarray(f).fill(0),this.padOffset>o-f&&(this.process(n,0),f=0);for(let r=f;r<o;r++)e[r]=0;!function(t,e,n,r){if("function"===typeof t.setBigUint64)return t.setBigUint64(e,n,r);const i=BigInt(32),o=BigInt(4294967295),s=Number(n>>i&o),f=Number(n&o),a=r?4:0,u=r?0:4;t.setUint32(e+a,s,r),t.setUint32(e+u,f,r)}(n,o-8,BigInt(8*this.length),s),this.process(n,0);const a=(0,i.GL)(t),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=u/4,c=this.get();if(h>c.length)throw new Error("_sha2: outputLen bigger than state");for(let r=0;r<h;r++)a.setUint32(4*r,c[r],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:i,destroyed:o,pos:s}=this;return t.length=r,t.pos=s,t.finished=i,t.destroyed=o,r%e&&t.buffer.set(n),t}}const s=(t,e,n)=>t&e^t&n^e&n,f=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),u=new Uint32Array(64);class h extends o{constructor(){super(64,32,8,!1),this.A=0|a[0],this.B=0|a[1],this.C=0|a[2],this.D=0|a[3],this.E=0|a[4],this.F=0|a[5],this.G=0|a[6],this.H=0|a[7]}get(){const{A:t,B:e,C:n,D:r,E:i,F:o,G:s,H:f}=this;return[t,e,n,r,i,o,s,f]}set(t,e,n,r,i,o,s,f){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|f}process(t,e){for(let i=0;i<16;i++,e+=4)u[i]=t.getUint32(e,!1);for(let s=16;s<64;s++){const t=u[s-15],e=u[s-2],n=(0,i.np)(t,7)^(0,i.np)(t,18)^t>>>3,r=(0,i.np)(e,17)^(0,i.np)(e,19)^e>>>10;u[s]=r+u[s-7]+n+u[s-16]|0}let{A:n,B:r,C:o,D:a,E:h,F:c,G:l,H:d}=this;for(let p=0;p<64;p++){const t=d+((0,i.np)(h,6)^(0,i.np)(h,11)^(0,i.np)(h,25))+((g=h)&c^~g&l)+f[p]+u[p]|0,e=((0,i.np)(n,2)^(0,i.np)(n,13)^(0,i.np)(n,22))+s(n,r,o)|0;d=l,l=c,c=h,h=a+t|0,a=o,o=r,r=n,n=t+e|0}var g;n=n+this.A|0,r=r+this.B|0,o=o+this.C|0,a=a+this.D|0,h=h+this.E|0,c=c+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(n,r,o,a,h,c,l,d)}roundClean(){u.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const c=(0,i.hE)((()=>new h));var l=n(71316);const d=BigInt(0),g=BigInt(1),p=BigInt(2),w=BigInt(3),y=BigInt(4),m=BigInt(5),E=BigInt(8);BigInt(9),BigInt(16);function b(t,e){const n=t%e;return n>=d?n:e+n}function B(t,e,n){if(n<=d||e<d)throw new Error("Expected power/modulo > 0");if(n===g)return d;let r=g;for(;e>d;)e&g&&(r=r*t%n),t=t*t%n,e>>=g;return r}function v(t,e,n){let r=t;for(;e-- >d;)r*=r,r%=n;return r}function I(t,e){if(t===d||e<=d)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=b(t,e),r=e,i=d,o=g,s=g,f=d;for(;n!==d;){const t=r/n,e=r%n,a=i-s*t,u=o-f*t;r=n,n=e,i=s,o=f,s=a,f=u}if(r!==g)throw new Error("invert: does not exist");return b(i,e)}function x(t){if(t%y===w){const e=(t+g)/y;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}if(t%E===m){const e=(t-m)/E;return function(t,n){const r=t.mul(n,p),i=t.pow(r,e),o=t.mul(n,i),s=t.mul(t.mul(o,p),i),f=t.mul(o,t.sub(s,t.ONE));if(!t.eql(t.sqr(f),n))throw new Error("Cannot find square root");return f}}return function(t){const e=(t-g)/p;let n,r,i;for(n=t-g,r=0;n%p===d;n/=p,r++);for(i=p;i<t&&B(i,e,t)!==t-g;i++);if(1===r){const e=(t+g)/y;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}const o=(n+g)/p;return function(t,s){if(t.pow(s,e)===t.neg(t.ONE))throw new Error("Cannot find square root");let f=r,a=t.pow(t.mul(t.ONE,i),n),u=t.pow(s,o),h=t.pow(s,n);for(;!t.eql(h,t.ONE);){if(t.eql(h,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(h);e<f&&!t.eql(r,t.ONE);e++)r=t.sqr(r);const n=t.pow(a,g<<BigInt(f-e-1));a=t.sqr(n),u=t.mul(u,n),h=t.mul(h,a),f=e}return u}}(t)}const S=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function O(t,e){const n=void 0!==e?e:t.toString(2).length;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function A(t){if("bigint"!==typeof t)throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function q(t){const e=A(t);return e+Math.ceil(e/2)}class R extends i.kb{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,(0,r.vp)(t);const n=(0,i.O0)(e);if(this.iHash=t.create(),"function"!==typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(n.length>o?t.create().update(n).digest():n);for(let r=0;r<s.length;r++)s[r]^=54;this.iHash.update(s),this.oHash=t.create();for(let r=0;r<s.length;r++)s[r]^=106;this.oHash.update(s),s.fill(0)}update(t){return(0,r.Gg)(this),this.iHash.update(t),this}digestInto(t){(0,r.Gg)(this),(0,r.aI)(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:i,blockLen:o,outputLen:s}=this;return t.finished=r,t.destroyed=i,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const L=(t,e,n)=>new R(t,e).update(n).digest();L.create=(t,e)=>new R(t,e);const N=BigInt(0),H=BigInt(1);function F(t){return function(t){const e=S.reduce(((t,e)=>(t[e]="function",t)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});(0,l.FF)(t,e)}(t.Fp),(0,l.FF)(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...O(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}const{bytesToNumberBE:k,hexToBytes:T}=l,z={Err:class extends Error{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}},_parseInt(t){const{Err:e}=z;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(128&r[0])throw new e("Invalid signature integer: negative");if(0===r[0]&&!(128&r[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:k(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=z,n="string"===typeof t?T(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||48!=n[0])throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:i,l:o}=z._parseInt(n.subarray(2)),{d:s,l:f}=z._parseInt(o);if(f.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:s}},hexFromSig(t){const e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,n=t=>{const e=t.toString(16);return 1&e.length?`0${e}`:e},r=e(n(t.s)),i=e(n(t.r)),o=r.length/2,s=i.length/2,f=n(o),a=n(s);return`30${n(s+o+4)}02${a}${i}02${f}${r}`}},C=BigInt(0),P=BigInt(1),U=(BigInt(2),BigInt(3));BigInt(4);function Z(t){const e=function(t){const e=F(t);l.FF(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:i}=e;if(n){if(!r.eql(i,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!==typeof n||"bigint"!==typeof n.beta||"function"!==typeof n.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:n}=e,r=e.toBytes||((t,e,r)=>{const i=e.toAffine();return l.eV(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),i=e.fromBytes||(t=>{const e=t.subarray(1);return{x:n.fromBytes(e.subarray(0,n.BYTES)),y:n.fromBytes(e.subarray(n.BYTES,2*n.BYTES))}});function o(t){const{a:r,b:i}=e,o=n.sqr(t),s=n.mul(o,t);return n.add(n.add(s,n.mul(t,r)),i)}if(!n.eql(n.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function s(t){return"bigint"===typeof t&&C<t&&t<e.n}function f(t){if(!s(t))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function a(t){const{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:o}=e;if(n&&"bigint"!==typeof t){if(t instanceof Uint8Array&&(t=l.ci(t)),"string"!==typeof t||!n.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*r,"0")}let s;try{s="bigint"===typeof t?t:l.bytesToNumberBE((0,l.ql)("private key",t,r))}catch(a){throw new Error(`private key must be ${r} bytes, hex or bigint, not ${typeof t}`)}return i&&(s=b(s,o)),f(s),s}const u=new Map;function h(t){if(!(t instanceof c))throw new Error("ProjectivePoint expected")}class c{constructor(t,e,r){if(this.px=t,this.py=e,this.pz=r,null==t||!n.isValid(t))throw new Error("x required");if(null==e||!n.isValid(e))throw new Error("y required");if(null==r||!n.isValid(r))throw new Error("z required")}static fromAffine(t){const{x:e,y:r}=t||{};if(!t||!n.isValid(e)||!n.isValid(r))throw new Error("invalid affine point");if(t instanceof c)throw new Error("projective point not allowed");const i=t=>n.eql(t,n.ZERO);return i(e)&&i(r)?c.ZERO:new c(e,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){const e=n.invertBatch(t.map((t=>t.pz)));return t.map(((t,n)=>t.toAffine(e[n]))).map(c.fromAffine)}static fromHex(t){const e=c.fromAffine(i((0,l.ql)("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return c.BASE.multiply(a(t))}_setWindowSize(t){this._WINDOW_SIZE=t,u.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!n.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:t,y:r}=this.toAffine();if(!n.isValid(t)||!n.isValid(r))throw new Error("bad point: x or y not FE");const i=n.sqr(r),s=o(t);if(!n.eql(i,s))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:t}=this.toAffine();if(n.isOdd)return!n.isOdd(t);throw new Error("Field doesn't support isOdd")}equals(t){h(t);const{px:e,py:r,pz:i}=this,{px:o,py:s,pz:f}=t,a=n.eql(n.mul(e,f),n.mul(o,i)),u=n.eql(n.mul(r,f),n.mul(s,i));return a&&u}negate(){return new c(this.px,n.neg(this.py),this.pz)}double(){const{a:t,b:r}=e,i=n.mul(r,U),{px:o,py:s,pz:f}=this;let a=n.ZERO,u=n.ZERO,h=n.ZERO,l=n.mul(o,o),d=n.mul(s,s),g=n.mul(f,f),p=n.mul(o,s);return p=n.add(p,p),h=n.mul(o,f),h=n.add(h,h),a=n.mul(t,h),u=n.mul(i,g),u=n.add(a,u),a=n.sub(d,u),u=n.add(d,u),u=n.mul(a,u),a=n.mul(p,a),h=n.mul(i,h),g=n.mul(t,g),p=n.sub(l,g),p=n.mul(t,p),p=n.add(p,h),h=n.add(l,l),l=n.add(h,l),l=n.add(l,g),l=n.mul(l,p),u=n.add(u,l),g=n.mul(s,f),g=n.add(g,g),l=n.mul(g,p),a=n.sub(a,l),h=n.mul(g,d),h=n.add(h,h),h=n.add(h,h),new c(a,u,h)}add(t){h(t);const{px:r,py:i,pz:o}=this,{px:s,py:f,pz:a}=t;let u=n.ZERO,l=n.ZERO,d=n.ZERO;const g=e.a,p=n.mul(e.b,U);let w=n.mul(r,s),y=n.mul(i,f),m=n.mul(o,a),E=n.add(r,i),b=n.add(s,f);E=n.mul(E,b),b=n.add(w,y),E=n.sub(E,b),b=n.add(r,o);let B=n.add(s,a);return b=n.mul(b,B),B=n.add(w,m),b=n.sub(b,B),B=n.add(i,o),u=n.add(f,a),B=n.mul(B,u),u=n.add(y,m),B=n.sub(B,u),d=n.mul(g,b),u=n.mul(p,m),d=n.add(u,d),u=n.sub(y,d),d=n.add(y,d),l=n.mul(u,d),y=n.add(w,w),y=n.add(y,w),m=n.mul(g,m),b=n.mul(p,b),y=n.add(y,m),m=n.sub(w,m),m=n.mul(g,m),b=n.add(b,m),w=n.mul(y,b),l=n.add(l,w),w=n.mul(B,b),u=n.mul(E,u),u=n.sub(u,w),w=n.mul(E,y),d=n.mul(B,d),d=n.add(d,w),new c(u,l,d)}subtract(t){return this.add(t.negate())}is0(){return this.equals(c.ZERO)}wNAF(t){return g.wNAFCached(this,u,t,(t=>{const e=n.invertBatch(t.map((t=>t.pz)));return t.map(((t,n)=>t.toAffine(e[n]))).map(c.fromAffine)}))}multiplyUnsafe(t){const r=c.ZERO;if(t===C)return r;if(f(t),t===P)return this;const{endo:i}=e;if(!i)return g.unsafeLadder(this,t);let{k1neg:o,k1:s,k2neg:a,k2:u}=i.splitScalar(t),h=r,l=r,d=this;for(;s>C||u>C;)s&P&&(h=h.add(d)),u&P&&(l=l.add(d)),d=d.double(),s>>=P,u>>=P;return o&&(h=h.negate()),a&&(l=l.negate()),l=new c(n.mul(l.px,i.beta),l.py,l.pz),h.add(l)}multiply(t){f(t);let r,i,o=t;const{endo:s}=e;if(s){const{k1neg:t,k1:e,k2neg:f,k2:a}=s.splitScalar(o);let{p:u,f:h}=this.wNAF(e),{p:l,f:d}=this.wNAF(a);u=g.constTimeNegate(t,u),l=g.constTimeNegate(f,l),l=new c(n.mul(l.px,s.beta),l.py,l.pz),r=u.add(l),i=h.add(d)}else{const{p:t,f:e}=this.wNAF(o);r=t,i=e}return c.normalizeZ([r,i])[0]}multiplyAndAddUnsafe(t,e,n){const r=c.BASE,i=(t,e)=>e!==C&&e!==P&&t.equals(r)?t.multiply(e):t.multiplyUnsafe(e),o=i(this,e).add(i(t,n));return o.is0()?void 0:o}toAffine(t){const{px:e,py:r,pz:i}=this,o=this.is0();null==t&&(t=o?n.ONE:n.inv(i));const s=n.mul(e,t),f=n.mul(r,t),a=n.mul(i,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(a,n.ONE))throw new Error("invZ was invalid");return{x:s,y:f}}isTorsionFree(){const{h:t,isTorsionFree:n}=e;if(t===P)return!0;if(n)return n(c,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:t,clearCofactor:n}=e;return t===P?this:n?n(c,this):this.multiplyUnsafe(e.h)}toRawBytes(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.assertValidity(),r(c,this,t)}toHex(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return l.ci(this.toRawBytes(t))}}c.BASE=new c(e.Gx,e.Gy,n.ONE),c.ZERO=new c(n.ZERO,n.ONE,n.ZERO);const d=e.nBitLength,g=function(t,e){const n=(t,e)=>{const n=e.negate();return t?n:e},r=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:n,unsafeLadder(e,n){let r=t.ZERO,i=e;for(;n>N;)n&H&&(r=r.add(i)),i=i.double(),n>>=H;return r},precomputeWindow(t,e){const{windows:n,windowSize:i}=r(e),o=[];let s=t,f=s;for(let r=0;r<n;r++){f=s,o.push(f);for(let t=1;t<i;t++)f=f.add(s),o.push(f);s=f.double()}return o},wNAF(e,i,o){const{windows:s,windowSize:f}=r(e);let a=t.ZERO,u=t.BASE;const h=BigInt(2**e-1),c=2**e,l=BigInt(e);for(let t=0;t<s;t++){const e=t*f;let r=Number(o&h);o>>=l,r>f&&(r-=c,o+=H);const s=e,d=e+Math.abs(r)-1,g=t%2!==0,p=r<0;0===r?u=u.add(n(g,i[s])):a=a.add(n(p,i[d]))}return{p:a,f:u}},wNAFCached(t,e,n,r){const i=t._WINDOW_SIZE||1;let o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,r(o))),this.wNAF(i,o,n)}}}(c,e.endo?Math.ceil(d/2):d);return{CURVE:e,ProjectivePoint:c,normPrivateKeyToScalar:a,weierstrassEquation:o,isWithinCurveOrder:s}}function V(t){const e=function(t){const e=F(t);return l.FF(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:n,n:r}=e,i=n.BYTES+1,o=2*n.BYTES+1;function s(t){return b(t,r)}function f(t){return I(t,r)}const{ProjectivePoint:a,normPrivateKeyToScalar:u,weierstrassEquation:h,isWithinCurveOrder:c}=Z({...e,toBytes(t,e,r){const i=e.toAffine(),o=n.toBytes(i.x),s=l.eV;return r?s(Uint8Array.from([e.hasEvenY()?2:3]),o):s(Uint8Array.from([4]),o,n.toBytes(i.y))},fromBytes(t){const e=t.length,r=t[0],s=t.subarray(1);if(e!==i||2!==r&&3!==r){if(e===o&&4===r){return{x:n.fromBytes(s.subarray(0,n.BYTES)),y:n.fromBytes(s.subarray(n.BYTES,2*n.BYTES))}}throw new Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)}{const t=l.bytesToNumberBE(s);if(!(C<(f=t)&&f<n.ORDER))throw new Error("Point is not on curve");const e=h(t);let i=n.sqrt(e);return 1===(1&r)!==((i&P)===P)&&(i=n.neg(i)),{x:t,y:i}}var f}}),d=t=>l.ci(l.tL(t,e.nByteLength));function p(t){return t>r>>P}const w=(t,e,n)=>l.bytesToNumberBE(t.slice(e,n));class y{constructor(t,e,n){this.r=t,this.s=e,this.recovery=n,this.assertValidity()}static fromCompact(t){const n=e.nByteLength;return t=(0,l.ql)("compactSignature",t,2*n),new y(w(t,0,n),w(t,n,2*n))}static fromDER(t){const{r:e,s:n}=z.toSig((0,l.ql)("DER",t));return new y(e,n)}assertValidity(){if(!c(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!c(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new y(this.r,this.s,t)}recoverPublicKey(t){const{r:r,s:i,recovery:o}=this,u=v((0,l.ql)("msgHash",t));if(null==o||![0,1,2,3].includes(o))throw new Error("recovery id invalid");const h=2===o||3===o?r+e.n:r;if(h>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const c=0===(1&o)?"02":"03",g=a.fromHex(c+d(h)),p=f(h),w=s(-u*p),y=s(i*p),m=a.BASE.multiplyAndAddUnsafe(g,w,y);if(!m)throw new Error("point at infinify");return m.assertValidity(),m}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new y(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return l.hexToBytes(this.toDERHex())}toDERHex(){return z.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return l.hexToBytes(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const m={isValidPrivateKey(t){try{return u(t),!0}catch(e){return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const t=q(e.n);return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=t.length,i=A(e),o=q(e);if(r<16||r<o||r>1024)throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);const s=b(n?(0,l.bytesToNumberBE)(t):(0,l.ty)(t),e-g)+g;return n?(0,l.S5)(s,i):(0,l.tL)(s,i)}(e.randomBytes(t),e.n)},precompute(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.BASE;return e._setWindowSize(t),e.multiply(BigInt(3)),e}};function E(t){const e=t instanceof Uint8Array,n="string"===typeof t,r=(e||n)&&t.length;return e?r===i||r===o:n?r===2*i||r===2*o:t instanceof a}const B=e.bits2int||function(t){const n=l.bytesToNumberBE(t),r=8*t.length-e.nBitLength;return r>0?n>>BigInt(r):n},v=e.bits2int_modN||function(t){return s(B(t))},x=l.dQ(e.nBitLength);function S(t){if("bigint"!==typeof t)throw new Error("bigint expected");if(!(C<=t&&t<x))throw new Error(`bigint expected < 2^${e.nBitLength}`);return l.tL(t,e.nByteLength)}function O(t,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R;if(["recovered","canonical"].some((t=>t in i)))throw new Error("sign() legacy options not supported");const{hash:o,randomBytes:h}=e;let{lowS:d,prehash:g,extraEntropy:w}=i;null==d&&(d=!0),t=(0,l.ql)("msgHash",t),g&&(t=(0,l.ql)("prehashed msgHash",o(t)));const m=v(t),E=u(r),b=[S(E),S(m)];if(null!=w){const t=!0===w?h(n.BYTES):w;b.push((0,l.ql)("extraEntropy",t))}const I=l.eV(...b),x=m;return{seed:I,k2sig:function(t){const e=B(t);if(!c(e))return;const n=f(e),r=a.BASE.multiply(e).toAffine(),i=s(r.x);if(i===C)return;const o=s(n*s(x+i*E));if(o===C)return;let u=(r.x===i?0:2)|Number(r.y&P),h=o;return d&&p(o)&&(h=function(t){return p(t)?s(-t):t}(o),u^=1),new y(i,h,u)}}}const R={lowS:e.lowS,prehash:!1},L={lowS:e.lowS,prehash:!1};return a.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return a.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(E(t))throw new Error("first arg must be private key");if(!E(e))throw new Error("second arg must be public key");return a.fromHex(e).multiply(u(t)).toRawBytes(n)},sign:function(t,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R;const{seed:i,k2sig:o}=O(t,n,r),s=e;return l.n$(s.hash.outputLen,s.nByteLength,s.hmac)(i,o)},verify:function(t,n,r){var i;let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:L;const u=t;if(n=(0,l.ql)("msgHash",n),r=(0,l.ql)("publicKey",r),"strict"in o)throw new Error("options.strict was renamed to lowS");const{lowS:h,prehash:c}=o;let d,g;try{if("string"===typeof u||u instanceof Uint8Array)try{d=y.fromDER(u)}catch(x){if(!(x instanceof z.Err))throw x;d=y.fromCompact(u)}else{if("object"!==typeof u||"bigint"!==typeof u.r||"bigint"!==typeof u.s)throw new Error("PARSE");{const{r:t,s:e}=u;d=new y(t,e)}}g=a.fromHex(r)}catch(S){if("PARSE"===S.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(h&&d.hasHighS())return!1;c&&(n=e.hash(n));const{r:p,s:w}=d,m=v(n),E=f(w),b=s(m*E),B=s(p*E),I=null===(i=a.BASE.multiplyAndAddUnsafe(g,b,B))||void 0===i?void 0:i.toAffine();return!!I&&s(I.x)===p},ProjectivePoint:a,Signature:y,utils:m}}function G(t){return{hash:t,hmac:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return L(t,e,(0,i.eV)(...r))},randomBytes:i.O6}}const $=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),D=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),_=BigInt(1),K=BigInt(2),j=(t,e)=>(t+e/K)/e;function Y(t){const e=$,n=BigInt(3),r=BigInt(6),i=BigInt(11),o=BigInt(22),s=BigInt(23),f=BigInt(44),a=BigInt(88),u=t*t*t%e,h=u*u*t%e,c=v(h,n,e)*h%e,l=v(c,n,e)*h%e,d=v(l,K,e)*u%e,g=v(d,i,e)*d%e,p=v(g,o,e)*g%e,w=v(p,f,e)*p%e,y=v(w,a,e)*w%e,m=v(y,f,e)*p%e,E=v(m,n,e)*h%e,b=v(E,s,e)*g%e,B=v(b,r,e)*u%e,I=v(B,K,e);if(!W.eql(W.sqr(I),t))throw new Error("Cannot find square root");return I}const W=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(t<=d)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:i,nByteLength:o}=O(t,e);if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");const s=x(t),f=Object.freeze({ORDER:t,BITS:i,BYTES:o,MASK:(0,l.dQ)(i),ZERO:d,ONE:g,create:e=>b(e,t),isValid:e=>{if("bigint"!==typeof e)throw new Error("Invalid field element: expected bigint, got "+typeof e);return d<=e&&e<t},is0:t=>t===d,isOdd:t=>(t&g)===g,neg:e=>b(-e,t),eql:(t,e)=>t===e,sqr:e=>b(e*e,t),add:(e,n)=>b(e+n,t),sub:(e,n)=>b(e-n,t),mul:(e,n)=>b(e*n,t),pow:(t,e)=>function(t,e,n){if(n<d)throw new Error("Expected power > 0");if(n===d)return t.ONE;if(n===g)return e;let r=t.ONE,i=e;for(;n>d;)n&g&&(r=t.mul(r,i)),i=t.sqr(i),n>>=g;return r}(f,t,e),div:(e,n)=>b(e*I(n,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>I(e,t),sqrt:r.sqrt||(t=>s(f,t)),invertBatch:t=>function(t,e){const n=new Array(e.length),r=e.reduce(((e,r,i)=>t.is0(r)?e:(n[i]=e,t.mul(e,r))),t.ONE),i=t.inv(r);return e.reduceRight(((e,r,i)=>t.is0(r)?e:(n[i]=t.mul(e,n[i]),t.mul(e,r))),i),n}(f,t),cmov:(t,e,n)=>n?e:t,toBytes:t=>n?(0,l.S5)(t,o):(0,l.tL)(t,o),fromBytes:t=>{if(t.length!==o)throw new Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);return n?(0,l.ty)(t):(0,l.bytesToNumberBE)(t)}});return Object.freeze(f)}($,void 0,void 0,{sqrt:Y}),M=function(t,e){const n=e=>V({...t,...G(e)});return Object.freeze({...n(e),create:n})}({a:BigInt(0),b:BigInt(7),Fp:W,n:D,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=D,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-_*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=n,s=BigInt("0x100000000000000000000000000000000"),f=j(o*t,e),a=j(-r*t,e);let u=b(t-f*n-a*i,e),h=b(-f*r-a*o,e);const c=u>s,l=h>s;if(c&&(u=e-u),l&&(h=e-h),u>s||h>s)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:c,k1:u,k2neg:l,k2:h}}}},c);BigInt(0);M.ProjectivePoint}}]);