var Cc=Object.defineProperty;var Rc=(i,t,e)=>t in i?Cc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $=(i,t,e)=>Rc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="170",Pc=0,Co=1,Lc=2,Ba=1,za=2,an=3,wn=0,Ae=1,Je=2,yn=0,oi=1,Ro=2,Po=3,Lo=4,Ic=5,Nn=100,Dc=101,Uc=102,Nc=103,Fc=104,Oc=200,Bc=201,zc=202,Gc=203,ur=204,dr=205,kc=206,Hc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,Zc=213,Jc=214,fr=0,pr=1,mr=2,hi=3,gr=4,_r=5,vr=6,xr=7,no=0,$c=1,Kc=2,En=0,jc=1,Qc=2,tl=3,Ga=4,el=5,nl=6,il=7,ka=300,ui=301,di=302,Mr=303,Sr=304,Es=306,yr=1e3,On=1001,Er=1002,Xe=1003,sl=1004,Xi=1005,$e=1006,Ps=1007,Bn=1008,dn=1009,Ha=1010,Va=1011,Fi=1012,io=1013,Gn=1014,cn=1015,Gi=1016,so=1017,ro=1018,fi=1020,Wa=35902,Xa=1021,qa=1022,We=1023,Ya=1024,Za=1025,ai=1026,pi=1027,Ja=1028,oo=1029,$a=1030,ao=1031,co=1033,ms=33776,gs=33777,_s=33778,vs=33779,wr=35840,Tr=35841,br=35842,Ar=35843,Cr=36196,Rr=37492,Pr=37496,Lr=37808,Ir=37809,Dr=37810,Ur=37811,Nr=37812,Fr=37813,Or=37814,Br=37815,zr=37816,Gr=37817,kr=37818,Hr=37819,Vr=37820,Wr=37821,xs=36492,Xr=36494,qr=36495,Ka=36283,Yr=36284,Zr=36285,Jr=36286,rl=3200,ol=3201,lo=0,al=1,Sn="",Ne="srgb",gi="srgb-linear",ws="linear",ne="srgb",Wn=7680,Io=519,cl=512,ll=513,hl=514,ja=515,ul=516,dl=517,fl=518,pl=519,Do=35044,Uo="300 es",ln=2e3,Ss=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,$r=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function ml(i,t){return(i%t+t)%t}function Is(i,t,e){return(1-e)*i+e*t}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],E=s[0],p=s[3],u=s[6],M=s[1],x=s[4],_=s[7],P=s[2],A=s[5],T=s[8];return r[0]=o*E+a*M+c*P,r[3]=o*p+a*x+c*A,r[6]=o*u+a*_+c*T,r[1]=l*E+h*M+d*P,r[4]=l*p+h*x+d*A,r[7]=l*u+h*_+d*T,r[2]=f*E+m*M+g*P,r[5]=f*p+m*x+g*A,r[8]=f*u+m*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return t[0]=d*E,t[1]=(s*l-h*n)*E,t[2]=(a*n-s*o)*E,t[3]=f*E,t[4]=(h*e-s*c)*E,t[5]=(s*r-a*e)*E,t[6]=m*E,t[7]=(n*c-l*e)*E,t[8]=(o*e-n*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new zt;function Qa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gl(){const i=ys("canvas");return i.style.display="block",i}const No={};function Ri(i){i in No||(No[i]=!0,console.warn(i))}function _l(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=un(i.r),i.g=un(i.g),i.b=un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fo=[.64,.33,.3,.6,.15,.06],Oo=[.2126,.7152,.0722],Bo=[.3127,.329],zo=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[gi]:{primaries:Fo,whitePoint:Bo,transfer:ws,toXYZ:zo,fromXYZ:Go,luminanceCoefficients:Oo,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Fo,whitePoint:Bo,transfer:ne,toXYZ:zo,fromXYZ:Go,luminanceCoefficients:Oo,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Xn;class Ml{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=ys("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sl=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Us(s[o].image)):r.push(Us(s[o]))}else r=Us(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yl=0;class Ce extends _i{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=On,s=On,r=$e,o=Bn,a=We,c=dn,l=Ce.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=vi(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=ka;Ce.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],E=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-E)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+E)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(m+1)/2,P=(u+1)/2,A=(h+f)/4,T=(d+E)/4,C=(g+p)/4;return x>_&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=T/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-E)*(d-E)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-E)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class El extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends El{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ec extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],E=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=E;return}if(d!==E||c!==f||l!==m||h!==g){let p=1-a;const u=c*f+l*m+h*g+d*E,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,u*M);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const _=a*M;if(c=c*p+f*_,l=l*p+m*_,h=h*p+g*_,d=d*p+E*_,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-a*m,t[e+2]=l*g+h*m+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new L,ko=new ki;class Hi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Yi.subVectors(this.max,wi),qn.subVectors(t.a,wi),Yn.subVectors(t.b,wi),Zn.subVectors(t.c,wi),mn.subVectors(Yn,qn),gn.subVectors(Zn,Yn),An.subVectors(qn,Zn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-An.z,An.y,mn.z,0,-mn.x,gn.z,0,-gn.x,An.z,0,-An.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-An.y,An.x,0];return!Fs(e,qn,Yn,Zn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,qn,Yn,Zn,Yi))?!1:(Zi.crossVectors(mn,gn),e=[Zi.x,Zi.y,Zi.z],Fs(e,qn,Yn,Zn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],Ge=new L,qi=new Hi,qn=new L,Yn=new L,Zn=new L,mn=new L,gn=new L,An=new L,wi=new L,Yi=new L,Zi=new L,Cn=new L;function Fs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cn.fromArray(i,r);const a=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Tl=new Hi,Ti=new L,Os=new L;class ho{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ti.subVectors(t,this.center);const e=Ti.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ti,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ti.copy(t.center).add(Os)),this.expandByPoint(Ti.copy(t.center).sub(Os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,Bs=new L,Ji=new L,_n=new L,zs=new L,$i=new L,Gs=new L;class nc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bs.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Bs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ji),a=_n.dot(this.direction),c=-_n.dot(Ji),l=_n.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const E=1/h;d*=E,f*=E,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bs).addScaledVector(Ji,f),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){zs.subVectors(e,t),$i.subVectors(n,t),Gs.crossVectors(zs,$i);let o=this.direction.dot(Gs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,t);const c=a*this.direction.dot($i.crossVectors(_n,$i));if(c<0)return null;const l=a*this.direction.dot(zs.cross(_n));if(l<0||c+l>o)return null;const h=-a*_n.dot(Gs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,d,f,m,g,E,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,m,g,E,p)}set(t,e,n,s,r,o,a,c,l,h,d,f,m,g,E,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=E,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=a*h,E=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-E*l,e[9]=-a*c,e[2]=E-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=l*h,E=l*d;e[0]=f+E*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=E+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=l*h,E=l*d;e[0]=f-E*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=E-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=a*h,E=a*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+E,e[1]=c*d,e[5]=E*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,E=a*l;e[0]=c*h,e[4]=E-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-E*d}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,E=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+E,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=E*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bl,t,Al)}lookAt(t,e,n){const s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),vn.crossVectors(n,Pe),vn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),vn.crossVectors(n,Pe)),vn.normalize(),Ki.crossVectors(Pe,vn),s[0]=vn.x,s[4]=Ki.x,s[8]=Pe.x,s[1]=vn.y,s[5]=Ki.y,s[9]=Pe.y,s[2]=vn.z,s[6]=Ki.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],E=n[6],p=n[10],u=n[14],M=n[3],x=n[7],_=n[11],P=n[15],A=s[0],T=s[4],C=s[8],y=s[12],v=s[1],R=s[5],O=s[9],B=s[13],X=s[2],J=s[6],W=s[10],j=s[14],H=s[3],ot=s[7],mt=s[11],Mt=s[15];return r[0]=o*A+a*v+c*X+l*H,r[4]=o*T+a*R+c*J+l*ot,r[8]=o*C+a*O+c*W+l*mt,r[12]=o*y+a*B+c*j+l*Mt,r[1]=h*A+d*v+f*X+m*H,r[5]=h*T+d*R+f*J+m*ot,r[9]=h*C+d*O+f*W+m*mt,r[13]=h*y+d*B+f*j+m*Mt,r[2]=g*A+E*v+p*X+u*H,r[6]=g*T+E*R+p*J+u*ot,r[10]=g*C+E*O+p*W+u*mt,r[14]=g*y+E*B+p*j+u*Mt,r[3]=M*A+x*v+_*X+P*H,r[7]=M*T+x*R+_*J+P*ot,r[11]=M*C+x*O+_*W+P*mt,r[15]=M*y+x*B+_*j+P*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],E=t[7],p=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*m-n*c*m)+E*(+e*c*m-e*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+e*l*d-e*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],E=t[13],p=t[14],u=t[15],M=d*p*l-E*f*l+E*c*m-a*p*m-d*c*u+a*f*u,x=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,_=h*E*l-g*d*l+g*a*m-o*E*m-h*a*u+o*d*u,P=g*d*c-h*E*c-g*a*f+o*E*f+h*a*p-o*d*p,A=e*M+n*x+s*_+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=M*T,t[1]=(E*f*r-d*p*r-E*s*m+n*p*m+d*s*u-n*f*u)*T,t[2]=(a*p*r-E*c*r+E*s*l-n*p*l-a*s*u+n*c*u)*T,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*m-n*c*m)*T,t[4]=x*T,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*u-e*c*u)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*m+e*c*m)*T,t[8]=_*T,t[9]=(g*d*r-h*E*r-g*n*m+e*E*m+h*n*u-e*d*u)*T,t[10]=(o*E*r-g*a*r+g*n*l-e*E*l-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*m-e*a*m)*T,t[12]=P*T,t[13]=(h*E*s-g*d*s+g*n*f-e*E*f-h*n*p+e*d*p)*T,t[14]=(g*a*s-o*E*s-g*n*c+e*E*c+o*n*p-e*a*p)*T,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,m=r*h,g=r*d,E=o*h,p=o*d,u=a*d,M=c*l,x=c*h,_=c*d,P=n.x,A=n.y,T=n.z;return s[0]=(1-(E+u))*P,s[1]=(m+_)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-_)*A,s[5]=(1-(f+u))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(p-M)*T,s[10]=(1-(f+E))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ke.copy(this);const l=1/r,h=1/o,d=1/a;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=d,ke.elements[9]*=d,ke.elements[10]*=d,e.setFromRotationMatrix(ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ln){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(a===ln)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ln){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*l,m=(n+s)*h;let g,E;if(a===ln)g=(o+r)*d,E=-2*d;else if(a===Ss)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=E,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new L,ke=new le,bl=new L(0,0,0),Al=new L(1,1,1),vn=new L,Ki=new L,Pe=new L,Ho=new le,Vo=new ki;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cl=0;const Wo=new L,$n=new ki,sn=new le,ji=new L,bi=new L,Rl=new L,Pl=new ki,Xo=new L(1,0,0),qo=new L(0,1,0),Yo=new L(0,0,1),Zo={type:"added"},Ll={type:"removed"},Kn={type:"childadded",child:null},ks={type:"childremoved",child:null};class ve extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new L,e=new qe,n=new ki,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(bi,ji,this.up):sn.lookAt(ji,bi,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(sn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ll),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,Rl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Pl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new L,rn=new L,Hs=new L,on=new L,jn=new L,Qn=new L,Jo=new L,Vs=new L,Ws=new L,Xs=new L,qs=new ie,Ys=new ie,Zs=new ie;class Ve{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),He.subVectors(t,e),s.cross(He);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){He.subVectors(s,e),rn.subVectors(n,e),Hs.subVectors(t,e);const o=He.dot(He),a=He.dot(rn),c=He.dot(Hs),l=rn.dot(rn),h=rn.dot(Hs),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qs.setScalar(0),Ys.setScalar(0),Zs.setScalar(0),qs.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qs,r.x),o.addScaledVector(Ys,r.y),o.addScaledVector(Zs,r.z),o}static isFrontFacing(t,e,n,s){return He.subVectors(n,e),rn.subVectors(t,e),He.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),He.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;jn.subVectors(s,n),Qn.subVectors(r,n),Vs.subVectors(t,n);const c=jn.dot(Vs),l=Qn.dot(Vs);if(c<=0&&l<=0)return e.copy(n);Ws.subVectors(t,s);const h=jn.dot(Ws),d=Qn.dot(Ws);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(jn,o);Xs.subVectors(t,r);const m=jn.dot(Xs),g=Qn.dot(Xs);if(g>=0&&m<=g)return e.copy(r);const E=m*l-c*g;if(E<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Qn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Jo.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Jo,a);const u=1/(p+E+f);return o=E*u,a=f*u,e.copy(n).addScaledVector(jn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ml(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Js(o,r,t+1/3),this.g=Js(o,r,t),this.b=Js(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return qt.fromWorkingColorSpace(Se.copy(this),t),Math.round(_e(Se.r*255,0,255))*65536+Math.round(_e(Se.g*255,0,255))*256+Math.round(_e(Se.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ne){qt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Qi);const n=Is(xn.h,Qi.h,e),s=Is(xn.s,Qi.s,e),r=Is(xn.l,Qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ht;Ht.NAMES=ic;let Il=0;class xi extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=vi(),this.name="",this.blending=oi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=dr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class we extends xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,ts=new _t;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Do&&(t.usage=this.usage),t}}class sc extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rc extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dl=0;const Ue=new le,$s=new ve,ti=new L,Le=new Hi,Ai=new Hi,ge=new L;class Oe extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qa(t)?rc:sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Le.min,Ai.min),Le.expandByPoint(ge),ge.addVectors(Le.max,Ai.max),Le.expandByPoint(ge)):(Le.expandByPoint(Ai.min),Le.expandByPoint(Ai.max))}Le.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ge.fromBufferAttribute(a,l),c&&(ti.fromBufferAttribute(t,l),ge.add(ti)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;const l=new L,h=new L,d=new L,f=new _t,m=new _t,g=new _t,E=new L,p=new L;function u(C,y,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(E),a[y].add(E),a[v].add(E),c[C].add(p),c[y].add(p),c[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){const v=M[C],R=v.start,O=v.count;for(let B=R,X=R+O;B<X;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new L,_=new L,P=new L,A=new L;function T(C){P.fromBufferAttribute(s,C),A.copy(P);const y=a[C];x.copy(y),x.sub(P.multiplyScalar(P.dot(y))).normalize(),_.crossVectors(A,y);const R=_.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,y=M.length;C<y;++C){const v=M[C],R=v.start,O=v.count;for(let B=R,X=R+O;B<X;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),E=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let E=0,p=c.length;E<p;E++){a.isInterleavedBufferAttribute?m=c[E]*a.data.stride+a.offset:m=c[E]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Ke(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new le,Rn=new nc,es=new ho,Ko=new L,ns=new L,is=new L,ss=new L,Ks=new L,rs=new L,jo=new L,os=new L;class F extends ve{constructor(t=new Oe,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ks.fromBufferAttribute(d,t),o?rs.addScaledVector(Ks,h):rs.addScaledVector(Ks.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(es.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(es,Ko)===null||Rn.origin.distanceToSquared(Ko)>(t.far-t.near)**2))&&($o.copy(r).invert(),Rn.copy(t.ray).applyMatrix4($o),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=f.length;g<E;g++){const p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,P=x;_<P;_+=3){const A=a.getX(_),T=a.getX(_+1),C=a.getX(_+2);s=as(this,u,t,n,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let p=g,u=E;p<u;p+=3){const M=a.getX(p),x=a.getX(p+1),_=a.getX(p+2);s=as(this,o,t,n,l,h,d,M,x,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,E=f.length;g<E;g++){const p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,P=x;_<P;_+=3){const A=_,T=_+1,C=_+2;s=as(this,u,t,n,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let p=g,u=E;p<u;p+=3){const M=p,x=p+1,_=p+2;s=as(this,o,t,n,l,h,d,M,x,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ul(i,t,e,n,s,r,o,a){let c;if(t.side===Ae?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wn,a),c===null)return null;os.copy(a),os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:i}}function as(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ns),i.getVertexPosition(c,is),i.getVertexPosition(l,ss);const h=Ul(i,t,e,n,ns,is,ss,jo);if(h){const d=new L;Ve.getBarycoord(jo,ns,is,ss,d),s&&(h.uv=Ve.getInterpolatedAttribute(s,a,c,l,d,new _t)),r&&(h.uv1=Ve.getInterpolatedAttribute(r,a,c,l,d,new _t)),o&&(h.normal=Ve.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Ve.getNormal(ns,is,ss,f.normal),h.face=f,h.barycoord=d}return h}class nt extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function g(E,p,u,M,x,_,P,A,T,C,y){const v=_/T,R=P/C,O=_/2,B=P/2,X=A/2,J=T+1,W=C+1;let j=0,H=0;const ot=new L;for(let mt=0;mt<W;mt++){const Mt=mt*R-B;for(let Lt=0;Lt<J;Lt++){const Xt=Lt*v-O;ot[E]=Xt*M,ot[p]=Mt*x,ot[u]=X,l.push(ot.x,ot.y,ot.z),ot[E]=0,ot[p]=0,ot[u]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Lt/T),d.push(1-mt/C),j+=1}}for(let mt=0;mt<C;mt++)for(let Mt=0;Mt<T;Mt++){const Lt=f+Mt+J*mt,Xt=f+Mt+J*(mt+1),q=f+(Mt+1)+J*(mt+1),et=f+(Mt+1)+J*mt;c.push(Lt,Xt,et),c.push(Xt,q,et),H+=6}a.addGroup(m,H,y),m+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=mi(i[e]);for(const s in n)t[s]=n[s]}return t}function Nl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Fl={clone:mi,merge:Ee};var Ol=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ol,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=Nl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new L,Qo=new _t,ta=new _t;class Ie extends ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,ta),e.subVectors(ta,Qo)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class zl extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(ei,ni,t,e);s.layers=this.layers,this.add(s);const r=new Ie(ei,ni,t,e);r.layers=this.layers,this.add(r);const o=new Ie(ei,ni,t,e);o.layers=this.layers,this.add(o);const a=new Ie(ei,ni,t,e);a.layers=this.layers,this.add(a);const c=new Ie(ei,ni,t,e);c.layers=this.layers,this.add(c);const l=new Ie(ei,ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Ce{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gl extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nt(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:yn});r.uniforms.tEquirect.value=e;const o=new F(s,r),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=$e),new zl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const js=new L,kl=new L,Hl=new zt;class Dn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=js.subVectors(n,e).cross(kl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hl.getNormalMatrix(t),s=this.coplanarPoint(js).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new ho,cs=new L;class fo{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],E=s[10],p=s[11],u=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,p-m,_-u).normalize(),n[1].setComponents(c+r,f+l,p+m,_+u).normalize(),n[2].setComponents(c+o,f+h,p+g,_+M).normalize(),n[3].setComponents(c-o,f-h,p-g,_-M).normalize(),n[4].setComponents(c-a,f-d,p-E,_-x).normalize(),e===ln)n[5].setComponents(c+a,f+d,p+E,_+x).normalize();else if(e===Ss)n[5].setComponents(a,d,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cs.x=s.normal.x>0?t.max.x:t.min.x,cs.y=s.normal.y>0?t.max.y:t.min.y,cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vl(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],E=d[m];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++f,d[f]=E)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const E=d[m];i.bufferSubData(l,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Jt extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,m=[],g=[],E=[],p=[];for(let u=0;u<h;u++){const M=u*f-o;for(let x=0;x<l;x++){const _=x*d-r;g.push(_,-M,0),E.push(0,0,1),p.push(x/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<a;M++){const x=M+l*u,_=M+l*(u+1),P=M+1+l*(u+1),A=M+1+l*u;m.push(x,_,A),m.push(_,P,A)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(E,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xl=`#ifdef USE_ALPHAHASH
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
#endif`,ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$l=`#ifdef USE_AOMAP
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
#endif`,Kl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jl=`#ifdef USE_BATCHING
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
#endif`,Ql=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ih=`#ifdef USE_IRIDESCENCE
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fh=`#define PI 3.141592653589793
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
} // validated`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
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
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
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
#endif`,Hh=`struct PhysicalMaterial {
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
}`,Vh=`
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
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iu=`#if defined( USE_MORPHCOLORS )
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
#endif`,ru=`#ifdef USE_MORPHTARGETS
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
#endif`,ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lu=`#ifndef FLAT_SHADED
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
#endif`,fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pu=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Eu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Cu=`float getShadowMask() {
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
}`,Ru=`#ifdef USE_SKINNING
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
#endif`,Fu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ou=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vu=`varying vec2 vUv;
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
}`,qu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`#include <common>
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
}`,$u=`#if DEPTH_PACKING == 3200
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
}`,ju=`#define DISTANCE
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
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`uniform float scale;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,rd=`#define LAMBERT
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
}`,od=`#define LAMBERT
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
}`,ad=`#define MATCAP
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
}`,cd=`#define MATCAP
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
}`,ld=`#define NORMAL
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
}`,fd=`#define STANDARD
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
}`,pd=`#define STANDARD
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
}`,Gt={alphahash_fragment:Wl,alphahash_pars_fragment:Xl,alphamap_fragment:ql,alphamap_pars_fragment:Yl,alphatest_fragment:Zl,alphatest_pars_fragment:Jl,aomap_fragment:$l,aomap_pars_fragment:Kl,batching_pars_vertex:jl,batching_vertex:Ql,begin_vertex:th,beginnormal_vertex:eh,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:sh,clipping_planes_fragment:rh,clipping_planes_pars_fragment:oh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:ch,color_fragment:lh,color_pars_fragment:hh,color_pars_vertex:uh,color_vertex:dh,common:fh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,colorspace_fragment:Mh,colorspace_pars_fragment:Sh,envmap_fragment:yh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:wh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Fh,envmap_vertex:bh,fog_vertex:Ah,fog_pars_vertex:Ch,fog_fragment:Rh,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_pars_fragment:Ih,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Uh,lights_pars_begin:Nh,lights_toon_fragment:Oh,lights_toon_pars_fragment:Bh,lights_phong_fragment:zh,lights_phong_pars_fragment:Gh,lights_physical_fragment:kh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:Yh,logdepthbuf_pars_vertex:Zh,logdepthbuf_vertex:Jh,map_fragment:$h,map_pars_fragment:Kh,map_particle_fragment:jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:tu,metalnessmap_pars_fragment:eu,morphinstance_vertex:nu,morphcolor_vertex:iu,morphnormal_vertex:su,morphtarget_pars_vertex:ru,morphtarget_vertex:ou,normal_fragment_begin:au,normal_fragment_maps:cu,normal_pars_fragment:lu,normal_pars_vertex:hu,normal_vertex:uu,normalmap_pars_fragment:du,clearcoat_normal_fragment_begin:fu,clearcoat_normal_fragment_maps:pu,clearcoat_pars_fragment:mu,iridescence_pars_fragment:gu,opaque_fragment:_u,packing:vu,premultiplied_alpha_fragment:xu,project_vertex:Mu,dithering_fragment:Su,dithering_pars_fragment:yu,roughnessmap_fragment:Eu,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:bu,shadowmap_vertex:Au,shadowmask_pars_fragment:Cu,skinbase_vertex:Ru,skinning_pars_vertex:Pu,skinning_vertex:Lu,skinnormal_vertex:Iu,specularmap_fragment:Du,specularmap_pars_fragment:Uu,tonemapping_fragment:Nu,tonemapping_pars_fragment:Fu,transmission_fragment:Ou,transmission_pars_fragment:Bu,uv_pars_fragment:zu,uv_pars_vertex:Gu,uv_vertex:ku,worldpos_vertex:Hu,background_vert:Vu,background_frag:Wu,backgroundCube_vert:Xu,backgroundCube_frag:qu,cube_vert:Yu,cube_frag:Zu,depth_vert:Ju,depth_frag:$u,distanceRGBA_vert:Ku,distanceRGBA_frag:ju,equirect_vert:Qu,equirect_frag:td,linedashed_vert:ed,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:sd,meshlambert_vert:rd,meshlambert_frag:od,meshmatcap_vert:ad,meshmatcap_frag:cd,meshnormal_vert:ld,meshnormal_frag:hd,meshphong_vert:ud,meshphong_frag:dd,meshphysical_vert:fd,meshphysical_frag:pd,meshtoon_vert:md,meshtoon_frag:gd,points_vert:_d,points_frag:vd,shadow_vert:xd,shadow_frag:Md,sprite_vert:Sd,sprite_frag:yd},ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ee([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ee([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ee([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ee([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ee([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ee([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ee([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ee([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ee([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ee([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ee([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ee([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ee([ct.lights,ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ze.physical={uniforms:Ee([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ls={r:0,b:0,g:0},Ln=new qe,Ed=new le;function wd(i,t,e,n,s,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function E(M){let x=!1;const _=g(M);_===null?u(a,c):_&&_.isColor&&(u(_,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===Es)?(h===void 0&&(h=new F(new nt(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:mi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(x.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ed.makeRotationFromEuler(Ln)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==ne,(d!==_||f!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new F(new Jt(2,2),new Tn({name:"BackgroundMaterial",uniforms:mi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qt.getTransfer(_.colorSpace)!==ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,x){M.getRGB(ls,oc(i)),n.buffers.color.setClear(ls.r,ls.g,ls.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:E,addToRenderList:p}}function Td(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,R,O,B,X){let J=!1;const W=d(B,O,R);r!==W&&(r=W,l(r.object)),J=m(v,B,O,X),J&&g(v,B,O,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(v,R,O,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,R,O){const B=O.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let J=X[R.id];J===void 0&&(J={},X[R.id]=J);let W=J[B];return W===void 0&&(W=f(c()),J[B]=W),W}function f(v){const R=[],O=[],B=[];for(let X=0;X<e;X++)R[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:B,object:v,attributes:{},index:null}}function m(v,R,O,B){const X=r.attributes,J=R.attributes;let W=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){const mt=X[H];let Mt=J[H];if(Mt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(v,R,O,B){const X={},J=R.attributes;let W=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){let mt=J[H];mt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),X[H]=Mt,W++}r.attributes=X,r.attributesNum=W,r.index=B}function E(){const v=r.newAttributes;for(let R=0,O=v.length;R<O;R++)v[R]=0}function p(v){u(v,0)}function u(v,R){const O=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;O[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),X[v]!==R&&(i.vertexAttribDivisor(v,R),X[v]=R)}function M(){const v=r.newAttributes,R=r.enabledAttributes;for(let O=0,B=R.length;O<B;O++)R[O]!==v[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function x(v,R,O,B,X,J,W){W===!0?i.vertexAttribIPointer(v,R,O,X,J):i.vertexAttribPointer(v,R,O,B,X,J)}function _(v,R,O,B){E();const X=B.attributes,J=O.getAttributes(),W=R.defaultAttributeValues;for(const j in J){const H=J[j];if(H.location>=0){let ot=X[j];if(ot===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const mt=ot.normalized,Mt=ot.itemSize,Lt=t.get(ot);if(Lt===void 0)continue;const Xt=Lt.buffer,q=Lt.type,et=Lt.bytesPerElement,xt=q===i.INT||q===i.UNSIGNED_INT||ot.gpuType===io;if(ot.isInterleavedBufferAttribute){const dt=ot.data,Rt=dt.stride,It=ot.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)u(H.location+Ft,dt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)p(H.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Ft=0;Ft<H.locationSize;Ft++)x(H.location+Ft,Mt/H.locationSize,q,mt,Rt*et,(It+Mt/H.locationSize*Ft)*et,xt)}else{if(ot.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)u(H.location+dt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let dt=0;dt<H.locationSize;dt++)x(H.location+dt,Mt/H.locationSize,q,mt,Mt*et,Mt/H.locationSize*dt*et,xt)}}else if(W!==void 0){const mt=W[j];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(H.location,mt);break;case 3:i.vertexAttrib3fv(H.location,mt);break;case 4:i.vertexAttrib4fv(H.location,mt);break;default:i.vertexAttrib1fv(H.location,mt)}}}}M()}function P(){C();for(const v in n){const R=n[v];for(const O in R){const B=R[O];for(const X in B)h(B[X].object),delete B[X];delete R[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const O in R){const B=R[O];for(const X in B)h(B[X].object),delete B[X];delete R[O]}delete n[v.id]}function T(v){for(const R in n){const O=n[R];if(O[v.id]===void 0)continue;const B=O[v.id];for(const X in B)h(B[X].object),delete B[X];delete O[v.id]}}function C(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:p,disableUnusedAttributes:M}}function bd(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*f[E];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ad(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==We&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function Cd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Dn,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,E=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:n,x=M*4;let _=u.clippingState||null;c.value=_,_=h(g,f,x,m);for(let P=0;P!==x;++P)_[P]=e[P];u.clippingState=_,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const E=d!==null?d.length:0;let p=null;if(E!==0){if(p=c.value,g!==!0||p===null){const u=m+E*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,_=m;x!==E;++x,_+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,p}}function Rd(i){let t=new WeakMap;function e(o,a){return a===Mr?o.mapping=ui:a===Sr&&(o.mapping=di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mr||a===Sr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class hc extends ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,ea=[.125,.215,.35,.446,.526,.582],Fn=20,Qs=new hc,na=new Ht;let tr=null,er=0,nr=0,ir=!1;const Un=(1+Math.sqrt(5))/2,ii=1/Un,ia=[new L(-Un,ii,0),new L(Un,ii,0),new L(-ii,0,Un),new L(ii,0,Un),new L(0,Un,-ii),new L(0,Un,ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tr,er,nr),this._renderer.xr.enabled=ir,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Gi,format:We,colorSpace:gi,depthBuffer:!1},s=ra(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ra(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pd(r)),this._blurMaterial=Ld(r,t,e)}return s}_compileMaterial(t){const e=new F(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s){const a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(na),h.toneMapping=En,h.autoClear=!1;const m=new we({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new F(new nt,m);let E=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,E=!0):(m.color.copy(na),E=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):M===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const x=this._cubeSize;hs(s,M*x,u>2?x:0,x,x),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ui||t.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=aa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ia[(s-r-1)%ia.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new F(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),E=r/g,p=isFinite(r)?1+Math.floor(h*E):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const u=[];let M=0;for(let T=0;T<Fn;++T){const C=T/E,y=Math.exp(-C*C/2);u.push(y),T===0?M+=y:T<p&&(M+=2*y)}for(let T=0;T<u.length;T++)u[T]=u[T]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[s],P=3*_*(s>x-si?s-x+si:0),A=4*(this._cubeSize-_);hs(e,P,A,3*_,2*_),c.setRenderTarget(e),c.render(d,Qs)}}function Pd(i){const t=[],e=[],n=[];let s=i;const r=i-si+1+ea.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-si?c=ea[o-i+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,E=3,p=2,u=1,M=new Float32Array(E*g*m),x=new Float32Array(p*g*m),_=new Float32Array(u*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,C=A>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(y,E*g*A),x.set(f,p*g*A);const v=[A,A,A,A,A,A];_.set(v,u*g*A)}const P=new Oe;P.setAttribute("position",new Ke(M,E)),P.setAttribute("uv",new Ke(x,p)),P.setAttribute("faceIndex",new Ke(_,u)),t.push(P),s>si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ra(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ld(i,t,e){const n=new Float32Array(Fn),s=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:po(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function oa(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function aa(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}function Id(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Mr||c===Sr,h=c===ui||c===di;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sa(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new sa(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ud(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const E=f.morphAttributes[g];for(let p=0,u=E.length;p<u;p++)t.remove(E[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const E=m[g];for(let p=0,u=E.length;p<u;p++)t.update(E[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let E=0;if(m!==null){const M=m.array;E=m.version;for(let x=0,_=M.length;x<_;x+=3){const P=M[x+0],A=M[x+1],T=M[x+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const M=g.array;E=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const P=x+0,A=x+1,T=x+2;f.push(P,A,A,T,T,P)}}else return;const p=new(Qa(f)?rc:sc)(f,1);p.version=E;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Nd(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,E){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],E[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,E,0,g);let u=0;for(let M=0;M<g;M++)u+=m[M]*E[M];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Od(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),E===!0&&(_=2),p===!0&&(_=3);let P=a.attributes.position.count*_,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*A*4*d),C=new ec(T,P,A,d);C.type=cn,C.needsUpdate=!0;const y=_*4;for(let R=0;R<d;R++){const O=u[R],B=M[R],X=x[R],J=P*A*4*R;for(let W=0;W<O.count;W++){const j=W*y;g===!0&&(s.fromBufferAttribute(O,W),T[J+j+0]=s.x,T[J+j+1]=s.y,T[J+j+2]=s.z,T[J+j+3]=0),E===!0&&(s.fromBufferAttribute(B,W),T[J+j+4]=s.x,T[J+j+5]=s.y,T[J+j+6]=s.z,T[J+j+7]=0),p===!0&&(s.fromBufferAttribute(X,W),T[J+j+8]=s.x,T[J+j+9]=s.y,T[J+j+10]=s.z,T[J+j+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new _t(P,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const E=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class uc extends Ce{constructor(t,e,n,s,r,o,a,c,l,h=ai){if(h!==ai&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Gn),n===void 0&&h===pi&&(n=fi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dc=new Ce,ca=new uc(1,1),fc=new ec,pc=new wl,mc=new cc,la=[],ha=[],ua=new Float32Array(16),da=new Float32Array(9),fa=new Float32Array(4);function Mi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=la[s];if(r===void 0&&(r=new Float32Array(s),la[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ts(i,t){let e=ha[t];e===void 0&&(e=new Int32Array(t),ha[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;fa.set(n),i.uniformMatrix2fv(this.addr,!1,fa),me(e,n)}}function Wd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;da.set(n),i.uniformMatrix3fv(this.addr,!1,da),me(e,n)}}function Xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ua.set(n),i.uniformMatrix4fv(this.addr,!1,ua),me(e,n)}}function qd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function tf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ca.compareFunction=ja,r=ca):r=dc,e.setTexture2D(t||r,s)}function ef(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pc,s)}function nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mc,s)}function sf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fc,s)}function rf(i){switch(i){case 5126:return zd;case 35664:return Gd;case 35665:return kd;case 35666:return Hd;case 35674:return Vd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return qd;case 35667:case 35671:return Yd;case 35668:case 35672:return Zd;case 35669:case 35673:return Jd;case 5125:return $d;case 36294:return Kd;case 36295:return jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return sf}}function of(i,t){i.uniform1fv(this.addr,t)}function af(i,t){const e=Mi(t,this.size,2);i.uniform2fv(this.addr,e)}function cf(i,t){const e=Mi(t,this.size,3);i.uniform3fv(this.addr,e)}function lf(i,t){const e=Mi(t,this.size,4);i.uniform4fv(this.addr,e)}function hf(i,t){const e=Mi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function uf(i,t){const e=Mi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function df(i,t){const e=Mi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ff(i,t){i.uniform1iv(this.addr,t)}function pf(i,t){i.uniform2iv(this.addr,t)}function mf(i,t){i.uniform3iv(this.addr,t)}function gf(i,t){i.uniform4iv(this.addr,t)}function _f(i,t){i.uniform1uiv(this.addr,t)}function vf(i,t){i.uniform2uiv(this.addr,t)}function xf(i,t){i.uniform3uiv(this.addr,t)}function Mf(i,t){i.uniform4uiv(this.addr,t)}function Sf(i,t,e){const n=this.cache,s=t.length,r=Ts(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dc,r[o])}function yf(i,t,e){const n=this.cache,s=t.length,r=Ts(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pc,r[o])}function Ef(i,t,e){const n=this.cache,s=t.length,r=Ts(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mc,r[o])}function wf(i,t,e){const n=this.cache,s=t.length,r=Ts(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fc,r[o])}function Tf(i){switch(i){case 5126:return of;case 35664:return af;case 35665:return cf;case 35666:return lf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return wf}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rf(e.type)}}class Af{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tf(e.type)}}class Cf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function pa(i,t){i.seq.push(t),i.map[t.id]=t}function Rf(i,t,e){const n=i.name,s=n.length;for(sr.lastIndex=0;;){const r=sr.exec(n),o=sr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pa(e,l===void 0?new bf(a,i,t):new Af(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Cf(a),pa(e,d)),e=d}}}class Ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rf(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ma(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Pf=37297;let Lf=0;function If(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ga=new zt;function Df(i){qt._getMatrix(ga,qt.workingColorSpace,i);const t=`mat3( ${ga.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _a(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+If(i.getShaderSource(t),o)}else return s}function Uf(i,t){const e=Df(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Nf(i,t){let e;switch(t){case jc:e="Linear";break;case Qc:e="Reinhard";break;case tl:e="Cineon";break;case Ga:e="ACESFilmic";break;case nl:e="AgX";break;case il:e="Neutral";break;case el:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new L;function Ff(){qt.getLuminanceCoefficients(us);const i=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function Bf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pi(i){return i!==""}function va(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(i){return i.replace(Gf,Hf)}const kf=new Map;function Hf(i,t){let e=Gt[t];if(e===void 0){const n=kf.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kr(e)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ma(i){return i.replace(Vf,Wf)}function Wf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===za?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function qf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function Zf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case $c:t="ENVMAP_BLENDING_MIX";break;case Kc:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $f(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Xf(e),l=qf(e),h=Yf(e),d=Zf(e),f=Jf(e),m=Of(e),g=Bf(r),E=s.createProgram();let p,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pi).join(`
`),u.length>0&&(u+=`
`)):(p=[Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),u=[Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Gt.tonemapping_pars_fragment:"",e.toneMapping!==En?Nf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Uf("linearToOutputTexel",e.outputColorSpace),Ff(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Kr(o),o=va(o,e),o=xa(o,e),a=Kr(a),a=va(a,e),a=xa(a,e),o=Ma(o),a=Ma(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=M+p+o,_=M+u+a,P=ma(s,s.VERTEX_SHADER,x),A=ma(s,s.FRAGMENT_SHADER,_);s.attachShader(E,P),s.attachShader(E,A),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function T(R){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(E).trim(),B=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(A).trim();let J=!0,W=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,P,A);else{const j=_a(s,P,"vertex"),H=_a(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+j+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:J,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:u}})}s.deleteShader(P),s.deleteShader(A),C=new Ms(s,E),y=zf(s,E)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(E,Pf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=A,this}let Kf=0;class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qf(t),e.set(t,n)),n}}class Qf{constructor(t){this.id=Kf++,this.code=t,this.usedTimes=0}}function tp(i,t,e,n,s,r,o){const a=new uo,c=new jf,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,R,O,B){const X=O.fog,J=B.geometry,W=y.isMeshStandardMaterial?O.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=j&&j.mapping===Es?j.image.height:null,ot=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let Lt=0;J.morphAttributes.position!==void 0&&(Lt=1),J.morphAttributes.normal!==void 0&&(Lt=2),J.morphAttributes.color!==void 0&&(Lt=3);let Xt,q,et,xt;if(ot){const Qt=Ze[ot];Xt=Qt.vertexShader,q=Qt.fragmentShader}else Xt=y.vertexShader,q=y.fragmentShader,c.update(y),et=c.getVertexShaderID(y),xt=c.getFragmentShaderID(y);const dt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,$t=!!y.map,Wt=!!y.matcap,he=!!j,D=!!y.aoMap,ye=!!y.lightMap,Vt=!!y.bumpMap,Ot=!!y.normalMap,Ct=!!y.displacementMap,se=!!y.emissiveMap,bt=!!y.metalnessMap,b=!!y.roughnessMap,S=y.anisotropy>0,z=y.clearcoat>0,K=y.dispersion>0,tt=y.iridescence>0,Y=y.sheen>0,St=y.transmission>0,at=S&&!!y.anisotropyMap,gt=z&&!!y.clearcoatMap,Pt=z&&!!y.clearcoatNormalMap,Q=z&&!!y.clearcoatRoughnessMap,lt=tt&&!!y.iridescenceMap,vt=tt&&!!y.iridescenceThicknessMap,At=Y&&!!y.sheenColorMap,pt=Y&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Dt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,I=St&&!!y.transmissionMap,st=St&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,ht=y.alphaTest>0,rt=!!y.alphaHash,Nt=!!y.extensions;let oe=En;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(oe=i.toneMapping);const xe={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:gi,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:Wt,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:ye,bumpMap:Vt,normalMap:Ot,displacementMap:f&&Ct,emissiveMap:se,normalMapObjectSpace:Ot&&y.normalMapType===al,normalMapTangentSpace:Ot&&y.normalMapType===lo,metalnessMap:bt,roughnessMap:b,anisotropy:S,anisotropyMap:at,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:tt,iridescenceMap:lt,iridescenceThicknessMap:vt,sheen:Y,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:Yt,transmission:St,transmissionMap:I,thicknessMap:st,gradientMap:V,opaque:y.transparent===!1&&y.blending===oi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:rt,combine:y.combine,mapUv:$t&&E(y.map.channel),aoMapUv:D&&E(y.aoMap.channel),lightMapUv:ye&&E(y.lightMap.channel),bumpMapUv:Vt&&E(y.bumpMap.channel),normalMapUv:Ot&&E(y.normalMap.channel),displacementMapUv:Ct&&E(y.displacementMap.channel),emissiveMapUv:se&&E(y.emissiveMap.channel),metalnessMapUv:bt&&E(y.metalnessMap.channel),roughnessMapUv:b&&E(y.roughnessMap.channel),anisotropyMapUv:at&&E(y.anisotropyMap.channel),clearcoatMapUv:gt&&E(y.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&E(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&E(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&E(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&E(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&E(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&E(y.sheenRoughnessMap.channel),specularMapUv:kt&&E(y.specularMap.channel),specularColorMapUv:Dt&&E(y.specularColorMap.channel),specularIntensityMapUv:Yt&&E(y.specularIntensityMap.channel),transmissionMapUv:I&&E(y.transmissionMap.channel),thicknessMapUv:st&&E(y.thicknessMap.channel),alphaMapUv:Z&&E(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&($t||Z),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===Ae,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function u(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(M(v,y),x(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function x(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const v=g[y.type];let R;if(v){const O=Ze[v];R=Fl.clone(O.uniforms)}else R=y.uniforms;return R}function P(y,v){let R;for(let O=0,B=h.length;O<B;O++){const X=h[O];if(X.cacheKey===v){R=X,++R.usedTimes;break}}return R===void 0&&(R=new $f(i,v,y,r),h.push(R)),R}function A(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function ep(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function np(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ya(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ea(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,g,E,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:E,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=E,u.group=p),t++,u}function a(d,f,m,g,E,p){const u=o(d,f,m,g,E,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,g,E,p){const u=o(d,f,m,g,E,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||np),n.length>1&&n.sort(f||ya),s.length>1&&s.sort(f||ya)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ip(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ea,i.set(n,[o])):s>=r.length?(o=new Ea,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let op=0;function ap(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cp(i){const t=new sp,e=rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new le,o=new le;function a(l){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,E=0,p=0,u=0,M=0,x=0,_=0,P=0,A=0,T=0;l.sort(ap);for(let y=0,v=l.length;y<v;y++){const R=l[y],O=R.color,B=R.intensity,X=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*B,d+=O.g*B,f+=O.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],B);T++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[E]=W;const j=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,j.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[E]=j.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=J,_++}E++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==E||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=E,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=m,C.pointLength=g,C.spotLength=E,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=T,n.version=op++)}function c(l,h){let d=0,f=0,m=0,g=0,E=0;const p=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const x=l[u];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(x.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const _=n.hemi[E];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),E++}}}return{setup:a,setupView:c,state:n}}function wa(i){const t=new cp(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wa(i),t.set(s,[a])):r>=o.length?(a=new wa(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hp extends xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class up extends xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
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
}`;function pp(i,t,e){let n=new fo;const s=new _t,r=new _t,o=new ie,a=new hp({depthPacking:ol}),c=new up,l={},h=e.maxTextureSize,d={[wn]:Ae,[Ae]:wn,[Je]:Je},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:dp,fragmentShader:fp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new F(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let u=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==an&&this.type===an,X=u===an&&this.type!==an;for(let J=0,W=A.length;J<W;J++){const j=A[J],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||B===!0||X===!0){const Mt=this.type!==an?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new kn(s.x,s.y,Mt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const mt=H.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const Lt=H.getViewport(Mt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),H.updateMatrices(j,Mt),n=H.getFrustum(),_(T,C,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===an&&M(H,C),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,v,R)};function M(A,T){const C=t.update(E);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,E,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,m,E,null)}function x(A,T,C,y){let v=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=v.uuid,B=T.uuid;let X=l[O];X===void 0&&(X={},l[O]=X);let J=X[B];J===void 0&&(J=v.clone(),X[B]=J,T.addEventListener("dispose",P)),v=J}if(v.visible=T.visible,v.wireframe=T.wireframe,y===an?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=C}return v}function _(A,T,C,y,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===an)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const J=B.groups;for(let W=0,j=J.length;W<j;W++){const H=J[W],ot=X[H.materialIndex];if(ot&&ot.visible){const mt=x(A,ot,y,v);A.onBeforeShadow(i,A,T,C,B,mt,H),i.renderBufferDirect(C,null,B,mt,A,H),A.onAfterShadow(i,A,T,C,B,mt,H)}}}else if(X.visible){const J=x(A,X,y,v);A.onBeforeShadow(i,A,T,C,B,J,null),i.renderBufferDirect(C,null,B,J,A,null),A.onAfterShadow(i,A,T,C,B,J,null)}}const O=A.children;for(let B=0,X=O.length;B<X;B++)_(O[B],T,C,y,v)}function P(A){A.target.removeEventListener("dispose",P);for(const C in l){const y=l[C],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const mp={[fr]:pr,[mr]:vr,[gr]:xr,[hi]:_r,[pr]:fr,[vr]:mr,[xr]:gr,[_r]:hi};function gp(i,t){function e(){let I=!1;const st=new ie;let V=null;const Z=new ie(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,rt,Nt,oe,xe){xe===!0&&(ht*=oe,rt*=oe,Nt*=oe),st.set(ht,rt,Nt,oe),Z.equals(st)===!1&&(i.clearColor(ht,rt,Nt,oe),Z.copy(st))},reset:function(){I=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,st=!1,V=null,Z=null,ht=null;return{setReversed:function(rt){if(st!==rt){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const oe=ht;ht=null,this.setClear(oe)}st=rt},getReversed:function(){return st},setTest:function(rt){rt?dt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(rt){V!==rt&&!I&&(i.depthMask(rt),V=rt)},setFunc:function(rt){if(st&&(rt=mp[rt]),Z!==rt){switch(rt){case fr:i.depthFunc(i.NEVER);break;case pr:i.depthFunc(i.ALWAYS);break;case mr:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case gr:i.depthFunc(i.EQUAL);break;case _r:i.depthFunc(i.GEQUAL);break;case vr:i.depthFunc(i.GREATER);break;case xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=rt}},setLocked:function(rt){I=rt},setClear:function(rt){ht!==rt&&(st&&(rt=1-rt),i.clearDepth(rt),ht=rt)},reset:function(){I=!1,V=null,Z=null,ht=null,st=!1}}}function s(){let I=!1,st=null,V=null,Z=null,ht=null,rt=null,Nt=null,oe=null,xe=null;return{setTest:function(Qt){I||(Qt?dt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!I&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Be,Qe){(V!==Qt||Z!==Be||ht!==Qe)&&(i.stencilFunc(Qt,Be,Qe),V=Qt,Z=Be,ht=Qe)},setOp:function(Qt,Be,Qe){(rt!==Qt||Nt!==Be||oe!==Qe)&&(i.stencilOp(Qt,Be,Qe),rt=Qt,Nt=Be,oe=Qe)},setLocked:function(Qt){I=Qt},setClear:function(Qt){xe!==Qt&&(i.clearStencil(Qt),xe=Qt)},reset:function(){I=!1,st=null,V=null,Z=null,ht=null,rt=null,Nt=null,oe=null,xe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,E=!1,p=null,u=null,M=null,x=null,_=null,P=null,A=null,T=new Ht(0,0,0),C=0,y=!1,v=null,R=null,O=null,B=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let ot=null,mt={};const Mt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Xt=new ie().fromArray(Mt),q=new ie().fromArray(Lt);function et(I,st,V,Z){const ht=new Uint8Array(4),rt=i.createTexture();i.bindTexture(I,rt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<V;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return rt}const xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(hi),Vt(!1),Ot(Co),dt(i.CULL_FACE),D(yn);function dt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function It(I,st){return d[I]!==st?(i.bindFramebuffer(I,st),d[I]=st,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(I,st){let V=m,Z=!1;if(I){V=f.get(st),V===void 0&&(V=[],f.set(st,V));const ht=I.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Nt=ht.length;rt<Nt;rt++)V[rt]=i.COLOR_ATTACHMENT0+rt;V.length=ht.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function $t(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Wt={[Nn]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Uc]:i.FUNC_REVERSE_SUBTRACT};Wt[Nc]=i.MIN,Wt[Fc]=i.MAX;const he={[Oc]:i.ZERO,[Bc]:i.ONE,[zc]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Vc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[dr]:i.ONE_MINUS_SRC_ALPHA,[Wc]:i.ONE_MINUS_DST_COLOR,[Hc]:i.ONE_MINUS_DST_ALPHA,[qc]:i.CONSTANT_COLOR,[Yc]:i.ONE_MINUS_CONSTANT_COLOR,[Zc]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,st,V,Z,ht,rt,Nt,oe,xe,Qt){if(I===yn){E===!0&&(Rt(i.BLEND),E=!1);return}if(E===!1&&(dt(i.BLEND),E=!0),I!==Ic){if(I!==p||Qt!==y){if((u!==Nn||_!==Nn)&&(i.blendEquation(i.FUNC_ADD),u=Nn,_=Nn),Qt)switch(I){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,x=null,P=null,A=null,T.set(0,0,0),C=0,p=I,y=Qt}return}ht=ht||st,rt=rt||V,Nt=Nt||Z,(st!==u||ht!==_)&&(i.blendEquationSeparate(Wt[st],Wt[ht]),u=st,_=ht),(V!==M||Z!==x||rt!==P||Nt!==A)&&(i.blendFuncSeparate(he[V],he[Z],he[rt],he[Nt]),M=V,x=Z,P=rt,A=Nt),(oe.equals(T)===!1||xe!==C)&&(i.blendColor(oe.r,oe.g,oe.b,xe),T.copy(oe),C=xe),p=I,y=!1}function ye(I,st){I.side===Je?Rt(i.CULL_FACE):dt(i.CULL_FACE);let V=I.side===Ae;st&&(V=!V),Vt(V),I.blending===oi&&I.transparent===!1?D(yn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Ot(I){I!==Pc?(dt(i.CULL_FACE),I!==R&&(I===Co?i.cullFace(i.BACK):I===Lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),R=I}function Ct(I){I!==O&&(W&&i.lineWidth(I),O=I)}function se(I,st,V){I?(dt(i.POLYGON_OFFSET_FILL),(B!==st||X!==V)&&(i.polygonOffset(st,V),B=st,X=V)):Rt(i.POLYGON_OFFSET_FILL)}function bt(I){I?dt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+J-1),ot!==I&&(i.activeTexture(I),ot=I)}function S(I,st,V){V===void 0&&(ot===null?V=i.TEXTURE0+J-1:V=ot);let Z=mt[V];Z===void 0&&(Z={type:void 0,texture:void 0},mt[V]=Z),(Z.type!==I||Z.texture!==st)&&(ot!==V&&(i.activeTexture(V),ot=V),i.bindTexture(I,st||xt[I]),Z.type=I,Z.texture=st)}function z(){const I=mt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(I){Xt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Xt.copy(I))}function pt(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function kt(I,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let Z=V.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(st,I.name),V.set(I,Z))}function Dt(I,st){const Z=l.get(st).get(I);c.get(st)!==Z&&(i.uniformBlockBinding(st,Z,I.__bindingPointIndex),c.set(st,Z))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,mt={},d={},f=new WeakMap,m=[],g=null,E=!1,p=null,u=null,M=null,x=null,_=null,P=null,A=null,T=new Ht(0,0,0),C=0,y=!1,v=null,R=null,O=null,B=null,X=null,Xt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Rt,bindFramebuffer:It,drawBuffers:Ft,useProgram:$t,setBlending:D,setMaterial:ye,setFlipSided:Vt,setCullFace:Ot,setLineWidth:Ct,setPolygonOffset:se,setScissorTest:bt,activeTexture:b,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:lt,texImage3D:vt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Pt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:At,viewport:pt,reset:Yt}}function Ta(i,t,e,n){const s=_p(n);switch(e){case Xa:return i*t;case Ya:return i*t;case Za:return i*t*2;case Ja:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case ao:return i*t*2/s.components*s.byteLength;case qa:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case co:return i*t*4/s.components*s.byteLength;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _s:case vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tr:case Ar:return Math.max(i,16)*Math.max(t,8)/4;case wr:case br:return Math.max(i,8)*Math.max(t,8)/2;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xs:case Xr:case qr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case Yr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case Jr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(i){switch(i){case dn:case Ha:return{byteLength:1,components:1};case Fi:case Va:case Gi:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case Gn:case io:case cn:return{byteLength:4,components:1};case Wa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):ys("canvas")}function E(b,S,z){let K=1;const tt=bt(b);if((tt.width>z||tt.height>z)&&(K=z/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*tt.width),St=Math.floor(K*tt.height);d===void 0&&(d=g(Y,St));const at=S?g(Y,St):d;return at.width=Y,at.height=St,at.getContext("2d").drawImage(b,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+St+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,S,z,K,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=S;if(S===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const St=tt?ws:qt.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=St===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(b,S){let z;return b?S===null||S===Gn||S===fi?z=i.DEPTH24_STENCIL8:S===cn?z=i.DEPTH32F_STENCIL8:S===Fi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gn||S===fi?z=i.DEPTH_COMPONENT24:S===cn?z=i.DEPTH_COMPONENT32F:S===Fi&&(z=i.DEPTH_COMPONENT16),z}function P(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xe&&b.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&h.delete(S)}function T(b){const S=b.target;S.removeEventListener("dispose",T),v(S)}function C(b){const S=n.get(b);if(S.__webglInit===void 0)return;const z=b.source,K=f.get(z);if(K){const tt=K[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(b),Object.keys(K).length===0&&f.delete(z)}n.remove(b)}function y(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const z=b.source,K=f.get(z);delete K[S.__cacheKey],o.memory.textures--}function v(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let tt=0;tt<S.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=b.textures;for(let K=0,tt=z.length;K<tt;K++){const Y=n.get(z[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(b)}let R=0;function O(){R=0}function B(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function X(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function J(b,S){const z=n.get(b);if(b.isVideoTexture&&Ct(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,b,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function W(b,S){const z=n.get(b);if(b.version>0&&z.__version!==b.version){q(z,b,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function j(b,S){const z=n.get(b);if(b.version>0&&z.__version!==b.version){q(z,b,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function H(b,S){const z=n.get(b);if(b.version>0&&z.__version!==b.version){et(z,b,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const ot={[yr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},mt={[Xe]:i.NEAREST,[sl]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Ps]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Mt={[cl]:i.NEVER,[pl]:i.ALWAYS,[ll]:i.LESS,[ja]:i.LEQUAL,[hl]:i.EQUAL,[fl]:i.GEQUAL,[ul]:i.GREATER,[dl]:i.NOTEQUAL};function Lt(b,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===Ps||S.magFilter===Xi||S.magFilter===Bn||S.minFilter===$e||S.minFilter===Ps||S.minFilter===Xi||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ot[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ot[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ot[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,mt[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==Xi&&S.minFilter!==Bn||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(b,S){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const Y=X(S);if(Y!==b.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[Y].usedTimes++;const St=tt[b.__cacheKey];St!==void 0&&(tt[b.__cacheKey].usedTimes--,St.usedTimes===0&&y(S)),b.__cacheKey=Y,b.__webglTexture=tt[Y].texture}return z}function q(b,S,z){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Xt(b,S),Y=S.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+z);const St=n.get(Y);if(Y.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);const at=qt.getPrimaries(qt.workingColorSpace),gt=S.colorSpace===Sn?null:qt.getPrimaries(S.colorSpace),Pt=S.colorSpace===Sn||at===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Q=E(S.image,!1,s.maxTextureSize);Q=se(S,Q);const lt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type);let At=x(S.internalFormat,lt,vt,S.colorSpace,S.isVideoTexture);Lt(K,S);let pt;const kt=S.mipmaps,Dt=S.isVideoTexture!==!0,Yt=St.__version===void 0||tt===!0,I=Y.dataReady,st=P(S,Q);if(S.isDepthTexture)At=_(S.format===pi,S.type),Yt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,lt,vt,null));else if(S.isDataTexture)if(kt.length>0){Dt&&Yt&&e.texStorage2D(i.TEXTURE_2D,st,At,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],Dt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,lt,vt,pt.data):e.texImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,lt,vt,pt.data);S.generateMipmaps=!1}else Dt?(Yt&&e.texStorage2D(i.TEXTURE_2D,st,At,Q.width,Q.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,lt,vt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,lt,vt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Dt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,kt[0].width,kt[0].height,Q.depth);for(let V=0,Z=kt.length;V<Z;V++)if(pt=kt[V],S.format!==We)if(lt!==null)if(Dt){if(I)if(S.layerUpdates.size>0){const ht=Ta(pt.width,pt.height,S.format,S.type);for(const rt of S.layerUpdates){const Nt=pt.data.subarray(rt*ht/pt.data.BYTES_PER_ELEMENT,(rt+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,rt,pt.width,pt.height,1,lt,Nt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,lt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,lt,vt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,Q.depth,0,lt,vt,pt.data)}else{Dt&&Yt&&e.texStorage2D(i.TEXTURE_2D,st,At,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],S.format!==We?lt!==null?Dt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,lt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,lt,vt,pt.data):e.texImage2D(i.TEXTURE_2D,V,At,pt.width,pt.height,0,lt,vt,pt.data)}else if(S.isDataArrayTexture)if(Dt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,Q.width,Q.height,Q.depth),I)if(S.layerUpdates.size>0){const V=Ta(Q.width,Q.height,S.format,S.type);for(const Z of S.layerUpdates){const ht=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,lt,vt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,vt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,lt,vt,Q.data);else if(S.isData3DTexture)Dt?(Yt&&e.texStorage3D(i.TEXTURE_3D,st,At,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,vt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,lt,vt,Q.data);else if(S.isFramebufferTexture){if(Yt)if(Dt)e.texStorage2D(i.TEXTURE_2D,st,At,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,At,V,Z,0,lt,vt,null),V>>=1,Z>>=1}}else if(kt.length>0){if(Dt&&Yt){const V=bt(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,At,V.width,V.height)}for(let V=0,Z=kt.length;V<Z;V++)pt=kt[V],Dt?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt,vt,pt):e.texImage2D(i.TEXTURE_2D,V,At,lt,vt,pt);S.generateMipmaps=!1}else if(Dt){if(Yt){const V=bt(Q);e.texStorage2D(i.TEXTURE_2D,st,At,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,vt,Q)}else e.texImage2D(i.TEXTURE_2D,0,At,lt,vt,Q);p(S)&&u(K),St.__version=Y.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function et(b,S,z){if(S.image.length!==6)return;const K=Xt(b,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const St=qt.getPrimaries(qt.workingColorSpace),at=S.colorSpace===Sn?null:qt.getPrimaries(S.colorSpace),gt=S.colorSpace===Sn||St===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Pt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!Pt&&!Q?lt[Z]=E(S.image[Z],!0,s.maxCubemapSize):lt[Z]=Q?S.image[Z].image:S.image[Z],lt[Z]=se(S,lt[Z]);const vt=lt[0],At=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),kt=x(S.internalFormat,At,pt,S.colorSpace),Dt=S.isVideoTexture!==!0,Yt=Y.__version===void 0||K===!0,I=tt.dataReady;let st=P(S,vt);Lt(i.TEXTURE_CUBE_MAP,S);let V;if(Pt){Dt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,vt.width,vt.height);for(let Z=0;Z<6;Z++){V=lt[Z].mipmaps;for(let ht=0;ht<V.length;ht++){const rt=V[ht];S.format!==We?At!==null?Dt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,rt.width,rt.height,At,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,kt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,rt.width,rt.height,At,pt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,kt,rt.width,rt.height,0,At,pt,rt.data)}}}else{if(V=S.mipmaps,Dt&&Yt){V.length>0&&st++;const Z=bt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Dt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,At,pt,lt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,lt[Z].width,lt[Z].height,0,At,pt,lt[Z].data);for(let ht=0;ht<V.length;ht++){const Nt=V[ht].image[Z].image;Dt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Nt.width,Nt.height,At,pt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,kt,Nt.width,Nt.height,0,At,pt,Nt.data)}}else{Dt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,pt,lt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,At,pt,lt[Z]);for(let ht=0;ht<V.length;ht++){const rt=V[ht];Dt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,At,pt,rt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,kt,At,pt,rt.image[Z])}}}p(S)&&u(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function xt(b,S,z,K,tt,Y){const St=r.convert(z.format,z.colorSpace),at=r.convert(z.type),gt=x(z.internalFormat,St,at,z.colorSpace),Pt=n.get(S),Q=n.get(z);if(Q.__renderTarget=S,!Pt.__hasExternalTextures){const lt=Math.max(1,S.width>>Y),vt=Math.max(1,S.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,gt,lt,vt,S.depth,0,St,at,null):e.texImage2D(tt,Y,gt,lt,vt,0,St,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,Q.__webglTexture,0,Vt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(b,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const K=S.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=_(S.stencilBuffer,tt),St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Vt(S);Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,b)}else{const K=S.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],St=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),gt=x(Y.internalFormat,St,at,Y.colorSpace),Pt=Vt(S);z&&Ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,S.width,S.height):Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const tt=K.__webglTexture,Y=Vt(S);if(S.depthTexture.format===ai)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===pi)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(b){const S=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=K}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,b)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(S.__webglDepthbuffer[K],b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),dt(S.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(b,S,z){const K=n.get(b);S!==void 0&&xt(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&It(b)}function $t(b){const S=b.texture,z=n.get(b),K=n.get(S);b.addEventListener("dispose",T);const tt=b.textures,Y=b.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let gt=0;gt<S.mipmaps.length;gt++)z.__webglFramebuffer[at][gt]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(St)for(let at=0,gt=tt.length;at<gt;at++){const Pt=n.get(tt[at]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Ot(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const gt=tt[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Pt=r.convert(gt.format,gt.colorSpace),Q=r.convert(gt.type),lt=x(gt.internalFormat,Pt,Q,gt.colorSpace,b.isXRRenderTarget===!0),vt=Vt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(z.__webglFramebuffer[at][gt],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else xt(z.__webglFramebuffer[at],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,gt=tt.length;at<gt;at++){const Pt=tt[at],Q=n.get(Pt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Lt(i.TEXTURE_2D,Pt),xt(z.__webglFramebuffer,b,Pt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Pt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Lt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(z.__webglFramebuffer[gt],b,S,i.COLOR_ATTACHMENT0,at,gt);else xt(z.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,at,0);p(S)&&u(at),e.unbindTexture()}b.depthBuffer&&It(b)}function Wt(b){const S=b.textures;for(let z=0,K=S.length;z<K;z++){const tt=S[z];if(p(tt)){const Y=M(b),St=n.get(tt).__webglTexture;e.bindTexture(Y,St),u(Y),e.unbindTexture()}}}const he=[],D=[];function ye(b){if(b.samples>0){if(Ot(b)===!1){const S=b.textures,z=b.width,K=b.height;let tt=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(b),at=S.length>1;if(at)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Pt=n.get(S[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,tt,i.NEAREST),c===!0&&(he.length=0,D.length=0,he.push(i.COLOR_ATTACHMENT0+gt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Pt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Vt(b){return Math.min(s.maxSamples,b.samples)}function Ot(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function se(b,S){const z=b.colorSpace,K=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==gi&&z!==Sn&&(qt.getTransfer(z)===ne?(K!==We||tt!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ot}function xp(i,t){function e(n,s=Sn){let r;const o=qt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ha)return i.BYTE;if(n===Va)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Xa)return i.ALPHA;if(n===qa)return i.RGB;if(n===We)return i.RGBA;if(n===Ya)return i.LUMINANCE;if(n===Za)return i.LUMINANCE_ALPHA;if(n===ai)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===$a)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===co)return i.RGBA_INTEGER;if(n===ms||n===gs||n===_s||n===vs)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wr||n===Tr||n===br||n===Ar)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cr||n===Rr||n===Pr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cr||n===Rr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lr||n===Ir||n===Dr||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Gr||n===kr||n===Hr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ir)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Br)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xs||n===Xr||n===qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xs)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Yr||n===Zr||n===Jr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Mp extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class te extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const E of t.hand.values()){const p=e.getJointPose(E,n),u=this._getHandJoint(l,E);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ep=`
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

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:yp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends _i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const E=new wp,p=e.getContextAttributes();let u=null,M=null;const x=[],_=[],P=new _t;let A=null;const T=new Ie;T.viewport=new ie;const C=new Ie;C.viewport=new ie;const y=[T,C],v=new Mp;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=x[q];return et===void 0&&(et=new rr,x[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=x[q];return et===void 0&&(et=new rr,x[q]=et),et.getGripSpace()},this.getHand=function(q){let et=x[q];return et===void 0&&(et=new rr,x[q]=et),et.getHandSpace()};function B(q){const et=_.indexOf(q.inputSource);if(et===-1)return;const xt=x[et];xt!==void 0&&(xt.update(q.inputSource,q.frame,l||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",J);for(let q=0;q<x.length;q++){const et=_[q];et!==null&&(_[q]=null,x[q].disconnect(et))}R=null,O=null,E.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,M=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new kn(m.framebufferWidth,m.framebufferHeight,{format:We,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?pi:ai,xt=p.stencil?fi:Gn);const Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new kn(f.textureWidth,f.textureHeight,{format:We,type:dn,depthTexture:new uc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function J(q){for(let et=0;et<q.removed.length;et++){const xt=q.removed[et],dt=_.indexOf(xt);dt>=0&&(_[dt]=null,x[dt].disconnect(xt))}for(let et=0;et<q.added.length;et++){const xt=q.added[et];let dt=_.indexOf(xt);if(dt===-1){for(let It=0;It<x.length;It++)if(It>=_.length){_.push(xt),dt=It;break}else if(_[It]===null){_[It]=xt,dt=It;break}if(dt===-1)break}const Rt=x[dt];Rt&&Rt.connect(xt)}}const W=new L,j=new L;function H(q,et,xt){W.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);const dt=W.distanceTo(j),Rt=et.projectionMatrix.elements,It=xt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),$t=Rt[14]/(Rt[10]+1),Wt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],D=(Rt[8]-1)/Rt[0],ye=(It[8]+1)/It[0],Vt=Ft*D,Ot=Ft*ye,Ct=dt/(-D+ye),se=Ct*-D;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Ft+Ct,b=$t+Ct,S=Vt-se,z=Ot+(dt-se),K=Wt*$t/b*bt,tt=he*$t/b*bt;q.projectionMatrix.makePerspective(S,z,K,tt,bt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,xt=q.far;E.texture!==null&&(E.depthNear>0&&(et=E.depthNear),E.depthFar>0&&(xt=E.depthFar)),v.near=C.near=T.near=et,v.far=C.far=T.far=xt,(R!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,O=v.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,v.layers.mask=T.layers.mask|C.layers.mask;const dt=q.parent,Rt=v.cameras;ot(v,dt);for(let It=0;It<Rt.length;It++)ot(Rt[It],dt);Rt.length===2?H(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),mt(q,v,dt)};function mt(q,et,xt){xt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$r*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let Mt=null;function Lt(q,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const xt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let dt=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let It=0;It<xt.length;It++){const Ft=xt[It];let $t=null;if(m!==null)$t=m.getViewport(Ft);else{const he=d.getViewSubImage(f,Ft);$t=he.viewport,It===0&&(t.setRenderTargetTextures(M,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(M))}let Wt=y[It];Wt===void 0&&(Wt=new Ie,Wt.layers.enable(It),Wt.viewport=new ie,y[It]=Wt),Wt.matrix.fromArray(Ft.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ft.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set($t.x,$t.y,$t.width,$t.height),It===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Wt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=d.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&E.init(t,It,s.renderState)}}for(let xt=0;xt<x.length;xt++){const dt=_[xt],Rt=x[xt];dt!==null&&Rt!==void 0&&Rt.update(dt,et,l||o)}Mt&&Mt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Xt=new lc;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const In=new qe,bp=new le;function Ap(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,oc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,x,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,_)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),E(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,M,x):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ae&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ae&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=t.get(u),x=M.envMap,_=M.envMapRotation;x&&(p.envMap.value=x,In.copy(_),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(In)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,M,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ae&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function E(p,u){const M=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cp(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function l(M,x){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const x=d();M.__bindingPointIndex=x;const _=i.createBuffer(),P=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],_=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,T=_.length;A<T;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,v=C.length;y<v;y++){const R=C[y];if(m(R,A,y,P)===!0){const O=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let J=0;J<B.length;J++){const W=B[J],j=E(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,_,P){const A=M.value,T=x+"_"+_;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){const x=M.uniforms;let _=0;const P=16;for(let T=0,C=x.length;T<C;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,R=y.length;v<R;v++){const O=y[v],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,J=B.length;X<J;X++){const W=B[X],j=E(W),H=_%P,ot=H%j.boundary,mt=H+ot;_+=ot,mt!==0&&P-mt<j.storage&&(_+=P-mt),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=j.storage}}}const A=_%P;return A>0&&(_+=P-A),M.__size=_,M.__cache={},this}function E(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Rp{constructor(t={}){const{canvas:e=gl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),E=new Int32Array(4);let p=null,u=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=En,this.toneMappingExposure=1;const _=this;let P=!1,A=0,T=0,C=null,y=-1,v=null;const R=new ie,O=new ie;let B=null;const X=new Ht(0);let J=0,W=e.width,j=e.height,H=1,ot=null,mt=null;const Mt=new ie(0,0,W,j),Lt=new ie(0,0,W,j);let Xt=!1;const q=new fo;let et=!1,xt=!1;const dt=new le,Rt=new le,It=new L,Ft=new ie,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function he(){return C===null?H:1}let D=n;function ye(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){const U="webgl2";if(D=ye(U,w),D===null)throw ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Ot,Ct,se,bt,b,S,z,K,tt,Y,St,at,gt,Pt,Q,lt,vt,At,pt,kt,Dt,Yt,I;function st(){Vt=new Dd(D),Vt.init(),Dt=new xp(D,Vt),Ot=new Ad(D,Vt,t,Dt),Ct=new gp(D,Vt),Ot.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),se=new Fd(D),bt=new ep,b=new vp(D,Vt,Ct,bt,Ot,Dt,se),S=new Rd(_),z=new Id(_),K=new Vl(D),Yt=new Td(D,K),tt=new Ud(D,K,se,Yt),Y=new Bd(D,tt,K,se),At=new Od(D,Ot,b),Q=new Cd(bt),St=new tp(_,S,z,Vt,Ot,Yt,Q),at=new Ap(_,bt),gt=new ip,Pt=new lp(Vt),vt=new wd(_,S,z,Ct,Y,m,c),lt=new pp(_,Y,Ot),I=new Cp(D,se,Ot,Ct),pt=new bd(D,Vt,se),kt=new Nd(D,Vt,se),se.programs=St.programs,_.capabilities=Ot,_.extensions=Vt,_.properties=bt,_.renderLists=gt,_.shadowMap=lt,_.state=Ct,_.info=se}st();const V=new Tp(_,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,j,!1))},this.getSize=function(w){return w.set(W,j)},this.setSize=function(w,U,G=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,j=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(w,U,G){W=w,j=U,H=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,U,G,k){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,U,G,k),Ct.viewport(R.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,U,G,k){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,U,G,k),Ct.scissor(O.copy(Lt).multiplyScalar(H).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){Ct.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){mt=w},this.getClearColor=function(w){return w.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(w=!0,U=!0,G=!0){let k=0;if(w){let N=!1;if(C!==null){const it=C.texture.format;N=it===co||it===ao||it===oo}if(N){const it=C.texture.type,ft=it===dn||it===Gn||it===Fi||it===fi||it===so||it===ro,yt=vt.getClearColor(),Et=vt.getClearAlpha(),Ut=yt.r,Bt=yt.g,wt=yt.b;ft?(g[0]=Ut,g[1]=Bt,g[2]=wt,g[3]=Et,D.clearBufferuiv(D.COLOR,0,g)):(E[0]=Ut,E[1]=Bt,E[2]=wt,E[3]=Et,D.clearBufferiv(D.COLOR,0,E))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),gt.dispose(),Pt.dispose(),bt.dispose(),S.dispose(),z.dispose(),Y.dispose(),Yt.dispose(),I.dispose(),St.dispose(),V.dispose(),V.removeEventListener("sessionstart",Mo),V.removeEventListener("sessionend",So),bn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=se.autoReset,U=lt.enabled,G=lt.autoUpdate,k=lt.needsUpdate,N=lt.type;st(),se.autoReset=w,lt.enabled=U,lt.autoUpdate=G,lt.needsUpdate=k,lt.type=N}function rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const U=w.target;U.removeEventListener("dispose",Nt),oe(U)}function oe(w){xe(w),bt.remove(w)}function xe(w){const U=bt.get(w).programs;U!==void 0&&(U.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,k,N,it){U===null&&(U=$t);const ft=N.isMesh&&N.matrixWorld.determinant()<0,yt=Tc(w,U,G,k,N);Ct.setMaterial(k,ft);let Et=G.index,Ut=1;if(k.wireframe===!0){if(Et=tt.getWireframeAttribute(G),Et===void 0)return;Ut=2}const Bt=G.drawRange,wt=G.attributes.position;let Zt=Bt.start*Ut,re=(Bt.start+Bt.count)*Ut;it!==null&&(Zt=Math.max(Zt,it.start*Ut),re=Math.min(re,(it.start+it.count)*Ut)),Et!==null?(Zt=Math.max(Zt,0),re=Math.min(re,Et.count)):wt!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,wt.count));const ae=re-Zt;if(ae<0||ae===1/0)return;Yt.setup(N,k,yt,G,Et);let Te,Kt=pt;if(Et!==null&&(Te=K.get(Et),Kt=kt,Kt.setIndex(Te)),N.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*he()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(N.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*he()),N.isLineSegments?Kt.setMode(D.LINES):N.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else N.isPoints?Kt.setMode(D.POINTS):N.isSprite&&Kt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,tn=N._multiDrawCounts,jt=N._multiDrawCount,ze=Et?K.get(Et).bytesPerElement:1,Vn=bt.get(k).currentProgram.getUniforms();for(let Re=0;Re<jt;Re++)Vn.setValue(D,"_gl_DrawID",Re),Kt.render(Tt[Re]/ze,tn[Re])}else if(N.isInstancedMesh)Kt.renderInstances(Zt,ae,N.count);else if(G.isInstancedBufferGeometry){const Tt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,tn=Math.min(G.instanceCount,Tt);Kt.renderInstances(Zt,ae,tn)}else Kt.render(Zt,ae)};function Qt(w,U,G){w.transparent===!0&&w.side===Je&&w.forceSinglePass===!1?(w.side=Ae,w.needsUpdate=!0,Wi(w,U,G),w.side=wn,w.needsUpdate=!0,Wi(w,U,G),w.side=Je):Wi(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),u=Pt.get(G),u.init(U),x.push(u),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const k=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const yt=it[ft];Qt(yt,G,N),k.add(yt)}else Qt(it,G,N),k.add(it)}),x.pop(),u=null,k},this.compileAsync=function(w,U,G=null){const k=this.compile(w,U,G);return new Promise(N=>{function it(){if(k.forEach(function(ft){bt.get(ft).currentProgram.isReady()&&k.delete(ft)}),k.size===0){N(w);return}setTimeout(it,10)}Vt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Be=null;function Qe(w){Be&&Be(w)}function Mo(){bn.stop()}function So(){bn.start()}const bn=new lc;bn.setAnimationLoop(Qe),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(w){Be=w,V.setAnimationLoop(w),w===null?bn.stop():bn.start()},V.addEventListener("sessionstart",Mo),V.addEventListener("sessionend",So),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,C),u=Pt.get(w,x.length),u.init(U),x.push(u),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),p=gt.get(w,M.length),p.init(),M.push(p),V.enabled===!0&&V.isPresenting===!0){const it=_.xr.getDepthSensingMesh();it!==null&&Rs(it,U,-1/0,_.sortObjects)}Rs(w,U,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(ot,mt),Wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Wt&&vt.addToRenderList(p,w),this.info.render.frame++,et===!0&&Q.beginShadows();const G=u.state.shadowsArray;lt.render(G,w,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let ft=0,yt=it.length;ft<yt;ft++){const Et=it[ft];Eo(k,N,w,Et)}Wt&&vt.render(w);for(let ft=0,yt=it.length;ft<yt;ft++){const Et=it[ft];yo(p,w,Et,Et.viewport)}}else N.length>0&&Eo(k,N,w,U),Wt&&vt.render(w),yo(p,w,U);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,U),Yt.resetDefaultState(),y=-1,v=null,x.pop(),x.length>0?(u=x[x.length-1],et===!0&&Q.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Rs(w,U,G,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){k&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ft=Y.update(w),yt=w.material;yt.visible&&p.push(w,ft,yt,G,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ft=Y.update(w),yt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ft.copy(ft.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(yt)){const Et=ft.groups;for(let Ut=0,Bt=Et.length;Ut<Bt;Ut++){const wt=Et[Ut],Zt=yt[wt.materialIndex];Zt&&Zt.visible&&p.push(w,ft,Zt,G,Ft.z,wt)}}else yt.visible&&p.push(w,ft,yt,G,Ft.z,null)}}const it=w.children;for(let ft=0,yt=it.length;ft<yt;ft++)Rs(it[ft],U,G,k)}function yo(w,U,G,k){const N=w.opaque,it=w.transmissive,ft=w.transparent;u.setupLightsView(G),et===!0&&Q.setGlobalState(_.clippingPlanes,G),k&&Ct.viewport(R.copy(k)),N.length>0&&Vi(N,U,G),it.length>0&&Vi(it,U,G),ft.length>0&&Vi(ft,U,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Eo(w,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new kn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Gi:dn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const it=u.state.transmissionRenderTarget[k.id],ft=k.viewport||R;it.setSize(ft.z,ft.w);const yt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(X),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&vt.render(G);const Et=_.toneMapping;_.toneMapping=En;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),et===!0&&Q.setGlobalState(_.clippingPlanes,k),Vi(w,G,k),b.updateMultisampleRenderTarget(it),b.updateRenderTargetMipmap(it),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,Zt=U.length;wt<Zt;wt++){const re=U[wt],ae=re.object,Te=re.geometry,Kt=re.material,Tt=re.group;if(Kt.side===Je&&ae.layers.test(k.layers)){const tn=Kt.side;Kt.side=Ae,Kt.needsUpdate=!0,wo(ae,G,k,Te,Kt,Tt),Kt.side=tn,Kt.needsUpdate=!0,Bt=!0}}Bt===!0&&(b.updateMultisampleRenderTarget(it),b.updateRenderTargetMipmap(it))}_.setRenderTarget(yt),_.setClearColor(X,J),Ut!==void 0&&(k.viewport=Ut),_.toneMapping=Et}function Vi(w,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=w.length;N<it;N++){const ft=w[N],yt=ft.object,Et=ft.geometry,Ut=k===null?ft.material:k,Bt=ft.group;yt.layers.test(G.layers)&&wo(yt,U,G,Et,Ut,Bt)}}function wo(w,U,G,k,N,it){w.onBeforeRender(_,U,G,k,N,it),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,G,k,w,it),N.transparent===!0&&N.side===Je&&N.forceSinglePass===!1?(N.side=Ae,N.needsUpdate=!0,_.renderBufferDirect(G,U,k,N,w,it),N.side=wn,N.needsUpdate=!0,_.renderBufferDirect(G,U,k,N,w,it),N.side=Je):_.renderBufferDirect(G,U,k,N,w,it),w.onAfterRender(_,U,G,k,N,it)}function Wi(w,U,G){U.isScene!==!0&&(U=$t);const k=bt.get(w),N=u.state.lights,it=u.state.shadowsArray,ft=N.state.version,yt=St.getParameters(w,N.state,it,U,G),Et=St.getProgramCacheKey(yt);let Ut=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Nt),Ut=new Map,k.programs=Ut);let Bt=Ut.get(Et);if(Bt!==void 0){if(k.currentProgram===Bt&&k.lightsStateVersion===ft)return bo(w,yt),Bt}else yt.uniforms=St.getUniforms(w),w.onBeforeCompile(yt,_),Bt=St.acquireProgram(yt,Et),Ut.set(Et,Bt),k.uniforms=yt.uniforms;const wt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=Q.uniform),bo(w,yt),k.needsLights=Ac(w),k.lightsStateVersion=ft,k.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Bt,k.uniformsList=null,Bt}function To(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ms.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function bo(w,U){const G=bt.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Tc(w,U,G,k,N){U.isScene!==!0&&(U=$t),b.resetTextureUnits();const it=U.fog,ft=k.isMeshStandardMaterial?U.environment:null,yt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gi,Et=(k.isMeshStandardMaterial?z:S).get(k.envMap||ft),Ut=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ae=En;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=_.toneMapping);const Te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Te!==void 0?Te.length:0,Tt=bt.get(k),tn=u.state.lights;if(et===!0&&(xt===!0||w!==v)){const De=w===v&&k.id===y;Q.setState(k,w,De)}let jt=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==tn.state.version||Tt.outputColorSpace!==yt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==Et||k.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Bt||Tt.morphTargets!==wt||Tt.morphNormals!==Zt||Tt.morphColors!==re||Tt.toneMapping!==ae||Tt.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Tt.__version=k.version);let ze=Tt.currentProgram;jt===!0&&(ze=Wi(k,U,N));let Vn=!1,Re=!1,Si=!1;const ce=ze.getUniforms(),Ye=Tt.uniforms;if(Ct.useProgram(ze.program)&&(Vn=!0,Re=!0,Si=!0),k.id!==y&&(y=k.id,Re=!0),Vn||v!==w){Ct.buffers.depth.getReversed()?(dt.copy(w.projectionMatrix),vl(dt),xl(dt),ce.setValue(D,"projectionMatrix",dt)):ce.setValue(D,"projectionMatrix",w.projectionMatrix),ce.setValue(D,"viewMatrix",w.matrixWorldInverse);const fn=ce.map.cameraPosition;fn!==void 0&&fn.setValue(D,It.setFromMatrixPosition(w.matrixWorld)),Ot.logarithmicDepthBuffer&&ce.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Re=!0,Si=!0)}if(N.isSkinnedMesh){ce.setOptional(D,N,"bindMatrix"),ce.setOptional(D,N,"bindMatrixInverse");const De=N.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ce.setValue(D,"boneTexture",De.boneTexture,b))}N.isBatchedMesh&&(ce.setOptional(D,N,"batchingTexture"),ce.setValue(D,"batchingTexture",N._matricesTexture,b),ce.setOptional(D,N,"batchingIdTexture"),ce.setValue(D,"batchingIdTexture",N._indirectTexture,b),ce.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(D,"batchingColorTexture",N._colorsTexture,b));const yi=G.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&At.update(N,G,ze),(Re||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,ce.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ye.envMap.value=Et,Ye.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Re&&(ce.setValue(D,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&bc(Ye,Si),it&&k.fog===!0&&at.refreshFogUniforms(Ye,it),at.refreshMaterialUniforms(Ye,k,H,j,u.state.transmissionRenderTarget[w.id]),Ms.upload(D,To(Tt),Ye,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ms.upload(D,To(Tt),Ye,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(D,"center",N.center),ce.setValue(D,"modelViewMatrix",N.modelViewMatrix),ce.setValue(D,"normalMatrix",N.normalMatrix),ce.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const De=k.uniformsGroups;for(let fn=0,pn=De.length;fn<pn;fn++){const Ao=De[fn];I.update(Ao,ze),I.bind(Ao,ze)}}return ze}function bc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ac(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,G){bt.get(w.texture).__webglTexture=U,bt.get(w.depthTexture).__webglTexture=G;const k=bt.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const G=bt.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){C=w,A=U,T=G;let k=!0,N=null,it=!1,ft=!1;if(w){const Et=bt.get(w);if(Et.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(Et.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Et.__hasExternalTextures)b.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&bt.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Bt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][G]:N=Bt[U],it=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?N=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[G]:N=Bt,R.copy(w.viewport),O.copy(w.scissor),B=w.scissorTest}else R.copy(Mt).multiplyScalar(H).floor(),O.copy(Lt).multiplyScalar(H).floor(),B=Xt;if(Ct.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&Ct.drawBuffers(w,N),Ct.viewport(R),Ct.scissor(O),Ct.setScissorTest(B),it){const Et=bt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,G)}else if(ft){const Et=bt.get(w.texture),Ut=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,Ut)}y=-1},this.readRenderTargetPixels=function(w,U,G,k,N,it,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Ct.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Et=w.texture,Ut=Et.format,Bt=Et.type;if(!Ot.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&G>=0&&G<=w.height-N&&D.readPixels(U,G,k,N,Dt.convert(Ut),Dt.convert(Bt),it)}finally{const Et=C!==null?bt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,k,N,it,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Et=w.texture,Ut=Et.format,Bt=Et.type;if(!Ot.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&G>=0&&G<=w.height-N){Ct.bindFramebuffer(D.FRAMEBUFFER,yt);const wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(U,G,k,N,Dt.convert(Ut),Dt.convert(Bt),0);const Zt=C!==null?bt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Zt);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _l(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(wt),D.deleteSync(re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-G),N=Math.floor(w.image.width*k),it=Math.floor(w.image.height*k),ft=U!==null?U.x:0,yt=U!==null?U.y:0;b.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ft,yt,N,it),Ct.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,k=null,N=0){w.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let it,ft,yt,Et,Ut,Bt,wt,Zt,re;const ae=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(it=G.max.x-G.min.x,ft=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Ut=G.min.y,Bt=G.isBox3?G.min.z:0):(it=ae.width,ft=ae.height,yt=ae.depth||1,Et=0,Ut=0,Bt=0),k!==null?(wt=k.x,Zt=k.y,re=k.z):(wt=0,Zt=0,re=0);const Te=Dt.convert(U.format),Kt=Dt.convert(U.type);let Tt;U.isData3DTexture?(b.setTexture3D(U,0),Tt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Tt=D.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ze=D.getParameter(D.UNPACK_SKIP_PIXELS),Vn=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const Si=w.isDataArrayTexture||w.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ye=bt.get(w),yi=bt.get(U),De=bt.get(Ye.__renderTarget),fn=bt.get(yi.__renderTarget);Ct.bindFramebuffer(D.READ_FRAMEBUFFER,De.__webglFramebuffer),Ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let pn=0;pn<yt;pn++)Si&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,N,Bt+pn),w.isDepthTexture?(ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,re+pn),D.blitFramebuffer(Et,Ut,it,ft,wt,Zt,it,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):ce?D.copyTexSubImage3D(Tt,N,wt,Zt,re+pn,Et,Ut,it,ft):D.copyTexSubImage2D(Tt,N,wt,Zt,re+pn,Et,Ut,it,ft);Ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ce?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Tt,N,wt,Zt,re,it,ft,yt,Te,Kt,ae.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,N,wt,Zt,re,it,ft,yt,Te,ae.data):D.texSubImage3D(Tt,N,wt,Zt,re,it,ft,yt,Te,Kt,ae):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,wt,Zt,it,ft,Te,Kt,ae.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,wt,Zt,ae.width,ae.height,Te,ae.data):D.texSubImage2D(D.TEXTURE_2D,N,wt,Zt,it,ft,Te,Kt,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),N===0&&U.generateMipmaps&&D.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,k=null,N=0){return w.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,k,N)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Ct.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Li{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Li(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pp extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new le;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mo extends je{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lp extends mo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ds=new L,or=new go,ar=new go,cr=new go;class Ip extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ds.subVectors(s[0],s[1]).add(s[0]),l=ds);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),m),E=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);E<1e-4&&(E=1),g<1e-4&&(g=E),p<1e-4&&(p=E),or.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,E,p),ar.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,E,p),cr.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,E,p)}else this.curveType==="catmullrom"&&(or.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),ar.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),cr.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(or.calc(c),ar.calc(c),cr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ba(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Dp(i,t){const e=1-i;return e*e*t}function Up(i,t){return 2*(1-i)*i*t}function Np(i,t){return i*i*t}function Ii(i,t,e,n){return Dp(i,t)+Up(i,e)+Np(i,n)}function Fp(i,t){const e=1-i;return e*e*e*t}function Op(i,t){const e=1-i;return 3*e*e*i*t}function Bp(i,t){return 3*(1-i)*i*i*t}function zp(i,t){return i*i*i*t}function Di(i,t,e,n,s){return Fp(i,t)+Op(i,e)+Bp(i,n)+zp(i,s)}class gc extends je{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Di(t,s.x,r.x,o.x,a.x),Di(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gp extends je{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Di(t,s.x,r.x,o.x,a.x),Di(t,s.y,r.y,o.y,a.y),Di(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _c extends je{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kp extends je{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends je{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ii(t,s.x,r.x,o.x),Ii(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hp extends je{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ii(t,s.x,r.x,o.x),Ii(t,s.y,r.y,o.y),Ii(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ba(a,c.x,l.x,h.x,d.x),ba(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:Lp,CatmullRomCurve3:Ip,CubicBezierCurve:gc,CubicBezierCurve3:Gp,EllipseCurve:mo,LineCurve:_c,LineCurve3:kp,QuadraticBezierCurve:vc,QuadraticBezierCurve3:Hp,SplineCurve:xc});class Vp extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Aa[s.type]().fromJSON(s))}return this}}class Ca extends Vp{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _c(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vc(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gc(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new mo(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class li extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new _t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const E=[],p=n/2;let u=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(m,2));function M(){const _=new L,P=new L;let A=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const y=[],v=C/r,R=v*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,X=B*c+a,J=Math.sin(X),W=Math.cos(X);P.x=R*J,P.y=-v*n+p,P.z=R*W,d.push(P.x,P.y,P.z),_.set(J,T,W).normalize(),f.push(_.x,_.y,_.z),m.push(B,1-v),y.push(g++)}E.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const v=E[y][C],R=E[y+1][C],O=E[y+1][C+1],B=E[y][C+1];(t>0||y!==0)&&(h.push(v,R,B),A+=3),(e>0||y!==r-1)&&(h.push(R,O,B),A+=3)}l.addGroup(u,A,0),u+=A}function x(_){const P=g,A=new _t,T=new L;let C=0;const y=_===!0?t:e,v=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),g++;const R=g;for(let O=0;O<=s;O++){const X=O/s*c+a,J=Math.cos(X),W=Math.sin(X);T.x=y*W,T.y=p*v,T.z=y*J,d.push(T.x,T.y,T.z),f.push(0,v,0),A.x=J*.5+.5,A.y=W*.5*v+.5,m.push(A.x,A.y),g++}for(let O=0;O<s;O++){const B=P+O,X=R+O;_===!0?h.push(X,X+1,B):h.push(X+1,X,B),C+=3}l.addGroup(u,C,_===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zn extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _o extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new L,_=new L,P=new L;for(let A=0;A<e.length;A+=3)m(e[A+0],x),m(e[A+1],_),m(e[A+2],P),c(x,_,P,M)}function c(M,x,_,P){const A=P+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const y=M.clone().lerp(_,C/A),v=x.clone().lerp(_,C/A),R=A-C;for(let O=0;O<=R;O++)O===0&&C===A?T[C][O]=y:T[C][O]=y.clone().lerp(v,O/R)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){const v=Math.floor(y/2);y%2===0?(f(T[C][v+1]),f(T[C+1][v]),f(T[C][v])):(f(T[C][v+1]),f(T[C+1][v+1]),f(T[C+1][v]))}}function l(M){const x=new L;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const M=new L;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const _=p(M)/2/Math.PI+.5,P=u(M)/Math.PI+.5;o.push(_,1-P)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const x=o[M+0],_=o[M+2],P=o[M+4],A=Math.max(x,_,P),T=Math.min(x,_,P);A>.9&&T<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const M=new L,x=new L,_=new L,P=new L,A=new _t,T=new _t,C=new _t;for(let y=0,v=0;y<r.length;y+=9,v+=6){M.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),A.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),P.copy(M).add(x).add(_).divideScalar(3);const R=p(P);E(A,v+0,M,R),E(T,v+2,x,R),E(C,v+4,_,R)}}function E(M,x,_,P){P<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=P/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.vertices,t.indices,t.radius,t.details)}}class vo extends _o{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class xo extends Ca{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ca().fromJSON(s))}return this}}const Wp={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,f,m;if(n&&(r=Jp(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],f=i[g+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Oi(r,o,e,a,c,m,0),o}};function Mc(i,t,e,n,s){let r,o;if(s===om(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ra(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ra(r,i[r],i[r+1],o);return o&&bs(o,o.next)&&(zi(o),o=o.next),o}function Hn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||ue(e.prev,e,e.next)===0)){if(zi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oi(i,t,e,n,s,r,o){if(!i)return;!o&&r&&tm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?qp(i,n,s,r):Xp(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),zi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Yp(Hn(i),t,e),Oi(i,t,e,n,s,r,2)):o===2&&Zp(i,t,e,n,s,r):Oi(Hn(i),t,e,n,s,r,1);break}}}function Xp(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=m&&ri(s,a,r,c,o,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<d?h<f?h:f:d<f?d:f,E=a>c?a>l?a:l:c>l?c:l,p=h>d?h>f?h:f:d>f?d:f,u=jr(m,g,t,e,n),M=jr(E,p,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=u&&_&&_.z<=M;){if(x.x>=m&&x.x<=E&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&ri(a,h,c,d,l,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=m&&_.x<=E&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ri(a,h,c,d,l,f,_.x,_.y)&&ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=u;){if(x.x>=m&&x.x<=E&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&ri(a,h,c,d,l,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=m&&_.x<=E&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ri(a,h,c,d,l,f,_.x,_.y)&&ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Yp(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!bs(s,r)&&Sc(s,n,n.next,r)&&Bi(s,r)&&Bi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zi(n),zi(n.next),n=i=r),n=n.next}while(n!==i);return Hn(n)}function Zp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&im(o,a)){let c=yc(o,a);o=Hn(o,o.next),c=Hn(c,c.next),Oi(o,t,e,n,s,r,0),Oi(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jp(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Mc(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(nm(l));for(s.sort($p),r=0;r<s.length;r++)e=Kp(s[r],e);return e}function $p(i,t){return i.x-t.x}function Kp(i,t){const e=jp(i,t);if(!e)return t;const n=yc(e,i);return Hn(n,n.next),Hn(e,e.next)}function jp(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ri(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Bi(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Qp(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Qp(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function tm(i,t,e,n){let s=i;do s.z===0&&(s.z=jr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,em(s)}function em(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function jr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function im(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sm(i,t)&&(Bi(i,t)&&Bi(t,i)&&rm(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||bs(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function Sc(i,t,e,n){const s=ps(ue(i,t,e)),r=ps(ue(i,t,n)),o=ps(ue(e,n,i)),a=ps(ue(e,n,t));return!!(s!==r&&o!==a||s===0&&fs(i,e,t)||r===0&&fs(i,n,t)||o===0&&fs(e,i,n)||a===0&&fs(e,t,n))}function fs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ps(i){return i>0?1:i<0?-1:0}function sm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bi(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function rm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yc(i,t){const e=new Qr(i.i,i.x,i.y),n=new Qr(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ra(i,t,e,n){const s=new Qr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function om(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ui{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ui.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pa(t),La(n,t);let o=t.length;e.forEach(Pa);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,La(n,e[c]);const a=Wp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pa(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function La(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class As extends Oe{constructor(t=new xo([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(o,2));function l(h){const d=s.length/3,f=h.extractPoints(e);let m=f.shape;const g=f.holes;Ui.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,u=g.length;p<u;p++){const M=g[p];Ui.isClockWise(M)===!0&&(g[p]=M.reverse())}const E=Ui.triangulateShape(m,g);for(let p=0,u=g.length;p<u;p++){const M=g[p];m=m.concat(M)}for(let p=0,u=m.length;p<u;p++){const M=m[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,u=E.length;p<u;p++){const M=E[p],x=M[0]+d,_=M[1]+d,P=M[2]+d;n.push(x,_,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return am(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new As(n,t.curveSegments)}}function am(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ni extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new L,f=new L,m=[],g=[],E=[],p=[];for(let u=0;u<=n;u++){const M=[],x=u/n;let _=0;u===0&&o===0?_=.5/e:u===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const A=P/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),E.push(f.x,f.y,f.z),p.push(A+_,1-x),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const x=h[u][M+1],_=h[u][M],P=h[u+1][M],A=h[u+1][M+1];(u!==0||o>0)&&m.push(x,_,A),(u!==n-1||c<Math.PI)&&m.push(_,P,A)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(E,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends xi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ut extends xi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cs extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cm extends Cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lr=new le,Ia=new L,Da=new L;class Ec{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ia.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ia),Da.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Da),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ua=new le,Ci=new L,hr=new L;class lm extends Ec{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ci.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ci),hr.copy(n.position),hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hr),n.updateMatrixWorld(),s.makeTranslation(-Ci.x,-Ci.y,-Ci.z),Ua.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua)}}class hn extends Cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hm extends Ec{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends Cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new hm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dm extends Cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Na();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Na(){return performance.now()}const Fa=new le;class pm{constructor(t,e,n=0,s=1/0){this.ray=new nc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fa.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fa),this}intersectObject(t,e=!0,n=[]){return to(t,this,n,e),n.sort(Oa),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)to(t[s],this,n,e);return n.sort(Oa),n}}function Oa(i,t){return i.distance-t.distance}function to(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)to(r[o],t,e,!0)}}class mm{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);class gm{constructor(t){$(this,"scene");$(this,"renderer");$(this,"dirLight");$(this,"hemiLight");$(this,"ambientLight");$(this,"currentTime","day");$(this,"container");this.container=t,this.scene=new Pp,this.renderer=new Rp({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=za,this.renderer.toneMapping=Ga,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement),this.ambientLight=new dm(16777215,.5),this.scene.add(this.ambientLight),this.hemiLight=new cm(16777215,4473924,.4),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new um(16775654,1.2),this.dirLight.position.set(35,45,30),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=130,this.dirLight.shadow.camera.left=-40,this.dirLight.shadow.camera.right=40,this.dirLight.shadow.camera.top=40,this.dirLight.shadow.camera.bottom=-40,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.setTimeOfDay("day"),window.addEventListener("resize",this.onWindowResize.bind(this))}setTimeOfDay(t){switch(this.currentTime=t,t){case"day":this.scene.background=new Ht(8900331),this.scene.fog=new Li(8900331,.008),this.dirLight.color.setHex(16775654),this.dirLight.intensity=1.3,this.dirLight.position.set(35,45,30),this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=.55,this.hemiLight.intensity=.4;break;case"sunset":this.scene.background=new Ht(16752762),this.scene.fog=new Li(16752762,.009),this.dirLight.color.setHex(16740419),this.dirLight.intensity=1.1,this.dirLight.position.set(50,20,20),this.ambientLight.color.setHex(16764032),this.ambientLight.intensity=.45,this.hemiLight.intensity=.3;break;case"night":this.scene.background=new Ht(659752),this.scene.fog=new Li(659752,.012),this.dirLight.color.setHex(6056896),this.dirLight.intensity=.35,this.dirLight.position.set(20,40,20),this.ambientLight.color.setHex(1713022),this.ambientLight.intensity=.25,this.hemiLight.intensity=.15;break}}cycleTimeOfDay(){return this.currentTime==="day"?this.setTimeOfDay("sunset"):this.currentTime==="sunset"?this.setTimeOfDay("night"):this.setTimeOfDay("day"),this.currentTime}onWindowResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}class _m{constructor(){$(this,"camera");$(this,"currentPreset","overview");$(this,"targetPosition",new L);$(this,"targetLookAt",new L);$(this,"currentLookAt",new L);$(this,"isDragging",!1);$(this,"previousMousePosition",{x:0,y:0});$(this,"spherical");$(this,"isUserInteracting",!1);$(this,"userInteractionTimer",0);this.camera=new Ie(50,window.innerWidth/window.innerHeight,.5,300),this.spherical=new mm(38,Math.PI/3.4,Math.PI/4),this.setPreset("overview",!0),this.setupPointerControls(),window.addEventListener("resize",this.onWindowResize.bind(this))}setPreset(t,e=!1){switch(this.currentPreset=t,this.isUserInteracting=!1,t){case"overview":this.targetPosition.set(24,22,28),this.targetLookAt.set(0,1.2,0);break;case"crossing_close":this.targetPosition.set(10,4.5,12),this.targetLookAt.set(0,1.8,0);break;case"driver_view":this.targetPosition.set(-2.2,3.2,18),this.targetLookAt.set(-2.2,1.5,0);break;case"train_follow":this.targetPosition.set(-18,5,9),this.targetLookAt.set(0,2,-2.2);break}e&&(this.camera.position.copy(this.targetPosition),this.currentLookAt.copy(this.targetLookAt),this.camera.lookAt(this.currentLookAt))}cyclePreset(){const t=["overview","crossing_close","driver_view","train_follow"],e=t.indexOf(this.currentPreset),n=t[(e+1)%t.length];return this.setPreset(n),n}update(t,e){this.currentPreset==="train_follow"&&e!==void 0&&(this.targetLookAt.set(e,1.5,-2.2),this.targetPosition.set(e+14,6,12)),this.isUserInteracting||(this.camera.position.lerp(this.targetPosition,Math.min(1,t*3.5)),this.currentLookAt.lerp(this.targetLookAt,Math.min(1,t*3.5)),this.camera.lookAt(this.currentLookAt)),this.userInteractionTimer>0&&(this.userInteractionTimer-=t,this.userInteractionTimer<=0&&(this.isUserInteracting=!1))}setupPointerControls(){const t=window,e=r=>{const o=r.target;if(o.closest("button")||o.closest(".start-overlay"))return;this.isDragging=!0;const a="touches"in r?r.touches[0].clientX:r.clientX,c="touches"in r?r.touches[0].clientY:r.clientY;this.previousMousePosition={x:a,y:c}},n=r=>{if(!this.isDragging)return;const o="touches"in r?r.touches[0].clientX:r.clientX,a="touches"in r?r.touches[0].clientY:r.clientY,c=o-this.previousMousePosition.x,l=a-this.previousMousePosition.y;if(Math.abs(c)>2||Math.abs(l)>2){this.isUserInteracting=!0,this.userInteractionTimer=6;const h=new L().subVectors(this.camera.position,this.currentLookAt);this.spherical.setFromVector3(h),this.spherical.theta-=c*.005,this.spherical.phi=Math.max(.2,Math.min(Math.PI/2.1,this.spherical.phi-l*.005)),h.setFromSpherical(this.spherical),this.camera.position.copy(this.currentLookAt).add(h),this.camera.lookAt(this.currentLookAt)}this.previousMousePosition={x:o,y:a}},s=()=>{this.isDragging=!1};t.addEventListener("mousedown",e),t.addEventListener("mousemove",n),t.addEventListener("mouseup",s),t.addEventListener("touchstart",e,{passive:!0}),t.addEventListener("touchmove",n,{passive:!0}),t.addEventListener("touchend",s,{passive:!0})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}class vm{constructor(){$(this,"ctx",null);$(this,"isMuted",!1);$(this,"alarmInterval",null);$(this,"trainNoiseTimer",null);$(this,"masterGain",null);$(this,"currentSoundType","standard_electronic");$(this,"currentHornType","japanese_train_horn");$(this,"bufferStandardCrossing",null);$(this,"bufferSoftCrossing",null);$(this,"bufferGongCrossing",null);$(this,"bufferTrainHorn",null);$(this,"bufferMusicHorn",null);$(this,"bufferSoftWhistle",null)}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.preRenderAllAudioBuffers()}this.ctx.state==="suspended"&&this.ctx.resume()}preRenderAllAudioBuffers(){if(!this.ctx)return;const t=this.ctx.sampleRate;this.bufferStandardCrossing=this.renderSinglePitchBell(t,700,.45,1),this.bufferSoftCrossing=this.renderSinglePitchBell(t,650,.48,.85),this.bufferGongCrossing=this.renderMechanicalGong(t,780,.55),this.bufferTrainHorn=this.renderJapaneseTrainAirHorn(t),this.bufferMusicHorn=this.renderMusicHornBuffer(t),this.bufferSoftWhistle=this.renderSoftWhistleBuffer(t)}renderJapaneseTrainAirHorn(t){const n=Math.floor(t*.32),s=this.ctx.createBuffer(2,n,t),r=s.getChannelData(0),o=s.getChannelData(1),a=330,c=392;for(let l=0;l<n;l++){const h=l/t;let d=0;h<.015?d=h/.015:h<.2?d=1:d=Math.exp(-(h-.2)*22);const f=Math.sin(2*Math.PI*a*h)*.7+Math.sin(2*Math.PI*(a*2)*h)*.25+Math.sin(2*Math.PI*(a*3)*h)*.1,m=Math.sin(2*Math.PI*c*h)*.7+Math.sin(2*Math.PI*(c*2)*h)*.25+Math.sin(2*Math.PI*(c*3)*h)*.1,g=(f*.5+m*.5)*d*.65,E=Math.tanh(g);r[l]=E,o[l]=E}return s}renderMusicHornBuffer(t){const n=Math.floor(t*1.4),s=this.ctx.createBuffer(2,n,t),r=s.getChannelData(0),o=s.getChannelData(1),a=[{freq:349.2,start:0,dur:.18},{freq:440,start:.16,dur:.18},{freq:493.8,start:.32,dur:.18},{freq:587.3,start:.48,dur:.22},{freq:698.4,start:.68,dur:.68}];for(let c=0;c<n;c++){const l=c/t;let h=0;for(const d of a)if(l>=d.start&&l<d.start+d.dur+.1){const f=l-d.start;let m=0;f<.02?m=f/.02:m=Math.exp(-(f-.02)*5);const g=Math.sin(2*Math.PI*d.freq*f)*.7+Math.sin(2*Math.PI*(d.freq*2)*f)*.25;h+=g*m*.45}r[c]=Math.tanh(h),o[c]=Math.tanh(h)}return s}renderSoftWhistleBuffer(t){const n=Math.floor(t*1),s=this.ctx.createBuffer(2,n,t),r=s.getChannelData(0),o=s.getChannelData(1);for(let a=0;a<n;a++){const c=a/t;let l=0;c<.03?l=c/.03:c<.6?l=1:l=Math.exp(-(c-.6)*7);const h=Math.sin(2*Math.PI*1046.5*c)*.65,d=Math.sin(2*Math.PI*1318.5*c)*.35,f=(h+d)*l*.45;r[a]=Math.tanh(f),o[a]=Math.tanh(f)}return s}renderSinglePitchBell(t,e,n,s){const r=Math.floor(t*n),o=this.ctx.createBuffer(2,r,t),a=o.getChannelData(0),c=o.getChannelData(1);for(let l=0;l<r;l++){const h=l/t,f=Math.exp(-h*400)*Math.sin(2*Math.PI*(e*3.8)*h)*.12*s,g=Math.exp(-h*22)*Math.sin(2*Math.PI*(e*2)*h)*.18*s,E=e*(1+.008*Math.exp(-h*120)),M=(Math.exp(-h*8)*Math.sin(2*Math.PI*E*h)*.9+g+f)*.85;a[l]=Math.tanh(M),c[l]=Math.tanh(M)}return o}renderMechanicalGong(t,e,n){const s=Math.floor(t*n),r=this.ctx.createBuffer(2,s,t),o=r.getChannelData(0),a=r.getChannelData(1);for(let c=0;c<s;c++){const l=c/t,h=Math.exp(-l*6.5)*Math.sin(2*Math.PI*e*l)*.7,d=Math.exp(-l*12)*Math.sin(2*Math.PI*(e*1.52)*l)*.35,f=Math.exp(-l*24)*Math.sin(2*Math.PI*(e*2.76)*l)*.25,m=Math.exp(-l*280)*Math.sin(2*Math.PI*(e*4.2)*l)*.2,g=(h+d+f+m)*.8;o[c]=Math.tanh(g),a[c]=Math.tanh(g)}return r}setMuted(t){this.isMuted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(t?0:1,this.ctx.currentTime),this.isMuted&&(this.stopCrossingAlarm(),this.stopTrainSound())}getIsMuted(){return this.isMuted}startCrossingAlarm(){if(this.isMuted||(this.init(),this.alarmInterval!==null))return;const t=()=>{this.isMuted||this.playCrossingBellBuffer()};t(),this.alarmInterval=window.setInterval(t,445)}stopCrossingAlarm(){this.alarmInterval!==null&&(clearInterval(this.alarmInterval),this.alarmInterval=null)}playCrossingBellBuffer(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.bufferStandardCrossing;if(this.currentSoundType==="soft_electronic"?t=this.bufferSoftCrossing:this.currentSoundType==="mechanical_bell"&&(t=this.bufferGongCrossing),!t)return;const e=this.ctx.createBufferSource();e.buffer=t;const n=this.ctx.createGain();n.gain.setValueAtTime(.65,this.ctx.currentTime),e.connect(n),n.connect(this.masterGain),e.start()}playTrainHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();let t=this.bufferTrainHorn;if(this.currentHornType==="music_horn"?t=this.bufferMusicHorn:this.currentHornType==="soft_whistle"&&(t=this.bufferSoftWhistle),!t)return;const e=this.ctx.createBufferSource();e.buffer=t;const n=this.ctx.createGain();n.gain.setValueAtTime(.75,this.ctx.currentTime),e.connect(n),n.connect(this.masterGain),e.start()}startTrainSound(){if(this.isMuted||(this.init(),this.trainNoiseTimer!==null))return;const t=()=>{if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,n=(s,r,o)=>{if(!this.ctx||!this.masterGain)return;const a=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="triangle",a.frequency.setValueAtTime(o,s),a.frequency.exponentialRampToValueAtTime(35,s+.07),l.type="lowpass",l.frequency.setValueAtTime(300,s),c.gain.setValueAtTime(r,s),c.gain.exponentialRampToValueAtTime(.001,s+.07),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(s),a.stop(s+.08)};n(e,.22,130),setTimeout(()=>{this.ctx&&n(this.ctx.currentTime,.18,100)},65)};t(),this.trainNoiseTimer=window.setInterval(t,250)}stopTrainSound(){this.trainNoiseTimer!==null&&(clearInterval(this.trainNoiseTimer),this.trainNoiseTimer=null)}playCarHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const t=this.ctx.currentTime,e=(n,s)=>{if(!this.ctx||!this.masterGain)return;const r=t+n,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(580,r),a.gain.setValueAtTime(.001,r),a.gain.linearRampToValueAtTime(.18,r+.02),a.gain.exponentialRampToValueAtTime(.001,r+s),o.connect(a),a.connect(this.masterGain),o.start(r),o.stop(r+s+.02)};e(0,.12),e(.16,.15)}playBarrierMotor(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.linearRampToValueAtTime(180,t+.4);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(400,t),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.04,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.4),e.connect(s),s.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}playTapSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;this.init();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(400,t),e.frequency.exponentialRampToValueAtTime(800,t+.08),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.1)}}class xm{constructor(){$(this,"group");$(this,"roadMeshes",[]);$(this,"windowMaterials",[]);$(this,"windowLights",[]);this.group=new te,this.createTerrain(),this.createTracks(),this.createRoad(),this.createCrossingPavement(),this.createStationPlatform(),this.createScenery()}createTerrain(){const t=new Jt(160,160),e=new ut({color:8112208}),n=new F(t,e);n.rotation.x=-Math.PI/2,n.position.y=-.05,n.receiveShadow=!0,this.group.add(n);const s=new Jt(160,20),r=new ut({color:5227511}),o=new F(s,r);o.rotation.x=-Math.PI/2,o.position.set(0,-.04,-55),o.receiveShadow=!0,this.group.add(o)}createTracks(){const t=new te,e=160;[-2.2,2.2].forEach(s=>{const r=new nt(e,.2,3.4),o=new ut({color:7237230}),a=new F(r,o);a.position.set(0,.1,s),a.receiveShadow=!0,t.add(a);const c=new nt(.3,.15,2.8),l=new ut({color:6111287}),h=1,d=Math.floor(e/h);for(let p=0;p<d;p++){const u=-e/2+p*h,M=new F(c,l);M.position.set(u,.22,s),M.castShadow=!0,M.receiveShadow=!0,t.add(M)}const f=new nt(e,.18,.12),m=new Fe({color:13421772,metalness:.8,roughness:.2}),g=new F(f,m);g.position.set(0,.32,s-.9),g.castShadow=!0,t.add(g);const E=new F(f,m);E.position.set(0,.32,s+.9),E.castShadow=!0,t.add(E)}),this.group.add(t)}createRoad(){const t=new te,e=160,n=9,s=new Jt(n,e),r=new ut({color:3622735}),o=new F(s,r);o.rotation.x=-Math.PI/2,o.position.set(0,.02,0),o.receiveShadow=!0,t.add(o),this.roadMeshes.push(o);const a=new ut({color:13621468});[-5,5].forEach(f=>{const m=new nt(1.2,.12,e),g=new F(m,a);g.position.set(f,.06,0),g.receiveShadow=!0,t.add(g)});const c=new we({color:16771899}),l=2.5,h=1.8;for(let f=-e/2;f<e/2;f+=l+h)if(Math.abs(f)>5.5){const m=new Jt(.3,l),g=new F(m,c);g.rotation.x=-Math.PI/2,g.position.set(0,.03,f+l/2),t.add(g)}const d=new we({color:16777215});[-5.2,5.2].forEach(f=>{const m=new Jt(n*.88,.6),g=new F(m,d);g.rotation.x=-Math.PI/2,g.position.set(0,.035,f),t.add(g)}),[-8,8].forEach(f=>{const m=f>0?3.8:-3.8,g=new ee(.05,.05,2.2),E=new ut({color:13421772}),p=new F(g,E);p.position.set(m,1.1,f),p.castShadow=!0,t.add(p);const u=new xo;u.moveTo(0,-.35),u.lineTo(.35,.35),u.lineTo(-.35,.35),u.closePath();const M=new As(u),x=new we({color:13840175,side:Je}),_=new F(M,x);_.position.set(m,2.1,f),_.rotation.y=f>0?0:Math.PI,t.add(_)}),this.group.add(t)}createCrossingPavement(){const t=new ut({color:4342338}),e=new nt(8.8,.28,10),n=new F(e,t);n.position.set(0,.16,0),n.receiveShadow=!0,this.group.add(n)}createStationPlatform(){const t=new te,e=new nt(26,.6,3),n=new ut({color:12434877}),s=new F(e,n);s.position.set(24,.3,-5.2),s.receiveShadow=!0,t.add(s);const r=new nt(20,.2,3.6),o=new ut({color:3706428}),a=new F(r,o);a.position.set(24,2.6,-5.2),t.add(a);const c=new ut({color:15658734});[-8,-3,3,8].forEach(d=>{const f=new ee(.08,.08,2.2),m=new F(f,c);m.position.set(24+d,1.4,-5.2),m.castShadow=!0,t.add(m)});const l=new F(new ee(.05,.05,1.5),c);l.position.set(24,1,-4.2),t.add(l);const h=new F(new nt(1.6,.8,.1),new ut({color:16777215}));h.position.set(24,1.5,-4.2),t.add(h),this.group.add(t)}createScenery(){const t=new te;[{x:-16,z:-14},{x:-22,z:-18},{x:-28,z:-12},{x:-14,z:14},{x:-24,z:16},{x:-18,z:24},{x:16,z:15},{x:26,z:18},{x:34,z:14},{x:-38,z:6},{x:42,z:8},{x:-44,z:-8}].forEach((s,r)=>{const o=this.createTree(r%2===0);o.position.set(s.x,0,s.z),t.add(o)}),[{x:-20,z:-28,color:16740419,roof:13840175,scale:1.2},{x:-32,z:-26,color:4367861,roof:1668818,scale:1},{x:22,z:-24,color:16763432,roof:16088064,scale:1.1},{x:-18,z:32,color:11225020,roof:8069026,scale:1},{x:20,z:30,color:2533018,roof:31083,scale:1.2},{x:34,z:28,color:16754470,roof:15094016,scale:.95}].forEach(s=>{const r=this.createHouse(s.color,s.roof,s.scale);r.position.set(s.x,0,s.z),t.add(r)}),this.group.add(t)}createTree(t){const e=new te,n=new ee(.2,.3,1.4,6),s=new ut({color:6111287}),r=new F(n,s);r.position.y=.7,r.castShadow=!0,e.add(r);const o=[4431943,6732650,3046706],a=new ut({color:o[Math.floor(Math.random()*o.length)],flatShading:!0});if(t){const c=new vo(1.2,1),l=new F(c,a);l.position.y=2,l.castShadow=!0,e.add(l)}else{const c=new F(new zn(1.2,1.6,6),a);c.position.y=1.6,c.castShadow=!0,e.add(c);const l=new F(new zn(.9,1.4,6),a);l.position.y=2.4,l.castShadow=!0,e.add(l)}return e}createHouse(t,e,n){const s=new te;s.scale.set(n,n,n);const r=new nt(4,2.6,3.2),o=new ut({color:t}),a=new F(r,o);a.position.y=1.3,a.castShadow=!0,a.receiveShadow=!0,s.add(a);const c=new zn(3.2,1.8,4),l=new ut({color:e}),h=new F(c,l);h.rotation.y=Math.PI/4,h.position.y=3.3,h.castShadow=!0,s.add(h);const d=new Fe({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),f=new F(new nt(.8,.8,.1),d);f.position.set(-1,1.5,1.62),s.add(f),this.windowMaterials.push(d);const m=new Fe({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),g=new F(new nt(.8,.8,.1),m);g.position.set(1,1.5,1.62),s.add(g),this.windowMaterials.push(m);const E=new Fe({color:14743546,emissive:0,emissiveIntensity:0,roughness:.2}),p=new F(new nt(.8,.8,.1),E);p.position.set(0,1.5,-1.62),s.add(p),this.windowMaterials.push(E);const u=new hn(16766287,0,10,1.8);u.position.set(0,1.6,1.8),s.add(u),this.windowLights.push(u);const M=new ut({color:9268835}),x=new F(new nt(.9,1.4,.1),M);return x.position.set(0,.7,1.62),s.add(x),s}setNightMode(t){this.windowMaterials.forEach(e=>{t?(e.color.setHex(16775620),e.emissive.setHex(16766287),e.emissiveIntensity=1.3):(e.color.setHex(14743546),e.emissive.setHex(0),e.emissiveIntensity=0)}),this.windowLights.forEach(e=>{e.intensity=t?1.5:0})}}class Mm{constructor(){$(this,"group");$(this,"gates",[]);$(this,"clickableMeshes",[]);$(this,"barrierAngle",Math.PI*.42);$(this,"targetBarrierAngle",Math.PI*.42);$(this,"blinkTimer",0);$(this,"isBlinking",!1);$(this,"blinkPhase",!1);this.group=new te;const t=this.createGate({x:4.8,z:5.2,rotationY:0,armDirection:-1});this.group.add(t.group),this.gates.push(t);const e=this.createGate({x:-4.8,z:-5.2,rotationY:Math.PI,armDirection:-1});this.group.add(e.group),this.gates.push(e)}createGate(t){const e=new te;e.position.set(t.x,0,t.z),e.rotation.y=t.rotationY;const n=new ee(.52,.62,.4,16),s=new ut({color:10395294}),r=new F(n,s);r.position.y=.2,r.receiveShadow=!0,e.add(r);const o=new ee(.32,.35,.08,16),a=new ut({color:3622735}),c=new F(o,a);c.position.y=.44,e.add(c);const l=4.5,h=.11,d=new te,f=9,m=(l-.48)/f;for(let Pt=0;Pt<f;Pt++){const Q=new ee(h,h,m,16),lt=new ut({color:Pt%2===0?16766464:2171169}),vt=new F(Q,lt);vt.position.y=.48+m/2+Pt*m,vt.castShadow=!0,d.add(vt),this.clickableMeshes.push(vt)}e.add(d);const g=new te;g.position.y=l;const E=new Ni(.22,16,12,0,Math.PI*2,0,Math.PI*.52),p=new ut({color:2171169}),u=new F(E,p);u.position.y=-.02,u.castShadow=!0,g.add(u);const M=new F(new ee(.03,.04,.06,12),new ut({color:3355443}));M.position.y=.2,g.add(M),e.add(g),this.clickableMeshes.push(u);const x=new te;x.position.set(0,3.8,.14);const _=Pt=>{const Q=new te;Q.rotation.z=Pt;const lt=1.6,vt=.2,At=.025,pt=new F(new nt(lt,vt,At),new ut({color:16766464}));pt.castShadow=!0,Q.add(pt);const kt=new ut({color:2171169});[-.55,-.22,.22,.55].forEach(V=>{const Z=new xo,ht=.12,rt=vt/2;Z.moveTo(-ht/2+rt,rt),Z.lineTo(ht/2+rt,rt),Z.lineTo(ht/2-rt,-rt),Z.lineTo(-ht/2-rt,-rt),Z.closePath();const Nt=new As(Z),oe=new F(Nt,kt);oe.position.set(V,0,At/2+.002),Q.add(oe)});const Yt=new ut({color:2171169}),I=new F(new nt(lt,.015,At+.005),Yt);I.position.set(0,vt/2-.0075,0);const st=new F(new nt(lt,.015,At+.005),Yt);return st.position.set(0,-vt/2+.0075,0),Q.add(I,st),Q},P=_(Math.PI/4),A=_(-Math.PI/4);x.add(P,A);const T=new ee(.08,.08,.05,16);T.rotateX(Math.PI/2);const C=new ut({color:2171169}),y=new F(T,C);y.position.z=.025,x.add(y);const v=new ee(.04,.04,.14,8);v.rotateX(Math.PI/2);const R=new F(v,C);R.position.z=-.07,x.add(R),e.add(x);const O=new te;O.position.set(0,2.7,.15);const B=new ee(.045,.045,1.5,12);B.rotateZ(Math.PI/2);const X=new ut({color:2763306}),J=new F(B,X);O.add(J);const W=new ee(.12,.12,.16,16),j=new F(W,X);O.add(j);const H=Pt=>{const Q=new te;Q.position.set(Pt,0,.06);const lt=new ee(.34,.34,.02,28);lt.rotateX(Math.PI/2);const vt=new ut({color:1118481}),At=new F(lt,vt);Q.add(At);const pt=new ee(.24,.24,.12,28);pt.rotateX(Math.PI/2);const kt=new ut({color:2236962}),Dt=new F(pt,kt);Dt.position.z=.07,Q.add(Dt);const Yt=new Ni(.21,24,12,0,Math.PI*2,0,Math.PI*.45);Yt.rotateX(Math.PI/2);const I=new Fe({color:4849664,emissive:0,emissiveIntensity:0,roughness:.15,metalness:.05}),st=new F(Yt,I);st.position.z=.13,Q.add(st);const V=new hn(16711680,0,10,1.8);return V.position.set(0,0,.35),Q.add(V),{singleLamp:Q,lens:st,pointLight:V}},ot=H(-.64);O.add(ot.singleLamp);const mt=ot.lens,Mt=ot.pointLight,Lt=H(.64);O.add(Lt.singleLamp);const Xt=Lt.lens,q=Lt.pointLight;e.add(O);const et=new te;et.position.set(.28*t.armDirection,1.35,.14);const xt=new nt(.26,.4,.18),dt=new ut({color:16766464}),Rt=new F(xt,dt);et.add(Rt);const It=new Fe({color:16717636,emissive:13959168,emissiveIntensity:.4,roughness:.3}),Ft=new F(new ee(.06,.06,.06,16),It);Ft.rotation.x=Math.PI/2,Ft.position.z=.1,et.add(Ft),e.add(et),this.clickableMeshes.push(Rt,Ft);const $t=new te;$t.position.set(-.7*t.armDirection,0,.35);const Wt=new nt(.65,.75,.52),he=new ut({color:5533306}),D=new F(Wt,he);D.position.y=.95,D.castShadow=!0,$t.add(D),this.clickableMeshes.push(D);const ye=new F(new nt(.72,.58,.58),new ut({color:7901340}));ye.position.y=.29,$t.add(ye);const Vt=new F(new nt(.55,.65,.03),new ut({color:4545124}));Vt.position.set(0,.95,.27),$t.add(Vt);const Ot=new te;Ot.position.set(0,1.05,.32);const Ct=new nt(.75,.26,.2),se=new ut({color:2503224}),bt=new F(Ct,se);bt.position.set(-.45*t.armDirection,0,0),bt.castShadow=!0,Ot.add(bt);const b=new F(new ee(.12,.12,.22,16),new ut({color:1118481}));b.rotation.x=Math.PI/2,Ot.add(b);const S=5.8,z=new te,K=12,tt=S/K;for(let Pt=0;Pt<K;Pt++){const Q=new nt(tt,.13,.07),lt=new ut({color:Pt%2===0?16766464:2171169}),vt=new F(Q,lt);vt.position.set((Pt*tt+tt/2)*t.armDirection,0,0),vt.castShadow=!0,z.add(vt)}const Y=new Ni(.09,12,12),St=new Fe({color:6684672,emissive:0,roughness:.2}),at=new F(Y,St);at.position.set(2.4*t.armDirection,.09,0),z.add(at);const gt=new hn(16717636,0,5);return gt.position.set(2.4*t.armDirection,.15,.15),z.add(gt),Ot.add(z),$t.add(Ot),e.add($t),Ot.rotation.z=-this.barrierAngle,{group:e,pole:d.children[0],barrierPivot:Ot,barrierArm:z.children[0],redLightLeft:mt,redLightRight:Xt,pointLightLeft:Mt,pointLightRight:q,armLight:at,armPointLight:gt,leftIntensity:0,rightIntensity:0}}setTrainDirection(t){}setBlinking(t){this.isBlinking=t,t||this.gates.forEach(e=>{e.leftIntensity=0,e.rightIntensity=0,e.redLightLeft.material.emissive.setHex(0),e.redLightRight.material.emissive.setHex(0),e.pointLightLeft.intensity=0,e.pointLightRight.intensity=0,e.armLight.material.emissive.setHex(0),e.armPointLight.intensity=0})}setTargetBarrierAngle(t){this.targetBarrierAngle=t?0:Math.PI*.42}update(t){if(Math.abs(this.barrierAngle-this.targetBarrierAngle)>.005&&(this.barrierAngle<this.targetBarrierAngle?this.barrierAngle=Math.min(this.targetBarrierAngle,this.barrierAngle+1.45*t):this.barrierAngle=Math.max(this.targetBarrierAngle,this.barrierAngle-1.45*t),this.gates[0].barrierPivot.rotation.z=-this.barrierAngle,this.gates[1].barrierPivot.rotation.z=-this.barrierAngle),this.isBlinking){this.blinkTimer+=t,this.blinkTimer>=.445&&(this.blinkTimer=0,this.blinkPhase=!this.blinkPhase);const n=this.blinkPhase?1:0,s=this.blinkPhase?0:1,r=12;this.gates.forEach(o=>{o.leftIntensity+=(n-o.leftIntensity)*Math.min(t*r,1),o.rightIntensity+=(s-o.rightIntensity)*Math.min(t*r,1);const a=o.redLightLeft.material,c=o.redLightRight.material;a.emissive.setRGB(o.leftIntensity*1,0,0),a.emissiveIntensity=o.leftIntensity*1.6,o.pointLightLeft.intensity=o.leftIntensity*2.8,c.emissive.setRGB(o.rightIntensity*1,0,0),c.emissiveIntensity=o.rightIntensity*1.6,o.pointLightRight.intensity=o.rightIntensity*2.8;const l=o.armLight.material,h=(o.leftIntensity+o.rightIntensity)*.5;l.emissive.setRGB(h*.9,0,0),o.armPointLight.intensity=h*1.2})}}isBarrierFullyDown(){return this.barrierAngle<=.05}isBarrierFullyUp(){return this.barrierAngle>=Math.PI*.4}}const wc={yamanote:{type:"yamanote",name:"山手線 E235系",bodyColor:13621468,stripeColor:7649828,roofColor:9479342,accentColor:2503224,isShinkansen:!1},hayabusa:{type:"hayabusa",name:"新幹線 E5系 はやぶさ",bodyColor:15527921,stripeColor:14942335,roofColor:34681,isShinkansen:!0},shonan:{type:"shonan",name:"国鉄 115系 湘南色",bodyColor:1793568,stripeColor:15094016,roofColor:7697781,isShinkansen:!1},doctor_yellow:{type:"doctor_yellow",name:"ドクターイエロー 923形",bodyColor:16766464,stripeColor:870305,roofColor:11583173,isShinkansen:!0}};class Sm{constructor(t="yamanote",e=1){$(this,"group");$(this,"totalLength",0);$(this,"wheels",[]);$(this,"headLights",[]);this.group=new te;const n=wc[t],s=13,r=2.5,o=2.5,a=.4,c=this.createCar(n,s,r,o,"lead",e);c.position.x=(s+a)*e,this.group.add(c);const l=this.createCar(n,s,r,o,"mid",e);l.position.x=0,this.group.add(l);const h=this.createCar(n,s,r,o,"tail",e);h.position.x=-13.4*e,this.group.add(h),this.totalLength=(s+a)*3}createCar(t,e,n,s,r,o){const a=new te;return t.isShinkansen?this.buildShinkansenCar(a,t,e,n,s,r,o):this.buildCommuterCar(a,t,e,n,s,r,o),this.buildBogies(a,e,n),a}buildCommuterCar(t,e,n,s,r,o,a){const c=new ut({color:e.bodyColor}),l=new ut({color:e.stripeColor}),h=new ut({color:e.roofColor}),d=new we({color:1713022}),f=new ut({color:11583173}),m=new nt(n,r,s),g=new F(m,c);g.position.y=r/2+.5,g.castShadow=!0,g.receiveShadow=!0,t.add(g);const E=new nt(n+.02,.45,s+.02),p=new F(E,l);p.position.y=r*.45+.5,t.add(p);const u=new nt(n,.35,s*.94),M=new F(u,h);M.position.y=r+.5+.12,t.add(M);const x=new nt(n*.45,.32,s*.55),_=new ut({color:9479342}),P=new F(x,_);P.position.y=r+.5+.38,P.castShadow=!0,t.add(P);const A=4,T=n/(A+.5);for(let C=0;C<A;C++){const y=-n*.4+C*(T*.88);[-s/2-.02,s/2+.02].forEach((v,R)=>{const O=new F(new Jt(1.2,r*.85),f);O.position.set(y,r*.48+.5,v),R===0&&(O.rotation.y=Math.PI),t.add(O);const B=new F(new Jt(.8,r*.35),d);B.position.set(y,r*.65+.5,v+(R===0?-.01:.01)),R===0&&(B.rotation.y=Math.PI),t.add(B)})}if(o==="lead"||o==="tail"){const C=o==="lead",y=C?a:-a,v=new te;v.position.set((n/2+.04)*y,r/2+.5,0),y<0&&(v.rotation.y=Math.PI);const R=new ut({color:2171169}),O=new F(new nt(.12,r*.94,s*.94),R);v.add(O);const B=new we({color:e.stripeColor}),X=new F(new nt(.14,.12,s*.96),B);X.position.y=r*.45,v.add(X);const J=new F(new nt(.14,.12,s*.96),B);J.position.y=-r*.45,v.add(J);const W=new we({color:16750592}),j=new F(new Jt(.8,.22),W);j.rotation.y=Math.PI/2,j.position.set(.08,r*.38,0),v.add(j);const H=new F(new Jt(s*.8,r*.45),d);H.rotation.y=Math.PI/2,H.position.set(.08,r*.1,0),v.add(H);const ot=new nt(.3,.5,s*.92),mt=new ut({color:4545124}),Mt=new F(ot,mt);Mt.position.set(.05,-r*.45-.2,0),v.add(Mt);const Lt=new F(new nt(.4,.18,.24),new ut({color:2503224}));if(Lt.position.set(.2,-r*.45-.2,0),v.add(Lt),C){const Xt=new we({color:16777215});[-s*.35,s*.35].forEach(et=>{const xt=new F(new li(.12,16),Xt);xt.rotation.y=Math.PI/2,xt.position.set(.08,-r*.25,et),v.add(xt)});const q=new hn(16775620,1.8,20);q.position.set(1.5,0,0),v.add(q),this.headLights.push(q)}else{const Xt=new we({color:16717636});[-s*.35,s*.35].forEach(q=>{const et=new F(new li(.1,16),Xt);et.rotation.y=Math.PI/2,et.position.set(.08,-r*.25,q),v.add(et)})}t.add(v)}if(o==="mid"){const C=this.createSingleArmPantograph(s);C.position.set(n*.25,r+.5+.4,0),t.add(C)}}buildShinkansenCar(t,e,n,s,r,o,a){const c=e.type==="hayabusa",l=new ut({color:e.roofColor}),h=new ut({color:e.bodyColor}),d=new ut({color:e.stripeColor}),f=new we({color:1713022}),m=new nt(n,r*.55,s),g=new F(m,h);g.position.y=r*.55/2+.45,g.castShadow=!0,t.add(g);const E=new nt(n,r*.5,s*.94),p=new F(E,l);p.position.y=r*.55+.45+r*.5/2,p.castShadow=!0,t.add(p);const u=new nt(n+.02,.22,s+.02),M=new F(u,d);M.position.y=r*.55+.45,t.add(M);const x=7,_=n/(x+1);for(let P=1;P<=x;P++){const A=-n/2+P*_;[-s/2-.02,s/2+.02].forEach((T,C)=>{const y=new F(new Jt(.7,.45),f);y.position.set(A,r*.65+.45,T),C===0&&(y.rotation.y=Math.PI),t.add(y)})}if(o==="lead"||o==="tail"){const P=o==="lead",A=P?a:-a,T=new te;T.position.set(n/2*A,.45,0),A<0&&(T.rotation.y=Math.PI);const C=c?4.8:3.6,y=new zn(s*.5,C,16);y.rotateZ(-Math.PI/2);const v=new F(y,h);v.position.set(C/2,r*.35,0),v.scale.set(1,.6,.95),T.add(v);const R=new F(y,l);R.position.set(C/2,r*.65,0),R.scale.set(1,.55,.9),T.add(R);const O=new nt(1.2,.4,s*.5),B=new F(O,f);if(B.position.set(1.2,r*.85,0),B.rotation.z=-.25,T.add(B),P){const X=new li(.16,16),J=new we({color:16775620});[-s*.28,s*.28].forEach(j=>{const H=new F(X,J);H.rotation.y=Math.PI/2,H.position.set(C*.7,r*.4,j),T.add(H)});const W=new hn(16775620,1.8,22);W.position.set(C+1,r*.5,0),T.add(W),this.headLights.push(W)}t.add(T)}if(o==="mid"){const P=new ut({color:9479342}),A=new F(new nt(2.5,.5,.1),P);A.position.set(0,r+.65,s*.42),t.add(A);const T=new F(new nt(2.5,.5,.1),P);T.position.set(0,r+.65,-s*.42),t.add(T);const C=this.createSingleArmPantograph(s*.8);C.position.set(0,r+.5+.35,0),t.add(C)}}createSingleArmPantograph(t){const e=new te,n=new ut({color:13840175}),s=new ut({color:14737632});[-.3,.3].forEach(c=>{const l=new F(new ee(.06,.08,.15,8),n);l.position.set(c,.08,0),e.add(l)});const r=new F(new ee(.035,.035,.8,8),s);r.rotation.z=Math.PI/3,r.position.set(-.2,.4,0),e.add(r);const o=new F(new ee(.03,.03,.75,8),s);o.rotation.z=-Math.PI/3.2,o.position.set(.15,.85,0),e.add(o);const a=new F(new nt(.08,.04,t*.7),s);return a.position.set(.35,1.15,0),e.add(a),e}buildBogies(t,e,n){const s=new ut({color:2171169}),r=new ut({color:3622735}),o=new ee(.36,.36,.18,16);o.rotateX(Math.PI/2),[-e*.34,e*.34].forEach(a=>{const c=new F(new nt(2.5,.22,n*.82),r);c.position.set(a,.44,0),t.add(c),[-n*.38,n*.38].forEach(l=>{const h=new F(new ee(.18,.18,.2,12),r);h.position.set(a,.54,l),t.add(h)}),[-.75,.75].forEach(l=>{const h=new F(o,s);h.position.set(a+l,.36,n/2-.14),h.castShadow=!0,t.add(h),this.wheels.push(h);const d=new F(o,s);d.position.set(a+l,.36,-n/2+.14),d.castShadow=!0,t.add(d),this.wheels.push(d)})})}rotateWheels(t){const e=t/.36;this.wheels.forEach(n=>{n.rotation.z-=e})}}class ym{constructor(t,e){$(this,"scene");$(this,"soundEngine");$(this,"activeTrain",null);$(this,"trainTypes",["yamanote","hayabusa","shonan","doctor_yellow"]);$(this,"currentTypeIndex",0);$(this,"trackToggle",!1);this.scene=t,this.soundEngine=e}isTrainRunning(){return this.activeTrain!==null}spawnTrain(){if(this.activeTrain)return this.activeTrain;const t=this.trainTypes[this.currentTypeIndex];this.currentTypeIndex=(this.currentTypeIndex+1)%this.trainTypes.length;const e=wc[t];this.trackToggle=!this.trackToggle;const n=this.trackToggle?1:-1,s=this.trackToggle?-2.2:2.2,r=-85*n,o=new Sm(t,n);return o.group.position.set(r,0,s),this.scene.add(o.group),this.activeTrain={model:o,trackZ:s,direction:n,posX:r,speed:0,maxSpeed:e.isShinkansen?32:25,type:t,name:e.name,hasPlayedHorn:!1},this.soundEngine.startTrainSound(),this.activeTrain}update(t){if(!this.activeTrain)return;const e=this.activeTrain;if(e.speed<e.maxSpeed){const s=e.type==="hayabusa"||e.type==="doctor_yellow"?24:18;e.speed=Math.min(e.maxSpeed,e.speed+s*t)}const n=e.speed*t*e.direction;if(e.posX+=n,e.model.group.position.x=e.posX,e.model.rotateWheels(Math.abs(n)),!e.hasPlayedHorn){const s=-e.posX*e.direction;s<=35&&s>0&&(this.soundEngine.playTrainHorn(),e.hasPlayedHorn=!0)}Math.abs(e.posX)>95&&e.posX*e.direction>0&&this.removeTrain()}removeTrain(){this.activeTrain&&(this.scene.remove(this.activeTrain.model.group),this.activeTrain=null,this.soundEngine.stopTrainSound())}}class Em{constructor(t,e,n){$(this,"group");$(this,"type");$(this,"length");$(this,"width");$(this,"height");$(this,"direction");$(this,"laneX");$(this,"speed",0);$(this,"targetSpeed",10);$(this,"state","approaching");$(this,"stopWaitTimer",0);$(this,"lookTimer",0);$(this,"initialYRotation",0);$(this,"wheels",[]);$(this,"sirenLight",null);$(this,"sirenPointLight",null);$(this,"headlights",[]);this.type=t,this.direction=e,this.laneX=n,this.group=new te;let s;switch(t){case"ambulance":s={type:t,color:16448250,length:5,width:1.95,height:2.05};break;case"fire_engine":s={type:t,color:13840175,length:5.2,width:2.1,height:2.1};break;case"police":s={type:t,color:2171169,length:4.2,width:1.9,height:1.4};break;case"minivan":s={type:t,color:16119285,length:4.3,width:1.75,height:1.75};break;case"kei_car":s={type:t,color:7214884,length:3.4,width:1.48,height:1.78};break;case"kei_truck":s={type:t,color:16777215,length:3.4,width:1.48,height:1.6};break;case"suv":s={type:t,color:3033656,length:4.4,width:1.85,height:1.7};break;case"sports_car":s={type:t,color:16766464,length:4.2,width:1.95,height:1.18};break;case"garbage_truck":s={type:t,color:166097,length:4.8,width:1.95,height:2.05};break;case"semi_truck":s={type:t,color:870305,length:8.4,width:2.3,height:2.65};break;case"bus":s={type:t,color:16757504,length:6.2,width:2.2,height:2.2};break;case"truck":s={type:t,color:1668818,length:5,width:2.1,height:2.1};break;case"sedan":default:const r=[15022389,2001125,4431943,9315498,16485376];s={type:"sedan",color:r[Math.floor(Math.random()*r.length)],length:3.8,width:1.85,height:1.35};break}this.length=s.length,this.width=s.width,this.height=s.height,this.buildMesh(s),this.initialYRotation=e===1?Math.PI:0,this.group.rotation.y=this.initialYRotation}buildMesh(t){const e=new ut({color:t.color}),n=new ut({color:2171169}),s=new ut({color:11789820}),r=new ut({color:2503224}),o=new Fe({color:15658734,metalness:.85,roughness:.15}),a=t.height*.45,c=.32;if(t.type==="ambulance"){const p=new nt(t.width,t.height,t.length),u=new F(p,e);u.position.y=c+t.height/2,u.castShadow=!0,this.group.add(u);const M=new ut({color:13959168});[-1,1].forEach(A=>{const T=new F(new nt(.04,.22,t.length*.98),M);T.position.set(A*(t.width/2+.01),c+t.height*.45,0),this.group.add(T);const C=new we({color:13959168}),y=new F(new Jt(.12,.42),C),v=new F(new Jt(.42,.12),C);y.rotation.y=A*Math.PI/2,v.rotation.y=A*Math.PI/2,y.position.set(A*(t.width/2+.02),c+t.height*.72,-.4),v.position.set(A*(t.width/2+.02),c+t.height*.72,-.4),this.group.add(y,v)});const x=new F(new Jt(t.width*.85,t.height*.35),s);x.position.set(0,c+t.height*.65,t.length/2+.01),this.group.add(x);const _=new nt(t.width*.7,.16,.4),P=new Fe({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new F(_,P),this.sirenLight.position.set(0,c+t.height+.1,t.length*.25),this.group.add(this.sirenLight),this.sirenPointLight=new hn(16717636,1.2,8),this.sirenPointLight.position.set(0,c+t.height+.3,t.length*.25),this.group.add(this.sirenPointLight)}else if(t.type==="fire_engine"){const p=new F(new nt(t.width,t.height*.9,t.length),e);p.position.y=c+t.height*.45,p.castShadow=!0,this.group.add(p);const u=new ut({color:13621468});[-1,1].forEach(T=>{const C=new F(new Jt(t.length*.5,t.height*.5),u);C.rotation.y=T*Math.PI/2,C.position.set(T*(t.width/2+.01),c+t.height*.45,-t.length*.15),this.group.add(C)});const M=new ut({color:16771899}),x=new F(new nt(t.width*.55,.14,t.length*.7),M);x.position.set(0,c+t.height*.9+.1,-t.length*.05),x.castShadow=!0,this.group.add(x);const _=new F(new Jt(t.width*.82,t.height*.35),s);_.position.set(0,c+t.height*.65,t.length/2+.01),this.group.add(_);const P=new ee(.18,.18,.16,12),A=new Fe({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new F(P,A),this.sirenLight.position.set(0,c+t.height*.9+.12,t.length*.3),this.group.add(this.sirenLight),this.sirenPointLight=new hn(16717636,1.2,8),this.sirenPointLight.position.set(0,c+t.height+.3,t.length*.3),this.group.add(this.sirenPointLight)}else if(t.type==="police"){const p=new F(new nt(t.width,a,t.length),e);p.position.y=c+a/2,p.castShadow=!0,this.group.add(p);const u=t.height*.55,M=t.length*.55,x=new ut({color:16777215}),_=new F(new nt(t.width*.88,u,M),x);_.position.set(0,c+a+u/2,-t.length*.05),_.castShadow=!0,this.group.add(_);const P=new F(new nt(t.width+.02,a*.9,M*.8),x);P.position.set(0,c+a/2,-t.length*.05),this.group.add(P);const A=new F(new Jt(t.width*.78,u*.75),s);A.position.set(0,c+a+u*.5,M/2+.02),this.group.add(A);const T=new ee(.18,.18,.15,12),C=new Fe({color:16717636,emissive:16717636,emissiveIntensity:1.2});this.sirenLight=new F(T,C),this.sirenLight.position.set(0,c+t.height+.1,0),this.group.add(this.sirenLight),this.sirenPointLight=new hn(16717636,1.2,8),this.sirenPointLight.position.set(0,c+t.height+.25,0),this.group.add(this.sirenPointLight)}else if(t.type==="sports_car"){const p=new nt(t.width,a*.85,t.length),u=new F(p,e);u.position.y=c*.6+a*.85/2,u.castShadow=!0,this.group.add(u);const M=t.height*.55,x=t.length*.48,_=new ut({color:1118481}),P=new F(new nt(t.width*.82,M,x),_);P.position.set(0,c*.6+a*.85+M/2,-t.length*.08),P.castShadow=!0,this.group.add(P);const A=new F(new Jt(t.width*.75,M*.8),s);A.rotation.x=-Math.PI*.22,A.position.set(0,c*.6+a*.85+M*.5,x/2-.05),this.group.add(A);const T=new ut({color:1118481});[-.45,.45].forEach(y=>{const v=new F(new nt(.05,.35,.08),T);v.position.set(y,c*.6+t.height*.85,-t.length*.42),this.group.add(v)});const C=new F(new nt(t.width*.95,.06,.35),T);C.position.set(0,c*.6+t.height*.85+.35,-t.length*.42),C.castShadow=!0,this.group.add(C)}else if(t.type==="garbage_truck"){const p=t.length*.36,u=t.height*.65,M=new ut({color:16777215}),x=new F(new nt(t.width*.92,u,p),M);x.position.set(0,c+u/2,t.length*.28),x.castShadow=!0,this.group.add(x);const _=new F(new Jt(t.width*.78,u*.55),s);_.position.set(0,c+u*.6,t.length*.28+p/2+.01),this.group.add(_);const P=t.length*.62,A=new nt(t.width,t.height*.85,P),T=new F(A,e);T.position.set(0,c+t.height*.85/2,-t.length*.16),T.castShadow=!0,this.group.add(T);const C=new ut({color:3622735}),y=new F(new nt(t.width*.9,t.height*.45,.4),C);y.position.set(0,c+t.height*.25,-t.length*.47),this.group.add(y);const v=new ee(.14,.14,.14,12),R=new Fe({color:16757504,emissive:16748288,emissiveIntensity:1}),O=new F(v,R);O.position.set(0,c+u+.1,t.length*.28),this.group.add(O)}else if(t.type==="semi_truck"){const u=t.height*.85,M=new ut({color:13840175}),x=new F(new nt(t.width*.92,u,3.2),M);x.position.set(0,c+u/2,t.length*.28),x.castShadow=!0,this.group.add(x);const _=new F(new zn(t.width*.6,.6,4),M);_.rotation.y=Math.PI/4,_.position.set(0,c+u+.3,t.length*.3),this.group.add(_),[-t.width*.46,t.width*.46].forEach(O=>{const B=new F(new ee(.08,.08,1.8),o);B.position.set(O,c+u*.7,t.length*.16),this.group.add(B)});const P=new F(new nt(t.width*.75,.8,.12),o);P.position.set(0,c+.6,t.length*.28+3.2/2+.01),this.group.add(P);const A=5.2,T=t.height*.95,C=new ut({color:t.color}),y=new F(new nt(t.width,T,A),C);y.position.set(0,c+.25+T/2,-t.length*.22),y.castShadow=!0,this.group.add(y);const v=new F(new nt(t.width+.02,.35,A*.9),new ut({color:16777215}));v.position.set(0,c+.25+T*.5,-t.length*.22),this.group.add(v);const R=new F(new Jt(t.width*.8,u*.4),s);R.position.set(0,c+u*.68,t.length*.28+3.2/2+.01),this.group.add(R)}else if(t.type==="minivan"){const p=new F(new nt(t.width,a,t.length),e);p.position.y=c+a/2,p.castShadow=!0,this.group.add(p);const u=t.height*.55,M=t.length*.72,x=new F(new nt(t.width*.92,u,M),e);x.position.set(0,c+a+u/2,-t.length*.08),x.castShadow=!0,this.group.add(x);const _=new F(new nt(t.width*.82,.18,.08),new ut({color:3622735}));_.position.set(0,c+a*.65,t.length/2+.01),this.group.add(_);const P=new F(new Jt(t.width*.84,u*.75),s);P.rotation.x=-Math.PI*.12,P.position.set(0,c+a+u*.48,M/2-.05),this.group.add(P),[-1,1].forEach(T=>{const C=new F(new Jt(M*.85,u*.6),r);C.rotation.y=T*Math.PI/2,C.position.set(T*(t.width*.46+.01),c+a+u*.52,-t.length*.08),this.group.add(C)});const A=new F(new nt(t.width*.85,.08,.25),e);A.position.set(0,c+t.height+.04,-t.length*.44),this.group.add(A)}else if(t.type==="kei_car"){const p=new F(new nt(t.width,a,t.length),e);p.position.y=c+a/2,p.castShadow=!0,this.group.add(p);const u=t.height*.55,M=t.length*.75,x=new F(new nt(t.width*.94,u,M),e);x.position.set(0,c+a+u/2,-t.length*.06),x.castShadow=!0,this.group.add(x);const _=new ut({color:1710618});[-1,1].forEach(T=>{const C=new F(new nt(.08,u*.8,.12),_);C.position.set(T*(t.width*.47),c+a+u*.5,M*.4),this.group.add(C)});const P=new F(new nt(t.width*.76,.22,.06),o);P.position.set(0,c+a*.7,t.length/2+.01),this.group.add(P);const A=new F(new Jt(t.width*.84,u*.75),s);A.rotation.x=-Math.PI*.06,A.position.set(0,c+a+u*.5,M/2+.01),this.group.add(A),[-1,1].forEach(T=>{const C=new F(new Jt(M*.88,u*.65),r);C.rotation.y=T*Math.PI/2,C.position.set(T*(t.width*.47+.01),c+a+u*.52,-t.length*.06),this.group.add(C)})}else if(t.type==="kei_truck"){const p=t.length*.42,u=t.height*.7,M=new F(new nt(t.width,u,p),e);M.position.set(0,c+u/2,t.length*.26),M.castShadow=!0,this.group.add(M);const x=new F(new Jt(t.width*.82,u*.5),s);x.position.set(0,c+u*.65,t.length*.26+p/2+.01),this.group.add(x);const _=t.length*.54,P=new ut({color:11583173}),A=new F(new nt(t.width,.12,_),P);A.position.set(0,c+.35,-t.length*.2),A.castShadow=!0,this.group.add(A);const T=new ut({color:14737632}),C=new F(new nt(.06,.35,_),T);C.position.set(t.width/2-.03,c+.52,-t.length*.2),this.group.add(C);const y=new F(new nt(.06,.35,_),T);y.position.set(-t.width/2+.03,c+.52,-t.length*.2),this.group.add(y);const v=new F(new nt(t.width,.35,.06),T);v.position.set(0,c+.52,-t.length*.2-_/2),this.group.add(v)}else if(t.type==="suv"){const p=new F(new nt(t.width,a*1.1,t.length),e);p.position.y=c+.08+a*1.1/2,p.castShadow=!0,this.group.add(p);const u=t.height*.52,M=t.length*.65,x=new F(new nt(t.width*.88,u,M),e);x.position.set(0,c+.08+a*1.1+u/2,-t.length*.06),x.castShadow=!0,this.group.add(x);const _=new ut({color:2171169}),P=new F(new nt(t.width*1.02,.15,t.length*1.01),_);P.position.set(0,c+.1,0),this.group.add(P);const A=new ut({color:4342338});[-t.width*.36,t.width*.36].forEach(C=>{const y=new F(new nt(.08,.08,M*.85),A);y.position.set(C,c+.08+t.height+.04,-t.length*.06),this.group.add(y)});const T=new F(new Jt(t.width*.78,u*.7),s);T.rotation.x=-Math.PI*.14,T.position.set(0,c+.08+a*1.1+u*.5,M/2-.04),this.group.add(T)}else if(t.type==="bus"){const p=t.height*.55,u=new F(new nt(t.width,a,t.length),e);u.position.y=c+a/2,this.group.add(u);const M=new F(new nt(t.width*.96,p,t.length*.96),e);M.position.set(0,c+a+p/2,0),M.castShadow=!0,this.group.add(M);const x=new F(new Jt(t.width*.85,p*.7),s);x.position.set(0,c+a+p*.5,t.length*.48+.01),this.group.add(x)}else if(t.type==="truck"){const p=t.length*.35,u=t.height*.55,M=new F(new nt(t.width*.9,u,p),e);M.position.set(0,c+a+u/2,t.length*.28),M.castShadow=!0,this.group.add(M);const x=new F(new Jt(t.width*.75,u*.6),s);x.position.set(0,c+a+u*.5,t.length*.28+p/2+.01),this.group.add(x);const _=new F(new nt(t.width,t.height*.8,t.length*.58),new ut({color:15527921}));_.position.set(0,c+t.height*.4,-t.length*.18),_.castShadow=!0,this.group.add(_)}else{const p=new F(new nt(t.width,a,t.length),e);p.position.y=c+a/2,p.castShadow=!0,this.group.add(p);const u=t.height*.55,M=t.length*.55,x=new F(new nt(t.width*.88,u,M),e);x.position.set(0,c+a+u/2,-t.length*.05),x.castShadow=!0,this.group.add(x);const _=new F(new Jt(t.width*.78,u*.75),s);_.position.set(0,c+a+u*.5,M/2+.02),this.group.add(_)}const l=new li(.16,12),h=new we({color:16776679}),d=new we({color:13959168});[-t.width*.35,t.width*.35].forEach(p=>{const u=new F(l,h);u.position.set(p,.55,t.length/2+.02),this.group.add(u);const M=new F(l,d);M.rotation.y=Math.PI,M.position.set(p,.55,-t.length/2-.02),this.group.add(M)});const f=new hn(16776679,.8,10);f.position.set(0,.6,t.length/2+.5),this.group.add(f),this.headlights.push(f);let m=.32;(t.type==="suv"||t.type==="semi_truck")&&(m=.38),(t.type==="kei_truck"||t.type==="kei_car"||t.type==="sports_car")&&(m=.28);const g=new ee(m,m,.18,16);g.rotateZ(Math.PI/2);let E=[-t.length*.32,t.length*.32];t.type==="semi_truck"&&(E=[t.length*.36,-t.length*.22,-t.length*.38]),E.forEach(p=>{const u=new F(g,n);u.position.set(t.width/2+.06,m,p),u.castShadow=!0,this.group.add(u),this.wheels.push(u);const M=new F(g,n);M.position.set(-t.width/2-.06,m,p),M.castShadow=!0,this.group.add(M),this.wheels.push(M)})}update(t){if(this.sirenLight&&this.sirenPointLight){const s=Math.sin(Date.now()*.012);this.sirenPointLight.intensity=s>0?1.8:.2}const n=this.speed*t/.32;this.wheels.forEach(s=>{s.rotation.x+=n})}updateLookingAnimation(t){const e=Math.sin(t*Math.PI*4)*.12;this.group.rotation.y=this.initialYRotation+e}resetLookingAnimation(){this.group.rotation.y=this.initialYRotation}}class wm{constructor(t,e){$(this,"scene");$(this,"soundEngine");$(this,"vehicles",[]);$(this,"vehicleTypes",["sports_car","garbage_truck","semi_truck","kei_car","minivan","kei_truck","suv","ambulance","fire_engine","police","bus","truck","sedan"]);$(this,"typeIndex",0);$(this,"laneToggle",!1);$(this,"STOP_LINE_Z",6.4);this.scene=t,this.soundEngine=e}spawnVehicle(t){let e;t!==void 0?e=t:(this.laneToggle=!this.laneToggle,e=this.laneToggle?1:-1);const n=e===1?-2.2:2.2,s=65*e;if(this.vehicles.some(c=>c.direction===e&&Math.abs(c.group.position.z-s)<c.length+3))return null;const o=this.vehicleTypes[this.typeIndex];this.typeIndex=(this.typeIndex+1)%this.vehicleTypes.length;const a=new Em(o,e,n);return a.group.position.set(n,0,s),this.scene.add(a.group),this.vehicles.push(a),this.soundEngine.playCarHorn(),a}getVehicleDisplayName(t){return{sports_car:"スポーツカー 🏎️",garbage_truck:"ゴミ収集車（パッカー車）🗑️",semi_truck:"トレーラートラック 🚛",kei_car:"軽自動車（けいじどうしゃ）🚗",minivan:"ミニバン 🚐",kei_truck:"軽トラック（けいトラ）🛻",suv:"SUV 🚙",ambulance:"救急車（きゅうきゅうしゃ）🚑",fire_engine:"消防車（しょうぼうしゃ）🚒",police:"パトカー 🚓",bus:"バス 🚌",truck:"トラック 🚚",sedan:"乗用車（セダン）🚗"}[t]||"くるま 🚗"}update(t,e){const n=this.vehicles.filter(r=>r.direction===1).sort((r,o)=>r.group.position.z-o.group.position.z),s=this.vehicles.filter(r=>r.direction===-1).sort((r,o)=>o.group.position.z-r.group.position.z);this.updateLaneQueue(n,t,e),this.updateLaneQueue(s,t,e);for(let r=this.vehicles.length-1;r>=0;r--){const o=this.vehicles[r];Math.abs(o.group.position.z)>75&&(this.scene.remove(o.group),this.vehicles.splice(r,1))}}updateLaneQueue(t,e,n){for(let s=0;s<t.length;s++){const r=t[s],o=s>0?t[s-1]:null;let a=999;o&&(r.direction===1?a=r.group.position.z-o.group.position.z-(r.length/2+o.length/2):a=o.group.position.z-r.group.position.z-(r.length/2+o.length/2));const c=r.direction===1?r.group.position.z-this.STOP_LINE_Z:-this.STOP_LINE_Z-r.group.position.z;switch(r.state){case"approaching":if(a<4)r.targetSpeed=0;else if(c>0&&c<8){const d=c/8;r.targetSpeed=Math.max(1.5,9*d),c<=.3&&(r.speed=0,r.targetSpeed=0,r.state="stopping_at_line",r.stopWaitTimer=1.4,r.lookTimer=0)}else r.targetSpeed=9.5;break;case"stopping_at_line":r.speed=0,r.targetSpeed=0,r.stopWaitTimer-=e,r.lookTimer+=e;const h=Math.min(1,r.lookTimer/1.4);r.updateLookingAnimation(h),r.stopWaitTimer<=0&&(r.resetLookingAnimation(),n?(r.state="crossing",r.targetSpeed=8.5):r.state="waiting_crossing");break;case"waiting_crossing":r.speed=0,r.targetSpeed=0,n&&a>4&&(r.state="crossing",r.targetSpeed=8.5);break;case"crossing":a<4?r.targetSpeed=0:r.targetSpeed=9,(r.direction===1&&r.group.position.z<-5||r.direction===-1&&r.group.position.z>5)&&(r.state="exiting");break;case"exiting":a<4?r.targetSpeed=0:r.targetSpeed=10;break}r.speed<r.targetSpeed?r.speed=Math.min(r.targetSpeed,r.speed+12*e):r.speed>r.targetSpeed&&(r.speed=Math.max(r.targetSpeed,r.speed-22*e));const l=r.speed*e*-r.direction;r.group.position.z+=l,r.update(e)}}}class Tm{constructor(t,e,n){$(this,"crossingModel");$(this,"trainManager");$(this,"soundEngine");$(this,"state","IDLE");$(this,"stateTimer",0);this.crossingModel=t,this.trainManager=e,this.soundEngine=n}isSafeForCars(){return this.state==="IDLE"&&this.crossingModel.isBarrierFullyUp()}triggerCrossingSequence(){return this.state!=="IDLE"?!1:(this.state="WARNING",this.stateTimer=1.8,this.crossingModel.setBlinking(!0),this.soundEngine.startCrossingAlarm(),!0)}update(t){switch(this.crossingModel.update(t),this.state){case"IDLE":break;case"WARNING":this.stateTimer-=t,this.stateTimer<=0&&(this.state="LOWERING_BARRIER",this.crossingModel.setTargetBarrierAngle(!0),this.soundEngine.playBarrierMotor());break;case"LOWERING_BARRIER":if(this.crossingModel.isBarrierFullyDown()){this.state="TRAIN_PASSING";const e=this.trainManager.spawnTrain();this.crossingModel.setTrainDirection(e.direction)}break;case"TRAIN_PASSING":this.trainManager.isTrainRunning()||(this.state="RAISING_BARRIER",this.crossingModel.setTargetBarrierAngle(!1),this.crossingModel.setTrainDirection(0),this.soundEngine.playBarrierMotor());break;case"RAISING_BARRIER":this.crossingModel.isBarrierFullyUp()&&(this.state="CLEARING",this.stateTimer=.4);break;case"CLEARING":this.stateTimer-=t,this.stateTimer<=0&&(this.crossingModel.setBlinking(!1),this.soundEngine.stopCrossingAlarm(),this.state="IDLE");break}}}class bm{constructor(t,e,n,s,r,o){$(this,"camera");$(this,"crossingController");$(this,"trafficManager");$(this,"crossingModel");$(this,"envModel");$(this,"soundEngine");$(this,"raycaster");$(this,"pointer");$(this,"tapEffectsLayer");$(this,"guideTextEl");$(this,"guideTimer",null);this.camera=t,this.crossingController=e,this.trafficManager=n,this.crossingModel=s,this.envModel=r,this.soundEngine=o,this.raycaster=new pm,this.pointer=new _t,this.tapEffectsLayer=document.getElementById("tap-effects-layer"),this.guideTextEl=document.getElementById("guide-text"),this.setupListeners()}setupListeners(){const t=(e,n,s)=>{if(s&&(s.closest("button")||s.closest(".start-overlay")))return;if(this.pointer.x=e/window.innerWidth*2-1,this.pointer.y=-(n/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.crossingModel.clickableMeshes,!0).length>0){this.createTapEffect(e,n,"⭐"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence()&&this.showGuideMessage("カンカンカン！でんしゃが くるよ！🚃");return}const o=this.raycaster.intersectObjects(this.envModel.roadMeshes,!0);if(o.length>0){const l=o[0].point.z>0?1:-1;this.createTapEffect(e,n,"✨"),this.soundEngine.playTapSound();const h=this.trafficManager.spawnVehicle(l);if(h){const d=this.trafficManager.getVehicleDisplayName(h.type);this.showGuideMessage(`${d} が きたよ！`)}return}const a=this.raycaster.intersectObject(this.envModel.group,!0);if(a.length>0){const c=a[0].point;if(Math.abs(c.x)<8&&Math.abs(c.z)<8)this.createTapEffect(e,n,"⚠️"),this.soundEngine.playTapSound(),this.crossingController.triggerCrossingSequence(),this.showGuideMessage("カンカンカン！ふみきり スタート！🚊");else if(Math.abs(c.x)<10){this.createTapEffect(e,n,"🚙"),this.soundEngine.playTapSound();const l=c.z>0?1:-1,h=this.trafficManager.spawnVehicle(l);if(h){const d=this.trafficManager.getVehicleDisplayName(h.type);this.showGuideMessage(`${d} が はしるよ！`)}}}};window.addEventListener("click",e=>{t(e.clientX,e.clientY,e.target)}),window.addEventListener("touchend",e=>{if(e.changedTouches.length>0){const n=e.changedTouches[0];t(n.clientX,n.clientY,e.target)}},{passive:!0})}showGuideMessage(t,e=3e3){this.guideTextEl&&(this.guideTextEl.textContent=t,this.guideTimer!==null&&clearTimeout(this.guideTimer),this.guideTimer=window.setTimeout(()=>{this.guideTextEl&&(this.guideTextEl.textContent="ふみきり や どうろ を タップしてみてね！")},e))}createTapEffect(t,e,n){if(!this.tapEffectsLayer)return;const s=document.createElement("div");s.className="tap-star",s.textContent=n,s.style.left=`${t}px`,s.style.top=`${e}px`;const r=document.createElement("div");r.className="tap-ripple",r.style.left=`${t}px`,r.style.top=`${e}px`,this.tapEffectsLayer.appendChild(s),this.tapEffectsLayer.appendChild(r),setTimeout(()=>{s.remove(),r.remove()},700)}}class Am{constructor(t,e,n,s,r,o,a){$(this,"soundEngine");$(this,"crossingController");$(this,"trafficManager");$(this,"cameraController");$(this,"sceneManager");$(this,"envModel");$(this,"interactionManager");this.soundEngine=t,this.crossingController=e,this.trafficManager=n,this.cameraController=s,this.sceneManager=r,this.envModel=o,this.interactionManager=a,this.bindEvents()}bindEvents(){const t=document.getElementById("btn-start"),e=document.getElementById("start-overlay");t&&e&&t.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),e.classList.add("hidden"),this.interactionManager.showGuideMessage("ようこそ！ふみきり や どうろ を タップしてみてね！")});const n=document.getElementById("btn-train");n&&n.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound(),this.crossingController.state==="IDLE"?(this.crossingController.triggerCrossingSequence(),this.interactionManager.showGuideMessage("でんしゃ が くるよ！カンカンカン！🚃")):this.interactionManager.showGuideMessage("まもなく でんしゃ が つうか します！⚠️")});const s=document.getElementById("btn-car");s&&s.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const l=Math.random()>.5?1:-1,h=this.trafficManager.spawnVehicle(l);if(h){const d=this.trafficManager.getVehicleDisplayName(h.type);this.interactionManager.showGuideMessage(`${d} が はしりだしたよ！`)}else this.interactionManager.showGuideMessage("くるま が いっぱい はしっているよ！🚗")});const r=document.getElementById("btn-camera");if(r){const l={overview:"全体",crossing_close:"ふみきり",driver_view:"運転手",train_follow:"電車追尾"};r.addEventListener("click",()=>{this.soundEngine.playTapSound();const h=this.cameraController.cyclePreset(),d=r.querySelector(".sub-label");d&&(d.textContent=l[h]||"カメラ"),this.interactionManager.showGuideMessage(`カメラ: ${l[h]} ビュー 🎥`)})}const o=document.getElementById("btn-time");o&&o.addEventListener("click",()=>{this.soundEngine.playTapSound();const l=this.sceneManager.cycleTimeOfDay(),h=o.querySelector(".btn-icon"),d=o.querySelector(".btn-subtext");this.envModel.setNightMode(l==="night"),l==="day"?(h&&(h.textContent="☀️"),d&&(d.textContent="ひる"),this.interactionManager.showGuideMessage("あかるい おひる になったよ！☀️")):l==="sunset"?(h&&(h.textContent="🌅"),d&&(d.textContent="ゆうがた"),this.interactionManager.showGuideMessage("きれいな ゆうやけ だね！🌅")):(h&&(h.textContent="🌙"),d&&(d.textContent="よる"),this.interactionManager.showGuideMessage("おうちの まど に あかり が ともったよ！🏠✨"))});const a=document.getElementById("btn-sound-type");a&&a.addEventListener("click",()=>{this.soundEngine.init(),this.soundEngine.playTapSound();const l=[{id:"standard_electronic",label:"ひょうじゅん",icon:"🔔",name:"日本の標準的な単音電子警報音（700Hz）"},{id:"soft_electronic",label:"やさしい音",icon:"🎵",name:"やわらかい単音電子音（650Hz）"},{id:"mechanical_bell",label:"でんれい式",icon:"🔕",name:"懐かしい電鈴式（鐘の音）"}],h=l.findIndex(g=>g.id===this.soundEngine.currentSoundType),d=l[(h+1)%l.length];this.soundEngine.currentSoundType=d.id;const f=a.querySelector(".btn-icon"),m=a.querySelector(".btn-subtext");f&&(f.textContent=d.icon),m&&(m.textContent=d.label),this.interactionManager.showGuideMessage(`ふみきりの音: ${d.name}`)});const c=document.getElementById("btn-sound");c&&c.addEventListener("click",()=>{const l=!this.soundEngine.getIsMuted();this.soundEngine.setMuted(l);const h=c.querySelector(".btn-icon"),d=c.querySelector(".btn-subtext");l?(h&&(h.textContent="🔇"),d&&(d.textContent="ミュート"),this.interactionManager.showGuideMessage("おと を けしたよ 🔇")):(this.soundEngine.playTapSound(),h&&(h.textContent="🔊"),d&&(d.textContent="おと ON"),this.interactionManager.showGuideMessage("おと を だしたよ 🔊"))})}}class Cm{constructor(){$(this,"sceneManager");$(this,"cameraController");$(this,"soundEngine");$(this,"envModel");$(this,"crossingModel");$(this,"trainManager");$(this,"trafficManager");$(this,"crossingController");$(this,"interactionManager");$(this,"clock");$(this,"animate",()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),e=this.crossingController.isSafeForCars();this.crossingController.update(t),this.trainManager.update(t),this.trafficManager.update(t,e);const n=this.trainManager.activeTrain?this.trainManager.activeTrain.posX:void 0;this.cameraController.update(t,n),this.sceneManager.renderer.render(this.sceneManager.scene,this.cameraController.camera)});const t=document.getElementById("canvas-container");this.sceneManager=new gm(t),this.cameraController=new _m,this.soundEngine=new vm,this.envModel=new xm,this.sceneManager.scene.add(this.envModel.group),this.crossingModel=new Mm,this.sceneManager.scene.add(this.crossingModel.group),this.trainManager=new ym(this.sceneManager.scene,this.soundEngine),this.trafficManager=new wm(this.sceneManager.scene,this.soundEngine),this.crossingController=new Tm(this.crossingModel,this.trainManager,this.soundEngine),this.interactionManager=new bm(this.cameraController.camera,this.crossingController,this.trafficManager,this.crossingModel,this.envModel,this.soundEngine),new Am(this.soundEngine,this.crossingController,this.trafficManager,this.cameraController,this.sceneManager,this.envModel,this.interactionManager),this.clock=new fm,setTimeout(()=>{this.trafficManager.spawnVehicle(1)},600),setTimeout(()=>{this.trafficManager.spawnVehicle(-1)},2500),this.animate()}}window.addEventListener("DOMContentLoaded",()=>{new Cm});
