(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var Rl=Object.defineProperty,Cl=(r,e,t)=>e in r?Rl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e,t)=>Cl(r,typeof e!="symbol"?e+"":e,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const sa="170",Pl=0,Aa=1,Ll=2,zo=1,Bo=2,ai=3,Si=0,Ct=1,Jt=2,xi=0,or=1,Ra=2,Ca=3,Pa=4,Il=5,Ui=100,Dl=101,Ul=102,Nl=103,Ol=104,Fl=200,zl=201,Bl=202,Hl=203,fn=204,mn=205,Vl=206,kl=207,Gl=208,Wl=209,Xl=210,jl=211,ql=212,Yl=213,Zl=214,gn=0,_n=1,vn=2,ur=3,xn=4,Mn=5,Sn=6,yn=7,na=0,Jl=1,Kl=2,Mi=0,$l=1,Ql=2,ec=3,Ho=4,tc=5,ic=6,rc=7,Vo=300,dr=301,pr=302,wn=303,En=304,bs=306,Tn=1e3,Oi=1001,bn=1002,jt=1003,sc=1004,Yr=1005,Kt=1006,Is=1007,Fi=1008,hi=1009,ko=1010,Go=1011,Br=1012,aa=1013,Hi=1014,oi=1015,Gr=1016,oa=1017,la=1018,fr=1020,Wo=35902,Xo=1021,jo=1022,Xt=1023,qo=1024,Yo=1025,lr=1026,mr=1027,Zo=1028,ca=1029,Jo=1030,ha=1031,ua=1033,vs=33776,xs=33777,Ms=33778,Ss=33779,An=35840,Rn=35841,Cn=35842,Pn=35843,Ln=36196,In=37492,Dn=37496,Un=37808,Nn=37809,On=37810,Fn=37811,zn=37812,Bn=37813,Hn=37814,Vn=37815,kn=37816,Gn=37817,Wn=37818,Xn=37819,jn=37820,qn=37821,ys=36492,Yn=36494,Zn=36495,Ko=36283,Jn=36284,Kn=36285,$n=36286,nc=3200,ac=3201,da=0,oc=1,vi="",Ot="srgb",_r="srgb-linear",As="linear",it="srgb",Xi=7680,La=519,lc=512,cc=513,hc=514,$o=515,uc=516,dc=517,pc=518,fc=519,Ia=35044,Da="300 es",li=2e3,Es=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let s=0,n=i.length;s<n;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,Qn=180/Math.PI;function xr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function mc(r,e){return(r%e+e)%e}function Us(r,e,t){return(1-t)*r+t*e}function Ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*s+e.x,this.y=n*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,s,n,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c)}set(e,t,i,s,n,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],m=i[5],g=i[8],S=s[0],f=s[3],u=s[6],M=s[1],v=s[4],_=s[7],P=s[2],b=s[5],A=s[8];return n[0]=a*S+o*M+l*P,n[3]=a*f+o*v+l*b,n[6]=a*u+o*_+l*A,n[1]=c*S+h*M+d*P,n[4]=c*f+h*v+d*b,n[7]=c*u+h*_+d*A,n[2]=p*S+m*M+g*P,n[5]=p*f+m*v+g*b,n[8]=p*u+m*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*n*h+i*o*l+s*n*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*n,m=c*n-a*l,g=t*d+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(s*c-h*i)*S,e[2]=(o*i-s*a)*S,e[3]=p*S,e[4]=(h*t-s*l)*S,e[5]=(s*n-o*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*n)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new ze;function Qo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gc(){const r=Ts("canvas");return r.style.display="block",r}const Ua={};function Dr(r){r in Ua||(Ua[r]=!0,console.warn(r))}function _c(r,e,t){return new Promise(function(i,s){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}function vc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xc(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?As:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Na=[.64,.33,.3,.6,.15,.06],Oa=[.2126,.7152,.0722],Fa=[.3127,.329],za=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[_r]:{primaries:Na,whitePoint:Fa,transfer:As,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:Oa,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Na,whitePoint:Fa,transfer:it,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:Oa,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let ji;class Mc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Ts("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let a=0;a<n.length;a++)n[a]=ci(n[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sc=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?n.push(Os(s[a].image)):n.push(Os(s[a]))}else n=Os(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function Os(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yc=0;class Pt extends vr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Oi,s=Oi,n=Kt,a=Fi,o=Xt,l=hi,c=Pt.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=xr(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case bn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case bn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Vo;Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],d=a[5],p=a[9],m=a[2],g=a[6],S=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(p+g)<.1&&Math.abs(o+d+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,M=(d+1)/2,v=(S+1)/2,_=(l+h)/4,P=(c+m)/4,b=(p+g)/4;return u>M&&u>v?u<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(u),s=_/i,n=P/i):M>v?M<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(M),i=_/s,n=b/s):v<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(v),i=P/n,s=b/n),this.set(i,s,n,t),this}let f=Math.sqrt((g-p)*(g-p)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(g-p)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((o+d+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wc extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const n=new Pt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);n.flipY=!1,n.generateMipmaps=i.generateMipmaps,n.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new el(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends wc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tl extends Pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ec extends Pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const p=n[a+0],m=n[a+1],g=n[a+2],S=n[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=S;return}if(d!==S||l!==p||c!==m||h!==g){let f=1-o;const u=l*p+c*m+h*g+d*S,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,u*M);f=Math.sin(f*b)/P,o=Math.sin(o*b)/P}const _=o*M;if(l=l*f+p*_,c=c*f+m*_,h=h*f+g*_,d=d*f+S*_,f===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,n,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=n[a],p=n[a+1],m=n[a+2],g=n[a+3];return e[t]=o*g+h*d+l*m-c*p,e[t+1]=l*g+h*p+c*d-o*m,e[t+2]=c*g+h*m+o*p-l*d,e[t+3]=h*g-o*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(n/2),p=l(i/2),m=l(s/2),g=l(n/2);switch(a){case"XYZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"YZX":this._x=p*h*d+c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d-p*m*g;break;case"XZY":this._x=p*h*d-c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(n-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(n+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(n-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(n+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-n*l,this._y=s*h+a*l+n*o-i*c,this._z=n*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=n*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-n*s),d=2*(n*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-n*d,this.z=s+l*d+n*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new I,Ha=new Wr;class Xr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(n,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let n=0,a=s.length;n<a;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Jr.subVectors(this.max,Rr),qi.subVectors(e.a,Rr),Yi.subVectors(e.b,Rr),Zi.subVectors(e.c,Rr),di.subVectors(Yi,qi),pi.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-bi.z,bi.y,di.z,0,-di.x,pi.z,0,-pi.x,bi.z,0,-bi.x,-di.y,di.x,0,-pi.y,pi.x,0,-bi.y,bi.x,0];return!zs(t,qi,Yi,Zi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,qi,Yi,Zi,Jr))?!1:(Kr.crossVectors(di,pi),t=[Kr.x,Kr.y,Kr.z],zs(t,qi,Yi,Zi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new I,new I,new I,new I,new I,new I,new I,new I],Vt=new I,Zr=new Xr,qi=new I,Yi=new I,Zi=new I,di=new I,pi=new I,bi=new I,Rr=new I,Jr=new I,Kr=new I,Ai=new I;function zs(r,e,t,i,s){for(let n=0,a=r.length-3;n<=a;n+=3){Ai.fromArray(r,n);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tc=new Xr,Cr=new I,Bs=new I;class pa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tc.setFromPoints(e).getCenter(i);let s=0;for(let n=0,a=e.length;n<a;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Bs)),this.expandByPoint(Cr.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new I,Hs=new I,$r=new I,fi=new I,Vs=new I,Qr=new I,ks=new I;class il{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hs.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Hs);const n=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=fi.dot(this.direction),l=-fi.dot($r),c=fi.lengthSq(),h=Math.abs(1-a*a);let d,p,m,g;if(h>0)if(d=a*l-o,p=a*o-l,g=n*h,d>=0)if(p>=-g)if(p<=g){const S=1/h;d*=S,p*=S,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=n,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-n,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*n+o)),p=d>0?-n:Math.min(Math.max(-n,-l),n),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-n,-l),n),m=p*(p+2*l)+c):(d=Math.max(0,-(a*n+o)),p=d>0?n:Math.min(Math.max(-n,-l),n),m=-d*d+p*(p+2*l)+c);else p=a>0?-n:n,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hs).addScaledVector($r,p),m}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,n=e.radius*e.radius;if(s>n)return null;const a=Math.sqrt(n-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(n=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(n=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||n>s||((n>i||isNaN(i))&&(i=n),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,n){Vs.subVectors(t,e),Qr.subVectors(i,e),ks.crossVectors(Vs,Qr);let a=this.direction.dot(ks),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(fi,Qr));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(fi));if(c<0||l+c>a)return null;const h=-o*fi.dot(ks);return h<0?null:this.at(h/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,n,a,o,l,c,h,d,p,m,g,S,f){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c,h,d,p,m,g,S,f)}set(e,t,i,s,n,a,o,l,c,h,d,p,m,g,S,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=n,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=g,u[11]=S,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),n=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const p=a*h,m=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=p-S*c,t[9]=-o*l,t[2]=S-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*d,g=c*h,S=c*d;t[0]=p+S*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=S+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*d,g=c*h,S=c*d;t[0]=p-S*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=S-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+S,t[1]=l*d,t[5]=S*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=S-p*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=p-S*d}else if(e.order==="XZY"){const p=a*l,m=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+S,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bc,e,Ac)}lookAt(e,t,i){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),mi.crossVectors(i,It),mi.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),mi.crossVectors(i,It)),mi.normalize(),es.crossVectors(It,mi),s[0]=mi.x,s[4]=es.x,s[8]=It.x,s[1]=mi.y,s[5]=es.y,s[9]=It.y,s[2]=mi.z,s[6]=es.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],m=i[13],g=i[2],S=i[6],f=i[10],u=i[14],M=i[3],v=i[7],_=i[11],P=i[15],b=s[0],A=s[4],R=s[8],w=s[12],x=s[1],C=s[5],F=s[9],B=s[13],G=s[2],$=s[6],X=s[10],ee=s[14],W=s[3],re=s[7],de=s[11],Re=s[15];return n[0]=a*b+o*x+l*G+c*W,n[4]=a*A+o*C+l*$+c*re,n[8]=a*R+o*F+l*X+c*de,n[12]=a*w+o*B+l*ee+c*Re,n[1]=h*b+d*x+p*G+m*W,n[5]=h*A+d*C+p*$+m*re,n[9]=h*R+d*F+p*X+m*de,n[13]=h*w+d*B+p*ee+m*Re,n[2]=g*b+S*x+f*G+u*W,n[6]=g*A+S*C+f*$+u*re,n[10]=g*R+S*F+f*X+u*de,n[14]=g*w+S*B+f*ee+u*Re,n[3]=M*b+v*x+_*G+P*W,n[7]=M*A+v*C+_*$+P*re,n[11]=M*R+v*F+_*X+P*de,n[15]=M*w+v*B+_*ee+P*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],g=e[3],S=e[7],f=e[11],u=e[15];return g*(+n*l*d-s*c*d-n*o*p+i*c*p+s*o*m-i*l*m)+S*(+t*l*m-t*c*p+n*a*p-s*a*m+s*c*h-n*l*h)+f*(+t*c*d-t*o*m-n*a*d+i*a*m+n*o*h-i*c*h)+u*(-s*o*h-t*l*d+t*o*p+s*a*d-i*a*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],g=e[12],S=e[13],f=e[14],u=e[15],M=d*f*c-S*p*c+S*l*m-o*f*m-d*l*u+o*p*u,v=g*p*c-h*f*c-g*l*m+a*f*m+h*l*u-a*p*u,_=h*S*c-g*d*c+g*o*m-a*S*m-h*o*u+a*d*u,P=g*d*l-h*S*l-g*o*p+a*S*p+h*o*f-a*d*f,b=t*M+i*v+s*_+n*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=M*A,e[1]=(S*p*n-d*f*n-S*s*m+i*f*m+d*s*u-i*p*u)*A,e[2]=(o*f*n-S*l*n+S*s*c-i*f*c-o*s*u+i*l*u)*A,e[3]=(d*l*n-o*p*n-d*s*c+i*p*c+o*s*m-i*l*m)*A,e[4]=v*A,e[5]=(h*f*n-g*p*n+g*s*m-t*f*m-h*s*u+t*p*u)*A,e[6]=(g*l*n-a*f*n-g*s*c+t*f*c+a*s*u-t*l*u)*A,e[7]=(a*p*n-h*l*n+h*s*c-t*p*c-a*s*m+t*l*m)*A,e[8]=_*A,e[9]=(g*d*n-h*S*n-g*i*m+t*S*m+h*i*u-t*d*u)*A,e[10]=(a*S*n-g*o*n+g*i*c-t*S*c-a*i*u+t*o*u)*A,e[11]=(h*o*n-a*d*n-h*i*c+t*d*c+a*i*m-t*o*m)*A,e[12]=P*A,e[13]=(h*S*s-g*d*s+g*i*p-t*S*p-h*i*f+t*d*f)*A,e[14]=(g*o*s-a*S*s-g*i*l+t*S*l+a*i*f-t*o*f)*A,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*p+t*o*p)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,a){return this.set(1,i,n,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,d=o+o,p=n*c,m=n*h,g=n*d,S=a*h,f=a*d,u=o*d,M=l*c,v=l*h,_=l*d,P=i.x,b=i.y,A=i.z;return s[0]=(1-(S+u))*P,s[1]=(m+_)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-_)*b,s[5]=(1-(p+u))*b,s[6]=(f+M)*b,s[7]=0,s[8]=(g+v)*A,s[9]=(f-M)*A,s[10]=(1-(p+S))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);const l=1/n,c=1/a,h=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=n,i.y=a,i.z=o,this}makePerspective(e,t,i,s,n,a,o=li){const l=this.elements,c=2*n/(t-e),h=2*n/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let m,g;if(o===li)m=-(a+n)/(a-n),g=-2*a*n/(a-n);else if(o===Es)m=-a/(a-n),g=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,n,a,o=li){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-n),p=(t+e)*c,m=(i+s)*h;let g,S;if(o===li)g=(a+n)*d,S=-2*d;else if(o===Es)g=n*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new I,kt=new ot,bc=new I(0,0,0),Ac=new I(1,1,1),mi=new I,es=new I,It=new I,Va=new ot,ka=new Wr;class qt{constructor(e=0,t=0,i=0,s=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rc=0;const Ga=new I,Ki=new Wr,ri=new ot,ts=new I,Pr=new I,Cc=new I,Pc=new Wr,Wa=new I(1,0,0),Xa=new I(0,1,0),ja=new I(0,0,1),qa={type:"added"},Lc={type:"removed"},$i={type:"childadded",child:null},Gs={type:"childremoved",child:null};class yt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new I,t=new qt,i=new Wr,s=new I(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Ga.copy(e).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ts.copy(e):ts.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Pr,ts,this.up):ri.lookAt(ts,Pr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(ri),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lc),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Cc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new I,si=new I,Ws=new I,ni=new I,Qi=new I,er=new I,Ya=new I,Xs=new I,js=new I,qs=new I,Ys=new rt,Zs=new rt,Js=new rt;class Wt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gt.subVectors(e,t),s.cross(Gt);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){Gt.subVectors(s,t),si.subVectors(i,t),Ws.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(si),l=Gt.dot(Ws),c=si.dot(si),h=si.dot(Ws),d=a*c-o*o;if(d===0)return n.set(0,0,0),null;const p=1/d,m=(c*l-o*h)*p,g=(a*h-o*l)*p;return n.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,n,a,o,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,i,s,n,a){return Ys.setScalar(0),Zs.setScalar(0),Js.setScalar(0),Ys.fromBufferAttribute(e,t),Zs.fromBufferAttribute(e,i),Js.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ys,n.x),a.addScaledVector(Zs,n.y),a.addScaledVector(Js,n.z),a}static isFrontFacing(e,t,i,s){return Gt.subVectors(i,t),si.subVectors(e,t),Gt.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Gt.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let a,o;Qi.subVectors(s,i),er.subVectors(n,i),Xs.subVectors(e,i);const l=Qi.dot(Xs),c=er.dot(Xs);if(l<=0&&c<=0)return t.copy(i);js.subVectors(e,s);const h=Qi.dot(js),d=er.dot(js);if(h>=0&&d<=h)return t.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Qi,a);qs.subVectors(e,n);const m=Qi.dot(qs),g=er.dot(qs);if(g>=0&&m<=g)return t.copy(n);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(er,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Ya.subVectors(n,s),o=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Ya,o);const u=1/(f+S+p);return a=S*u,o=p*u,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},is={h:0,s:0,l:0};function Ks(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=mc(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=Ks(a,n,e+1/3),this.g=Ks(a,n,e),this.b=Ks(a,n,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=rl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(St(Et.r*255,0,255))*65536+Math.round(St(Et.g*255,0,255))*256+Math.round(St(Et.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,s=Et.g,n=Et.b,a=Math.max(i,s,n),o=Math.min(i,s,n);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-n)/d+(s<n?6:0);break;case s:l=(n-i)/d+2;break;case n:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ot){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,s=Et.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(is);const i=Us(gi.h,is.h,t),s=Us(gi.s,is.s,t),n=Us(gi.l,is.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ge;Ge.NAMES=rl;let Ic=0;class Mr extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=xr(),this.name="",this.blending=or,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fn,this.blendDst=mn,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fn&&(i.blendSrc=this.blendSrc),this.blendDst!==mn&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=s(e.textures),a=s(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rt extends Mr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,rs=new _e;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ia,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class sl extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nl extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dc=0;const Nt=new ot,$s=new yt,tr=new I,Dt=new Xr,Lr=new Xr,vt=new I;class zt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qo(e)?nl:sl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ze().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,n=e.length;s<n;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const n=e[i];t.setXYZ(i,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];Dt.setFromBufferAttribute(n),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Dt.min,Lr.min),Dt.expandByPoint(vt),vt.addVectors(Dt.max,Lr.max),Dt.expandByPoint(vt)):(Dt.expandByPoint(Lr.min),Dt.expandByPoint(Lr.max))}Dt.getCenter(i);let s=0;for(let n=0,a=e.count;n<a;n++)vt.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(vt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),vt.add(tr)),s=Math.max(s,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,d=new I,p=new _e,m=new _e,g=new _e,S=new I,f=new I;function u(R,w,x){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),p.fromBufferAttribute(n,R),m.fromBufferAttribute(n,w),g.fromBufferAttribute(n,x),h.sub(c),d.sub(c),m.sub(p),g.sub(p);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(S),o[w].add(S),o[x].add(S),l[R].add(f),l[w].add(f),l[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,w=M.length;R<w;++R){const x=M[R],C=x.start,F=x.count;for(let B=C,G=C+F;B<G;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new I,_=new I,P=new I,b=new I;function A(R){P.fromBufferAttribute(s,R),b.copy(P);const w=o[R];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(b,w);const x=_.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,x)}for(let R=0,w=M.length;R<w;++R){const x=M[R],C=x.start,F=x.count;for(let B=C,G=C+F;B<G;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new I,n=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),S=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,S),a.fromBufferAttribute(t,f),h.subVectors(a,n),d.subVectors(s,n),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),n.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,n),d.subVectors(s,n),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let u=0;u<h;u++)p[g++]=c[m++]}return new $t(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new ot,Ri=new il,ss=new pa,Ja=new I,ns=new I,as=new I,os=new I,Qs=new I,ls=new I,Ka=new I,cs=new I;class L extends yt{constructor(e=new zt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){ls.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],d=n[l];h!==0&&(Qs.fromBufferAttribute(d,e),a?ls.addScaledVector(Qs,h):ls.addScaledVector(Qs.sub(t),h))}t.add(ls)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(n),Ri.copy(e.ray).recast(e.near),!(ss.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(ss,Ja)===null||Ri.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(Za.copy(n).invert(),Ri.copy(e.ray).applyMatrix4(Za),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let s;const n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,d=n.attributes.normal,p=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const f=p[g],u=a[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let _=M,P=v;_<P;_+=3){const b=o.getX(_),A=o.getX(_+1),R=o.getX(_+2);s=hs(this,u,e,i,c,h,d,b,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=g,u=S;f<u;f+=3){const M=o.getX(f),v=o.getX(f+1),_=o.getX(f+2);s=hs(this,a,e,i,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const f=p[g],u=a[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let _=M,P=v;_<P;_+=3){const b=_,A=_+1,R=_+2;s=hs(this,u,e,i,c,h,d,b,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=g,u=S;f<u;f+=3){const M=f,v=f+1,_=f+2;s=hs(this,a,e,i,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Uc(r,e,t,i,s,n,a,o){let l;if(e.side===Ct?l=i.intersectTriangle(a,n,s,!0,o):l=i.intersectTriangle(s,n,a,e.side===Si,o),l===null)return null;cs.copy(o),cs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:r}}function hs(r,e,t,i,s,n,a,o,l,c){r.getVertexPosition(o,ns),r.getVertexPosition(l,as),r.getVertexPosition(c,os);const h=Uc(r,e,t,i,ns,as,os,Ka);if(h){const d=new I;Wt.getBarycoord(Ka,ns,as,os,d),s&&(h.uv=Wt.getInterpolatedAttribute(s,o,l,c,d,new _e)),n&&(h.uv1=Wt.getInterpolatedAttribute(n,o,l,c,d,new _e)),a&&(h.normal=Wt.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};Wt.getNormal(ns,as,os,p.normal),h.face=p,h.barycoord=d}return h}class J extends zt{constructor(e=1,t=1,i=1,s=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:a};const o=this;s=Math.floor(s),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,a,n,0),g("z","y","x",1,-1,i,t,-e,a,n,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,n,4),g("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function g(S,f,u,M,v,_,P,b,A,R,w){const x=_/A,C=P/R,F=_/2,B=P/2,G=b/2,$=A+1,X=R+1;let ee=0,W=0;const re=new I;for(let de=0;de<X;de++){const Re=de*C-B;for(let Ie=0;Ie<$;Ie++){const Qe=Ie*x-F;re[S]=Qe*M,re[f]=Re*v,re[u]=G,c.push(re.x,re.y,re.z),re[S]=0,re[f]=0,re[u]=b>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ie/A),d.push(1-de/R),ee+=1}}for(let de=0;de<R;de++)for(let Re=0;Re<A;Re++){const Ie=p+Re+$*de,Qe=p+Re+$*(de+1),q=p+(Re+1)+$*(de+1),ne=p+(Re+1)+$*de;l.push(Ie,Qe,ne),l.push(Qe,q,ne),W+=6}o.addGroup(m,W,w),m+=W,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new J(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Tt(r){const e={};for(let t=0;t<r.length;t++){const i=gr(r[t]);for(const s in i)e[s]=i[s]}return e}function Nc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function al(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Oc={clone:gr,merge:Tt};var Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Mr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Nc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ol extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new I,$a=new _e,Qa=new _e;class Ut extends ol{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qn*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,$a,Qa),t.subVectors(Qa,$a)}setViewOffset(e,t,i,s,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Bc extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ir,rr,e,t);s.layers=this.layers,this.add(s);const n=new Ut(ir,rr,e,t);n.layers=this.layers,this.add(n);const a=new Ut(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new Ut(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Ut(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,a,o,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,n),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ll extends Pt{constructor(e,t,i,s,n,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,s,n,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hc extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ll(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new J(5,5,5),n=new yi({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:xi});n.uniforms.tEquirect.value=t;const a=new L(s,n),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Kt),new Bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(n)}}const en=new I,Vc=new I,kc=new ze;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=en.subVectors(i,t).cross(Vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(en),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kc.getNormalMatrix(e),s=this.coplanarPoint(en).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new pa,us=new I;class ma{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,n=new Ii,a=new Ii){this.planes=[e,t,i,s,n,a]}set(e,t,i,s,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){const i=this.planes,s=e.elements,n=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],m=s[8],g=s[9],S=s[10],f=s[11],u=s[12],M=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-n,p-c,f-m,_-u).normalize(),i[1].setComponents(l+n,p+c,f+m,_+u).normalize(),i[2].setComponents(l+a,p+h,f+g,_+M).normalize(),i[3].setComponents(l-a,p-h,f-g,_-M).normalize(),i[4].setComponents(l-o,p-d,f-S,_-v).normalize(),t===li)i[5].setComponents(l+o,p+d,f+S,_+v).normalize();else if(t===Es)i[5].setComponents(o,d,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(us.x=s.normal.x>0?e.max.x:e.min.x,us.y=s.normal.y>0?e.max.y:e.min.y,us.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cl(){let r=null,e=!1,t=null,i=null;function s(n,a){t(n,a),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Gc(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++p,d[p]=S)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const S=d[m];r.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:n,update:a}}class Ye extends zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,p=t/l,m=[],g=[],S=[],f=[];for(let u=0;u<h;u++){const M=u*p-a;for(let v=0;v<c;v++){const _=v*d-n;g.push(_,-M,0),S.push(0,0,1),f.push(v/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){const v=M+c*u,_=M+c*(u+1),P=M+1+c*(u+1),b=M+1+c*u;m.push(v,_,b),m.push(_,P,b)}this.setIndex(m),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xc=`#ifdef USE_ALPHAHASH
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
#endif`,jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c=`#ifdef USE_BATCHING
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
#endif`,Qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ih=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rh=`#ifdef USE_IRIDESCENCE
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
#endif`,sh=`#ifdef USE_BUMPMAP
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ph=`#define PI 3.141592653589793
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
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mh=`vec3 transformedNormal = objectNormal;
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
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
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
}`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
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
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vh=`PhysicalMaterial material;
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
#endif`,kh=`struct PhysicalMaterial {
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
}`,Gh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qh=`#if defined( USE_POINTS_UV )
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
#endif`,eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ru=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nu=`#ifdef USE_MORPHTARGETS
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
#endif`,au=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,du=`#ifdef USE_NORMALMAP
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
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Au=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ru=`float getShadowMask() {
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
}`,Cu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pu=`#ifdef USE_SKINNING
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
#endif`,Lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
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
#endif`,zu=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wu=`uniform sampler2D t2D;
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
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
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
}`,Ju=`#if DEPTH_PACKING == 3200
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
}`,Ku=`#define DISTANCE
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
}`,$u=`#define DISTANCE
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`uniform float scale;
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
}`,id=`uniform vec3 diffuse;
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
}`,rd=`#include <common>
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
}`,sd=`uniform vec3 diffuse;
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
}`,nd=`#define LAMBERT
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
}`,ad=`#define LAMBERT
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
}`,od=`#define MATCAP
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
}`,ld=`#define MATCAP
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
}`,cd=`#define NORMAL
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
}`,hd=`#define NORMAL
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
}`,ud=`#define PHONG
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
}`,dd=`#define PHONG
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
}`,pd=`#define STANDARD
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
}`,fd=`#define STANDARD
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
}`,md=`#define TOON
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
}`,gd=`#define TOON
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
}`,_d=`uniform float size;
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
}`,vd=`uniform vec3 diffuse;
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
}`,xd=`#include <common>
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
}`,Md=`uniform vec3 color;
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
}`,Sd=`uniform float rotation;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Wc,alphahash_pars_fragment:Xc,alphamap_fragment:jc,alphamap_pars_fragment:qc,alphatest_fragment:Yc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:Kc,batching_pars_vertex:$c,batching_vertex:Qc,begin_vertex:eh,beginnormal_vertex:th,bsdfs:ih,iridescence_fragment:rh,bumpmap_pars_fragment:sh,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:oh,clipping_planes_vertex:lh,color_fragment:ch,color_pars_fragment:hh,color_pars_vertex:uh,color_vertex:dh,common:ph,cube_uv_reflection_fragment:fh,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,colorspace_fragment:Mh,colorspace_pars_fragment:Sh,envmap_fragment:yh,envmap_common_pars_fragment:wh,envmap_pars_fragment:Eh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Oh,envmap_vertex:bh,fog_vertex:Ah,fog_pars_vertex:Rh,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_pars_fragment:Ih,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Uh,lights_pars_begin:Nh,lights_toon_fragment:Fh,lights_toon_pars_fragment:zh,lights_phong_fragment:Bh,lights_phong_pars_fragment:Hh,lights_physical_fragment:Vh,lights_physical_pars_fragment:kh,lights_fragment_begin:Gh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Zh,map_fragment:Jh,map_pars_fragment:Kh,map_particle_fragment:$h,map_particle_pars_fragment:Qh,metalnessmap_fragment:eu,metalnessmap_pars_fragment:tu,morphinstance_vertex:iu,morphcolor_vertex:ru,morphnormal_vertex:su,morphtarget_pars_vertex:nu,morphtarget_vertex:au,normal_fragment_begin:ou,normal_fragment_maps:lu,normal_pars_fragment:cu,normal_pars_vertex:hu,normal_vertex:uu,normalmap_pars_fragment:du,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:mu,iridescence_pars_fragment:gu,opaque_fragment:_u,packing:vu,premultiplied_alpha_fragment:xu,project_vertex:Mu,dithering_fragment:Su,dithering_pars_fragment:yu,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:bu,shadowmap_vertex:Au,shadowmask_pars_fragment:Ru,skinbase_vertex:Cu,skinning_pars_vertex:Pu,skinning_vertex:Lu,skinnormal_vertex:Iu,specularmap_fragment:Du,specularmap_pars_fragment:Uu,tonemapping_fragment:Nu,tonemapping_pars_fragment:Ou,transmission_fragment:Fu,transmission_pars_fragment:zu,uv_pars_fragment:Bu,uv_pars_vertex:Hu,uv_vertex:Vu,worldpos_vertex:ku,background_vert:Gu,background_frag:Wu,backgroundCube_vert:Xu,backgroundCube_frag:ju,cube_vert:qu,cube_frag:Yu,depth_vert:Zu,depth_frag:Ju,distanceRGBA_vert:Ku,distanceRGBA_frag:$u,equirect_vert:Qu,equirect_frag:ed,linedashed_vert:td,linedashed_frag:id,meshbasic_vert:rd,meshbasic_frag:sd,meshlambert_vert:nd,meshlambert_frag:ad,meshmatcap_vert:od,meshmatcap_frag:ld,meshnormal_vert:cd,meshnormal_frag:hd,meshphong_vert:ud,meshphong_frag:dd,meshphysical_vert:pd,meshphysical_frag:fd,meshtoon_vert:md,meshtoon_frag:gd,points_vert:_d,points_frag:vd,shadow_vert:xd,shadow_frag:Md,sprite_vert:Sd,sprite_frag:yd},oe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Zt={basic:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Tt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Tt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Tt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Tt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Tt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Tt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Tt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Tt([oe.lights,oe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zt.physical={uniforms:Tt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ds={r:0,b:0,g:0},Pi=new qt,wd=new ot;function Ed(r,e,t,i,s,n,a){const o=new Ge(0);let l=n===!0?0:1,c,h,d=null,p=0,m=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function S(M){let v=!1;const _=g(M);_===null?u(o,l):_&&_.isColor&&(u(_,1),v=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(M,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===bs)?(h===void 0&&(h=new L(new J(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:gr(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pi.copy(v.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wd.makeRotationFromEuler(Pi)),h.material.toneMapped=Ke.getTransfer(_.colorSpace)!==it,(d!==_||p!==_.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,m=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new L(new Ye(2,2),new yi({name:"BackgroundMaterial",uniforms:gr(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,m=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,v){M.getRGB(ds,al(r)),i.buffers.color.setClear(ds.r,ds.g,ds.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:S,addToRenderList:f}}function Td(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=p(null);let n=s,a=!1;function o(x,C,F,B,G){let $=!1;const X=d(B,F,C);n!==X&&(n=X,c(n.object)),$=m(x,B,F,G),$&&g(x,B,F,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(x,C,F,B),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function d(x,C,F){const B=F.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let $=G[C.id];$===void 0&&($={},G[C.id]=$);let X=$[B];return X===void 0&&(X=p(l()),$[B]=X),X}function p(x){const C=[],F=[],B=[];for(let G=0;G<t;G++)C[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,C,F,B){const G=n.attributes,$=C.attributes;let X=0;const ee=F.getAttributes();for(const W in ee)if(ee[W].location>=0){const re=G[W];let de=$[W];if(de===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;X++}return n.attributesNum!==X||n.index!==B}function g(x,C,F,B){const G={},$=C.attributes;let X=0;const ee=F.getAttributes();for(const W in ee)if(ee[W].location>=0){let re=$[W];re===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(re=x.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),G[W]=de,X++}n.attributes=G,n.attributesNum=X,n.index=B}function S(){const x=n.newAttributes;for(let C=0,F=x.length;C<F;C++)x[C]=0}function f(x){u(x,0)}function u(x,C){const F=n.newAttributes,B=n.enabledAttributes,G=n.attributeDivisors;F[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),G[x]!==C&&(r.vertexAttribDivisor(x,C),G[x]=C)}function M(){const x=n.newAttributes,C=n.enabledAttributes;for(let F=0,B=C.length;F<B;F++)C[F]!==x[F]&&(r.disableVertexAttribArray(F),C[F]=0)}function v(x,C,F,B,G,$,X){X===!0?r.vertexAttribIPointer(x,C,F,G,$):r.vertexAttribPointer(x,C,F,B,G,$)}function _(x,C,F,B){S();const G=B.attributes,$=F.getAttributes(),X=C.defaultAttributeValues;for(const ee in $){const W=$[ee];if(W.location>=0){let re=G[ee];if(re===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const de=re.normalized,Re=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;const Qe=Ie.buffer,q=Ie.type,ne=Ie.bytesPerElement,xe=q===r.INT||q===r.UNSIGNED_INT||re.gpuType===aa;if(re.isInterleavedBufferAttribute){const ce=re.data,be=ce.stride,Le=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<W.locationSize;Ve++)u(W.location+Ve,ce.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)f(W.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Ve=0;Ve<W.locationSize;Ve++)v(W.location+Ve,Re/W.locationSize,q,de,be*ne,(Le+Re/W.locationSize*Ve)*ne,xe)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)u(W.location+ce,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<W.locationSize;ce++)f(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ce=0;ce<W.locationSize;ce++)v(W.location+ce,Re/W.locationSize,q,de,Re*ne,Re/W.locationSize*ce*ne,xe)}}else if(X!==void 0){const de=X[ee];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(W.location,de);break;case 3:r.vertexAttrib3fv(W.location,de);break;case 4:r.vertexAttrib4fv(W.location,de);break;default:r.vertexAttrib1fv(W.location,de)}}}}M()}function P(){R();for(const x in i){const C=i[x];for(const F in C){const B=C[F];for(const G in B)h(B[G].object),delete B[G];delete C[F]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const F in C){const B=C[F];for(const G in B)h(B[G].object),delete B[G];delete C[F]}delete i[x.id]}function A(x){for(const C in i){const F=i[C];if(F[x.id]===void 0)continue;const B=F[x.id];for(const G in B)h(B[G].object),delete B[G];delete F[x.id]}}function R(){w(),a=!0,n!==s&&(n=s,c(n.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function bd(r,e,t){let i;function s(c){i=c}function n(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,i,1)}function l(c,h,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S]*p[S];t.update(g,i,1)}}this.setMode=s,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ad(r,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Xt&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!R)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),u=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:P,maxSamples:b}}function Rd(r){const e=this;let t=null,i=0,s=!1,n=!1;const a=new Ii,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,S=d.clipIntersection,f=d.clipShadows,u=r.get(d);if(!s||g===null||g.length===0||n&&!f)n?h(null):c();else{const M=n?0:i,v=M*4;let _=u.clippingState||null;l.value=_,_=h(g,p,v,m);for(let P=0;P!==v;++P)_[P]=t[P];u.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,g){const S=d!==null?d.length:0;let f=null;if(S!==0){if(f=l.value,g!==!0||f===null){const u=m+S*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<u)&&(f=new Float32Array(u));for(let v=0,_=m;v!==S;++v,_+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(f,_),f[_+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}function Cd(r){let e=new WeakMap;function t(a,o){return o===wn?a.mapping=dr:o===En&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===wn||o===En)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hc(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class hl extends ol{constructor(e=-1,t=1,i=1,s=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,eo=[.125,.215,.35,.446,.526,.582],Ni=20,tn=new hl,to=new Ge;let rn=null,sn=0,nn=0,an=!1;const Di=(1+Math.sqrt(5))/2,sr=1/Di,io=[new I(-Di,sr,0),new I(Di,sr,0),new I(-sr,0,Di),new I(sr,0,Di),new I(0,Di,-sr),new I(0,Di,sr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rn=this._renderer.getRenderTarget(),sn=this._renderer.getActiveCubeFace(),nn=this._renderer.getActiveMipmapLevel(),an=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,s,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rn,sn,nn),this._renderer.xr.enabled=an,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rn=this._renderer.getRenderTarget(),sn=this._renderer.getActiveCubeFace(),nn=this._renderer.getActiveMipmapLevel(),an=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Gr,format:Xt,colorSpace:_r,depthBuffer:!1},s=so(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pd(n)),this._blurMaterial=Ld(n,e,t)}return s}_compileMaterial(e){const t=new L(this._lodPlanes[0],e);this._renderer.compile(t,tn)}_sceneToCubeUV(e,t,i,s){const n=new Ut(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(to),l.toneMapping=Mi,l.autoClear=!1;const d=new Rt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),p=new L(new J,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(to),m=!0);for(let S=0;S<6;S++){const f=S%3;f===0?(n.up.set(0,a[S],0),n.lookAt(o[S],0,0)):f===1?(n.up.set(0,0,a[S]),n.lookAt(0,o[S],0)):(n.up.set(0,a[S],0),n.lookAt(0,0,o[S]));const u=this._cubeSize;ps(s,f*u,S>2?u:0,u,u),l.setRenderTarget(s),m&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===dr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const n=s?this._cubemapMaterial:this._equirectMaterial,a=new L(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,tn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let n=1;n<s;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=io[(s-n-1)%io.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,s,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",n),this._halfBlur(a,e,i,i,s,"longitudinal",n)}_halfBlur(e,t,i,s,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new L(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),S=n/g,f=isFinite(n)?1+Math.floor(h*S):Ni;f>Ni&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ni}`);const u=[];let M=0;for(let A=0;A<Ni;++A){const R=A/S,w=Math.exp(-R*R/2);u.push(w),A===0?M+=w:A<f&&(M+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/M;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;const _=this._sizeLods[s],P=3*_*(s>v-nr?s-v+nr:0),b=4*(this._cubeSize-_);ps(t,P,b,3*_,2*_),l.setRenderTarget(t),l.render(d,tn)}}function Pd(r){const e=[],t=[],i=[];let s=r;const n=r-nr+1+eo.length;for(let a=0;a<n;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>r-nr?l=eo[a-r+nr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,S=3,f=2,u=1,M=new Float32Array(S*g*m),v=new Float32Array(f*g*m),_=new Float32Array(u*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,R=b>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(w,S*g*b),v.set(p,f*g*b);const x=[b,b,b,b,b,b];_.set(x,u*g*b)}const P=new zt;P.setAttribute("position",new $t(M,S)),P.setAttribute("uv",new $t(v,f)),P.setAttribute("faceIndex",new $t(_,u)),e.push(P),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function so(r,e,t){const i=new Vi(r,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function Ld(r,e,t){const i=new Float32Array(Ni),s=new I(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function no(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ao(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function Id(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===wn||l===En,h=l===dr||l===pr;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new ro(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new ro(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",n),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Dd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ud(r,e,t,i){const s={},n=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const S=p.morphAttributes[g];for(let f=0,u=S.length;f<u;f++)e.remove(S[f])}p.removeEventListener("dispose",a),delete s[p.id];const m=n.get(p);m&&(e.remove(m),n.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const S=m[g];for(let f=0,u=S.length;f<u;f++)e.update(S[f],r.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,g=d.attributes.position;let S=0;if(m!==null){const M=m.array;S=m.version;for(let v=0,_=M.length;v<_;v+=3){const P=M[v+0],b=M[v+1],A=M[v+2];p.push(P,b,b,A,A,P)}}else if(g!==void 0){const M=g.array;S=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const P=v+0,b=v+1,A=v+2;p.push(P,b,b,A,A,P)}}else return;const f=new(Qo(p)?nl:sl)(p,1);f.version=S;const u=n.get(d);u&&e.remove(u),n.set(d,f)}function h(d){const p=n.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Nd(r,e,t){let i;function s(p){i=p}let n,a;function o(p){n=p.type,a=p.bytesPerElement}function l(p,m){r.drawElements(i,m,n,p*a),t.update(m,i,1)}function c(p,m,g){g!==0&&(r.drawElementsInstanced(i,m,n,p*a,g),t.update(m,i,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,n,p,0,g);let S=0;for(let f=0;f<g;f++)S+=m[f];t.update(S,i,1)}function d(p,m,g,S){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],S[u]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,n,p,0,S,0,g);let u=0;for(let M=0;M<g;M++)u+=m[M]*S[M];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Od(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fd(r,e,t){const i=new WeakMap,s=new rt;function n(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let m=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",m)};p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),S===!0&&(_=2),f===!0&&(_=3);let P=o.attributes.position.count*_,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*b*4*d),R=new tl(A,P,b,d);R.type=oi,R.needsUpdate=!0;const w=_*4;for(let x=0;x<d;x++){const C=u[x],F=M[x],B=v[x],G=P*b*4*x;for(let $=0;$<C.count;$++){const X=$*w;g===!0&&(s.fromBufferAttribute(C,$),A[G+X+0]=s.x,A[G+X+1]=s.y,A[G+X+2]=s.z,A[G+X+3]=0),S===!0&&(s.fromBufferAttribute(F,$),A[G+X+4]=s.x,A[G+X+5]=s.y,A[G+X+6]=s.z,A[G+X+7]=0),f===!0&&(s.fromBufferAttribute(B,$),A[G+X+8]=s.x,A[G+X+9]=s.y,A[G+X+10]=s.z,A[G+X+11]=B.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new _e(P,b)},i.set(o,p),o.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:n}}function zd(r,e,t,i){let s=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}class ul extends Pt{constructor(e,t,i,s,n,a,o,l,c,h=lr){if(h!==lr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===lr&&(i=Hi),i===void 0&&h===mr&&(i=fr),super(null,s,n,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dl=new Pt,oo=new ul(1,1),pl=new tl,fl=new Ec,ml=new ll,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),po=new Float32Array(4);function Sr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let n=lo[s];if(n===void 0&&(n=new Float32Array(s),lo[s]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(n,o)}return n}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Rs(r,e){let t=co[e];t===void 0&&(t=new Int32Array(e),co[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Bd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function Vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function Gd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;po.set(i),r.uniformMatrix2fv(this.addr,!1,po),_t(t,i)}}function Wd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;uo.set(i),r.uniformMatrix3fv(this.addr,!1,uo),_t(t,i)}}function Xd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;ho.set(i),r.uniformMatrix4fv(this.addr,!1,ho),_t(t,i)}}function jd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function Yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function Zd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function Jd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function $d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function Qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function ep(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_2D_SHADOW?(oo.compareFunction=$o,n=oo):n=dl,t.setTexture2D(e||n,s)}function tp(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fl,s)}function ip(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ml,s)}function rp(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pl,s)}function sp(r){switch(r){case 5126:return Bd;case 35664:return Hd;case 35665:return Vd;case 35666:return kd;case 35674:return Gd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return jd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Zd;case 5125:return Jd;case 36294:return Kd;case 36295:return $d;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}function np(r,e){r.uniform1fv(this.addr,e)}function ap(r,e){const t=Sr(e,this.size,2);r.uniform2fv(this.addr,t)}function op(r,e){const t=Sr(e,this.size,3);r.uniform3fv(this.addr,t)}function lp(r,e){const t=Sr(e,this.size,4);r.uniform4fv(this.addr,t)}function cp(r,e){const t=Sr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hp(r,e){const t=Sr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function up(r,e){const t=Sr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function dp(r,e){r.uniform1iv(this.addr,e)}function pp(r,e){r.uniform2iv(this.addr,e)}function fp(r,e){r.uniform3iv(this.addr,e)}function mp(r,e){r.uniform4iv(this.addr,e)}function gp(r,e){r.uniform1uiv(this.addr,e)}function _p(r,e){r.uniform2uiv(this.addr,e)}function vp(r,e){r.uniform3uiv(this.addr,e)}function xp(r,e){r.uniform4uiv(this.addr,e)}function Mp(r,e,t){const i=this.cache,s=e.length,n=Rs(t,s);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||dl,n[a])}function Sp(r,e,t){const i=this.cache,s=e.length,n=Rs(t,s);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fl,n[a])}function yp(r,e,t){const i=this.cache,s=e.length,n=Rs(t,s);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ml,n[a])}function wp(r,e,t){const i=this.cache,s=e.length,n=Rs(t,s);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pl,n[a])}function Ep(r){switch(r){case 5126:return np;case 35664:return ap;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return pp;case 35668:case 35672:return fp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return _p;case 36295:return vp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return wp}}class Tp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}}class bp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ep(t.type)}}class Ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,a=s.length;n!==a;++n){const o=s[n];o.setValue(e,t[o.id],i)}}}const on=/(\w+)(\])?(\[|\.)?/g;function fo(r,e){r.seq.push(e),r.map[e.id]=e}function Rp(r,e,t){const i=r.name,s=i.length;for(on.lastIndex=0;;){const n=on.exec(i),a=on.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fo(t,c===void 0?new Tp(o,r,e):new bp(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ap(o),fo(t,h)),t=h}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const n=e.getActiveUniform(t,s),a=e.getUniformLocation(t,n.name);Rp(n,a,this)}}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function mo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Cp=37297;let Pp=0;function Lp(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=s;a<n;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const go=new ze;function Ip(r){Ke._getMatrix(go,Ke.workingColorSpace,r);const e=`mat3( ${go.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case As:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _o(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+Lp(r.getShaderSource(e),a)}else return s}function Dp(r,e){const t=Ip(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Up(r,e){let t;switch(e){case $l:t="Linear";break;case Ql:t="Reinhard";break;case ec:t="Cineon";break;case Ho:t="ACESFilmic";break;case ic:t="AgX";break;case rc:t="Neutral";break;case tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new I;function Np(){Ke.getLuminanceCoefficients(fs);const r=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Op(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Fp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zp(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=r.getActiveAttrib(e,s),a=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ur(r){return r!==""}function vo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(r){return r.replace(Bp,Vp)}const Hp=new Map;function Vp(r,e){let t=Be[e];if(t===void 0){const i=Hp.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(r){return r.replace(kp,Gp)}function Gp(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function So(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function qp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case Jl:e="ENVMAP_BLENDING_MIX";break;case Kl:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zp(r,e,t,i){const s=r.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wp(t),c=Xp(t),h=jp(t),d=qp(t),p=Yp(t),m=Op(t),g=Fp(n),S=s.createProgram();let f,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),u.length>0&&(u+=`
`)):(f=[So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),u=[So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Dp("linearToOutputTexel",t.outputColorSpace),Np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=ea(a),a=vo(a,t),a=xo(a,t),o=ea(o),o=vo(o,t),o=xo(o,t),a=Mo(a),o=Mo(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=M+f+a,_=M+u+o,P=mo(s,s.VERTEX_SHADER,v),b=mo(s,s.FRAGMENT_SHADER,_);s.attachShader(S,P),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(C){if(r.debug.checkShaderErrors){const F=s.getProgramInfoLog(S).trim(),B=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(b).trim();let $=!0,X=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,P,b);else{const ee=_o(s,P,"vertex"),W=_o(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+ee+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(X=!1);X&&(C.diagnostics={runnable:$,programLog:F,vertexShader:{log:B,prefix:f},fragmentShader:{log:G,prefix:u}})}s.deleteShader(P),s.deleteShader(b),R=new ws(s,S),w=zp(s,S)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,Cp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=b,this}let Jp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $p(e),t.set(e,i)),i}}class $p{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function Qp(r,e,t,i,s,n,a){const o=new fa,l=new Kp,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function f(w,x,C,F,B){const G=F.fog,$=B.geometry,X=w.isMeshStandardMaterial?F.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),W=ee&&ee.mapping===bs?ee.image.height:null,re=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Re=de!==void 0?de.length:0;let Ie=0;$.morphAttributes.position!==void 0&&(Ie=1),$.morphAttributes.normal!==void 0&&(Ie=2),$.morphAttributes.color!==void 0&&(Ie=3);let Qe,q,ne,xe;if(re){const Ze=Zt[re];Qe=Ze.vertexShader,q=Ze.fragmentShader}else Qe=w.vertexShader,q=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const ce=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,nt=!!w.map,We=!!w.matcap,ut=!!ee,O=!!w.aoMap,xt=!!w.lightMap,Xe=!!w.bumpMap,je=!!w.normalMap,Ee=!!w.displacementMap,st=!!w.emissiveMap,we=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,z=w.clearcoat>0,Y=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,ve=w.transmission>0,le=y&&!!w.anisotropyMap,fe=z&&!!w.clearcoatMap,Oe=z&&!!w.clearcoatNormalMap,se=z&&!!w.clearcoatRoughnessMap,me=Q&&!!w.iridescenceMap,Te=Q&&!!w.iridescenceThicknessMap,Pe=Z&&!!w.sheenColorMap,ge=Z&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,De=!!w.specularColorMap,et=!!w.specularIntensityMap,D=ve&&!!w.transmissionMap,ae=ve&&!!w.thicknessMap,k=!!w.gradientMap,K=!!w.alphaMap,he=w.alphaTest>0,te=!!w.alphaHash,Ce=!!w.extensions;let ke=Mi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ke=r.toneMapping);const tt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Qe,fragmentShader:q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:_r,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:We,envMap:ut,envMapMode:ut&&ee.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:xt,bumpMap:Xe,normalMap:je,displacementMap:p&&Ee,emissiveMap:st,normalMapObjectSpace:je&&w.normalMapType===oc,normalMapTangentSpace:je&&w.normalMapType===da,metalnessMap:we,roughnessMap:T,anisotropy:y,anisotropyMap:le,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:se,dispersion:Y,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:Fe,specularColorMap:De,specularIntensityMap:et,transmission:ve,transmissionMap:D,thicknessMap:ae,gradientMap:k,opaque:w.transparent===!1&&w.blending===or&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:he,alphaHash:te,combine:w.combine,mapUv:nt&&S(w.map.channel),aoMapUv:O&&S(w.aoMap.channel),lightMapUv:xt&&S(w.lightMap.channel),bumpMapUv:Xe&&S(w.bumpMap.channel),normalMapUv:je&&S(w.normalMap.channel),displacementMapUv:Ee&&S(w.displacementMap.channel),emissiveMapUv:st&&S(w.emissiveMap.channel),metalnessMapUv:we&&S(w.metalnessMap.channel),roughnessMapUv:T&&S(w.roughnessMap.channel),anisotropyMapUv:le&&S(w.anisotropyMap.channel),clearcoatMapUv:fe&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&S(w.sheenRoughnessMap.channel),specularMapUv:Fe&&S(w.specularMap.channel),specularColorMapUv:De&&S(w.specularColorMap.channel),specularIntensityMapUv:et&&S(w.specularIntensityMap.channel),transmissionMapUv:D&&S(w.transmissionMap.channel),thicknessMapUv:ae&&S(w.thicknessMap.channel),alphaMapUv:K&&S(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(je||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(nt||K),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jt,flipSided:w.side===Ct,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)x.push(C),x.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(x,w),v(x,w),x.push(r.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function M(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function v(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const x=g[w.type];let C;if(x){const F=Zt[x];C=Oc.clone(F.uniforms)}else C=w.uniforms;return C}function P(w,x){let C;for(let F=0,B=h.length;F<B;F++){const G=h[F];if(G.cacheKey===x){C=G,++C.usedTimes;break}}return C===void 0&&(C=new Zp(r,x,w,n),h.push(C)),C}function b(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:_,acquireProgram:P,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function ef(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function tf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wo(){const r=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function a(d,p,m,g,S,f){let u=r[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:S,group:f},r[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=S,u.group=f),e++,u}function o(d,p,m,g,S,f){const u=a(d,p,m,g,S,f);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,p,m,g,S,f){const u=a(d,p,m,g,S,f);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||tf),i.length>1&&i.sort(p||yo),s.length>1&&s.sort(p||yo)}function h(){for(let d=e,p=r.length;d<p;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:o,unshift:l,finish:h,sort:c}}function rf(){let r=new WeakMap;function e(i,s){const n=r.get(i);let a;return n===void 0?(a=new wo,r.set(i,[a])):s>=n.length?(a=new wo,n.push(a)):a=n[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function sf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function nf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let af=0;function of(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lf(r){const e=new sf,t=nf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,n=new ot,a=new ot;function o(c){let h=0,d=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,S=0,f=0,u=0,M=0,v=0,_=0,P=0,b=0,A=0;c.sort(of);for(let w=0,x=c.length;w<x;w++){const C=c[w],F=C.color,B=C.intensity,G=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*B,d+=F.g*B,p+=F.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],B);A++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=X,m++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[S]=X;const ee=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,ee.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[S]=ee.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=$,_++}S++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=X,f++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[u]=X,u++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==f||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==P||R.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=f,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,R.directionalLength=m,R.pointLength=g,R.spotLength=S,R.rectAreaLength=f,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=P,R.numLightProbes=A,i.version=af++)}function l(c,h){let d=0,p=0,m=0,g=0,S=0;const f=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const v=c[u];if(v.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),d++}else if(v.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),m++}else if(v.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(f),a.identity(),n.copy(v.matrixWorld),n.premultiply(f),a.extractRotation(n),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:i}}function Eo(r){const e=new lf(r),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function n(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:a}}function cf(r){let e=new WeakMap;function t(s,n=0){const a=e.get(s);let o;return a===void 0?(o=new Eo(r),e.set(s,[o])):n>=a.length?(o=new Eo(r),a.push(o)):o=a[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class hf extends Mr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uf extends Mr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const df=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pf=`uniform sampler2D shadow_pass;
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
}`;function ff(r,e,t){let i=new ma;const s=new _e,n=new _e,a=new rt,o=new hf({depthPacking:ac}),l=new uf,c={},h=t.maxTextureSize,d={[Si]:Ct,[Ct]:Si,[Jt]:Jt},p=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:df,fragmentShader:pf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new L(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let u=this.type;this.render=function(b,A,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const w=r.getRenderTarget(),x=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),F=r.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=u!==ai&&this.type===ai,G=u===ai&&this.type!==ai;for(let $=0,X=b.length;$<X;$++){const ee=b[$],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const re=W.getFrameExtents();if(s.multiply(re),n.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(n.x=Math.floor(h/re.x),s.x=n.x*re.x,W.mapSize.x=n.x),s.y>h&&(n.y=Math.floor(h/re.y),s.y=n.y*re.y,W.mapSize.y=n.y)),W.map===null||B===!0||G===!0){const Re=this.type!==ai?{minFilter:jt,magFilter:jt}:{};W.map!==null&&W.map.dispose(),W.map=new Vi(s.x,s.y,Re),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const de=W.getViewportCount();for(let Re=0;Re<de;Re++){const Ie=W.getViewport(Re);a.set(n.x*Ie.x,n.y*Ie.y,n.x*Ie.z,n.y*Ie.w),F.viewport(a),W.updateMatrices(ee,Re),i=W.getFrustum(),_(A,R,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ai&&M(W,R),W.needsUpdate=!1}u=this.type,f.needsUpdate=!1,r.setRenderTarget(w,x,C)};function M(b,A){const R=e.update(S);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,R,p,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,R,m,S,null)}function v(b,A,R,w){let x=null;const C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=R.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,B=A.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let $=G[B];$===void 0&&($=x.clone(),G[B]=$,A.addEventListener("dispose",P)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,w===ai?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=r.properties.get(x);F.light=R}return x}function _(b,A,R,w,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ai)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const F=e.update(b),B=b.material;if(Array.isArray(B)){const G=F.groups;for(let $=0,X=G.length;$<X;$++){const ee=G[$],W=B[ee.materialIndex];if(W&&W.visible){const re=v(b,W,w,x);b.onBeforeShadow(r,b,A,R,F,re,ee),r.renderBufferDirect(R,null,F,re,b,ee),b.onAfterShadow(r,b,A,R,F,re,ee)}}}else if(B.visible){const G=v(b,B,w,x);b.onBeforeShadow(r,b,A,R,F,G,null),r.renderBufferDirect(R,null,F,G,b,null),b.onAfterShadow(r,b,A,R,F,G,null)}}const C=b.children;for(let F=0,B=C.length;F<B;F++)_(C[F],A,R,w,x)}function P(b){b.target.removeEventListener("dispose",P);for(const A in c){const R=c[A],w=b.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const mf={[gn]:_n,[vn]:Sn,[xn]:yn,[ur]:Mn,[_n]:gn,[Sn]:vn,[yn]:xn,[Mn]:ur};function gf(r,e){function t(){let D=!1;const ae=new rt;let k=null;const K=new rt(0,0,0,0);return{setMask:function(he){k!==he&&!D&&(r.colorMask(he,he,he,he),k=he)},setLocked:function(he){D=he},setClear:function(he,te,Ce,ke,tt){tt===!0&&(he*=ke,te*=ke,Ce*=ke),ae.set(he,te,Ce,ke),K.equals(ae)===!1&&(r.clearColor(he,te,Ce,ke),K.copy(ae))},reset:function(){D=!1,k=null,K.set(-1,0,0,0)}}}function i(){let D=!1,ae=!1,k=null,K=null,he=null;return{setReversed:function(te){if(ae!==te){const Ce=e.get("EXT_clip_control");ae?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const ke=he;he=null,this.setClear(ke)}ae=te},getReversed:function(){return ae},setTest:function(te){te?ce(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(te){k!==te&&!D&&(r.depthMask(te),k=te)},setFunc:function(te){if(ae&&(te=mf[te]),K!==te){switch(te){case gn:r.depthFunc(r.NEVER);break;case _n:r.depthFunc(r.ALWAYS);break;case vn:r.depthFunc(r.LESS);break;case ur:r.depthFunc(r.LEQUAL);break;case xn:r.depthFunc(r.EQUAL);break;case Mn:r.depthFunc(r.GEQUAL);break;case Sn:r.depthFunc(r.GREATER);break;case yn:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=te}},setLocked:function(te){D=te},setClear:function(te){he!==te&&(ae&&(te=1-te),r.clearDepth(te),he=te)},reset:function(){D=!1,k=null,K=null,he=null,ae=!1}}}function s(){let D=!1,ae=null,k=null,K=null,he=null,te=null,Ce=null,ke=null,tt=null;return{setTest:function(Ze){D||(Ze?ce(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!D&&(r.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,Mt,Bt){(k!==Ze||K!==Mt||he!==Bt)&&(r.stencilFunc(Ze,Mt,Bt),k=Ze,K=Mt,he=Bt)},setOp:function(Ze,Mt,Bt){(te!==Ze||Ce!==Mt||ke!==Bt)&&(r.stencilOp(Ze,Mt,Bt),te=Ze,Ce=Mt,ke=Bt)},setLocked:function(Ze){D=Ze},setClear:function(Ze){tt!==Ze&&(r.clearStencil(Ze),tt=Ze)},reset:function(){D=!1,ae=null,k=null,K=null,he=null,te=null,Ce=null,ke=null,tt=null}}}const n=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,m=[],g=null,S=!1,f=null,u=null,M=null,v=null,_=null,P=null,b=null,A=new Ge(0,0,0),R=0,w=!1,x=null,C=null,F=null,B=null,G=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ee>=2);let re=null,de={};const Re=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Qe=new rt().fromArray(Re),q=new rt().fromArray(Ie);function ne(D,ae,k,K){const he=new Uint8Array(4),te=r.createTexture();r.bindTexture(D,te),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<k;Ce++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ae+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return te}const xe={};xe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),a.setFunc(ur),Xe(!1),je(Aa),ce(r.CULL_FACE),O(xi);function ce(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Le(D,ae){return d[D]!==ae?(r.bindFramebuffer(D,ae),d[D]=ae,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ve(D,ae){let k=m,K=!1;if(D){k=p.get(ae),k===void 0&&(k=[],p.set(ae,k));const he=D.textures;if(k.length!==he.length||k[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ce=he.length;te<Ce;te++)k[te]=r.COLOR_ATTACHMENT0+te;k.length=he.length,K=!0}}else k[0]!==r.BACK&&(k[0]=r.BACK,K=!0);K&&r.drawBuffers(k)}function nt(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const We={[Ui]:r.FUNC_ADD,[Dl]:r.FUNC_SUBTRACT,[Ul]:r.FUNC_REVERSE_SUBTRACT};We[Nl]=r.MIN,We[Ol]=r.MAX;const ut={[Fl]:r.ZERO,[zl]:r.ONE,[Bl]:r.SRC_COLOR,[fn]:r.SRC_ALPHA,[Xl]:r.SRC_ALPHA_SATURATE,[Gl]:r.DST_COLOR,[Vl]:r.DST_ALPHA,[Hl]:r.ONE_MINUS_SRC_COLOR,[mn]:r.ONE_MINUS_SRC_ALPHA,[Wl]:r.ONE_MINUS_DST_COLOR,[kl]:r.ONE_MINUS_DST_ALPHA,[jl]:r.CONSTANT_COLOR,[ql]:r.ONE_MINUS_CONSTANT_COLOR,[Yl]:r.CONSTANT_ALPHA,[Zl]:r.ONE_MINUS_CONSTANT_ALPHA};function O(D,ae,k,K,he,te,Ce,ke,tt,Ze){if(D===xi){S===!0&&(be(r.BLEND),S=!1);return}if(S===!1&&(ce(r.BLEND),S=!0),D!==Il){if(D!==f||Ze!==w){if((u!==Ui||_!==Ui)&&(r.blendEquation(r.FUNC_ADD),u=Ui,_=Ui),Ze)switch(D){case or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.ONE,r.ONE);break;case Ca:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ca:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,v=null,P=null,b=null,A.set(0,0,0),R=0,f=D,w=Ze}return}he=he||ae,te=te||k,Ce=Ce||K,(ae!==u||he!==_)&&(r.blendEquationSeparate(We[ae],We[he]),u=ae,_=he),(k!==M||K!==v||te!==P||Ce!==b)&&(r.blendFuncSeparate(ut[k],ut[K],ut[te],ut[Ce]),M=k,v=K,P=te,b=Ce),(ke.equals(A)===!1||tt!==R)&&(r.blendColor(ke.r,ke.g,ke.b,tt),A.copy(ke),R=tt),f=D,w=!1}function xt(D,ae){D.side===Jt?be(r.CULL_FACE):ce(r.CULL_FACE);let k=D.side===Ct;ae&&(k=!k),Xe(k),D.blending===or&&D.transparent===!1?O(xi):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){x!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),x=D)}function je(D){D!==Pl?(ce(r.CULL_FACE),D!==C&&(D===Aa?r.cullFace(r.BACK):D===Ll?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),C=D}function Ee(D){D!==F&&(X&&r.lineWidth(D),F=D)}function st(D,ae,k){D?(ce(r.POLYGON_OFFSET_FILL),(B!==ae||G!==k)&&(r.polygonOffset(ae,k),B=ae,G=k)):be(r.POLYGON_OFFSET_FILL)}function we(D){D?ce(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function T(D){D===void 0&&(D=r.TEXTURE0+$-1),re!==D&&(r.activeTexture(D),re=D)}function y(D,ae,k){k===void 0&&(re===null?k=r.TEXTURE0+$-1:k=re);let K=de[k];K===void 0&&(K={type:void 0,texture:void 0},de[k]=K),(K.type!==D||K.texture!==ae)&&(re!==k&&(r.activeTexture(k),re=k),r.bindTexture(D,ae||xe[D]),K.type=D,K.texture=ae)}function z(){const D=de[re];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Qe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Qe.copy(D))}function ge(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Fe(D,ae){let k=c.get(ae);k===void 0&&(k=new WeakMap,c.set(ae,k));let K=k.get(D);K===void 0&&(K=r.getUniformBlockIndex(ae,D.name),k.set(D,K))}function De(D,ae){const k=c.get(ae).get(D);l.get(ae)!==k&&(r.uniformBlockBinding(ae,k,D.__bindingPointIndex),l.set(ae,k))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},re=null,de={},d={},p=new WeakMap,m=[],g=null,S=!1,f=null,u=null,M=null,v=null,_=null,P=null,b=null,A=new Ge(0,0,0),R=0,w=!1,x=null,C=null,F=null,B=null,G=null,Qe.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:ce,disable:be,bindFramebuffer:Le,drawBuffers:Ve,useProgram:nt,setBlending:O,setMaterial:xt,setFlipSided:Xe,setCullFace:je,setLineWidth:Ee,setPolygonOffset:st,setScissorTest:we,activeTexture:T,bindTexture:y,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:me,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:Oe,texStorage3D:se,texSubImage2D:Z,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Pe,viewport:ge,reset:et}}function To(r,e,t,i){const s=_f(i);switch(t){case Xo:return r*e;case qo:return r*e;case Yo:return r*e*2;case Zo:return r*e/s.components*s.byteLength;case ca:return r*e/s.components*s.byteLength;case Jo:return r*e*2/s.components*s.byteLength;case ha:return r*e*2/s.components*s.byteLength;case jo:return r*e*3/s.components*s.byteLength;case Xt:return r*e*4/s.components*s.byteLength;case ua:return r*e*4/s.components*s.byteLength;case vs:case xs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rn:case Pn:return Math.max(r,16)*Math.max(e,8)/4;case An:case Cn:return Math.max(r,8)*Math.max(e,8)/2;case Ln:case In:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Un:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nn:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case On:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fn:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zn:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bn:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hn:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vn:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kn:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gn:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wn:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xn:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jn:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qn:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ys:case Yn:case Zn:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ko:case Jn:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kn:case $n:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _f(r){switch(r){case hi:case ko:return{byteLength:1,components:1};case Br:case Go:case Gr:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case Hi:case aa:case oi:return{byteLength:4,components:1};case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function vf(r,e,t,i,s,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):Ts("canvas")}function S(T,y,z){let Y=1;const Q=we(T);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(Y*Q.width),ve=Math.floor(Y*Q.height);d===void 0&&(d=g(Z,ve));const le=y?g(Z,ve):d;return le.width=Z,le.height=ve,le.getContext("2d").drawImage(T,0,0,Z,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+ve+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function f(T){return T.generateMipmaps}function u(T){r.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(T,y,z,Y,Q=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),y===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),z===r.UNSIGNED_INT&&(Z=r.RGB32UI),z===r.BYTE&&(Z=r.RGB8I),z===r.SHORT&&(Z=r.RGB16I),z===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),z===r.UNSIGNED_INT&&(Z=r.RGBA32UI),z===r.BYTE&&(Z=r.RGBA8I),z===r.SHORT&&(Z=r.RGBA16I),z===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),y===r.RGBA){const ve=Q?As:Ke.getTransfer(Y);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ve===it?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(T,y){let z;return T?y===null||y===Hi||y===fr?z=r.DEPTH24_STENCIL8:y===oi?z=r.DEPTH32F_STENCIL8:y===Br&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===fr?z=r.DEPTH_COMPONENT24:y===oi?z=r.DEPTH_COMPONENT32F:y===Br&&(z=r.DEPTH_COMPONENT16),z}function P(T,y){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function b(T){const y=T.target;y.removeEventListener("dispose",b),R(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),x(y)}function R(T){const y=i.get(T);if(y.__webglInit===void 0)return;const z=T.source,Y=p.get(z);if(Y){const Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(T),Object.keys(Y).length===0&&p.delete(z)}i.remove(T)}function w(T){const y=i.get(T);r.deleteTexture(y.__webglTexture);const z=T.source,Y=p.get(z);delete Y[y.__cacheKey],a.memory.textures--}function x(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else r.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)r.deleteFramebuffer(y.__webglFramebuffer[Y]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=T.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const Z=i.get(z[Y]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(T)}let C=0;function F(){C=0}function B(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function G(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function $(T,y){const z=i.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,y);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function X(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function ee(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function W(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}const re={[Tn]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[bn]:r.MIRRORED_REPEAT},de={[jt]:r.NEAREST,[sc]:r.NEAREST_MIPMAP_NEAREST,[Yr]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[Is]:r.LINEAR_MIPMAP_NEAREST,[Fi]:r.LINEAR_MIPMAP_LINEAR},Re={[lc]:r.NEVER,[fc]:r.ALWAYS,[cc]:r.LESS,[$o]:r.LEQUAL,[hc]:r.EQUAL,[pc]:r.GEQUAL,[uc]:r.GREATER,[dc]:r.NOTEQUAL};function Ie(T,y){if(y.type===oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kt||y.magFilter===Is||y.magFilter===Yr||y.magFilter===Fi||y.minFilter===Kt||y.minFilter===Is||y.minFilter===Yr||y.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,re[y.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,re[y.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,re[y.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,de[y.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jt||y.minFilter!==Yr&&y.minFilter!==Fi||y.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",b));const Y=y.source;let Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));const Z=G(y);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[Z].usedTimes++;const ve=Q[T.__cacheKey];ve!==void 0&&(Q[T.__cacheKey].usedTimes--,ve.usedTimes===0&&w(y)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return z}function q(T,y,z){let Y=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=r.TEXTURE_3D);const Q=Qe(T,y),Z=y.source;t.bindTexture(Y,T.__webglTexture,r.TEXTURE0+z);const ve=i.get(Z);if(Z.version!==ve.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);const le=Ke.getPrimaries(Ke.workingColorSpace),fe=y.colorSpace===vi?null:Ke.getPrimaries(y.colorSpace),Oe=y.colorSpace===vi||le===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let se=S(y.image,!1,s.maxTextureSize);se=st(y,se);const me=n.convert(y.format,y.colorSpace),Te=n.convert(y.type);let Pe=v(y.internalFormat,me,Te,y.colorSpace,y.isVideoTexture);Ie(Y,y);let ge;const Fe=y.mipmaps,De=y.isVideoTexture!==!0,et=ve.__version===void 0||Q===!0,D=Z.dataReady,ae=P(y,se);if(y.isDepthTexture)Pe=_(y.format===mr,y.type),et&&(De?t.texStorage2D(r.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Pe,se.width,se.height,0,me,Te,null));else if(y.isDataTexture)if(Fe.length>0){De&&et&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,Fe[0].width,Fe[0].height);for(let k=0,K=Fe.length;k<K;k++)ge=Fe[k],De?D&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ge.width,ge.height,me,Te,ge.data):t.texImage2D(r.TEXTURE_2D,k,Pe,ge.width,ge.height,0,me,Te,ge.data);y.generateMipmaps=!1}else De?(et&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,me,Te,se.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,se.width,se.height,0,me,Te,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Pe,Fe[0].width,Fe[0].height,se.depth);for(let k=0,K=Fe.length;k<K;k++)if(ge=Fe[k],y.format!==Xt)if(me!==null)if(De){if(D)if(y.layerUpdates.size>0){const he=To(ge.width,ge.height,y.format,y.type);for(const te of y.layerUpdates){const Ce=ge.data.subarray(te*he/ge.data.BYTES_PER_ELEMENT,(te+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,te,ge.width,ge.height,1,me,Ce)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ge.width,ge.height,se.depth,me,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,Pe,ge.width,ge.height,se.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ge.width,ge.height,se.depth,me,Te,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,Pe,ge.width,ge.height,se.depth,0,me,Te,ge.data)}else{De&&et&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,Fe[0].width,Fe[0].height);for(let k=0,K=Fe.length;k<K;k++)ge=Fe[k],y.format!==Xt?me!==null?De?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,k,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ge.width,ge.height,me,Te,ge.data):t.texImage2D(r.TEXTURE_2D,k,Pe,ge.width,ge.height,0,me,Te,ge.data)}else if(y.isDataArrayTexture)if(De){if(et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Pe,se.width,se.height,se.depth),D)if(y.layerUpdates.size>0){const k=To(se.width,se.height,y.format,y.type);for(const K of y.layerUpdates){const he=se.data.subarray(K*k/se.data.BYTES_PER_ELEMENT,(K+1)*k/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,me,Te,he)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Te,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,me,Te,se.data);else if(y.isData3DTexture)De?(et&&t.texStorage3D(r.TEXTURE_3D,ae,Pe,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Te,se.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,me,Te,se.data);else if(y.isFramebufferTexture){if(et)if(De)t.texStorage2D(r.TEXTURE_2D,ae,Pe,se.width,se.height);else{let k=se.width,K=se.height;for(let he=0;he<ae;he++)t.texImage2D(r.TEXTURE_2D,he,Pe,k,K,0,me,Te,null),k>>=1,K>>=1}}else if(Fe.length>0){if(De&&et){const k=we(Fe[0]);t.texStorage2D(r.TEXTURE_2D,ae,Pe,k.width,k.height)}for(let k=0,K=Fe.length;k<K;k++)ge=Fe[k],De?D&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,me,Te,ge):t.texImage2D(r.TEXTURE_2D,k,Pe,me,Te,ge);y.generateMipmaps=!1}else if(De){if(et){const k=we(se);t.texStorage2D(r.TEXTURE_2D,ae,Pe,k.width,k.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Te,se)}else t.texImage2D(r.TEXTURE_2D,0,Pe,me,Te,se);f(y)&&u(Y),ve.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ne(T,y,z){if(y.image.length!==6)return;const Y=Qe(T,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+z);const Z=i.get(Q);if(Q.version!==Z.__version||Y===!0){t.activeTexture(r.TEXTURE0+z);const ve=Ke.getPrimaries(Ke.workingColorSpace),le=y.colorSpace===vi?null:Ke.getPrimaries(y.colorSpace),fe=y.colorSpace===vi||ve===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Oe&&!se?me[K]=S(y.image[K],!0,s.maxCubemapSize):me[K]=se?y.image[K].image:y.image[K],me[K]=st(y,me[K]);const Te=me[0],Pe=n.convert(y.format,y.colorSpace),ge=n.convert(y.type),Fe=v(y.internalFormat,Pe,ge,y.colorSpace),De=y.isVideoTexture!==!0,et=Z.__version===void 0||Y===!0,D=Q.dataReady;let ae=P(y,Te);Ie(r.TEXTURE_CUBE_MAP,y);let k;if(Oe){De&&et&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Fe,Te.width,Te.height);for(let K=0;K<6;K++){k=me[K].mipmaps;for(let he=0;he<k.length;he++){const te=k[he];y.format!==Xt?Pe!==null?De?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,te.width,te.height,Pe,te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Fe,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,te.width,te.height,Pe,ge,te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Fe,te.width,te.height,0,Pe,ge,te.data)}}}else{if(k=y.mipmaps,De&&et){k.length>0&&ae++;const K=we(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(se){De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Pe,ge,me[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,me[K].width,me[K].height,0,Pe,ge,me[K].data);for(let he=0;he<k.length;he++){const te=k[he].image[K].image;De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,te.width,te.height,Pe,ge,te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Fe,te.width,te.height,0,Pe,ge,te.data)}}else{De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,ge,me[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Pe,ge,me[K]);for(let he=0;he<k.length;he++){const te=k[he];De?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Pe,ge,te.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Fe,Pe,ge,te.image[K])}}}f(y)&&u(r.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,z,Y,Q,Z){const ve=n.convert(z.format,z.colorSpace),le=n.convert(z.type),fe=v(z.internalFormat,ve,le,z.colorSpace),Oe=i.get(y),se=i.get(z);if(se.__renderTarget=y,!Oe.__hasExternalTextures){const me=Math.max(1,y.width>>Z),Te=Math.max(1,y.height>>Z);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,fe,me,Te,y.depth,0,ve,le,null):t.texImage2D(Q,Z,fe,me,Te,0,ve,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Q,se.__webglTexture,0,Xe(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Q,se.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(T,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,T),y.depthBuffer){const Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=_(y.stencilBuffer,Q),ve=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Xe(y);je(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Z,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,T)}else{const Y=y.textures;for(let Q=0;Q<Y.length;Q++){const Z=Y[Q],ve=n.convert(Z.format,Z.colorSpace),le=n.convert(Z.type),fe=v(Z.internalFormat,ve,le,Z.colorSpace),Oe=Xe(y);z&&je(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,fe,y.width,y.height):je(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,fe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,fe,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(y.depthTexture);z.__renderTarget=y,(!z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const Y=z.__webglTexture,Q=Xe(y);if(y.depthTexture.format===lr)je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(y.depthTexture.format===mr)je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Le(T){const y=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=r.createRenderbuffer(),ce(y.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ce(y.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(T,y,z){const Y=i.get(T);y!==void 0&&xe(Y.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Le(T)}function nt(T){const y=T.texture,z=i.get(T),Y=i.get(y);T.addEventListener("dispose",A);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=y.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let fe=0;fe<y.mipmaps.length;fe++)z.__webglFramebuffer[le][fe]=r.createFramebuffer()}else z.__webglFramebuffer[le]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)z.__webglFramebuffer[le]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ve)for(let le=0,fe=Q.length;le<fe;le++){const Oe=i.get(Q[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&je(T)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const fe=Q[le];z.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const Oe=n.convert(fe.format,fe.colorSpace),se=n.convert(fe.type),me=v(fe.internalFormat,Oe,se,fe.colorSpace,T.isXRRenderTarget===!0),Te=Xe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,me,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,z.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)xe(z.__webglFramebuffer[le][fe],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else xe(z.__webglFramebuffer[le],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);f(y)&&u(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,fe=Q.length;le<fe;le++){const Oe=Q[le],se=i.get(Oe);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Ie(r.TEXTURE_2D,Oe),xe(z.__webglFramebuffer,T,Oe,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),f(Oe)&&u(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Ie(le,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)xe(z.__webglFramebuffer[fe],T,y,r.COLOR_ATTACHMENT0,le,fe);else xe(z.__webglFramebuffer,T,y,r.COLOR_ATTACHMENT0,le,0);f(y)&&u(le),t.unbindTexture()}T.depthBuffer&&Le(T)}function We(T){const y=T.textures;for(let z=0,Y=y.length;z<Y;z++){const Q=y[z];if(f(Q)){const Z=M(T),ve=i.get(Q).__webglTexture;t.bindTexture(Z,ve),u(Z),t.unbindTexture()}}}const ut=[],O=[];function xt(T){if(T.samples>0){if(je(T)===!1){const y=T.textures,z=T.width,Y=T.height;let Q=r.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=i.get(T),le=y.length>1;if(le)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Oe=i.get(y[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Oe,0)}r.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,r.NEAREST),l===!0&&(ut.length=0,O.length=0,ut.push(r.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(Z),O.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Oe=i.get(y[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Xe(T){return Math.min(s.maxSamples,T.samples)}function je(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function st(T,y){const z=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==_r&&z!==vi&&(Ke.getTransfer(z)===it?(Y!==Xt||Q!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je}function xf(r,e){function t(i,s=vi){let n;const a=Ke.getTransfer(s);if(i===hi)return r.UNSIGNED_BYTE;if(i===oa)return r.UNSIGNED_SHORT_4_4_4_4;if(i===la)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Wo)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ko)return r.BYTE;if(i===Go)return r.SHORT;if(i===Br)return r.UNSIGNED_SHORT;if(i===aa)return r.INT;if(i===Hi)return r.UNSIGNED_INT;if(i===oi)return r.FLOAT;if(i===Gr)return r.HALF_FLOAT;if(i===Xo)return r.ALPHA;if(i===jo)return r.RGB;if(i===Xt)return r.RGBA;if(i===qo)return r.LUMINANCE;if(i===Yo)return r.LUMINANCE_ALPHA;if(i===lr)return r.DEPTH_COMPONENT;if(i===mr)return r.DEPTH_STENCIL;if(i===Zo)return r.RED;if(i===ca)return r.RED_INTEGER;if(i===Jo)return r.RG;if(i===ha)return r.RG_INTEGER;if(i===ua)return r.RGBA_INTEGER;if(i===vs||i===xs||i===Ms||i===Ss)if(a===it)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===vs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ms)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===vs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xs)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ms)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===An||i===Rn||i===Cn||i===Pn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===An)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ln||i===In||i===Dn)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Ln||i===In)return a===it?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Dn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Un||i===Nn||i===On||i===Fn||i===zn||i===Bn||i===Hn||i===Vn||i===kn||i===Gn||i===Wn||i===Xn||i===jn||i===qn)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Un)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===On)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qn)return a===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ys||i===Yn||i===Zn)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===ys)return a===it?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ko||i===Jn||i===Kn||i===$n)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===ys)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Jn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$n)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Mf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qe extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class ln{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,i),u=this._getHandJoint(c,S);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wf=`
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

}`;class Ef{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Pt,n=e.properties.get(s);n.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:yf,fragmentShader:wf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new Ye(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tf extends vr{constructor(e,t){super();const i=this;let s=null,n=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,g=null;const S=new Ef,f=t.getContextAttributes();let u=null,M=null;const v=[],_=[],P=new _e;let b=null;const A=new Ut;A.viewport=new rt;const R=new Ut;R.viewport=new rt;const w=[A,R],x=new Mf;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=v[q];return ne===void 0&&(ne=new ln,v[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=v[q];return ne===void 0&&(ne=new ln,v[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=v[q];return ne===void 0&&(ne=new ln,v[q]=ne),ne.getHandSpace()};function B(q){const ne=_.indexOf(q.inputSource);if(ne===-1)return;const xe=v[ne];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){const ne=_[q];ne!==null&&(_[q]=null,v[q].disconnect(ne))}C=null,F=null,S.reset(),e.setRenderTarget(u),m=null,p=null,d=null,s=null,M=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){n=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),f.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Vi(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ne=null,xe=null,ce=null;f.depth&&(ce=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=f.stencil?mr:lr,xe=f.stencil?fr:Hi);const be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:n};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(be),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new Vi(p.textureWidth,p.textureHeight,{format:Xt,type:hi,depthTexture:new ul(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(q){for(let ne=0;ne<q.removed.length;ne++){const xe=q.removed[ne],ce=_.indexOf(xe);ce>=0&&(_[ce]=null,v[ce].disconnect(xe))}for(let ne=0;ne<q.added.length;ne++){const xe=q.added[ne];let ce=_.indexOf(xe);if(ce===-1){for(let Le=0;Le<v.length;Le++)if(Le>=_.length){_.push(xe),ce=Le;break}else if(_[Le]===null){_[Le]=xe,ce=Le;break}if(ce===-1)break}const be=v[ce];be&&be.connect(xe)}}const X=new I,ee=new I;function W(q,ne,xe){X.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const ce=X.distanceTo(ee),be=ne.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Ve=be[14]/(be[10]-1),nt=be[14]/(be[10]+1),We=(be[9]+1)/be[5],ut=(be[9]-1)/be[5],O=(be[8]-1)/be[0],xt=(Le[8]+1)/Le[0],Xe=Ve*O,je=Ve*xt,Ee=ce/(-O+xt),st=Ee*-O;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Ve+Ee,T=nt+Ee,y=Xe-st,z=je+(ce-st),Y=We*nt/T*we,Q=ut*nt/T*we;q.projectionMatrix.makePerspective(y,z,Y,Q,we,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,xe=q.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),x.near=R.near=A.near=ne,x.far=R.far=A.far=xe,(C!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,F=x.far),A.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=A.layers.mask|R.layers.mask;const ce=q.parent,be=x.cameras;re(x,ce);for(let Le=0;Le<be.length;Le++)re(be[Le],ce);be.length===2?W(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),de(q,x,ce)};function de(q,ne,xe){xe===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qn*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let Re=null;function Ie(q,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ce=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Le=0;Le<xe.length;Le++){const Ve=xe[Le];let nt=null;if(m!==null)nt=m.getViewport(Ve);else{const ut=d.getViewSubImage(p,Ve);nt=ut.viewport,Le===0&&(e.setRenderTargetTextures(M,ut.colorTexture,p.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(M))}let We=w[Le];We===void 0&&(We=new Ut,We.layers.enable(Le),We.viewport=new rt,w[Le]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(We)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=d.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&S.init(e,Le,s.renderState)}}for(let xe=0;xe<v.length;xe++){const ce=_[xe],be=v[xe];ce!==null&&be!==void 0&&be.update(ce,ne,c||a)}Re&&Re(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Qe=new cl;Qe.setAnimationLoop(Ie),this.setAnimationLoop=function(q){Re=q},this.dispose=function(){}}}const Li=new qt,bf=new ot;function Af(r,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,al(r)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,M,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(f,u):u.isMeshToonMaterial?(n(f,u),d(f,u)):u.isMeshPhongMaterial?(n(f,u),h(f,u)):u.isMeshStandardMaterial?(n(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,_)):u.isMeshMatcapMaterial?(n(f,u),g(f,u)):u.isMeshDepthMaterial?n(f,u):u.isMeshDistanceMaterial?(n(f,u),S(f,u)):u.isMeshNormalMaterial?n(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,M,v):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ct&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ct&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const M=e.get(u),v=M.envMap,_=M.envMapRotation;v&&(f.envMap.value=v,Li.copy(_),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),f.envMapRotation.value.setFromMatrix4(bf.makeRotationFromEuler(Li)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,M,v){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*M,f.scale.value=v*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,M){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function S(f,u){const M=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rf(r,e,t,i){let s={},n={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const _=v.program;i.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",f));const P=v.program;i.updateUBOMapping(M,P);const b=e.render.frame;n[M.id]!==b&&(p(M),n[M.id]=b)}function h(M){const v=d();M.__bindingPointIndex=v;const _=r.createBuffer(),P=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,P,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const v=s[M.id],_=M.uniforms,P=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,A=_.length;b<A;b++){const R=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,x=R.length;w<x;w++){const C=R[w];if(m(C,b,w,P)===!0){const F=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let $=0;$<B.length;$++){const X=B[$],ee=S(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,F+G,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,v,_,P){const b=M.value,A=v+"_"+_;if(P[A]===void 0)return typeof b=="number"||typeof b=="boolean"?P[A]=b:P[A]=b.clone(),!0;{const R=P[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(M){const v=M.uniforms;let _=0;const P=16;for(let A=0,R=v.length;A<R;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,C=w.length;x<C;x++){const F=w[x],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,$=B.length;G<$;G++){const X=B[G],ee=S(X),W=_%P,re=W%ee.boundary,de=W+re;_+=re,de!==0&&P-de<ee.storage&&(_+=P-de),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=ee.storage}}}const b=_%P;return b>0&&(_+=P-b),M.__size=_,M.__cache={},this}function S(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(s[v.id]),delete s[v.id],delete n[v.id]}function u(){for(const M in s)r.deleteBuffer(s[M]);a=[],s={},n={}}return{bind:l,update:c,dispose:u}}class Cf{constructor(e={}){const{canvas:t=gc(),context:i=null,depth:s=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),S=new Int32Array(4);let f=null,u=null;const M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Mi,this.toneMappingExposure=1;const _=this;let P=!1,b=0,A=0,R=null,w=-1,x=null;const C=new rt,F=new rt;let B=null;const G=new Ge(0);let $=0,X=t.width,ee=t.height,W=1,re=null,de=null;const Re=new rt(0,0,X,ee),Ie=new rt(0,0,X,ee);let Qe=!1;const q=new ma;let ne=!1,xe=!1;const ce=new ot,be=new ot,Le=new I,Ve=new rt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ut(){return R===null?W:1}let O=i;function xt(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const N="webgl2";if(O=xt(N,E),O===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xe,je,Ee,st,we,T,y,z,Y,Q,Z,ve,le,fe,Oe,se,me,Te,Pe,ge,Fe,De,et,D;function ae(){Xe=new Dd(O),Xe.init(),De=new xf(O,Xe),je=new Ad(O,Xe,e,De),Ee=new gf(O,Xe),je.reverseDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),st=new Od(O),we=new ef,T=new vf(O,Xe,Ee,we,je,De,st),y=new Cd(_),z=new Id(_),Y=new Gc(O),et=new Td(O,Y),Q=new Ud(O,Y,st,et),Z=new zd(O,Q,Y,st),Pe=new Fd(O,je,T),se=new Rd(we),ve=new Qp(_,y,z,Xe,je,et,se),le=new Af(_,we),fe=new rf,Oe=new cf(Xe),Te=new Ed(_,y,z,Ee,Z,m,l),me=new ff(_,Z,je),D=new Rf(O,st,je,Ee),ge=new bd(O,Xe,st),Fe=new Nd(O,Xe,st),st.programs=ve.programs,_.capabilities=je,_.extensions=Xe,_.properties=we,_.renderLists=fe,_.shadowMap=me,_.state=Ee,_.info=st}ae();const k=new Tf(_,O);this.xr=k,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(X,ee,!1))},this.getSize=function(E){return E.set(X,ee)},this.setSize=function(E,N,H=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,ee=N,t.width=Math.floor(E*W),t.height=Math.floor(N*W),H===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*W,ee*W).floor()},this.setDrawingBufferSize=function(E,N,H){X=E,ee=N,W=H,t.width=Math.floor(E*H),t.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,N,H,V){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,N,H,V),Ee.viewport(C.copy(Re).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,N,H,V){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,N,H,V),Ee.scissor(F.copy(Ie).multiplyScalar(W).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){Ee.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(E=!0,N=!0,H=!0){let V=0;if(E){let U=!1;if(R!==null){const ie=R.texture.format;U=ie===ua||ie===ha||ie===ca}if(U){const ie=R.texture.type,pe=ie===hi||ie===Hi||ie===Br||ie===fr||ie===oa||ie===la,Me=Te.getClearColor(),Se=Te.getClearAlpha(),Ue=Me.r,Ne=Me.g,Ae=Me.b;pe?(g[0]=Ue,g[1]=Ne,g[2]=Ae,g[3]=Se,O.clearBufferuiv(O.COLOR,0,g)):(S[0]=Ue,S[1]=Ne,S[2]=Ae,S[3]=Se,O.clearBufferiv(O.COLOR,0,S))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",te,!1),fe.dispose(),Oe.dispose(),we.dispose(),y.dispose(),z.dispose(),Z.dispose(),et.dispose(),D.dispose(),ve.dispose(),k.dispose(),k.removeEventListener("sessionstart",yr),k.removeEventListener("sessionend",wr),ei.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=st.autoReset,N=me.enabled,H=me.autoUpdate,V=me.needsUpdate,U=me.type;ae(),st.autoReset=E,me.enabled=N,me.autoUpdate=H,me.needsUpdate=V,me.type=U}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const N=E.target;N.removeEventListener("dispose",Ce),ke(N)}function ke(E){tt(E),we.remove(E)}function tt(E){const N=we.get(E).programs;N!==void 0&&(N.forEach(function(H){ve.releaseProgram(H)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,V,U,ie){N===null&&(N=nt);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=Tl(E,N,H,V,U);Ee.setMaterial(V,pe);let Se=H.index,Ue=1;if(V.wireframe===!0){if(Se=Q.getWireframeAttribute(H),Se===void 0)return;Ue=2}const Ne=H.drawRange,Ae=H.attributes.position;let $e=Ne.start*Ue,lt=(Ne.start+Ne.count)*Ue;ie!==null&&($e=Math.max($e,ie.start*Ue),lt=Math.min(lt,(ie.start+ie.count)*Ue)),Se!==null?($e=Math.max($e,0),lt=Math.min(lt,Se.count)):Ae!=null&&($e=Math.max($e,0),lt=Math.min(lt,Ae.count));const ct=lt-$e;if(ct<0||ct===1/0)return;et.setup(U,V,Me,H,Se);let ft,ht=ge;if(Se!==null&&(ft=Y.get(Se),ht=Fe,ht.setIndex(ft)),U.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*ut()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(U.isLine){let ye=V.linewidth;ye===void 0&&(ye=1),Ee.setLineWidth(ye*ut()),U.isLineSegments?ht.setMode(O.LINES):U.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else U.isPoints?ht.setMode(O.POINTS):U.isSprite&&ht.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ht.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ht.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,Ei=U._multiDrawCounts,Ti=U._multiDrawCount,Ht=Se?Y.get(Se).bytesPerElement:1,Wi=we.get(V).currentProgram.getUniforms();for(let Lt=0;Lt<Ti;Lt++)Wi.setValue(O,"_gl_DrawID",Lt),ht.render(ye[Lt]/Ht,Ei[Lt])}else if(U.isInstancedMesh)ht.renderInstances($e,ct,U.count);else if(H.isInstancedBufferGeometry){const ye=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ei=Math.min(H.instanceCount,ye);ht.renderInstances($e,ct,Ei)}else ht.render($e,ct)};function Ze(E,N,H){E.transparent===!0&&E.side===Jt&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,qr(E,N,H),E.side=Si,E.needsUpdate=!0,qr(E,N,H),E.side=Jt):qr(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),u=Oe.get(H),u.init(N),v.push(u),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),E!==H&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const V=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const Me=ie[pe];Ze(Me,H,U),V.add(Me)}else Ze(ie,H,U),V.add(ie)}),v.pop(),u=null,V},this.compileAsync=function(E,N,H=null){const V=this.compile(E,N,H);return new Promise(U=>{function ie(){if(V.forEach(function(pe){we.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){U(E);return}setTimeout(ie,10)}Xe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Mt=null;function Bt(E){Mt&&Mt(E)}function yr(){ei.stop()}function wr(){ei.start()}const ei=new cl;ei.setAnimationLoop(Bt),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(E){Mt=E,k.setAnimationLoop(E),E===null?ei.stop():ei.start()},k.addEventListener("sessionstart",yr),k.addEventListener("sessionend",wr),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(N),N=k.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,R),u=Oe.get(E,v.length),u.init(N),v.push(u),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(be),xe=this.localClippingEnabled,ne=se.init(this.clippingPlanes,xe),f=fe.get(E,M.length),f.init(),M.push(f),k.enabled===!0&&k.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&wi(ie,N,-1/0,_.sortObjects)}wi(E,N,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(re,de),We=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,We&&Te.addToRenderList(f,E),this.info.render.frame++,ne===!0&&se.beginShadows();const H=u.state.shadowsArray;me.render(H,E,N),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=f.opaque,U=f.transmissive;if(u.setupLights(),N.isArrayCamera){const ie=N.cameras;if(U.length>0)for(let pe=0,Me=ie.length;pe<Me;pe++){const Se=ie[pe];ya(V,U,E,Se)}We&&Te.render(E);for(let pe=0,Me=ie.length;pe<Me;pe++){const Se=ie[pe];Gi(f,E,Se,Se.viewport)}}else U.length>0&&ya(V,U,E,N),We&&Te.render(E),Gi(f,E,N);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(_,E,N),et.resetDefaultState(),w=-1,x=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&se.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function wi(E,N,H,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){V&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const ie=Z.update(E),pe=E.material;pe.visible&&f.push(E,ie,pe,H,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ie=Z.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ve.copy(ie.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){const Me=ie.groups;for(let Se=0,Ue=Me.length;Se<Ue;Se++){const Ne=Me[Se],Ae=pe[Ne.materialIndex];Ae&&Ae.visible&&f.push(E,ie,Ae,H,Ve.z,Ne)}}else pe.visible&&f.push(E,ie,pe,H,Ve.z,null)}}const U=E.children;for(let ie=0,pe=U.length;ie<pe;ie++)wi(U[ie],N,H,V)}function Gi(E,N,H,V){const U=E.opaque,ie=E.transmissive,pe=E.transparent;u.setupLightsView(H),ne===!0&&se.setGlobalState(_.clippingPlanes,H),V&&Ee.viewport(C.copy(V)),U.length>0&&jr(U,N,H),ie.length>0&&jr(ie,N,H),pe.length>0&&jr(pe,N,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ya(E,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Vi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Gr:hi,minFilter:Fi,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const U=u.state.transmissionRenderTarget[V.id],ie=V.viewport||C;U.setSize(ie.z,ie.w);const pe=_.getRenderTarget();_.setRenderTarget(U),_.getClearColor(G),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),We&&Te.render(H);const Me=_.toneMapping;_.toneMapping=Mi;const Se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),ne===!0&&se.setGlobalState(_.clippingPlanes,V),jr(E,H,V),T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ne=0,Ae=N.length;Ne<Ae;Ne++){const $e=N[Ne],lt=$e.object,ct=$e.geometry,ft=$e.material,ht=$e.group;if(ft.side===Jt&&lt.layers.test(V.layers)){const ye=ft.side;ft.side=Ct,ft.needsUpdate=!0,wa(lt,H,V,ct,ft,ht),ft.side=ye,ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U))}_.setRenderTarget(pe),_.setClearColor(G,$),Se!==void 0&&(V.viewport=Se),_.toneMapping=Me}function jr(E,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){const pe=E[U],Me=pe.object,Se=pe.geometry,Ue=V===null?pe.material:V,Ne=pe.group;Me.layers.test(H.layers)&&wa(Me,N,H,Se,Ue,Ne)}}function wa(E,N,H,V,U,ie){E.onBeforeRender(_,N,H,V,U,ie),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,N,H,V,E,ie),U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,_.renderBufferDirect(H,N,V,U,E,ie),U.side=Si,U.needsUpdate=!0,_.renderBufferDirect(H,N,V,U,E,ie),U.side=Jt):_.renderBufferDirect(H,N,V,U,E,ie),E.onAfterRender(_,N,H,V,U,ie)}function qr(E,N,H){N.isScene!==!0&&(N=nt);const V=we.get(E),U=u.state.lights,ie=u.state.shadowsArray,pe=U.state.version,Me=ve.getParameters(E,U.state,ie,N,H),Se=ve.getProgramCacheKey(Me);let Ue=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Ce),Ue=new Map,V.programs=Ue);let Ne=Ue.get(Se);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===pe)return Ta(E,Me),Ne}else Me.uniforms=ve.getUniforms(E),E.onBeforeCompile(Me,_),Ne=ve.acquireProgram(Me,Se),Ue.set(Se,Ne),V.uniforms=Me.uniforms;const Ae=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Ta(E,Me),V.needsLights=Al(E),V.lightsStateVersion=pe,V.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Ea(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ws.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ta(E,N){const H=we.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Tl(E,N,H,V,U){N.isScene!==!0&&(N=nt),T.resetTextureUnits();const ie=N.fog,pe=V.isMeshStandardMaterial?N.environment:null,Me=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_r,Se=(V.isMeshStandardMaterial?z:y).get(V.envMap||pe),Ue=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let ct=Mi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ct=_.toneMapping);const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=ft!==void 0?ft.length:0,ye=we.get(V),Ei=u.state.lights;if(ne===!0&&(xe===!0||E!==x)){const bt=E===x&&V.id===w;se.setState(V,E,bt)}let Ti=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ei.state.version||ye.outputColorSpace!==Me||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==Se||V.fog===!0&&ye.fog!==ie||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==se.numPlanes||ye.numIntersection!==se.numIntersection)||ye.vertexAlphas!==Ue||ye.vertexTangents!==Ne||ye.morphTargets!==Ae||ye.morphNormals!==$e||ye.morphColors!==lt||ye.toneMapping!==ct||ye.morphTargetsCount!==ht)&&(Ti=!0):(Ti=!0,ye.__version=V.version);let Ht=ye.currentProgram;Ti===!0&&(Ht=qr(V,N,U));let Wi=!1,Lt=!1,Er=!1;const at=Ht.getUniforms(),Yt=ye.uniforms;if(Ee.useProgram(Ht.program)&&(Wi=!0,Lt=!0,Er=!0),V.id!==w&&(w=V.id,Lt=!0),Wi||x!==E){Ee.buffers.depth.getReversed()?(ce.copy(E.projectionMatrix),vc(ce),xc(ce),at.setValue(O,"projectionMatrix",ce)):at.setValue(O,"projectionMatrix",E.projectionMatrix),at.setValue(O,"viewMatrix",E.matrixWorldInverse);const bt=at.map.cameraPosition;bt!==void 0&&bt.setValue(O,Le.setFromMatrixPosition(E.matrixWorld)),je.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Lt=!0,Er=!0)}if(U.isSkinnedMesh){at.setOptional(O,U,"bindMatrix"),at.setOptional(O,U,"bindMatrixInverse");const bt=U.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),at.setValue(O,"boneTexture",bt.boneTexture,T))}U.isBatchedMesh&&(at.setOptional(O,U,"batchingTexture"),at.setValue(O,"batchingTexture",U._matricesTexture,T),at.setOptional(O,U,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",U._indirectTexture,T),at.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",U._colorsTexture,T));const Tr=H.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Pe.update(U,H,Ht),(Lt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,at.setValue(O,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yt.envMap.value=Se,Yt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Yt.envMapIntensity.value=N.environmentIntensity),Lt&&(at.setValue(O,"toneMappingExposure",_.toneMappingExposure),ye.needsLights&&bl(Yt,Er),ie&&V.fog===!0&&le.refreshFogUniforms(Yt,ie),le.refreshMaterialUniforms(Yt,V,W,ee,u.state.transmissionRenderTarget[E.id]),ws.upload(O,Ea(ye),Yt,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ws.upload(O,Ea(ye),Yt,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(O,"center",U.center),at.setValue(O,"modelViewMatrix",U.modelViewMatrix),at.setValue(O,"normalMatrix",U.normalMatrix),at.setValue(O,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bt=V.uniformsGroups;for(let br=0,ui=bt.length;br<ui;br++){const ba=bt[br];D.update(ba,Ht),D.bind(ba,Ht)}}return Ht}function bl(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Al(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,H){we.get(E.texture).__webglTexture=N,we.get(E.depthTexture).__webglTexture=H;const V=we.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=we.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){R=E,b=N,A=H;let V=!0,U=null,ie=!1,pe=!1;if(E){const Me=we.get(E);if(Me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(Me.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Me.__hasExternalTextures)T.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(Me.__boundDepthTexture!==Ne){if(Ne!==null&&we.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const Ue=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][H]:U=Ue[N],ie=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[H]:U=Ue,C.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else C.copy(Re).multiplyScalar(W).floor(),F.copy(Ie).multiplyScalar(W).floor(),B=Qe;if(Ee.bindFramebuffer(O.FRAMEBUFFER,U)&&V&&Ee.drawBuffers(E,U),Ee.viewport(C),Ee.scissor(F),Ee.setScissorTest(B),ie){const Me=we.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,H)}else if(pe){const Me=we.get(E.texture),Se=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Se)}w=-1},this.readRenderTargetPixels=function(E,N,H,V,U,ie,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Ee.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Se=E.texture,Ue=Se.format,Ne=Se.type;if(!je.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&H>=0&&H<=E.height-U&&O.readPixels(N,H,V,U,De.convert(Ue),De.convert(Ne),ie)}finally{const Se=R!==null?we.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,V,U,ie,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const Se=E.texture,Ue=Se.format,Ne=Se.type;if(!je.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&H>=0&&H<=E.height-U){Ee.bindFramebuffer(O.FRAMEBUFFER,Me);const Ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),O.readPixels(N,H,V,U,De.convert(Ue),De.convert(Ne),0);const $e=R!==null?we.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,$e);const lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _c(O,lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(Ae),O.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(E.image.width*V),ie=Math.floor(E.image.height*V),pe=N!==null?N.x:0,Me=N!==null?N.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,pe,Me,U,ie),Ee.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,V=null,U=0){E.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let ie,pe,Me,Se,Ue,Ne,Ae,$e,lt;const ct=E.isCompressedTexture?E.mipmaps[U]:E.image;H!==null?(ie=H.max.x-H.min.x,pe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Ue=H.min.y,Ne=H.isBox3?H.min.z:0):(ie=ct.width,pe=ct.height,Me=ct.depth||1,Se=0,Ue=0,Ne=0),V!==null?(Ae=V.x,$e=V.y,lt=V.z):(Ae=0,$e=0,lt=0);const ft=De.convert(N.format),ht=De.convert(N.type);let ye;N.isData3DTexture?(T.setTexture3D(N,0),ye=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),ye=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Ei=O.getParameter(O.UNPACK_ROW_LENGTH),Ti=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ht=O.getParameter(O.UNPACK_SKIP_PIXELS),Wi=O.getParameter(O.UNPACK_SKIP_ROWS),Lt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ne);const Er=E.isDataArrayTexture||E.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Yt=we.get(E),Tr=we.get(N),bt=we.get(Yt.__renderTarget),br=we.get(Tr.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,bt.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let ui=0;ui<Me;ui++)Er&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(E).__webglTexture,U,Ne+ui),E.isDepthTexture?(at&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(N).__webglTexture,U,lt+ui),O.blitFramebuffer(Se,Ue,ie,pe,Ae,$e,ie,pe,O.DEPTH_BUFFER_BIT,O.NEAREST)):at?O.copyTexSubImage3D(ye,U,Ae,$e,lt+ui,Se,Ue,ie,pe):O.copyTexSubImage2D(ye,U,Ae,$e,lt+ui,Se,Ue,ie,pe);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(ye,U,Ae,$e,lt,ie,pe,Me,ft,ht,ct.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ye,U,Ae,$e,lt,ie,pe,Me,ft,ct.data):O.texSubImage3D(ye,U,Ae,$e,lt,ie,pe,Me,ft,ht,ct):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Ae,$e,ie,pe,ft,ht,ct.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Ae,$e,ct.width,ct.height,ft,ct.data):O.texSubImage2D(O.TEXTURE_2D,U,Ae,$e,ie,pe,ft,ht,ct);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ei),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ti),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,Wi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt),U===0&&N.generateMipmaps&&O.generateMipmap(ye),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,V=null,U=0){return E.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,H,V,U)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,Ee.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Nr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Nr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(s),t.push(n),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const n=i.length;let a;t?a=t:a=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(n-1);const h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(n-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const n=this.getPoint(i),a=this.getPoint(s),o=t||(n.isVector2?new _e:new I);return o.copy(a).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],n=[],a=[],o=new I,l=new ot;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new I)}n[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),n[0].crossVectors(s[0],o),a[0].crossVectors(s[0],n[0]);for(let m=1;m<=e;m++){if(n[m]=n[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(s[m-1].dot(s[m]),-1,1));n[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],n[m])}if(t===!0){let m=Math.acos(St(n[0].dot(n[e]),-1,1));m/=e,s[0].dot(o.crossVectors(n[0],n[e]))>0&&(m=-m);for(let g=1;g<=e;g++)n[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],n[g])}return{tangents:s,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _a extends Qt{constructor(e=0,t=0,i=1,s=1,n=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){const i=t,s=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(a?n=0:n=s),this.aClockwise===!0&&!a&&(n===s?n=-s:n=n-s);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lf extends _a{constructor(e,t,i,s,n,a){super(e,t,i,i,s,n,a),this.isArcCurve=!0,this.type="ArcCurve"}}function va(){let r=0,e=0,t=0,i=0;function s(n,a,o,l){r=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,c){s(a,o,c*(o-n),c*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,c,h,d){let p=(a-n)/c-(o-n)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;p*=h,m*=h,s(a,o,p,m)},calc:function(n){const a=n*n,o=a*n;return r+e*n+t*a+i*o}}}const ms=new I,cn=new va,hn=new va,un=new va;class If extends Qt{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,n=s.length,a=(n-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%n]:(ms.subVectors(s[0],s[1]).add(s[0]),c=ms);const d=s[o%n],p=s[(o+1)%n];if(this.closed||o+2<n?h=s[(o+2)%n]:(ms.subVectors(s[n-1],s[n-2]).add(s[n-1]),h=ms),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);S<1e-4&&(S=1),g<1e-4&&(g=S),f<1e-4&&(f=S),cn.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,S,f),hn.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,S,f),un.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,S,f)}else this.curveType==="catmullrom"&&(cn.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),hn.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),un.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return i.set(cn.calc(l),hn.calc(l),un.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bo(r,e,t,i,s){const n=(i-e)*.5,a=(s-t)*.5,o=r*r,l=r*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*r+t}function Df(r,e){const t=1-r;return t*t*e}function Uf(r,e){return 2*(1-r)*r*e}function Nf(r,e){return r*r*e}function Or(r,e,t,i){return Df(r,e)+Uf(r,t)+Nf(r,i)}function Of(r,e){const t=1-r;return t*t*t*e}function Ff(r,e){const t=1-r;return 3*t*t*r*e}function zf(r,e){return 3*(1-r)*r*r*e}function Bf(r,e){return r*r*r*e}function Fr(r,e,t,i,s){return Of(r,e)+Ff(r,t)+zf(r,i)+Bf(r,s)}class gl extends Qt{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(Fr(e,s.x,n.x,a.x,o.x),Fr(e,s.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hf extends Qt{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(Fr(e,s.x,n.x,a.x,o.x),Fr(e,s.y,n.y,a.y,o.y),Fr(e,s.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _l extends Qt{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Qt{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vl extends Qt{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Or(e,s.x,n.x,a.x),Or(e,s.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends Qt{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Or(e,s.x,n.x,a.x),Or(e,s.y,n.y,a.y),Or(e,s.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xl extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,s=this.points,n=(s.length-1)*e,a=Math.floor(n),o=n-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(bo(o,l.x,c.x,h.x,d.x),bo(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new _e().fromArray(s))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:If,CubicBezierCurve:gl,CubicBezierCurve3:Hf,EllipseCurve:_a,LineCurve:_l,LineCurve3:Vf,QuadraticBezierCurve:vl,QuadraticBezierCurve3:kf,SplineCurve:xl});class Gf extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=i){const a=s[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,n=this.curves;s<n.length;s++){const a=n[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}}class Ro extends Gf{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _l(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const n=new vl(this.currentPoint.clone(),new _e(e,t),new _e(i,s));return this.curves.push(n),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,n,a){const o=new gl(this.currentPoint.clone(),new _e(e,t),new _e(i,s),new _e(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,n,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,n,a),this}absarc(e,t,i,s,n,a){return this.absellipse(e,t,i,i,s,n,a),this}ellipse(e,t,i,s,n,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,n,a,o,l),this}absellipse(e,t,i,s,n,a,o,l){const c=new _a(e,t,i,s,n,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zi extends zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const n=[],a=[],o=[],l=[],c=new I,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Je extends zt{constructor(e=1,t=1,i=1,s=32,n=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),n=Math.floor(n);const h=[],d=[],p=[],m=[];let g=0;const S=[],f=i/2;let u=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(m,2));function M(){const _=new I,P=new I;let b=0;const A=(t-e)/i;for(let R=0;R<=n;R++){const w=[],x=R/n,C=x*(t-e)+e;for(let F=0;F<=s;F++){const B=F/s,G=B*l+o,$=Math.sin(G),X=Math.cos(G);P.x=C*$,P.y=-x*i+f,P.z=C*X,d.push(P.x,P.y,P.z),_.set($,A,X).normalize(),p.push(_.x,_.y,_.z),m.push(B,1-x),w.push(g++)}S.push(w)}for(let R=0;R<s;R++)for(let w=0;w<n;w++){const x=S[w][R],C=S[w+1][R],F=S[w+1][R+1],B=S[w][R+1];(e>0||w!==0)&&(h.push(x,C,B),b+=3),(t>0||w!==n-1)&&(h.push(C,F,B),b+=3)}c.addGroup(u,b,0),u+=b}function v(_){const P=g,b=new _e,A=new I;let R=0;const w=_===!0?e:t,x=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,f*x,0),p.push(0,x,0),m.push(.5,.5),g++;const C=g;for(let F=0;F<=s;F++){const B=F/s*l+o,G=Math.cos(B),$=Math.sin(B);A.x=w*$,A.y=f*x,A.z=w*G,d.push(A.x,A.y,A.z),p.push(0,x,0),b.x=G*.5+.5,b.y=$*.5*x+.5,m.push(b.x,b.y),g++}for(let F=0;F<s;F++){const B=P+F,G=C+F;_===!0?h.push(G,G+1,B):h.push(G+1,G,B),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi extends Je{constructor(e=1,t=1,i=32,s=1,n=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,n,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const n=[],a=[];o(s),c(i),h(),this.setAttribute("position",new pt(n,3)),this.setAttribute("normal",new pt(n.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new I,_=new I,P=new I;for(let b=0;b<t.length;b+=3)m(t[b+0],v),m(t[b+1],_),m(t[b+2],P),l(v,_,P,M)}function l(M,v,_,P){const b=P+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const w=M.clone().lerp(_,R/b),x=v.clone().lerp(_,R/b),C=b-R;for(let F=0;F<=C;F++)F===0&&R===b?A[R][F]=w:A[R][F]=w.clone().lerp(x,F/C)}for(let R=0;R<b;R++)for(let w=0;w<2*(b-R)-1;w++){const x=Math.floor(w/2);w%2===0?(p(A[R][x+1]),p(A[R+1][x]),p(A[R][x])):(p(A[R][x+1]),p(A[R+1][x+1]),p(A[R+1][x]))}}function c(M){const v=new I;for(let _=0;_<n.length;_+=3)v.x=n[_+0],v.y=n[_+1],v.z=n[_+2],v.normalize().multiplyScalar(M),n[_+0]=v.x,n[_+1]=v.y,n[_+2]=v.z}function h(){const M=new I;for(let v=0;v<n.length;v+=3){M.x=n[v+0],M.y=n[v+1],M.z=n[v+2];const _=f(M)/2/Math.PI+.5,P=u(M)/Math.PI+.5;a.push(_,1-P)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const v=a[M+0],_=a[M+2],P=a[M+4],b=Math.max(v,_,P),A=Math.min(v,_,P);b>.9&&A<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function p(M){n.push(M.x,M.y,M.z)}function m(M,v){const _=M*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){const M=new I,v=new I,_=new I,P=new I,b=new _e,A=new _e,R=new _e;for(let w=0,x=0;w<n.length;w+=9,x+=6){M.set(n[w+0],n[w+1],n[w+2]),v.set(n[w+3],n[w+4],n[w+5]),_.set(n[w+6],n[w+7],n[w+8]),b.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(M).add(v).add(_).divideScalar(3);const C=f(P);S(b,x+0,M,C),S(A,x+2,v,C),S(R,x+4,_,C)}}function S(M,v,_,P){P<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=P/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.vertices,e.indices,e.radius,e.details)}}class Ma extends xa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ma(e.radius,e.detail)}}class Sa extends Ro{constructor(e){super(e),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ro().fromJSON(s))}return this}}const Wf={triangulate:function(r,e,t=2){const i=e&&e.length,s=i?e[0]*t:r.length;let n=Ml(r,0,s,t,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,c,h,d,p,m;if(i&&(n=Zf(r,e,n,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<s;g+=t)d=r[g],p=r[g+1],d<o&&(o=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Hr(n,a,t,o,l,m,0),a}};function Ml(r,e,t,i,s){let n,a;if(s===am(r,e,t,i)>0)for(n=e;n<t;n+=i)a=Co(n,r[n],r[n+1],a);else for(n=t-i;n>=e;n-=i)a=Co(n,r[n],r[n+1],a);return a&&Cs(a,a.next)&&(kr(a),a=a.next),a}function ki(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(Cs(t,t.next)||dt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hr(r,e,t,i,s,n,a){if(!r)return;!a&&n&&em(r,i,s,n);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,n?jf(r,i,s,n):Xf(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),kr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=qf(ki(r),e,t),Hr(r,e,t,i,s,n,2)):a===2&&Yf(r,e,t,i,s,n):Hr(ki(r),e,t,i,s,n,1);break}}}function Xf(r){const e=r.prev,t=r,i=r.next;if(dt(e,t,i)>=0)return!1;const s=e.x,n=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<n?s<a?s:a:n<a?n:a,d=o<l?o<c?o:c:l<c?l:c,p=s>n?s>a?s:a:n>a?n:a,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=m&&ar(s,o,n,l,a,c,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jf(r,e,t,i){const s=r.prev,n=r,a=r.next;if(dt(s,n,a)>=0)return!1;const o=s.x,l=n.x,c=a.x,h=s.y,d=n.y,p=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<d?h<p?h:p:d<p?d:p,S=o>l?o>c?o:c:l>c?l:c,f=h>d?h>p?h:p:d>p?d:p,u=ta(m,g,e,t,i),M=ta(S,f,e,t,i);let v=r.prevZ,_=r.nextZ;for(;v&&v.z>=u&&_&&_.z<=M;){if(v.x>=m&&v.x<=S&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&ar(o,h,l,d,c,p,v.x,v.y)&&dt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=m&&_.x<=S&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&ar(o,h,l,d,c,p,_.x,_.y)&&dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=u;){if(v.x>=m&&v.x<=S&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&ar(o,h,l,d,c,p,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=m&&_.x<=S&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&ar(o,h,l,d,c,p,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qf(r,e,t){let i=r;do{const s=i.prev,n=i.next.next;!Cs(s,n)&&Sl(s,i,i.next,n)&&Vr(s,n)&&Vr(n,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(n.i/t|0),kr(i),kr(i.next),i=r=n),i=i.next}while(i!==r);return ki(i)}function Yf(r,e,t,i,s,n){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rm(a,o)){let l=yl(a,o);a=ki(a,a.next),l=ki(l,l.next),Hr(a,e,t,i,s,n,0),Hr(l,e,t,i,s,n,0);return}o=o.next}a=a.next}while(a!==r)}function Zf(r,e,t,i){const s=[];let n,a,o,l,c;for(n=0,a=e.length;n<a;n++)o=e[n]*i,l=n<a-1?e[n+1]*i:r.length,c=Ml(r,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(im(c));for(s.sort(Jf),n=0;n<s.length;n++)t=Kf(s[n],t);return t}function Jf(r,e){return r.x-e.x}function Kf(r,e){const t=$f(r,e);if(!t)return e;const i=yl(t,r);return ki(i,i.next),ki(t,t.next)}function $f(r,e){let t=e,i=-1/0,s;const n=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===n))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,d;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&ar(a<c?n:i,a,l,c,a<c?i:n,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(n-t.x),Vr(t,r)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&Qf(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function Qf(r,e){return dt(r.prev,r,e.prev)<0&&dt(e.next,r,r.next)<0}function em(r,e,t,i){let s=r;do s.z===0&&(s.z=ta(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,tm(s)}function tm(r){let e,t,i,s,n,a,o,l,c=1;do{for(t=r,r=null,n=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),n?n.nextZ=s:r=s,s.prevZ=n,n=s;t=i}n.nextZ=null,c*=2}while(a>1);return r}function ta(r,e,t,i,s){return r=(r-t)*s|0,e=(e-i)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function im(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ar(r,e,t,i,s,n,a,o){return(s-a)*(e-o)>=(r-a)*(n-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(n-o)>=(s-a)*(i-o)}function rm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!sm(r,e)&&(Vr(r,e)&&Vr(e,r)&&nm(r,e)&&(dt(r.prev,r,e.prev)||dt(r,e.prev,e))||Cs(r,e)&&dt(r.prev,r,r.next)>0&&dt(e.prev,e,e.next)>0)}function dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Cs(r,e){return r.x===e.x&&r.y===e.y}function Sl(r,e,t,i){const s=_s(dt(r,e,t)),n=_s(dt(r,e,i)),a=_s(dt(t,i,r)),o=_s(dt(t,i,e));return!!(s!==n&&a!==o||s===0&&gs(r,t,e)||n===0&&gs(r,i,e)||a===0&&gs(t,r,i)||o===0&&gs(t,e,i))}function gs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function _s(r){return r>0?1:r<0?-1:0}function sm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Sl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Vr(r,e){return dt(r.prev,r,r.next)<0?dt(r,e,r.next)>=0&&dt(r,r.prev,e)>=0:dt(r,e,r.prev)<0||dt(r,r.next,e)<0}function nm(r,e){let t=r,i=!1;const s=(r.x+e.x)/2,n=(r.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&s<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function yl(r,e){const t=new ia(r.i,r.x,r.y),i=new ia(e.i,e.x,e.y),s=r.next,n=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function Co(r,e,t,i){const s=new ia(r,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ia(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function am(r,e,t,i){let s=0;for(let n=e,a=t-i;n<t;n+=i)s+=(r[a]-r[n])*(r[n+1]+r[a+1]),a=n;return s}class zr{static area(e){const t=e.length;let i=0;for(let s=t-1,n=0;n<t;s=n++)i+=e[s].x*e[n].y-e[n].x*e[s].y;return i*.5}static isClockWise(e){return zr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],n=[];Po(e),Lo(i,e);let a=e.length;t.forEach(Po);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Lo(i,t[l]);const o=Wf.triangulate(i,s);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function Po(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Lo(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ps extends zt{constructor(e=new Sa([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],n=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(n,3)),this.setAttribute("uv",new pt(a,2));function c(h){const d=s.length/3,p=h.extractPoints(t);let m=p.shape;const g=p.holes;zr.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,u=g.length;f<u;f++){const M=g[f];zr.isClockWise(M)===!0&&(g[f]=M.reverse())}const S=zr.triangulateShape(m,g);for(let f=0,u=g.length;f<u;f++){const M=g[f];m=m.concat(M)}for(let f=0,u=m.length;f<u;f++){const M=m[f];s.push(M.x,M.y,0),n.push(0,0,1),a.push(M.x,M.y)}for(let f=0,u=S.length;f<u;f++){const M=S[f],v=M[0]+d,_=M[1]+d,P=M[2]+d;i.push(v,_,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return om(t,e)}static fromJSON(e,t){const i=[];for(let s=0,n=e.shapes.length;s<n;s++){const a=t[e.shapes[s]];i.push(a)}return new Ps(i,e.curveSegments)}}function om(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const s=r[t];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e}class hr extends zt{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,p=new I,m=[],g=[],S=[],f=[];for(let u=0;u<=i;u++){const M=[],v=u/i;let _=0;u===0&&a===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){const b=P/t;d.x=-e*Math.cos(s+b*n)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+b*n)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),f.push(b+_,1-v),M.push(c++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){const v=h[u][M+1],_=h[u][M],P=h[u+1][M],b=h[u+1][M+1];(u!==0||a>0)&&m.push(v,_,b),(u!==i-1||l<Math.PI)&&m.push(_,P,b)}this.setIndex(m),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class He extends Mr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ue extends Mr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ls extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lm extends Ls{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dn=new ot,Io=new I,Do=new I;class wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Io.setFromMatrixPosition(e.matrixWorld),t.position.copy(Io),Do.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Do),t.updateMatrixWorld(),dn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uo=new ot,Ir=new I,pn=new I;class cm extends wl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ir),pn.copy(i.position),pn.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pn),i.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Uo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo)}}class Ft extends Ls{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hm extends wl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new hm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dm extends Ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=No(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=No();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function No(){return performance.now()}const Oo=new ot;class fm{constructor(e,t,i=0,s=1/0){this.ray=new il(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oo),this}intersectObject(e,t=!0,i=[]){return ra(e,this,i,t),i.sort(Fo),i}intersectObjects(e,t=!0,i=[]){for(let s=0,n=e.length;s<n;s++)ra(e[s],this,i,t);return i.sort(Fo),i}}function Fo(r,e){return r.distance-e.distance}function ra(r,e,t,i){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const n=r.children;for(let a=0,o=n.length;a<o;a++)ra(n[a],e,t,!0)}}class mm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);class gm{constructor(e){j(this,"scene"),j(this,"renderer"),j(this,"dirLight"),j(this,"hemiLight"),j(this,"ambientLight"),j(this,"currentTime","day"),j(this,"container"),this.container=e,this.scene=new Pf,this.renderer=new Cf({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bo,this.renderer.toneMapping=Ho,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement),this.ambientLight=new dm(16777215,.5),this.scene.add(this.ambientLight),this.hemiLight=new lm(16777215,4473924,.4),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new um(16775654,1.2),this.dirLight.position.set(35,45,30),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=130,this.dirLight.shadow.camera.left=-40,this.dirLight.shadow.camera.right=40,this.dirLight.shadow.camera.top=40,this.dirLight.shadow.camera.bottom=-40,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.setTimeOfDay("day"),window.addEventListener("resize",this.onWindowResize.bind(this))}setTimeOfDay(e){switch(this.currentTime=e,e){case"day":this.scene.background=new Ge(8900331),this.scene.fog=new Nr(8900331,.008),this.dirLight.color.setHex(16775654),this.dirLight.intensity=1.3,this.dirLight.position.set(35,45,30),this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=.55,this.hemiLight.intensity=.4;break;case"sunset":this.scene.background=new Ge(16752762),this.scene.fog=new Nr(16752762,.009),this.dirLight.color.setHex(16740419),this.dirLight.intensity=1.1,this.dirLight.position.set(50,20,20),this.ambientLight.color.setHex(16764032),this.ambientLight.intensity=.45,this.hemiLight.intensity=.3;break;case"night":this.scene.background=new Ge(659752),this.scene.fog=new Nr(659752,.012),this.dirLight.color.setHex(6056896),this.dirLight.intensity=.35,this.dirLight.position.set(20,40,20),this.ambientLight.color.setHex(1713022),this.ambientLight.intensity=.25,this.hemiLight.intensity=.15;break}}cycleTimeOfDay(){return this.currentTime==="day"?this.setTimeOfDay("sunset"):this.currentTime==="sunset"?this.setTimeOfDay("night"):this.setTimeOfDay("day"),this.currentTime}onWindowResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}class _m{constructor(){j(this,"camera"),j(this,"currentPreset","overview"),j(this,"targetPosition",new I),j(this,"targetLookAt",new I),j(this,"currentLookAt",new I),j(this,"isDragging",!1),j(this,"previousMousePosition",{x:0,y:0}),j(this,"spherical"),j(this,"isUserInteracting",!1),j(this,"userInteractionTimer",0),this.camera=new Ut(50,window.innerWidth/window.innerHeight,.5,300),this.spherical=new mm(38,Math.PI/3.4,Math.PI/4),this.setPreset("overview",!0),this.setupPointerControls(),window.addEventListener("resize",this.onWindowResize.bind(this))}setPreset(e,t=!1){switch(this.currentPreset=e,this.isUserInteracting=!1,e){case"overview":this.targetPosition.set(24,22,28),this.targetLookAt.set(0,1.2,0);break;case"crossing_close":this.targetPosition.set(10,4.5,12),this.targetLookAt.set(0,1.8,0);break;case"driver_view":this.targetPosition.set(-2.2,3.2,18),this.targetLookAt.set(-2.2,1.5,0);break;case"train_follow":this.targetPosition.set(-18,5,9),this.targetLookAt.set(0,2,-2.2);break}t&&(this.camera.position.copy(this.targetPosition),this.currentLookAt.copy(this.targetLookAt),this.camera.lookAt(this.currentLookAt))}cyclePreset(){const e=["overview","crossing_close","driver_view","train_follow"],t=e.indexOf(this.currentPreset),i=e[(t+1)%e.length];return this.setPreset(i),i}update(e,t){this.currentPreset==="train_follow"&&t!==void 0&&(this.targetLookAt.set(t,1.5,-2.2),this.targetPosition.set(t+14,6,12)),this.isUserInteracting||(this.camera.position.lerp(this.targetPosition,Math.min(1,e*3.5)),this.currentLookAt.lerp(this.targetLookAt,Math.min(1,e*3.5)),this.camera.lookAt(this.currentLookAt)),this.userInteractionTimer>0&&(this.userInteractionTimer-=e,this.userInteractionTimer<=0&&(this.isUserInteracting=!1))}setupPointerControls(){const e=window,t=n=>{const a=n.target;if(a.closest("button")||a.closest(".start-overlay"))return;this.isDragging=!0;const o="touches"in n?n.touches[0].clientX:n.clientX,l="touches"in n?n.touches[0].clientY:n.clientY;this.previousMousePosition={x:o,y:l}},i=n=>{if(!this.isDragging)return;const a="touches"in n?n.touches[0].clientX:n.clientX,o="touches"in n?n.touches[0].clientY:n.clientY,l=a-this.previousMousePosition.x,c=o-this.previousMousePosition.y;if(Math.abs(l)>2||Math.abs(c)>2){this.isUserInteracting=!0,this.userInteractionTimer=6;const h=new I().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(h),this.spherical.theta-=l*.005,this.spherical.phi=Math.max(.2,Math.min(Math.PI/2.1,this.spherical.phi-c*.005)),h.setFromSpherical(this.spherical),this.camera.position.copy(this.currentLookAt).add(h),this.camera.lookAt(this.currentLookAt)}this.previousMousePosition={x:a,y:o}},s=()=>{this.isDragging=!1};e.addEventListener("mousedown",t),e.addEventListener("mousemove",i),e.addEventListener("mouseup",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",i,{passive:!0}),e.addEventListener("touchend",s,{passive:!0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}class vm{constructor(){j(this,"ctx",null),j(this,"isMuted",!1),j(this,"alarmInterval",null),j(this,"trainNoiseTimer",null),j(this,"masterGain",null),j(this,"currentSoundType","standard_electronic"),j(this,"currentHornType","japanese_train_horn"),j(this,"bufferStandardCrossing",null),j(this,"bufferSoftCrossing",null),j(this,"bufferGongCrossing",null),j(this,"bufferTrainHorn",null),j(this,"bufferMusicHorn",null),j(this,"bufferSoftWhistle",null)}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.preRenderAllAudioBuffers()}this.ctx.state==="suspended"&&this.ctx.resume()}preRenderAllAudioBuffers(){if(!this.ctx)return;const e=this.ctx.sampleRate;this.bufferStandardCrossing=this.renderSinglePitchBell(e,700,.45,1),this.bufferSoftCrossing=this.renderSinglePitchBell(e,650,.48,.85),this.bufferGongCrossing=this.renderMechanicalGong(e,780,.55),this.bufferTrainHorn=this.renderJapaneseTrainAirHorn(e),this.bufferMusicHorn=this.renderMusicHornBuffer(e),this.bufferSoftWhistle=this.renderSoftWhistleBuffer(e)}renderJapaneseTrainAirHorn(e){const t=Math.floor(e*.32),i=this.ctx.createBuffer(2,t,e),s=i.getChannelData(0),n=i.getChannelData(1),a=330,o=392;for(let l=0;l<t;l++){const c=l/e;let h=0;c<.015?h=c/.015:c<.2?h=1:h=Math.exp(-(c-.2)*22);const d=Math.sin(2*Math.PI*a*c)*.7+Math.sin(2*Math.PI*(a*2)*c)*.25+Math.sin(2*Math.PI*(a*3)*c)*.1,p=Math.sin(2*Math.PI*o*c)*.7+Math.sin(2*Math.PI*(o*2)*c)*.25+Math.sin(2*Math.PI*(o*3)*c)*.1,m=(d*.5+p*.5)*h*.65,g=Math.tanh(m);s[l]=g,n[l]=g}return i}renderMusicHornBuffer(e){const t=Math.floor(e*1.4),i=this.ctx.createBuffer(2,t,e),s=i.getChannelData(0),n=i.getChannelData(1),a=[{freq:349.2,start:0,dur:.18},{freq:440,start:.16,dur:.18},{freq:493.8,start:.32,dur:.18},{freq:587.3,start:.48,dur:.22},{freq:698.4,start:.68,dur:.68}];for(let o=0;o<t;o++){const l=o/e;let c=0;for(const h of a)if(l>=h.start&&l<h.start+h.dur+.1){const d=l-h.start;let p=0;d<.02?p=d/.02:p=Math.exp(-(d-.02)*5);const m=Math.sin(2*Math.PI*h.freq*d)*.7+Math.sin(2*Math.PI*(h.freq*2)*d)*.25;c+=m*p*.45}s[o]=Math.tanh(c),n[o]=Math.tanh(c)}return i}renderSoftWhistleBuffer(e){const t=Math.floor(e*1),i=this.ctx.createBuffer(2,t,e),s=i.getChannelData(0),n=i.getChannelData(1);for(let a=0;a<t;a++){const o=a/e;let l=0;o<.03?l=o/.03:o<.6?l=1:l=Math.exp(-(o-.6)*7);const c=Math.sin(2*Math.PI*1046.5*o)*.65,h=Math.sin(2*Math.PI*1318.5*o)*.35,d=(c+h)*l*.45;s[a]=Math.tanh(d),n[a]=Math.tanh(d)}return i}renderSinglePitchBell(e,t,i,s){const n=Math.floor(e*i),a=this.ctx.createBuffer(2,n,e),o=a.getChannelData(0),l=a.getChannelData(1);for(let c=0;c<n;c++){const h=c/e,d=Math.exp(-h*400)*Math.sin(2*Math.PI*(t*3.8)*h)*.12*s,p=Math.exp(-h*22)*Math.sin(2*Math.PI*(t*2)*h)*.18*s,m=t*(1+.008*Math.exp(-h*120)),g=(Math.exp(-h*8)*Math.sin(2*Math.PI*m*h)*.9+p+d)*.85;o[c]=Math.tanh(g),l[c]=Math.tanh(g)}return a}renderMechanicalGong(e,t,i){const s=Math.floor(e*i),n=this.ctx.createBuffer(2,s,e),a=n.getChannelData(0),o=n.getChannelData(1);for(let l=0;l<s;l++){const c=l/e,h=Math.exp(-c*6.5)*Math.sin(2*Math.PI*t*c)*.7,d=Math.exp(-c*12)*Math.sin(2*Math.PI*(t*1.52)*c)*.35,p=Math.exp(-c*24)*Math.sin(2*Math.PI*(t*2.76)*c)*.25,m=Math.exp(-c*280)*Math.sin(2*Math.PI*(t*4.2)*c)*.2,g=(h+d+p+m)*.8;a[l]=Math.tanh(g),o[l]=Math.tanh(g)}return n}setMuted(e){this.isMuted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(e?0:1,this.ctx.currentTime),this.isMuted&&(this.stopCrossingAlarm(),this.stopTrainSound())}getIsMuted(){return this.isMuted}startCrossingAlarm(){if(this.isMuted||(this.init(),this.alarmInterval!==null))return;const e=()=>{this.isMuted||this.playCrossingBellBuffer()};e(),this.alarmInterval=window.setInterval(e,445)}stopCrossingAlarm(){this.alarmInterval!==null&&(clearInterval(this.alarmInterval),this.alarmInterval=null)}playCrossingBellBuffer(){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.bufferStandardCrossing;if(this.currentSoundType==="soft_electronic"?e=this.bufferSoftCrossing:this.currentSoundType==="mechanical_bell"&&(e=this.bufferGongCrossing),!e)return;const t=this.ctx.createBufferSource();t.buffer=e;const i=this.ctx.createGain();i.gain.setValueAtTime(.65,this.ctx.currentTime),t.connect(i),i.connect(this.masterGain),t.start()}playTrainHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();let e=this.bufferTrainHorn;if(this.currentHornType==="music_horn"?e=this.bufferMusicHorn:this.currentHornType==="soft_whistle"&&(e=this.bufferSoftWhistle),!e)return;const t=this.ctx.createBufferSource();t.buffer=e;const i=this.ctx.createGain();i.gain.setValueAtTime(.75,this.ctx.currentTime),t.connect(i),i.connect(this.masterGain),t.start()}startTrainSound(){if(this.isMuted||(this.init(),this.trainNoiseTimer!==null))return;const e=()=>{if(!this.ctx||!this.masterGain||this.isMuted)return;const t=this.ctx.currentTime,i=(s,n,a)=>{if(!this.ctx||!this.masterGain)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();o.type="triangle",o.frequency.setValueAtTime(a,s),o.frequency.exponentialRampToValueAtTime(35,s+.07),c.type="lowpass",c.frequency.setValueAtTime(300,s),l.gain.setValueAtTime(n,s),l.gain.exponentialRampToValueAtTime(.001,s+.07),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(s),o.stop(s+.08)};i(t,.22,130),setTimeout(()=>{this.ctx&&i(this.ctx.currentTime,.18,100)},65)};e(),this.trainNoiseTimer=window.setInterval(e,250)}stopTrainSound(){this.trainNoiseTimer!==null&&(clearInterval(this.trainNoiseTimer),this.trainNoiseTimer=null)}playCarHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const e=this.ctx.currentTime,t=(i,s)=>{if(!this.ctx||!this.masterGain)return;const n=e+i,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(580,n),o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.18,n+.02),o.gain.exponentialRampToValueAtTime(.001,n+s),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+s+.02)};t(0,.12),t(.16,.15)}playBarrierMotor(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.linearRampToValueAtTime(180,e+.4);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(400,e),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.04,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(s),s.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.45)}playTapSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(800,e+.08),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.1)}}class xm{constructor(){j(this,"group"),j(this,"roadMeshes",[]),j(this,"windowMaterials",[]),j(this,"windowLights",[]),this.group=new qe,this.createTerrain(),this.createTracks(),this.createRoad(),this.createCrossingPavement(),this.createStationPlatform(),this.createScenery()}createTerrain(){const e=new Ye(160,160),t=new ue({color:8112208}),i=new L(e,t);i.rotation.x=-Math.PI/2,i.position.y=-.05,i.receiveShadow=!0,this.group.add(i);const s=new Ye(160,20),n=new ue({color:5227511}),a=new L(s,n);a.rotation.x=-Math.PI/2,a.position.set(0,-.04,-55),a.receiveShadow=!0,this.group.add(a)}createTracks(){const e=new qe,t=160;[-2.2,2.2].forEach(i=>{const s=new J(t,.2,3.4),n=new ue({color:7237230}),a=new L(s,n);a.position.set(0,.1,i),a.receiveShadow=!0,e.add(a);const o=new J(.3,.15,2.8),l=new ue({color:6111287}),c=1,h=Math.floor(t/c);for(let S=0;S<h;S++){const f=-t/2+S*c,u=new L(o,l);u.position.set(f,.22,i),u.castShadow=!0,u.receiveShadow=!0,e.add(u)}const d=new J(t,.18,.12),p=new He({color:13421772,metalness:.8,roughness:.2}),m=new L(d,p);m.position.set(0,.32,i-.9),m.castShadow=!0,e.add(m);const g=new L(d,p);g.position.set(0,.32,i+.9),g.castShadow=!0,e.add(g)}),this.group.add(e)}createRoad(){const e=new qe,t=160,i=9,s=new Ye(i,t),n=new ue({color:3622735}),a=new L(s,n);a.rotation.x=-Math.PI/2,a.position.set(0,.02,0),a.receiveShadow=!0,e.add(a),this.roadMeshes.push(a);const o=new ue({color:13621468});[-5,5].forEach(p=>{const m=new J(1.2,.12,t),g=new L(m,o);g.position.set(p,.06,0),g.receiveShadow=!0,e.add(g)});const l=new Rt({color:16771899}),c=2.5,h=1.8;for(let p=-t/2;p<t/2;p+=c+h)if(Math.abs(p)>5.5){const m=new Ye(.3,c),g=new L(m,l);g.rotation.x=-Math.PI/2,g.position.set(0,.03,p+c/2),e.add(g)}const d=new Rt({color:16777215});[-5.2,5.2].forEach(p=>{const m=new Ye(i*.88,.6),g=new L(m,d);g.rotation.x=-Math.PI/2,g.position.set(0,.035,p),e.add(g)}),[-8,8].forEach(p=>{const m=p>0?3.8:-3.8,g=new Je(.05,.05,2.2),S=new ue({color:13421772}),f=new L(g,S);f.position.set(m,1.1,p),f.castShadow=!0,e.add(f);const u=new Sa;u.moveTo(0,-.35),u.lineTo(.35,.35),u.lineTo(-.35,.35),u.closePath();const M=new Ps(u),v=new Rt({color:13840175,side:Jt}),_=new L(M,v);_.position.set(m,2.1,p),_.rotation.y=p>0?0:Math.PI,e.add(_)}),this.group.add(e)}createCrossingPavement(){const e=new ue({color:4342338}),t=new J(8.8,.28,10),i=new L(t,e);i.position.set(0,.16,0),i.receiveShadow=!0,this.group.add(i)}createStationPlatform(){const e=new qe,t=new J(26,.6,3),i=new ue({color:12434877}),s=new L(t,i);s.position.set(24,.3,-5.2),s.receiveShadow=!0,e.add(s);const n=new J(20,.2,3.6),a=new ue({color:3706428}),o=new L(n,a);o.position.set(24,2.6,-5.2),e.add(o);const l=new ue({color:15658734});[-8,-3,3,8].forEach(d=>{const p=new Je(.08,.08,2.2),m=new L(p,l);m.position.set(24+d,1.4,-5.2),m.castShadow=!0,e.add(m)});const c=new L(new Je(.05,.05,1.5),l);c.position.set(24,1,-4.2),e.add(c);const h=new L(new J(1.6,.8,.1),new ue({color:16777215}));h.position.set(24,1.5,-4.2),e.add(h),this.group.add(e)}createScenery(){const e=new qe;[{x:-16,z:-14},{x:-22,z:-18},{x:-28,z:-12},{x:-14,z:14},{x:-24,z:16},{x:-18,z:24},{x:16,z:15},{x:26,z:18},{x:34,z:14},{x:-38,z:6},{x:42,z:8},{x:-44,z:-8}].forEach((t,i)=>{const s=this.createTree(i%2===0);s.position.set(t.x,0,t.z),e.add(s)}),[{x:-20,z:-28,color:16740419,roof:13840175,scale:1.2},{x:-32,z:-26,color:4367861,roof:1668818,scale:1},{x:22,z:-24,color:16763432,roof:16088064,scale:1.1},{x:-18,z:32,color:11225020,roof:8069026,scale:1},{x:20,z:30,color:2533018,roof:31083,scale:1.2},{x:34,z:28,color:16754470,roof:15094016,scale:.95}].forEach(t=>{const i=this.createHouse(t.color,t.roof,t.scale);i.position.set(t.x,0,t.z),e.add(i)}),this.group.add(e)}createTree(e){const t=new qe,i=new Je(.2,.3,1.4,6),s=new ue({color:6111287}),n=new L(i,s);n.position.y=.7,n.castShadow=!0,t.add(n);const a=[4431943,6732650,3046706],o=new ue({color:a[Math.floor(Math.random()*a.length)],flatShading:!0});if(e){const l=new Ma(1.2,1),c=new L(l,o);c.position.y=2,c.castShadow=!0,t.add(c)}else{const l=new L(new Bi(1.2,1.6,6),o);l.position.y=1.6,l.castShadow=!0,t.add(l);const c=new L(new Bi(.9,1.4,6),o);c.position.y=2.4,c.castShadow=!0,t.add(c)}return t}createHouse(e,t,i){const s=new qe;s.scale.set(i,i,i);const n=new J(4,2.6,3.2),a=new ue({color:e}),o=new L(n,a);o.position.y=1.3,o.castShadow=!0,o.receiveShadow=!0,s.add(o);const l=new Bi(3.2,1.8,4),c=new ue({color:t}),h=new L(l,c);h.rotation.y=Math.PI/4,h.position.y=3.3,h.castShadow=!0,s.add(h);const d=new He({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),p=new L(new J(.8,.8,.1),d);p.position.set(-1,1.5,1.62),s.add(p),this.windowMaterials.push(d);const m=new He({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),g=new L(new J(.8,.8,.1),m);g.position.set(1,1.5,1.62),s.add(g),this.windowMaterials.push(m);const S=new He({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),f=new L(new J(.8,.8,.1),S);f.position.set(0,1.5,-1.62),s.add(f),this.windowMaterials.push(S);const u=new Ft(16766287,0,10,1.8);u.position.set(0,1.6,1.8),s.add(u),this.windowLights.push(u);const M=new ue({color:9268835}),v=new L(new J(.9,1.4,.1),M);return v.position.set(0,.7,1.62),s.add(v),s}setNightMode(e){this.windowMaterials.forEach(t=>{e?(t.color.setHex(16775620),t.emissive.setHex(16766287),t.emissiveIntensity=1.3):(t.color.setHex(14743546),t.emissive.setHex(0),t.emissiveIntensity=0)}),this.windowLights.forEach(t=>{t.intensity=e?1.5:0})}}class Mm{constructor(){j(this,"group"),j(this,"gates",[]),j(this,"clickableMeshes",[]),j(this,"barrierAngle",Math.PI*.42),j(this,"targetBarrierAngle",Math.PI*.42),j(this,"blinkTimer",0),j(this,"isBlinking",!1),j(this,"blinkPhase",!1),this.group=new qe;const e=this.createGate({x:4.8,z:5.2,rotationY:0,armDirection:-1});this.group.add(e.group),this.gates.push(e);const t=this.createGate({x:-4.8,z:-5.2,rotationY:Math.PI,armDirection:-1});this.group.add(t.group),this.gates.push(t)}createGate(e){const t=new qe;t.position.set(e.x,0,e.z),t.rotation.y=e.rotationY;const i=new Je(.52,.62,.4,16),s=new ue({color:10395294}),n=new L(i,s);n.position.y=.2,n.receiveShadow=!0,t.add(n);const a=new Je(.32,.35,.08,16),o=new ue({color:3622735}),l=new L(a,o);l.position.y=.44,t.add(l);const c=4.5,h=.11,d=new qe,p=9,m=(c-.48)/p;for(let te=0;te<p;te++){const Ce=new Je(h,h,m,16),ke=new ue({color:te%2===0?16766464:2171169}),tt=new L(Ce,ke);tt.position.y=.48+m/2+te*m,tt.castShadow=!0,d.add(tt),this.clickableMeshes.push(tt)}t.add(d);const g=new qe;g.position.y=c;const S=new hr(.22,16,12,0,Math.PI*2,0,Math.PI*.52),f=new ue({color:2171169}),u=new L(S,f);u.position.y=-.02,u.castShadow=!0,g.add(u);const M=new L(new Je(.03,.04,.06,12),new ue({color:3355443}));M.position.y=.2,g.add(M),t.add(g),this.clickableMeshes.push(u);const v=new qe;v.position.set(0,3.8,.14);const _=new ue({color:16766464}),P=new ue({color:2171169}),b=new He({color:13621468,metalness:.8,roughness:.2}),A=1.85,R=.32,w=.02,x=(te,Ce)=>{const ke=new qe;ke.rotation.z=te,ke.position.z=Ce;const tt=new L(new J(A,R,w),_);return tt.castShadow=!0,ke.add(tt),[-.46,.46].forEach(Ze=>{const Mt=new L(new J(.36,R+.002,w+.002),P);Mt.position.set(Ze,0,0),ke.add(Mt)}),ke},C=x(Math.PI*.22,0),F=x(-Math.PI*.22,.008);v.add(C,F);const B=new Sa,G=.22,$=.17;B.moveTo(0,$),B.lineTo(G,0),B.lineTo(0,-$),B.lineTo(-G,0),B.closePath();const X=new Ps(B),ee=new L(X,P);ee.position.set(0,0,.022),v.add(ee);const W=[[-.08,.06],[-.08,-.06],[.08,.06],[.08,-.06],[-.03,0],[.03,0]],re=new Je(.016,.016,.02,12);re.rotateX(Math.PI/2),W.forEach(([te,Ce])=>{const ke=new L(re,b);ke.position.set(te,Ce,.03),v.add(ke)});const de=new Je(.04,.04,.14,8);de.rotateX(Math.PI/2);const Re=new L(de,P);Re.position.z=-.07,v.add(Re),t.add(v);const Ie=new qe;Ie.position.set(0,2.7,.15);const Qe=new Je(.045,.045,1.5,12);Qe.rotateZ(Math.PI/2);const q=new ue({color:2763306}),ne=new L(Qe,q);Ie.add(ne);const xe=new Je(.12,.12,.16,16),ce=new L(xe,q);Ie.add(ce);const be=te=>{const Ce=new qe;Ce.position.set(te,0,.06);const ke=new Je(.34,.34,.02,28);ke.rotateX(Math.PI/2);const tt=new ue({color:1118481}),Ze=new L(ke,tt);Ce.add(Ze);const Mt=new Je(.24,.24,.12,28);Mt.rotateX(Math.PI/2);const Bt=new ue({color:2236962}),yr=new L(Mt,Bt);yr.position.z=.07,Ce.add(yr);const wr=new hr(.21,24,12,0,Math.PI*2,0,Math.PI*.45);wr.rotateX(Math.PI/2);const ei=new He({color:4849664,emissive:0,emissiveIntensity:0,roughness:.15,metalness:.05}),wi=new L(wr,ei);wi.position.z=.13,Ce.add(wi);const Gi=new Ft(16711680,0,10,1.8);return Gi.position.set(0,0,.35),Ce.add(Gi),{singleLamp:Ce,lens:wi,pointLight:Gi}},Le=be(-.64);Ie.add(Le.singleLamp);const Ve=Le.lens,nt=Le.pointLight,We=be(.64);Ie.add(We.singleLamp);const ut=We.lens,O=We.pointLight;t.add(Ie);const xt=new qe;xt.position.set(.28*e.armDirection,1.35,.14);const Xe=new J(.26,.4,.18),je=new ue({color:16766464}),Ee=new L(Xe,je);xt.add(Ee);const st=new He({color:16717636,emissive:13959168,emissiveIntensity:.4,roughness:.3}),we=new L(new Je(.06,.06,.06,16),st);we.rotation.x=Math.PI/2,we.position.z=.1,xt.add(we),t.add(xt),this.clickableMeshes.push(Ee,we);const T=new qe;T.position.set(-.7*e.armDirection,0,.35);const y=.65,z=.52,Y=.75/3,Q=new L(new J(y,Y,z),_);Q.position.y=.58+Y/2,Q.castShadow=!0,T.add(Q);const Z=new L(new J(y+.002,Y,z+.002),P);Z.position.y=.58+Y*1.5,Z.castShadow=!0,T.add(Z);const ve=new L(new J(y,Y,z),_);ve.position.y=.58+Y*2.5,ve.castShadow=!0,T.add(ve),this.clickableMeshes.push(Q,Z,ve);const le=new L(new J(.72,.58,.58),new ue({color:10395294}));le.position.y=.29,T.add(le);const fe=new L(new J(.52,.68,.02),new ue({color:2763306}));fe.position.set(0,.955,.27),T.add(fe);const Oe=new qe;Oe.position.set(0,1.05,.32);const se=new J(.95,.28,.22),me=new ue({color:2503224}),Te=new L(se,me);Te.position.set(-.55*e.armDirection,0,0),Te.castShadow=!0,Oe.add(Te);const Pe=new L(new Je(.12,.12,.22,16),new ue({color:1118481}));Pe.rotation.x=Math.PI/2,Oe.add(Pe);const ge=8.6,Fe=new qe,De=16,et=ge/De;for(let te=0;te<De;te++){const Ce=new J(et,.13,.07),ke=new ue({color:te%2===0?16766464:2171169}),tt=new L(Ce,ke);tt.position.set((te*et+et/2)*e.armDirection,0,0),tt.castShadow=!0,Fe.add(tt)}const D=new hr(.09,12,12),ae=new He({color:6684672,emissive:0,roughness:.2}),k=new L(D,ae);k.position.set(3.2*e.armDirection,.09,0),Fe.add(k);const K=new L(D,ae);K.position.set(6.4*e.armDirection,.09,0),Fe.add(K);const he=new Ft(16717636,0,6);return he.position.set(4.8*e.armDirection,.15,.15),Fe.add(he),Oe.add(Fe),T.add(Oe),t.add(T),Oe.rotation.z=-this.barrierAngle,{group:t,pole:d.children[0],barrierPivot:Oe,barrierArm:Fe.children[0],redLightLeft:Ve,redLightRight:ut,pointLightLeft:nt,pointLightRight:O,armLight:k,armPointLight:he,leftIntensity:0,rightIntensity:0}}setTrainDirection(e){}setBlinking(e){this.isBlinking=e,e||this.gates.forEach(t=>{t.leftIntensity=0,t.rightIntensity=0,t.redLightLeft.material.emissive.setHex(0),t.redLightRight.material.emissive.setHex(0),t.pointLightLeft.intensity=0,t.pointLightRight.intensity=0,t.armLight.material.emissive.setHex(0),t.armPointLight.intensity=0})}setTargetBarrierAngle(e){this.targetBarrierAngle=e?0:Math.PI*.42}update(e){if(Math.abs(this.barrierAngle-this.targetBarrierAngle)>.005&&(this.barrierAngle<this.targetBarrierAngle?this.barrierAngle=Math.min(this.targetBarrierAngle,this.barrierAngle+1.45*e):this.barrierAngle=Math.max(this.targetBarrierAngle,this.barrierAngle-1.45*e),this.gates[0].barrierPivot.rotation.z=-this.barrierAngle,this.gates[1].barrierPivot.rotation.z=-this.barrierAngle),this.isBlinking){this.blinkTimer+=e,this.blinkTimer>=.445&&(this.blinkTimer=0,this.blinkPhase=!this.blinkPhase);const t=this.blinkPhase?1:0,i=this.blinkPhase?0:1,s=12;this.gates.forEach(n=>{n.leftIntensity+=(t-n.leftIntensity)*Math.min(e*s,1),n.rightIntensity+=(i-n.rightIntensity)*Math.min(e*s,1);const a=n.redLightLeft.material,o=n.redLightRight.material;a.emissive.setRGB(n.leftIntensity*1,0,0),a.emissiveIntensity=n.leftIntensity*1.6,n.pointLightLeft.intensity=n.leftIntensity*2.8,o.emissive.setRGB(n.rightIntensity*1,0,0),o.emissiveIntensity=n.rightIntensity*1.6,n.pointLightRight.intensity=n.rightIntensity*2.8;const l=n.armLight.material,c=(n.leftIntensity+n.rightIntensity)*.5;l.emissive.setRGB(c*.9,0,0),n.armPointLight.intensity=c*1.2})}}isBarrierFullyDown(){return this.barrierAngle<=.05}isBarrierFullyUp(){return this.barrierAngle>=Math.PI*.4}}const El={yamanote:{type:"yamanote",name:"みどりの電車 🚃",bodyColor:14080991,stripeColor:7780394,roofColor:7901340,accentColor:1710618,category:"commuter",isStainless:!0},freight:{type:"freight",name:"かもつ列車 📦",bodyColor:870305,stripeColor:16777215,roofColor:4545124,category:"freight",isStainless:!1},hayabusa:{type:"hayabusa",name:"みどりの新幹線 🚅",bodyColor:16119802,stripeColor:14942335,roofColor:34681,category:"shinkansen",isStainless:!1},komachi:{type:"komachi",name:"あかい新幹線 🚅",bodyColor:16119802,stripeColor:12000284,roofColor:12000284,category:"shinkansen",isStainless:!1},doctor_yellow:{type:"doctor_yellow",name:"きいろい新幹線 🚄",bodyColor:16766464,stripeColor:870305,roofColor:9479342,category:"shinkansen",isStainless:!1},express:{type:"express",name:"とっきゅう列車 🚩",bodyColor:16777215,stripeColor:13959168,roofColor:1710618,category:"express",isStainless:!1},chuo:{type:"chuo",name:"オレンジの電車 🚃",bodyColor:14080991,stripeColor:16739584,roofColor:7901340,category:"commuter",isStainless:!0},steam:{type:"steam",name:"SLきかんしゃ 🚂",bodyColor:1710618,stripeColor:12434877,roofColor:1118481,category:"steam",isStainless:!1},shonan:{type:"shonan",name:"ツートンカラーの電車 🚃",bodyColor:1793568,stripeColor:15094016,roofColor:6381921,category:"commuter",isStainless:!1}};class Sm{constructor(e="yamanote",t=1){j(this,"group"),j(this,"totalLength",0),j(this,"wheels",[]),j(this,"headLights",[]),j(this,"windowMeshes",[]),this.group=new qe;const i=El[e],s=13.6,n=2.55,a=2.6,o=.5;if(i.category==="freight")this.buildFreightFormation(s,n,a,o,t);else if(i.category==="steam")this.buildSteamFormation(s,n,a,o,t);else{const l=this.createCar(i,s,n,a,"lead",t);l.position.x=(s+o)*t,this.group.add(l);const c=this.createCar(i,s,n,a,"mid",t);c.position.x=0,this.group.add(c);const h=this.createCar(i,s,n,a,"tail",t);h.position.x=-14.1*t,this.group.add(h),this.createGangway((s+o)*t*.5,n,a),this.createGangway(-14.1*t*.5,n,a)}this.totalLength=(s+o)*3}createCar(e,t,i,s,n,a){const o=new qe;return e.category==="shinkansen"?this.buildShinkansenCar(o,e,t,i,s,n,a):e.category==="express"?this.buildExpressCar(o,e,t,i,s,n,a):this.buildCommuterCar(o,e,t,i,s,n,a),this.buildUnderfloorEquipment(o,t,i),this.buildBogies(o,t,i),o}buildFreightFormation(e,t,i,s,n){const a=new qe;this.buildElectricLocomotive(a,e,t,i,n),this.buildBogies(a,e,t),a.position.x=(e+s)*n,this.group.add(a);const o=new qe;this.buildContainerCar(o,e,t,i),this.buildBogies(o,e,t),o.position.x=0,this.group.add(o);const l=new qe;this.buildTankCar(l,e,t,i),this.buildBogies(l,e,t),l.position.x=-(e+s)*n,this.group.add(l)}buildSteamFormation(e,t,i,s,n){const a=new qe;this.buildSteamLocomotive(a,e,t,i,n),this.buildBogies(a,e,t),a.position.x=(e+s)*n,this.group.add(a);const o=new qe;this.buildRetroPassengerCar(o,e,t,i),this.buildBogies(o,e,t),o.position.x=0,this.group.add(o);const l=new qe;this.buildRetroPassengerCar(l,e,t,i),this.buildBogies(l,e,t),l.position.x=-(e+s)*n,this.group.add(l)}buildElectricLocomotive(e,t,i,s,n){const a=new He({color:870305,roughness:.3}),o=new He({color:16777215,roughness:.3}),l=new ue({color:4545124}),c=new J(t,s*.9,i),h=new L(c,a);h.position.y=s*.45+.52,h.castShadow=!0,e.add(h);const d=new L(new J(t+.02,.35,i+.02),o);d.position.y=s*.45+.52,e.add(d);const p=new L(new J(t*.95,.35,i*.9),l);p.position.y=s+.52,e.add(p);const m=this.createSingleArmPantograph(i);m.position.set(-t*.32,s+.52+.25,0),e.add(m);const g=this.createSingleArmPantograph(i);g.position.set(t*.32,s+.52+.25,0),g.rotation.y=Math.PI,e.add(g);const S=new Rt({color:16777200});[-i*.32,i*.32].forEach(u=>{const M=new L(new zi(.16,16),S);M.rotation.y=Math.PI/2*n,M.position.set((t/2+.02)*n,s*.4+.52,u),e.add(M)});const f=new Ft(16776679,2.5,30);f.position.set((t/2+1.5)*n,s*.5+.52,0),e.add(f),this.headLights.push(f)}buildContainerCar(e,t,i,s){const n=new He({color:3622735,metalness:.6,roughness:.3}),a=new L(new J(t,.22,i),n);a.position.y=.62,a.castShadow=!0,e.add(a);const o=[9249828,1793568,9249828],l=3,c=t*.88/l,h=i*.92,d=s*.78;for(let p=0;p<l;p++){const m=-t*.32+p*(c+.15),g=new He({color:o[p],roughness:.4}),S=new L(new J(c,d,h),g);S.position.set(m,.62+.11+d/2,0),S.castShadow=!0,e.add(S);const f=new L(new J(c+.01,.18,h+.01),new Rt({color:16777215}));f.position.set(m,.62+.11+d*.5,0),e.add(f)}}buildTankCar(e,t,i,s){const n=new He({color:19776,roughness:.3}),a=new He({color:7901340,roughness:.3}),o=new L(new J(t,.22,i),new ue({color:2171169}));o.position.y=.62,e.add(o);const l=i*.46,c=t*.88,h=new Je(l,l,c,24);h.rotateZ(Math.PI/2);const d=new L(h,n);d.position.set(0,.62+l+.15,0),d.castShadow=!0,e.add(d),[-c/2,c/2].forEach(m=>{const g=new L(new hr(l,16,12,0,Math.PI*2,0,Math.PI*.4),a);g.rotation.z=m>0?-Math.PI/2:Math.PI/2,g.position.set(m,.62+l+.15,0),e.add(g)});const p=new L(new J(c*.75,.08,i*.35),a);p.position.set(0,.62+l*2+.18,0),e.add(p)}buildSteamLocomotive(e,t,i,s,n){const a=new He({color:1118481,roughness:.3}),o=new He({color:12434877,metalness:.8,roughness:.2}),l=i*.44,c=t*.55,h=new Je(l,l,c,24);h.rotateZ(Math.PI/2);const d=new L(h,a);d.position.set(t*.12*n,.62+l+.2,0),d.castShadow=!0,e.add(d);const p=new L(new Je(.18,.22,.65,16),a);p.position.set(t*.32*n,.62+l*2+.4,0),e.add(p),[-i*.48,i*.48].forEach(u=>{const M=new L(new J(1.6,1.4,.05),a);M.position.set(t*.3*n,.62+.85,u),e.add(M)});const m=new L(new J(2.4,s*.85,i*.95),a);m.position.set(-t*.18*n,s*.45+.62,0),e.add(m);const g=new L(new J(t*.32,s*.75,i*.92),a);g.position.set(-t*.36*n,s*.38+.62,0),e.add(g);const S=new L(new Je(.24,.24,.28,16),o);S.rotateZ(Math.PI/2),S.position.set(t*.4*n,.62+l*2+.1,0),e.add(S);const f=new Ft(16776679,2.5,30);f.position.set(t*.45*n,.62+l*2+.1,0),e.add(f),this.headLights.push(f)}buildRetroPassengerCar(e,t,i,s){const n=new He({color:4073251,roughness:.4}),a=new ue({color:2171169}),o=new He({color:2496271,emissive:16758605,emissiveIntensity:.35,roughness:.2}),l=new L(new J(t,s,i),n);l.position.y=s/2+.52,l.castShadow=!0,e.add(l);const c=new L(new J(t,.35,i*.94),a);c.position.y=s+.52+.12,e.add(c);const h=9,d=t/(h+1);for(let p=1;p<=h;p++){const m=-t/2+p*d;[-i/2-.015,i/2+.015].forEach((g,S)=>{const f=new L(new Ye(.7,.5),o);f.position.set(m,s*.6+.52,g),S===0&&(f.rotation.y=Math.PI),e.add(f),this.windowMeshes.push(f)})}}buildExpressCar(e,t,i,s,n,a,o){const l=new He({color:16777215,roughness:.25}),c=new He({color:13959168,roughness:.3}),h=new He({color:1710618,roughness:.2}),d=new L(new J(i,n,s),l);d.position.y=n/2+.52,d.castShadow=!0,e.add(d);const p=new L(new J(i,.35,s*.94),c);p.position.y=n+.52+.12,e.add(p);const m=new L(new J(i+.02,.25,s+.02),c);if(m.position.y=n*.45+.52,e.add(m),a==="lead"||a==="tail"){const g=a==="lead",S=g?o:-o,f=new L(new J(.4,n*.95,s*.95),h);if(f.position.set((i/2+.1)*S,n/2+.52,0),e.add(f),g){const u=new Ft(16776679,2.5,30);u.position.set((i/2+1.5)*o,n*.5+.52,0),e.add(u),this.headLights.push(u)}}}buildCommuterCar(e,t,i,s,n,a,o){const l=t.isStainless?new He({color:t.bodyColor,metalness:.75,roughness:.28}):new ue({color:t.bodyColor}),c=new He({color:t.stripeColor,metalness:.1,roughness:.4}),h=new ue({color:t.roofColor}),d=new He({color:1713022,emissive:16775620,emissiveIntensity:.18,roughness:.1,metalness:.8}),p=new He({color:11583173,metalness:.8,roughness:.25}),m=new J(i,n,s),g=new L(m,l);g.position.y=n/2+.52,g.castShadow=!0,g.receiveShadow=!0,e.add(g);const S=new L(new J(i+.02,.42,s+.02),c);S.position.y=n*.44+.52,e.add(S);const f=new L(new J(i+.02,.15,s+.02),c);f.position.y=n*.88+.52,e.add(f);const u=new L(new J(i,.32,s*.94),h);u.position.y=n+.52+.1,u.castShadow=!0,e.add(u);const M=i*.38,v=new L(new J(M,.3,s*.58),new He({color:9479342,metalness:.6,roughness:.3}));v.position.y=n+.52+.36,v.castShadow=!0,e.add(v);const _=4,P=i/(_+.5);for(let b=0;b<_;b++){const A=-i*.4+b*(P*.88);if([-s/2-.015,s/2+.015].forEach((R,w)=>{const x=new L(new Ye(1.25,n*.86),p);x.position.set(A,n*.48+.52,R),w===0&&(x.rotation.y=Math.PI),e.add(x);const C=new L(new Ye(.85,n*.38),d);C.position.set(A,n*.64+.52,R+(w===0?-.01:.01)),w===0&&(C.rotation.y=Math.PI),e.add(C),this.windowMeshes.push(C)}),b<_-1){const R=-i*.4+(b+1)*(P*.88),w=(A+R)/2;[-s/2-.02,s/2+.02].forEach((x,C)=>{const F=new L(new Ye(1.6,n*.38),d);F.position.set(w,n*.64+.52,x),C===0&&(F.rotation.y=Math.PI),e.add(F),this.windowMeshes.push(F)})}}if(a==="lead"||a==="tail"){const b=a==="lead",A=b?o:-o,R=new qe;R.position.set((i/2+.02)*A,n/2+.52,0),A<0&&(R.rotation.y=Math.PI);const w=new He({color:1710618,metalness:.5,roughness:.2}),x=new L(new J(.25,n*.94,s*.94),w);R.add(x);const C=new He({color:t.stripeColor,metalness:.3,roughness:.3}),F=new L(new J(.28,.16,s*.95),C);F.position.set(.02,n*.44,0),R.add(F);const B=new L(new J(.28,.16,s*.95),C);B.position.set(.02,-n*.44,0),R.add(B);const G=new L(new Ye(.9,.24),new Rt({color:16750592}));G.rotation.y=Math.PI/2,G.position.set(.14,n*.36,0),R.add(G);const $=new L(new Ye(s*.84,n*.48),new He({color:858922,roughness:.1,metalness:.9}));$.rotation.y=Math.PI/2,$.position.set(.14,n*.08,0),R.add($);const X=new L(new J(.4,.52,s*.92),new ue({color:4545124}));X.position.set(.1,-n*.45-.22,0),R.add(X);const ee=new L(new J(.5,.2,.26),new ue({color:2171169}));if(ee.position.set(.3,-n*.45-.22,0),R.add(ee),b){const W=new Rt({color:16777200});[-s*.34,s*.34].forEach(de=>{const Re=new L(new zi(.14,16),W);Re.rotation.y=Math.PI/2,Re.position.set(.14,-n*.26,de),R.add(Re)});const re=new Ft(16776679,2.2,28,1.2);re.position.set(2,0,0),R.add(re),this.headLights.push(re)}else{const W=new Rt({color:16717636});[-s*.34,s*.34].forEach(re=>{const de=new L(new zi(.12,16),W);de.rotation.y=Math.PI/2,de.position.set(.14,-n*.26,re),R.add(de)})}e.add(R)}if(a==="mid"){const b=this.createSingleArmPantograph(s);b.position.set(i*.28,n+.52+.42,0),e.add(b)}}buildShinkansenCar(e,t,i,s,n,a,o){const l=new He({color:t.roofColor,metalness:.4,roughness:.25}),c=new He({color:t.bodyColor,metalness:.3,roughness:.3}),h=new He({color:t.stripeColor,metalness:.2,roughness:.3}),d=new He({color:858922,emissive:16775620,emissiveIntensity:.15,roughness:.1,metalness:.8}),p=new L(new J(i,n*.55,s),c);p.position.y=n*.55/2+.45,p.castShadow=!0,e.add(p);const m=new L(new J(i,n*.5,s*.94),l);m.position.y=n*.55+.45+n*.5/2,m.castShadow=!0,e.add(m);const g=new L(new J(i+.02,.22,s+.02),h);g.position.y=n*.55+.45,e.add(g);const S=8,f=i/(S+1);for(let u=1;u<=S;u++){const M=-i/2+u*f;[-s/2-.015,s/2+.015].forEach((v,_)=>{const P=new L(new Ye(.75,.48),d);P.position.set(M,n*.65+.45,v),_===0&&(P.rotation.y=Math.PI),e.add(P),this.windowMeshes.push(P)})}if(a==="lead"||a==="tail"){const u=a==="lead",M=u?o:-o,v=new qe;v.position.set(i/2*M,.45,0),M<0&&(v.rotation.y=Math.PI);const _=5.4,P=new Bi(s*.5,_,24);P.rotateZ(-Math.PI/2);const b=new L(P,c);b.position.set(_/2,n*.35,0),b.scale.set(1,.6,.95),v.add(b);const A=new L(P,l);A.position.set(_/2,n*.65,0),A.scale.set(1,.55,.9),v.add(A);const R=new L(new J(1.4,.42,s*.5),new He({color:858922,roughness:.1,metalness:.9}));if(R.position.set(1.4,n*.85,0),R.rotation.z=-.22,v.add(R),u){const w=new Rt({color:16777200});[-s*.26,s*.26].forEach(C=>{const F=new L(new zi(.16,16),w);F.rotation.y=Math.PI/2,F.position.set(_*.72,n*.42,C),v.add(F)});const x=new Ft(16776679,2.2,30,1.2);x.position.set(_+1.2,n*.5,0),v.add(x),this.headLights.push(x)}e.add(v)}if(a==="mid"){const u=new ue({color:9479342}),M=new L(new J(2.8,.55,.1),u);M.position.set(0,n+.68,s*.42),e.add(M);const v=new L(new J(2.8,.55,.1),u);v.position.set(0,n+.68,-s*.42),e.add(v);const _=this.createSingleArmPantograph(s*.8);_.position.set(0,n+.52+.38,0),e.add(_)}}buildUnderfloorEquipment(e,t,i){const s=new ue({color:2503224}),n=new ue({color:3622735}),a=t*.42,o=new L(new J(a,.45,i*.75),s);o.position.set(0,.32,0),e.add(o);for(let l=-a*.4;l<a*.4;l+=.45){const c=new L(new J(.08,.48,i*.78),n);c.position.set(l,.32,0),e.add(c)}}createSingleArmPantograph(e){const t=new qe,i=new ue({color:13840175}),s=new ue({color:14737632});[-.35,.35].forEach(l=>{[-.3,.3].forEach(c=>{const h=new L(new Je(.05,.07,.16,8),i);h.position.set(l,.08,c),t.add(h)})});const n=new L(new Je(.035,.035,.85,8),s);n.rotation.z=Math.PI/3,n.position.set(-.22,.42,0),t.add(n);const a=new L(new Je(.03,.03,.8,8),s);a.rotation.z=-Math.PI/3.2,a.position.set(.16,.9,0),t.add(a);const o=new L(new J(.08,.04,e*.75),s);return o.position.set(.38,1.22,0),t.add(o),t}createGangway(e,t,i){const s=new ue({color:2171169}),n=new L(new J(.45,i*.88,t*.75),s);n.position.set(e,i/2+.52,0),this.group.add(n)}buildBogies(e,t,i){const s=new He({color:1973790,metalness:.8,roughness:.2}),n=new ue({color:2503224}),a=new Je(.38,.38,.18,18);a.rotateX(Math.PI/2),[-t*.34,t*.34].forEach(o=>{const l=new L(new J(2.6,.24,i*.84),n);l.position.set(o,.44,0),e.add(l),[-i*.38,i*.38].forEach(c=>{const h=new L(new Je(.18,.18,.22,12),n);h.position.set(o,.54,c),e.add(h)}),[-.78,.78].forEach(c=>{const h=new L(a,s);h.position.set(o+c,.38,i/2-.12),h.castShadow=!0,e.add(h),this.wheels.push(h);const d=new L(a,s);d.position.set(o+c,.38,-i/2+.12),d.castShadow=!0,e.add(d),this.wheels.push(d)})})}rotateWheels(e){const t=e/.38;this.wheels.forEach(i=>{i.rotation.z-=t})}}class ym{constructor(e,t){j(this,"scene"),j(this,"soundEngine"),j(this,"activeTrain",null),j(this,"trainTypes",["yamanote","freight","hayabusa","komachi","doctor_yellow","express","chuo","steam","shonan"]),j(this,"currentTypeIndex",0),j(this,"trackToggle",!1),this.scene=e,this.soundEngine=t}isTrainRunning(){return this.activeTrain!==null}spawnTrain(){if(this.activeTrain)return this.activeTrain;const e=this.trainTypes[this.currentTypeIndex];this.currentTypeIndex=(this.currentTypeIndex+1)%this.trainTypes.length;const t=El[e];this.trackToggle=!this.trackToggle;const i=this.trackToggle?1:-1,s=this.trackToggle?-2.2:2.2,n=-90*i,a=new Sm(e,i);a.group.position.set(n,0,s),this.scene.add(a.group);let o=25;return t.category==="shinkansen"&&(o=34),t.category==="express"&&(o=28),t.category==="freight"&&(o=20),t.category==="steam"&&(o=18),this.activeTrain={model:a,trackZ:s,direction:i,posX:n,speed:0,maxSpeed:o,type:e,name:t.name,hasPlayedHorn:!1},this.soundEngine.startTrainSound(),this.activeTrain}update(e){if(!this.activeTrain)return;const t=this.activeTrain;if(t.speed<t.maxSpeed){const s=t.type==="hayabusa"||t.type==="komachi"||t.type==="doctor_yellow"?24:16;t.speed=Math.min(t.maxSpeed,t.speed+s*e)}const i=t.speed*e*t.direction;if(t.posX+=i,t.model.group.position.x=t.posX,t.model.rotateWheels(Math.abs(i)),!t.hasPlayedHorn){const s=-t.posX*t.direction;s<=35&&s>0&&(this.soundEngine.playTrainHorn(),t.hasPlayedHorn=!0)}Math.abs(t.posX)>95&&t.posX*t.direction>0&&this.removeTrain()}removeTrain(){this.activeTrain&&(this.scene.remove(this.activeTrain.model.group),this.activeTrain=null,this.soundEngine.stopTrainSound())}}class wm{constructor(e,t,i){j(this,"group"),j(this,"type"),j(this,"length"),j(this,"width"),j(this,"height"),j(this,"direction"),j(this,"laneX"),j(this,"speed",0),j(this,"targetSpeed",10),j(this,"state","approaching"),j(this,"stopWaitTimer",0),j(this,"lookTimer",0),j(this,"initialYRotation",0),j(this,"wheels",[]),j(this,"sirenLight",null),j(this,"sirenPointLight",null),j(this,"headlights",[]),this.type=e,this.direction=t,this.laneX=i,this.group=new qe;let s;switch(e){case"ambulance":s={type:e,color:16448250,length:5,width:1.95,height:2.05};break;case"fire_engine":s={type:e,color:13840175,length:5.2,width:2.1,height:2.1};break;case"police":s={type:e,color:2171169,length:4.2,width:1.9,height:1.4};break;case"minivan":s={type:e,color:16119285,length:4.3,width:1.75,height:1.75};break;case"kei_car":s={type:e,color:7214884,length:3.4,width:1.48,height:1.78};break;case"kei_truck":s={type:e,color:16777215,length:3.4,width:1.48,height:1.6};break;case"suv":s={type:e,color:3033656,length:4.4,width:1.85,height:1.7};break;case"sports_car":s={type:e,color:16766464,length:4.2,width:1.95,height:1.18};break;case"garbage_truck":s={type:e,color:166097,length:4.8,width:1.95,height:2.05};break;case"semi_truck":s={type:e,color:870305,length:8.4,width:2.3,height:2.65};break;case"bus":s={type:e,color:16757504,length:6.2,width:2.2,height:2.2};break;case"truck":s={type:e,color:1668818,length:5,width:2.1,height:2.1};break;case"sedan":default:const n=[15022389,2001125,4431943,9315498,16485376];s={type:"sedan",color:n[Math.floor(Math.random()*n.length)],length:3.8,width:1.85,height:1.35};break}this.length=s.length,this.width=s.width,this.height=s.height,this.buildMesh(s),this.initialYRotation=t===1?Math.PI:0,this.group.rotation.y=this.initialYRotation}buildMesh(e){const t=new ue({color:e.color}),i=new ue({color:2171169}),s=new ue({color:11789820}),n=new ue({color:2503224}),a=new He({color:15658734,metalness:.85,roughness:.15}),o=e.height*.45,l=.32;if(e.type==="ambulance"){const f=new J(e.width,e.height,e.length),u=new L(f,t);u.position.y=l+e.height/2,u.castShadow=!0,this.group.add(u);const M=new ue({color:13959168});[-1,1].forEach(b=>{const A=new L(new J(.04,.22,e.length*.98),M);A.position.set(b*(e.width/2+.01),l+e.height*.45,0),this.group.add(A);const R=new Rt({color:13959168}),w=new L(new Ye(.12,.42),R),x=new L(new Ye(.42,.12),R);w.rotation.y=b*Math.PI/2,x.rotation.y=b*Math.PI/2,w.position.set(b*(e.width/2+.02),l+e.height*.72,-.4),x.position.set(b*(e.width/2+.02),l+e.height*.72,-.4),this.group.add(w,x)});const v=new L(new Ye(e.width*.85,e.height*.35),s);v.position.set(0,l+e.height*.65,e.length/2+.01),this.group.add(v);const _=new J(e.width*.7,.16,.4),P=new He({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new L(_,P),this.sirenLight.position.set(0,l+e.height+.1,e.length*.25),this.group.add(this.sirenLight),this.sirenPointLight=new Ft(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.3,e.length*.25),this.group.add(this.sirenPointLight)}else if(e.type==="fire_engine"){const f=new L(new J(e.width,e.height*.9,e.length),t);f.position.y=l+e.height*.45,f.castShadow=!0,this.group.add(f);const u=new ue({color:13621468});[-1,1].forEach(A=>{const R=new L(new Ye(e.length*.5,e.height*.5),u);R.rotation.y=A*Math.PI/2,R.position.set(A*(e.width/2+.01),l+e.height*.45,-e.length*.15),this.group.add(R)});const M=new ue({color:16771899}),v=new L(new J(e.width*.55,.14,e.length*.7),M);v.position.set(0,l+e.height*.9+.1,-e.length*.05),v.castShadow=!0,this.group.add(v);const _=new L(new Ye(e.width*.82,e.height*.35),s);_.position.set(0,l+e.height*.65,e.length/2+.01),this.group.add(_);const P=new Je(.18,.18,.16,12),b=new He({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new L(P,b),this.sirenLight.position.set(0,l+e.height*.9+.12,e.length*.3),this.group.add(this.sirenLight),this.sirenPointLight=new Ft(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.3,e.length*.3),this.group.add(this.sirenPointLight)}else if(e.type==="police"){const f=new L(new J(e.width,o,e.length),t);f.position.y=l+o/2,f.castShadow=!0,this.group.add(f);const u=e.height*.55,M=e.length*.55,v=new ue({color:16777215}),_=new L(new J(e.width*.88,u,M),v);_.position.set(0,l+o+u/2,-e.length*.05),_.castShadow=!0,this.group.add(_);const P=new L(new J(e.width+.02,o*.9,M*.8),v);P.position.set(0,l+o/2,-e.length*.05),this.group.add(P);const b=new L(new Ye(e.width*.78,u*.75),s);b.position.set(0,l+o+u*.5,M/2+.02),this.group.add(b);const A=new Je(.18,.18,.15,12),R=new He({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new L(A,R),this.sirenLight.position.set(0,l+e.height+.1,0),this.group.add(this.sirenLight),this.sirenPointLight=new Ft(16717636,1.2,8),this.sirenPointLight.position.set(0,l+e.height+.25,0),this.group.add(this.sirenPointLight)}else if(e.type==="sports_car"){const f=new J(e.width,o*.85,e.length),u=new L(f,t);u.position.y=l*.6+o*.85/2,u.castShadow=!0,this.group.add(u);const M=e.height*.55,v=e.length*.48,_=new ue({color:1118481}),P=new L(new J(e.width*.82,M,v),_);P.position.set(0,l*.6+o*.85+M/2,-e.length*.08),P.castShadow=!0,this.group.add(P);const b=new L(new Ye(e.width*.75,M*.8),s);b.rotation.x=-Math.PI*.22,b.position.set(0,l*.6+o*.85+M*.5,v/2-.05),this.group.add(b);const A=new ue({color:1118481});[-.45,.45].forEach(w=>{const x=new L(new J(.05,.35,.08),A);x.position.set(w,l*.6+e.height*.85,-e.length*.42),this.group.add(x)});const R=new L(new J(e.width*.95,.06,.35),A);R.position.set(0,l*.6+e.height*.85+.35,-e.length*.42),R.castShadow=!0,this.group.add(R)}else if(e.type==="garbage_truck"){const f=e.length*.36,u=e.height*.65,M=new ue({color:16777215}),v=new L(new J(e.width*.92,u,f),M);v.position.set(0,l+u/2,e.length*.28),v.castShadow=!0,this.group.add(v);const _=new L(new Ye(e.width*.78,u*.55),s);_.position.set(0,l+u*.6,e.length*.28+f/2+.01),this.group.add(_);const P=e.length*.62,b=new J(e.width,e.height*.85,P),A=new L(b,t);A.position.set(0,l+e.height*.85/2,-e.length*.16),A.castShadow=!0,this.group.add(A);const R=new ue({color:3622735}),w=new L(new J(e.width*.9,e.height*.45,.4),R);w.position.set(0,l+e.height*.25,-e.length*.47),this.group.add(w);const x=new Je(.14,.14,.14,12),C=new He({color:16757504,emissive:16748288,emissiveIntensity:1}),F=new L(x,C);F.position.set(0,l+u+.1,e.length*.28),this.group.add(F)}else if(e.type==="semi_truck"){const f=e.height*.85,u=new ue({color:13840175}),M=new L(new J(e.width*.92,f,3.2),u);M.position.set(0,l+f/2,e.length*.28),M.castShadow=!0,this.group.add(M);const v=new L(new Bi(e.width*.6,.6,4),u);v.rotation.y=Math.PI/4,v.position.set(0,l+f+.3,e.length*.3),this.group.add(v),[-e.width*.46,e.width*.46].forEach(C=>{const F=new L(new Je(.08,.08,1.8),a);F.position.set(C,l+f*.7,e.length*.16),this.group.add(F)});const _=new L(new J(e.width*.75,.8,.12),a);_.position.set(0,l+.6,e.length*.28+3.2/2+.01),this.group.add(_);const P=5.2,b=e.height*.95,A=new ue({color:e.color}),R=new L(new J(e.width,b,P),A);R.position.set(0,l+.25+b/2,-e.length*.22),R.castShadow=!0,this.group.add(R);const w=new L(new J(e.width+.02,.35,P*.9),new ue({color:16777215}));w.position.set(0,l+.25+b*.5,-e.length*.22),this.group.add(w);const x=new L(new Ye(e.width*.8,f*.4),s);x.position.set(0,l+f*.68,e.length*.28+3.2/2+.01),this.group.add(x)}else if(e.type==="minivan"){const f=new L(new J(e.width,o,e.length),t);f.position.y=l+o/2,f.castShadow=!0,this.group.add(f);const u=e.height*.55,M=e.length*.72,v=new L(new J(e.width*.92,u,M),t);v.position.set(0,l+o+u/2,-e.length*.08),v.castShadow=!0,this.group.add(v);const _=new L(new J(e.width*.82,.18,.08),new ue({color:3622735}));_.position.set(0,l+o*.65,e.length/2+.01),this.group.add(_);const P=new L(new Ye(e.width*.84,u*.75),s);P.rotation.x=-Math.PI*.12,P.position.set(0,l+o+u*.48,M/2-.05),this.group.add(P),[-1,1].forEach(A=>{const R=new L(new Ye(M*.85,u*.6),n);R.rotation.y=A*Math.PI/2,R.position.set(A*(e.width*.46+.01),l+o+u*.52,-e.length*.08),this.group.add(R)});const b=new L(new J(e.width*.85,.08,.25),t);b.position.set(0,l+e.height+.04,-e.length*.44),this.group.add(b)}else if(e.type==="kei_car"){const f=new L(new J(e.width,o,e.length),t);f.position.y=l+o/2,f.castShadow=!0,this.group.add(f);const u=e.height*.55,M=e.length*.75,v=new L(new J(e.width*.94,u,M),t);v.position.set(0,l+o+u/2,-e.length*.06),v.castShadow=!0,this.group.add(v);const _=new ue({color:1710618});[-1,1].forEach(A=>{const R=new L(new J(.08,u*.8,.12),_);R.position.set(A*(e.width*.47),l+o+u*.5,M*.4),this.group.add(R)});const P=new L(new J(e.width*.76,.22,.06),a);P.position.set(0,l+o*.7,e.length/2+.01),this.group.add(P);const b=new L(new Ye(e.width*.84,u*.75),s);b.rotation.x=-Math.PI*.06,b.position.set(0,l+o+u*.5,M/2+.01),this.group.add(b),[-1,1].forEach(A=>{const R=new L(new Ye(M*.88,u*.65),n);R.rotation.y=A*Math.PI/2,R.position.set(A*(e.width*.47+.01),l+o+u*.52,-e.length*.06),this.group.add(R)})}else if(e.type==="kei_truck"){const f=e.length*.42,u=e.height*.7,M=new L(new J(e.width,u,f),t);M.position.set(0,l+u/2,e.length*.26),M.castShadow=!0,this.group.add(M);const v=new L(new Ye(e.width*.82,u*.5),s);v.position.set(0,l+u*.65,e.length*.26+f/2+.01),this.group.add(v);const _=e.length*.54,P=new ue({color:11583173}),b=new L(new J(e.width,.12,_),P);b.position.set(0,l+.35,-e.length*.2),b.castShadow=!0,this.group.add(b);const A=new ue({color:14737632}),R=new L(new J(.06,.35,_),A);R.position.set(e.width/2-.03,l+.52,-e.length*.2),this.group.add(R);const w=new L(new J(.06,.35,_),A);w.position.set(-e.width/2+.03,l+.52,-e.length*.2),this.group.add(w);const x=new L(new J(e.width,.35,.06),A);x.position.set(0,l+.52,-e.length*.2-_/2),this.group.add(x)}else if(e.type==="suv"){const f=new L(new J(e.width,o*1.1,e.length),t);f.position.y=l+.08+o*1.1/2,f.castShadow=!0,this.group.add(f);const u=e.height*.52,M=e.length*.65,v=new L(new J(e.width*.88,u,M),t);v.position.set(0,l+.08+o*1.1+u/2,-e.length*.06),v.castShadow=!0,this.group.add(v);const _=new ue({color:2171169}),P=new L(new J(e.width*1.02,.15,e.length*1.01),_);P.position.set(0,l+.1,0),this.group.add(P);const b=new ue({color:4342338});[-e.width*.36,e.width*.36].forEach(R=>{const w=new L(new J(.08,.08,M*.85),b);w.position.set(R,l+.08+e.height+.04,-e.length*.06),this.group.add(w)});const A=new L(new Ye(e.width*.78,u*.7),s);A.rotation.x=-Math.PI*.14,A.position.set(0,l+.08+o*1.1+u*.5,M/2-.04),this.group.add(A)}else if(e.type==="bus"){const f=e.height*.55,u=new L(new J(e.width,o,e.length),t);u.position.y=l+o/2,this.group.add(u);const M=new L(new J(e.width*.96,f,e.length*.96),t);M.position.set(0,l+o+f/2,0),M.castShadow=!0,this.group.add(M);const v=new L(new Ye(e.width*.85,f*.7),s);v.position.set(0,l+o+f*.5,e.length*.48+.01),this.group.add(v)}else if(e.type==="truck"){const f=e.length*.35,u=e.height*.55,M=new L(new J(e.width*.9,u,f),t);M.position.set(0,l+o+u/2,e.length*.28),M.castShadow=!0,this.group.add(M);const v=new L(new Ye(e.width*.75,u*.6),s);v.position.set(0,l+o+u*.5,e.length*.28+f/2+.01),this.group.add(v);const _=new L(new J(e.width,e.height*.8,e.length*.58),new ue({color:15527921}));_.position.set(0,l+e.height*.4,-e.length*.18),_.castShadow=!0,this.group.add(_)}else{const f=new L(new J(e.width,o,e.length),t);f.position.y=l+o/2,f.castShadow=!0,this.group.add(f);const u=e.height*.55,M=e.length*.55,v=new L(new J(e.width*.88,u,M),t);v.position.set(0,l+o+u/2,-e.length*.05),v.castShadow=!0,this.group.add(v);const _=new L(new Ye(e.width*.78,u*.75),s);_.position.set(0,l+o+u*.5,M/2+.02),this.group.add(_)}const c=new zi(.16,12),h=new Rt({color:16776679}),d=new Rt({color:13959168});[-e.width*.35,e.width*.35].forEach(f=>{const u=new L(c,h);u.position.set(f,.55,e.length/2+.02),this.group.add(u);const M=new L(c,d);M.rotation.y=Math.PI,M.position.set(f,.55,-e.length/2-.02),this.group.add(M)});const p=new Ft(16776679,.8,10);p.position.set(0,.6,e.length/2+.5),this.group.add(p),this.headlights.push(p);let m=.32;(e.type==="suv"||e.type==="semi_truck")&&(m=.38),(e.type==="kei_truck"||e.type==="kei_car"||e.type==="sports_car")&&(m=.28);const g=new Je(m,m,.18,16);g.rotateZ(Math.PI/2);let S=[-e.length*.32,e.length*.32];e.type==="semi_truck"&&(S=[e.length*.36,-e.length*.22,-e.length*.38]),S.forEach(f=>{const u=new L(g,i);u.position.set(e.width/2+.06,m,f),u.castShadow=!0,this.group.add(u),this.wheels.push(u);const M=new L(g,i);M.position.set(-e.width/2-.06,m,f),M.castShadow=!0,this.group.add(M),this.wheels.push(M)})}update(e){if(this.sirenLight&&this.sirenPointLight){const i=Math.sin(Date.now()*.012);this.sirenPointLight.intensity=i>0?1.8:.2}const t=this.speed*e/.32;this.wheels.forEach(i=>{i.rotation.x+=t})}updateLookingAnimation(e){const t=Math.sin(e*Math.PI*4)*.12;this.group.rotation.y=this.initialYRotation+t}resetLookingAnimation(){this.group.rotation.y=this.initialYRotation}}class Em{constructor(e,t){j(this,"scene"),j(this,"soundEngine"),j(this,"vehicles",[]),j(this,"vehicleTypes",["sports_car","garbage_truck","semi_truck","kei_car","minivan","kei_truck","suv","ambulance","fire_engine","police","bus","truck","sedan"]),j(this,"typeIndex",0),j(this,"laneToggle",!1),j(this,"STOP_LINE_Z",6.4),this.scene=e,this.soundEngine=t}spawnVehicle(e){let t;e!==void 0?t=e:(this.laneToggle=!this.laneToggle,t=this.laneToggle?1:-1);const i=t===1?-2.2:2.2,s=65*t;if(this.vehicles.some(o=>o.direction===t&&Math.abs(o.group.position.z-s)<o.length+3))return null;const n=this.vehicleTypes[this.typeIndex];this.typeIndex=(this.typeIndex+1)%this.vehicleTypes.length;const a=new wm(n,t,i);return a.group.position.set(i,0,s),this.scene.add(a.group),this.vehicles.push(a),this.soundEngine.playCarHorn(),a}getVehicleDisplayName(e){return{sports_car:"スポーツカー 🏎️",garbage_truck:"ゴミ収集車（パッカー車）🗑️",semi_truck:"トレーラートラック 🚛",kei_car:"軽自動車（けいじどうしゃ）🚗",minivan:"ミニバン 🚐",kei_truck:"軽トラック（けいトラ）🛻",suv:"SUV 🚙",ambulance:"救急車（きゅうきゅうしゃ）🚑",fire_engine:"消防車（しょうぼうしゃ）🚒",police:"パトカー 🚓",bus:"バス 🚌",truck:"トラック 🚚",sedan:"乗用車（セダン）🚗"}[e]||"くるま 🚗"}update(e,t){const i=this.vehicles.filter(n=>n.direction===1).sort((n,a)=>n.group.position.z-a.group.position.z),s=this.vehicles.filter(n=>n.direction===-1).sort((n,a)=>a.group.position.z-n.group.position.z);this.updateLaneQueue(i,e,t),this.updateLaneQueue(s,e,t);for(let n=this.vehicles.length-1;n>=0;n--){const a=this.vehicles[n];Math.abs(a.group.position.z)>75&&(this.scene.remove(a.group),this.vehicles.splice(n,1))}}updateLaneQueue(e,t,i){for(let s=0;s<e.length;s++){const n=e[s],a=s>0?e[s-1]:null;let o=999;a&&(n.direction===1?o=n.group.position.z-a.group.position.z-(n.length/2+a.length/2):o=a.group.position.z-n.group.position.z-(n.length/2+a.length/2));const l=n.direction===1?n.group.position.z-this.STOP_LINE_Z:-this.STOP_LINE_Z-n.group.position.z;switch(n.state){case"approaching":if(o<4)n.targetSpeed=0;else if(l>0&&l<8){const d=l/8;n.targetSpeed=Math.max(1.5,9*d),l<=.3&&(n.speed=0,n.targetSpeed=0,n.state="stopping_at_line",n.stopWaitTimer=1.4,n.lookTimer=0)}else n.targetSpeed=9.5;break;case"stopping_at_line":n.speed=0,n.targetSpeed=0,n.stopWaitTimer-=t,n.lookTimer+=t;const h=Math.min(1,n.lookTimer/1.4);n.updateLookingAnimation(h),n.stopWaitTimer<=0&&(n.resetLookingAnimation(),i?(n.state="crossing",n.targetSpeed=8.5):n.state="waiting_crossing");break;case"waiting_crossing":n.speed=0,n.targetSpeed=0,i&&o>4&&(n.state="crossing",n.targetSpeed=8.5);break;case"crossing":o<4?n.targetSpeed=0:n.targetSpeed=9,(n.direction===1&&n.group.position.z<-5||n.direction===-1&&n.group.position.z>5)&&(n.state="exiting");break;case"exiting":o<4?n.targetSpeed=0:n.targetSpeed=10;break}n.speed<n.targetSpeed?n.speed=Math.min(n.targetSpeed,n.speed+12*t):n.speed>n.targetSpeed&&(n.speed=Math.max(n.targetSpeed,n.speed-22*t));const c=n.speed*t*-n.direction;n.group.position.z+=c,n.update(t)}}}class Tm{constructor(e,t,i){j(this,"crossingModel"),j(this,"trainManager"),j(this,"soundEngine"),j(this,"state","IDLE"),j(this,"stateTimer",0),this.crossingModel=e,this.trainManager=t,this.soundEngine=i}isSafeForCars(){return this.state==="IDLE"&&this.crossingModel.isBarrierFullyUp()}triggerCrossingSequence(){return this.state!=="IDLE"?!1:(this.state="WARNING",this.stateTimer=1.8,this.crossingModel.setBlinking(!0),this.soundEngine.startCrossingAlarm(),!0)}update(e){switch(this.crossingModel.update(e),this.state){case"IDLE":break;case"WARNING":this.stateTimer-=e,this.stateTimer<=0&&(this.state="LOWERING_BARRIER",this.crossingModel.setTargetBarrierAngle(!0),this.soundEngine.playBarrierMotor());break;case"LOWERING_BARRIER":if(this.crossingModel.isBarrierFullyDown()){this.state="TRAIN_PASSING";const t=this.trainManager.spawnTrain();this.crossingModel.setTrainDirection(t.direction)}break;case"TRAIN_PASSING":this.trainManager.isTrainRunning()||(this.state="RAISING_BARRIER",this.crossingModel.setTargetBarrierAngle(!1),this.crossingModel.setTrainDirection(0),this.soundEngine.playBarrierMotor());break;case"RAISING_BARRIER":this.crossingModel.isBarrierFullyUp()&&(this.state="CLEARING",this.stateTimer=.4);break;case"CLEARING":this.stateTimer-=e,this.stateTimer<=0&&(this.crossingModel.setBlinking(!1),this.soundEngine.stopCrossingAlarm(),this.state="IDLE");break}}}class bm{constructor(e,t,i,s,n,a){j(this,"camera"),j(this,"crossingController"),j(this,"trafficManager"),j(this,"crossingModel"),j(this,"envModel"),j(this,"soundEngine"),j(this,"raycaster"),j(this,"pointer"),j(this,"tapEffectsLayer"),j(this,"guideTextEl"),j(this,"guideTimer",null),this.camera=e,this.crossingController=t,this.trafficManager=i,this.crossingModel=s,this.envModel=n,this.soundEngine=a,this.raycaster=new fm,this.pointer=new _e,this.tapEffectsLayer=document.getElementById("tap-effects-layer"),this.guideTextEl=document.getElementById("guide-text"),this.setupListeners()}setupListeners(){const e=(t,i,s)=>{if(s&&(s.closest("button")||s.closest(".start-overlay")))return;if(this.pointer.x=t/window.innerWidth*2-1,this.pointer.y=-(i/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.crossingModel.clickableMeshes,!0).length>0){this.createTapEffect(t,i,"⭐"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence()&&this.showGuideMessage("カンカンカン！でんしゃが くるよ！🚃");return}const n=this.raycaster.intersectObjects(this.envModel.roadMeshes,!0);if(n.length>0){const o=n[0].point.z>0?1:-1;this.createTapEffect(t,i,"✨"),this.soundEngine.playTapSound();const l=this.trafficManager.spawnVehicle(o);if(l){const c=this.trafficManager.getVehicleDisplayName(l.type);this.showGuideMessage(`${c} が きたよ！`)}return}const a=this.raycaster.intersectObject(this.envModel.group,!0);if(a.length>0){const o=a[0].point;if(Math.abs(o.x)<8&&Math.abs(o.z)<8)this.createTapEffect(t,i,"⚠️"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence(),this.showGuideMessage("カンカンカン！ふみきり スタート！🚊");else if(Math.abs(o.x)<10){this.createTapEffect(t,i,"🚙"),this.soundEngine.playTapSound();const l=o.z>0?1:-1,c=this.trafficManager.spawnVehicle(l);if(c){const h=this.trafficManager.getVehicleDisplayName(c.type);this.showGuideMessage(`${h} が はしるよ！`)}}}};window.addEventListener("click",t=>{e(t.clientX,t.clientY,t.target)}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const i=t.changedTouches[0];e(i.clientX,i.clientY,t.target)}},{passive:!0})}showGuideMessage(e,t=3e3){this.guideTextEl&&(this.guideTextEl.textContent=e,this.guideTimer!==null&&clearTimeout(this.guideTimer),this.guideTimer=window.setTimeout(()=>{this.guideTextEl&&(this.guideTextEl.textContent="ふみきり や どうろ を タップしてみてね！")},t))}createTapEffect(e,t,i){if(!this.tapEffectsLayer)return;const s=document.createElement("div");s.className="tap-star",s.textContent=i,s.style.left=`${e}px`,s.style.top=`${t}px`;const n=document.createElement("div");n.className="tap-ripple",n.style.left=`${e}px`,n.style.top=`${t}px`,this.tapEffectsLayer.appendChild(s),this.tapEffectsLayer.appendChild(n),setTimeout(()=>{s.remove(),n.remove()},700)}}class Am{constructor(e,t,i,s,n,a,o){j(this,"soundEngine"),j(this,"crossingController"),j(this,"trafficManager"),j(this,"cameraController"),j(this,"sceneManager"),j(this,"envModel"),j(this,"interactionManager"),this.soundEngine=e,this.crossingController=t,this.trafficManager=i,this.cameraController=s,this.sceneManager=n,this.envModel=a,this.interactionManager=o,this.bindEvents()}bindEvents(){const e=document.getElementById("btn-start"),t=document.getElementById("start-overlay");e&&t&&e.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),t.classList.add("hidden"),this.interactionManager.showGuideMessage("ようこそ！ふみきり や どうろ を タップしてみてね！")});const i=document.getElementById("btn-train");i&&i.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),this.crossingController.state==="IDLE"?(this.crossingController.triggerCrossingSequence(),this.interactionManager.showGuideMessage("でんしゃ が くるよ！カンカンカン！🚃")):this.interactionManager.showGuideMessage("まもなく でんしゃ が つうか します！⚠️")});const s=document.getElementById("btn-car");s&&s.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const c=Math.random()>.5?1:-1,h=this.trafficManager.spawnVehicle(c);if(h){const d=this.trafficManager.getVehicleDisplayName(h.type);this.interactionManager.showGuideMessage(`${d} が はしりだしたよ！`)}else this.interactionManager.showGuideMessage("くるま が いっぱい はしっているよ！🚗")});const n=document.getElementById("btn-camera");if(n){const c={overview:"全体",crossing_close:"ふみきり",driver_view:"運転手",train_follow:"電車追尾"};n.addEventListener("click",()=>{this.soundEngine.playTapSound();const h=this.cameraController.cyclePreset(),d=n.querySelector(".sub-label");d&&(d.textContent=c[h]||"カメラ"),this.interactionManager.showGuideMessage(`カメラ: ${c[h]} ビュー 🎥`)})}const a=document.getElementById("btn-time");a&&a.addEventListener("click",()=>{this.soundEngine.playTapSound();const c=this.sceneManager.cycleTimeOfDay(),h=a.querySelector(".btn-icon"),d=a.querySelector(".btn-subtext");this.envModel.setNightMode(c==="night"),c==="day"?(h&&(h.textContent="☀️"),d&&(d.textContent="ひる"),this.interactionManager.showGuideMessage("あかるい おひる になったよ！☀️")):c==="sunset"?(h&&(h.textContent="🌅"),d&&(d.textContent="ゆうがた"),this.interactionManager.showGuideMessage("きれいな ゆうやけ だね！🌅")):(h&&(h.textContent="🌙"),d&&(d.textContent="よる"),this.interactionManager.showGuideMessage("おうちの まど に あかり が ともったよ！🏠✨"))});const o=document.getElementById("btn-sound-type");o&&o.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const c=[{id:"standard_electronic",label:"ひょうじゅん",icon:"🔔",name:"日本の標準的な単音電子警報音（700Hz）"},{id:"soft_electronic",label:"やさしい音",icon:"🎵",name:"やわらかい単音電子音（650Hz）"},{id:"mechanical_bell",label:"でんれい式",icon:"🔕",name:"懐かしい電鈴式（鐘の音）"}],h=c.findIndex(g=>g.id===this.soundEngine.currentSoundType),d=c[(h+1)%c.length];this.soundEngine.currentSoundType=d.id;const p=o.querySelector(".btn-icon"),m=o.querySelector(".btn-subtext");p&&(p.textContent=d.icon),m&&(m.textContent=d.label),this.interactionManager.showGuideMessage(`ふみきりの音: ${d.name}`)});const l=document.getElementById("btn-sound");l&&l.addEventListener("click",()=>{const c=!this.soundEngine.getIsMuted();this.soundEngine.setMuted(c);const h=l.querySelector(".btn-icon"),d=l.querySelector(".btn-subtext");c?(h&&(h.textContent="🔇"),d&&(d.textContent="ミュート"),this.interactionManager.showGuideMessage("おと を けしたよ 🔇")):(this.soundEngine.playTapSound(),h&&(h.textContent="🔊"),d&&(d.textContent="おと ON"),this.interactionManager.showGuideMessage("おと を だしたよ 🔊"))})}}class Rm{constructor(){j(this,"sceneManager"),j(this,"cameraController"),j(this,"soundEngine"),j(this,"envModel"),j(this,"crossingModel"),j(this,"trainManager"),j(this,"trafficManager"),j(this,"crossingController"),j(this,"interactionManager"),j(this,"clock"),j(this,"idleCrossingTimer",0),j(this,"IDLE_CROSSING_INTERVAL",180),j(this,"idleCarTimer",0),j(this,"IDLE_CAR_INTERVAL",30),j(this,"animate",()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);if(this.idleCrossingTimer+=t,this.idleCrossingTimer>=this.IDLE_CROSSING_INTERVAL&&(this.idleCrossingTimer=0,this.crossingController.state==="IDLE"&&(this.soundEngine.init(),this.crossingController.triggerCrossingSequence(),this.interactionManager.showGuideMessage("カンカンカン！でんしゃ が くるよ！🚊"))),this.idleCarTimer+=t,this.idleCarTimer>=this.IDLE_CAR_INTERVAL&&(this.idleCarTimer=0,this.trafficManager.vehicles.length<6)){const n=this.trafficManager.spawnVehicle();if(n){const a=this.trafficManager.getVehicleDisplayName(n.type);this.interactionManager.showGuideMessage(`${a} が はしってきたよ！🚗`)}}const i=this.crossingController.isSafeForCars();this.crossingController.update(t),this.trainManager.update(t),this.trafficManager.update(t,i);const s=this.trainManager.activeTrain?this.trainManager.activeTrain.posX:void 0;this.cameraController.update(t,s),this.sceneManager.renderer.render(this.sceneManager.scene,this.cameraController.camera)});const e=document.getElementById("canvas-container");this.sceneManager=new gm(e),this.cameraController=new _m,this.soundEngine=new vm,this.envModel=new xm,this.sceneManager.scene.add(this.envModel.group),this.crossingModel=new Mm,this.sceneManager.scene.add(this.crossingModel.group),this.trainManager=new ym(this.sceneManager.scene,this.soundEngine),this.trafficManager=new Em(this.sceneManager.scene,this.soundEngine),this.crossingController=new Tm(this.crossingModel,this.trainManager,this.soundEngine),this.interactionManager=new bm(this.cameraController.camera,this.crossingController,this.trafficManager,this.crossingModel,this.envModel,this.soundEngine),new Am(this.soundEngine,this.crossingController,this.trafficManager,this.cameraController,this.sceneManager,this.envModel,this.interactionManager),this.clock=new pm,window.addEventListener("pointerdown",()=>{this.idleCrossingTimer=0}),setTimeout(()=>{this.trafficManager.spawnVehicle(1)},600),setTimeout(()=>{this.trafficManager.spawnVehicle(-1)},2500),this.animate()}}window.addEventListener("DOMContentLoaded",()=>{new Rm});
