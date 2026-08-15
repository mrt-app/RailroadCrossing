(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Nl=Object.defineProperty,Ol=(n,e,t)=>e in n?Nl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,V=(n,e,t)=>Ol(n,typeof e!="symbol"?e+"":e,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const cs="170",Fl=0,Us=1,zl=2,hs=1,Bl=2,oi=3,wi=0,Pt=1,li=2,Mi=0,hr=1,va=2,Ns=3,Os=4,kl=5,Oi=100,Hl=101,Vl=102,Gl=103,Wl=104,Xl=200,ql=201,jl=202,Yl=203,xa=204,Ma=205,Zl=206,Kl=207,Jl=208,$l=209,Ql=210,ec=211,tc=212,ic=213,rc=214,ya=0,Sa=1,wa=2,pr=3,Ta=4,Ea=5,ba=6,Aa=7,us=0,nc=1,ac=2,yi=0,jo=1,sc=2,oc=3,lc=4,cc=5,hc=6,uc=7,Yo=300,fr=301,mr=302,Ra=303,Ca=304,In=306,Pa=1e3,zi=1001,La=1002,Nt=1003,dc=1004,$r=1005,Jt=1006,Fn=1007,Bi=1008,ui=1009,Zo=1010,Ko=1011,Gr=1012,ds=1013,Hi=1014,$t=1015,jr=1016,ps=1017,fs=1018,gr=1020,Jo=35902,$o=1021,Qo=1022,qt=1023,el=1024,tl=1025,ur=1026,_r=1027,ms=1028,gs=1029,il=1030,_s=1031,vs=1033,Tn=33776,En=33777,bn=33778,An=33779,Ia=35840,Da=35841,Ua=35842,Na=35843,Oa=36196,Fa=37492,za=37496,Ba=37808,ka=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,ja=37816,Ya=37817,Za=37818,Ka=37819,Ja=37820,$a=37821,Rn=36492,Qa=36494,es=36495,rl=36283,ts=36284,is=36285,rs=36286,pc=3200,fc=3201,xs=0,mc=1,xi="",zt="srgb",xr="srgb-linear",Dn="linear",it="srgb",ji=7680,Fs=519,gc=512,_c=513,vc=514,nl=515,xc=516,Mc=517,yc=518,Sc=519,zs=35044,Bs="300 es",ci=2e3,Pn=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zn=Math.PI/180,ns=180/Math.PI;function yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function Bn(n,e,t){return(1-t)*n+t*e}function Cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,a,s,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],M=r[1],x=r[4],v=r[7],L=r[2],A=r[5],b=r[8];return a[0]=s*_+o*M+l*L,a[3]=s*p+o*x+l*A,a[6]=s*u+o*v+l*b,a[1]=c*_+h*M+d*L,a[4]=c*p+h*x+d*A,a[7]=c*u+h*v+d*b,a[2]=f*_+m*M+g*L,a[5]=f*p+m*x+g*A,a[8]=f*u+m*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,f=o*l-h*a,m=c*a-s*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*s)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kn.makeScale(e,t)),this}rotate(e){return this.premultiply(kn.makeRotation(-e)),this}translate(e,t){return this.premultiply(kn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kn=new ke;function al(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ln(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tc(){const n=Ln("canvas");return n.style.display="block",n}const ks={};function Fr(n){n in ks||(ks[n]=!0,console.warn(n))}function Ec(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function bc(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ac(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=hi(n.r),n.g=hi(n.g),n.b=hi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=dr(n.r),n.g=dr(n.g),n.b=dr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xi?Dn:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hs=[.64,.33,.3,.6,.15,.06],Vs=[.2126,.7152,.0722],Gs=[.3127,.329],Ws=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xs=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[xr]:{primaries:Hs,whitePoint:Gs,transfer:Dn,toXYZ:Ws,fromXYZ:Xs,luminanceCoefficients:Vs,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:Hs,whitePoint:Gs,transfer:it,toXYZ:Ws,fromXYZ:Xs,luminanceCoefficients:Vs,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Yi;class Rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Ln("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ln("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=hi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cc=0;class sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Hn(r[s].image)):a.push(Hn(r[s]))}else a=Hn(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Hn(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class bt extends Mr{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=zi,r=zi,a=Jt,s=Bi,o=qt,l=ui,c=bt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=yr(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Yo;bt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],f=s[9],m=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(f-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(f+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,M=(d+1)/2,x=(_+1)/2,v=(l+h)/4,L=(c+m)/4,A=(f+g)/4;return u>M&&u>x?u<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(u),r=v/i,a=L/i):M>x?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=v/r,a=A/r):x<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(x),i=L/a,r=A/a),this.set(i,r,a,t),this}let p=Math.sqrt((g-f)*(g-f)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(p)<.001&&(p=1),this.x=(g-f)/p,this.y=(c-m)/p,this.z=(h-l)/p,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends Mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Lc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ol extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ic extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=a[s+0],m=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*_,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,u*M);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L}const v=o*M;if(l=l*p+f*v,c=c*p+m*v,h=h*p+g*v,d=d*p+_*v,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[s],f=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(a/2),f=l(i/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=r+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vn.copy(this).projectOnVector(e),this.sub(Vn)}reflect(e){return this.sub(Vn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vn=new I,qs=new Yr;class Wi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ht):Ht.fromBufferAttribute(a,s),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),en.subVectors(this.max,Pr),Zi.subVectors(e.a,Pr),Ki.subVectors(e.b,Pr),Ji.subVectors(e.c,Pr),pi.subVectors(Ki,Zi),fi.subVectors(Ji,Ki),Ri.subVectors(Zi,Ji);let t=[0,-pi.z,pi.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,pi.z,0,-pi.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-pi.y,pi.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!Gn(t,Zi,Ki,Ji,en)||(t=[1,0,0,0,1,0,0,0,1],!Gn(t,Zi,Ki,Ji,en))?!1:(tn.crossVectors(pi,fi),t=[tn.x,tn.y,tn.z],Gn(t,Zi,Ki,Ji,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new I,new I,new I,new I,new I,new I,new I,new I],Ht=new I,Qr=new Wi,Zi=new I,Ki=new I,Ji=new I,pi=new I,fi=new I,Ri=new I,Pr=new I,en=new I,tn=new I,Ci=new I;function Gn(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Ci.fromArray(n,a);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dc=new Wi,Lr=new I,Wn=new I;class Zr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Wn)),this.expandByPoint(Lr.copy(e.center).sub(Wn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new I,Xn=new I,rn=new I,mi=new I,qn=new I,nn=new I,jn=new I;class ll{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xn.copy(e).add(t).multiplyScalar(.5),rn.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Xn);const a=e.distanceTo(t)*.5,s=-this.direction.dot(rn),o=mi.dot(this.direction),l=-mi.dot(rn),c=mi.lengthSq(),h=Math.abs(1-s*s);let d,f,m,g;if(h>0)if(d=s*l-o,f=s*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xn).addScaledVector(rn,f),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,a){qn.subVectors(t,e),nn.subVectors(i,e),jn.crossVectors(qn,nn);let s=this.direction.dot(jn),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(nn.crossVectors(mi,nn));if(l<0)return null;const c=o*this.direction.dot(qn.cross(mi));if(c<0||l+c>s)return null;const h=-o*mi.dot(jn);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,i,r,a,s,o,l,c,h,d,f,m,g,_,p){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,d,f,m,g,_,p)}set(e,t,i,r,a,s,o,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),a=1/$i.setFromMatrixColumn(e,1).length(),s=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*h,m=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-s*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*h,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=s*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Nc)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),gi.crossVectors(i,It),gi.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),gi.crossVectors(i,It)),gi.normalize(),an.crossVectors(It,gi),r[0]=gi.x,r[4]=an.x,r[8]=It.x,r[1]=gi.y,r[5]=an.y,r[9]=It.y,r[2]=gi.z,r[6]=an.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],M=i[3],x=i[7],v=i[11],L=i[15],A=r[0],b=r[4],R=r[8],w=r[12],y=r[1],P=r[5],F=r[9],B=r[13],W=r[2],$=r[6],j=r[10],ee=r[14],X=r[3],re=r[7],de=r[11],Re=r[15];return a[0]=s*A+o*y+l*W+c*X,a[4]=s*b+o*P+l*$+c*re,a[8]=s*R+o*F+l*j+c*de,a[12]=s*w+o*B+l*ee+c*Re,a[1]=h*A+d*y+f*W+m*X,a[5]=h*b+d*P+f*$+m*re,a[9]=h*R+d*F+f*j+m*de,a[13]=h*w+d*B+f*ee+m*Re,a[2]=g*A+_*y+p*W+u*X,a[6]=g*b+_*P+p*$+u*re,a[10]=g*R+_*F+p*j+u*de,a[14]=g*w+_*B+p*ee+u*Re,a[3]=M*A+x*y+v*W+L*X,a[7]=M*b+x*P+v*$+L*re,a[11]=M*R+x*F+v*j+L*de,a[15]=M*w+x*B+v*ee+L*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+a*l*d-r*c*d-a*o*f+i*c*f+r*o*m-i*l*m)+_*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*h-a*l*h)+p*(+t*c*d-t*o*m-a*s*d+i*s*m+a*o*h-i*c*h)+u*(-r*o*h-t*l*d+t*o*f+r*s*d-i*s*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],M=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,x=g*f*c-h*p*c-g*l*m+s*p*m+h*l*u-s*f*u,v=h*_*c-g*d*c+g*o*m-s*_*m-h*o*u+s*d*u,L=g*d*l-h*_*l-g*o*f+s*_*f+h*o*p-s*d*p,A=t*M+i*x+r*v+a*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=M*b,e[1]=(_*f*a-d*p*a-_*r*m+i*p*m+d*r*u-i*f*u)*b,e[2]=(o*p*a-_*l*a+_*r*c-i*p*c-o*r*u+i*l*u)*b,e[3]=(d*l*a-o*f*a-d*r*c+i*f*c+o*r*m-i*l*m)*b,e[4]=x*b,e[5]=(h*p*a-g*f*a+g*r*m-t*p*m-h*r*u+t*f*u)*b,e[6]=(g*l*a-s*p*a-g*r*c+t*p*c+s*r*u-t*l*u)*b,e[7]=(s*f*a-h*l*a+h*r*c-t*f*c-s*r*m+t*l*m)*b,e[8]=v*b,e[9]=(g*d*a-h*_*a-g*i*m+t*_*m+h*i*u-t*d*u)*b,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*u+t*o*u)*b,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*m-t*o*m)*b,e[12]=L*b,e[13]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*b,e[14]=(g*o*r-s*_*r-g*i*l+t*_*l+s*i*p-t*o*p)*b,e[15]=(s*d*r-h*o*r+h*i*l-t*d*l-s*i*f+t*o*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,f=a*c,m=a*h,g=a*d,_=s*h,p=s*d,u=o*d,M=l*c,x=l*h,v=l*d,L=i.x,A=i.y,b=i.z;return r[0]=(1-(_+u))*L,r[1]=(m+v)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-v)*A,r[5]=(1-(f+u))*A,r[6]=(p+M)*A,r[7]=0,r[8]=(g+x)*b,r[9]=(p-M)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=$i.set(r[0],r[1],r[2]).length();const s=$i.set(r[4],r[5],r[6]).length(),o=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const l=1/a,c=1/s,h=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=ci){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===ci)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Pn)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ci){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(s-a),f=(t+e)*c,m=(i+r)*h;let g,_;if(o===ci)g=(s+a)*d,_=-2*d;else if(o===Pn)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new I,Vt=new nt,Uc=new I(0,0,0),Nc=new I(1,1,1),gi=new I,an=new I,It=new I,js=new nt,Ys=new Yr;class Yt{constructor(e=0,t=0,i=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ys.setFromEuler(this),this.setFromQuaternion(Ys,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class Ms{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oc=0;const Zs=new I,Qi=new Yr,ni=new nt,sn=new I,Ir=new I,Fc=new I,zc=new Yr,Ks=new I(1,0,0),Js=new I(0,1,0),$s=new I(0,0,1),Qs={type:"added"},Bc={type:"removed"},er={type:"childadded",child:null},Yn={type:"childremoved",child:null};class xt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new I,t=new Yt,i=new Yr,r=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new ke}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Ks,e)}rotateY(e){return this.rotateOnAxis(Js,e)}rotateZ(e){return this.rotateOnAxis($s,e)}translateOnAxis(e,t){return Zs.copy(e).applyQuaternion(this.quaternion),this.position.add(Zs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ks,e)}translateY(e){return this.translateOnAxis(Js,e)}translateZ(e){return this.translateOnAxis($s,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sn.copy(e):sn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ir,sn,this.up):ni.lookAt(sn,Ir,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(ni),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qs),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qs),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Fc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new I,ai=new I,Zn=new I,si=new I,tr=new I,ir=new I,eo=new I,Kn=new I,Jn=new I,$n=new I,Qn=new rt,ea=new rt,ta=new rt;class Wt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Gt.subVectors(r,t),ai.subVectors(i,t),Zn.subVectors(e,t);const s=Gt.dot(Gt),o=Gt.dot(ai),l=Gt.dot(Zn),c=ai.dot(ai),h=ai.dot(Zn),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(s*h-o*l)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(s,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Qn.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qn.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Qn,a.x),s.addScaledVector(ea,a.y),s.addScaledVector(ta,a.z),s}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),ai.subVectors(e,t),Gt.cross(ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Gt.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;tr.subVectors(r,i),ir.subVectors(a,i),Kn.subVectors(e,i);const l=tr.dot(Kn),c=ir.dot(Kn);if(l<=0&&c<=0)return t.copy(i);Jn.subVectors(e,r);const h=tr.dot(Jn),d=ir.dot(Jn);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(tr,s);$n.subVectors(e,a);const m=tr.dot($n),g=ir.dot($n);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ir,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return eo.subVectors(a,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(eo,o);const u=1/(p+_+f);return s=_*u,o=f*u,t.copy(i).addScaledVector(tr,s).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},on={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=wc(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=ia(s,a,e+1/3),this.g=ia(s,a,e),this.b=ia(s,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=cl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Je.fromWorkingColorSpace(Et.copy(this),e),Math.round(St(Et.r*255,0,255))*65536+Math.round(St(Et.g*255,0,255))*256+Math.round(St(Et.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,a=Et.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=zt){Je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(on);const i=Bn(_i.h,on.h,t),r=Bn(_i.s,on.s,t),a=Bn(_i.l,on.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Xe;Xe.NAMES=cl;let kc=0;class Sr extends Mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=yr(),this.name="",this.blending=hr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=Ma,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ma&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wt extends Sr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,ln=new _e;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zs,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXY(t,ln.x,ln.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zs&&(e.usage=this.usage),e}}class hl extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ul extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hc=0;const Ft=new nt,ra=new xt,rr=new I,Dt=new Wi,Dr=new Wi,vt=new I;class Ot extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?ul:hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Dt.min,Dr.min),Dt.expandByPoint(vt),vt.addVectors(Dt.max,Dr.max),Dt.expandByPoint(vt)):(Dt.expandByPoint(Dr.min),Dt.expandByPoint(Dr.max))}Dt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)vt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),vt.add(rr)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,d=new I,f=new _e,m=new _e,g=new _e,_=new I,p=new I;function u(R,w,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),f.fromBufferAttribute(a,R),m.fromBufferAttribute(a,w),g.fromBufferAttribute(a,y),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[w].add(_),o[y].add(_),l[R].add(p),l[w].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,w=M.length;R<w;++R){const y=M[R],P=y.start,F=y.count;for(let B=P,W=P+F;B<W;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new I,v=new I,L=new I,A=new I;function b(R){L.fromBufferAttribute(r,R),A.copy(L);const w=o[R];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(A,w);const y=v.dot(l[R])<0?-1:1;s.setXYZW(R,x.x,x.y,x.z,y)}for(let R=0,w=M.length;R<w;++R){const y=M[R],P=y.start,F=y.count;for(let B=P,W=P+F;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,a=new I,s=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new jt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new nt,Pi=new ll,cn=new Zr,io=new I,hn=new I,un=new I,dn=new I,na=new I,pn=new I,ro=new I,fn=new I;class C extends xt{constructor(e=new Ot,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){pn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(na.fromBufferAttribute(d,e),s?pn.addScaledVector(na,h):pn.addScaledVector(na.sub(t),h))}t.add(pn)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(a),Pi.copy(e.ray).recast(e.near),!(cn.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(cn,io)===null||Pi.origin.distanceToSquared(io)>(e.far-e.near)**2))&&(to.copy(a).invert(),Pi.copy(e.ray).applyMatrix4(to),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=s[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,L=x;v<L;v+=3){const A=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);r=mn(this,u,e,i,c,h,d,A,b,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=o.getX(p),x=o.getX(p+1),v=o.getX(p+2);r=mn(this,s,e,i,c,h,d,M,x,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=s[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,L=x;v<L;v+=3){const A=v,b=v+1,R=v+2;r=mn(this,u,e,i,c,h,d,A,b,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=p,x=p+1,v=p+2;r=mn(this,s,e,i,c,h,d,M,x,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Vc(n,e,t,i,r,a,s,o){let l;if(e.side===Pt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===wi,o),l===null)return null;fn.copy(o),fn.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fn);return c<t.near||c>t.far?null:{distance:c,point:fn.clone(),object:n}}function mn(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,hn),n.getVertexPosition(l,un),n.getVertexPosition(c,dn);const h=Vc(n,e,t,i,hn,un,dn,ro);if(h){const d=new I;Wt.getBarycoord(ro,hn,un,dn,d),r&&(h.uv=Wt.getInterpolatedAttribute(r,o,l,c,d,new _e)),a&&(h.uv1=Wt.getInterpolatedAttribute(a,o,l,c,d,new _e)),s&&(h.normal=Wt.getInterpolatedAttribute(s,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Wt.getNormal(hn,un,dn,f.normal),h.face=f,h.barycoord=d}return h}class q extends Ot{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function g(_,p,u,M,x,v,L,A,b,R,w){const y=v/b,P=L/R,F=v/2,B=L/2,W=A/2,$=b+1,j=R+1;let ee=0,X=0;const re=new I;for(let de=0;de<j;de++){const Re=de*P-B;for(let Ie=0;Ie<$;Ie++){const Qe=Ie*y-F;re[_]=Qe*M,re[p]=Re*x,re[u]=W,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[u]=A>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ie/b),d.push(1-de/R),ee+=1}}for(let de=0;de<R;de++)for(let Re=0;Re<b;Re++){const Ie=f+Re+$*de,Qe=f+Re+$*(de+1),Y=f+(Re+1)+$*(de+1),ae=f+(Re+1)+$*de;l.push(Ie,Qe,ae),l.push(Qe,Y,ae),X+=6}o.addGroup(m,X,w),m+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=vr(n[t]);for(const r in i)e[r]=i[r]}return e}function Gc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Wc={clone:vr,merge:At};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Sr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Gc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pl extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,no=new _e,ao=new _e;class Ut extends pl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,no,ao),t.subVectors(ao,no)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ar=1;class jc extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(nr,ar,e,t);r.layers=this.layers,this.add(r);const a=new Ut(nr,ar,e,t);a.layers=this.layers,this.add(a);const s=new Ut(nr,ar,e,t);s.layers=this.layers,this.add(s);const o=new Ut(nr,ar,e,t);o.layers=this.layers,this.add(o);const l=new Ut(nr,ar,e,t);l.layers=this.layers,this.add(l);const c=new Ut(nr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fl extends bt{constructor(e,t,i,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yc extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),a=new Ti({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Mi});a.uniforms.tEquirect.value=t;const s=new C(r,a),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Jt),new jc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const aa=new I,Zc=new I,Kc=new ke;class Ui{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(Zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kc.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Zr,gn=new I;class ys{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,a=new Ui,s=new Ui){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],M=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-a,f-c,p-m,v-u).normalize(),i[1].setComponents(l+a,f+c,p+m,v+u).normalize(),i[2].setComponents(l+s,f+h,p+g,v+M).normalize(),i[3].setComponents(l-s,f-h,p-g,v-M).normalize(),i[4].setComponents(l-o,f-d,p-_,v-x).normalize(),t===ci)i[5].setComponents(l+o,f+d,p+_,v+x).normalize();else if(t===Pn)i[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gn.x=r.normal.x>0?e.max.x:e.min.x,gn.y=r.normal.y>0?e.max.y:e.min.y,gn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ml(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Jc(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Ze extends Ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const M=u*f-s;for(let x=0;x<c;x++){const v=x*d-a;g.push(v,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){const x=M+c*u,v=M+c*(u+1),L=M+1+c*(u+1),A=M+1+c*u;m.push(x,v,A),m.push(v,L,A)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.width,e.height,e.widthSegments,e.heightSegments)}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:$c,alphahash_pars_fragment:Qc,alphamap_fragment:eh,alphamap_pars_fragment:th,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:nh,aomap_pars_fragment:ah,batching_pars_vertex:sh,batching_vertex:oh,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:hh,iridescence_fragment:uh,bumpmap_pars_fragment:dh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:_h,color_pars_fragment:vh,color_pars_vertex:xh,color_vertex:Mh,common:yh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:wh,displacementmap_pars_vertex:Th,displacementmap_vertex:Eh,emissivemap_fragment:bh,emissivemap_pars_fragment:Ah,colorspace_fragment:Rh,colorspace_pars_fragment:Ch,envmap_fragment:Ph,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Ih,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Wh,envmap_vertex:Uh,fog_vertex:Nh,fog_pars_vertex:Oh,fog_fragment:Fh,fog_pars_fragment:zh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:kh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Vh,lights_pars_begin:Gh,lights_toon_fragment:Xh,lights_toon_pars_fragment:qh,lights_phong_fragment:jh,lights_phong_pars_fragment:Yh,lights_physical_fragment:Zh,lights_physical_pars_fragment:Kh,lights_fragment_begin:Jh,lights_fragment_maps:$h,lights_fragment_end:Qh,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:tu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:nu,map_pars_fragment:au,map_particle_fragment:su,map_particle_pars_fragment:ou,metalnessmap_fragment:lu,metalnessmap_pars_fragment:cu,morphinstance_vertex:hu,morphcolor_vertex:uu,morphnormal_vertex:du,morphtarget_pars_vertex:pu,morphtarget_vertex:fu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:_u,normal_pars_vertex:vu,normal_vertex:xu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Tu,opaque_fragment:Eu,packing:bu,premultiplied_alpha_fragment:Au,project_vertex:Ru,dithering_fragment:Cu,dithering_pars_fragment:Pu,roughnessmap_fragment:Lu,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Uu,shadowmap_vertex:Nu,shadowmask_pars_fragment:Ou,skinbase_vertex:Fu,skinning_pars_vertex:zu,skinning_vertex:Bu,skinnormal_vertex:ku,specularmap_fragment:Hu,specularmap_pars_fragment:Vu,tonemapping_fragment:Gu,tonemapping_pars_fragment:Wu,transmission_fragment:Xu,transmission_pars_fragment:qu,uv_pars_fragment:ju,uv_pars_vertex:Yu,uv_vertex:Zu,worldpos_vertex:Ku,background_vert:Ju,background_frag:$u,backgroundCube_vert:Qu,backgroundCube_frag:ed,cube_vert:td,cube_frag:id,depth_vert:rd,depth_frag:nd,distanceRGBA_vert:ad,distanceRGBA_frag:sd,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:hd,meshbasic_vert:ud,meshbasic_frag:dd,meshlambert_vert:pd,meshlambert_frag:fd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:vd,meshphong_vert:xd,meshphong_frag:Md,meshphysical_vert:yd,meshphysical_frag:Sd,meshtoon_vert:wd,meshtoon_frag:Td,points_vert:Ed,points_frag:bd,shadow_vert:Ad,shadow_frag:Rd,sprite_vert:Cd,sprite_frag:Pd},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Kt={basic:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:At([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:At([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:At([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:At([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:At([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:At([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:At([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:At([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Kt.physical={uniforms:At([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const _n={r:0,b:0,g:0},Ii=new Yt,Ld=new nt;function Id(n,e,t,i,r,a,s){const o=new Xe(0);let l=a===!0?0:1,c,h,d=null,f=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?u(o,l):v&&v.isColor&&(u(v,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===In)?(h===void 0&&(h=new C(new q(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:vr(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ii.copy(x.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ld.makeRotationFromEuler(Ii)),h.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new C(new Ze(2,2),new Ti({name:"BackgroundMaterial",uniforms:vr(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,x){M.getRGB(_n,dl(n)),i.buffers.color.setClear(_n.r,_n.g,_n.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:_,addToRenderList:p}}function Dd(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(y,P,F,B,W){let $=!1;const j=d(B,F,P);a!==j&&(a=j,c(a.object)),$=m(y,B,F,W),$&&g(y,B,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,v(y,P,F,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,P,F){const B=F.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let j=$[B];return j===void 0&&(j=f(l()),$[B]=j),j}function f(y){const P=[],F=[],B=[];for(let W=0;W<t;W++)P[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,P,F,B){const W=a.attributes,$=P.attributes;let j=0;const ee=F.getAttributes();for(const X in ee)if(ee[X].location>=0){const re=W[X];let de=$[X];if(de===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;j++}return a.attributesNum!==j||a.index!==B}function g(y,P,F,B){const W={},$=P.attributes;let j=0;const ee=F.getAttributes();for(const X in ee)if(ee[X].location>=0){let re=$[X];re===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),W[X]=de,j++}a.attributes=W,a.attributesNum=j,a.index=B}function _(){const y=a.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function p(y){u(y,0)}function u(y,P){const F=a.newAttributes,B=a.enabledAttributes,W=a.attributeDivisors;F[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),W[y]!==P&&(n.vertexAttribDivisor(y,P),W[y]=P)}function M(){const y=a.newAttributes,P=a.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==y[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function x(y,P,F,B,W,$,j){j===!0?n.vertexAttribIPointer(y,P,F,W,$):n.vertexAttribPointer(y,P,F,B,W,$)}function v(y,P,F,B){_();const W=B.attributes,$=F.getAttributes(),j=P.defaultAttributeValues;for(const ee in $){const X=$[ee];if(X.location>=0){let re=W[ee];if(re===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const de=re.normalized,Re=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;const Qe=Ie.buffer,Y=Ie.type,ae=Ie.bytesPerElement,xe=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===ds;if(re.isInterleavedBufferAttribute){const he=re.data,be=he.stride,Le=re.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<X.locationSize;Ve++)u(X.location+Ve,he.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<X.locationSize;Ve++)p(X.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ve=0;Ve<X.locationSize;Ve++)x(X.location+Ve,Re/X.locationSize,Y,de,be*ae,(Le+Re/X.locationSize*Ve)*ae,xe)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)u(X.location+he,re.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<X.locationSize;he++)p(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let he=0;he<X.locationSize;he++)x(X.location+he,Re/X.locationSize,Y,de,Re*ae,Re/X.locationSize*he*ae,xe)}}else if(j!==void 0){const de=j[ee];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(X.location,de);break;case 3:n.vertexAttrib3fv(X.location,de);break;case 4:n.vertexAttrib4fv(X.location,de);break;default:n.vertexAttrib1fv(X.location,de)}}}}M()}function L(){R();for(const y in i){const P=i[y];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete i[y.id]}function b(y){for(const P in i){const F=i[P];if(F[y.id]===void 0)continue;const B=F[y.id];for(const W in B)h(B[W].object),delete B[W];delete F[y.id]}}function R(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Ud(n,e,t){let i;function r(c){i=c}function a(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];t.update(f,i,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nd(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==qt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ui&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==$t&&!R)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:A}}function Od(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Ui,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||a&&!p)a?h(null):c();else{const M=a?0:i,x=M*4;let v=u.clippingState||null;l.value=v,v=h(g,f,x,m);for(let L=0;L!==x;++L)v[L]=t[L];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,v=m;x!==_;++x,v+=4)s.copy(d[x]).applyMatrix4(M,o),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Fd(n){let e=new WeakMap;function t(s,o){return o===Ra?s.mapping=fr:o===Ca&&(s.mapping=mr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ra||o===Ca)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Yc(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class gl extends pl{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,so=[.125,.215,.35,.446,.526,.582],Fi=20,sa=new gl,oo=new Xe;let oa=null,la=0,ca=0,ha=!1;const Ni=(1+Math.sqrt(5))/2,sr=1/Ni,lo=[new I(-Ni,sr,0),new I(Ni,sr,0),new I(-sr,0,Ni),new I(sr,0,Ni),new I(0,Ni,-sr),new I(0,Ni,sr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ha,e.scissorTest=!1,vn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:jr,format:qt,colorSpace:xr,depthBuffer:!1},r=ho(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(a)),this._blurMaterial=Bd(a,e,t)}return r}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,r){const a=new Ut(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(oo),l.toneMapping=yi,l.autoClear=!1;const d=new wt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),f=new C(new q,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(oo),m=!0);for(let _=0;_<6;_++){const p=_%3;p===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):p===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const u=this._cubeSize;vn(r,p*u,_>2?u:0,u,u),l.setRenderTarget(r),m&&l.render(f,a),l.render(e,a)}f.geometry.dispose(),f.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new C(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;vn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=lo[(r-a-1)%lo.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new C(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),_=a/g,p=isFinite(a)?1+Math.floor(h*_):Fi;p>Fi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const u=[];let M=0;for(let b=0;b<Fi;++b){const R=b/_,w=Math.exp(-R*R/2);u.push(w),b===0?M+=w:b<p&&(M+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[r],L=3*v*(r>x-lr?r-x+lr:0),A=4*(this._cubeSize-v);vn(t,L,A,3*v,2*v),l.setRenderTarget(t),l.render(d,sa)}}function zd(n){const e=[],t=[],i=[];let r=n;const a=n-lr+1+so.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-lr?l=so[s-n+lr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),v=new Float32Array(u*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,R=A>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(w,_*g*A),x.set(f,p*g*A);const y=[A,A,A,A,A,A];v.set(y,u*g*A)}const L=new Ot;L.setAttribute("position",new jt(M,_)),L.setAttribute("uv",new jt(x,p)),L.setAttribute("faceIndex",new jt(v,u)),e.push(L),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ho(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=In,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vn(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bd(n,e,t){const i=new Float32Array(Fi),r=new I(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function uo(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function po(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Ca,h=l===fr||l===mr;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new co(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new co(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Hd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vd(n,e,t,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,v=M.length;x<v;x+=3){const L=M[x+0],A=M[x+1],b=M[x+2];f.push(L,A,A,b,b,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const L=x+0,A=x+1,b=x+2;f.push(L,A,A,b,b,L)}}else return;const p=new(al(f)?ul:hl)(f,1);p.version=_;const u=a.get(d);u&&e.remove(u),a.set(d,p)}function h(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gd(n,e,t){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){n.drawElements(i,m,a,f*s),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,a,f*s,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,f,0,g);let _=0;for(let p=0;p<g;p++)_+=m[p];t.update(_,i,1)}function d(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/s,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,f,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=m[M]*_[M];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Wd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xd(n,e,t){const i=new WeakMap,r=new rt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let m=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",m)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let L=o.attributes.position.count*v,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*A*4*d),R=new ol(b,L,A,d);R.type=$t,R.needsUpdate=!0;const w=v*4;for(let y=0;y<d;y++){const P=u[y],F=M[y],B=x[y],W=L*A*4*y;for(let $=0;$<P.count;$++){const j=$*w;g===!0&&(r.fromBufferAttribute(P,$),b[W+j+0]=r.x,b[W+j+1]=r.y,b[W+j+2]=r.z,b[W+j+3]=0),_===!0&&(r.fromBufferAttribute(F,$),b[W+j+4]=r.x,b[W+j+5]=r.y,b[W+j+6]=r.z,b[W+j+7]=0),p===!0&&(r.fromBufferAttribute(B,$),b[W+j+8]=r.x,b[W+j+9]=r.y,b[W+j+10]=r.z,b[W+j+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new _e(L,A)},i.set(o,f),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function qd(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class _l extends bt{constructor(e,t,i,r,a,s,o,l,c,h=ur){if(h!==ur&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Hi),i===void 0&&h===_r&&(i=gr),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vl=new bt,fo=new _l(1,1),xl=new ol,Ml=new Ic,yl=new fl,mo=[],go=[],_o=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=mo[r];if(a===void 0&&(a=new Float32Array(r),mo[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Un(n,e){let t=go[e];t===void 0&&(t=new Int32Array(e),go[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Jd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;xo.set(i),n.uniformMatrix2fv(this.addr,!1,xo),_t(t,i)}}function $d(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;vo.set(i),n.uniformMatrix3fv(this.addr,!1,vo),_t(t,i)}}function Qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;_o.set(i),n.uniformMatrix4fv(this.addr,!1,_o),_t(t,i)}}function ep(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function np(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function lp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(fo.compareFunction=nl,a=fo):a=vl,t.setTexture2D(e||a,r)}function cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ml,r)}function hp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yl,r)}function up(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xl,r)}function dp(n){switch(n){case 5126:return jd;case 35664:return Yd;case 35665:return Zd;case 35666:return Kd;case 35674:return Jd;case 35675:return $d;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return np;case 36294:return ap;case 36295:return sp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function pp(n,e){n.uniform1fv(this.addr,e)}function fp(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function mp(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function gp(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function _p(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vp(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xp(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mp(n,e){n.uniform1iv(this.addr,e)}function yp(n,e){n.uniform2iv(this.addr,e)}function Sp(n,e){n.uniform3iv(this.addr,e)}function wp(n,e){n.uniform4iv(this.addr,e)}function Tp(n,e){n.uniform1uiv(this.addr,e)}function Ep(n,e){n.uniform2uiv(this.addr,e)}function bp(n,e){n.uniform3uiv(this.addr,e)}function Ap(n,e){n.uniform4uiv(this.addr,e)}function Rp(n,e,t){const i=this.cache,r=e.length,a=Un(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||vl,a[s])}function Cp(n,e,t){const i=this.cache,r=e.length,a=Un(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ml,a[s])}function Pp(n,e,t){const i=this.cache,r=e.length,a=Un(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||yl,a[s])}function Lp(n,e,t){const i=this.cache,r=e.length,a=Un(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||xl,a[s])}function Ip(n){switch(n){case 5126:return pp;case 35664:return fp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Ep;case 36295:return bp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Dp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dp(t.type)}}class Up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Mo(n,e){n.seq.push(e),n.map[e.id]=e}function Op(n,e,t){const i=n.name,r=i.length;for(ua.lastIndex=0;;){const a=ua.exec(i),s=ua.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Mo(t,c===void 0?new Dp(o,n,e):new Up(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Np(o),Mo(t,h)),t=h}}}class Cn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Op(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function yo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fp=37297;let zp=0;function Bp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const So=new ke;function kp(n){Je._getMatrix(So,Je.workingColorSpace,n);const e=`mat3( ${So.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Dn:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bp(n.getShaderSource(e),s)}else return r}function Hp(n,e){const t=kp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vp(n,e){let t;switch(e){case jo:t="Linear";break;case sc:t="Reinhard";break;case oc:t="Cineon";break;case lc:t="ACESFilmic";break;case hc:t="AgX";break;case uc:t="Neutral";break;case cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xn=new I;function Gp(){Je.getLuminanceCoefficients(xn);const n=xn.x.toFixed(4),e=xn.y.toFixed(4),t=xn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Xp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function zr(n){return n!==""}function To(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function as(n){return n.replace(jp,Zp)}const Yp=new Map;function Zp(n,e){let t=He[e];if(t===void 0){const i=Yp.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return as(t)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(n){return n.replace(Kp,Jp)}function Jp(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ao(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $p(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hs?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Qp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case mr:e="ENVMAP_TYPE_CUBE";break;case In:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ef(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function tf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case us:e="ENVMAP_BLENDING_MULTIPLY";break;case nc:e="ENVMAP_BLENDING_MIX";break;case ac:e="ENVMAP_BLENDING_ADD";break}return e}function rf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nf(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=$p(t),c=Qp(t),h=ef(t),d=tf(t),f=rf(t),m=Wp(t),g=Xp(a),_=r.createProgram();let p,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),u.length>0&&(u+=`
`)):(p=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),u=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?He.tonemapping_pars_fragment:"",t.toneMapping!==yi?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Hp("linearToOutputTexel",t.outputColorSpace),Gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),s=as(s),s=To(s,t),s=Eo(s,t),o=as(o),o=To(o,t),o=Eo(o,t),s=bo(s),o=bo(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=M+p+s,v=M+u+o,L=yo(r,r.VERTEX_SHADER,x),A=yo(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,A);else{const ee=wo(r,L,"vertex"),X=wo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+ee+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(j=!1);j&&(P.diagnostics={runnable:$,programLog:F,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(L),r.deleteShader(A),R=new Cn(r,_),w=qp(r,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Fp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let af=0;class sf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new of(e),t.set(e,i)),i}}class of{constructor(e){this.id=af++,this.code=e,this.usedTimes=0}}function lf(n,e,t,i,r,a,s){const o=new Ms,l=new sf,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,y,P,F,B){const W=F.fog,$=B.geometry,j=w.isMeshStandardMaterial?F.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),X=ee&&ee.mapping===In?ee.image.height:null,re=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Re=de!==void 0?de.length:0;let Ie=0;$.morphAttributes.position!==void 0&&(Ie=1),$.morphAttributes.normal!==void 0&&(Ie=2),$.morphAttributes.color!==void 0&&(Ie=3);let Qe,Y,ae,xe;if(re){const Ke=Kt[re];Qe=Ke.vertexShader,Y=Ke.fragmentShader}else Qe=w.vertexShader,Y=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const he=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,st=!!w.map,qe=!!w.matcap,dt=!!ee,O=!!w.aoMap,Mt=!!w.lightMap,je=!!w.bumpMap,Ye=!!w.normalMap,Te=!!w.displacementMap,at=!!w.emissiveMap,we=!!w.metalnessMap,E=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,Z=w.dispersion>0,Q=w.iridescence>0,K=w.sheen>0,ve=w.transmission>0,ce=S&&!!w.anisotropyMap,fe=z&&!!w.clearcoatMap,Fe=z&&!!w.clearcoatNormalMap,ne=z&&!!w.clearcoatRoughnessMap,me=Q&&!!w.iridescenceMap,Ee=Q&&!!w.iridescenceThicknessMap,Pe=K&&!!w.sheenColorMap,ge=K&&!!w.sheenRoughnessMap,ze=!!w.specularMap,De=!!w.specularColorMap,et=!!w.specularIntensityMap,D=ve&&!!w.transmissionMap,oe=ve&&!!w.thicknessMap,G=!!w.gradientMap,J=!!w.alphaMap,ue=w.alphaTest>0,te=!!w.alphaHash,Ce=!!w.extensions;let We=yi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(We=n.toneMapping);const tt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Qe,fragmentShader:Y,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:xr,alphaToCoverage:!!w.alphaToCoverage,map:st,matcap:qe,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:Mt,bumpMap:je,normalMap:Ye,displacementMap:f&&Te,emissiveMap:at,normalMapObjectSpace:Ye&&w.normalMapType===mc,normalMapTangentSpace:Ye&&w.normalMapType===xs,metalnessMap:we,roughnessMap:E,anisotropy:S,anisotropyMap:ce,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:ze,specularColorMap:De,specularIntensityMap:et,transmission:ve,transmissionMap:D,thicknessMap:oe,gradientMap:G,opaque:w.transparent===!1&&w.blending===hr&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:te,combine:w.combine,mapUv:st&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:Mt&&_(w.lightMap.channel),bumpMapUv:je&&_(w.bumpMap.channel),normalMapUv:Ye&&_(w.normalMap.channel),displacementMapUv:Te&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:we&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:ce&&_(w.anisotropyMap.channel),clearcoatMapUv:fe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(w.sheenRoughnessMap.channel),specularMapUv:ze&&_(w.specularMap.channel),specularColorMapUv:De&&_(w.specularColorMap.channel),specularIntensityMapUv:et&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:oe&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ye||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(st||J),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:st&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===li,flipSided:w.side===Pt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)y.push(P),y.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const y=g[w.type];let P;if(y){const F=Kt[y];P=Wc.clone(F.uniforms)}else P=w.uniforms;return P}function L(w,y){let P;for(let F=0,B=h.length;F<B;F++){const W=h[F];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new nf(n,y,w,a),h.push(P)),P}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:L,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:R}}function cf(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ro(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Co(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function o(d,f,m,g,_,p){const u=s(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=s(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||hf),i.length>1&&i.sort(f||Ro),r.length>1&&r.sort(f||Ro)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function uf(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Co,n.set(i,[s])):r>=a.length?(s=new Co,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function df(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function pf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ff=0;function mf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gf(n){const e=new df,t=pf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,a=new nt,s=new nt;function o(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,M=0,x=0,v=0,L=0,A=0,b=0;c.sort(mf);for(let w=0,y=c.length;w<y;w++){const P=c[w],F=P.color,B=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,d+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],B);b++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,X=t.get(P);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=j,m++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(B),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[_]=j;const ee=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,ee.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=ee.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(F).multiplyScalar(B),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=j,p++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const ee=P.shadow,X=t.get(P);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(B),j.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[u]=j,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==L||R.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=L,R.numLightProbes=b,i.version=ff++)}function l(c,h){let d=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const x=c[u];if(x.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(x.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),s.identity(),a.copy(x.matrixWorld),a.premultiply(p),s.extractRotation(a),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Po(n){const e=new gf(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function _f(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Po(n),e.set(r,[o])):a>=s.length?(o=new Po(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class vf extends Sr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xf extends Sr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sf(n,e,t){let i=new ys;const r=new _e,a=new _e,s=new rt,o=new vf({depthPacking:fc}),l=new xf,c={},h=t.maxTextureSize,d={[wi]:Pt,[Pt]:wi,[li]:li},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Mf,fragmentShader:yf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new C(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let u=this.type;this.render=function(A,b,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=u!==oi&&this.type===oi,W=u===oi&&this.type!==oi;for(let $=0,j=A.length;$<j;$++){const ee=A[$],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();if(r.multiply(re),a.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/re.x),r.x=a.x*re.x,X.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/re.y),r.y=a.y*re.y,X.mapSize.y=a.y)),X.map===null||B===!0||W===!0){const Re=this.type!==oi?{minFilter:Nt,magFilter:Nt}:{};X.map!==null&&X.map.dispose(),X.map=new Vi(r.x,r.y,Re),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const de=X.getViewportCount();for(let Re=0;Re<de;Re++){const Ie=X.getViewport(Re);s.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),F.viewport(s),X.updateMatrices(ee,Re),i=X.getFrustum(),v(b,R,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===oi&&M(X,R),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(w,y,P)};function M(A,b){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(b,null,R,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(b,null,R,m,_,null)}function x(A,b,R,w){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=y.uuid,B=b.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let $=W[B];$===void 0&&($=y.clone(),W[B]=$,b.addEventListener("dispose",L)),y=$}if(y.visible=b.visible,y.wireframe=b.wireframe,w===oi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=R}return y}function v(A,b,R,w,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=e.update(A),B=A.material;if(Array.isArray(B)){const W=F.groups;for(let $=0,j=W.length;$<j;$++){const ee=W[$],X=B[ee.materialIndex];if(X&&X.visible){const re=x(A,X,w,y);A.onBeforeShadow(n,A,b,R,F,re,ee),n.renderBufferDirect(R,null,F,re,A,ee),A.onAfterShadow(n,A,b,R,F,re,ee)}}}else if(B.visible){const W=x(A,B,w,y);A.onBeforeShadow(n,A,b,R,F,W,null),n.renderBufferDirect(R,null,F,W,A,null),A.onAfterShadow(n,A,b,R,F,W,null)}}const P=A.children;for(let F=0,B=P.length;F<B;F++)v(P[F],b,R,w,y)}function L(A){A.target.removeEventListener("dispose",L);for(const b in c){const R=c[b],w=A.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const wf={[ya]:Sa,[wa]:ba,[Ta]:Aa,[pr]:Ea,[Sa]:ya,[ba]:wa,[Aa]:Ta,[Ea]:pr};function Tf(n,e){function t(){let D=!1;const oe=new rt;let G=null;const J=new rt(0,0,0,0);return{setMask:function(ue){G!==ue&&!D&&(n.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){D=ue},setClear:function(ue,te,Ce,We,tt){tt===!0&&(ue*=We,te*=We,Ce*=We),oe.set(ue,te,Ce,We),J.equals(oe)===!1&&(n.clearColor(ue,te,Ce,We),J.copy(oe))},reset:function(){D=!1,G=null,J.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,G=null,J=null,ue=null;return{setReversed:function(te){if(oe!==te){const Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const We=ue;ue=null,this.setClear(We)}oe=te},getReversed:function(){return oe},setTest:function(te){te?he(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(te){G!==te&&!D&&(n.depthMask(te),G=te)},setFunc:function(te){if(oe&&(te=wf[te]),J!==te){switch(te){case ya:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Ea:n.depthFunc(n.GEQUAL);break;case ba:n.depthFunc(n.GREATER);break;case Aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=te}},setLocked:function(te){D=te},setClear:function(te){ue!==te&&(oe&&(te=1-te),n.clearDepth(te),ue=te)},reset:function(){D=!1,G=null,J=null,ue=null,oe=!1}}}function r(){let D=!1,oe=null,G=null,J=null,ue=null,te=null,Ce=null,We=null,tt=null;return{setTest:function(Ke){D||(Ke?he(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!D&&(n.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,yt,Bt){(G!==Ke||J!==yt||ue!==Bt)&&(n.stencilFunc(Ke,yt,Bt),G=Ke,J=yt,ue=Bt)},setOp:function(Ke,yt,Bt){(te!==Ke||Ce!==yt||We!==Bt)&&(n.stencilOp(Ke,yt,Bt),te=Ke,Ce=yt,We=Bt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){tt!==Ke&&(n.clearStencil(Ke),tt=Ke)},reset:function(){D=!1,oe=null,G=null,J=null,ue=null,te=null,Ce=null,We=null,tt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,M=null,x=null,v=null,L=null,A=null,b=new Xe(0,0,0),R=0,w=!1,y=null,P=null,F=null,B=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=ee>=2);let re=null,de={};const Re=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Qe=new rt().fromArray(Re),Y=new rt().fromArray(Ie);function ae(D,oe,G,J){const ue=new Uint8Array(4),te=n.createTexture();n.bindTexture(D,te),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<G;Ce++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(oe+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return te}const xe={};xe[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(pr),je(!1),Ye(Us),he(n.CULL_FACE),O(Mi);function he(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Le(D,oe){return d[D]!==oe?(n.bindFramebuffer(D,oe),d[D]=oe,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ve(D,oe){let G=m,J=!1;if(D){G=f.get(oe),G===void 0&&(G=[],f.set(oe,G));const ue=D.textures;if(G.length!==ue.length||G[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ce=ue.length;te<Ce;te++)G[te]=n.COLOR_ATTACHMENT0+te;G.length=ue.length,J=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,J=!0);J&&n.drawBuffers(G)}function st(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const qe={[Oi]:n.FUNC_ADD,[Hl]:n.FUNC_SUBTRACT,[Vl]:n.FUNC_REVERSE_SUBTRACT};qe[Gl]=n.MIN,qe[Wl]=n.MAX;const dt={[Xl]:n.ZERO,[ql]:n.ONE,[jl]:n.SRC_COLOR,[xa]:n.SRC_ALPHA,[Ql]:n.SRC_ALPHA_SATURATE,[Jl]:n.DST_COLOR,[Zl]:n.DST_ALPHA,[Yl]:n.ONE_MINUS_SRC_COLOR,[Ma]:n.ONE_MINUS_SRC_ALPHA,[$l]:n.ONE_MINUS_DST_COLOR,[Kl]:n.ONE_MINUS_DST_ALPHA,[ec]:n.CONSTANT_COLOR,[tc]:n.ONE_MINUS_CONSTANT_COLOR,[ic]:n.CONSTANT_ALPHA,[rc]:n.ONE_MINUS_CONSTANT_ALPHA};function O(D,oe,G,J,ue,te,Ce,We,tt,Ke){if(D===Mi){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),D!==kl){if(D!==p||Ke!==w){if((u!==Oi||v!==Oi)&&(n.blendEquation(n.FUNC_ADD),u=Oi,v=Oi),Ke)switch(D){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.ONE,n.ONE);break;case Ns:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Os:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ns:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Os:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,L=null,A=null,b.set(0,0,0),R=0,p=D,w=Ke}return}ue=ue||oe,te=te||G,Ce=Ce||J,(oe!==u||ue!==v)&&(n.blendEquationSeparate(qe[oe],qe[ue]),u=oe,v=ue),(G!==M||J!==x||te!==L||Ce!==A)&&(n.blendFuncSeparate(dt[G],dt[J],dt[te],dt[Ce]),M=G,x=J,L=te,A=Ce),(We.equals(b)===!1||tt!==R)&&(n.blendColor(We.r,We.g,We.b,tt),b.copy(We),R=tt),p=D,w=!1}function Mt(D,oe){D.side===li?be(n.CULL_FACE):he(n.CULL_FACE);let G=D.side===Pt;oe&&(G=!G),je(G),D.blending===hr&&D.transparent===!1?O(Mi):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function Ye(D){D!==Fl?(he(n.CULL_FACE),D!==P&&(D===Us?n.cullFace(n.BACK):D===zl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=D}function Te(D){D!==F&&(j&&n.lineWidth(D),F=D)}function at(D,oe,G){D?(he(n.POLYGON_OFFSET_FILL),(B!==oe||W!==G)&&(n.polygonOffset(oe,G),B=oe,W=G)):be(n.POLYGON_OFFSET_FILL)}function we(D){D?he(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+$-1),re!==D&&(n.activeTexture(D),re=D)}function S(D,oe,G){G===void 0&&(re===null?G=n.TEXTURE0+$-1:G=re);let J=de[G];J===void 0&&(J={type:void 0,texture:void 0},de[G]=J),(J.type!==D||J.texture!==oe)&&(re!==G&&(n.activeTexture(G),re=G),n.bindTexture(D,oe||xe[D]),J.type=D,J.texture=oe)}function z(){const D=de[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Qe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Qe.copy(D))}function ge(D){Y.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function ze(D,oe){let G=c.get(oe);G===void 0&&(G=new WeakMap,c.set(oe,G));let J=G.get(D);J===void 0&&(J=n.getUniformBlockIndex(oe,D.name),G.set(D,J))}function De(D,oe){const G=c.get(oe).get(D);l.get(oe)!==G&&(n.uniformBlockBinding(oe,G,D.__bindingPointIndex),l.set(oe,G))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,de={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,M=null,x=null,v=null,L=null,A=null,b=new Xe(0,0,0),R=0,w=!1,y=null,P=null,F=null,B=null,W=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:he,disable:be,bindFramebuffer:Le,drawBuffers:Ve,useProgram:st,setBlending:O,setMaterial:Mt,setFlipSided:je,setCullFace:Ye,setLineWidth:Te,setPolygonOffset:at,setScissorTest:we,activeTexture:E,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:me,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Fe,texStorage3D:ne,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Pe,viewport:ge,reset:et}}function Lo(n,e,t,i){const r=Ef(i);switch(t){case $o:return n*e;case el:return n*e;case tl:return n*e*2;case ms:return n*e/r.components*r.byteLength;case gs:return n*e/r.components*r.byteLength;case il:return n*e*2/r.components*r.byteLength;case _s:return n*e*2/r.components*r.byteLength;case Qo:return n*e*3/r.components*r.byteLength;case qt:return n*e*4/r.components*r.byteLength;case vs:return n*e*4/r.components*r.byteLength;case Tn:case En:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bn:case An:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:case Na:return Math.max(n,16)*Math.max(e,8)/4;case Ia:case Ua:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rn:case Qa:case es:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rl:case ts:return Math.ceil(n/4)*Math.ceil(e/4)*8;case is:case rs:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ef(n){switch(n){case ui:case Zo:return{byteLength:1,components:1};case Gr:case Ko:case jr:return{byteLength:2,components:1};case ps:case fs:return{byteLength:2,components:4};case Hi:case ds:case $t:return{byteLength:4,components:1};case Jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bf(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return m?new OffscreenCanvas(E,S):Ln("canvas")}function _(E,S,z){let Z=1;const Q=we(E);if((Q.width>z||Q.height>z)&&(Z=z/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor(Z*Q.width),ve=Math.floor(Z*Q.height);d===void 0&&(d=g(K,ve));const ce=S?g(K,ve):d;return ce.width=K,ce.height=ve,ce.getContext("2d").drawImage(E,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+ve+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,S,z,Z,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const ve=Q?Dn:Je.getTransfer(Z);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=ve===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(E,S){let z;return E?S===null||S===Hi||S===gr?z=n.DEPTH24_STENCIL8:S===$t?z=n.DEPTH32F_STENCIL8:S===Gr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===gr?z=n.DEPTH_COMPONENT24:S===$t?z=n.DEPTH_COMPONENT32F:S===Gr&&(z=n.DEPTH_COMPONENT16),z}function L(E,S){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function A(E){const S=E.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function b(E){const S=E.target;S.removeEventListener("dispose",b),y(S)}function R(E){const S=i.get(E);if(S.__webglInit===void 0)return;const z=E.source,Z=f.get(z);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(E),Object.keys(Z).length===0&&f.delete(z)}i.remove(E)}function w(E){const S=i.get(E);n.deleteTexture(S.__webglTexture);const z=E.source,Z=f.get(z);delete Z[S.__cacheKey],s.memory.textures--}function y(E){const S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=E.textures;for(let Z=0,Q=z.length;Z<Q;Z++){const K=i.get(z[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(z[Z])}i.remove(E)}let P=0;function F(){P=0}function B(){const E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function W(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function $(E,S){const z=i.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,E,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function j(E,S){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function ee(E,S){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function X(E,S){const z=i.get(E);if(E.version>0&&z.__version!==E.version){ae(z,E,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const re={[Pa]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},de={[Nt]:n.NEAREST,[dc]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Fn]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},Re={[gc]:n.NEVER,[Sc]:n.ALWAYS,[_c]:n.LESS,[nl]:n.LEQUAL,[vc]:n.EQUAL,[yc]:n.GEQUAL,[xc]:n.GREATER,[Mc]:n.NOTEQUAL};function Ie(E,S){if(S.type===$t&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===Fn||S.magFilter===$r||S.magFilter===Bi||S.minFilter===Jt||S.minFilter===Fn||S.minFilter===$r||S.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[S.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[S.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[S.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==$r&&S.minFilter!==Bi||S.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(E,S){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const K=W(S);if(K!==E.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[K].usedTimes++;const ve=Q[E.__cacheKey];ve!==void 0&&(Q[E.__cacheKey].usedTimes--,ve.usedTimes===0&&w(S)),E.__cacheKey=K,E.__webglTexture=Q[K].texture}return z}function Y(E,S,z){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Qe(E,S),K=S.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+z);const ve=i.get(K);if(K.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const ce=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===xi?null:Je.getPrimaries(S.colorSpace),Fe=S.colorSpace===xi||ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ne=_(S.image,!1,r.maxTextureSize);ne=at(S,ne);const me=a.convert(S.format,S.colorSpace),Ee=a.convert(S.type);let Pe=x(S.internalFormat,me,Ee,S.colorSpace,S.isVideoTexture);Ie(Z,S);let ge;const ze=S.mipmaps,De=S.isVideoTexture!==!0,et=ve.__version===void 0||Q===!0,D=K.dataReady,oe=L(S,ne);if(S.isDepthTexture)Pe=v(S.format===_r,S.type),et&&(De?t.texStorage2D(n.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,Ee,null));else if(S.isDataTexture)if(ze.length>0){De&&et&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,ze[0].width,ze[0].height);for(let G=0,J=ze.length;G<J;G++)ge=ze[G],De?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,Ee,ge.data):t.texImage2D(n.TEXTURE_2D,G,Pe,ge.width,ge.height,0,me,Ee,ge.data);S.generateMipmaps=!1}else De?(et&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,ne.width,ne.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Ee,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,Ee,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,ze[0].width,ze[0].height,ne.depth);for(let G=0,J=ze.length;G<J;G++)if(ge=ze[G],S.format!==qt)if(me!==null)if(De){if(D)if(S.layerUpdates.size>0){const ue=Lo(ge.width,ge.height,S.format,S.type);for(const te of S.layerUpdates){const Ce=ge.data.subarray(te*ue/ge.data.BYTES_PER_ELEMENT,(te+1)*ue/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,te,ge.width,ge.height,1,me,Ce)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Pe,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ne.depth,me,Ee,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Pe,ge.width,ge.height,ne.depth,0,me,Ee,ge.data)}else{De&&et&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,ze[0].width,ze[0].height);for(let G=0,J=ze.length;G<J;G++)ge=ze[G],S.format!==qt?me!==null?De?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,Ee,ge.data):t.texImage2D(n.TEXTURE_2D,G,Pe,ge.width,ge.height,0,me,Ee,ge.data)}else if(S.isDataArrayTexture)if(De){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){const G=Lo(ne.width,ne.height,S.format,S.type);for(const J of S.layerUpdates){const ue=ne.data.subarray(J*G/ne.data.BYTES_PER_ELEMENT,(J+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,me,Ee,ue)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ee,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,me,Ee,ne.data);else if(S.isData3DTexture)De?(et&&t.texStorage3D(n.TEXTURE_3D,oe,Pe,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ee,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,me,Ee,ne.data);else if(S.isFramebufferTexture){if(et)if(De)t.texStorage2D(n.TEXTURE_2D,oe,Pe,ne.width,ne.height);else{let G=ne.width,J=ne.height;for(let ue=0;ue<oe;ue++)t.texImage2D(n.TEXTURE_2D,ue,Pe,G,J,0,me,Ee,null),G>>=1,J>>=1}}else if(ze.length>0){if(De&&et){const G=we(ze[0]);t.texStorage2D(n.TEXTURE_2D,oe,Pe,G.width,G.height)}for(let G=0,J=ze.length;G<J;G++)ge=ze[G],De?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,me,Ee,ge):t.texImage2D(n.TEXTURE_2D,G,Pe,me,Ee,ge);S.generateMipmaps=!1}else if(De){if(et){const G=we(ne);t.texStorage2D(n.TEXTURE_2D,oe,Pe,G.width,G.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ee,ne)}else t.texImage2D(n.TEXTURE_2D,0,Pe,me,Ee,ne);p(S)&&u(Z),ve.__version=K.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ae(E,S,z){if(S.image.length!==6)return;const Z=Qe(E,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const K=i.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const ve=Je.getPrimaries(Je.workingColorSpace),ce=S.colorSpace===xi?null:Je.getPrimaries(S.colorSpace),fe=S.colorSpace===xi||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Fe&&!ne?me[J]=_(S.image[J],!0,r.maxCubemapSize):me[J]=ne?S.image[J].image:S.image[J],me[J]=at(S,me[J]);const Ee=me[0],Pe=a.convert(S.format,S.colorSpace),ge=a.convert(S.type),ze=x(S.internalFormat,Pe,ge,S.colorSpace),De=S.isVideoTexture!==!0,et=K.__version===void 0||Z===!0,D=Q.dataReady;let oe=L(S,Ee);Ie(n.TEXTURE_CUBE_MAP,S);let G;if(Fe){De&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ze,Ee.width,Ee.height);for(let J=0;J<6;J++){G=me[J].mipmaps;for(let ue=0;ue<G.length;ue++){const te=G[ue];S.format!==qt?Pe!==null?De?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,te.width,te.height,Pe,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ze,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,te.width,te.height,Pe,ge,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ze,te.width,te.height,0,Pe,ge,te.data)}}}else{if(G=S.mipmaps,De&&et){G.length>0&&oe++;const J=we(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ne){De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Pe,ge,me[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,me[J].width,me[J].height,0,Pe,ge,me[J].data);for(let ue=0;ue<G.length;ue++){const te=G[ue].image[J].image;De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,te.width,te.height,Pe,ge,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ze,te.width,te.height,0,Pe,ge,te.data)}}else{De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,ge,me[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Pe,ge,me[J]);for(let ue=0;ue<G.length;ue++){const te=G[ue];De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Pe,ge,te.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ze,Pe,ge,te.image[J])}}}p(S)&&u(n.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xe(E,S,z,Z,Q,K){const ve=a.convert(z.format,z.colorSpace),ce=a.convert(z.type),fe=x(z.internalFormat,ve,ce,z.colorSpace),Fe=i.get(S),ne=i.get(z);if(ne.__renderTarget=S,!Fe.__hasExternalTextures){const me=Math.max(1,S.width>>K),Ee=Math.max(1,S.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,fe,me,Ee,S.depth,0,ve,ce,null):t.texImage2D(Q,K,fe,me,Ee,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ne.__webglTexture,0,je(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ne.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=v(S.stencilBuffer,Q),ve=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=je(S);Ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,K,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,E)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],ve=a.convert(K.format,K.colorSpace),ce=a.convert(K.type),fe=x(K.internalFormat,ve,ce,K.colorSpace),Fe=je(S);z&&Ye(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,fe,S.width,S.height):Ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(S.depthTexture);z.__renderTarget=S,(!z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const Z=z.__webglTexture,Q=je(S);if(S.depthTexture.format===ur)Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(S.depthTexture.format===_r)Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Le(E){const S=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,E)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),he(S.__webglDepthbuffer[Z],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),he(S.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(E,S,z){const Z=i.get(E);S!==void 0&&xe(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Le(E)}function st(E){const S=E.texture,z=i.get(E),Z=i.get(S);E.addEventListener("dispose",b);const Q=E.textures,K=E.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,s.memory.textures++),K){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)z.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)z.__webglFramebuffer[ce]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ce=0,fe=Q.length;ce<fe;ce++){const Fe=i.get(Q[ce]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&Ye(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const fe=Q[ce];z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Fe=a.convert(fe.format,fe.colorSpace),ne=a.convert(fe.type),me=x(fe.internalFormat,Fe,ne,fe.colorSpace,E.isXRRenderTarget===!0),Ee=je(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),he(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)xe(z.__webglFramebuffer[ce][fe],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else xe(z.__webglFramebuffer[ce],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(S)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,fe=Q.length;ce<fe;ce++){const Fe=Q[ce],ne=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Ie(n.TEXTURE_2D,Fe),xe(z.__webglFramebuffer,E,Fe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Fe)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),Ie(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)xe(z.__webglFramebuffer[fe],E,S,n.COLOR_ATTACHMENT0,ce,fe);else xe(z.__webglFramebuffer,E,S,n.COLOR_ATTACHMENT0,ce,0);p(S)&&u(ce),t.unbindTexture()}E.depthBuffer&&Le(E)}function qe(E){const S=E.textures;for(let z=0,Z=S.length;z<Z;z++){const Q=S[z];if(p(Q)){const K=M(E),ve=i.get(Q).__webglTexture;t.bindTexture(K,ve),u(K),t.unbindTexture()}}}const dt=[],O=[];function Mt(E){if(E.samples>0){if(Ye(E)===!1){const S=E.textures,z=E.width,Z=E.height;let Q=n.COLOR_BUFFER_BIT;const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),ce=S.length>1;if(ce)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Fe=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,Q,n.NEAREST),l===!0&&(dt.length=0,O.length=0,dt.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(dt.push(K),O.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Fe=i.get(S[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const S=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function je(E){return Math.min(r.maxSamples,E.samples)}function Ye(E){const S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(E){const S=s.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function at(E,S){const z=E.colorSpace,Z=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==xr&&z!==xi&&(Je.getTransfer(z)===it?(Z!==qt||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=st,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ye}function Af(n,e){function t(i,r=xi){let a;const s=Je.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===ps)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zo)return n.BYTE;if(i===Ko)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===ds)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===$t)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===$o)return n.ALPHA;if(i===Qo)return n.RGB;if(i===qt)return n.RGBA;if(i===el)return n.LUMINANCE;if(i===tl)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===ms)return n.RED;if(i===gs)return n.RED_INTEGER;if(i===il)return n.RG;if(i===_s)return n.RG_INTEGER;if(i===vs)return n.RGBA_INTEGER;if(i===Tn||i===En||i===bn||i===An)if(s===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Tn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===En)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===An)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Tn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===En)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===An)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Da||i===Ua||i===Na)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Na)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Fa||i===za)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Oa||i===Fa)return s===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===za)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ba||i===ka||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===ja||i===Ya||i===Za||i===Ka||i===Ja||i===$a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ba)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ka)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ja)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$a)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rn||i===Qa||i===es)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Rn)return s===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===es)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===ts||i===is||i===rs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Rn)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ts)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===is)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Rf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ne extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class If{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:Pf,fragmentShader:Lf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new C(new Ze(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Df extends Mr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=new If,p=t.getContextAttributes();let u=null,M=null;const x=[],v=[],L=new _e;let A=null;const b=new Ut;b.viewport=new rt;const R=new Ut;R.viewport=new rt;const w=[b,R],y=new Rf;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=x[Y];return ae===void 0&&(ae=new da,x[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=x[Y];return ae===void 0&&(ae=new da,x[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=x[Y];return ae===void 0&&(ae=new da,x[Y]=ae),ae.getHandSpace()};function B(Y){const ae=v.indexOf(Y.inputSource);if(ae===-1)return;const xe=x[ae];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||s),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<x.length;Y++){const ae=v[Y];ae!==null&&(v[Y]=null,x[Y].disconnect(ae))}P=null,F=null,_.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,M=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Vi(m.framebufferWidth,m.framebufferHeight,{format:qt,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,xe=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?_r:ur,xe=p.stencil?gr:Hi);const be={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Vi(f.textureWidth,f.textureHeight,{format:qt,type:ui,depthTexture:new _l(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let ae=0;ae<Y.removed.length;ae++){const xe=Y.removed[ae],he=v.indexOf(xe);he>=0&&(v[he]=null,x[he].disconnect(xe))}for(let ae=0;ae<Y.added.length;ae++){const xe=Y.added[ae];let he=v.indexOf(xe);if(he===-1){for(let Le=0;Le<x.length;Le++)if(Le>=v.length){v.push(xe),he=Le;break}else if(v[Le]===null){v[Le]=xe,he=Le;break}if(he===-1)break}const be=x[he];be&&be.connect(xe)}}const j=new I,ee=new I;function X(Y,ae,xe){j.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const he=j.distanceTo(ee),be=ae.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Ve=be[14]/(be[10]-1),st=be[14]/(be[10]+1),qe=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],O=(be[8]-1)/be[0],Mt=(Le[8]+1)/Le[0],je=Ve*O,Ye=Ve*Mt,Te=he/(-O+Mt),at=Te*-O;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Ve+Te,E=st+Te,S=je-at,z=Ye+(he-at),Z=qe*st/E*we,Q=dt*st/E*we;Y.projectionMatrix.makePerspective(S,z,Z,Q,we,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ae=Y.near,xe=Y.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=R.near=b.near=ae,y.far=R.far=b.far=xe,(P!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far),b.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|R.layers.mask;const he=Y.parent,be=y.cameras;re(y,he);for(let Le=0;Le<be.length;Le++)re(be[Le],he);be.length===2?X(y,b,R):y.projectionMatrix.copy(b.projectionMatrix),de(Y,y,he)};function de(Y,ae,xe){xe===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Re=null;function Ie(Y,ae){if(h=ae.getViewerPose(c||s),g=ae,h!==null){const xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let he=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Le=0;Le<xe.length;Le++){const Ve=xe[Le];let st=null;if(m!==null)st=m.getViewport(Ve);else{const dt=d.getViewSubImage(f,Ve);st=dt.viewport,Le===0&&(e.setRenderTargetTextures(M,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(M))}let qe=w[Le];qe===void 0&&(qe=new Ut,qe.layers.enable(Le),qe.viewport=new rt,w[Le]=qe),qe.matrix.fromArray(Ve.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ve.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),Le===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(qe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=d.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let xe=0;xe<x.length;xe++){const he=v[xe],be=x[xe];he!==null&&be!==void 0&&be.update(he,ae,c||s)}Re&&Re(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Qe=new ml;Qe.setAnimationLoop(Ie),this.setAnimationLoop=function(Y){Re=Y},this.dispose=function(){}}}const Di=new Yt,Uf=new nt;function Nf(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,dl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,M,x,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),d(p,u)):u.isMeshPhongMaterial?(a(p,u),h(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(a(p,u),g(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),_(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,M,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=e.get(u),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,Di.copy(v),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),p.envMapRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(Di)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Of(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;i.uniformBlockBinding(M,v)}function c(M,x){let v=r[M.id];v===void 0&&(g(M),v=h(M),r[M.id]=v,M.addEventListener("dispose",p));const L=x.program;i.updateUBOMapping(M,L);const A=e.render.frame;a[M.id]!==A&&(f(M),a[M.id]=A)}function h(M){const x=d();M.__bindingPointIndex=x;const v=n.createBuffer(),L=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],v=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,b=v.length;A<b;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,y=R.length;w<y;w++){const P=R[w];if(m(P,A,w,L)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<B.length;$++){const j=B[$],ee=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,F+W,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,x,v,L){const A=M.value,b=x+"_"+v;if(L[b]===void 0)return typeof A=="number"||typeof A=="boolean"?L[b]=A:L[b]=A.clone(),!0;{const R=L[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return L[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const x=M.uniforms;let v=0;const L=16;for(let b=0,R=x.length;b<R;b++){const w=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,P=w.length;y<P;y++){const F=w[y],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=B.length;W<$;W++){const j=B[W],ee=_(j),X=v%L,re=X%ee.boundary,de=X+re;v+=re,de!==0&&L-de<ee.storage&&(v+=L-de),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=ee.storage}}}const A=v%L;return A>0&&(v+=L-A),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function u(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:u}}class Ff{constructor(e={}){const{canvas:t=Tc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let L=!1,A=0,b=0,R=null,w=-1,y=null;const P=new rt,F=new rt;let B=null;const W=new Xe(0);let $=0,j=t.width,ee=t.height,X=1,re=null,de=null;const Re=new rt(0,0,j,ee),Ie=new rt(0,0,j,ee);let Qe=!1;const Y=new ys;let ae=!1,xe=!1;const he=new nt,be=new nt,Le=new I,Ve=new rt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function dt(){return R===null?X:1}let O=i;function Mt(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cs}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const N="webgl2";if(O=Mt(N,T),O===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let je,Ye,Te,at,we,E,S,z,Z,Q,K,ve,ce,fe,Fe,ne,me,Ee,Pe,ge,ze,De,et,D;function oe(){je=new Hd(O),je.init(),De=new Af(O,je),Ye=new Nd(O,je,e,De),Te=new Tf(O,je),Ye.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),at=new Wd(O),we=new cf,E=new bf(O,je,Te,we,Ye,De,at),S=new Fd(v),z=new kd(v),Z=new Jc(O),et=new Dd(O,Z),Q=new Vd(O,Z,at,et),K=new qd(O,Q,Z,at),Pe=new Xd(O,Ye,E),ne=new Od(we),ve=new lf(v,S,z,je,Ye,et,ne),ce=new Nf(v,we),fe=new uf,Fe=new _f(je),Ee=new Id(v,S,z,Te,K,m,l),me=new Sf(v,K,Ye),D=new Of(O,at,Ye,Te),ge=new Ud(O,je,at),ze=new Gd(O,je,at),at.programs=ve.programs,v.capabilities=Ye,v.extensions=je,v.properties=we,v.renderLists=fe,v.shadowMap=me,v.state=Te,v.info=at}oe();const G=new Df(v,O);this.xr=G,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(j,ee,!1))},this.getSize=function(T){return T.set(j,ee)},this.setSize=function(T,N,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ee=N,t.width=Math.floor(T*X),t.height=Math.floor(N*X),k===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(j*X,ee*X).floor()},this.setDrawingBufferSize=function(T,N,k){j=T,ee=N,X=k,t.width=Math.floor(T*k),t.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Re)},this.setViewport=function(T,N,k,H){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,N,k,H),Te.viewport(P.copy(Re).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,N,k,H){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,N,k,H),Te.scissor(F.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){Te.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,N=!0,k=!0){let H=0;if(T){let U=!1;if(R!==null){const ie=R.texture.format;U=ie===vs||ie===_s||ie===gs}if(U){const ie=R.texture.type,pe=ie===ui||ie===Hi||ie===Gr||ie===gr||ie===ps||ie===fs,Me=Ee.getClearColor(),ye=Ee.getClearAlpha(),Ue=Me.r,Oe=Me.g,Ae=Me.b;pe?(g[0]=Ue,g[1]=Oe,g[2]=Ae,g[3]=ye,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ue,_[1]=Oe,_[2]=Ae,_[3]=ye,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),k&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",te,!1),fe.dispose(),Fe.dispose(),we.dispose(),S.dispose(),z.dispose(),K.dispose(),et.dispose(),D.dispose(),ve.dispose(),G.dispose(),G.removeEventListener("sessionstart",Tr),G.removeEventListener("sessionend",Er),ti.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=at.autoReset,N=me.enabled,k=me.autoUpdate,H=me.needsUpdate,U=me.type;oe(),at.autoReset=T,me.enabled=N,me.autoUpdate=k,me.needsUpdate=H,me.type=U}function te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ce(T){const N=T.target;N.removeEventListener("dispose",Ce),We(N)}function We(T){tt(T),we.remove(T)}function tt(T){const N=we.get(T).programs;N!==void 0&&(N.forEach(function(k){ve.releaseProgram(k)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,H,U,ie){N===null&&(N=st);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=Il(T,N,k,H,U);Te.setMaterial(H,pe);let ye=k.index,Ue=1;if(H.wireframe===!0){if(ye=Q.getWireframeAttribute(k),ye===void 0)return;Ue=2}const Oe=k.drawRange,Ae=k.attributes.position;let $e=Oe.start*Ue,ct=(Oe.start+Oe.count)*Ue;ie!==null&&($e=Math.max($e,ie.start*Ue),ct=Math.min(ct,(ie.start+ie.count)*Ue)),ye!==null?($e=Math.max($e,0),ct=Math.min(ct,ye.count)):Ae!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ae.count));const ht=ct-$e;if(ht<0||ht===1/0)return;et.setup(U,H,Me,k,ye);let ft,ut=ge;if(ye!==null&&(ft=Z.get(ye),ut=ze,ut.setIndex(ft)),U.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*dt()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(U.isLine){let Se=H.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*dt()),U.isLineSegments?ut.setMode(O.LINES):U.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else U.isPoints?ut.setMode(O.POINTS):U.isSprite&&ut.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ut.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,bi=U._multiDrawCounts,Ai=U._multiDrawCount,kt=ye?Z.get(ye).bytesPerElement:1,qi=we.get(H).currentProgram.getUniforms();for(let Lt=0;Lt<Ai;Lt++)qi.setValue(O,"_gl_DrawID",Lt),ut.render(Se[Lt]/kt,bi[Lt])}else if(U.isInstancedMesh)ut.renderInstances($e,ht,U.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bi=Math.min(k.instanceCount,Se);ut.renderInstances($e,ht,bi)}else ut.render($e,ht)};function Ke(T,N,k){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=Pt,T.needsUpdate=!0,Jr(T,N,k),T.side=wi,T.needsUpdate=!0,Jr(T,N,k),T.side=li):Jr(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),u=Fe.get(k),u.init(N),x.push(u),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),T!==k&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const H=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const Me=ie[pe];Ke(Me,k,U),H.add(Me)}else Ke(ie,k,U),H.add(ie)}),x.pop(),u=null,H},this.compileAsync=function(T,N,k=null){const H=this.compile(T,N,k);return new Promise(U=>{function ie(){if(H.forEach(function(pe){we.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){U(T);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let yt=null;function Bt(T){yt&&yt(T)}function Tr(){ti.stop()}function Er(){ti.start()}const ti=new ml;ti.setAnimationLoop(Bt),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(T){yt=T,G.setAnimationLoop(T),T===null?ti.stop():ti.start()},G.addEventListener("sessionstart",Tr),G.addEventListener("sessionend",Er),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,R),u=Fe.get(T,x.length),u.init(N),x.push(u),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(be),xe=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,xe),p=fe.get(T,M.length),p.init(),M.push(p),G.enabled===!0&&G.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Ei(ie,N,-1/0,v.sortObjects)}Ei(T,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(re,de),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&Ee.addToRenderList(p,T),this.info.render.frame++,ae===!0&&ne.beginShadows();const k=u.state.shadowsArray;me.render(k,T,N),ae===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,U=p.transmissive;if(u.setupLights(),N.isArrayCamera){const ie=N.cameras;if(U.length>0)for(let pe=0,Me=ie.length;pe<Me;pe++){const ye=ie[pe];Cs(H,U,T,ye)}qe&&Ee.render(T);for(let pe=0,Me=ie.length;pe<Me;pe++){const ye=ie[pe];Xi(p,T,ye,ye.viewport)}}else U.length>0&&Cs(H,U,T,N),qe&&Ee.render(T),Xi(p,T,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,N),et.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],ae===!0&&ne.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Ei(T,N,k,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){H&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);const ie=K.update(T),pe=T.material;pe.visible&&p.push(T,ie,pe,k,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ie=K.update(T),pe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ve.copy(ie.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){const Me=ie.groups;for(let ye=0,Ue=Me.length;ye<Ue;ye++){const Oe=Me[ye],Ae=pe[Oe.materialIndex];Ae&&Ae.visible&&p.push(T,ie,Ae,k,Ve.z,Oe)}}else pe.visible&&p.push(T,ie,pe,k,Ve.z,null)}}const U=T.children;for(let ie=0,pe=U.length;ie<pe;ie++)Ei(U[ie],N,k,H)}function Xi(T,N,k,H){const U=T.opaque,ie=T.transmissive,pe=T.transparent;u.setupLightsView(k),ae===!0&&ne.setGlobalState(v.clippingPlanes,k),H&&Te.viewport(P.copy(H)),U.length>0&&Kr(U,N,k),ie.length>0&&Kr(ie,N,k),pe.length>0&&Kr(pe,N,k),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Cs(T,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Vi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?jr:ui,minFilter:Bi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const U=u.state.transmissionRenderTarget[H.id],ie=H.viewport||P;U.setSize(ie.z,ie.w);const pe=v.getRenderTarget();v.setRenderTarget(U),v.getClearColor(W),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),qe&&Ee.render(k);const Me=v.toneMapping;v.toneMapping=yi;const ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),ae===!0&&ne.setGlobalState(v.clippingPlanes,H),Kr(T,k,H),E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Oe=0,Ae=N.length;Oe<Ae;Oe++){const $e=N[Oe],ct=$e.object,ht=$e.geometry,ft=$e.material,ut=$e.group;if(ft.side===li&&ct.layers.test(H.layers)){const Se=ft.side;ft.side=Pt,ft.needsUpdate=!0,Ps(ct,k,H,ht,ft,ut),ft.side=Se,ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U))}v.setRenderTarget(pe),v.setClearColor(W,$),ye!==void 0&&(H.viewport=ye),v.toneMapping=Me}function Kr(T,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ie=T.length;U<ie;U++){const pe=T[U],Me=pe.object,ye=pe.geometry,Ue=H===null?pe.material:H,Oe=pe.group;Me.layers.test(k.layers)&&Ps(Me,N,k,ye,Ue,Oe)}}function Ps(T,N,k,H,U,ie){T.onBeforeRender(v,N,k,H,U,ie),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(v,N,k,H,T,ie),U.transparent===!0&&U.side===li&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,v.renderBufferDirect(k,N,H,U,T,ie),U.side=wi,U.needsUpdate=!0,v.renderBufferDirect(k,N,H,U,T,ie),U.side=li):v.renderBufferDirect(k,N,H,U,T,ie),T.onAfterRender(v,N,k,H,U,ie)}function Jr(T,N,k){N.isScene!==!0&&(N=st);const H=we.get(T),U=u.state.lights,ie=u.state.shadowsArray,pe=U.state.version,Me=ve.getParameters(T,U.state,ie,N,k),ye=ve.getProgramCacheKey(Me);let Ue=H.programs;H.environment=T.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",Ce),Ue=new Map,H.programs=Ue);let Oe=Ue.get(ye);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===pe)return Is(T,Me),Oe}else Me.uniforms=ve.getUniforms(T),T.onBeforeCompile(Me,v),Oe=ve.acquireProgram(Me,ye),Ue.set(ye,Oe),H.uniforms=Me.uniforms;const Ae=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),Is(T,Me),H.needsLights=Ul(T),H.lightsStateVersion=pe,H.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Ls(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Cn.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Is(T,N){const k=we.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Il(T,N,k,H,U){N.isScene!==!0&&(N=st),E.resetTextureUnits();const ie=N.fog,pe=H.isMeshStandardMaterial?N.environment:null,Me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xr,ye=(H.isMeshStandardMaterial?z:S).get(H.envMap||pe),Ue=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ht=yi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ht=v.toneMapping);const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=ft!==void 0?ft.length:0,Se=we.get(H),bi=u.state.lights;if(ae===!0&&(xe===!0||T!==y)){const Rt=T===y&&H.id===w;ne.setState(H,T,Rt)}let Ai=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==bi.state.version||Se.outputColorSpace!==Me||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==ye||H.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ne.numPlanes||Se.numIntersection!==ne.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==Oe||Se.morphTargets!==Ae||Se.morphNormals!==$e||Se.morphColors!==ct||Se.toneMapping!==ht||Se.morphTargetsCount!==ut)&&(Ai=!0):(Ai=!0,Se.__version=H.version);let kt=Se.currentProgram;Ai===!0&&(kt=Jr(H,N,U));let qi=!1,Lt=!1,br=!1;const ot=kt.getUniforms(),Zt=Se.uniforms;if(Te.useProgram(kt.program)&&(qi=!0,Lt=!0,br=!0),H.id!==w&&(w=H.id,Lt=!0),qi||y!==T){Te.buffers.depth.getReversed()?(he.copy(T.projectionMatrix),bc(he),Ac(he),ot.setValue(O,"projectionMatrix",he)):ot.setValue(O,"projectionMatrix",T.projectionMatrix),ot.setValue(O,"viewMatrix",T.matrixWorldInverse);const Rt=ot.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,Le.setFromMatrixPosition(T.matrixWorld)),Ye.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Lt=!0,br=!0)}if(U.isSkinnedMesh){ot.setOptional(O,U,"bindMatrix"),ot.setOptional(O,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ot.setValue(O,"boneTexture",Rt.boneTexture,E))}U.isBatchedMesh&&(ot.setOptional(O,U,"batchingTexture"),ot.setValue(O,"batchingTexture",U._matricesTexture,E),ot.setOptional(O,U,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",U._indirectTexture,E),ot.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",U._colorsTexture,E));const Ar=k.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&Pe.update(U,k,kt),(Lt||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,ot.setValue(O,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Zt.envMap.value=ye,Zt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Zt.envMapIntensity.value=N.environmentIntensity),Lt&&(ot.setValue(O,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&Dl(Zt,br),ie&&H.fog===!0&&ce.refreshFogUniforms(Zt,ie),ce.refreshMaterialUniforms(Zt,H,X,ee,u.state.transmissionRenderTarget[T.id]),Cn.upload(O,Ls(Se),Zt,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cn.upload(O,Ls(Se),Zt,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(O,"center",U.center),ot.setValue(O,"modelViewMatrix",U.modelViewMatrix),ot.setValue(O,"normalMatrix",U.normalMatrix),ot.setValue(O,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Rt=H.uniformsGroups;for(let Rr=0,di=Rt.length;Rr<di;Rr++){const Ds=Rt[Rr];D.update(Ds,kt),D.bind(Ds,kt)}}return kt}function Dl(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ul(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,k){we.get(T.texture).__webglTexture=N,we.get(T.depthTexture).__webglTexture=k;const H=we.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const k=we.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){R=T,A=N,b=k;let H=!0,U=null,ie=!1,pe=!1;if(T){const Me=we.get(T);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Me.__hasExternalTextures)E.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(Me.__boundDepthTexture!==Oe){if(Oe!==null&&we.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const Ue=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][k]:U=Ue[N],ie=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?U=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,P.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else P.copy(Re).multiplyScalar(X).floor(),F.copy(Ie).multiplyScalar(X).floor(),B=Qe;if(Te.bindFramebuffer(O.FRAMEBUFFER,U)&&H&&Te.drawBuffers(T,U),Te.viewport(P),Te.scissor(F),Te.setScissorTest(B),ie){const Me=we.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,k)}else if(pe){const Me=we.get(T.texture),ye=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,ye)}w=-1},this.readRenderTargetPixels=function(T,N,k,H,U,ie,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Te.bindFramebuffer(O.FRAMEBUFFER,Me);try{const ye=T.texture,Ue=ye.format,Oe=ye.type;if(!Ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&k>=0&&k<=T.height-U&&O.readPixels(N,k,H,U,De.convert(Ue),De.convert(Oe),ie)}finally{const ye=R!==null?we.get(R).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,N,k,H,U,ie,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const ye=T.texture,Ue=ye.format,Oe=ye.type;if(!Ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-H&&k>=0&&k<=T.height-U){Te.bindFramebuffer(O.FRAMEBUFFER,Me);const Ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),O.readPixels(N,k,H,U,De.convert(Ue),De.convert(Oe),0);const $e=R!==null?we.get(R).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,$e);const ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ec(O,ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(Ae),O.deleteSync(ct),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,k=0){T.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-k),U=Math.floor(T.image.width*H),ie=Math.floor(T.image.height*H),pe=N!==null?N.x:0,Me=N!==null?N.y:0;E.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,pe,Me,U,ie),Te.unbindTexture()},this.copyTextureToTexture=function(T,N,k=null,H=null,U=0){T.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let ie,pe,Me,ye,Ue,Oe,Ae,$e,ct;const ht=T.isCompressedTexture?T.mipmaps[U]:T.image;k!==null?(ie=k.max.x-k.min.x,pe=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,Ue=k.min.y,Oe=k.isBox3?k.min.z:0):(ie=ht.width,pe=ht.height,Me=ht.depth||1,ye=0,Ue=0,Oe=0),H!==null?(Ae=H.x,$e=H.y,ct=H.z):(Ae=0,$e=0,ct=0);const ft=De.convert(N.format),ut=De.convert(N.type);let Se;N.isData3DTexture?(E.setTexture3D(N,0),Se=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Se=O.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Se=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const bi=O.getParameter(O.UNPACK_ROW_LENGTH),Ai=O.getParameter(O.UNPACK_IMAGE_HEIGHT),kt=O.getParameter(O.UNPACK_SKIP_PIXELS),qi=O.getParameter(O.UNPACK_SKIP_ROWS),Lt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe);const br=T.isDataArrayTexture||T.isData3DTexture,ot=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Zt=we.get(T),Ar=we.get(N),Rt=we.get(Zt.__renderTarget),Rr=we.get(Ar.__renderTarget);Te.bindFramebuffer(O.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let di=0;di<Me;di++)br&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(T).__webglTexture,U,Oe+di),T.isDepthTexture?(ot&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(N).__webglTexture,U,ct+di),O.blitFramebuffer(ye,Ue,ie,pe,Ae,$e,ie,pe,O.DEPTH_BUFFER_BIT,O.NEAREST)):ot?O.copyTexSubImage3D(Se,U,Ae,$e,ct+di,ye,Ue,ie,pe):O.copyTexSubImage2D(Se,U,Ae,$e,ct+di,ye,Ue,ie,pe);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ot?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Se,U,Ae,$e,ct,ie,pe,Me,ft,ut,ht.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,U,Ae,$e,ct,ie,pe,Me,ft,ht.data):O.texSubImage3D(Se,U,Ae,$e,ct,ie,pe,Me,ft,ut,ht):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Ae,$e,ie,pe,ft,ut,ht.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Ae,$e,ht.width,ht.height,ft,ht.data):O.texSubImage2D(O.TEXTURE_2D,U,Ae,$e,ie,pe,ft,ut,ht);O.pixelStorei(O.UNPACK_ROW_LENGTH,bi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ai),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,qi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt),U===0&&N.generateMipmaps&&O.generateMipmap(Se),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k=null,H=null,U=0){return T.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,k,H,U)},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,Te.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Br{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new Br(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bf extends bt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=Nt,h=Nt,d,f){super(null,s,o,l,c,h,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new nt,Do=new nt,Mn=[],Uo=new Wi,kf=new nt,Ur=new C,Nr=new Zr;class Hf extends C{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Uo.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Uo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Nr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(i),e.ray.intersectsSphere(Nr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,or),Do.multiplyMatrices(i,or),Ur.matrixWorld=Do,Ur.raycast(e,Mn);for(let s=0,o=Mn.length;s<o;s++){const l=Mn[s];l.instanceId=a,l.object=this,t.push(l)}Mn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bf(new Float32Array(r*this.count),r,this.count,ms,$t));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vf extends bt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const h=i[r],d=i[r+1]-h,f=(s-h)/d;return(r+f)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),s=this.getPoint(r),o=t||(a.isVector2?new _e:new I);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],a=[],s=[],o=new I,l=new nt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new I)}a[0]=new I,s[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,g))}s[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos(St(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ws extends ei{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*d+this.aX,c=f*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gf extends ws{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Ts(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,d){let f=(s-a)/c-(o-a)/(c+h)+(o-s)/h,m=(o-s)/h-(l-s)/(h+d)+(l-o)/d;f*=h,m*=h,r(s,o,f,m)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const yn=new I,pa=new Ts,fa=new Ts,ma=new Ts;class Wf extends ei{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%a]:(yn.subVectors(r[0],r[1]).add(r[0]),c=yn);const d=r[o%a],f=r[(o+1)%a];if(this.closed||o+2<a?h=r[(o+2)%a]:(yn.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=yn),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),pa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,p),fa.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,p),ma.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),fa.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ma.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(pa.calc(l),fa.calc(l),ma.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function No(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function Xf(n,e){const t=1-n;return t*t*e}function qf(n,e){return 2*(1-n)*n*e}function jf(n,e){return n*n*e}function kr(n,e,t,i){return Xf(n,e)+qf(n,t)+jf(n,i)}function Yf(n,e){const t=1-n;return t*t*t*e}function Zf(n,e){const t=1-n;return 3*t*t*n*e}function Kf(n,e){return 3*(1-n)*n*n*e}function Jf(n,e){return n*n*n*e}function Hr(n,e,t,i,r){return Yf(n,e)+Zf(n,t)+Kf(n,i)+Jf(n,r)}class Sl extends ei{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Hr(e,r.x,a.x,s.x,o.x),Hr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $f extends ei{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Hr(e,r.x,a.x,s.x,o.x),Hr(e,r.y,a.y,s.y,o.y),Hr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wl extends ei{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends ei{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends ei{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(kr(e,r.x,a.x,s.x),kr(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class em extends ei{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(kr(e,r.x,a.x,s.x),kr(e,r.y,a.y,s.y),kr(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class El extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(No(o,l.x,c.x,h.x,d.x),No(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:Gf,CatmullRomCurve3:Wf,CubicBezierCurve:Sl,CubicBezierCurve3:$f,EllipseCurve:ws,LineCurve:wl,LineCurve3:Qf,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:em,SplineCurve:El});class tm extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Oo[r.type]().fromJSON(r))}return this}}class Fo extends tm{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wl(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new Tl(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new Sl(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new El(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const c=new ws(e,t,i,r,a,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ki extends Ot{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new I,h=new _e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[f]/e+1)/2,h.y=(s[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ge extends Ot{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=i/2;let u=0;M(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(m,2));function M(){const v=new I,L=new I;let A=0;const b=(t-e)/i;for(let R=0;R<=a;R++){const w=[],y=R/a,P=y*(t-e)+e;for(let F=0;F<=r;F++){const B=F/r,W=B*l+o,$=Math.sin(W),j=Math.cos(W);L.x=P*$,L.y=-y*i+p,L.z=P*j,d.push(L.x,L.y,L.z),v.set($,b,j).normalize(),f.push(v.x,v.y,v.z),m.push(B,1-y),w.push(g++)}_.push(w)}for(let R=0;R<r;R++)for(let w=0;w<a;w++){const y=_[w][R],P=_[w+1][R],F=_[w+1][R+1],B=_[w][R+1];(e>0||w!==0)&&(h.push(y,P,B),A+=3),(t>0||w!==a-1)&&(h.push(P,F,B),A+=3)}c.addGroup(u,A,0),u+=A}function x(v){const L=g,A=new _e,b=new I;let R=0;const w=v===!0?e:t,y=v===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const P=g;for(let F=0;F<=r;F++){const B=F/r*l+o,W=Math.cos(B),$=Math.sin(B);b.x=w*$,b.y=p*y,b.z=w*W,d.push(b.x,b.y,b.z),f.push(0,y,0),A.x=W*.5+.5,A.y=$*.5*y+.5,m.push(A.x,A.y),g++}for(let F=0;F<r;F++){const B=L+F,W=P+F;v===!0?h.push(W,W+1,B):h.push(W+1,W,B),R+=3}c.addGroup(u,R,v===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Si extends Ge{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Si(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends Ot{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),h(),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(a.slice(),3)),this.setAttribute("uv",new lt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new I,v=new I,L=new I;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],v),m(t[A+2],L),l(x,v,L,M)}function l(M,x,v,L){const A=L+1,b=[];for(let R=0;R<=A;R++){b[R]=[];const w=M.clone().lerp(v,R/A),y=x.clone().lerp(v,R/A),P=A-R;for(let F=0;F<=P;F++)F===0&&R===A?b[R][F]=w:b[R][F]=w.clone().lerp(y,F/P)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){const y=Math.floor(w/2);w%2===0?(f(b[R][y+1]),f(b[R+1][y]),f(b[R][y])):(f(b[R][y+1]),f(b[R+1][y+1]),f(b[R+1][y]))}}function c(M){const x=new I;for(let v=0;v<a.length;v+=3)x.x=a[v+0],x.y=a[v+1],x.z=a[v+2],x.normalize().multiplyScalar(M),a[v+0]=x.x,a[v+1]=x.y,a[v+2]=x.z}function h(){const M=new I;for(let x=0;x<a.length;x+=3){M.x=a[x+0],M.y=a[x+1],M.z=a[x+2];const v=p(M)/2/Math.PI+.5,L=u(M)/Math.PI+.5;s.push(v,1-L)}g(),d()}function d(){for(let M=0;M<s.length;M+=6){const x=s[M+0],v=s[M+2],L=s[M+4],A=Math.max(x,v,L),b=Math.min(x,v,L);A>.9&&b<.1&&(x<.2&&(s[M+0]+=1),v<.2&&(s[M+2]+=1),L<.2&&(s[M+4]+=1))}}function f(M){a.push(M.x,M.y,M.z)}function m(M,x){const v=M*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const M=new I,x=new I,v=new I,L=new I,A=new _e,b=new _e,R=new _e;for(let w=0,y=0;w<a.length;w+=9,y+=6){M.set(a[w+0],a[w+1],a[w+2]),x.set(a[w+3],a[w+4],a[w+5]),v.set(a[w+6],a[w+7],a[w+8]),A.set(s[y+0],s[y+1]),b.set(s[y+2],s[y+3]),R.set(s[y+4],s[y+5]),L.copy(M).add(x).add(v).divideScalar(3);const P=p(L);_(A,y+0,M,P),_(b,y+2,x,P),_(R,y+4,v,P)}}function _(M,x,v,L){L<0&&M.x===1&&(s[x]=M.x-1),v.x===0&&v.z===0&&(s[x]=L/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.vertices,e.indices,e.radius,e.details)}}class bs extends Es{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bs(e.radius,e.detail)}}class bl extends Fo{constructor(e){super(e),this.uuid=yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Fo().fromJSON(r))}return this}}const im={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Al(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,d,f,m;if(i&&(a=om(n,e,a,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<r;g+=t)d=n[g],f=n[g+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Wr(a,s,t,o,l,m,0),s}};function Al(n,e,t,i,r){let a,s;if(r===vm(n,e,t,i)>0)for(a=e;a<t;a+=i)s=zo(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=zo(a,n[a],n[a+1],s);return s&&Nn(s,s.next)&&(qr(s),s=s.next),s}function Gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Nn(t,t.next)||pt(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wr(n,e,t,i,r,a,s){if(!n)return;!s&&a&&dm(n,i,r,a);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,a?nm(n,i,r,a):rm(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),qr(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=am(Gi(n),e,t),Wr(n,e,t,i,r,a,2)):s===2&&sm(n,e,t,i,r,a):Wr(Gi(n),e,t,i,r,a,1);break}}}function rm(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=r<a?r<s?r:s:a<s?a:s,d=o<l?o<c?o:c:l<c?l:c,f=r>a?r>s?r:s:a>s?a:s,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=m&&cr(r,o,a,l,s,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nm(n,e,t,i){const r=n.prev,a=n,s=n.next;if(pt(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,h=r.y,d=a.y,f=s.y,m=o<l?o<c?o:c:l<c?l:c,g=h<d?h<f?h:f:d<f?d:f,_=o>l?o>c?o:c:l>c?l:c,p=h>d?h>f?h:f:d>f?d:f,u=ss(m,g,e,t,i),M=ss(_,p,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=u&&v&&v.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==s&&cr(o,h,l,d,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==s&&cr(o,h,l,d,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=u;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==s&&cr(o,h,l,d,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==s&&cr(o,h,l,d,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function am(n,e,t){let i=n;do{const r=i.prev,a=i.next.next;!Nn(r,a)&&Rl(r,i,i.next,a)&&Xr(r,a)&&Xr(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),qr(i),qr(i.next),i=n=a),i=i.next}while(i!==n);return Gi(i)}function sm(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&mm(s,o)){let l=Cl(s,o);s=Gi(s,s.next),l=Gi(l,l.next),Wr(s,e,t,i,r,a,0),Wr(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function om(n,e,t,i){const r=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=Al(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(fm(c));for(r.sort(lm),a=0;a<r.length;a++)t=cm(r[a],t);return t}function lm(n,e){return n.x-e.x}function cm(n,e){const t=hm(n,e);if(!t)return e;const i=Cl(t,n);return Gi(i,i.next),Gi(t,t.next)}function hm(n,e){let t=e,i=-1/0,r;const a=n.x,s=n.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=a&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===a))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,d;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&cr(s<c?a:i,s,l,c,s<c?i:a,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(a-t.x),Xr(t,n)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&um(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function um(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function dm(n,e,t,i){let r=n;do r.z===0&&(r.z=ss(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,pm(r)}function pm(n){let e,t,i,r,a,s,o,l,c=1;do{for(t=n,n=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;t=i}a.nextZ=null,c*=2}while(s>1);return n}function ss(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function fm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function cr(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function mm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!gm(n,e)&&(Xr(n,e)&&Xr(e,n)&&_m(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Nn(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Nn(n,e){return n.x===e.x&&n.y===e.y}function Rl(n,e,t,i){const r=wn(pt(n,e,t)),a=wn(pt(n,e,i)),s=wn(pt(t,i,n)),o=wn(pt(t,i,e));return!!(r!==a&&s!==o||r===0&&Sn(n,t,e)||a===0&&Sn(n,i,e)||s===0&&Sn(t,n,i)||o===0&&Sn(t,e,i))}function Sn(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wn(n){return n>0?1:n<0?-1:0}function gm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Xr(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function _m(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cl(n,e){const t=new os(n.i,n.x,n.y),i=new os(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function zo(n,e,t,i){const r=new os(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function os(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vm(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class Vr{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return Vr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Bo(e),ko(i,e);let s=e.length;t.forEach(Bo);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,ko(i,t[l]);const o=im.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Bo(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ko(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class As extends Ot{constructor(e=new bl([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(s,2));function c(h){const d=r.length/3,f=h.extractPoints(t);let m=f.shape;const g=f.holes;Vr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,u=g.length;p<u;p++){const M=g[p];Vr.isClockWise(M)===!0&&(g[p]=M.reverse())}const _=Vr.triangulateShape(m,g);for(let p=0,u=g.length;p<u;p++){const M=g[p];m=m.concat(M)}for(let p=0,u=m.length;p<u;p++){const M=m[p];r.push(M.x,M.y,0),a.push(0,0,1),s.push(M.x,M.y)}for(let p=0,u=_.length;p<u;p++){const M=_[p],x=M[0]+d,v=M[1]+d,L=M[2]+d;i.push(x,v,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xm(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const s=t[e.shapes[r]];i.push(s)}return new As(i,e.curveSegments)}}function xm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Qt extends Ot{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const M=[],x=u/i;let v=0;u===0&&s===0?v=.5/t:u===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(r+A*a)*Math.sin(s+x*o),d.y=e*Math.cos(s+x*o),d.z=e*Math.sin(r+A*a)*Math.sin(s+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+v,1-x),M.push(c++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){const x=h[u][M+1],v=h[u][M],L=h[u+1][M],A=h[u+1][M+1];(u!==0||s>0)&&m.push(x,v,A),(u!==i-1||l<Math.PI)&&m.push(v,L,A)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rs extends Ot{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],h=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const _=g/r*a,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,M=(r+1)*m+g;s.push(_,p,M),s.push(p,u,M)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Be extends Sr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class se extends Sr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mm extends On{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ga=new nt,Ho=new I,Vo=new I;class Pl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ho),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new nt,Or=new I,_a=new I;class ym extends Pl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Or.setFromMatrixPosition(e.matrixWorld),i.position.copy(Or),_a.copy(i.position),_a.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_a),i.updateMatrixWorld(),r.makeTranslation(-Or.x,-Or.y,-Or.z),Go.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go)}}class Xt extends On{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ym}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sm extends Pl{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends On{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tm extends On{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wo(){return performance.now()}const Xo=new nt;class bm{constructor(e,t,i=0,r=1/0){this.ray=new ll(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xo),this}intersectObject(e,t=!0,i=[]){return ls(e,this,i,t),i.sort(qo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ls(e[r],this,i,t);return i.sort(qo),i}}function qo(n,e){return n.distance-e.distance}function ls(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)ls(a[s],e,t,!0)}}class Am{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cs);class Rm{constructor(e){V(this,"scene"),V(this,"renderer"),V(this,"dirLight"),V(this,"hemiLight"),V(this,"ambientLight"),V(this,"currentTime","day"),V(this,"container"),this.container=e,this.scene=new zf;const t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<768?1:Math.min(window.devicePixelRatio,1.25);this.renderer=new Ff({antialias:!0,alpha:!1,powerPreference:"high-performance",precision:"mediump"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hs,this.renderer.toneMapping=jo,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement),this.ambientLight=new Tm(16777215,.68),this.scene.add(this.ambientLight),this.hemiLight=new Mm(16777215,5533306,.45),this.hemiLight.position.set(0,30,0),this.scene.add(this.hemiLight),this.dirLight=new wm(16775654,1.25),this.dirLight.position.set(22,32,18),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=70,this.dirLight.shadow.camera.left=-14,this.dirLight.shadow.camera.right=14,this.dirLight.shadow.camera.top=14,this.dirLight.shadow.camera.bottom=-14,this.dirLight.shadow.bias=-8e-4,this.scene.add(this.dirLight),this.setTimeOfDay("day"),window.addEventListener("resize",this.onWindowResize.bind(this))}setTimeOfDay(e){switch(this.currentTime=e,e){case"day":this.scene.background=new Xe(8900331),this.scene.fog=new Br(8900331,28,55),this.dirLight.color.setHex(16775654),this.dirLight.intensity=1.25,this.dirLight.position.set(22,32,18),this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=.68,this.hemiLight.intensity=.45;break;case"sunset":this.scene.background=new Xe(16752762),this.scene.fog=new Br(16752762,28,55),this.dirLight.color.setHex(16740419),this.dirLight.intensity=1.1,this.dirLight.position.set(30,20,16),this.ambientLight.color.setHex(16764032),this.ambientLight.intensity=.55,this.hemiLight.intensity=.35;break;case"night":this.scene.background=new Xe(659752),this.scene.fog=new Br(659752,26,52),this.dirLight.color.setHex(6056896),this.dirLight.intensity=.4,this.dirLight.position.set(16,28,14),this.ambientLight.color.setHex(2635155),this.ambientLight.intensity=.45,this.hemiLight.intensity=.25;break}}cycleTimeOfDay(){return this.currentTime==="day"?this.setTimeOfDay("sunset"):this.currentTime==="sunset"?this.setTimeOfDay("night"):this.setTimeOfDay("day"),this.currentTime}onWindowResize(){this.renderer.setSize(window.innerWidth,window.innerHeight);const e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<768;this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio,1.25))}}class Cm{constructor(){V(this,"camera"),V(this,"currentPreset","overview"),V(this,"targetPosition",new I),V(this,"targetLookAt",new I),V(this,"currentLookAt",new I),V(this,"isDragging",!1),V(this,"previousMousePosition",{x:0,y:0}),V(this,"spherical"),V(this,"isUserInteracting",!1),V(this,"initialPinchDistance",0),V(this,"initialRadius",0),this.camera=new Ut(46,window.innerWidth/window.innerHeight,.5,120),this.spherical=new Am(26,Math.PI/3.4,Math.PI/4),this.setPreset("overview",!0),this.setupPointerControls(),window.addEventListener("resize",this.onWindowResize.bind(this))}setPreset(e,t=!1){switch(this.currentPreset=e,this.isUserInteracting=!1,e){case"overview":this.targetPosition.set(16,14,20),this.targetLookAt.set(0,1.4,0);break;case"crossing_close":this.targetPosition.set(8.2,3.4,10.5),this.targetLookAt.set(0,1.6,0);break;case"driver_view":this.targetPosition.set(-2.2,2.6,14),this.targetLookAt.set(-2.2,1.4,0);break;case"train_follow":this.targetPosition.set(-14,4.5,8.5),this.targetLookAt.set(0,1.8,-2.2);break}if(t){this.camera.position.copy(this.targetPosition),this.currentLookAt.copy(this.targetLookAt),this.camera.lookAt(this.currentLookAt);const i=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(i)}}cyclePreset(){const e=["overview","crossing_close","driver_view","train_follow"],t=e.indexOf(this.currentPreset),i=e[(t+1)%e.length];return this.setPreset(i),i}update(e,t){this.isUserInteracting||(this.currentPreset==="train_follow"&&t!==void 0&&(this.targetLookAt.set(t,1.4,-2.2),this.targetPosition.set(t+11,5,10)),this.camera.position.lerp(this.targetPosition,Math.min(1,e*3.8)),this.currentLookAt.lerp(this.targetLookAt,Math.min(1,e*3.8)),this.camera.lookAt(this.currentLookAt))}setupPointerControls(){const e=a=>{const s=a.target;if(!(s&&(s.closest("button")||s.closest(".start-overlay"))))if("touches"in a){if(a.touches.length===1)this.isDragging=!0,this.previousMousePosition={x:a.touches[0].clientX,y:a.touches[0].clientY};else if(a.touches.length===2){this.isDragging=!1;const o=a.touches[0].clientX-a.touches[1].clientX,l=a.touches[0].clientY-a.touches[1].clientY;this.initialPinchDistance=Math.hypot(o,l);const c=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(c),this.initialRadius=this.spherical.radius}}else this.isDragging=!0,this.previousMousePosition={x:a.clientX,y:a.clientY}},t=a=>{if("touches"in a){if(a.touches.length===2&&this.initialPinchDistance>0){const h=a.touches[0].clientX-a.touches[1].clientX,d=a.touches[0].clientY-a.touches[1].clientY,f=Math.hypot(h,d),m=this.initialPinchDistance/f;this.isUserInteracting=!0,this.spherical.radius=Math.max(8,Math.min(48,this.initialRadius*m));const g=new I().setFromSpherical(this.spherical);this.camera.position.copy(this.currentLookAt).add(g),this.camera.lookAt(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt);return}if(a.touches.length!==1||!this.isDragging)return;const s=a.touches[0].clientX,o=a.touches[0].clientY,l=s-this.previousMousePosition.x,c=o-this.previousMousePosition.y;if(Math.abs(l)>1||Math.abs(c)>1){this.isUserInteracting=!0;const h=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(h),this.spherical.theta-=l*.005,this.spherical.phi=Math.max(.15,Math.min(Math.PI/2.05,this.spherical.phi-c*.005)),h.setFromSpherical(this.spherical),this.camera.position.copy(this.currentLookAt).add(h),this.camera.lookAt(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt)}this.previousMousePosition={x:s,y:o}}else{if(!this.isDragging)return;const s=a.clientX-this.previousMousePosition.x,o=a.clientY-this.previousMousePosition.y;if(Math.abs(s)>1||Math.abs(o)>1){this.isUserInteracting=!0;const l=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(l),this.spherical.theta-=s*.005,this.spherical.phi=Math.max(.15,Math.min(Math.PI/2.05,this.spherical.phi-o*.005)),l.setFromSpherical(this.spherical),this.camera.position.copy(this.currentLookAt).add(l),this.camera.lookAt(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt)}this.previousMousePosition={x:a.clientX,y:a.clientY}}},i=()=>{this.isDragging=!1,this.initialPinchDistance=0},r=a=>{this.isUserInteracting=!0;const s=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(s),this.spherical.radius=Math.max(8,Math.min(48,this.spherical.radius+a.deltaY*.02)),s.setFromSpherical(this.spherical),this.camera.position.copy(this.currentLookAt).add(s),this.camera.lookAt(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt)};window.addEventListener("mousedown",e),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("touchmove",t,{passive:!0}),window.addEventListener("touchend",i,{passive:!0}),window.addEventListener("wheel",r,{passive:!0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}class Pm{constructor(){V(this,"ctx",null),V(this,"isMuted",!1),V(this,"alarmInterval",null),V(this,"trainNoiseTimer",null),V(this,"masterGain",null),V(this,"html5UnlockAudio",null),V(this,"currentSoundType","standard_electronic"),V(this,"currentHornType","japanese_train_horn"),this.attachUserGestureUnlock()}attachUserGestureUnlock(){const e=()=>{try{if(!this.html5UnlockAudio){const t="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";this.html5UnlockAudio=new Audio(t),this.html5UnlockAudio.volume=.01}this.html5UnlockAudio.play().catch(()=>{})}catch{}this.init(),this.ctx&&this.ctx.state==="running"&&(window.removeEventListener("touchstart",e),window.removeEventListener("touchend",e),window.removeEventListener("pointerdown",e),window.removeEventListener("click",e))};window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("touchend",e,{passive:!0}),window.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("click",e,{passive:!0})}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});try{const e=this.ctx.createBuffer(1,1,22050),t=this.ctx.createBufferSource();t.buffer=e,t.connect(this.ctx.destination),t.start(0)}catch{}}setMuted(e){if(this.isMuted=e,this.masterGain&&this.ctx){const t=Math.max(this.ctx.currentTime,.01)+.01;this.masterGain.gain.setValueAtTime(this.isMuted?0:1,t)}this.isMuted&&(this.stopCrossingAlarm(),this.stopTrainSound())}toggleMute(){return this.setMuted(!this.isMuted),this.isMuted}getIsMuted(){return this.isMuted}playBarrierMotor(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(120,e),t.frequency.linearRampToValueAtTime(140,e+.4),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.04,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.42)}startCrossingAlarm(){if(this.isMuted||(this.init(),this.alarmInterval!==null))return;const e=()=>{this.isMuted||this.playCrossingBell()};e(),this.alarmInterval=window.setInterval(e,445)}stopCrossingAlarm(){this.alarmInterval!==null&&(clearInterval(this.alarmInterval),this.alarmInterval=null)}playCrossingBell(){if(this.isMuted||(this.init(),!this.ctx||!this.masterGain))return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01;let t=700,i=.44;this.currentSoundType==="soft_electronic"?(t=650,i=.46):this.currentSoundType==="mechanical_bell"&&(t=780,i=.52);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,e),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.65,e+.006),a.gain.exponentialRampToValueAtTime(.001,e+i),r.connect(a),a.connect(this.masterGain);const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(t*2.02,e),o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.25,e+.004),o.gain.exponentialRampToValueAtTime(.001,e+.12),s.connect(o),o.connect(this.masterGain),r.start(e),s.start(e),r.stop(e+i+.05),s.stop(e+.18)}playTrainHorn(){if(this.isMuted||(this.init(),!this.ctx||!this.masterGain))return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01;this.currentHornType==="music_horn"?this.playMusicHorn(e):this.currentHornType==="soft_whistle"?this.playTrainWhistle(e):this.playAirHorn(e)}playAirHorn(e){if(!this.ctx||!this.masterGain)return;const t=330,i=392,r=.36;[t,i].forEach(a=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(a,e);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,e),o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.24,e+.02),o.gain.setValueAtTime(.22,e+.25),o.gain.exponentialRampToValueAtTime(.001,e+r),s.connect(l),l.connect(o),o.connect(this.masterGain),s.start(e),s.stop(e+r+.05)})}playMusicHorn(e){!this.ctx||!this.masterGain||[{freq:349.23,time:0,dur:.16},{freq:440,time:.16,dur:.16},{freq:493.88,time:.32,dur:.16},{freq:587.33,time:.48,dur:.2},{freq:698.46,time:.68,dur:.65}].forEach(t=>{const i=e+t.time,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t.freq,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.25,i+.02),a.gain.exponentialRampToValueAtTime(.001,i+t.dur),r.connect(a),a.connect(this.masterGain),r.start(i),r.stop(i+t.dur+.05)})}playTrainWhistle(e){if(!this.ctx||!this.masterGain)return;const t=.55;[1046.5,1318.5].forEach(i=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,e),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.2,e+.03),a.gain.setValueAtTime(.18,e+.35),a.gain.exponentialRampToValueAtTime(.001,e+t),r.connect(a),a.connect(this.masterGain),r.start(e),r.stop(e+t+.05)})}startTrainSound(){if(this.isMuted||(this.init(),this.trainNoiseTimer!==null))return;const e=()=>{if(!this.ctx||!this.masterGain||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const t=Math.max(this.ctx.currentTime,.01)+.01,i=(r,a,s)=>{if(!this.ctx||!this.masterGain)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();o.type="triangle",o.frequency.setValueAtTime(s,r),o.frequency.exponentialRampToValueAtTime(35,r+.07),c.type="lowpass",c.frequency.setValueAtTime(300,r),l.gain.setValueAtTime(a,r),l.gain.exponentialRampToValueAtTime(.001,r+.07),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(r),o.stop(r+.08)};i(t,.22,130),setTimeout(()=>{this.ctx&&i(Math.max(this.ctx.currentTime,.01)+.01,.18,100)},65)};e(),this.trainNoiseTimer=window.setInterval(e,250)}stopTrainSound(){this.trainNoiseTimer!==null&&(clearInterval(this.trainNoiseTimer),this.trainNoiseTimer=null)}playCarHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01,t=(i,r)=>{if(!this.ctx||!this.masterGain)return;const a=e+i,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(580,a),o.gain.setValueAtTime(.001,a),o.gain.linearRampToValueAtTime(.18,a+.015),o.gain.exponentialRampToValueAtTime(.001,a+r),s.connect(o),o.connect(this.masterGain),s.start(a),s.stop(a+r+.02)};t(0,.12),t(.16,.18)}playTapSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(800,e+.08),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.1)}playStationBrakeSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01,t=Math.floor(this.ctx.sampleRate*.8),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(1400,e),s.frequency.exponentialRampToValueAtTime(450,e+.75),s.Q.setValueAtTime(2.5,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.08,e+.08),o.gain.exponentialRampToValueAtTime(.001,e+.75),a.connect(s),s.connect(o),o.connect(this.masterGain),a.start(e),a.stop(e+.8)}playStationDepartureMelody(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=[{freq:659.25,time:0,dur:.2},{freq:830.61,time:.22,dur:.2},{freq:987.77,time:.44,dur:.2},{freq:1318.51,time:.66,dur:.42}],t=Math.max(this.ctx.currentTime,.01)+.02;e.forEach(i=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i.freq,t+i.time),a.gain.setValueAtTime(.001,t+i.time),a.gain.linearRampToValueAtTime(.12,t+i.time+.03),a.gain.exponentialRampToValueAtTime(.001,t+i.time+i.dur),r.connect(a),a.connect(this.masterGain),r.start(t+i.time),r.stop(t+i.time+i.dur+.05)})}playDogBark(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=Math.max(this.ctx.currentTime,.01)+.01;[0,.16].forEach(t=>{const i=e+t,r=this.ctx.createOscillator(),a=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(580,i),r.frequency.exponentialRampToValueAtTime(290,i+.13),a.type="triangle",a.frequency.setValueAtTime(870,i),a.frequency.exponentialRampToValueAtTime(435,i+.13);const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(800,i),o.frequency.exponentialRampToValueAtTime(450,i+.13),o.Q.setValueAtTime(3.5,i),s.gain.setValueAtTime(.001,i),s.gain.linearRampToValueAtTime(.24,i+.02),s.gain.exponentialRampToValueAtTime(.001,i+.14),r.connect(o),a.connect(o),o.connect(s),s.connect(this.masterGain),r.start(i),a.start(i),r.stop(i+.15),a.stop(i+.15)})}}class Lm{constructor(){V(this,"group"),V(this,"roadMeshes",[]),V(this,"windowMaterials",[]),V(this,"streetLightMaterials",[]),V(this,"streetGroundGlows",[]),V(this,"streetPointLights",[]),V(this,"radialLightTexture"),this.group=new Ne,this.radialLightTexture=this.createRadialLightTexture(),this.createTerrain(),this.createTracks(),this.createRoad(),this.createCrossingPavement(),this.createStationPlatform(),this.createStreetlights(),this.createScenery()}createRadialLightTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,"rgba(255, 245, 210, 0.95)"),i.addColorStop(.25,"rgba(255, 224, 130, 0.65)"),i.addColorStop(.55,"rgba(255, 193, 7, 0.28)"),i.addColorStop(.8,"rgba(255, 160, 0, 0.08)"),i.addColorStop(1,"rgba(255, 140, 0, 0.00)"),t.fillStyle=i,t.fillRect(0,0,256,256),new Vf(e)}createTerrain(){const e=new Ze(65,65),t=new se({color:8112208}),i=new C(e,t);i.rotation.x=-Math.PI/2,i.position.y=-.05,i.receiveShadow=!0,this.group.add(i);const r=new Ze(65,14),a=new se({color:5227511}),s=new C(r,a);s.rotation.x=-Math.PI/2,s.position.set(0,-.04,-28),s.receiveShadow=!0,this.group.add(s)}createTracks(){const e=new Ne,t=65,i=[-2.2,2.2],r=1,a=Math.floor(t/r),s=a*i.length,o=new q(.3,.15,2.8),l=new se({color:6111287}),c=new Hf(o,l,s);c.receiveShadow=!0;const h=new xt;let d=0;i.forEach(f=>{const m=new q(t,.2,3.4),g=new se({color:7237230}),_=new C(m,g);_.position.set(0,.1,f),_.receiveShadow=!0,e.add(_);for(let v=0;v<a;v++){const L=-t/2+v*r;h.position.set(L,.22,f),h.updateMatrix(),c.setMatrixAt(d++,h.matrix)}const p=new q(t,.18,.12),u=new Be({color:14540253,metalness:.85,roughness:.2}),M=new C(p,u);M.position.set(0,.32,f-.9),e.add(M);const x=new C(p,u);x.position.set(0,.32,f+.9),e.add(x)}),c.instanceMatrix.needsUpdate=!0,e.add(c),this.group.add(e)}createRoad(){const e=new Ne,t=56,i=9,r=new Ze(i,t),a=new se({color:3622735}),s=new C(r,a);s.rotation.x=-Math.PI/2,s.position.set(0,.02,0),s.receiveShadow=!0,e.add(s),this.roadMeshes.push(s);const o=new se({color:13621468});[-5,5].forEach(c=>{const h=new q(1.4,.14,t),d=new C(h,o);d.position.set(c,.07,0),d.receiveShadow=!0,e.add(d)});const l=new wt({color:16766464});[-1,1].forEach(c=>{for(let h=5;h<t/2-2;h+=3.5){const d=new C(new Ze(.22,2),l);d.rotation.x=-Math.PI/2,d.position.set(0,.03,c*h),e.add(d)}}),[-1,1].forEach(c=>{const h=new Ne;h.position.set(-4.5*c,0,7.8*c);const d=new C(new Ge(.04,.04,2.4,8),new se({color:10395294}));d.position.y=1.2,h.add(d);const f=new C(new Si(.55,.04,3),new se({color:13959168}));f.rotation.x=Math.PI/2,f.rotation.z=Math.PI,f.position.set(0,2.2,0),h.add(f),e.add(h)}),this.group.add(e)}createCrossingPavement(){const e=new Ne,t=new q(7.6,.16,7.8),i=new se({color:2896951}),r=new C(t,i);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r),this.roadMeshes.push(r);const a=new wt({color:16777215});[-1,1].forEach(s=>{const o=new C(new Ze(3.6,.45),a);o.rotation.x=-Math.PI/2,o.position.set(-1.9*s,.035,6.4*s),e.add(o)}),this.group.add(e)}createStationPlatform(){const e=new Ne,t=new q(22,.95,3.2),i=new se({color:11583173}),r=new C(t,i);r.position.set(18,.48,-5.4),r.receiveShadow=!0,e.add(r);const a=new q(21.6,.02,.25),s=new wt({color:16766464}),o=new C(a,s);o.position.set(18,.96,-4.2),e.add(o);const l=new q(18,.18,3.6),c=new se({color:4545124}),h=new C(l,c);h.position.set(18,2.8,-5.4),e.add(h);const d=new se({color:15658734});[-7,-2,3,7].forEach(f=>{const m=new C(new Ge(.06,.06,2,8),d);m.position.set(18+f,1.9,-5.4),e.add(m)}),this.group.add(e)}createStreetlights(){const e=[{x:5.4,z:9,armDir:-1},{x:-5.4,z:9,armDir:1},{x:5.4,z:-9,armDir:-1},{x:-5.4,z:-9,armDir:1}],t=new se({color:4545124}),i=new se({color:2503224});e.forEach(r=>{const a=new Ne;a.position.set(r.x,0,r.z);const s=new C(new Ge(.07,.07,3.8,8),t);s.position.y=1.9,s.castShadow=!0,a.add(s);const o=new C(new q(.8,.08,.08),t);o.position.set(r.armDir*.4,3.8,0),a.add(o);const l=new C(new q(.45,.08,.22),i);l.position.set(r.armDir*.75,3.82,0),a.add(l);const c=new Be({color:16777215,emissive:16769154,emissiveIntensity:.3,roughness:.1}),h=new C(new Ze(.4,.18),c);h.rotation.x=Math.PI/2,h.position.set(r.armDir*.75,3.77,0),a.add(h),this.streetLightMaterials.push(c);const d=new Ze(7,7),f=new wt({map:this.radialLightTexture,transparent:!0,blending:va,depthWrite:!1,opacity:0}),m=new C(d,f);m.rotation.x=-Math.PI/2,m.position.set(r.armDir*.75,.038,0),a.add(m),this.streetGroundGlows.push(m);const g=new Xt(16769154,0,9,2);g.position.set(r.armDir*.75,3.6,0),a.add(g),this.streetPointLights.push(g),this.group.add(a)})}createScenery(){const e=new Ne;[{x:-11,z:-10},{x:-16,z:-12},{x:-18,z:14},{x:-22,z:12},{x:12,z:11},{x:18,z:13},{x:-22,z:5},{x:-24,z:-6}].forEach((t,i)=>{const r=this.createTree(i%2===0);r.position.set(t.x,0,t.z),e.add(r)}),[{x:-15,z:-19,color:16740419,roof:13840175,scale:1.1},{x:-22,z:-18,color:4367861,roof:1668818,scale:.95},{x:16,z:-18,color:16763432,roof:16088064,scale:1},{x:-14,z:20,color:11225020,roof:8069026,scale:.95},{x:15,z:19,color:2533018,roof:31083,scale:1.05}].forEach(t=>{const i=this.createHouse(t.color,t.roof,t.scale);i.position.set(t.x,0,t.z),e.add(i)}),this.group.add(e)}createTree(e){const t=new Ne,i=new C(new Ge(.18,.24,1.2,6),new se({color:6111287}));i.position.y=.6,t.add(i);const r=[4431943,6732650,3046706],a=new se({color:r[Math.floor(Math.random()*r.length)],flatShading:!0});if(e){const s=new C(new bs(1.1,1),a);s.position.y=1.8,t.add(s)}else{const s=new C(new Si(1.1,1.6,6),a);s.position.y=1.6,t.add(s)}return t}createHouse(e,t,i){const r=new Ne;r.scale.set(i,i,i);const a=new C(new q(3.6,2.4,3),new se({color:e}));a.position.y=1.2,a.receiveShadow=!0,r.add(a);const s=new C(new Si(2.9,1.6,4),new se({color:t}));s.rotation.y=Math.PI/4,s.position.y=3,r.add(s);const o=new Be({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2});this.windowMaterials.push(o);const l=new C(new q(.7,.7,.1),o);l.position.set(-.9,1.35,1.52),r.add(l);const c=new C(new q(.7,.7,.1),o);c.position.set(.9,1.35,1.52),r.add(c);const h=new C(new q(.8,1.3,.1),new se({color:9268835}));return h.position.set(0,.65,1.52),r.add(h),r}setNightMode(e){this.windowMaterials.forEach(t=>{e?(t.color.setHex(16775620),t.emissive.setHex(16766287),t.emissiveIntensity=1.4):(t.color.setHex(14743546),t.emissive.setHex(0),t.emissiveIntensity=0)}),this.streetLightMaterials.forEach(t=>{e?(t.color.setHex(16777215),t.emissive.setHex(16774557),t.emissiveIntensity=2.8):(t.color.setHex(16777215),t.emissive.setHex(16769154),t.emissiveIntensity=.3)}),this.streetGroundGlows.forEach(t=>{const i=t.material;i&&(i.opacity=e?.75:0)}),this.streetPointLights.forEach(t=>{t.intensity=e?1.5:0})}}class Im{constructor(){V(this,"group"),V(this,"gates",[]),V(this,"clickableMeshes",[]),V(this,"barrierAngle",Math.PI*.42),V(this,"targetBarrierAngle",Math.PI*.42),V(this,"blinkTimer",0),V(this,"isBlinking",!1),V(this,"blinkPhase",!1),this.group=new Ne;const e=this.createGate({x:4.8,z:5.2,rotationY:0,armDirection:-1});this.group.add(e.group),this.gates.push(e);const t=this.createGate({x:-4.8,z:-5.2,rotationY:Math.PI,armDirection:-1});this.group.add(t.group),this.gates.push(t)}createGate(e){const t=new Ne;t.position.set(e.x,0,e.z),t.rotation.y=e.rotationY;const i=new Ge(.52,.62,.4,16),r=new se({color:10395294}),a=new C(i,r);a.position.y=.2,a.receiveShadow=!0,t.add(a);const s=new Ge(.32,.35,.08,16),o=new se({color:3622735}),l=new C(s,o);l.position.y=.44,t.add(l);const c=4.5,h=.11,d=new Ne,f=9,m=(c-.48)/f;for(let te=0;te<f;te++){const Ce=new Ge(h,h,m,16),We=new se({color:te%2===0?16766464:2171169}),tt=new C(Ce,We);tt.position.y=.48+m/2+te*m,tt.castShadow=!0,d.add(tt),this.clickableMeshes.push(tt)}t.add(d);const g=new Ne;g.position.y=c;const _=new Qt(.22,16,12,0,Math.PI*2,0,Math.PI*.52),p=new se({color:2171169}),u=new C(_,p);u.position.y=-.02,u.castShadow=!0,g.add(u);const M=new C(new Ge(.03,.04,.06,12),new se({color:3355443}));M.position.y=.2,g.add(M),t.add(g),this.clickableMeshes.push(u);const x=new Ne;x.position.set(0,3.8,.14);const v=new se({color:16766464}),L=new se({color:2171169}),A=new Be({color:13621468,metalness:.8,roughness:.2}),b=1.85,R=.32,w=.02,y=(te,Ce)=>{const We=new Ne;We.rotation.z=te,We.position.z=Ce;const tt=new C(new q(b,R,w),v);return tt.castShadow=!0,We.add(tt),[-.46,.46].forEach(Ke=>{const yt=new C(new q(.36,R+.002,w+.002),L);yt.position.set(Ke,0,0),We.add(yt)}),We},P=y(Math.PI*.22,0),F=y(-Math.PI*.22,.008);x.add(P,F);const B=new bl,W=.22,$=.17;B.moveTo(0,$),B.lineTo(W,0),B.lineTo(0,-$),B.lineTo(-W,0),B.closePath();const j=new As(B),ee=new C(j,L);ee.position.set(0,0,.022),x.add(ee);const X=[[-.08,.06],[-.08,-.06],[.08,.06],[.08,-.06],[-.03,0],[.03,0]],re=new Ge(.016,.016,.02,12);re.rotateX(Math.PI/2),X.forEach(([te,Ce])=>{const We=new C(re,A);We.position.set(te,Ce,.03),x.add(We)});const de=new Ge(.04,.04,.14,8);de.rotateX(Math.PI/2);const Re=new C(de,L);Re.position.z=-.07,x.add(Re),t.add(x);const Ie=new Ne;Ie.position.set(0,2.7,.15);const Qe=new Ge(.045,.045,1.5,12);Qe.rotateZ(Math.PI/2);const Y=new se({color:2763306}),ae=new C(Qe,Y);Ie.add(ae);const xe=new Ge(.12,.12,.16,16),he=new C(xe,Y);Ie.add(he);const be=te=>{const Ce=new Ne;Ce.position.set(te,0,.06);const We=new Ge(.34,.34,.02,28);We.rotateX(Math.PI/2);const tt=new se({color:1118481}),Ke=new C(We,tt);Ce.add(Ke);const yt=new Ge(.24,.24,.12,28);yt.rotateX(Math.PI/2);const Bt=new se({color:2236962}),Tr=new C(yt,Bt);Tr.position.z=.07,Ce.add(Tr);const Er=new Qt(.21,24,12,0,Math.PI*2,0,Math.PI*.45);Er.rotateX(Math.PI/2);const ti=new Be({color:4849664,emissive:0,emissiveIntensity:0,roughness:.15,metalness:.05}),Ei=new C(Er,ti);Ei.position.z=.13,Ce.add(Ei);const Xi=new Xt(16711680,0,10,1.8);return Xi.position.set(0,0,.35),Ce.add(Xi),{singleLamp:Ce,lens:Ei,pointLight:Xi}},Le=be(-.64);Ie.add(Le.singleLamp);const Ve=Le.lens,st=Le.pointLight,qe=be(.64);Ie.add(qe.singleLamp);const dt=qe.lens,O=qe.pointLight;t.add(Ie);const Mt=new Ne;Mt.position.set(.28*e.armDirection,1.35,.14);const je=new q(.26,.4,.18),Ye=new se({color:16766464}),Te=new C(je,Ye);Mt.add(Te);const at=new Be({color:16717636,emissive:13959168,emissiveIntensity:.4,roughness:.3}),we=new C(new Ge(.06,.06,.06,16),at);we.rotation.x=Math.PI/2,we.position.z=.1,Mt.add(we),t.add(Mt),this.clickableMeshes.push(Te,we);const E=new Ne;E.position.set(-.7*e.armDirection,0,.35);const S=.65,z=.52,Z=.75/3,Q=new C(new q(S,Z,z),v);Q.position.y=.58+Z/2,Q.castShadow=!0,E.add(Q);const K=new C(new q(S+.002,Z,z+.002),L);K.position.y=.58+Z*1.5,K.castShadow=!0,E.add(K);const ve=new C(new q(S,Z,z),v);ve.position.y=.58+Z*2.5,ve.castShadow=!0,E.add(ve),this.clickableMeshes.push(Q,K,ve);const ce=new C(new q(.72,.58,.58),new se({color:10395294}));ce.position.y=.29,E.add(ce);const fe=new C(new q(.52,.68,.02),new se({color:2763306}));fe.position.set(0,.955,.27),E.add(fe);const Fe=new Ne;Fe.position.set(0,1.05,.32);const ne=new q(.95,.28,.22),me=new se({color:2503224}),Ee=new C(ne,me);Ee.position.set(-.55*e.armDirection,0,0),Ee.castShadow=!0,Fe.add(Ee);const Pe=new C(new Ge(.12,.12,.22,16),new se({color:1118481}));Pe.rotation.x=Math.PI/2,Fe.add(Pe);const ge=8.6,ze=new Ne,De=16,et=ge/De;for(let te=0;te<De;te++){const Ce=new q(et,.13,.07),We=new se({color:te%2===0?16766464:2171169}),tt=new C(Ce,We);tt.position.set((te*et+et/2)*e.armDirection,0,0),tt.castShadow=!0,ze.add(tt)}const D=new Qt(.09,12,12),oe=new Be({color:6684672,emissive:0,roughness:.2}),G=new C(D,oe);G.position.set(3.2*e.armDirection,.09,0),ze.add(G);const J=new C(D,oe);J.position.set(6.4*e.armDirection,.09,0),ze.add(J);const ue=new Xt(16717636,0,6);return ue.position.set(4.8*e.armDirection,.15,.15),ze.add(ue),Fe.add(ze),E.add(Fe),t.add(E),Fe.rotation.z=-this.barrierAngle,{group:t,pole:d.children[0],barrierPivot:Fe,barrierArm:ze.children[0],redLightLeft:Ve,redLightRight:dt,pointLightLeft:st,pointLightRight:O,armLight:G,armPointLight:ue,leftIntensity:0,rightIntensity:0}}setTrainDirection(e){}setBlinking(e){this.isBlinking=e,e||this.gates.forEach(t=>{t.leftIntensity=0,t.rightIntensity=0,t.redLightLeft.material.emissive.setHex(0),t.redLightRight.material.emissive.setHex(0),t.pointLightLeft.intensity=0,t.pointLightRight.intensity=0,t.armLight.material.emissive.setHex(0),t.armPointLight.intensity=0})}setTargetBarrierAngle(e){this.targetBarrierAngle=e?0:Math.PI*.42}update(e){if(Math.abs(this.barrierAngle-this.targetBarrierAngle)>.005&&(this.barrierAngle<this.targetBarrierAngle?this.barrierAngle=Math.min(this.targetBarrierAngle,this.barrierAngle+1.45*e):this.barrierAngle=Math.max(this.targetBarrierAngle,this.barrierAngle-1.45*e),this.gates[0].barrierPivot.rotation.z=-this.barrierAngle,this.gates[1].barrierPivot.rotation.z=-this.barrierAngle),this.isBlinking){this.blinkTimer+=e,this.blinkTimer>=.445&&(this.blinkTimer=0,this.blinkPhase=!this.blinkPhase);const t=this.blinkPhase?1:0,i=this.blinkPhase?0:1,r=12;this.gates.forEach(a=>{a.leftIntensity+=(t-a.leftIntensity)*Math.min(e*r,1),a.rightIntensity+=(i-a.rightIntensity)*Math.min(e*r,1);const s=a.redLightLeft.material,o=a.redLightRight.material;s.emissive.setRGB(a.leftIntensity*1,0,0),s.emissiveIntensity=a.leftIntensity*1.6,a.pointLightLeft.intensity=a.leftIntensity*2.8,o.emissive.setRGB(a.rightIntensity*1,0,0),o.emissiveIntensity=a.rightIntensity*1.6,a.pointLightRight.intensity=a.rightIntensity*2.8;const l=a.armLight.material,c=(a.leftIntensity+a.rightIntensity)*.5;l.emissive.setRGB(c*.9,0,0),a.armPointLight.intensity=c*1.2})}}isBarrierFullyDown(){return this.barrierAngle<=.05}isBarrierFullyUp(){return this.barrierAngle>=Math.PI*.4}}class Dm{constructor(e){V(this,"group"),V(this,"clickableMeshes",[]),V(this,"dogGroup"),V(this,"dogHead"),V(this,"dogTail"),V(this,"dogMouth"),V(this,"dogLegs",[]),V(this,"state","inside"),V(this,"stateTimer",0),V(this,"barkIntervalTimer",0),V(this,"soundEngine"),V(this,"INSIDE_POS",new I(0,0,-.5)),V(this,"OUTSIDE_POS",new I(0,0,1.5)),this.soundEngine=e,this.group=new Ne,this.group.position.set(-6.8,0,5.6),this.group.rotation.y=Math.PI/2,this.group.scale.set(.78,.78,.78),this.buildDogHouse(),this.buildDog(),this.buildYardAccessories()}buildDogHouse(){const e=new Ne,t=new se({color:9268835}),i=new C(new q(2.4,.16,2.6),t);i.position.y=.08,i.receiveShadow=!0,e.add(i),this.clickableMeshes.push(i);const r=new se({color:14596231}),a=new C(new q(.12,1.5,2.3),r);a.position.set(-1.05,.85,0),a.castShadow=!0,e.add(a),this.clickableMeshes.push(a);const s=new C(new q(.12,1.5,2.3),r);s.position.set(1.05,.85,0),s.castShadow=!0,e.add(s),this.clickableMeshes.push(s);const o=new C(new q(2.2,1.5,.12),r);o.position.set(0,.85,-1.1),o.castShadow=!0,e.add(o),this.clickableMeshes.push(o);const l=new C(new q(.55,1.5,.12),r);l.position.set(-.75,.85,1.1),e.add(l),this.clickableMeshes.push(l);const c=new C(new q(.55,1.5,.12),r);c.position.set(.75,.85,1.1),e.add(c),this.clickableMeshes.push(c);const h=new C(new q(1.1,.45,.12),r);h.position.set(0,1.38,1.1),e.add(h),this.clickableMeshes.push(h);const d=new se({color:15022389}),f=new C(new q(1.6,.14,2.8),d);f.rotation.z=Math.PI/4.8,f.position.set(-.62,1.95,0),f.castShadow=!0,e.add(f),this.clickableMeshes.push(f);const m=new C(new q(1.6,.14,2.8),d);m.rotation.z=-Math.PI/4.8,m.position.set(.62,1.95,0),m.castShadow=!0,e.add(m),this.clickableMeshes.push(m);const g=new C(new q(.18,.18,2.85),new se({color:12000284}));g.position.set(0,2.3,0),e.add(g);const _=new se({color:16775393}),p=new C(new q(.75,.24,.04),_);p.position.set(0,1.45,1.18),e.add(p);const u=new C(new Ge(.06,.06,.02,8),new se({color:15277667}));u.rotation.x=Math.PI/2,u.position.set(0,1.45,1.21),e.add(u),this.group.add(e)}buildYardAccessories(){const e=new Ne,t=new Be({color:166097,metalness:.2,roughness:.3}),i=new C(new Ge(.3,.38,.16,16),t);i.position.set(1.4,.08,1.3),e.add(i),this.clickableMeshes.push(i);const r=new se({color:7162945}),a=new C(new Ge(.26,.26,.06,12),r);a.position.set(1.4,.15,1.3),e.add(a);const s=new se({color:16777215}),o=new C(new Ge(.04,.04,.4,8),s);o.rotation.z=Math.PI/2,o.rotation.y=Math.PI/3.5,o.position.set(1.35,.23,1.28),e.add(o);const l=new se({color:16777215});for(let h=-1.8;h<=1.8;h+=.45){const d=new C(new q(.08,.85,.04),l);d.position.set(h,.42,-1.4),e.add(d)}const c=new C(new q(4,.06,.04),l);c.position.set(0,.52,-1.4),e.add(c),this.group.add(e)}buildDog(){this.dogGroup=new Ne,this.dogGroup.position.set(0,0,1.6);const e=new se({color:16485376}),t=new se({color:16775620}),i=new se({color:2171169}),r=new wt({color:1710618}),a=new se({color:16728193}),s=new C(new q(.7,.7,1.05),e);s.position.y=.58,s.castShadow=!0,this.dogGroup.add(s),this.clickableMeshes.push(s);const o=new C(new q(.5,.5,.45),t);o.position.set(0,.52,.35),this.dogGroup.add(o),this.dogHead=new Ne,this.dogHead.position.set(0,.95,.48);const l=new q(.58,.55,.58),c=new C(l,e);this.dogHead.add(c);const h=new C(new q(.34,.26,.34),t);h.position.set(0,-.08,.4),this.dogHead.add(h);const d=new C(new Qt(.065,8,8),i);d.position.set(0,.02,.57),this.dogHead.add(d),[-.17,.17].forEach(p=>{const u=new C(new Qt(.055,8,8),r);u.position.set(p,.09,.3),this.dogHead.add(u);const M=new C(new Qt(.02,6,6),new wt({color:16777215}));M.position.set(p+.015,.11,.34),this.dogHead.add(M)}),[-.22,.22].forEach(p=>{const u=new C(new Si(.13,.26,4),e);u.rotation.y=Math.PI/4,u.rotation.z=(p>0?-1:1)*.25,u.position.set(p,.38,0),this.dogHead.add(u)});const f=new C(new Ge(.34,.34,.08,12),new se({color:13959168}));f.position.set(0,-.24,0),this.dogHead.add(f);const m=new C(new Qt(.065,8,8),new Be({color:16766720,metalness:.9,roughness:.1}));m.position.set(0,-.26,.35),this.dogHead.add(m),this.dogMouth=new C(new q(.2,.08,.22),a),this.dogMouth.position.set(0,-.17,.44),this.dogHead.add(this.dogMouth),this.dogGroup.add(this.dogHead),this.clickableMeshes.push(c);const g=new Ge(.09,.09,.38,8);[{x:-.24,z:.32},{x:.24,z:.32},{x:-.24,z:-.32},{x:.24,z:-.32}].forEach(p=>{const u=new C(g,e);u.position.set(p.x,.19,p.z),this.dogGroup.add(u),this.dogLegs.push(u)});const _=new Rs(.2,.08,8,12,Math.PI*1.3);this.dogTail=new C(_,e),this.dogTail.rotation.x=Math.PI/2.5,this.dogTail.position.set(0,.78,-.52),this.dogGroup.add(this.dogTail),this.group.add(this.dogGroup),this.dogGroup.position.copy(this.INSIDE_POS)}triggerDogBark(){return this.state==="inside"?(this.state="running_out",this.stateTimer=0,this.soundEngine.playTapSound(),!0):this.state==="barking"?(this.soundEngine.playDogBark(),this.stateTimer=4,!0):!1}update(e){const t=Date.now()*.001;switch(this.state){case"inside":this.dogGroup.position.copy(this.INSIDE_POS),this.dogGroup.position.y=0,this.dogHead.rotation.set(0,0,0),this.dogMouth.scale.set(1,.2,1);break;case"running_out":this.stateTimer+=e;const i=Math.min(1,this.stateTimer/.4);this.dogGroup.position.lerpVectors(this.INSIDE_POS,this.OUTSIDE_POS,i),this.dogGroup.position.y=Math.sin(i*Math.PI)*.35,i>=1&&(this.dogGroup.position.copy(this.OUTSIDE_POS),this.dogGroup.position.y=0,this.state="barking",this.stateTimer=4,this.barkIntervalTimer=0,this.soundEngine.playDogBark());break;case"barking":this.stateTimer-=e,this.barkIntervalTimer+=e,this.barkIntervalTimer>=.7&&this.stateTimer>.4&&(this.soundEngine.playDogBark(),this.barkIntervalTimer=0),this.dogTail.rotation.y=Math.sin(t*28)*.55;const r=Math.sin(t*18);this.dogHead.rotation.x=r*.28,this.dogMouth.scale.y=r>0?2.2:.4,this.dogGroup.position.y=Math.max(0,Math.sin(t*18)*.28),this.stateTimer<=0&&(this.state="returning",this.stateTimer=0);break;case"returning":this.stateTimer+=e;const a=Math.min(1,this.stateTimer/.6);this.dogGroup.position.lerpVectors(this.OUTSIDE_POS,this.INSIDE_POS,a),this.dogGroup.position.y=Math.sin(a*Math.PI)*.18,a>=1&&(this.dogGroup.position.copy(this.INSIDE_POS),this.dogGroup.position.y=0,this.state="inside");break}}dispose(){this.group.traverse(e=>{if(e.isMesh){const t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material&&t.material.dispose()}})}}const Ll={yamanote:{type:"yamanote",name:"みどりの電車 🚃",bodyColor:14080991,stripeColor:7780394,roofColor:7901340,accentColor:1710618,category:"commuter",isStainless:!0},freight:{type:"freight",name:"かもつ列車 📦",bodyColor:870305,stripeColor:16777215,roofColor:4545124,category:"freight",isStainless:!1},hayabusa:{type:"hayabusa",name:"みどりの新幹線 🚅",bodyColor:16119802,stripeColor:14942335,roofColor:34681,category:"shinkansen",isStainless:!1},komachi:{type:"komachi",name:"あかい新幹線 🚅",bodyColor:16119802,stripeColor:12000284,roofColor:12000284,category:"shinkansen",isStainless:!1},doctor_yellow:{type:"doctor_yellow",name:"きいろい新幹線 🚄",bodyColor:16766464,stripeColor:870305,roofColor:9479342,category:"shinkansen",isStainless:!1},express:{type:"express",name:"とっきゅう列車 🚩",bodyColor:16777215,stripeColor:13959168,roofColor:1710618,category:"express",isStainless:!1},chuo:{type:"chuo",name:"オレンジの電車 🚃",bodyColor:14080991,stripeColor:16739584,roofColor:7901340,category:"commuter",isStainless:!0},steam:{type:"steam",name:"SLきかんしゃ 🚂",bodyColor:1710618,stripeColor:12434877,roofColor:1118481,category:"steam",isStainless:!1},shonan:{type:"shonan",name:"ツートンカラーの電車 🚃",bodyColor:1793568,stripeColor:15094016,roofColor:6381921,category:"commuter",isStainless:!1}};class Um{constructor(e="yamanote",t=1,i=2){V(this,"group"),V(this,"totalLength",0),V(this,"wheels",[]),V(this,"headLights",[]),V(this,"windowMeshes",[]),this.group=new Ne;const r=Ll[e],a=i===2?8.6:11,s=2.55,o=2.6,l=.4;if(r.category==="freight")this.buildFreightFormation(10,s,o,l,t),this.totalLength=30+l*2;else if(r.category==="steam")this.buildSteamFormation(9,s,o,l,t),this.totalLength=27+l*2;else if(i===2){const c=this.createCar(r,a,s,o,"lead",t);c.position.x=(a+l)*.5*t,this.group.add(c);const h=this.createCar(r,a,s,o,"tail",t);h.position.x=-(a+l)*.5*t,this.group.add(h),this.createGangway(0,s,o),this.totalLength=(a+l)*2}else{const c=this.createCar(r,a,s,o,"lead",t);c.position.x=(a+l)*t,this.group.add(c);const h=this.createCar(r,a,s,o,"mid",t);h.position.x=0,this.group.add(h);const d=this.createCar(r,a,s,o,"tail",t);d.position.x=-(a+l)*t,this.group.add(d),this.createGangway((a+l)*t*.5,s,o),this.createGangway(-(a+l)*t*.5,s,o),this.totalLength=(a+l)*3}}createCar(e,t,i,r,a,s){const o=new Ne;return e.category==="shinkansen"?this.buildShinkansenCar(o,e,t,i,r,a,s):e.category==="express"?this.buildExpressCar(o,e,t,i,r,a,s):this.buildCommuterCar(o,e,t,i,r,a,s),this.buildUnderfloorEquipment(o,t,i),this.buildBogies(o,t,i),o}buildFreightFormation(e,t,i,r,a){const s=new Ne;this.buildElectricLocomotive(s,e,t,i,a),this.buildBogies(s,e,t),s.position.x=(e+r)*a,this.group.add(s);const o=new Ne;this.buildContainerCar(o,e,t,i),this.buildBogies(o,e,t),o.position.x=0,this.group.add(o);const l=new Ne;this.buildTankCar(l,e,t,i),this.buildBogies(l,e,t),l.position.x=-(e+r)*a,this.group.add(l)}buildSteamFormation(e,t,i,r,a){const s=new Ne;this.buildSteamLocomotive(s,e,t,i,a),this.buildBogies(s,e,t),s.position.x=(e+r)*a,this.group.add(s);const o=new Ne;this.buildRetroPassengerCar(o,e,t,i),this.buildBogies(o,e,t),o.position.x=0,this.group.add(o);const l=new Ne;this.buildRetroPassengerCar(l,e,t,i),this.buildBogies(l,e,t),l.position.x=-(e+r)*a,this.group.add(l)}buildElectricLocomotive(e,t,i,r,a){const s=new Be({color:870305,roughness:.3}),o=new Be({color:16777215,roughness:.3}),l=new se({color:4545124}),c=new q(t,r*.9,i),h=new C(c,s);h.position.y=r*.45+.52,h.castShadow=!0,e.add(h);const d=new C(new q(t+.02,.35,i+.02),o);d.position.y=r*.45+.52,e.add(d);const f=new C(new q(t*.95,.35,i*.9),l);f.position.y=r+.52,e.add(f);const m=this.createSingleArmPantograph(i);m.position.set(-t*.32,r+.52+.25,0),e.add(m);const g=this.createSingleArmPantograph(i);g.position.set(t*.32,r+.52+.25,0),g.rotation.y=Math.PI,e.add(g);const _=new wt({color:16777200});[-i*.32,i*.32].forEach(u=>{const M=new C(new ki(.16,16),_);M.rotation.y=Math.PI/2*a,M.position.set((t/2+.02)*a,r*.4+.52,u),e.add(M)});const p=new Xt(16776679,2.5,30);p.position.set((t/2+1.5)*a,r*.5+.52,0),e.add(p),this.headLights.push(p)}buildContainerCar(e,t,i,r){const a=new Be({color:3622735,metalness:.6,roughness:.3}),s=new C(new q(t,.22,i),a);s.position.y=.62,s.castShadow=!0,e.add(s);const o=[9249828,1793568,9249828],l=3,c=t*.88/l,h=i*.92,d=r*.78;for(let f=0;f<l;f++){const m=-t*.32+f*(c+.15),g=new Be({color:o[f],roughness:.4}),_=new C(new q(c,d,h),g);_.position.set(m,.62+.11+d/2,0),_.castShadow=!0,e.add(_);const p=new C(new q(c+.01,.18,h+.01),new wt({color:16777215}));p.position.set(m,.62+.11+d*.5,0),e.add(p)}}buildTankCar(e,t,i,r){const a=new Be({color:19776,roughness:.3}),s=new Be({color:7901340,roughness:.3}),o=new C(new q(t,.22,i),new se({color:2171169}));o.position.y=.62,e.add(o);const l=i*.46,c=t*.88,h=new Ge(l,l,c,24);h.rotateZ(Math.PI/2);const d=new C(h,a);d.position.set(0,.62+l+.15,0),d.castShadow=!0,e.add(d),[-c/2,c/2].forEach(m=>{const g=new C(new Qt(l,16,12,0,Math.PI*2,0,Math.PI*.4),s);g.rotation.z=m>0?-Math.PI/2:Math.PI/2,g.position.set(m,.62+l+.15,0),e.add(g)});const f=new C(new q(c*.75,.08,i*.35),s);f.position.set(0,.62+l*2+.18,0),e.add(f)}buildSteamLocomotive(e,t,i,r,a){const s=new Be({color:1118481,roughness:.3}),o=new Be({color:12434877,metalness:.8,roughness:.2}),l=i*.44,c=t*.55,h=new Ge(l,l,c,24);h.rotateZ(Math.PI/2);const d=new C(h,s);d.position.set(t*.12*a,.62+l+.2,0),d.castShadow=!0,e.add(d);const f=new C(new Ge(.18,.22,.65,16),s);f.position.set(t*.32*a,.62+l*2+.4,0),e.add(f),[-i*.48,i*.48].forEach(u=>{const M=new C(new q(1.6,1.4,.05),s);M.position.set(t*.3*a,.62+.85,u),e.add(M)});const m=new C(new q(2.4,r*.85,i*.95),s);m.position.set(-t*.18*a,r*.45+.62,0),e.add(m);const g=new C(new q(t*.32,r*.75,i*.92),s);g.position.set(-t*.36*a,r*.38+.62,0),e.add(g);const _=new C(new Ge(.24,.24,.28,16),o);_.rotateZ(Math.PI/2),_.position.set(t*.4*a,.62+l*2+.1,0),e.add(_);const p=new Xt(16776679,2.5,30);p.position.set(t*.45*a,.62+l*2+.1,0),e.add(p),this.headLights.push(p)}buildRetroPassengerCar(e,t,i,r){const a=new Be({color:4073251,roughness:.4}),s=new se({color:2171169}),o=new Be({color:2496271,emissive:16758605,emissiveIntensity:.35,roughness:.2}),l=new C(new q(t,r,i),a);l.position.y=r/2+.52,l.castShadow=!0,e.add(l);const c=new C(new q(t,.35,i*.94),s);c.position.y=r+.52+.12,e.add(c);const h=9,d=t/(h+1);for(let f=1;f<=h;f++){const m=-t/2+f*d;[-i/2-.015,i/2+.015].forEach((g,_)=>{const p=new C(new Ze(.7,.5),o);p.position.set(m,r*.6+.52,g),_===0&&(p.rotation.y=Math.PI),e.add(p),this.windowMeshes.push(p)})}}buildExpressCar(e,t,i,r,a,s,o){const l=new Be({color:16777215,roughness:.25}),c=new Be({color:13959168,roughness:.3}),h=new Be({color:1710618,roughness:.2}),d=new C(new q(i,a,r),l);d.position.y=a/2+.52,d.castShadow=!0,e.add(d);const f=new C(new q(i,.35,r*.94),c);f.position.y=a+.52+.12,e.add(f);const m=new C(new q(i+.02,.25,r+.02),c);if(m.position.y=a*.45+.52,e.add(m),s==="lead"||s==="tail"){const g=s==="lead",_=g?o:-o,p=new C(new q(.4,a*.95,r*.95),h);if(p.position.set((i/2+.1)*_,a/2+.52,0),e.add(p),g){const u=new Xt(16776679,2.5,30);u.position.set((i/2+1.5)*o,a*.5+.52,0),e.add(u),this.headLights.push(u)}}}buildCommuterCar(e,t,i,r,a,s,o){const l=t.isStainless?new Be({color:t.bodyColor,metalness:.75,roughness:.28}):new se({color:t.bodyColor}),c=new Be({color:t.stripeColor,metalness:.1,roughness:.4}),h=new se({color:t.roofColor}),d=new Be({color:1713022,emissive:16775620,emissiveIntensity:.18,roughness:.1,metalness:.8}),f=new Be({color:11583173,metalness:.8,roughness:.25}),m=new q(i,a,r),g=new C(m,l);g.position.y=a/2+.52,g.castShadow=!0,g.receiveShadow=!0,e.add(g);const _=new C(new q(i+.02,.42,r+.02),c);_.position.y=a*.44+.52,e.add(_);const p=new C(new q(i+.02,.15,r+.02),c);p.position.y=a*.88+.52,e.add(p);const u=new C(new q(i,.32,r*.94),h);u.position.y=a+.52+.1,u.castShadow=!0,e.add(u);const M=i*.38,x=new C(new q(M,.3,r*.58),new Be({color:9479342,metalness:.6,roughness:.3}));x.position.y=a+.52+.36,x.castShadow=!0,e.add(x);const v=4,L=i/(v+.5);for(let A=0;A<v;A++){const b=-i*.4+A*(L*.88);if([-r/2-.015,r/2+.015].forEach((R,w)=>{const y=new C(new Ze(1.25,a*.86),f);y.position.set(b,a*.48+.52,R),w===0&&(y.rotation.y=Math.PI),e.add(y);const P=new C(new Ze(.85,a*.38),d);P.position.set(b,a*.64+.52,R+(w===0?-.01:.01)),w===0&&(P.rotation.y=Math.PI),e.add(P),this.windowMeshes.push(P)}),A<v-1){const R=-i*.4+(A+1)*(L*.88),w=(b+R)/2;[-r/2-.02,r/2+.02].forEach((y,P)=>{const F=new C(new Ze(1.6,a*.38),d);F.position.set(w,a*.64+.52,y),P===0&&(F.rotation.y=Math.PI),e.add(F),this.windowMeshes.push(F)})}}if(s==="lead"||s==="tail"){const A=s==="lead",b=A?o:-o,R=new Ne;R.position.set((i/2+.02)*b,a/2+.52,0),b<0&&(R.rotation.y=Math.PI);const w=new Be({color:1710618,metalness:.5,roughness:.2}),y=new C(new q(.25,a*.94,r*.94),w);R.add(y);const P=new Be({color:t.stripeColor,metalness:.3,roughness:.3}),F=new C(new q(.28,.16,r*.95),P);F.position.set(.02,a*.44,0),R.add(F);const B=new C(new q(.28,.16,r*.95),P);B.position.set(.02,-a*.44,0),R.add(B);const W=new C(new Ze(.9,.24),new wt({color:16750592}));W.rotation.y=Math.PI/2,W.position.set(.14,a*.36,0),R.add(W);const $=new C(new Ze(r*.84,a*.48),new Be({color:858922,roughness:.1,metalness:.9}));$.rotation.y=Math.PI/2,$.position.set(.14,a*.08,0),R.add($);const j=new C(new q(.4,.52,r*.92),new se({color:4545124}));j.position.set(.1,-a*.45-.22,0),R.add(j);const ee=new C(new q(.5,.2,.26),new se({color:2171169}));if(ee.position.set(.3,-a*.45-.22,0),R.add(ee),A){const X=new wt({color:16777200});[-r*.34,r*.34].forEach(de=>{const Re=new C(new ki(.14,16),X);Re.rotation.y=Math.PI/2,Re.position.set(.14,-a*.26,de),R.add(Re)});const re=new Xt(16776679,2.2,28,1.2);re.position.set(2,0,0),R.add(re),this.headLights.push(re)}else{const X=new wt({color:16717636});[-r*.34,r*.34].forEach(re=>{const de=new C(new ki(.12,16),X);de.rotation.y=Math.PI/2,de.position.set(.14,-a*.26,re),R.add(de)})}e.add(R)}if(s==="mid"){const A=this.createSingleArmPantograph(r);A.position.set(i*.28,a+.52+.42,0),e.add(A)}}buildShinkansenCar(e,t,i,r,a,s,o){const l=new Be({color:t.roofColor,metalness:.4,roughness:.25}),c=new Be({color:t.bodyColor,metalness:.3,roughness:.3}),h=new Be({color:t.stripeColor,metalness:.2,roughness:.3}),d=new Be({color:858922,emissive:16775620,emissiveIntensity:.15,roughness:.1,metalness:.8}),f=new C(new q(i,a*.55,r),c);f.position.y=a*.55/2+.45,f.castShadow=!0,e.add(f);const m=new C(new q(i,a*.5,r*.94),l);m.position.y=a*.55+.45+a*.5/2,m.castShadow=!0,e.add(m);const g=new C(new q(i+.02,.22,r+.02),h);g.position.y=a*.55+.45,e.add(g);const _=8,p=i/(_+1);for(let u=1;u<=_;u++){const M=-i/2+u*p;[-r/2-.015,r/2+.015].forEach((x,v)=>{const L=new C(new Ze(.75,.48),d);L.position.set(M,a*.65+.45,x),v===0&&(L.rotation.y=Math.PI),e.add(L),this.windowMeshes.push(L)})}if(s==="lead"||s==="tail"){const u=s==="lead",M=u?o:-o,x=new Ne;x.position.set(i/2*M,.45,0),M<0&&(x.rotation.y=Math.PI);const v=5.4,L=new Si(r*.5,v,24);L.rotateZ(-Math.PI/2);const A=new C(L,c);A.position.set(v/2,a*.35,0),A.scale.set(1,.6,.95),x.add(A);const b=new C(L,l);b.position.set(v/2,a*.65,0),b.scale.set(1,.55,.9),x.add(b);const R=new C(new q(1.4,.42,r*.5),new Be({color:858922,roughness:.1,metalness:.9}));if(R.position.set(1.4,a*.85,0),R.rotation.z=-.22,x.add(R),u){const w=new wt({color:16777200});[-r*.26,r*.26].forEach(P=>{const F=new C(new ki(.16,16),w);F.rotation.y=Math.PI/2,F.position.set(v*.72,a*.42,P),x.add(F)});const y=new Xt(16776679,2.2,30,1.2);y.position.set(v+1.2,a*.5,0),x.add(y),this.headLights.push(y)}e.add(x)}if(s==="mid"){const u=new se({color:9479342}),M=new C(new q(2.8,.55,.1),u);M.position.set(0,a+.68,r*.42),e.add(M);const x=new C(new q(2.8,.55,.1),u);x.position.set(0,a+.68,-r*.42),e.add(x);const v=this.createSingleArmPantograph(r*.8);v.position.set(0,a+.52+.38,0),e.add(v)}}buildUnderfloorEquipment(e,t,i){const r=new se({color:2503224}),a=new se({color:3622735}),s=t*.42,o=new C(new q(s,.45,i*.75),r);o.position.set(0,.32,0),e.add(o);for(let l=-s*.4;l<s*.4;l+=.45){const c=new C(new q(.08,.48,i*.78),a);c.position.set(l,.32,0),e.add(c)}}createSingleArmPantograph(e){const t=new Ne,i=new se({color:13840175}),r=new se({color:14737632});[-.35,.35].forEach(l=>{[-.3,.3].forEach(c=>{const h=new C(new Ge(.05,.07,.16,8),i);h.position.set(l,.08,c),t.add(h)})});const a=new C(new Ge(.035,.035,.85,8),r);a.rotation.z=Math.PI/3,a.position.set(-.22,.42,0),t.add(a);const s=new C(new Ge(.03,.03,.8,8),r);s.rotation.z=-Math.PI/3.2,s.position.set(.16,.9,0),t.add(s);const o=new C(new q(.08,.04,e*.75),r);return o.position.set(.38,1.22,0),t.add(o),t}createGangway(e,t,i){const r=new se({color:2171169}),a=new C(new q(.45,i*.88,t*.75),r);a.position.set(e,i/2+.52,0),this.group.add(a)}buildBogies(e,t,i){const r=new Be({color:1973790,metalness:.8,roughness:.2}),a=new se({color:2503224}),s=new Ge(.38,.38,.18,18);s.rotateX(Math.PI/2),[-t*.34,t*.34].forEach(o=>{const l=new C(new q(2.6,.24,i*.84),a);l.position.set(o,.44,0),e.add(l),[-i*.38,i*.38].forEach(c=>{const h=new C(new Ge(.18,.18,.22,12),a);h.position.set(o,.54,c),e.add(h)}),[-.78,.78].forEach(c=>{const h=new C(s,r);h.position.set(o+c,.38,i/2-.12),h.castShadow=!0,e.add(h),this.wheels.push(h);const d=new C(s,r);d.position.set(o+c,.38,-i/2+.12),d.castShadow=!0,e.add(d),this.wheels.push(d)})})}rotateWheels(e){const t=e/.38;this.wheels.forEach(i=>{i.rotation.z-=t})}dispose(){this.group.traverse(e=>{if(e.isMesh){const t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material&&t.material.dispose()}})}}class Nm{constructor(e,t){V(this,"scene"),V(this,"soundEngine"),V(this,"activeTrain",null),V(this,"STATION_CENTER_X",18),V(this,"STATION_TRACK_Z",-2.2),V(this,"NON_STATION_TRACK_Z",2.2),V(this,"localStationTrainTypes",["yamanote","chuo","shonan"]),V(this,"localTypeIndex",0),V(this,"throughTrainTypes",["hayabusa","komachi","doctor_yellow","express","freight","steam"]),V(this,"throughTypeIndex",0),V(this,"trackToggle",!1),this.scene=e,this.soundEngine=t}isTrainRunning(){return this.activeTrain!==null}spawnTrain(){if(this.activeTrain)return this.activeTrain;this.trackToggle=!this.trackToggle;const e=this.trackToggle?this.STATION_TRACK_Z:this.NON_STATION_TRACK_Z,t=e===this.STATION_TRACK_Z,i=this.trackToggle?1:-1;let r,a=2;t?(r=this.localStationTrainTypes[this.localTypeIndex],this.localTypeIndex=(this.localTypeIndex+1)%this.localStationTrainTypes.length,a=2):(r=this.throughTrainTypes[this.throughTypeIndex],this.throughTypeIndex=(this.throughTypeIndex+1)%this.throughTrainTypes.length,a=3);const s=Ll[r],o=-48*i,l=new Um(r,i,a);l.group.position.set(o,0,e),this.scene.add(l.group);let c=19;return s.category==="shinkansen"&&(c=27),s.category==="express"&&(c=23),s.category==="freight"&&(c=17),s.category==="steam"&&(c=15),this.activeTrain={model:l,trackZ:e,direction:i,posX:o,speed:0,maxSpeed:c,type:r,name:s.name,hasPlayedHorn:!1,hasStationOnTrack:t,stationState:t?"approaching":"exiting",stationTimer:3.5,hasPlayedChime:!1,hasPlayedBrakeSound:!1},this.soundEngine.startTrainSound(),this.activeTrain}update(e){if(!this.activeTrain)return;const t=this.activeTrain,i=this.STATION_CENTER_X;if(t.hasStationOnTrack){const a=(i-t.posX)*t.direction;switch(t.stationState){case"approaching":t.speed<t.maxSpeed&&(t.speed=Math.min(t.maxSpeed,t.speed+16*e)),a>0&&a<15&&(t.stationState="decelerating");break;case"decelerating":const s=Math.max(.05,a/15),o=t.maxSpeed*Math.pow(s,.85);t.speed>o&&(t.speed=Math.max(o,t.speed-18*e)),(a<=.4||t.speed<=.6)&&(t.speed=0,t.posX=i,t.stationState="stopped",t.stationTimer=3.5,t.hasPlayedBrakeSound||(this.soundEngine.playStationBrakeSound(),t.hasPlayedBrakeSound=!0));break;case"stopped":t.speed=0,t.stationTimer-=e,t.stationTimer<=1.2&&!t.hasPlayedChime&&(this.soundEngine.playStationDepartureMelody(),t.hasPlayedChime=!0),t.stationTimer<=0&&(t.stationState="departing",this.soundEngine.playTrainHorn());break;case"departing":t.speed<t.maxSpeed&&(t.speed=Math.min(t.maxSpeed,t.speed+14*e)),a<-5&&(t.stationState="exiting");break;case"exiting":t.speed<t.maxSpeed&&(t.speed=Math.min(t.maxSpeed,t.speed+16*e));break}}else if(t.speed<t.maxSpeed){const a=t.type==="hayabusa"||t.type==="komachi"||t.type==="doctor_yellow"?24:16;t.speed=Math.min(t.maxSpeed,t.speed+a*e)}const r=t.speed*e*t.direction;if(t.posX+=r,t.model.group.position.x=t.posX,t.model.rotateWheels(Math.abs(r)),!t.hasPlayedHorn&&t.stationState!=="stopped"){const a=-t.posX*t.direction;a<=22&&a>0&&(this.soundEngine.playTrainHorn(),t.hasPlayedHorn=!0)}Math.abs(t.posX)>50&&t.posX*t.direction>0&&this.removeTrain()}removeTrain(){this.activeTrain&&(this.scene.remove(this.activeTrain.model.group),this.activeTrain.model.dispose(),this.activeTrain=null,this.soundEngine.stopTrainSound())}}class Om{constructor(e,t,i){V(this,"group"),V(this,"type"),V(this,"length"),V(this,"width"),V(this,"height"),V(this,"direction"),V(this,"laneX"),V(this,"speed",0),V(this,"targetSpeed",10),V(this,"state","approaching"),V(this,"stopWaitTimer",0),V(this,"lookTimer",0),V(this,"initialYRotation",0),V(this,"wheels",[]),V(this,"sirenLight",null),V(this,"sirenPointLight",null),V(this,"headlights",[]),this.type=e,this.direction=t,this.laneX=i,this.group=new Ne;let r;switch(e){case"ambulance":r={type:e,color:16448250,length:5,width:1.95,height:2.05};break;case"fire_engine":r={type:e,color:13840175,length:5.2,width:2.1,height:2.1};break;case"police":r={type:e,color:2171169,length:4.2,width:1.9,height:1.4};break;case"minivan":r={type:e,color:16119285,length:4.3,width:1.75,height:1.75};break;case"kei_car":r={type:e,color:7214884,length:3.4,width:1.48,height:1.78};break;case"kei_truck":r={type:e,color:16777215,length:3.4,width:1.48,height:1.6};break;case"suv":r={type:e,color:3033656,length:4.4,width:1.85,height:1.7};break;case"sports_car":r={type:e,color:16766464,length:4.2,width:1.95,height:1.18};break;case"garbage_truck":r={type:e,color:166097,length:4.8,width:1.95,height:2.05};break;case"semi_truck":r={type:e,color:870305,length:8.4,width:2.3,height:2.65};break;case"bus":r={type:e,color:16757504,length:6.2,width:2.2,height:2.2};break;case"truck":r={type:e,color:1668818,length:5,width:2.1,height:2.1};break;case"sedan":default:const a=[15022389,2001125,4431943,9315498,16485376];r={type:"sedan",color:a[Math.floor(Math.random()*a.length)],length:3.8,width:1.85,height:1.35};break}this.length=r.length,this.width=r.width,this.height=r.height,this.buildMesh(r),this.initialYRotation=t===1?Math.PI:0,this.group.rotation.y=this.initialYRotation}buildMesh(e){const t=new se({color:e.color}),i=new se({color:2171169}),r=new se({color:11789820}),a=new se({color:2503224}),s=new Be({color:15658734,metalness:.85,roughness:.15}),o=e.height*.45,l=.32;if(e.type==="ambulance"){const _=new q(e.width,e.height,e.length),p=new C(_,t);p.position.y=l+e.height/2,p.castShadow=!0,this.group.add(p);const u=new se({color:13959168});[-1,1].forEach(L=>{const A=new C(new q(.04,.22,e.length*.98),u);A.position.set(L*(e.width/2+.01),l+e.height*.45,0),this.group.add(A);const b=new wt({color:13959168}),R=new C(new Ze(.12,.42),b),w=new C(new Ze(.42,.12),b);R.rotation.y=L*Math.PI/2,w.rotation.y=L*Math.PI/2,R.position.set(L*(e.width/2+.02),l+e.height*.72,-.4),w.position.set(L*(e.width/2+.02),l+e.height*.72,-.4),this.group.add(R,w)});const M=new C(new Ze(e.width*.85,e.height*.35),r);M.position.set(0,l+e.height*.65,e.length/2+.01),this.group.add(M);const x=new q(e.width*.7,.16,.4),v=new Be({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new C(x,v),this.sirenLight.position.set(0,l+e.height+.1,e.length*.25),this.group.add(this.sirenLight),this.sirenPointLight=new Xt(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.3,e.length*.25),this.group.add(this.sirenPointLight)}else if(e.type==="fire_engine"){const _=new C(new q(e.width,e.height*.9,e.length),t);_.position.y=l+e.height*.45,_.castShadow=!0,this.group.add(_);const p=new se({color:13621468});[-1,1].forEach(A=>{const b=new C(new Ze(e.length*.5,e.height*.5),p);b.rotation.y=A*Math.PI/2,b.position.set(A*(e.width/2+.01),l+e.height*.45,-e.length*.15),this.group.add(b)});const u=new se({color:16771899}),M=new C(new q(e.width*.55,.14,e.length*.7),u);M.position.set(0,l+e.height*.9+.1,-e.length*.05),M.castShadow=!0,this.group.add(M);const x=new C(new Ze(e.width*.82,e.height*.35),r);x.position.set(0,l+e.height*.65,e.length/2+.01),this.group.add(x);const v=new Ge(.18,.18,.16,12),L=new Be({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new C(v,L),this.sirenLight.position.set(0,l+e.height*.9+.12,e.length*.3),this.group.add(this.sirenLight),this.sirenPointLight=new Xt(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.3,e.length*.3),this.group.add(this.sirenPointLight)}else if(e.type==="police"){const _=new C(new q(e.width,o,e.length),t);_.position.y=l+o/2,_.castShadow=!0,this.group.add(_);const p=e.height*.55,u=e.length*.55,M=new se({color:16777215}),x=new C(new q(e.width*.88,p,u),M);x.position.set(0,l+o+p/2,-e.length*.05),x.castShadow=!0,this.group.add(x);const v=new C(new q(e.width+.02,o*.9,u*.8),M);v.position.set(0,l+o/2,-e.length*.05),this.group.add(v);const L=new C(new Ze(e.width*.78,p*.75),r);L.position.set(0,l+o+p*.5,u/2+.02),this.group.add(L);const A=new Ge(.18,.18,.15,12),b=new Be({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new C(A,b),this.sirenLight.position.set(0,l+e.height+.1,0),this.group.add(this.sirenLight),this.sirenPointLight=new Xt(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.25,0),this.group.add(this.sirenPointLight)}else if(e.type==="sports_car"){const _=new q(e.width,o*.85,e.length),p=new C(_,t);p.position.y=l*.6+o*.85/2,p.castShadow=!0,this.group.add(p);const u=e.height*.55,M=e.length*.48,x=new se({color:1118481}),v=new C(new q(e.width*.82,u,M),x);v.position.set(0,l*.6+o*.85+u/2,-e.length*.08),v.castShadow=!0,this.group.add(v);const L=new C(new Ze(e.width*.75,u*.8),r);L.rotation.x=-Math.PI*.22,L.position.set(0,l*.6+o*.85+u*.5,M/2-.05),this.group.add(L);const A=new se({color:1118481});[-.45,.45].forEach(R=>{const w=new C(new q(.05,.35,.08),A);w.position.set(R,l*.6+e.height*.85,-e.length*.42),this.group.add(w)});const b=new C(new q(e.width*.95,.06,.35),A);b.position.set(0,l*.6+e.height*.85+.35,-e.length*.42),b.castShadow=!0,this.group.add(b)}else if(e.type==="garbage_truck"){const _=e.length*.36,p=e.height*.65,u=new se({color:16777215}),M=new C(new q(e.width*.92,p,_),u);M.position.set(0,l+p/2,e.length*.28),M.castShadow=!0,this.group.add(M);const x=new C(new Ze(e.width*.78,p*.55),r);x.position.set(0,l+p*.6,e.length*.28+_/2+.01),this.group.add(x);const v=e.length*.62,L=new q(e.width,e.height*.85,v),A=new C(L,t);A.position.set(0,l+e.height*.85/2,-e.length*.16),A.castShadow=!0,this.group.add(A);const b=new se({color:3622735}),R=new C(new q(e.width*.9,e.height*.45,.4),b);R.position.set(0,l+e.height*.25,-e.length*.47),this.group.add(R);const w=new Ge(.14,.14,.14,12),y=new Be({color:16757504,emissive:16748288,emissiveIntensity:1}),P=new C(w,y);P.position.set(0,l+p+.1,e.length*.28),this.group.add(P)}else if(e.type==="semi_truck"){const _=e.height*.85,p=new se({color:13840175}),u=new C(new q(e.width*.92,_,3.2),p);u.position.set(0,l+_/2,e.length*.28),u.castShadow=!0,this.group.add(u);const M=new C(new Si(e.width*.6,.6,4),p);M.rotation.y=Math.PI/4,M.position.set(0,l+_+.3,e.length*.3),this.group.add(M),[-e.width*.46,e.width*.46].forEach(y=>{const P=new C(new Ge(.08,.08,1.8),s);P.position.set(y,l+_*.7,e.length*.16),this.group.add(P)});const x=new C(new q(e.width*.75,.8,.12),s);x.position.set(0,l+.6,e.length*.28+3.2/2+.01),this.group.add(x);const v=5.2,L=e.height*.95,A=new se({color:e.color}),b=new C(new q(e.width,L,v),A);b.position.set(0,l+.25+L/2,-e.length*.22),b.castShadow=!0,this.group.add(b);const R=new C(new q(e.width+.02,.35,v*.9),new se({color:16777215}));R.position.set(0,l+.25+L*.5,-e.length*.22),this.group.add(R);const w=new C(new Ze(e.width*.8,_*.4),r);w.position.set(0,l+_*.68,e.length*.28+3.2/2+.01),this.group.add(w)}else if(e.type==="minivan"){const _=new C(new q(e.width,o,e.length),t);_.position.y=l+o/2,_.castShadow=!0,this.group.add(_);const p=e.height*.55,u=e.length*.72,M=new C(new q(e.width*.92,p,u),t);M.position.set(0,l+o+p/2,-e.length*.08),M.castShadow=!0,this.group.add(M);const x=new C(new q(e.width*.82,.18,.08),new se({color:3622735}));x.position.set(0,l+o*.65,e.length/2+.01),this.group.add(x);const v=new C(new Ze(e.width*.84,p*.75),r);v.rotation.x=-Math.PI*.12,v.position.set(0,l+o+p*.48,u/2-.05),this.group.add(v),[-1,1].forEach(A=>{const b=new C(new Ze(u*.85,p*.6),a);b.rotation.y=A*Math.PI/2,b.position.set(A*(e.width*.46+.01),l+o+p*.52,-e.length*.08),this.group.add(b)});const L=new C(new q(e.width*.85,.08,.25),t);L.position.set(0,l+e.height+.04,-e.length*.44),this.group.add(L)}else if(e.type==="kei_car"){const _=new C(new q(e.width,o,e.length),t);_.position.y=l+o/2,_.castShadow=!0,this.group.add(_);const p=e.height*.55,u=e.length*.75,M=new C(new q(e.width*.94,p,u),t);M.position.set(0,l+o+p/2,-e.length*.06),M.castShadow=!0,this.group.add(M);const x=new se({color:1710618});[-1,1].forEach(A=>{const b=new C(new q(.08,p*.8,.12),x);b.position.set(A*(e.width*.47),l+o+p*.5,u*.4),this.group.add(b)});const v=new C(new q(e.width*.76,.22,.06),s);v.position.set(0,l+o*.7,e.length/2+.01),this.group.add(v);const L=new C(new Ze(e.width*.84,p*.75),r);L.rotation.x=-Math.PI*.06,L.position.set(0,l+o+p*.5,u/2+.01),this.group.add(L),[-1,1].forEach(A=>{const b=new C(new Ze(u*.88,p*.65),a);b.rotation.y=A*Math.PI/2,b.position.set(A*(e.width*.47+.01),l+o+p*.52,-e.length*.06),this.group.add(b)})}else if(e.type==="kei_truck"){const _=e.length*.42,p=e.height*.7,u=new C(new q(e.width,p,_),t);u.position.set(0,l+p/2,e.length*.26),u.castShadow=!0,this.group.add(u);const M=new C(new Ze(e.width*.82,p*.5),r);M.position.set(0,l+p*.65,e.length*.26+_/2+.01),this.group.add(M);const x=e.length*.54,v=new se({color:11583173}),L=new C(new q(e.width,.12,x),v);L.position.set(0,l+.35,-e.length*.2),L.castShadow=!0,this.group.add(L);const A=new se({color:14737632}),b=new C(new q(.06,.35,x),A);b.position.set(e.width/2-.03,l+.52,-e.length*.2),this.group.add(b);const R=new C(new q(.06,.35,x),A);R.position.set(-e.width/2+.03,l+.52,-e.length*.2),this.group.add(R);const w=new C(new q(e.width,.35,.06),A);w.position.set(0,l+.52,-e.length*.2-x/2),this.group.add(w)}else if(e.type==="suv"){const _=new C(new q(e.width,o*1.1,e.length),t);_.position.y=l+.08+o*1.1/2,_.castShadow=!0,this.group.add(_);const p=e.height*.52,u=e.length*.65,M=new C(new q(e.width*.88,p,u),t);M.position.set(0,l+.08+o*1.1+p/2,-e.length*.06),M.castShadow=!0,this.group.add(M);const x=new se({color:2171169}),v=new C(new q(e.width*1.02,.15,e.length*1.01),x);v.position.set(0,l+.1,0),this.group.add(v);const L=new se({color:4342338});[-e.width*.36,e.width*.36].forEach(b=>{const R=new C(new q(.08,.08,u*.85),L);R.position.set(b,l+.08+e.height+.04,-e.length*.06),this.group.add(R)});const A=new C(new Ze(e.width*.78,p*.7),r);A.rotation.x=-Math.PI*.14,A.position.set(0,l+.08+o*1.1+p*.5,u/2-.04),this.group.add(A)}else if(e.type==="bus"){const _=e.height*.55,p=new C(new q(e.width,o,e.length),t);p.position.y=l+o/2,this.group.add(p);const u=new C(new q(e.width*.96,_,e.length*.96),t);u.position.set(0,l+o+_/2,0),u.castShadow=!0,this.group.add(u);const M=new C(new Ze(e.width*.85,_*.7),r);M.position.set(0,l+o+_*.5,e.length*.48+.01),this.group.add(M)}else if(e.type==="truck"){const _=e.length*.35,p=e.height*.55,u=new C(new q(e.width*.9,p,_),t);u.position.set(0,l+o+p/2,e.length*.28),u.castShadow=!0,this.group.add(u);const M=new C(new Ze(e.width*.75,p*.6),r);M.position.set(0,l+o+p*.5,e.length*.28+_/2+.01),this.group.add(M);const x=new C(new q(e.width,e.height*.8,e.length*.58),new se({color:15527921}));x.position.set(0,l+e.height*.4,-e.length*.18),x.castShadow=!0,this.group.add(x)}else{const _=new C(new q(e.width,o,e.length),t);_.position.y=l+o/2,_.castShadow=!0,this.group.add(_);const p=e.height*.55,u=e.length*.55,M=new C(new q(e.width*.88,p,u),t);M.position.set(0,l+o+p/2,-e.length*.05),M.castShadow=!0,this.group.add(M);const x=new C(new Ze(e.width*.78,p*.75),r);x.position.set(0,l+o+p*.5,u/2+.02),this.group.add(x)}const c=new ki(.16,10),h=new wt({color:16776679}),d=new wt({color:13959168});[-e.width*.35,e.width*.35].forEach(_=>{const p=new C(c,h);p.position.set(_,.55,e.length/2+.02),this.group.add(p);const u=new C(c,d);u.rotation.y=Math.PI,u.position.set(_,.55,-e.length/2-.02),this.group.add(u)});let f=.32;(e.type==="suv"||e.type==="semi_truck")&&(f=.38),(e.type==="kei_truck"||e.type==="kei_car"||e.type==="sports_car")&&(f=.28);const m=new Ge(f,f,.18,12);m.rotateZ(Math.PI/2);let g=[-e.length*.32,e.length*.32];e.type==="semi_truck"&&(g=[e.length*.36,-e.length*.22,-e.length*.38]),g.forEach(_=>{const p=new C(m,i);p.position.set(e.width/2+.06,f,_),this.group.add(p),this.wheels.push(p);const u=new C(m,i);u.position.set(-e.width/2-.06,f,_),this.group.add(u),this.wheels.push(u)})}update(e){if(this.sirenLight){const i=Math.sin(Date.now()*.012),r=this.sirenLight.material;r&&(r.emissiveIntensity=i>0?1.8:.2)}const t=this.speed*e/.32;this.wheels.forEach(i=>{i.rotation.x+=t})}updateLookingAnimation(e){const t=Math.sin(e*Math.PI*4)*.12;this.group.rotation.y=this.initialYRotation+t}resetLookingAnimation(){this.group.rotation.y=this.initialYRotation}dispose(){this.group.traverse(e=>{if(e.isMesh){const t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material&&t.material.dispose()}})}}class Fm{constructor(e,t){V(this,"scene"),V(this,"soundEngine"),V(this,"vehicles",[]),V(this,"vehicleTypes",["sports_car","garbage_truck","semi_truck","kei_car","minivan","kei_truck","suv","ambulance","fire_engine","police","bus","truck","sedan"]),V(this,"typeIndex",0),V(this,"laneToggle",!1),V(this,"STOP_LINE_Z",6.4),this.scene=e,this.soundEngine=t}spawnVehicle(e){let t;e!==void 0?t=e:(this.laneToggle=!this.laneToggle,t=this.laneToggle?1:-1);const i=t===1?-2.2:2.2,r=25*t;if(this.vehicles.some(o=>o.direction===t&&Math.abs(o.group.position.z-r)<o.length+3))return null;const a=this.vehicleTypes[this.typeIndex];this.typeIndex=(this.typeIndex+1)%this.vehicleTypes.length;const s=new Om(a,t,i);return s.group.position.set(i,0,r),this.scene.add(s.group),this.vehicles.push(s),this.soundEngine.playCarHorn(),s}getVehicleDisplayName(e){return{sports_car:"スポーツカー 🏎️",garbage_truck:"ゴミ収集車（パッカー車）🗑️",semi_truck:"トレーラートラック 🚛",kei_car:"軽自動車（けいじどうしゃ）🚗",minivan:"ミニバン 🚐",kei_truck:"軽トラック（けいトラ）🛻",suv:"SUV 🚙",ambulance:"救急車（きゅうきゅうしゃ）🚑",fire_engine:"消防車（しょうぼうしゃ）🚒",police:"パトカー 🚓",bus:"バス 🚌",truck:"トラック 🚚",sedan:"乗用車（セダン）🚗"}[e]||"くるま 🚗"}update(e,t){const i=this.vehicles.filter(a=>a.direction===1).sort((a,s)=>a.group.position.z-s.group.position.z),r=this.vehicles.filter(a=>a.direction===-1).sort((a,s)=>s.group.position.z-a.group.position.z);this.updateLaneQueue(i,e,t),this.updateLaneQueue(r,e,t);for(let a=this.vehicles.length-1;a>=0;a--){const s=this.vehicles[a];Math.abs(s.group.position.z)>28&&(this.scene.remove(s.group),s.dispose(),this.vehicles.splice(a,1))}}updateLaneQueue(e,t,i){for(let r=0;r<e.length;r++){const a=e[r],s=r>0?e[r-1]:null;let o=999;s&&(a.direction===1?o=a.group.position.z-s.group.position.z-(a.length/2+s.length/2):o=s.group.position.z-a.group.position.z-(a.length/2+s.length/2));const l=a.direction===1?a.group.position.z-this.STOP_LINE_Z:-this.STOP_LINE_Z-a.group.position.z;switch(a.state){case"approaching":if(o<4)a.targetSpeed=0;else if(l>0&&l<8){const d=l/8;a.targetSpeed=Math.max(1.5,9*d),l<=.3&&(a.speed=0,a.targetSpeed=0,a.state="stopping_at_line",a.stopWaitTimer=1.4,a.lookTimer=0)}else a.targetSpeed=9.5;break;case"stopping_at_line":a.speed=0,a.targetSpeed=0,a.stopWaitTimer-=t,a.lookTimer+=t;const h=Math.min(1,a.lookTimer/1.4);a.updateLookingAnimation(h),a.stopWaitTimer<=0&&(a.resetLookingAnimation(),i?(a.state="crossing",a.targetSpeed=8.5):a.state="waiting_crossing");break;case"waiting_crossing":a.speed=0,a.targetSpeed=0,i&&o>4&&(a.state="crossing",a.targetSpeed=8.5);break;case"crossing":o<4?a.targetSpeed=0:a.targetSpeed=9,(a.direction===1&&a.group.position.z<-5||a.direction===-1&&a.group.position.z>5)&&(a.state="exiting");break;case"exiting":o<4?a.targetSpeed=0:a.targetSpeed=10;break}a.speed<a.targetSpeed?a.speed=Math.min(a.targetSpeed,a.speed+12*t):a.speed>a.targetSpeed&&(a.speed=Math.max(a.targetSpeed,a.speed-22*t));const c=a.speed*t*-a.direction;a.group.position.z+=c,a.update(t)}}}class zm{constructor(e,t,i){V(this,"crossingModel"),V(this,"trainManager"),V(this,"soundEngine"),V(this,"state","IDLE"),V(this,"stateTimer",0),this.crossingModel=e,this.trainManager=t,this.soundEngine=i}isSafeForCars(){return this.state==="IDLE"&&this.crossingModel.isBarrierFullyUp()}triggerCrossingSequence(){return this.state!=="IDLE"?!1:(this.state="WARNING",this.stateTimer=1.8,this.crossingModel.setBlinking(!0),this.soundEngine.startCrossingAlarm(),!0)}update(e){switch(this.crossingModel.update(e),this.state){case"IDLE":break;case"WARNING":this.stateTimer-=e,this.stateTimer<=0&&(this.state="LOWERING_BARRIER",this.crossingModel.setTargetBarrierAngle(!0),this.soundEngine.playBarrierMotor());break;case"LOWERING_BARRIER":if(this.crossingModel.isBarrierFullyDown()){this.state="TRAIN_PASSING";const t=this.trainManager.spawnTrain();this.crossingModel.setTrainDirection(t.direction)}break;case"TRAIN_PASSING":this.trainManager.isTrainRunning()||(this.state="RAISING_BARRIER",this.crossingModel.setTargetBarrierAngle(!1),this.crossingModel.setTrainDirection(0),this.soundEngine.playBarrierMotor());break;case"RAISING_BARRIER":this.crossingModel.isBarrierFullyUp()&&(this.state="CLEARING",this.stateTimer=.4);break;case"CLEARING":this.stateTimer-=e,this.stateTimer<=0&&(this.crossingModel.setBlinking(!1),this.soundEngine.stopCrossingAlarm(),this.state="IDLE");break}}}class Bm{constructor(e,t,i,r,a,s,o){V(this,"camera"),V(this,"crossingController"),V(this,"trafficManager"),V(this,"crossingModel"),V(this,"envModel"),V(this,"dogHouseModel"),V(this,"soundEngine"),V(this,"raycaster"),V(this,"pointer"),V(this,"tapEffectsLayer"),V(this,"guideTextEl"),V(this,"guideTimer",null),this.camera=e,this.crossingController=t,this.trafficManager=i,this.crossingModel=r,this.envModel=a,this.dogHouseModel=s,this.soundEngine=o,this.raycaster=new bm,this.pointer=new _e,this.tapEffectsLayer=document.getElementById("tap-effects-layer"),this.guideTextEl=document.getElementById("guide-text"),this.setupListeners()}setupListeners(){const e=(t,i,r)=>{if(r&&(r.closest("button")||r.closest(".start-overlay")))return;if(this.soundEngine.init(),this.pointer.x=t/window.innerWidth*2-1,this.pointer.y=-(i/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.dogHouseModel.clickableMeshes,!0).length>0){if(this.createTapEffect(t,i,"🐶"),this.dogHouseModel.triggerDogBark()){const s=["ワンワン！🐶 ボクの おうち だよ！わん！","ワンッ！ワンワン！🦴 でんしゃ だいすき！","バウッ！ワンワン！🐕 きょうも 元気いっぱい！"],o=s[Math.floor(Math.random()*s.length)];this.showGuideMessage(o)}return}if(this.raycaster.intersectObjects(this.crossingModel.clickableMeshes,!0).length>0){this.createTapEffect(t,i,"⭐"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence()&&this.showGuideMessage("カンカンカン！でんしゃが くるよ！🚃");return}const a=this.raycaster.intersectObjects([this.envModel.group,this.crossingModel.group],!0);if(a.length>0){const s=a[0].point;if(Math.abs(s.x)<=9&&Math.abs(s.z)<=6.8){this.createTapEffect(t,i,"⚠️"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence()?this.showGuideMessage("カンカンカン！でんしゃが くるよ！🚃"):this.showGuideMessage("ふみきり ちゅうい！まもなく でんしゃ が きます！");return}if(Math.abs(s.x)<=5.8){this.createTapEffect(t,i,"✨"),this.soundEngine.playTapSound();const o=s.z>0?1:-1,l=this.trafficManager.spawnVehicle(o);if(l){const c=this.trafficManager.getVehicleDisplayName(l.type);this.showGuideMessage(`${c} が きたよ！🚗`)}return}if(Math.abs(s.z)<=4){this.createTapEffect(t,i,"🚊"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence(),this.showGuideMessage("カンカンカン！でんしゃ が はしるよ！");return}}};window.addEventListener("click",t=>{e(t.clientX,t.clientY,t.target)}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const i=t.changedTouches[0];e(i.clientX,i.clientY,t.target)}})}showGuideMessage(e,t=3200){if(!this.guideTextEl)return;this.guideTextEl.textContent=e;const i=document.getElementById("guide-banner");i&&i.classList.add("visible"),this.guideTimer&&clearTimeout(this.guideTimer),this.guideTimer=window.setTimeout(()=>{i&&i.classList.remove("visible")},t)}createTapEffect(e,t,i){if(!this.tapEffectsLayer)return;const r=document.createElement("div");r.className="tap-popup",r.textContent=i,r.style.left=`${e}px`,r.style.top=`${t}px`,this.tapEffectsLayer.appendChild(r),setTimeout(()=>{r.remove()},1e3)}}class km{constructor(e,t,i,r,a,s,o){V(this,"soundEngine"),V(this,"crossingController"),V(this,"trafficManager"),V(this,"cameraController"),V(this,"sceneManager"),V(this,"envModel"),V(this,"interactionManager"),this.soundEngine=e,this.crossingController=t,this.trafficManager=i,this.cameraController=r,this.sceneManager=a,this.envModel=s,this.interactionManager=o,this.bindEvents()}bindEvents(){const e=document.getElementById("btn-start"),t=document.getElementById("start-overlay");e&&t&&e.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),t.classList.add("hidden"),this.interactionManager.showGuideMessage("ようこそ！ふみきり や どうろ を タップしてみてね！")});const i=document.getElementById("btn-train");i&&i.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),this.crossingController.state==="IDLE"?(this.crossingController.triggerCrossingSequence(),this.interactionManager.showGuideMessage("でんしゃ が くるよ！カンカンカン！🚃")):this.interactionManager.showGuideMessage("まもなく でんしゃ が つうか します！⚠️")});const r=document.getElementById("btn-car");r&&r.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const c=Math.random()>.5?1:-1,h=this.trafficManager.spawnVehicle(c);if(h){const d=this.trafficManager.getVehicleDisplayName(h.type);this.interactionManager.showGuideMessage(`${d} が はしりだしたよ！`)}else this.interactionManager.showGuideMessage("くるま が いっぱい はしっているよ！🚗")});const a=document.getElementById("btn-camera");if(a){const c={overview:"全体",crossing_close:"ふみきり",driver_view:"運転手",train_follow:"電車追尾"};a.addEventListener("click",()=>{this.soundEngine.playTapSound();const h=this.cameraController.cyclePreset(),d=a.querySelector(".sub-label");d&&(d.textContent=c[h]||"カメラ"),this.interactionManager.showGuideMessage(`カメラ: ${c[h]} ビュー 🎥`)})}const s=document.getElementById("btn-time");s&&s.addEventListener("click",()=>{this.soundEngine.playTapSound();const c=this.sceneManager.cycleTimeOfDay(),h=s.querySelector(".btn-icon"),d=s.querySelector(".btn-subtext");this.envModel.setNightMode(c==="night"),c==="day"?(h&&(h.textContent="☀️"),d&&(d.textContent="ひる"),this.interactionManager.showGuideMessage("あかるい おひる になったよ！☀️")):c==="sunset"?(h&&(h.textContent="🌅"),d&&(d.textContent="ゆうがた"),this.interactionManager.showGuideMessage("きれいな ゆうやけ だね！🌅")):(h&&(h.textContent="🌙"),d&&(d.textContent="よる"),this.interactionManager.showGuideMessage("おうちの まど に あかり が ともったよ！🏠✨"))});const o=document.getElementById("btn-sound-type");o&&o.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const c=[{id:"standard_electronic",label:"ひょうじゅん",icon:"🔔",name:"日本の標準的な単音電子警報音（700Hz）"},{id:"soft_electronic",label:"やさしい音",icon:"🎵",name:"やわらかい単音電子音（650Hz）"},{id:"mechanical_bell",label:"でんれい式",icon:"🔕",name:"懐かしい電鈴式（鐘の音）"}],h=c.findIndex(g=>g.id===this.soundEngine.currentSoundType),d=c[(h+1)%c.length];this.soundEngine.currentSoundType=d.id;const f=o.querySelector(".btn-icon"),m=o.querySelector(".btn-subtext");f&&(f.textContent=d.icon),m&&(m.textContent=d.label),this.interactionManager.showGuideMessage(`ふみきりの音: ${d.name}`)});const l=document.getElementById("btn-sound");l&&l.addEventListener("click",()=>{const c=!this.soundEngine.getIsMuted();this.soundEngine.setMuted(c);const h=l.querySelector(".btn-icon"),d=l.querySelector(".btn-subtext");c?(h&&(h.textContent="🔇"),d&&(d.textContent="ミュート"),this.interactionManager.showGuideMessage("おと を けしたよ 🔇")):(this.soundEngine.playTapSound(),h&&(h.textContent="🔊"),d&&(d.textContent="おと ON"),this.interactionManager.showGuideMessage("おと を だしたよ 🔊"))})}}class Hm{constructor(){V(this,"sceneManager"),V(this,"cameraController"),V(this,"soundEngine"),V(this,"envModel"),V(this,"crossingModel"),V(this,"dogHouseModel"),V(this,"trainManager"),V(this,"trafficManager"),V(this,"crossingController"),V(this,"interactionManager"),V(this,"clock"),V(this,"idleCrossingTimer",0),V(this,"IDLE_CROSSING_INTERVAL",180),V(this,"idleCarTimer",0),V(this,"IDLE_CAR_INTERVAL",30),V(this,"animate",()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);if(this.idleCrossingTimer+=t,this.idleCrossingTimer>=this.IDLE_CROSSING_INTERVAL&&(this.idleCrossingTimer=0,this.crossingController.state==="IDLE"&&(this.soundEngine.init(),this.crossingController.triggerCrossingSequence(),this.interactionManager.showGuideMessage("カンカンカン！でんしゃ が くるよ！🚊"))),this.idleCarTimer+=t,this.idleCarTimer>=this.IDLE_CAR_INTERVAL&&(this.idleCarTimer=0,this.trafficManager.vehicles.length<6)){const a=this.trafficManager.spawnVehicle();if(a){const s=this.trafficManager.getVehicleDisplayName(a.type);this.interactionManager.showGuideMessage(`${s} が はしってきたよ！🚗`)}}const i=this.crossingController.isSafeForCars();this.crossingController.update(t),this.trainManager.update(t),this.trafficManager.update(t,i),this.dogHouseModel.update(t);const r=this.trainManager.activeTrain?this.trainManager.activeTrain.posX:void 0;this.cameraController.update(t,r),this.sceneManager.renderer.render(this.sceneManager.scene,this.cameraController.camera)});const e=document.getElementById("canvas-container");this.sceneManager=new Rm(e),this.cameraController=new Cm,this.soundEngine=new Pm,this.envModel=new Lm,this.sceneManager.scene.add(this.envModel.group),this.crossingModel=new Im,this.sceneManager.scene.add(this.crossingModel.group),this.dogHouseModel=new Dm(this.soundEngine),this.sceneManager.scene.add(this.dogHouseModel.group),this.trainManager=new Nm(this.sceneManager.scene,this.soundEngine),this.trafficManager=new Fm(this.sceneManager.scene,this.soundEngine),this.crossingController=new zm(this.crossingModel,this.trainManager,this.soundEngine),this.interactionManager=new Bm(this.cameraController.camera,this.crossingController,this.trafficManager,this.crossingModel,this.envModel,this.dogHouseModel,this.soundEngine),new km(this.soundEngine,this.crossingController,this.trafficManager,this.cameraController,this.sceneManager,this.envModel,this.interactionManager),this.clock=new Em,window.addEventListener("pointerdown",()=>{this.idleCrossingTimer=0}),setTimeout(()=>{this.trafficManager.spawnVehicle(1)},600),setTimeout(()=>{this.trafficManager.spawnVehicle(-1)},2500),this.animate()}}window.addEventListener("DOMContentLoaded",()=>{new Hm});
