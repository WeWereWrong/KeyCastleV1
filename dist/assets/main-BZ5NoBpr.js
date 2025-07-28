var zh=Object.defineProperty;var Hh=(s,e,t)=>e in s?zh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Le=(s,e,t)=>Hh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="162",ui={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,yo=1,Vh=2,Tc=1,Ac=2,fn=3,Fn=0,Lt=1,en=2,Un=0,Bi=1,xo=2,So=3,Eo=4,Wh=5,Qn=100,jh=101,$h=102,bo=103,Mo=104,Xh=200,qh=201,Yh=202,Kh=203,Ra=204,Ca=205,Jh=206,Zh=207,Qh=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,au=0,ou=1,lu=2,hr=3,cu=4,hu=5,uu=6,du=7,Ja=0,fu=1,pu=2,On=0,mu=1,gu=2,_u=3,Rc=4,vu=5,yu=6,xu=7,Cc=300,Gi=301,Vi=302,ur=303,Pa=304,yr=306,ps=1e3,Ot=1001,La=1002,yt=1003,wo=1004,Qi=1005,ut=1006,Nr=1007,In=1008,Nn=1009,Su=1010,Eu=1011,Za=1012,Pc=1013,Dn=1014,kt=1015,vn=1016,Lc=1017,Ic=1018,ni=1020,bu=1021,qt=1023,Mu=1024,wu=1025,ii=1026,Wi=1027,Tu=1028,Dc=1029,Au=1030,Uc=1031,Oc=1033,Fr=33776,kr=33777,Br=33778,zr=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Nc=36196,Po=37492,Lo=37496,Io=37808,Do=37809,Uo=37810,Oo=37811,No=37812,Fo=37813,ko=37814,Bo=37815,zo=37816,Ho=37817,Go=37818,Vo=37819,Wo=37820,jo=37821,Hr=36492,$o=36494,Xo=36495,Ru=36283,qo=36284,Yo=36285,Ko=36286,Cu=3200,Pu=3201,Qa=0,Lu=1,Pn="",Jt="srgb",xn="srgb-linear",eo="display-p3",xr="display-p3-linear",dr="linear",nt="srgb",fr="rec709",pr="p3",fi=7680,Jo=519,Iu=512,Du=513,Uu=514,Fc=515,Ou=516,Nu=517,Fu=518,ku=519,Zo=35044,Qo="300 es",Ia=1035,yn=2e3,mr=2001;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=Math.PI/180,Da=180/Math.PI;function Xi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function Bu(s,e){return(s%e+e)%e}function Gr(s,e,t){return(1-t)*s+t*e}function el(s){return(s&s-1)===0&&s!==0}function Ua(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function es(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zu={DEG2RAD:ls};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],v=i[0],f=i[3],p=i[6],b=i[1],_=i[4],S=i[7],L=i[2],A=i[5],w=i[8];return r[0]=a*v+o*b+l*L,r[3]=a*f+o*_+l*A,r[6]=a*p+o*S+l*w,r[1]=c*v+h*b+u*L,r[4]=c*f+h*_+u*A,r[7]=c*p+h*S+u*w,r[2]=d*v+m*b+g*L,r[5]=d*f+m*_+g*A,r[8]=d*p+m*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new je;function kc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hu(){const s=gr("canvas");return s.style.display="block",s}const tl={};function Gu(s){s in tl||(tl[s]=!0,console.warn(s))}const nl=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[xn]:{transfer:dr,primaries:fr,toReference:s=>s,fromReference:s=>s},[Jt]:{transfer:nt,primaries:fr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xr]:{transfer:dr,primaries:pr,toReference:s=>s.applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl)},[eo]:{transfer:nt,primaries:pr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl).convertLinearToSRGB()}},Vu=new Set([xn,xr]),Ze={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ts[e].toReference,i=Ts[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ts[s].primaries},getTransfer:function(s){return s===Pn?dr:Ts[s].transfer}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pi;class Bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=gr("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class Tt extends li{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Ot,i=Ot,r=ut,a=In,o=qt,l=Nn,c=Tt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Xi(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Cc;Tt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(m+1)/2,L=(p+1)/2,A=(h+d)/4,w=(u+v)/4,D=(g+f)/4;return _>S&&_>L?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=w/n):S>L?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=D/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=w/r,i=D/r),this.set(n,i,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends $u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let f=1-o;const p=l*d+c*m+h*g+u*v,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const L=Math.sqrt(_),A=Math.atan2(L,p*b);f=Math.sin(f*A)/L,o=Math.sin(o*A)/L}const S=o*b;if(l=l*f+d*S,c=c*f+m*S,h=h*f+g*S,u=u*f+v*S,f===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new U,sl=new ri;class ys{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(r,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Rs.subVectors(this.max,ts),mi.subVectors(e.a,ts),gi.subVectors(e.b,ts),_i.subVectors(e.c,ts),Sn.subVectors(gi,mi),En.subVectors(_i,gi),Vn.subVectors(mi,_i);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Vn.z,Vn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Vn.z,0,-Vn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Vn.y,Vn.x,0];return!Xr(t,mi,gi,_i,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,mi,gi,_i,Rs))?!1:(Cs.crossVectors(Sn,En),t=[Cs.x,Cs.y,Cs.z],Xr(t,mi,gi,_i,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new U,new U,new U,new U,new U,new U,new U,new U],Gt=new U,As=new ys,mi=new U,gi=new U,_i=new U,Sn=new U,En=new U,Vn=new U,ts=new U,Rs=new U,Cs=new U,Wn=new U;function Xr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qu=new ys,ns=new U,qr=new U;class Sr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(qr)),this.expandByPoint(ns.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new U,Yr=new U,Ps=new U,bn=new U,Kr=new U,Ls=new U,Jr=new U;class to{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=bn.dot(this.direction),l=-bn.dot(Ps),c=bn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yr).addScaledVector(Ps,d),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Kr.subVectors(t,e),Ls.subVectors(n,e),Jr.crossVectors(Kr,Ls);let a=this.direction.dot(Jr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(Ls.crossVectors(bn,Ls));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(bn));if(c<0||l+c>a)return null;const h=-o*bn.dot(Jr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,l,c,h,u,d,m,g,v,f){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,m,g,v,f)}set(e,t,n,i,r,a,o,l,c,h,u,d,m,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,Ku)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Mn.crossVectors(n,Dt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Mn.crossVectors(n,Dt)),Mn.normalize(),Is.crossVectors(Dt,Mn),i[0]=Mn.x,i[4]=Is.x,i[8]=Dt.x,i[1]=Mn.y,i[5]=Is.y,i[9]=Dt.y,i[2]=Mn.z,i[6]=Is.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],v=n[6],f=n[10],p=n[14],b=n[3],_=n[7],S=n[11],L=n[15],A=i[0],w=i[4],D=i[8],V=i[12],y=i[1],T=i[5],Z=i[9],X=i[13],P=i[2],B=i[6],N=i[10],K=i[14],j=i[3],q=i[7],J=i[11],re=i[15];return r[0]=a*A+o*y+l*P+c*j,r[4]=a*w+o*T+l*B+c*q,r[8]=a*D+o*Z+l*N+c*J,r[12]=a*V+o*X+l*K+c*re,r[1]=h*A+u*y+d*P+m*j,r[5]=h*w+u*T+d*B+m*q,r[9]=h*D+u*Z+d*N+m*J,r[13]=h*V+u*X+d*K+m*re,r[2]=g*A+v*y+f*P+p*j,r[6]=g*w+v*T+f*B+p*q,r[10]=g*D+v*Z+f*N+p*J,r[14]=g*V+v*X+f*K+p*re,r[3]=b*A+_*y+S*P+L*j,r[7]=b*w+_*T+S*B+L*q,r[11]=b*D+_*Z+S*N+L*J,r[15]=b*V+_*X+S*K+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],f=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*m-n*l*m)+v*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*h-r*l*h)+f*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],f=e[14],p=e[15],b=u*f*c-v*d*c+v*l*m-o*f*m-u*l*p+o*d*p,_=g*d*c-h*f*c-g*l*m+a*f*m+h*l*p-a*d*p,S=h*v*c-g*u*c+g*o*m-a*v*m-h*o*p+a*u*p,L=g*u*l-h*v*l-g*o*d+a*v*d+h*o*f-a*u*f,A=t*b+n*_+i*S+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=b*w,e[1]=(v*d*r-u*f*r-v*i*m+n*f*m+u*i*p-n*d*p)*w,e[2]=(o*f*r-v*l*r+v*i*c-n*f*c-o*i*p+n*l*p)*w,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*m-n*l*m)*w,e[4]=_*w,e[5]=(h*f*r-g*d*r+g*i*m-t*f*m-h*i*p+t*d*p)*w,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*p-t*l*p)*w,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*m+t*l*m)*w,e[8]=S*w,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*p-t*u*p)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*w,e[12]=L*w,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*f+t*u*f)*w,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*f-t*o*f)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,v=a*h,f=a*u,p=o*u,b=l*c,_=l*h,S=l*u,L=n.x,A=n.y,w=n.z;return i[0]=(1-(v+p))*L,i[1]=(m+S)*L,i[2]=(g-_)*L,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(d+p))*A,i[6]=(f+b)*A,i[7]=0,i[8]=(g+_)*w,i[9]=(f-b)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vi.set(i[0],i[1],i[2]).length();const a=vi.set(i[4],i[5],i[6]).length(),o=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const c=1/r,h=1/a,u=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=yn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(o===yn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,m=(n+i)*h;let g,v;if(o===yn)g=(a+r)*u,v=-2*u;else if(o===mr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new U,Vt=new at,Yu=new U(0,0,0),Ku=new U(1,1,1),Mn=new U,Is=new U,Dt=new U,rl=new at,al=new ri;class Kt{constructor(e=0,t=0,n=0,i=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const ol=new U,yi=new ri,ln=new at,Ds=new U,is=new U,Zu=new U,Qu=new ri,ll=new U(1,0,0),cl=new U(0,1,0),hl=new U(0,0,1),ed={type:"added"},td={type:"removed"},Zr={type:"childadded",child:null},Qr={type:"childremoved",child:null};class xt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new U,t=new Kt,n=new ri,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new je}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(is,Ds,this.up):ln.lookAt(Ds,is,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(ln),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new U(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new U,cn=new U,ea=new U,hn=new U,xi=new U,Si=new U,ul=new U,ta=new U,na=new U,ia=new U;class Yt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wt.subVectors(i,t),cn.subVectors(n,t),ea.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(cn),l=Wt.dot(ea),c=cn.dot(cn),h=cn.dot(ea),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),cn.subVectors(e,t),Wt.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Wt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),Si.subVectors(r,n),ta.subVectors(e,n);const l=xi.dot(ta),c=Si.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const h=xi.dot(na),u=Si.dot(na);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xi,a);ia.subVectors(e,r);const m=xi.dot(ia),g=Si.dot(ia);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Si,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return ul.subVectors(r,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(ul,o);const p=1/(f+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(xi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Bu(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.fromWorkingColorSpace(Mt.copy(this),e),Math.round(dt(Mt.r*255,0,255))*65536+Math.round(dt(Mt.g*255,0,255))*256+Math.round(dt(Mt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Jt){Ze.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Us);const n=Gr(wn.h,Us.h,t),i=Gr(wn.s,Us.s,t),r=Gr(wn.l,Us.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ge;Ge.NAMES=Vc;let nd=0;class ci extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=id();function id(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function sd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=dt(s,-65504,65504),_n.floatView[0]=s;const e=_n.uint32View[0],t=e>>23&511;return _n.baseTable[t]+((e&8388607)>>_n.shiftTable[t])}function rd(s){const e=s>>10;return _n.uint32View[0]=_n.mantissaTable[_n.offsetTable[e]+(s&1023)]+_n.exponentTable[e],_n.floatView[0]}const Os={toHalfFloat:sd,fromHalfFloat:rd},ht=new U,Ns=new oe;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}}class Wc extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ad=0;const Ft=new at,ra=new xt,Ei=new U,Ut=new ys,ss=new ys,gt=new U;class nn extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?jc:Wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ut.min,ss.min),Ut.expandByPoint(gt),gt.addVectors(Ut.max,ss.max),Ut.expandByPoint(gt)):(Ut.expandByPoint(ss.min),Ut.expandByPoint(ss.max))}Ut.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gt.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),gt.add(Ei)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,h=new U,u=new U,d=new oe,m=new oe,g=new oe,v=new U,f=new U;function p(D,V,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(T),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),o[D].add(v),o[V].add(v),o[y].add(v),l[D].add(f),l[V].add(f),l[y].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,V=b.length;D<V;++D){const y=b[D],T=y.start,Z=y.count;for(let X=T,P=T+Z;X<P;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const _=new U,S=new U,L=new U,A=new U;function w(D){L.fromBufferAttribute(i,D),A.copy(L);const V=o[D];_.copy(V),_.sub(L.multiplyScalar(L.dot(V))).normalize(),S.crossVectors(A,V);const T=S.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,T)}for(let D=0,V=b.length;D<V;++D){const y=b[D],T=y.start,Z=y.count;for(let X=T,P=T+Z;X<P;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new at,jn=new to,Fs=new Sr,fl=new U,bi=new U,Mi=new U,wi=new U,aa=new U,ks=new U,Bs=new oe,zs=new oe,Hs=new oe,pl=new U,ml=new U,gl=new U,Gs=new U,Vs=new U;class Bt extends xt{constructor(e=new nn,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(aa.fromBufferAttribute(u,e),a?ks.addScaledVector(aa,h):ks.addScaledVector(aa.sub(t),h))}t.add(ks)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(Fs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Fs,fl)===null||jn.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),jn.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=b,L=_;S<L;S+=3){const A=o.getX(S),w=o.getX(S+1),D=o.getX(S+2);i=Ws(this,p,e,n,c,h,u,A,w,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const b=o.getX(f),_=o.getX(f+1),S=o.getX(f+2);i=Ws(this,a,e,n,c,h,u,b,_,S),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=b,L=_;S<L;S+=3){const A=S,w=S+1,D=S+2;i=Ws(this,p,e,n,c,h,u,A,w,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const b=f,_=f+1,S=f+2;i=Ws(this,a,e,n,c,h,u,b,_,S),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function od(s,e,t,n,i,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:s}}function Ws(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,bi),s.getVertexPosition(l,Mi),s.getVertexPosition(c,wi);const h=od(s,e,t,n,bi,Mi,wi,Gs);if(h){i&&(Bs.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,l),Hs.fromBufferAttribute(i,c),h.uv=Yt.getInterpolation(Gs,bi,Mi,wi,Bs,zs,Hs,new oe)),r&&(Bs.fromBufferAttribute(r,o),zs.fromBufferAttribute(r,l),Hs.fromBufferAttribute(r,c),h.uv1=Yt.getInterpolation(Gs,bi,Mi,wi,Bs,zs,Hs,new oe)),a&&(pl.fromBufferAttribute(a,o),ml.fromBufferAttribute(a,l),gl.fromBufferAttribute(a,c),h.normal=Yt.getInterpolation(Gs,bi,Mi,wi,pl,ml,gl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Yt.getNormal(bi,Mi,wi,u.normal),h.face=u}return h}class ai extends nn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(v,f,p,b,_,S,L,A,w,D,V){const y=S/w,T=L/D,Z=S/2,X=L/2,P=A/2,B=w+1,N=D+1;let K=0,j=0;const q=new U;for(let J=0;J<N;J++){const re=J*T-X;for(let fe=0;fe<B;fe++){const we=fe*y-Z;q[v]=we*b,q[f]=re*_,q[p]=P,c.push(q.x,q.y,q.z),q[v]=0,q[f]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(fe/w),u.push(1-J/D),K+=1}}for(let J=0;J<D;J++)for(let re=0;re<w;re++){const fe=d+re+B*J,we=d+re+B*(J+1),H=d+(re+1)+B*(J+1),ne=d+(re+1)+B*J;l.push(fe,we,ne),l.push(we,H,ne),j+=6}o.addGroup(m,j,V),m+=j,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=ji(s[t]);for(const i in n)e[i]=n[i]}return e}function ld(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $c(s){return s.getRenderTarget()===null?s.outputColorSpace:Ze.workingColorSpace}const cd={clone:ji,merge:At};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new U,_l=new oe,vl=new oe;class Xt extends Xc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,_l,vl),t.subVectors(vl,_l)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class dd extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Ti,Ai,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ti,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qc extends Tt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fd extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ai(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Un});r.uniforms.tEquirect.value=t;const a=new Bt(i,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=ut),new dd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const oa=new U,pd=new U,md=new je;class Cn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Sr,js=new U;class no{constructor(e=new Cn,t=new Cn,n=new Cn,i=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],v=i[10],f=i[11],p=i[12],b=i[13],_=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,f-m,S-p).normalize(),n[1].setComponents(l+r,d+c,f+m,S+p).normalize(),n[2].setComponents(l+a,d+h,f+g,S+b).normalize(),n[3].setComponents(l-a,d-h,f-g,S-b).normalize(),n[4].setComponents(l-o,d-u,f-v,S-_).normalize(),t===yn)n[5].setComponents(l+o,d+u,f+v,S+_).normalize();else if(t===mr)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(js.x=i.normal.x>0?e.max.x:e.min.x,js.y=i.normal.y>0?e.max.y:e.min.y,js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class qi extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],v=[],f=[];for(let p=0;p<h;p++){const b=p*d-a;for(let _=0;_<c;_++){const S=_*u-r;g.push(S,-b,0),v.push(0,0,1),f.push(_/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const _=b+c*p,S=b+c*(p+1),L=b+1+c*(p+1),A=b+1+c*p;m.push(_,S,A),m.push(S,L,A)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,_f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,vf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Fp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,jp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Yp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Jp=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:yd,alphamap_pars_fragment:xd,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:bd,aomap_pars_fragment:Md,batching_pars_vertex:wd,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Od,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:kd,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:jd,emissivemap_pars_fragment:$d,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Jd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:uf,envmap_vertex:Qd,fog_vertex:ef,fog_pars_vertex:tf,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:yf,lights_fragment_end:xf,logdepthbuf_fragment:Sf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Mf,map_fragment:wf,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:If,morphnormal_vertex:Df,morphtarget_pars_vertex:Uf,morphtarget_vertex:Of,normal_fragment_begin:Nf,normal_fragment_maps:Ff,normal_pars_fragment:kf,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:jf,opaque_fragment:$f,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:Kf,dithering_pars_fragment:Jf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:vp,background_frag:yp,backgroundCube_vert:xp,backgroundCube_frag:Sp,cube_vert:Ep,cube_frag:bp,depth_vert:Mp,depth_frag:wp,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Dp,meshlambert_vert:Up,meshlambert_frag:Op,meshmatcap_vert:Np,meshmatcap_frag:Fp,meshnormal_vert:kp,meshnormal_frag:Bp,meshphong_vert:zp,meshphong_frag:Hp,meshphysical_vert:Gp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:jp,points_vert:$p,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:Kp,sprite_frag:Jp},de={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Qt={basic:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:At([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:At([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:At([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:At([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:At([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:At([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:At([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:At([de.lights,de.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const $s={r:0,b:0,g:0},Xn=new Kt,Zp=new at;function Qp(s,e,t,n,i,r,a){const o=new Ge(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let b=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yr)?(h===void 0&&(h=new Bt(new ai(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ji(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xn.copy(p.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Xn)),h.material.toneMapped=Ze.getTransfer(_.colorSpace)!==nt,(u!==_||d!==_.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Bt(new qi(2,2),new kn({name:"BackgroundMaterial",uniforms:ji(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB($s,$c(s)),n.buffers.color.setClear($s.r,$s.g,$s.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(o,l)},render:g}}function em(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,h=!1;function u(P,B,N,K,j){let q=!1;if(a){const J=v(K,N,B);c!==J&&(c=J,m(c.object)),q=p(P,K,N,j),q&&b(P,K,N,j)}else{const J=B.wireframe===!0;(c.geometry!==K.id||c.program!==N.id||c.wireframe!==J)&&(c.geometry=K.id,c.program=N.id,c.wireframe=J,q=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(P,B,N,K),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,B,N){const K=N.wireframe===!0;let j=o[P.id];j===void 0&&(j={},o[P.id]=j);let q=j[B.id];q===void 0&&(q={},j[B.id]=q);let J=q[K];return J===void 0&&(J=f(d()),q[K]=J),J}function f(P){const B=[],N=[],K=[];for(let j=0;j<i;j++)B[j]=0,N[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:K,object:P,attributes:{},index:null}}function p(P,B,N,K){const j=c.attributes,q=B.attributes;let J=0;const re=N.getAttributes();for(const fe in re)if(re[fe].location>=0){const H=j[fe];let ne=q[fe];if(ne===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),H===void 0||H.attribute!==ne||ne&&H.data!==ne.data)return!0;J++}return c.attributesNum!==J||c.index!==K}function b(P,B,N,K){const j={},q=B.attributes;let J=0;const re=N.getAttributes();for(const fe in re)if(re[fe].location>=0){let H=q[fe];H===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const ne={};ne.attribute=H,H&&H.data&&(ne.data=H.data),j[fe]=ne,J++}c.attributes=j,c.attributesNum=J,c.index=K}function _(){const P=c.newAttributes;for(let B=0,N=P.length;B<N;B++)P[B]=0}function S(P){L(P,0)}function L(P,B){const N=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;N[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),j[P]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),j[P]=B)}function A(){const P=c.newAttributes,B=c.enabledAttributes;for(let N=0,K=B.length;N<K;N++)B[N]!==P[N]&&(s.disableVertexAttribArray(N),B[N]=0)}function w(P,B,N,K,j,q,J){J===!0?s.vertexAttribIPointer(P,B,N,j,q):s.vertexAttribPointer(P,B,N,K,j,q)}function D(P,B,N,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=K.attributes,q=N.getAttributes(),J=B.defaultAttributeValues;for(const re in q){const fe=q[re];if(fe.location>=0){let we=j[re];if(we===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(we=P.instanceColor)),we!==void 0){const H=we.normalized,ne=we.itemSize,_e=t.get(we);if(_e===void 0)continue;const Re=_e.buffer,Me=_e.type,xe=_e.bytesPerElement,Fe=n.isWebGL2===!0&&(Me===s.INT||Me===s.UNSIGNED_INT||we.gpuType===Pc);if(we.isInterleavedBufferAttribute){const Te=we.data,C=Te.stride,he=we.offset;if(Te.isInstancedInterleavedBuffer){for(let Y=0;Y<fe.locationSize;Y++)L(fe.location+Y,Te.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Y=0;Y<fe.locationSize;Y++)S(fe.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Y=0;Y<fe.locationSize;Y++)w(fe.location+Y,ne/fe.locationSize,Me,H,C*xe,(he+ne/fe.locationSize*Y)*xe,Fe)}else{if(we.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)L(fe.location+Te,we.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Te=0;Te<fe.locationSize;Te++)S(fe.location+Te);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Te=0;Te<fe.locationSize;Te++)w(fe.location+Te,ne/fe.locationSize,Me,H,ne*xe,ne/fe.locationSize*Te*xe,Fe)}}else if(J!==void 0){const H=J[re];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(fe.location,H);break;case 3:s.vertexAttrib3fv(fe.location,H);break;case 4:s.vertexAttrib4fv(fe.location,H);break;default:s.vertexAttrib1fv(fe.location,H)}}}}A()}function V(){Z();for(const P in o){const B=o[P];for(const N in B){const K=B[N];for(const j in K)g(K[j].object),delete K[j];delete B[N]}delete o[P]}}function y(P){if(o[P.id]===void 0)return;const B=o[P.id];for(const N in B){const K=B[N];for(const j in K)g(K[j].object),delete K[j];delete B[N]}delete o[P.id]}function T(P){for(const B in o){const N=o[B];if(N[P.id]===void 0)continue;const K=N[P.id];for(const j in K)g(K[j].object),delete K[j];delete N[P.id]}}function Z(){X(),h=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:X,dispose:V,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:S,disableUnusedAttributes:A}}function tm(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function nm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=a||e.has("OES_texture_float"),L=_&&S,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:A}}function im(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Cn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,_=b*4;let S=p.clippingState||null;l.value=S,S=h(g,d,_,m);for(let L=0;L!==_;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,S=m;_!==v;++_,S+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function sm(s){let e=new WeakMap;function t(a,o){return o===ur?a.mapping=Gi:o===Pa&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ur||o===Pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fd(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class io extends Xc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,yl=[.125,.215,.35,.446,.526,.582],ei=20,la=new io,xl=new Ge;let ca=null,ha=0,ua=0;const Jn=(1+Math.sqrt(5))/2,Ri=1/Jn,Sl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Jn,Ri),new U(0,Jn,-Ri),new U(Ri,0,Jn),new U(-Ri,0,Jn),new U(Jn,Ri,0),new U(-Jn,Ri,0)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ha,ua),e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:vn,format:qt,colorSpace:xn,depthBuffer:!1},i=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=am(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xl),h.toneMapping=On,h.autoClear=!1;const m=new cs({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Bt(new ai,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(xl),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Xs(i,b*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gi||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sl[(i-1)%Sl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):ei;f>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);const p=[];let b=0;for(let w=0;w<ei;++w){const D=w/v,V=Math.exp(-D*D/2);p.push(V),w===0?b+=V:w<f&&(b+=2*V)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const S=this._sizeLods[i],L=3*S*(i>_-Ni?i-_+Ni:0),A=4*(this._cubeSize-S);Xs(t,L,A,3*S,2*S),l.setRenderTarget(t),l.render(u,la)}}function rm(s){const e=[],t=[],n=[];let i=s;const r=s-Ni+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ni?l=yl[a-s+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,f=2,p=1,b=new Float32Array(v*g*m),_=new Float32Array(f*g*m),S=new Float32Array(p*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,D=A>2?0:-1,V=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];b.set(V,v*g*A),_.set(d,f*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const L=new nn;L.setAttribute("position",new tn(b,v)),L.setAttribute("uv",new tn(_,f)),L.setAttribute("faceIndex",new tn(S,p)),e.push(L),i>Ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(s,e,t){const n=new si(s,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function am(s,e,t){const n=new Float32Array(ei),i=new U(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:so(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ml(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wl(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function om(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ur||l===Pa,h=l===Gi||l===Vi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new El(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new El(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cm(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let f=0,p=v.length;f<p;f++)e.update(v[f],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let _=0,S=b.length;_<S;_+=3){const L=b[_+0],A=b[_+1],w=b[_+2];d.push(L,A,A,w,w,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let _=0,S=b.length/3-1;_<S;_+=3){const L=_+0,A=_+1,w=_+2;d.push(L,A,A,w,w,L)}}else return;const f=new(kc(d)?jc:Wc)(d,1);f.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function hm(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,v),t.update(g,r,v)}function d(m,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let p=0;for(let b=0;b<v;b++)p+=g[b];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function um(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dm(s,e){return s[0]-e[0]}function fm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function pm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let f=r.get(h);if(f===void 0||f.count!==v){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var m=X;f!==void 0&&f.texture.dispose();const p=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let w=0;p===!0&&(w=1),b===!0&&(w=2),_===!0&&(w=3);let D=h.attributes.position.count*w,V=1;D>e.maxTextureSize&&(V=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const y=new Float32Array(D*V*4*v),T=new Hc(y,D,V,v);T.type=kt,T.needsUpdate=!0;const Z=w*4;for(let P=0;P<v;P++){const B=S[P],N=L[P],K=A[P],j=D*V*4*P;for(let q=0;q<B.count;q++){const J=q*Z;p===!0&&(a.fromBufferAttribute(B,q),y[j+J+0]=a.x,y[j+J+1]=a.y,y[j+J+2]=a.z,y[j+J+3]=0),b===!0&&(a.fromBufferAttribute(N,q),y[j+J+4]=a.x,y[j+J+5]=a.y,y[j+J+6]=a.z,y[j+J+7]=0),_===!0&&(a.fromBufferAttribute(K,q),y[j+J+8]=a.x,y[j+J+9]=a.y,y[j+J+10]=a.z,y[j+J+11]=K.itemSize===4?a.w:1)}}f={count:v,texture:T,size:new oe(D,V)},r.set(h,f),h.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let p=0;for(let _=0;_<d.length;_++)p+=d[_];const b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];n[h.id]=v}for(let S=0;S<g;S++){const L=v[S];L[0]=S,L[1]=d[S]}v.sort(fm);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(dm);const f=h.morphAttributes.position,p=h.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const L=o[S],A=L[0],w=L[1];A!==Number.MAX_SAFE_INTEGER&&w?(f&&h.getAttribute("morphTarget"+S)!==f[A]&&h.setAttribute("morphTarget"+S,f[A]),p&&h.getAttribute("morphNormal"+S)!==p[A]&&h.setAttribute("morphNormal"+S,p[A]),i[S]=w,b+=w):(f&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),p&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const _=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function mm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Kc extends Tt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Dn),n===void 0&&h===Wi&&(n=ni),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jc=new Tt,Zc=new Kc(1,1);Zc.compareFunction=Fc;const Qc=new Hc,eh=new Xu,th=new qc,Tl=[],Al=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function Yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Er(s,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Pl.set(n),s.uniformMatrix2fv(this.addr,!1,Pl),pt(t,n)}}function Sm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Cl.set(n),s.uniformMatrix3fv(this.addr,!1,Cl),pt(t,n)}}function Em(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Rl.set(n),s.uniformMatrix4fv(this.addr,!1,Rl),pt(t,n)}}function bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Am(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function Pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Zc:Jc;t.setTexture2D(e||r,i)}function Im(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eh,i)}function Dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||th,i)}function Um(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qc,i)}function Om(s){switch(s){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return ym;case 35674:return xm;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return bm;case 35667:case 35671:return Mm;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}function Nm(s,e){s.uniform1fv(this.addr,e)}function Fm(s,e){const t=Yi(e,this.size,2);s.uniform2fv(this.addr,t)}function km(s,e){const t=Yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Bm(s,e){const t=Yi(e,this.size,4);s.uniform4fv(this.addr,t)}function zm(s,e){const t=Yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hm(s,e){const t=Yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gm(s,e){const t=Yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vm(s,e){s.uniform1iv(this.addr,e)}function Wm(s,e){s.uniform2iv(this.addr,e)}function jm(s,e){s.uniform3iv(this.addr,e)}function $m(s,e){s.uniform4iv(this.addr,e)}function Xm(s,e){s.uniform1uiv(this.addr,e)}function qm(s,e){s.uniform2uiv(this.addr,e)}function Ym(s,e){s.uniform3uiv(this.addr,e)}function Km(s,e){s.uniform4uiv(this.addr,e)}function Jm(s,e,t){const n=this.cache,i=e.length,r=Er(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Jc,r[a])}function Zm(s,e,t){const n=this.cache,i=e.length,r=Er(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eh,r[a])}function Qm(s,e,t){const n=this.cache,i=e.length,r=Er(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||th,r[a])}function eg(s,e,t){const n=this.cache,i=e.length,r=Er(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qc,r[a])}function tg(s){switch(s){case 5126:return Nm;case 35664:return Fm;case 35665:return km;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return jm;case 35669:case 35673:return $m;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}}class ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tg(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Ll(s,e){s.seq.push(e),s.map[e.id]=e}function rg(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ll(t,c===void 0?new ng(o,s,e):new ig(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new sg(o),Ll(t,u)),t=u}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);rg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Il(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ag=37297;let og=0;function lg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cg(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===pr&&t===fr?n="LinearDisplayP3ToLinearSRGB":e===fr&&t===pr&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case xr:return[n,"LinearTransferOETF"];case Jt:case eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Dl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+lg(s.getShaderSource(e),a)}else return i}function hg(s,e){const t=cg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ug(s,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case _u:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case yu:t="AgX";break;case xu:t="Neutral";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fi).join(`
`)}function fg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function pg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Fi(s){return s!==""}function Ul(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(s){return s.replace(gg,vg)}const _g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vg(s,e){let t=We[e];if(t===void 0){const n=_g.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oa(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(s){return s.replace(yg,xg)}function xg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Eg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gi:case Vi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Mg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case pu:e="ENVMAP_BLENDING_ADD";break}return e}function wg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Sg(t),c=Eg(t),h=bg(t),u=Mg(t),d=wg(t),m=t.isWebGL2?"":dg(t),g=fg(t),v=pg(r),f=i.createProgram();let p,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fi).join(`
`),p.length>0&&(p+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fi).join(`
`),b.length>0&&(b+=`
`)):(p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),b=[m,Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?We.tonemapping_pars_fragment:"",t.toneMapping!==On?ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,hg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Oa(a),a=Ul(a,t),a=Ol(a,t),o=Oa(o),o=Ul(o,t),o=Ol(o,t),a=Nl(a),o=Nl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=_+p+a,L=_+b+o,A=Il(i,i.VERTEX_SHADER,S),w=Il(i,i.FRAGMENT_SHADER,L);i.attachShader(f,A),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function D(Z){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(w).trim();let N=!0,K=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,A,w);else{const j=Dl(i,A,"vertex"),q=Dl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+X+`
`+j+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||B==="")&&(K=!1);K&&(Z.diagnostics={runnable:N,programLog:X,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:b}})}i.deleteShader(A),i.deleteShader(w),V=new or(i,f),y=mg(i,f)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(f,ag)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=w,this}let Ag=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cg(e),t.set(e,n)),n}}class Cg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Pg(s,e,t,n,i,r,a){const o=new Gc,l=new Rg,c=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,T,Z,X,P){const B=X.fog,N=P.geometry,K=y.isMeshStandardMaterial?X.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),q=j&&j.mapping===yr?j.image.height:null,J=v[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,fe=re!==void 0?re.length:0;let we=0;N.morphAttributes.position!==void 0&&(we=1),N.morphAttributes.normal!==void 0&&(we=2),N.morphAttributes.color!==void 0&&(we=3);let H,ne,_e,Re;if(J){const Je=Qt[J];H=Je.vertexShader,ne=Je.fragmentShader}else H=y.vertexShader,ne=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const Me=s.getRenderTarget(),xe=P.isInstancedMesh===!0,Fe=P.isBatchedMesh===!0,Te=!!y.map,C=!!y.matcap,he=!!j,Y=!!y.aoMap,le=!!y.lightMap,ee=!!y.bumpMap,ve=!!y.normalMap,ge=!!y.displacementMap,Se=!!y.emissiveMap,ze=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,W=y.clearcoat>0,$=y.iridescence>0,ie=y.sheen>0,te=y.transmission>0,Ue=x&&!!y.anisotropyMap,Ie=W&&!!y.clearcoatMap,ue=W&&!!y.clearcoatNormalMap,pe=W&&!!y.clearcoatRoughnessMap,Oe=$&&!!y.iridescenceMap,ce=$&&!!y.iridescenceThicknessMap,ot=ie&&!!y.sheenColorMap,$e=ie&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Ee=!!y.specularColorMap,Ae=!!y.specularIntensityMap,R=te&&!!y.transmissionMap,Q=te&&!!y.thicknessMap,be=!!y.gradientMap,I=!!y.alphaMap,ae=y.alphaTest>0,F=!!y.alphaHash,se=!!y.extensions;let me=On;y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(me=s.toneMapping);const qe={isWebGL2:u,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:ne,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Fe,instancing:xe,instancingColor:xe&&P.instanceColor!==null,instancingMorph:xe&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xn,alphaToCoverage:!!y.alphaToCoverage,map:Te,matcap:C,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:q,aoMap:Y,lightMap:le,bumpMap:ee,normalMap:ve,displacementMap:m&&ge,emissiveMap:Se,normalMapObjectSpace:ve&&y.normalMapType===Lu,normalMapTangentSpace:ve&&y.normalMapType===Qa,metalnessMap:ze,roughnessMap:M,anisotropy:x,anisotropyMap:Ue,clearcoat:W,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,iridescence:$,iridescenceMap:Oe,iridescenceThicknessMap:ce,sheen:ie,sheenColorMap:ot,sheenRoughnessMap:$e,specularMap:Pe,specularColorMap:Ee,specularIntensityMap:Ae,transmission:te,transmissionMap:R,thicknessMap:Q,gradientMap:be,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:I,alphaTest:ae,alphaHash:F,combine:y.combine,mapUv:Te&&f(y.map.channel),aoMapUv:Y&&f(y.aoMap.channel),lightMapUv:le&&f(y.lightMap.channel),bumpMapUv:ee&&f(y.bumpMap.channel),normalMapUv:ve&&f(y.normalMap.channel),displacementMapUv:ge&&f(y.displacementMap.channel),emissiveMapUv:Se&&f(y.emissiveMap.channel),metalnessMapUv:ze&&f(y.metalnessMap.channel),roughnessMapUv:M&&f(y.roughnessMap.channel),anisotropyMapUv:Ue&&f(y.anisotropyMap.channel),clearcoatMapUv:Ie&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&f(y.sheenRoughnessMap.channel),specularMapUv:Pe&&f(y.specularMap.channel),specularColorMapUv:Ee&&f(y.specularColorMap.channel),specularIntensityMapUv:Ae&&f(y.specularIntensityMap.channel),transmissionMapUv:R&&f(y.transmissionMap.channel),thicknessMapUv:Q&&f(y.thicknessMap.channel),alphaMapUv:I&&f(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Te||I),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:we,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Lt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function b(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)T.push(Z),T.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(_(T,y),S(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function L(y){const T=v[y.type];let Z;if(T){const X=Qt[T];Z=cd.clone(X.uniforms)}else Z=y.uniforms;return Z}function A(y,T){let Z;for(let X=0,P=h.length;X<P;X++){const B=h[X];if(B.cacheKey===T){Z=B,++Z.usedTimes;break}}return Z===void 0&&(Z=new Tg(s,T,y,r),h.push(Z)),Z}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:L,acquireProgram:A,releaseProgram:w,releaseShaderCache:D,programs:h,dispose:V}}function Lg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ig(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function kl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,m,g,v,f){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=f),e++,p}function o(u,d,m,g,v,f){const p=a(u,d,m,g,v,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(u,d,m,g,v,f){const p=a(u,d,m,g,v,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ig),n.length>1&&n.sort(d||kl),i.length>1&&i.sort(d||kl)}function h(){for(let u=e,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Dg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bl,s.set(n,[a])):i>=r.length?(a=new Bl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ug(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Og(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ng=0;function Fg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kg(s,e){const t=new Ug,n=Og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,a=new at,o=new at;function l(h,u){let d=0,m=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,f=0,p=0,b=0,_=0,S=0,L=0,A=0,w=0,D=0,V=0;h.sort(Fg);const y=u===!0?Math.PI:1;for(let Z=0,X=h.length;Z<X;Z++){const P=h[Z],B=P.color,N=P.intensity,K=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=B.r*N*y,m+=B.g*N*y,g+=B.b*N*y;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],N);V++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const J=P.shadow,re=n.get(P);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,i.directionalShadow[v]=re,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=P.shadow.matrix,S++}i.directional[v]=q,v++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(N*y),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[p]=q;const J=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,J.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=J.matrix,P.castShadow){const re=n.get(P);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,i.spotShadow[p]=re,i.spotShadowMap[p]=j,A++}p++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(B).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=q,b++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*y),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,re=n.get(P);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,i.pointShadow[f]=re,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=P.shadow.matrix,L++}i.point[f]=q,f++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(N*y),q.groundColor.copy(P.groundColor).multiplyScalar(N*y),i.hemi[_]=q,_++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==v||T.pointLength!==f||T.spotLength!==p||T.rectAreaLength!==b||T.hemiLength!==_||T.numDirectionalShadows!==S||T.numPointShadows!==L||T.numSpotShadows!==A||T.numSpotMaps!==w||T.numLightProbes!==V)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=b,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=V,T.directionalLength=v,T.pointLength=f,T.spotLength=p,T.rectAreaLength=b,T.hemiLength=_,T.numDirectionalShadows=S,T.numPointShadows=L,T.numSpotShadows=A,T.numSpotMaps=w,T.numLightProbes=V,i.version=Ng++)}function c(h,u){let d=0,m=0,g=0,v=0,f=0;const p=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){const S=h[b];if(S.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),d++}else if(S.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const L=i.rectArea[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const L=i.hemi[f];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function zl(s,e){const t=new kg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Bg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new zl(s,e),t.set(r,[l])):a>=o.length?(l=new zl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class zg extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Wg(s,e,t){let n=new no;const i=new oe,r=new oe,a=new vt,o=new zg({depthPacking:Pu}),l=new Hg,c={},h=t.maxTextureSize,u={[Fn]:Lt,[Lt]:Fn,[en]:en},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let p=this.type;this.render=function(A,w,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const V=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Un),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const X=p!==fn&&this.type===fn,P=p===fn&&this.type!==fn;for(let B=0,N=A.length;B<N;B++){const K=A[B],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const q=j.getFrameExtents();if(i.multiply(q),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,j.mapSize.y=r.y)),j.map===null||X===!0||P===!0){const re=this.type!==fn?{minFilter:yt,magFilter:yt}:{};j.map!==null&&j.map.dispose(),j.map=new si(i.x,i.y,re),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const J=j.getViewportCount();for(let re=0;re<J;re++){const fe=j.getViewport(re);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),Z.viewport(a),j.updateMatrices(K,re),n=j.getFrustum(),S(w,D,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===fn&&b(j,D),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(V,y,T)};function b(A,w){const D=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,D,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,D,m,v,null)}function _(A,w,D,V){let y=null;const T=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=D.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=y.uuid,X=w.uuid;let P=c[Z];P===void 0&&(P={},c[Z]=P);let B=P[X];B===void 0&&(B=y.clone(),P[X]=B,w.addEventListener("dispose",L)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,V===fn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=s.properties.get(y);Z.light=D}return y}function S(A,w,D,V,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const X=e.update(A),P=A.material;if(Array.isArray(P)){const B=X.groups;for(let N=0,K=B.length;N<K;N++){const j=B[N],q=P[j.materialIndex];if(q&&q.visible){const J=_(A,q,V,y);A.onBeforeShadow(s,A,w,D,X,J,j),s.renderBufferDirect(D,null,X,J,A,j),A.onAfterShadow(s,A,w,D,X,J,j)}}}else if(P.visible){const B=_(A,P,V,y);A.onBeforeShadow(s,A,w,D,X,B,null),s.renderBufferDirect(D,null,X,B,A,null),A.onAfterShadow(s,A,w,D,X,B,null)}}const Z=A.children;for(let X=0,P=Z.length;X<P;X++)S(Z[X],w,D,V,y)}function L(A){A.target.removeEventListener("dispose",L);for(const D in c){const V=c[D],y=A.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}function jg(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const ae=new vt;let F=null;const se=new vt(0,0,0,0);return{setMask:function(me){F!==me&&!I&&(s.colorMask(me,me,me,me),F=me)},setLocked:function(me){I=me},setClear:function(me,qe,Je,Qe,lt){lt===!0&&(me*=Qe,qe*=Qe,Je*=Qe),ae.set(me,qe,Je,Qe),se.equals(ae)===!1&&(s.clearColor(me,qe,Je,Qe),se.copy(ae))},reset:function(){I=!1,F=null,se.set(-1,0,0,0)}}}function r(){let I=!1,ae=null,F=null,se=null;return{setTest:function(me){me?xe(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(me){ae!==me&&!I&&(s.depthMask(me),ae=me)},setFunc:function(me){if(F!==me){switch(me){case au:s.depthFunc(s.NEVER);break;case ou:s.depthFunc(s.ALWAYS);break;case lu:s.depthFunc(s.LESS);break;case hr:s.depthFunc(s.LEQUAL);break;case cu:s.depthFunc(s.EQUAL);break;case hu:s.depthFunc(s.GEQUAL);break;case uu:s.depthFunc(s.GREATER);break;case du:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=me}},setLocked:function(me){I=me},setClear:function(me){se!==me&&(s.clearDepth(me),se=me)},reset:function(){I=!1,ae=null,F=null,se=null}}}function a(){let I=!1,ae=null,F=null,se=null,me=null,qe=null,Je=null,Qe=null,lt=null;return{setTest:function(Ke){I||(Ke?xe(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!I&&(s.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,tt,St){(F!==Ke||se!==tt||me!==St)&&(s.stencilFunc(Ke,tt,St),F=Ke,se=tt,me=St)},setOp:function(Ke,tt,St){(qe!==Ke||Je!==tt||Qe!==St)&&(s.stencilOp(Ke,tt,St),qe=Ke,Je=tt,Qe=St)},setLocked:function(Ke){I=Ke},setClear:function(Ke){lt!==Ke&&(s.clearStencil(Ke),lt=Ke)},reset:function(){I=!1,ae=null,F=null,se=null,me=null,qe=null,Je=null,Qe=null,lt=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,v=[],f=null,p=!1,b=null,_=null,S=null,L=null,A=null,w=null,D=null,V=new Ge(0,0,0),y=0,T=!1,Z=null,X=null,P=null,B=null,N=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=q>=2);let re=null,fe={};const we=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),ne=new vt().fromArray(we),_e=new vt().fromArray(H);function Re(I,ae,F,se){const me=new Uint8Array(4),qe=s.createTexture();s.bindTexture(I,qe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<F;Je++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ae+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return qe}const Me={};Me[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(s.DEPTH_TEST),l.setFunc(hr),ge(!1),Se(yo),xe(s.CULL_FACE),ee(Un);function xe(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Fe(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Te(I,ae){return m[I]!==ae?(s.bindFramebuffer(I,ae),m[I]=ae,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ae),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function C(I,ae){let F=v,se=!1;if(I){F=g.get(ae),F===void 0&&(F=[],g.set(ae,F));const me=I.textures;if(F.length!==me.length||F[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Je=me.length;qe<Je;qe++)F[qe]=s.COLOR_ATTACHMENT0+qe;F.length=me.length,se=!0}}else F[0]!==s.BACK&&(F[0]=s.BACK,se=!0);if(se)if(t.isWebGL2)s.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function he(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const Y={[Qn]:s.FUNC_ADD,[jh]:s.FUNC_SUBTRACT,[$h]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[bo]=s.MIN,Y[Mo]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Y[bo]=I.MIN_EXT,Y[Mo]=I.MAX_EXT)}const le={[Xh]:s.ZERO,[qh]:s.ONE,[Yh]:s.SRC_COLOR,[Ra]:s.SRC_ALPHA,[tu]:s.SRC_ALPHA_SATURATE,[Qh]:s.DST_COLOR,[Jh]:s.DST_ALPHA,[Kh]:s.ONE_MINUS_SRC_COLOR,[Ca]:s.ONE_MINUS_SRC_ALPHA,[eu]:s.ONE_MINUS_DST_COLOR,[Zh]:s.ONE_MINUS_DST_ALPHA,[nu]:s.CONSTANT_COLOR,[iu]:s.ONE_MINUS_CONSTANT_COLOR,[su]:s.CONSTANT_ALPHA,[ru]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(I,ae,F,se,me,qe,Je,Qe,lt,Ke){if(I===Un){p===!0&&(Fe(s.BLEND),p=!1);return}if(p===!1&&(xe(s.BLEND),p=!0),I!==Wh){if(I!==b||Ke!==T){if((_!==Qn||A!==Qn)&&(s.blendEquation(s.FUNC_ADD),_=Qn,A=Qn),Ke)switch(I){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFunc(s.ONE,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,L=null,w=null,D=null,V.set(0,0,0),y=0,b=I,T=Ke}return}me=me||ae,qe=qe||F,Je=Je||se,(ae!==_||me!==A)&&(s.blendEquationSeparate(Y[ae],Y[me]),_=ae,A=me),(F!==S||se!==L||qe!==w||Je!==D)&&(s.blendFuncSeparate(le[F],le[se],le[qe],le[Je]),S=F,L=se,w=qe,D=Je),(Qe.equals(V)===!1||lt!==y)&&(s.blendColor(Qe.r,Qe.g,Qe.b,lt),V.copy(Qe),y=lt),b=I,T=!1}function ve(I,ae){I.side===en?Fe(s.CULL_FACE):xe(s.CULL_FACE);let F=I.side===Lt;ae&&(F=!F),ge(F),I.blending===Bi&&I.transparent===!1?ee(Un):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const se=I.stencilWrite;c.setTest(se),se&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),M(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(I){Z!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),Z=I)}function Se(I){I!==Gh?(xe(s.CULL_FACE),I!==X&&(I===yo?s.cullFace(s.BACK):I===Vh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),X=I}function ze(I){I!==P&&(j&&s.lineWidth(I),P=I)}function M(I,ae,F){I?(xe(s.POLYGON_OFFSET_FILL),(B!==ae||N!==F)&&(s.polygonOffset(ae,F),B=ae,N=F)):Fe(s.POLYGON_OFFSET_FILL)}function x(I){I?xe(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function W(I){I===void 0&&(I=s.TEXTURE0+K-1),re!==I&&(s.activeTexture(I),re=I)}function $(I,ae,F){F===void 0&&(re===null?F=s.TEXTURE0+K-1:F=re);let se=fe[F];se===void 0&&(se={type:void 0,texture:void 0},fe[F]=se),(se.type!==I||se.texture!==ae)&&(re!==F&&(s.activeTexture(F),re=F),s.bindTexture(I,ae||Me[I]),se.type=I,se.texture=ae)}function ie(){const I=fe[re];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ae(I){_e.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function R(I,ae){let F=u.get(ae);F===void 0&&(F=new WeakMap,u.set(ae,F));let se=F.get(I);se===void 0&&(se=s.getUniformBlockIndex(ae,I.name),F.set(I,se))}function Q(I,ae){const se=u.get(ae).get(I);h.get(ae)!==se&&(s.uniformBlockBinding(ae,se,I.__bindingPointIndex),h.set(ae,se))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},re=null,fe={},m={},g=new WeakMap,v=[],f=null,p=!1,b=null,_=null,S=null,L=null,A=null,w=null,D=null,V=new Ge(0,0,0),y=0,T=!1,Z=null,X=null,P=null,B=null,N=null,ne.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:Fe,bindFramebuffer:Te,drawBuffers:C,useProgram:he,setBlending:ee,setMaterial:ve,setFlipSided:ge,setCullFace:Se,setLineWidth:ze,setPolygonOffset:M,setScissorTest:x,activeTexture:W,bindTexture:$,unbindTexture:ie,compressedTexImage2D:te,compressedTexImage3D:Ue,texImage2D:$e,texImage3D:Pe,updateUBOMapping:R,uniformBlockBinding:Q,texStorage2D:ce,texStorage3D:ot,texSubImage2D:Ie,texSubImage3D:ue,compressedTexSubImage2D:pe,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Ae,reset:be}}function $g(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new oe,u=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return g?new OffscreenCanvas(M,x):gr("canvas")}function f(M,x,W,$){let ie=1;const te=ze(M);if((te.width>$||te.height>$)&&(ie=$/Math.max(te.width,te.height)),ie<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Ue=x?Ua:Math.floor,Ie=Ue(ie*te.width),ue=Ue(ie*te.height);d===void 0&&(d=v(Ie,ue));const pe=W?v(Ie,ue):d;return pe.width=Ie,pe.height=ue,pe.getContext("2d").drawImage(M,0,0,Ie,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Ie+"x"+ue+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),M;return M}function p(M){const x=ze(M);return el(x.width)&&el(x.height)}function b(M){return o?!1:M.wrapS!==Ot||M.wrapT!==Ot||M.minFilter!==yt&&M.minFilter!==ut}function _(M,x){return M.generateMipmaps&&x&&M.minFilter!==yt&&M.minFilter!==ut}function S(M){s.generateMipmap(M)}function L(M,x,W,$,ie=!1){if(o===!1)return x;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=x;if(x===s.RED&&(W===s.FLOAT&&(te=s.R32F),W===s.HALF_FLOAT&&(te=s.R16F),W===s.UNSIGNED_BYTE&&(te=s.R8)),x===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.R8UI),W===s.UNSIGNED_SHORT&&(te=s.R16UI),W===s.UNSIGNED_INT&&(te=s.R32UI),W===s.BYTE&&(te=s.R8I),W===s.SHORT&&(te=s.R16I),W===s.INT&&(te=s.R32I)),x===s.RG&&(W===s.FLOAT&&(te=s.RG32F),W===s.HALF_FLOAT&&(te=s.RG16F),W===s.UNSIGNED_BYTE&&(te=s.RG8)),x===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RG8UI),W===s.UNSIGNED_SHORT&&(te=s.RG16UI),W===s.UNSIGNED_INT&&(te=s.RG32UI),W===s.BYTE&&(te=s.RG8I),W===s.SHORT&&(te=s.RG16I),W===s.INT&&(te=s.RG32I)),x===s.RGBA){const Ue=ie?dr:Ze.getTransfer($);W===s.FLOAT&&(te=s.RGBA32F),W===s.HALF_FLOAT&&(te=s.RGBA16F),W===s.UNSIGNED_BYTE&&(te=Ue===nt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(M,x,W){return _(M,W)===!0||M.isFramebufferTexture&&M.minFilter!==yt&&M.minFilter!==ut?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function w(M){return M===yt||M===wo||M===Qi?s.NEAREST:s.LINEAR}function D(M){const x=M.target;x.removeEventListener("dispose",D),y(x),x.isVideoTexture&&u.delete(x)}function V(M){const x=M.target;x.removeEventListener("dispose",V),Z(x)}function y(M){const x=n.get(M);if(x.__webglInit===void 0)return;const W=M.source,$=m.get(W);if($){const ie=$[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(M),Object.keys($).length===0&&m.delete(W)}n.remove(M)}function T(M){const x=n.get(M);s.deleteTexture(x.__webglTexture);const W=M.source,$=m.get(W);delete $[x.__cacheKey],a.memory.textures--}function Z(M){const x=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ie=0;ie<x.__webglFramebuffer[$].length;ie++)s.deleteFramebuffer(x.__webglFramebuffer[$][ie]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=M.textures;for(let $=0,ie=W.length;$<ie;$++){const te=n.get(W[$]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(M)}let X=0;function P(){X=0}function B(){const M=X;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),X+=1,M}function N(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){const W=n.get(M);if(M.isVideoTexture&&ge(M),M.isRenderTargetTexture===!1&&M.version>0&&W.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(W,M,x);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+x)}function j(M,x){const W=n.get(M);if(M.version>0&&W.__version!==M.version){_e(W,M,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+x)}function q(M,x){const W=n.get(M);if(M.version>0&&W.__version!==M.version){_e(W,M,x);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+x)}function J(M,x){const W=n.get(M);if(M.version>0&&W.__version!==M.version){Re(W,M,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+x)}const re={[ps]:s.REPEAT,[Ot]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},fe={[yt]:s.NEAREST,[wo]:s.NEAREST_MIPMAP_NEAREST,[Qi]:s.NEAREST_MIPMAP_LINEAR,[ut]:s.LINEAR,[Nr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},we={[Iu]:s.NEVER,[ku]:s.ALWAYS,[Du]:s.LESS,[Fc]:s.LEQUAL,[Uu]:s.EQUAL,[Fu]:s.GEQUAL,[Ou]:s.GREATER,[Nu]:s.NOTEQUAL};function H(M,x,W){if(x.type===kt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ut||x.magFilter===Nr||x.magFilter===Qi||x.magFilter===In||x.minFilter===ut||x.minFilter===Nr||x.minFilter===Qi||x.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(s.texParameteri(M,s.TEXTURE_WRAP_S,re[x.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,re[x.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,re[x.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,fe[x.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,fe[x.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Ot||x.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,w(x.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==yt&&x.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===yt||x.minFilter!==Qi&&x.minFilter!==In||x.type===kt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===vn&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(M,x){let W=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",D));const $=x.source;let ie=m.get($);ie===void 0&&(ie={},m.set($,ie));const te=N(x);if(te!==M.__cacheKey){ie[te]===void 0&&(ie[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[te].usedTimes++;const Ue=ie[M.__cacheKey];Ue!==void 0&&(ie[M.__cacheKey].usedTimes--,Ue.usedTimes===0&&T(x)),M.__cacheKey=te,M.__webglTexture=ie[te].texture}return W}function _e(M,x,W){let $=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=s.TEXTURE_3D);const ie=ne(M,x),te=x.source;t.bindTexture($,M.__webglTexture,s.TEXTURE0+W);const Ue=n.get(te);if(te.version!==Ue.__version||ie===!0){t.activeTexture(s.TEXTURE0+W);const Ie=Ze.getPrimaries(Ze.workingColorSpace),ue=x.colorSpace===Pn?null:Ze.getPrimaries(x.colorSpace),pe=x.colorSpace===Pn||Ie===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=b(x)&&p(x.image)===!1;let ce=f(x.image,Oe,!1,i.maxTextureSize);ce=Se(x,ce);const ot=p(ce)||o,$e=r.convert(x.format,x.colorSpace);let Pe=r.convert(x.type),Ee=L(x.internalFormat,$e,Pe,x.colorSpace,x.isVideoTexture);H($,x,ot);let Ae;const R=x.mipmaps,Q=o&&x.isVideoTexture!==!0&&Ee!==Nc,be=Ue.__version===void 0||ie===!0,I=te.dataReady,ae=A(x,ce,ot);if(x.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?x.type===kt?Ee=s.DEPTH_COMPONENT32F:x.type===Dn?Ee=s.DEPTH_COMPONENT24:x.type===ni?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:x.type===kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ii&&Ee===s.DEPTH_COMPONENT&&x.type!==Za&&x.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Dn,Pe=r.convert(x.type)),x.format===Wi&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,x.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ni,Pe=r.convert(x.type))),be&&(Q?t.texStorage2D(s.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ce.width,ce.height,0,$e,Pe,null));else if(x.isDataTexture)if(R.length>0&&ot){Q&&be&&t.texStorage2D(s.TEXTURE_2D,ae,Ee,R[0].width,R[0].height);for(let F=0,se=R.length;F<se;F++)Ae=R[F],Q?I&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Pe,Ae.data):t.texImage2D(s.TEXTURE_2D,F,Ee,Ae.width,Ae.height,0,$e,Pe,Ae.data);x.generateMipmaps=!1}else Q?(be&&t.texStorage2D(s.TEXTURE_2D,ae,Ee,ce.width,ce.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,$e,Pe,ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,ce.width,ce.height,0,$e,Pe,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Q&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ee,R[0].width,R[0].height,ce.depth);for(let F=0,se=R.length;F<se;F++)Ae=R[F],x.format!==qt?$e!==null?Q?I&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,ce.depth,$e,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,Ee,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,ce.depth,$e,Pe,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,Ee,Ae.width,Ae.height,ce.depth,0,$e,Pe,Ae.data)}else{Q&&be&&t.texStorage2D(s.TEXTURE_2D,ae,Ee,R[0].width,R[0].height);for(let F=0,se=R.length;F<se;F++)Ae=R[F],x.format!==qt?$e!==null?Q?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,F,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?I&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Pe,Ae.data):t.texImage2D(s.TEXTURE_2D,F,Ee,Ae.width,Ae.height,0,$e,Pe,Ae.data)}else if(x.isDataArrayTexture)Q?(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ee,ce.width,ce.height,ce.depth),I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,$e,Pe,ce.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,$e,Pe,ce.data);else if(x.isData3DTexture)Q?(be&&t.texStorage3D(s.TEXTURE_3D,ae,Ee,ce.width,ce.height,ce.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,$e,Pe,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,$e,Pe,ce.data);else if(x.isFramebufferTexture){if(be)if(Q)t.texStorage2D(s.TEXTURE_2D,ae,Ee,ce.width,ce.height);else{let F=ce.width,se=ce.height;for(let me=0;me<ae;me++)t.texImage2D(s.TEXTURE_2D,me,Ee,F,se,0,$e,Pe,null),F>>=1,se>>=1}}else if(R.length>0&&ot){if(Q&&be){const F=ze(R[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ee,F.width,F.height)}for(let F=0,se=R.length;F<se;F++)Ae=R[F],Q?I&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,$e,Pe,Ae):t.texImage2D(s.TEXTURE_2D,F,Ee,$e,Pe,Ae);x.generateMipmaps=!1}else if(Q){if(be){const F=ze(ce);t.texStorage2D(s.TEXTURE_2D,ae,Ee,F.width,F.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,$e,Pe,ce)}else t.texImage2D(s.TEXTURE_2D,0,Ee,$e,Pe,ce);_(x,ot)&&S($),Ue.__version=te.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Re(M,x,W){if(x.image.length!==6)return;const $=ne(M,x),ie=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+W);const te=n.get(ie);if(ie.version!==te.__version||$===!0){t.activeTexture(s.TEXTURE0+W);const Ue=Ze.getPrimaries(Ze.workingColorSpace),Ie=x.colorSpace===Pn?null:Ze.getPrimaries(x.colorSpace),ue=x.colorSpace===Pn||Ue===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Oe=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let F=0;F<6;F++)!pe&&!Oe?ce[F]=f(x.image[F],!1,!0,i.maxCubemapSize):ce[F]=Oe?x.image[F].image:x.image[F],ce[F]=Se(x,ce[F]);const ot=ce[0],$e=p(ot)||o,Pe=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Ae=L(x.internalFormat,Pe,Ee,x.colorSpace),R=o&&x.isVideoTexture!==!0,Q=te.__version===void 0||$===!0,be=ie.dataReady;let I=A(x,ot,$e);H(s.TEXTURE_CUBE_MAP,x,$e);let ae;if(pe){R&&Q&&t.texStorage2D(s.TEXTURE_CUBE_MAP,I,Ae,ot.width,ot.height);for(let F=0;F<6;F++){ae=ce[F].mipmaps;for(let se=0;se<ae.length;se++){const me=ae[se];x.format!==qt?Pe!==null?R?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se,0,0,me.width,me.height,Pe,Ee,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se,Ae,me.width,me.height,0,Pe,Ee,me.data)}}}else{if(ae=x.mipmaps,R&&Q){ae.length>0&&I++;const F=ze(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,I,Ae,F.width,F.height)}for(let F=0;F<6;F++)if(Oe){R?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ce[F].width,ce[F].height,Pe,Ee,ce[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,ce[F].width,ce[F].height,0,Pe,Ee,ce[F].data);for(let se=0;se<ae.length;se++){const qe=ae[se].image[F].image;R?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se+1,0,0,qe.width,qe.height,Pe,Ee,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se+1,Ae,qe.width,qe.height,0,Pe,Ee,qe.data)}}else{R?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Pe,Ee,ce[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,Pe,Ee,ce[F]);for(let se=0;se<ae.length;se++){const me=ae[se];R?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se+1,0,0,Pe,Ee,me.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,se+1,Ae,Pe,Ee,me.image[F])}}}_(x,$e)&&S(s.TEXTURE_CUBE_MAP),te.__version=ie.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Me(M,x,W,$,ie,te){const Ue=r.convert(W.format,W.colorSpace),Ie=r.convert(W.type),ue=L(W.internalFormat,Ue,Ie,W.colorSpace);if(!n.get(x).__hasExternalTextures){const Oe=Math.max(1,x.width>>te),ce=Math.max(1,x.height>>te);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,te,ue,Oe,ce,x.depth,0,Ue,Ie,null):t.texImage2D(ie,te,ue,Oe,ce,0,Ue,Ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,M),ve(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ie,n.get(W).__webglTexture,0,ee(x)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ie,n.get(W).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(M,x,W){if(s.bindRenderbuffer(s.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let $=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(W||ve(x)){const ie=x.depthTexture;ie&&ie.isDepthTexture&&(ie.type===kt?$=s.DEPTH_COMPONENT32F:ie.type===Dn&&($=s.DEPTH_COMPONENT24));const te=ee(x);ve(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,$,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,$,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const $=ee(x);W&&ve(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,x.width,x.height):ve(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{const $=x.textures;for(let ie=0;ie<$.length;ie++){const te=$[ie],Ue=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),ue=L(te.internalFormat,Ue,Ie,te.colorSpace),pe=ee(x);W&&ve(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,ue,x.width,x.height):ve(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,ue,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ue,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,ie=ee(x);if(x.depthTexture.format===ii)ve(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(x.depthTexture.format===Wi)ve(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Te(M){const x=n.get(M),W=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(x.__webglFramebuffer,M)}else if(W){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=s.createRenderbuffer(),xe(x.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),xe(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function C(M,x,W){const $=n.get(M);x!==void 0&&Me($.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Te(M)}function he(M){const x=M.texture,W=n.get(M),$=n.get(x);M.addEventListener("dispose",V);const ie=M.textures,te=M.isWebGLCubeRenderTarget===!0,Ue=ie.length>1,Ie=p(M)||o;if(Ue||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,a.memory.textures++),te){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let pe=0;pe<x.mipmaps.length;pe++)W.__webglFramebuffer[ue][pe]=s.createFramebuffer()}else W.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)W.__webglFramebuffer[ue]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ue)if(i.drawBuffers)for(let ue=0,pe=ie.length;ue<pe;ue++){const Oe=n.get(ie[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ve(M)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const pe=ie[ue];W.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const Oe=r.convert(pe.format,pe.colorSpace),ce=r.convert(pe.type),ot=L(pe.internalFormat,Oe,ce,pe.colorSpace,M.isXRRenderTarget===!0),$e=ee(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ot,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),H(s.TEXTURE_CUBE_MAP,x,Ie);for(let ue=0;ue<6;ue++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Me(W.__webglFramebuffer[ue][pe],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else Me(W.__webglFramebuffer[ue],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(x,Ie)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ue=0,pe=ie.length;ue<pe;ue++){const Oe=ie[ue],ce=n.get(Oe);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),H(s.TEXTURE_2D,Oe,Ie),Me(W.__webglFramebuffer,M,Oe,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),_(Oe,Ie)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ue=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,$.__webglTexture),H(ue,x,Ie),o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Me(W.__webglFramebuffer[pe],M,x,s.COLOR_ATTACHMENT0,ue,pe);else Me(W.__webglFramebuffer,M,x,s.COLOR_ATTACHMENT0,ue,0);_(x,Ie)&&S(ue),t.unbindTexture()}M.depthBuffer&&Te(M)}function Y(M){const x=p(M)||o,W=M.textures;for(let $=0,ie=W.length;$<ie;$++){const te=W[$];if(_(te,x)){const Ue=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ie=n.get(te).__webglTexture;t.bindTexture(Ue,Ie),S(Ue),t.unbindTexture()}}}function le(M){if(o&&M.samples>0&&ve(M)===!1){const x=M.textures,W=M.width,$=M.height;let ie=s.COLOR_BUFFER_BIT;const te=[],Ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(M),ue=x.length>1;if(ue)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){te.push(s.COLOR_ATTACHMENT0+pe),M.depthBuffer&&te.push(Ue);const Oe=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Oe===!1&&(M.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[pe]),Oe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),ue){const ce=n.get(x[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ce,0)}s.blitFramebuffer(0,0,W,$,0,0,W,$,ie,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[pe]);const Oe=n.get(x[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function ee(M){return Math.min(i.maxSamples,M.samples)}function ve(M){const x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(M){const x=a.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function Se(M,x){const W=M.colorSpace,$=M.format,ie=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ia||W!==xn&&W!==Pn&&(Ze.getTransfer(W)===nt?o===!1?e.has("EXT_sRGB")===!0&&$===qt?(M.format=Ia,M.minFilter=ut,M.generateMipmaps=!1):x=Bc.sRGBToLinear(x):($!==qt||ie!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function ze(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=C,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ve}function Xg(s,e,t){const n=t.isWebGL2;function i(r,a=Pn){let o;const l=Ze.getTransfer(a);if(r===Nn)return s.UNSIGNED_BYTE;if(r===Lc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ic)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Su)return s.BYTE;if(r===Eu)return s.SHORT;if(r===Za)return s.UNSIGNED_SHORT;if(r===Pc)return s.INT;if(r===Dn)return s.UNSIGNED_INT;if(r===kt)return s.FLOAT;if(r===vn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bu)return s.ALPHA;if(r===qt)return s.RGBA;if(r===Mu)return s.LUMINANCE;if(r===wu)return s.LUMINANCE_ALPHA;if(r===ii)return s.DEPTH_COMPONENT;if(r===Wi)return s.DEPTH_STENCIL;if(r===Ia)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Tu)return s.RED;if(r===Dc)return s.RED_INTEGER;if(r===Au)return s.RG;if(r===Uc)return s.RG_INTEGER;if(r===Oc)return s.RGBA_INTEGER;if(r===Fr||r===kr||r===Br||r===zr)if(l===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Fr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Fr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===To||r===Ao||r===Ro||r===Co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===To)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Po||r===Lo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Po)return l===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Lo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Io||r===Do||r===Uo||r===Oo||r===No||r===Fo||r===ko||r===Bo||r===zo||r===Ho||r===Go||r===Vo||r===Wo||r===jo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Io)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Do)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===No)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ko)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ho)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Go)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hr||r===$o||r===Xo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Hr)return l===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$o)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ru||r===qo||r===Yo||r===Ko)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Hr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ko)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ni?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class qg extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new as;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new kn({extensions:{fragDepth:!0},vertexShader:Kg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bt(new qi(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Qg extends li{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const v=new Zg,f=t.getContextAttributes();let p=null,b=null;const _=[],S=[],L=new oe;let A=null;const w=new Xt;w.layers.enable(1),w.viewport=new vt;const D=new Xt;D.layers.enable(2),D.viewport=new vt;const V=[w,D],y=new qg;y.layers.enable(1),y.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ne=_[H];return ne===void 0&&(ne=new fa,_[H]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(H){let ne=_[H];return ne===void 0&&(ne=new fa,_[H]=ne),ne.getGripSpace()},this.getHand=function(H){let ne=_[H];return ne===void 0&&(ne=new fa,_[H]=ne),ne.getHandSpace()};function X(H){const ne=S.indexOf(H.inputSource);if(ne===-1)return;const _e=_[ne];_e!==void 0&&(_e.update(H.inputSource,H.frame,c||a),_e.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",B);for(let H=0;H<_.length;H++){const ne=S[H];ne!==null&&(S[H]=null,_[H].disconnect(ne))}T=null,Z=null,v.reset(),e.setRenderTarget(p),m=null,d=null,u=null,i=null,b=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",P),i.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new si(m.framebufferWidth,m.framebufferHeight,{format:qt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ne=null,_e=null,Re=null;f.depth&&(Re=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=f.stencil?Wi:ii,_e=f.stencil?ni:Dn);const Me={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:qt,type:Nn,depthTexture:new Kc(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const xe=e.properties.get(b);xe.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(H){for(let ne=0;ne<H.removed.length;ne++){const _e=H.removed[ne],Re=S.indexOf(_e);Re>=0&&(S[Re]=null,_[Re].disconnect(_e))}for(let ne=0;ne<H.added.length;ne++){const _e=H.added[ne];let Re=S.indexOf(_e);if(Re===-1){for(let xe=0;xe<_.length;xe++)if(xe>=S.length){S.push(_e),Re=xe;break}else if(S[xe]===null){S[xe]=_e,Re=xe;break}if(Re===-1)break}const Me=_[Re];Me&&Me.connect(_e)}}const N=new U,K=new U;function j(H,ne,_e){N.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const Re=N.distanceTo(K),Me=ne.projectionMatrix.elements,xe=_e.projectionMatrix.elements,Fe=Me[14]/(Me[10]-1),Te=Me[14]/(Me[10]+1),C=(Me[9]+1)/Me[5],he=(Me[9]-1)/Me[5],Y=(Me[8]-1)/Me[0],le=(xe[8]+1)/xe[0],ee=Fe*Y,ve=Fe*le,ge=Re/(-Y+le),Se=ge*-Y;ne.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Se),H.translateZ(ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const ze=Fe+ge,M=Te+ge,x=ee-Se,W=ve+(Re-Se),$=C*Te/M*ze,ie=he*Te/M*ze;H.projectionMatrix.makePerspective(x,W,$,ie,ze,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,ne){ne===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ne.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),y.near=D.near=w.near=H.near,y.far=D.far=w.far=H.far,(T!==y.near||Z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,Z=y.far,w.near=T,w.far=Z,D.near=T,D.far=Z,w.updateProjectionMatrix(),D.updateProjectionMatrix(),H.updateProjectionMatrix());const ne=H.parent,_e=y.cameras;q(y,ne);for(let Re=0;Re<_e.length;Re++)q(_e[Re],ne);_e.length===2?j(y,w,D):y.projectionMatrix.copy(w.projectionMatrix),J(H,y,ne)};function J(H,ne,_e){_e===null?H.matrix.copy(ne.matrixWorld):(H.matrix.copy(_e.matrixWorld),H.matrix.invert(),H.matrix.multiply(ne.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ne.projectionMatrix),H.projectionMatrixInverse.copy(ne.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Da*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let re=null;function fe(H,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const _e=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Re=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,Re=!0);for(let xe=0;xe<_e.length;xe++){const Fe=_e[xe];let Te=null;if(m!==null)Te=m.getViewport(Fe);else{const he=u.getViewSubImage(d,Fe);Te=he.viewport,xe===0&&(e.setRenderTargetTextures(b,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(b))}let C=V[xe];C===void 0&&(C=new Xt,C.layers.enable(xe),C.viewport=new vt,V[xe]=C),C.matrix.fromArray(Fe.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Fe.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Re===!0&&y.cameras.push(C)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const xe=u.getDepthInformation(_e[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,i.renderState)}}for(let _e=0;_e<_.length;_e++){const Re=S[_e],Me=_[_e];Re!==null&&Me!==void 0&&Me.update(Re,ne,c||a)}v.render(e,y),re&&re(H,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const we=new Yc;we.setAnimationLoop(fe),this.setAnimationLoop=function(H){re=H},this.dispose=function(){}}}const qn=new Kt,e_=new at;function t_(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,$c(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,b,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,b,_):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Lt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Lt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=e.get(p),_=b.envMap,S=b.envMapRotation;if(_&&(f.envMap.value=_,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),f.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(qn)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const L=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*L,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,b,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=_*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){const S=_.program;n.uniformBlockBinding(b,S)}function c(b,_){let S=i[b.id];S===void 0&&(g(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",f));const L=_.program;n.updateUBOMapping(b,L);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){const _=u();b.__bindingPointIndex=_;const S=s.createBuffer(),L=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=i[b.id],S=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,w=S.length;A<w;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let V=0,y=D.length;V<y;V++){const T=D[V];if(m(T,A,V,L)===!0){const Z=T.__offset,X=Array.isArray(T.value)?T.value:[T.value];let P=0;for(let B=0;B<X.length;B++){const N=X[B],K=v(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,Z+P,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,_,S,L){const A=b.value,w=_+"_"+S;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const D=L[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(b){const _=b.uniforms;let S=0;const L=16;for(let w=0,D=_.length;w<D;w++){const V=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,T=V.length;y<T;y++){const Z=V[y],X=Array.isArray(Z.value)?Z.value:[Z.value];for(let P=0,B=X.length;P<B;P++){const N=X[P],K=v(N),j=S%L;j!==0&&L-j<K.boundary&&(S+=L-j),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=K.storage}}}const A=S%L;return A>0&&(S+=L-A),b.__size=S,b.__cache={},this}function v(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(b){const _=b.target;_.removeEventListener("dispose",f);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class nh{constructor(e={}){const{canvas:t=Hu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const _=this;let S=!1,L=0,A=0,w=null,D=-1,V=null;const y=new vt,T=new vt;let Z=null;const X=new Ge(0);let P=0,B=t.width,N=t.height,K=1,j=null,q=null;const J=new vt(0,0,B,N),re=new vt(0,0,B,N);let fe=!1;const we=new no;let H=!1,ne=!1,_e=null;const Re=new at,Me=new oe,xe=new U,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return w===null?K:1}let C=n;function he(E,O){for(let z=0;z<E.length;z++){const G=E[z],k=t.getContext(G,O);if(k!==null)return k}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ka}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),C=he(O,E),C===null)throw he(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,le,ee,ve,ge,Se,ze,M,x,W,$,ie,te,Ue,Ie,ue,pe,Oe,ce,ot,$e,Pe,Ee,Ae;function R(){Y=new lm(C),le=new nm(C,Y,e),Y.init(le),Pe=new Xg(C,Y,le),ee=new jg(C,Y,le),ve=new um(C),ge=new Lg,Se=new $g(C,Y,ee,ge,le,Pe,ve),ze=new sm(_),M=new om(_),x=new gd(C,le),Ee=new em(C,Y,x,le),W=new cm(C,x,ve,Ee),$=new mm(C,W,x,ve),ce=new pm(C,le,Se),ue=new im(ge),ie=new Pg(_,ze,M,Y,le,Ee,ue),te=new t_(_,ge),Ue=new Dg,Ie=new Bg(Y,le),Oe=new Qp(_,ze,M,ee,$,d,l),pe=new Wg(_,$,le),Ae=new n_(C,ve,le,ee),ot=new tm(C,Y,ve,le),$e=new hm(C,Y,ve,le),ve.programs=ie.programs,_.capabilities=le,_.extensions=Y,_.properties=ge,_.renderLists=Ue,_.shadowMap=pe,_.state=ee,_.info=ve}R();const Q=new Qg(_,C);this.xr=Q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(B,N,!1))},this.getSize=function(E){return E.set(B,N)},this.setSize=function(E,O,z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,N=O,t.width=Math.floor(E*K),t.height=Math.floor(O*K),z===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(B*K,N*K).floor()},this.setDrawingBufferSize=function(E,O,z){B=E,N=O,K=z,t.width=Math.floor(E*z),t.height=Math.floor(O*z),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,O,z,G){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,O,z,G),ee.viewport(y.copy(J).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,O,z,G){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,O,z,G),ee.scissor(T.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){ee.setScissorTest(fe=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,O=!0,z=!0){let G=0;if(E){let k=!1;if(w!==null){const ye=w.texture.format;k=ye===Oc||ye===Uc||ye===Dc}if(k){const ye=w.texture.type,Ce=ye===Nn||ye===Dn||ye===Za||ye===ni||ye===Lc||ye===Ic,De=Oe.getClearColor(),Ne=Oe.getClearAlpha(),Xe=De.r,ke=De.g,He=De.b;Ce?(m[0]=Xe,m[1]=ke,m[2]=He,m[3]=Ne,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Xe,g[1]=ke,g[2]=He,g[3]=Ne,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}O&&(G|=C.DEPTH_BUFFER_BIT),z&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ue.dispose(),Ie.dispose(),ge.dispose(),ze.dispose(),M.dispose(),$.dispose(),Ee.dispose(),Ae.dispose(),ie.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",lt),Q.removeEventListener("sessionend",Ke),_e&&(_e.dispose(),_e=null),tt.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ve.autoReset,O=pe.enabled,z=pe.autoUpdate,G=pe.needsUpdate,k=pe.type;R(),ve.autoReset=E,pe.enabled=O,pe.autoUpdate=z,pe.needsUpdate=G,pe.type=k}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){const O=E.target;O.removeEventListener("dispose",F),se(O)}function se(E){me(E),ge.remove(E)}function me(E){const O=ge.get(E).programs;O!==void 0&&(O.forEach(function(z){ie.releaseProgram(z)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,z,G,k,ye){O===null&&(O=Fe);const Ce=k.isMesh&&k.matrixWorld.determinant()<0,De=Nh(E,O,z,G,k);ee.setMaterial(G,Ce);let Ne=z.index,Xe=1;if(G.wireframe===!0){if(Ne=W.getWireframeAttribute(z),Ne===void 0)return;Xe=2}const ke=z.drawRange,He=z.attributes.position;let ct=ke.start*Xe,It=(ke.start+ke.count)*Xe;ye!==null&&(ct=Math.max(ct,ye.start*Xe),It=Math.min(It,(ye.start+ye.count)*Xe)),Ne!==null?(ct=Math.max(ct,0),It=Math.min(It,Ne.count)):He!=null&&(ct=Math.max(ct,0),It=Math.min(It,He.count));const mt=It-ct;if(mt<0||mt===1/0)return;Ee.setup(k,G,De,z,Ne);let rn,st=ot;if(Ne!==null&&(rn=x.get(Ne),st=$e,st.setIndex(rn)),k.isMesh)G.wireframe===!0?(ee.setLineWidth(G.wireframeLinewidth*Te()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(k.isLine){let Ve=G.linewidth;Ve===void 0&&(Ve=1),ee.setLineWidth(Ve*Te()),k.isLineSegments?st.setMode(C.LINES):k.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else k.isPoints?st.setMode(C.POINTS):k.isSprite&&st.setMode(C.TRIANGLES);if(k.isBatchedMesh)st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)st.renderInstances(ct,mt,k.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ir=Math.min(z.instanceCount,Ve);st.renderInstances(ct,mt,Ir)}else st.render(ct,mt)};function qe(E,O,z){E.transparent===!0&&E.side===en&&E.forceSinglePass===!1?(E.side=Lt,E.needsUpdate=!0,ws(E,O,z),E.side=Fn,E.needsUpdate=!0,ws(E,O,z),E.side=en):ws(E,O,z)}this.compile=function(E,O,z=null){z===null&&(z=E),f=Ie.get(z),f.init(),b.push(f),z.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),E!==z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(_._useLegacyLights);const G=new Set;return E.traverse(function(k){const ye=k.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const De=ye[Ce];qe(De,z,k),G.add(De)}else qe(ye,z,k),G.add(ye)}),b.pop(),f=null,G},this.compileAsync=function(E,O,z=null){const G=this.compile(E,O,z);return new Promise(k=>{function ye(){if(G.forEach(function(Ce){ge.get(Ce).currentProgram.isReady()&&G.delete(Ce)}),G.size===0){k(E);return}setTimeout(ye,10)}Y.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Je=null;function Qe(E){Je&&Je(E)}function lt(){tt.stop()}function Ke(){tt.start()}const tt=new Yc;tt.setAnimationLoop(Qe),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(E){Je=E,Q.setAnimationLoop(E),E===null?tt.stop():tt.start()},Q.addEventListener("sessionstart",lt),Q.addEventListener("sessionend",Ke),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,w),f=Ie.get(E,b.length),f.init(),b.push(f),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),we.setFromProjectionMatrix(Re),ne=this.localClippingEnabled,H=ue.init(this.clippingPlanes,ne),v=Ue.get(E,p.length),v.init(),p.push(v),St(E,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(j,q),this.info.render.frame++,H===!0&&ue.beginShadows();const z=f.state.shadowsArray;if(pe.render(z,E,O),H===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1)&&Oe.render(v,E),f.setupLights(_._useLegacyLights),O.isArrayCamera){const G=O.cameras;for(let k=0,ye=G.length;k<ye;k++){const Ce=G[k];zn(v,E,Ce,Ce.viewport)}}else zn(v,E,O);w!==null&&(Se.updateMultisampleRenderTarget(w),Se.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,O),Ee.resetDefaultState(),D=-1,V=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function St(E,O,z,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){G&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const Ce=$.update(E),De=E.material;De.visible&&v.push(E,Ce,De,z,xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const Ce=$.update(E),De=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),xe.copy(Ce.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){const Ne=Ce.groups;for(let Xe=0,ke=Ne.length;Xe<ke;Xe++){const He=Ne[Xe],ct=De[He.materialIndex];ct&&ct.visible&&v.push(E,Ce,ct,z,xe.z,He)}}else De.visible&&v.push(E,Ce,De,z,xe.z,null)}}const ye=E.children;for(let Ce=0,De=ye.length;Ce<De;Ce++)St(ye[Ce],O,z,G)}function zn(E,O,z,G){const k=E.opaque,ye=E.transmissive,Ce=E.transparent;f.setupLightsView(z),H===!0&&ue.setGlobalState(_.clippingPlanes,z),ye.length>0&&bs(k,ye,O,z),G&&ee.viewport(y.copy(G)),k.length>0&&Ms(k,O,z),ye.length>0&&Ms(ye,O,z),Ce.length>0&&Ms(Ce,O,z),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function bs(E,O,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ye=le.isWebGL2;_e===null&&(_e=new si(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?vn:Nn,minFilter:In,samples:ye?4:0})),_.getDrawingBufferSize(Me),ye?_e.setSize(Me.x,Me.y):_e.setSize(Ua(Me.x),Ua(Me.y));const Ce=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(X),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const De=_.toneMapping;_.toneMapping=On,Ms(E,z,G),Se.updateMultisampleRenderTarget(_e),Se.updateRenderTargetMipmap(_e);let Ne=!1;for(let Xe=0,ke=O.length;Xe<ke;Xe++){const He=O[Xe],ct=He.object,It=He.geometry,mt=He.material,rn=He.group;if(mt.side===en&&ct.layers.test(G.layers)){const st=mt.side;mt.side=Lt,mt.needsUpdate=!0,po(ct,z,G,It,mt,rn),mt.side=st,mt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Se.updateMultisampleRenderTarget(_e),Se.updateRenderTargetMipmap(_e)),_.setRenderTarget(Ce),_.setClearColor(X,P),_.toneMapping=De}function Ms(E,O,z){const G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ye=E.length;k<ye;k++){const Ce=E[k],De=Ce.object,Ne=Ce.geometry,Xe=G===null?Ce.material:G,ke=Ce.group;De.layers.test(z.layers)&&po(De,O,z,Ne,Xe,ke)}}function po(E,O,z,G,k,ye){E.onBeforeRender(_,O,z,G,k,ye),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(_,O,z,G,E,ye),k.transparent===!0&&k.side===en&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,_.renderBufferDirect(z,O,G,k,E,ye),k.side=Fn,k.needsUpdate=!0,_.renderBufferDirect(z,O,G,k,E,ye),k.side=en):_.renderBufferDirect(z,O,G,k,E,ye),E.onAfterRender(_,O,z,G,k,ye)}function ws(E,O,z){O.isScene!==!0&&(O=Fe);const G=ge.get(E),k=f.state.lights,ye=f.state.shadowsArray,Ce=k.state.version,De=ie.getParameters(E,k.state,ye,O,z),Ne=ie.getProgramCacheKey(De);let Xe=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?M:ze).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",F),Xe=new Map,G.programs=Xe);let ke=Xe.get(Ne);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Ce)return go(E,De),ke}else De.uniforms=ie.getUniforms(E),E.onBuild(z,De,_),E.onBeforeCompile(De,_),ke=ie.acquireProgram(De,Ne),Xe.set(Ne,ke),G.uniforms=De.uniforms;const He=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ue.uniform),go(E,De),G.needsLights=kh(E),G.lightsStateVersion=Ce,G.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function mo(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=or.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function go(E,O){const z=ge.get(E);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Nh(E,O,z,G,k){O.isScene!==!0&&(O=Fe),Se.resetTextureUnits();const ye=O.fog,Ce=G.isMeshStandardMaterial?O.environment:null,De=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xn,Ne=(G.isMeshStandardMaterial?M:ze).get(G.envMap||Ce),Xe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,It=!!z.morphAttributes.color;let mt=On;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=_.toneMapping);const rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=rn!==void 0?rn.length:0,Ve=ge.get(G),Ir=f.state.lights;if(H===!0&&(ne===!0||E!==V)){const Nt=E===V&&G.id===D;ue.setState(G,E,Nt)}let it=!1;G.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ir.state.version||Ve.outputColorSpace!==De||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Ne||G.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ue.numPlanes||Ve.numIntersection!==ue.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==ke||Ve.morphTargets!==He||Ve.morphNormals!==ct||Ve.morphColors!==It||Ve.toneMapping!==mt||le.isWebGL2===!0&&Ve.morphTargetsCount!==st)&&(it=!0):(it=!0,Ve.__version=G.version);let Hn=Ve.currentProgram;it===!0&&(Hn=ws(G,O,k));let _o=!1,Zi=!1,Dr=!1;const Et=Hn.getUniforms(),Gn=Ve.uniforms;if(ee.useProgram(Hn.program)&&(_o=!0,Zi=!0,Dr=!0),G.id!==D&&(D=G.id,Zi=!0),_o||V!==E){Et.setValue(C,"projectionMatrix",E.projectionMatrix),Et.setValue(C,"viewMatrix",E.matrixWorldInverse);const Nt=Et.map.cameraPosition;Nt!==void 0&&Nt.setValue(C,xe.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Zi=!0,Dr=!0)}if(k.isSkinnedMesh){Et.setOptional(C,k,"bindMatrix"),Et.setOptional(C,k,"bindMatrixInverse");const Nt=k.skeleton;Nt&&(le.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Et.setValue(C,"boneTexture",Nt.boneTexture,Se)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Et.setOptional(C,k,"batchingTexture"),Et.setValue(C,"batchingTexture",k._matricesTexture,Se));const Ur=z.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&le.isWebGL2===!0)&&ce.update(k,z,Hn),(Zi||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Et.setValue(C,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=Ne,Gn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Zi&&(Et.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Fh(Gn,Dr),ye&&G.fog===!0&&te.refreshFogUniforms(Gn,ye),te.refreshMaterialUniforms(Gn,G,K,N,_e),or.upload(C,mo(Ve),Gn,Se)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(or.upload(C,mo(Ve),Gn,Se),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(C,"center",k.center),Et.setValue(C,"modelViewMatrix",k.modelViewMatrix),Et.setValue(C,"normalMatrix",k.normalMatrix),Et.setValue(C,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nt=G.uniformsGroups;for(let Or=0,Bh=Nt.length;Or<Bh;Or++)if(le.isWebGL2){const vo=Nt[Or];Ae.update(vo,Hn),Ae.bind(vo,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Fh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function kh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,z){ge.get(E.texture).__webglTexture=O,ge.get(E.depthTexture).__webglTexture=z;const G=ge.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const z=ge.get(E);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,z=0){w=E,L=O,A=z;let G=!0,k=null,ye=!1,Ce=!1;if(E){const Ne=ge.get(E);Ne.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(C.FRAMEBUFFER,null),G=!1):Ne.__webglFramebuffer===void 0?Se.setupRenderTarget(E):Ne.__hasExternalTextures&&Se.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const ke=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?k=ke[O][z]:k=ke[O],ye=!0):le.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?k=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[z]:k=ke,y.copy(E.viewport),T.copy(E.scissor),Z=E.scissorTest}else y.copy(J).multiplyScalar(K).floor(),T.copy(re).multiplyScalar(K).floor(),Z=fe;if(ee.bindFramebuffer(C.FRAMEBUFFER,k)&&le.drawBuffers&&G&&ee.drawBuffers(E,k),ee.viewport(y),ee.scissor(T),ee.setScissorTest(Z),ye){const Ne=ge.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,z)}else if(Ce){const Ne=ge.get(E.texture),Xe=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Xe)}D=-1},this.readRenderTargetPixels=function(E,O,z,G,k,ye,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){ee.bindFramebuffer(C.FRAMEBUFFER,De);try{const Ne=E.texture,Xe=Ne.format,ke=Ne.type;if(Xe!==qt&&Pe.convert(Xe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===vn&&(Y.has("EXT_color_buffer_half_float")||le.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ke!==Nn&&Pe.convert(ke)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===kt&&(le.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&z>=0&&z<=E.height-k&&C.readPixels(O,z,G,k,Pe.convert(Xe),Pe.convert(ke),ye)}finally{const Ne=w!==null?ge.get(w).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(E,O,z=0){const G=Math.pow(2,-z),k=Math.floor(O.image.width*G),ye=Math.floor(O.image.height*G);Se.setTexture2D(O,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,E.x,E.y,k,ye),ee.unbindTexture()},this.copyTextureToTexture=function(E,O,z,G=0){const k=O.image.width,ye=O.image.height,Ce=Pe.convert(z.format),De=Pe.convert(z.type);Se.setTexture2D(z,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,E.x,E.y,k,ye,Ce,De,O.image.data):O.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,G,E.x,E.y,Ce,De,O.image),G===0&&z.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(E,O,z,G,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=Math.round(E.max.x-E.min.x),Ce=Math.round(E.max.y-E.min.y),De=E.max.z-E.min.z+1,Ne=Pe.convert(G.format),Xe=Pe.convert(G.type);let ke;if(G.isData3DTexture)Se.setTexture3D(G,0),ke=C.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Se.setTexture2DArray(G,0),ke=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const He=C.getParameter(C.UNPACK_ROW_LENGTH),ct=C.getParameter(C.UNPACK_IMAGE_HEIGHT),It=C.getParameter(C.UNPACK_SKIP_PIXELS),mt=C.getParameter(C.UNPACK_SKIP_ROWS),rn=C.getParameter(C.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[k]:z.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,E.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,E.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?C.texSubImage3D(ke,k,O.x,O.y,O.z,ye,Ce,De,Ne,Xe,st.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,k,O.x,O.y,O.z,ye,Ce,De,Ne,st.data):C.texSubImage3D(ke,k,O.x,O.y,O.z,ye,Ce,De,Ne,Xe,st),C.pixelStorei(C.UNPACK_ROW_LENGTH,He),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,mt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rn),k===0&&G.generateMipmaps&&C.generateMipmap(ke),ee.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,ee.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===xr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class i_ extends nh{}i_.prototype.isWebGL1Renderer=!0;let s_=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class r_ extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=yt,h=yt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hl=new U,Gl=new U,Vl=new at,pa=new to,qs=new Sr;class a_ extends xt{constructor(e=new nn,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Hl.fromBufferAttribute(t,i-1),Gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hl.distanceTo(Gl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=r,e.ray.intersectsSphere(qs)===!1)return;Vl.copy(i).invert(),pa.copy(e.ray).applyMatrix4(Vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let _=p,S=b-1;_<S;_+=m){const L=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(f,L),h.fromBufferAttribute(f,A),pa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let _=p,S=b-1;_<S;_+=m){if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),pa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Wl=new U,jl=new U;class $l extends a_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wl.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wl.distanceTo(jl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o_ extends Tt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(a-h)/d;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new oe:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],r=[],a=[],o=new U,l=new at;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(dt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(dt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ro extends sn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class l_ extends ro{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ao(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,i(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ys=new U,ma=new ao,ga=new ao,_a=new ao;class c_ extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ys.subVectors(i[0],i[1]).add(i[0]),c=Ys);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ys.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),ma.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,f),ga.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,f),_a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,f)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ga.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xl(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function h_(s,e){const t=1-s;return t*t*e}function u_(s,e){return 2*(1-s)*s*e}function d_(s,e){return s*s*e}function hs(s,e,t,n){return h_(s,e)+u_(s,t)+d_(s,n)}function f_(s,e){const t=1-s;return t*t*t*e}function p_(s,e){const t=1-s;return 3*t*t*s*e}function m_(s,e){return 3*(1-s)*s*s*e}function g_(s,e){return s*s*s*e}function us(s,e,t,n,i){return f_(s,e)+p_(s,t)+m_(s,n)+g_(s,i)}class ih extends sn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(e,i.x,r.x,a.x,o.x),us(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class __ extends sn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(e,i.x,r.x,a.x,o.x),us(e,i.y,r.y,a.y,o.y),us(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sh extends sn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v_ extends sn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends sn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(hs(e,i.x,r.x,a.x),hs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y_ extends sn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(hs(e,i.x,r.x,a.x),hs(e,i.y,r.y,a.y),hs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Xl(o,l.x,c.x,h.x,u.x),Xl(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:l_,CatmullRomCurve3:c_,CubicBezierCurve:ih,CubicBezierCurve3:__,EllipseCurve:ro,LineCurve:sh,LineCurve3:v_,QuadraticBezierCurve:rh,QuadraticBezierCurve3:y_,SplineCurve:ah});class x_ extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Na[i.type]().fromJSON(i))}return this}}class Fa extends x_{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sh(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new rh(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ih(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ah(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new ro(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Ks=new U,Js=new U,va=new U,Zs=new Yt;class ql extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ls*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:f,c:p}=Zs;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Zs.getNormal(va),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const _=(b+1)%3,S=u[b],L=u[_],A=Zs[h[b]],w=Zs[h[_]],D=`${S}_${L}`,V=`${L}_${S}`;V in d&&d[V]?(va.dot(d[V].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(w.x,w.y,w.z)),d[V]=null):D in d||(d[D]={index0:c[b],index1:c[_],normal:va.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:f}=d[g];Ks.fromBufferAttribute(o,v),Js.fromBufferAttribute(o,f),m.push(Ks.x,Ks.y,Ks.z),m.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new zt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cr extends Fa{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fa().fromJSON(i))}return this}}const S_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=oh(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=T_(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return ms(r,a,t,o,l,m,0),a}};function oh(s,e,t,n,i){let r,a;if(i===F_(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Yl(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Yl(r,s[r],s[r+1],a);return a&&br(a,a.next)&&(_s(a),a=a.next),a}function oi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(br(t,t.next)||rt(t.prev,t,t.next)===0)){if(_s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ms(s,e,t,n,i,r,a){if(!s)return;!a&&r&&L_(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?b_(s,n,i,r):E_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),_s(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=M_(oi(s),e,t),ms(s,e,t,n,i,r,2)):a===2&&w_(s,e,t,n,i,r):ms(oi(s),e,t,n,i,r,1);break}}}function E_(s){const e=s.prev,t=s,n=s.next;if(rt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&ki(i,o,r,l,a,c,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function b_(s,e,t,n){const i=s.prev,r=s,a=s.next;if(rt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,p=ka(m,g,e,t,n),b=ka(v,f,e,t,n);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=b;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=f&&_!==i&&_!==a&&ki(o,h,l,u,c,d,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==i&&S!==a&&ki(o,h,l,u,c,d,S.x,S.y)&&rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=f&&_!==i&&_!==a&&ki(o,h,l,u,c,d,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=b;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==i&&S!==a&&ki(o,h,l,u,c,d,S.x,S.y)&&rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function M_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!br(i,r)&&lh(i,n,n.next,r)&&gs(i,r)&&gs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_s(n),_s(n.next),n=s=r),n=n.next}while(n!==s);return oi(n)}function w_(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&U_(a,o)){let l=ch(a,o);a=oi(a,a.next),l=oi(l,l.next),ms(a,e,t,n,i,r,0),ms(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function T_(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=oh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(D_(c));for(i.sort(A_),r=0;r<i.length;r++)t=R_(i[r],t);return t}function A_(s,e){return s.x-e.x}function R_(s,e){const t=C_(s,e);if(!t)return e;const n=ch(t,s);return oi(n,n.next),oi(t,t.next)}function C_(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ki(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),gs(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&P_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function P_(s,e){return rt(s.prev,s,e.prev)<0&&rt(e.next,s,s.next)<0}function L_(s,e,t,n){let i=s;do i.z===0&&(i.z=ka(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,I_(i)}function I_(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function ka(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function D_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ki(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function U_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!O_(s,e)&&(gs(s,e)&&gs(e,s)&&N_(s,e)&&(rt(s.prev,s,e.prev)||rt(s,e.prev,e))||br(s,e)&&rt(s.prev,s,s.next)>0&&rt(e.prev,e,e.next)>0)}function rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function br(s,e){return s.x===e.x&&s.y===e.y}function lh(s,e,t,n){const i=er(rt(s,e,t)),r=er(rt(s,e,n)),a=er(rt(t,n,s)),o=er(rt(t,n,e));return!!(i!==r&&a!==o||i===0&&Qs(s,t,e)||r===0&&Qs(s,n,e)||a===0&&Qs(t,s,n)||o===0&&Qs(t,e,n))}function Qs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function er(s){return s>0?1:s<0?-1:0}function O_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&lh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function gs(s,e){return rt(s.prev,s,s.next)<0?rt(s,e,s.next)>=0&&rt(s,s.prev,e)>=0:rt(s,e,s.prev)<0||rt(s,s.next,e)<0}function N_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ch(s,e){const t=new Ba(s.i,s.x,s.y),n=new Ba(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yl(s,e,t,n){const i=new Ba(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ba(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Hi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Kl(e),Jl(n,e);let a=e.length;t.forEach(Kl);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Jl(n,t[l]);const o=S_.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Kl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Jl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class oo extends nn{constructor(e=new cr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:k_;let _,S=!1,L,A,w,D;p&&(_=p.getSpacedPoints(h),S=!0,d=!1,L=p.computeFrenetFrames(h,!1),A=new U,w=new U,D=new U),d||(f=0,m=0,g=0,v=0);const V=o.extractPoints(c);let y=V.shape;const T=V.holes;if(!Hi.isClockWise(y)){y=y.reverse();for(let C=0,he=T.length;C<he;C++){const Y=T[C];Hi.isClockWise(Y)&&(T[C]=Y.reverse())}}const X=Hi.triangulateShape(y,T),P=y;for(let C=0,he=T.length;C<he;C++){const Y=T[C];y=y.concat(Y)}function B(C,he,Y){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(he,Y)}const N=y.length,K=X.length;function j(C,he,Y){let le,ee,ve;const ge=C.x-he.x,Se=C.y-he.y,ze=Y.x-C.x,M=Y.y-C.y,x=ge*ge+Se*Se,W=ge*M-Se*ze;if(Math.abs(W)>Number.EPSILON){const $=Math.sqrt(x),ie=Math.sqrt(ze*ze+M*M),te=he.x-Se/$,Ue=he.y+ge/$,Ie=Y.x-M/ie,ue=Y.y+ze/ie,pe=((Ie-te)*M-(ue-Ue)*ze)/(ge*M-Se*ze);le=te+ge*pe-C.x,ee=Ue+Se*pe-C.y;const Oe=le*le+ee*ee;if(Oe<=2)return new oe(le,ee);ve=Math.sqrt(Oe/2)}else{let $=!1;ge>Number.EPSILON?ze>Number.EPSILON&&($=!0):ge<-Number.EPSILON?ze<-Number.EPSILON&&($=!0):Math.sign(Se)===Math.sign(M)&&($=!0),$?(le=-Se,ee=ge,ve=Math.sqrt(x)):(le=ge,ee=Se,ve=Math.sqrt(x/2))}return new oe(le/ve,ee/ve)}const q=[];for(let C=0,he=P.length,Y=he-1,le=C+1;C<he;C++,Y++,le++)Y===he&&(Y=0),le===he&&(le=0),q[C]=j(P[C],P[Y],P[le]);const J=[];let re,fe=q.concat();for(let C=0,he=T.length;C<he;C++){const Y=T[C];re=[];for(let le=0,ee=Y.length,ve=ee-1,ge=le+1;le<ee;le++,ve++,ge++)ve===ee&&(ve=0),ge===ee&&(ge=0),re[le]=j(Y[le],Y[ve],Y[ge]);J.push(re),fe=fe.concat(re)}for(let C=0;C<f;C++){const he=C/f,Y=m*Math.cos(he*Math.PI/2),le=g*Math.sin(he*Math.PI/2)+v;for(let ee=0,ve=P.length;ee<ve;ee++){const ge=B(P[ee],q[ee],le);Re(ge.x,ge.y,-Y)}for(let ee=0,ve=T.length;ee<ve;ee++){const ge=T[ee];re=J[ee];for(let Se=0,ze=ge.length;Se<ze;Se++){const M=B(ge[Se],re[Se],le);Re(M.x,M.y,-Y)}}}const we=g+v;for(let C=0;C<N;C++){const he=d?B(y[C],fe[C],we):y[C];S?(w.copy(L.normals[0]).multiplyScalar(he.x),A.copy(L.binormals[0]).multiplyScalar(he.y),D.copy(_[0]).add(w).add(A),Re(D.x,D.y,D.z)):Re(he.x,he.y,0)}for(let C=1;C<=h;C++)for(let he=0;he<N;he++){const Y=d?B(y[he],fe[he],we):y[he];S?(w.copy(L.normals[C]).multiplyScalar(Y.x),A.copy(L.binormals[C]).multiplyScalar(Y.y),D.copy(_[C]).add(w).add(A),Re(D.x,D.y,D.z)):Re(Y.x,Y.y,u/h*C)}for(let C=f-1;C>=0;C--){const he=C/f,Y=m*Math.cos(he*Math.PI/2),le=g*Math.sin(he*Math.PI/2)+v;for(let ee=0,ve=P.length;ee<ve;ee++){const ge=B(P[ee],q[ee],le);Re(ge.x,ge.y,u+Y)}for(let ee=0,ve=T.length;ee<ve;ee++){const ge=T[ee];re=J[ee];for(let Se=0,ze=ge.length;Se<ze;Se++){const M=B(ge[Se],re[Se],le);S?Re(M.x,M.y+_[h-1].y,_[h-1].x+Y):Re(M.x,M.y,u+Y)}}}H(),ne();function H(){const C=i.length/3;if(d){let he=0,Y=N*he;for(let le=0;le<K;le++){const ee=X[le];Me(ee[2]+Y,ee[1]+Y,ee[0]+Y)}he=h+f*2,Y=N*he;for(let le=0;le<K;le++){const ee=X[le];Me(ee[0]+Y,ee[1]+Y,ee[2]+Y)}}else{for(let he=0;he<K;he++){const Y=X[he];Me(Y[2],Y[1],Y[0])}for(let he=0;he<K;he++){const Y=X[he];Me(Y[0]+N*h,Y[1]+N*h,Y[2]+N*h)}}n.addGroup(C,i.length/3-C,0)}function ne(){const C=i.length/3;let he=0;_e(P,he),he+=P.length;for(let Y=0,le=T.length;Y<le;Y++){const ee=T[Y];_e(ee,he),he+=ee.length}n.addGroup(C,i.length/3-C,1)}function _e(C,he){let Y=C.length;for(;--Y>=0;){const le=Y;let ee=Y-1;ee<0&&(ee=C.length-1);for(let ve=0,ge=h+f*2;ve<ge;ve++){const Se=N*ve,ze=N*(ve+1),M=he+le+Se,x=he+ee+Se,W=he+ee+ze,$=he+le+ze;xe(M,x,W,$)}}}function Re(C,he,Y){l.push(C),l.push(he),l.push(Y)}function Me(C,he,Y){Fe(C),Fe(he),Fe(Y);const le=i.length/3,ee=b.generateTopUV(n,i,le-3,le-2,le-1);Te(ee[0]),Te(ee[1]),Te(ee[2])}function xe(C,he,Y,le){Fe(C),Fe(he),Fe(le),Fe(he),Fe(Y),Fe(le);const ee=i.length/3,ve=b.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Te(ve[0]),Te(ve[1]),Te(ve[3]),Te(ve[1]),Te(ve[2]),Te(ve[3])}function Fe(C){i.push(l[C*3+0]),i.push(l[C*3+1]),i.push(l[C*3+2])}function Te(C){r.push(C.x),r.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return B_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Na[i.type]().fromJSON(i)),new oo(n,e.options)}}const k_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],m=e[i*3+1],g=e[i*3+2],v=e[r*3],f=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-g),new oe(v,1-p)]:[new oe(o,1-l),new oe(h,1-u),new oe(m,1-g),new oe(f,1-p)]}};function B_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class z_ extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends z_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class H_ extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Zl={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class G_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const V_=new G_;class Mr{constructor(e){this.manager=e!==void 0?e:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class W_ extends Error{constructor(e,t){super(e),this.response=t}}class hh extends Mr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:i});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=un[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let v=0;const f=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:S})=>{if(_)p.close();else{v+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let A=0,w=h.length;A<w;A++){const D=h[A];D.onProgress&&D.onProgress(L)}p.enqueue(S),b()}})}}});return new Response(f)}else throw new W_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Zl.add(e,c);const h=un[e];delete un[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=un[e];if(h===void 0)throw this.manager.itemError(e),c;delete un[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class j_ extends Mr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new r_,o=new hh(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ot,a.wrapT=c.wrapT!==void 0?c.wrapT:Ot,a.magFilter=c.magFilter!==void 0?c.magFilter:ut,a.minFilter=c.minFilter!==void 0?c.minFilter:ut,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=In),c.mipmapCount===1&&(a.minFilter=ut),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class uh extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new at,Ql=new U,ec=new U;class $_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X_ extends $_{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nr extends uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new X_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class q_ extends uh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_{constructor(){this.type="ShapePath",this.color=new Ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let _=0,S=p.length;_<S;_++){const L=p[_],A=new cr;A.curves=L.curves,b.push(A)}return b}function n(p,b){const _=b.length;let S=!1;for(let L=_-1,A=0;A<_;L=A++){let w=b[L],D=b[A],V=D.x-w.x,y=D.y-w.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(w=b[A],V=-V,D=b[L],y=-y),p.y<w.y||p.y>D.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const T=y*(p.x-w.x)-V*(p.y-w.y);if(T===0)return!0;if(T<0)continue;S=!S}}else{if(p.y!==w.y)continue;if(D.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=D.x)return!0}}return S}const i=Hi.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new cr,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let m=[],g=0,v;d[g]=void 0,m[g]=[];for(let p=0,b=r.length;p<b;p++)o=r[p],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new cr,p:v},d[g].s.curves=o.curves,h&&g++,m[g]=[]):m[g].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,b=0;for(let _=0,S=d.length;_<S;_++)u[_]=[];for(let _=0,S=d.length;_<S;_++){const L=m[_];for(let A=0;A<L.length;A++){const w=L[A];let D=!0;for(let V=0;V<d.length;V++)n(w.p,d[V].p)&&(_!==V&&b++,D?(D=!1,u[V].push(w)):p=!0);D&&u[_].push(w)}}b>0&&p===!1&&(m=u)}let f;for(let p=0,b=d.length;p<b;p++){l=d[p].s,c.push(l),f=m[p];for(let _=0,S=f.length;_<S;_++)l.holes.push(f[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const nc={type:"change"},xa={type:"start"},ic={type:"end"},ir=new to,sc=new Cn,K_=Math.cos(70*zu.DEG2RAD);class J_ extends li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ie),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nc),n.update(),r=i.NONE},this.update=function(){const R=new U,Q=new ri().setFromUnitVectors(e.up,new U(0,1,0)),be=Q.clone().invert(),I=new U,ae=new ri,F=new U,se=2*Math.PI;return function(qe=null){const Je=n.object.position;R.copy(Je).sub(n.target),R.applyQuaternion(Q),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&Z(y(qe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Qe=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(Qe)&&isFinite(lt)&&(Qe<-Math.PI?Qe+=se:Qe>Math.PI&&(Qe-=se),lt<-Math.PI?lt+=se:lt>Math.PI&&(lt-=se),Qe<=lt?o.theta=Math.max(Qe,Math.min(lt,o.theta)):o.theta=o.theta>(Qe+lt)/2?Math.max(Qe,o.theta):Math.min(lt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ke=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)o.radius=J(o.radius);else{const tt=o.radius;o.radius=J(o.radius*c),Ke=tt!=o.radius}if(R.setFromSpherical(o),R.applyQuaternion(be),Je.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&A){let tt=null;if(n.object.isPerspectiveCamera){const St=R.length();tt=J(St*c);const zn=St-tt;n.object.position.addScaledVector(S,zn),n.object.updateMatrixWorld(),Ke=!!zn}else if(n.object.isOrthographicCamera){const St=new U(L.x,L.y,0);St.unproject(n.object);const zn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ke=zn!==n.object.zoom;const bs=new U(L.x,L.y,0);bs.unproject(n.object),n.object.position.sub(bs).add(St),n.object.updateMatrixWorld(),tt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(ir.origin.copy(n.object.position),ir.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ir.direction))<K_?e.lookAt(n.target):(sc.setFromNormalAndCoplanarPoint(n.object.up,n.target),ir.intersectPlane(sc,n.target))))}else if(n.object.isOrthographicCamera){const tt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),tt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ke=!0)}return c=1,A=!1,Ke||I.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a||F.distanceToSquared(n.target)>a?(n.dispatchEvent(nc),I.copy(n.object.position),ae.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Oe),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",ze),n.domElement.removeEventListener("pointerup",M),n.domElement.getRootNode().removeEventListener("keydown",te,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new tc,l=new tc;let c=1;const h=new U,u=new oe,d=new oe,m=new oe,g=new oe,v=new oe,f=new oe,p=new oe,b=new oe,_=new oe,S=new U,L=new oe;let A=!1;const w=[],D={};let V=!1;function y(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function T(R){const Q=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*Q)}function Z(R){l.theta-=R}function X(R){l.phi-=R}const P=function(){const R=new U;return function(be,I){R.setFromMatrixColumn(I,0),R.multiplyScalar(-be),h.add(R)}}(),B=function(){const R=new U;return function(be,I){n.screenSpacePanning===!0?R.setFromMatrixColumn(I,1):(R.setFromMatrixColumn(I,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(be),h.add(R)}}(),N=function(){const R=new U;return function(be,I){const ae=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;R.copy(F).sub(n.target);let se=R.length();se*=Math.tan(n.object.fov/2*Math.PI/180),P(2*be*se/ae.clientHeight,n.object.matrix),B(2*I*se/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(be*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),B(I*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R,Q){if(!n.zoomToCursor)return;A=!0;const be=n.domElement.getBoundingClientRect(),I=R-be.left,ae=Q-be.top,F=be.width,se=be.height;L.x=I/F*2-1,L.y=-(ae/se)*2+1,S.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function re(R){u.set(R.clientX,R.clientY)}function fe(R){q(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function we(R){g.set(R.clientX,R.clientY)}function H(R){d.set(R.clientX,R.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;Z(2*Math.PI*m.x/Q.clientHeight),X(2*Math.PI*m.y/Q.clientHeight),u.copy(d),n.update()}function ne(R){b.set(R.clientX,R.clientY),_.subVectors(b,p),_.y>0?K(T(_.y)):_.y<0&&j(T(_.y)),p.copy(b),n.update()}function _e(R){v.set(R.clientX,R.clientY),f.subVectors(v,g).multiplyScalar(n.panSpeed),N(f.x,f.y),g.copy(v),n.update()}function Re(R){q(R.clientX,R.clientY),R.deltaY<0?j(T(R.deltaY)):R.deltaY>0&&K(T(R.deltaY)),n.update()}function Me(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function xe(R){if(w.length===1)u.set(R.pageX,R.pageY);else{const Q=Ee(R),be=.5*(R.pageX+Q.x),I=.5*(R.pageY+Q.y);u.set(be,I)}}function Fe(R){if(w.length===1)g.set(R.pageX,R.pageY);else{const Q=Ee(R),be=.5*(R.pageX+Q.x),I=.5*(R.pageY+Q.y);g.set(be,I)}}function Te(R){const Q=Ee(R),be=R.pageX-Q.x,I=R.pageY-Q.y,ae=Math.sqrt(be*be+I*I);p.set(0,ae)}function C(R){n.enableZoom&&Te(R),n.enablePan&&Fe(R)}function he(R){n.enableZoom&&Te(R),n.enableRotate&&xe(R)}function Y(R){if(w.length==1)d.set(R.pageX,R.pageY);else{const be=Ee(R),I=.5*(R.pageX+be.x),ae=.5*(R.pageY+be.y);d.set(I,ae)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;Z(2*Math.PI*m.x/Q.clientHeight),X(2*Math.PI*m.y/Q.clientHeight),u.copy(d)}function le(R){if(w.length===1)v.set(R.pageX,R.pageY);else{const Q=Ee(R),be=.5*(R.pageX+Q.x),I=.5*(R.pageY+Q.y);v.set(be,I)}f.subVectors(v,g).multiplyScalar(n.panSpeed),N(f.x,f.y),g.copy(v)}function ee(R){const Q=Ee(R),be=R.pageX-Q.x,I=R.pageY-Q.y,ae=Math.sqrt(be*be+I*I);b.set(0,ae),_.set(0,Math.pow(b.y/p.y,n.zoomSpeed)),K(_.y),p.copy(b);const F=(R.pageX+Q.x)*.5,se=(R.pageY+Q.y)*.5;q(F,se)}function ve(R){n.enableZoom&&ee(R),n.enablePan&&le(R)}function ge(R){n.enableZoom&&ee(R),n.enableRotate&&Y(R)}function Se(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",ze),n.domElement.addEventListener("pointerup",M)),!$e(R)&&(ce(R),R.pointerType==="touch"?ue(R):x(R)))}function ze(R){n.enabled!==!1&&(R.pointerType==="touch"?pe(R):W(R))}function M(R){switch(ot(R),w.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",ze),n.domElement.removeEventListener("pointerup",M),n.dispatchEvent(ic),r=i.NONE;break;case 1:const Q=w[0],be=D[Q];ue({pointerId:Q,pageX:be.x,pageY:be.y});break}}function x(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ui.DOLLY:if(n.enableZoom===!1)return;fe(R),r=i.DOLLY;break;case ui.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;we(R),r=i.PAN}else{if(n.enableRotate===!1)return;re(R),r=i.ROTATE}break;case ui.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;re(R),r=i.ROTATE}else{if(n.enablePan===!1)return;we(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xa)}function W(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;H(R);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(R);break;case i.PAN:if(n.enablePan===!1)return;_e(R);break}}function $(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(xa),Re(ie(R)),n.dispatchEvent(ic))}function ie(R){const Q=R.deltaMode,be={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(Q){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return R.ctrlKey&&!V&&(be.deltaY*=10),be}function te(R){R.key==="Control"&&(V=!0,n.domElement.getRootNode().addEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ue(R){R.key==="Control"&&(V=!1,n.domElement.getRootNode().removeEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ie(R){n.enabled===!1||n.enablePan===!1||Me(R)}function ue(R){switch(Pe(R),w.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;xe(R),r=i.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;Fe(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(R),r=i.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xa)}function pe(R){switch(Pe(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Y(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(R),n.update();break;default:r=i.NONE}}function Oe(R){n.enabled!==!1&&R.preventDefault()}function ce(R){w.push(R.pointerId)}function ot(R){delete D[R.pointerId];for(let Q=0;Q<w.length;Q++)if(w[Q]==R.pointerId){w.splice(Q,1);return}}function $e(R){for(let Q=0;Q<w.length;Q++)if(w[Q]==R.pointerId)return!0;return!1}function Pe(R){let Q=D[R.pointerId];Q===void 0&&(Q=new oe,D[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function Ee(R){const Q=R.pointerId===w[0]?w[1]:w[0];return D[Q]}n.domElement.addEventListener("contextmenu",Oe),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",$,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",te,{passive:!0,capture:!0}),this.update()}}class Z_ extends j_{constructor(e){super(e),this.type=vn}parse(e){const a=function(D,V){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(V||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(V||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(V||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(V||""))}},h=`
`,u=function(D,V,y){V=V||1024;let Z=D.pos,X=-1,P=0,B="",N=String.fromCharCode.apply(null,new Uint16Array(D.subarray(Z,Z+128)));for(;0>(X=N.indexOf(h))&&P<V&&Z<D.byteLength;)B+=N,P+=N.length,Z+=128,N+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(Z,Z+128)));return-1<X?(D.pos+=P+X+1,B+N.slice(0,X)):!1},d=function(D){const V=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Z=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,N;for((D.pos>=D.byteLength||!(B=u(D)))&&a(1,"no header found"),(N=B.match(V))||a(3,"bad initial token"),P.valid|=1,P.programtype=N[1],P.string+=B+`
`;B=u(D),B!==!1;){if(P.string+=B+`
`,B.charAt(0)==="#"){P.comments+=B+`
`;continue}if((N=B.match(y))&&(P.gamma=parseFloat(N[1])),(N=B.match(T))&&(P.exposure=parseFloat(N[1])),(N=B.match(Z))&&(P.valid|=2,P.format=N[1]),(N=B.match(X))&&(P.valid|=4,P.height=parseInt(N[1],10),P.width=parseInt(N[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},m=function(D,V,y){const T=V;if(T<8||T>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);T!==(D[2]<<8|D[3])&&a(3,"wrong scanline width");const Z=new Uint8Array(4*V*y);Z.length||a(4,"unable to allocate buffer space");let X=0,P=0;const B=4*T,N=new Uint8Array(4),K=new Uint8Array(B);let j=y;for(;j>0&&P<D.byteLength;){P+4>D.byteLength&&a(1),N[0]=D[P++],N[1]=D[P++],N[2]=D[P++],N[3]=D[P++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=T)&&a(3,"bad rgbe scanline format");let q=0,J;for(;q<B&&P<D.byteLength;){J=D[P++];const fe=J>128;if(fe&&(J-=128),(J===0||q+J>B)&&a(3,"bad scanline data"),fe){const we=D[P++];for(let H=0;H<J;H++)K[q++]=we}else K.set(D.subarray(P,P+J),q),q+=J,P+=J}const re=T;for(let fe=0;fe<re;fe++){let we=0;Z[X]=K[fe+we],we+=T,Z[X+1]=K[fe+we],we+=T,Z[X+2]=K[fe+we],we+=T,Z[X+3]=K[fe+we],X+=4}j--}return Z},g=function(D,V,y,T){const Z=D[V+3],X=Math.pow(2,Z-128)/255;y[T+0]=D[V+0]*X,y[T+1]=D[V+1]*X,y[T+2]=D[V+2]*X,y[T+3]=1},v=function(D,V,y,T){const Z=D[V+3],X=Math.pow(2,Z-128)/255;y[T+0]=Os.toHalfFloat(Math.min(D[V+0]*X,65504)),y[T+1]=Os.toHalfFloat(Math.min(D[V+1]*X,65504)),y[T+2]=Os.toHalfFloat(Math.min(D[V+2]*X,65504)),y[T+3]=Os.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const p=d(f),b=p.width,_=p.height,S=m(f.subarray(f.pos),b,_);let L,A,w;switch(this.type){case kt:w=S.length/4;const D=new Float32Array(w*4);for(let y=0;y<w;y++)g(S,y*4,D,y*4);L=D,A=kt;break;case vn:w=S.length/4;const V=new Uint16Array(w*4);for(let y=0;y<w;y++)v(S,y*4,V,y*4);L=V,A=vn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:_,data:L,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case kt:case vn:a.colorSpace=xn,a.minFilter=ut,a.magFilter=ut,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}class Q_{constructor(){Le(this,"scene");Le(this,"renderer");Le(this,"camera");Le(this,"controls");Le(this,"ambientLight");Le(this,"keyLight");Le(this,"fillLight");Le(this,"backLight");Le(this,"rimLight");Le(this,"floor");Le(this,"floorMaterial");Le(this,"isDarkMode",!1);this.initializeScene(),this.setupRenderer(),this.setupCamera(),this.setupLights(),this.setupControls(),this.setupFloor(),this.loadEnvironment(),this.animate=this.animate.bind(this)}initializeScene(){this.scene=new s_,this.scene.background=new Ge("#ffffff")}setupRenderer(){this.renderer=new nh({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.configureRenderer(),this.setupRendererSize(),document.body.appendChild(this.renderer.domElement)}configureRenderer(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ac,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=Rc,this.renderer.toneMappingExposure=1.2,this.renderer.outputEncoding=void 0}setupRendererSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}getInitialFrustumSize(){return window.innerWidth<=480?45:80}setupCamera(){const e=window.innerWidth/window.innerHeight,t=this.getInitialFrustumSize();this.camera=new io(-t*e,t*e,t,-t,1,1e3),window.innerWidth<=480?(this.camera.position.set(-45,45,45),this.camera.lookAt(0,20,0)):(this.camera.position.set(-80,80,80),this.camera.lookAt(0,35,0))}setupControls(){this.controls=new J_(this.camera,this.renderer.domElement),this.configureControls()}configureControls(){this.controls.target.set(5,20,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/3,this.controls.minPolarAngle=Math.PI/5,this.controls.enableZoom=!0,this.controls.minZoom=.8,this.controls.maxZoom=1.5,this.controls.enablePan=!1,this.controls.enableRotate=!0,this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0}setupLights(){this.setupAmbientLight(),this.setupKeyLight(),this.setupFillLight(),this.setupBackLight(),this.setupRimLight()}setupAmbientLight(){this.ambientLight=new q_(16777215,.6),this.scene.add(this.ambientLight)}setupKeyLight(){this.keyLight=new nr(16777215,2),this.keyLight.position.set(100,200,100),this.configureKeyLightShadow(),this.scene.add(this.keyLight)}configureKeyLightShadow(){this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.width=4096,this.keyLight.shadow.mapSize.height=4096,this.keyLight.shadow.camera.near=.1,this.keyLight.shadow.camera.far=500,this.keyLight.shadow.camera.left=-100,this.keyLight.shadow.camera.right=100,this.keyLight.shadow.camera.top=100,this.keyLight.shadow.camera.bottom=-100,this.keyLight.shadow.radius=24,this.keyLight.shadow.bias=-2e-4,this.keyLight.shadow.normalBias=.01}setupFillLight(){this.fillLight=new nr(16777215,.8),this.fillLight.position.set(-100,150,-100),this.fillLight.castShadow=!1,this.scene.add(this.fillLight)}setupBackLight(){this.backLight=new nr(16777215,.4),this.backLight.position.set(0,100,-150),this.backLight.castShadow=!1,this.scene.add(this.backLight)}setupRimLight(){this.rimLight=new nr(16777215,.5),this.rimLight.position.set(0,-50,100),this.rimLight.castShadow=!1,this.scene.add(this.rimLight)}updateLightPosition(e){const n=Math.cos(e)*250,i=Math.sin(e)*250;this.keyLight.position.set(n,200,i)}setupFloor(){const e=new qi(2e4,2e4),t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");if(!n)throw new Error("Could not get canvas context");n.fillStyle=this.isDarkMode?"#252525":"#ffffff",n.fillRect(0,0,t.width,t.height);const i=.8,r=8;n.fillStyle=this.isDarkMode?"#fcfaf6":"#3c4142";for(let o=0;o<t.width;o+=r)for(let l=0;l<t.height;l+=r){const c=l/r%2===0?0:r/2;n.beginPath(),n.arc(o+c,l,i/2,0,Math.PI*2),n.fill()}const a=new o_(t);a.wrapS=ps,a.wrapT=ps,a.repeat.set(8,8),this.floorMaterial=new H_({color:16777215,transparent:!1,side:en}),this.floor=new Bt(e,this.floorMaterial),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=0,this.floor.receiveShadow=!0,this.scene.add(this.floor)}updateFloorTheme(e){this.floorMaterial&&(this.floorMaterial.color.setHex(e?3948866:16777215),e||this.floorMaterial.color.setRGB(1,1,1))}loadEnvironment(){new Z_().setPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/").load("royal_esplanade_1k.hdr",e=>{e.mapping=ur,this.scene.environment=e})}handleResize(){const e=this.getInitialFrustumSize(),t=window.innerWidth/window.innerHeight;this.updateCameraFrustum(e,t),this.updateRendererSize(),window.innerWidth<=480?(this.camera.position.set(-45,45,45),this.camera.lookAt(0,20,0)):(this.camera.position.set(-80,80,80),this.camera.lookAt(0,35,0))}updateCameraFrustum(e,t){this.camera.left=-e*t,this.camera.right=e*t,this.camera.top=e,this.camera.bottom=-e,this.camera.updateProjectionMatrix()}updateRendererSize(){this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}animate(){requestAnimationFrame(this.animate),this.controls.update(),this.render()}generateImage(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}class ev extends Mr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new hh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=r.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new tv(e)}}class tv{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=nv(e,t,this.data);for(let r=0,a=i.length;r<a;r++)n.push(...i[r].toShapes());return n}}function nv(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=r;else{const u=iv(h,i,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function iv(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new Y_;let o,l,c,h,u,d,m,g;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let f=0,p=v.length;f<p;)switch(v[f++]){case"m":o=v[f++]*e+t,l=v[f++]*e+n,a.moveTo(o,l);break;case"l":o=v[f++]*e+t,l=v[f++]*e+n,a.lineTo(o,l);break;case"q":c=v[f++]*e+t,h=v[f++]*e+n,u=v[f++]*e+t,d=v[f++]*e+n,a.quadraticCurveTo(u,d,c,h);break;case"b":c=v[f++]*e+t,h=v[f++]*e+n,u=v[f++]*e+t,d=v[f++]*e+n,m=v[f++]*e+t,g=v[f++]*e+n,a.bezierCurveTo(u,d,m,g,c,h);break}}return{offsetX:r.ha*e,path:a}}class sv extends oo{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class rv{constructor(e){Le(this,"scene");Le(this,"keyMap");Le(this,"keyObjects");Le(this,"textObjects");Le(this,"outlineObjects");Le(this,"baseOutlineObjects");Le(this,"keyHeights");Le(this,"keyWaves");Le(this,"keyTypeCounts");Le(this,"keySize");Le(this,"spacing");Le(this,"growthIncrement");Le(this,"waveSpeed");Le(this,"waveRadius");Le(this,"waveHeight");Le(this,"idleAnimationTime");Le(this,"clearAnimationInProgress",!1);Le(this,"container");Le(this,"isDarkMode");Le(this,"keyMaterials");Le(this,"textMaterials");Le(this,"loadedFonts");Le(this,"currentFont");Le(this,"fontLoader");Le(this,"rotationState");this.scene=e,this.keyMap=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]],this.keyObjects={},this.textObjects={},this.outlineObjects={},this.baseOutlineObjects={},this.keyHeights={},this.keyWaves={},this.keyTypeCounts={},this.keyMaterials={},this.textMaterials={},this.loadedFonts={},this.currentFont=null,this.fontLoader=new ev,this.keySize=10,this.spacing=12,this.growthIncrement=.5,this.waveSpeed=2,this.waveRadius=3,this.waveHeight=.2,this.idleAnimationTime=0,this.isDarkMode=!1,this.container=new as,this.scene.scene.add(this.container),this.rotationState={isRotating:!0,startTime:performance.now(),rotationDuration:2e3,pauseDuration:3e3,initialRotation:0,targetRotation:Math.PI*2,isPaused:!1,pauseStartTime:0},this.loadFonts()}createKeyMaterial(){const e=new cs({color:this.isDarkMode?3355443:13421772,transparent:!0,opacity:.8}),t=this.isDarkMode?new cs({color:2434341,transparent:!1}):new tr({color:16579318,metalness:.1,roughness:.2,clearcoat:.8,clearcoatRoughness:.1,emissive:16579318,emissiveIntensity:.3,transparent:!1});return[e,e,t,e,e,e]}loadFonts(){const e={System:"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",Georgia:"https://threejs.org/examples/fonts/gentilis_regular.typeface.json",Inter:"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json","Roboto Condensed":"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"};let t=0;const n=Object.keys(e).length;Object.entries(e).forEach(([i,r])=>{this.fontLoader.load(r,a=>{this.loadedFonts[i]=a,t++,i==="System"&&(this.currentFont=a),t===n&&this.createKeyboard()})})}createKeyboard(){const e=new lr({color:0,linewidth:3,transparent:!0,opacity:.6});this.keyMap.forEach((t,n)=>{const i=n*this.spacing;let r=n*5;t.forEach(a=>{this.createKeyWithOutlineAndText(a,r,i,this.currentFont,e),r+=this.keySize+2})})}createKeyWithOutlineAndText(e,t,n,i,r){const a=new ai(this.keySize,this.keySize,this.keySize),o=this.createKeyMaterial(),l=new Bt(a,o);this.setupKeyMesh(l,t,n);const c=this.createKeyOutline(l.position,r),h=this.createBaseOutline(l.position),u=new tr({color:this.isDarkMode?16579318:3948866,metalness:0,roughness:1}),d=this.createKeyText(e,i,u);l.add(d),this.keyObjects[e]=l,this.keyMaterials[e]=o,this.textMaterials[e]=u,this.outlineObjects[e]=c,this.baseOutlineObjects[e]=h,this.textObjects[e]=d,this.keyHeights[e]=0,this.keyWaves[e]={time:0,active:!1},this.keyTypeCounts[e]=0}setupKeyMesh(e,t,n){e.position.set(t+this.keySize/2-50,0,n-20),e.scale.y=.01,e.castShadow=!0,e.receiveShadow=!0,this.container.add(e)}createKeyOutline(e,t){const n=new ai(this.keySize+.1,this.keySize+.1,this.keySize+.1),i=new ql(n),r=new lr({color:this.isDarkMode?16579318:3948866,linewidth:3,transparent:!0,opacity:this.isDarkMode?.8:.6}),a=new $l(i,r);return a.position.copy(e),a.scale.y=.01,a.castShadow=!0,this.container.add(a),a}createBaseOutline(e){const t=new qi(this.keySize,this.keySize),n=new ql(t),i=new lr({color:this.isDarkMode?16579318:3948866,linewidth:2,transparent:!0,opacity:this.isDarkMode?.6:.4}),r=new $l(n,i);return r.position.copy(e),r.position.y=.1,r.rotation.x=-Math.PI/2,this.container.add(r),r}createKeyText(e,t,n){const i=new sv(e,{font:t,size:2.5,height:0,curveSegments:12});i.computeBoundingBox();const r=new Bt(i,n),a=i.boundingBox.max.x-i.boundingBox.min.x;return r.position.set(-a/2,this.keySize/2+.1,-1.5),r.rotation.x=-Math.PI/2,r}updateKeyObject(e,t=null){const n=this.keyObjects[e],i=this.outlineObjects[e],r=this.keyHeights[e]||.01,a=t!==null?t:r;if(n.scale.y=Math.max(.01,a),n.position.y=this.keySize*a/2,i.scale.y=a,i.position.y=n.position.y,n.material.forEach(o=>{o.emissive&&(o.emissiveIntensity=a>.01?.2:0)}),t===null){const o=this.growthIncrement*(this.keyTypeCounts[e]||0);Math.abs(this.keyHeights[e]-o)>.001&&(console.warn(`Height mismatch for key ${e}: stored=${this.keyHeights[e]}, expected=${o}`),this.keyHeights[e]=o)}}createWaveEffect(e){const t=this.keyObjects[e].position.clone();Object.entries(this.keyObjects).forEach(([n,i])=>{const r=t.distanceTo(i.position);r<=this.waveRadius&&n!==e&&(this.keyWaves[n]={time:0,active:!0,distance:r})})}updateWaves(){Object.entries(this.keyWaves).forEach(([e,t])=>{if(t.active){t.time+=this.waveSpeed;const n=this.keyObjects[e],i=this.outlineObjects[e];t.time>=Math.PI?this.resetWave(e,t,n,i):this.updateWavePosition(e,t,n,i)}})}resetWave(e,t,n,i){t.active=!1,t.time=0,n.position.y=this.keySize*this.keyHeights[e]/2,i.position.y=n.position.y}updateWavePosition(e,t,n,i){const r=Math.sin(t.time)*this.waveHeight*(1-t.distance/this.waveRadius);n.position.y=this.keySize*this.keyHeights[e]/2+r,i.position.y=n.position.y}updateIdleAnimation(){this.idleAnimationTime+=.03,Object.entries(this.keyObjects).forEach(([e,t])=>{const n=this.growthIncrement*(this.keyTypeCounts[e]||0);this.keyHeights[e]=n;const i=Math.sin(this.idleAnimationTime+t.position.x*.1)*.1,r=Math.max(.01,n+i);t.scale.y=r,t.position.y=this.keySize*r/2;const a=this.outlineObjects[e];a.scale.y=r,a.position.y=t.position.y})}updateFromText(e){this.resetAllKeys(),!(!e||e==="type something and hit Ai Remix...")&&this.processTextInput(e)}resetAllKeys(){Object.keys(this.keyHeights).forEach(e=>{this.keyTypeCounts[e]=0,this.keyHeights[e]=this.growthIncrement*this.keyTypeCounts[e],this.updateKeyObject(e)})}processTextInput(e){const t={};e.toLowerCase().split("").forEach(n=>{this.keyObjects[n]&&(t[n]=(t[n]||0)+1)}),Object.entries(t).forEach(([n,i])=>{this.keyTypeCounts[n]=i,this.keyHeights[n]=this.growthIncrement*i,this.updateKeyObject(n),this.createWaveEffect(n)}),Object.keys(this.keyObjects).forEach(n=>{t[n]||(this.keyTypeCounts[n]=0,this.keyHeights[n]=0,this.updateKeyObject(n))})}async animateKeyDown(e,t){return new Promise(n=>{let r=0;const a=()=>{if(r>=60){this.updateKeyObject(e,0),this.createWaveEffect(e),n();return}const o=r/59,l=1-Math.pow(1-o,2),c=t*(1-l);this.updateKeyObject(e,c),r++,requestAnimationFrame(a)};a()})}async clear(){if(this.clearAnimationInProgress)return;this.clearAnimationInProgress=!0;const e=this.getCurrentTextFromUI();e&&e.trim()?await this.animateBackspaceSequence(e):await this.clearAllKeysInstantly(),this.clearAnimationInProgress=!1}async animateTypingSequence(e){const t=e.toLowerCase().split(""),n=50,i=10;this.resetAllKeys(),this.updateTextDisplayDuringTyping("");for(let r=0;r<t.length;r++){const a=t[r],o=e.substring(0,r+1),l=r/(t.length-1),c=n-(n-i)*Math.pow(l,2);this.keyObjects[a]&&(await this.animateKeyPress(a),this.keyTypeCounts[a]=(this.keyTypeCounts[a]||0)+1,this.keyHeights[a]=this.growthIncrement*this.keyTypeCounts[a],this.updateKeyObject(a)),this.updateTextDisplayDuringTyping(o),this.updateCharacterBarDuringTyping(o),await new Promise(h=>setTimeout(h,c))}}updateCharacterBarDuringTyping(e){const t=document.getElementById("characterBarSegments");if(!t||(t.innerHTML="",!e||!e.trim()))return;const n={};if(e.toLowerCase().split("").forEach(r=>{/[a-z0-9]/.test(r)&&(n[r]=(n[r]||0)+1)}),Object.keys(n).length===0)return;const i=new CustomEvent("updateCharacterBar",{detail:{text:e,letterCount:n}});document.dispatchEvent(i)}updateTextDisplayDuringTyping(e){const t=document.getElementById("textDisplay"),n=document.getElementById("mobileTextDisplay");t&&(t.textContent=e),n&&(n.textContent=e);const i=document.getElementById("characterCount");i&&(i.textContent=`${e.length}/90 characters`)}getCurrentTextFromUI(){const e=document.getElementById("textDisplay"),t=document.getElementById("mobileTextDisplay"),n=(e==null?void 0:e.textContent)||(t==null?void 0:t.textContent)||"";return n==="type something and click Ai Remix or just hit enter..."?"":n}async animateBackspaceSequence(e){const t=e.toLowerCase().split("").reverse(),n=20,i=3;for(let r=0;r<t.length;r++){const a=t[r],o=r/(t.length-1),l=n-(n-i)*Math.pow(o,2);this.keyObjects[a]&&(await this.animateKeyPress(a),this.updateTextDisplayDuringClear(e,t.length-r-1),this.keyTypeCounts[a]>0&&(this.keyTypeCounts[a]--,this.keyHeights[a]=this.growthIncrement*this.keyTypeCounts[a],this.updateKeyObject(a))),await new Promise(c=>setTimeout(c,l))}await this.clearAllKeysInstantly(),this.updateTextDisplayDuringClear("",0)}async animateKeyPress(e){const t=this.keyObjects[e],n=this.outlineObjects[e];if(!t||!n)return;const i=this.keyHeights[e]||.01,r=100,a=performance.now();return new Promise(o=>{const l=c=>{const h=c-a,u=Math.min(h/r,1);let d;if(u<.5){const g=u*2;d=-.3*Math.sin(g*Math.PI/2)}else{const g=(u-.5)*2;d=-.3*Math.cos(g*Math.PI/2)}const m=i+d;this.updateKeyObject(e,Math.max(.01,m)),u<1?requestAnimationFrame(l):(this.updateKeyObject(e,i),this.createWaveEffect(e),o())};requestAnimationFrame(l)})}updateTextDisplayDuringClear(e,t){const n=e.substring(0,t),i=document.getElementById("textDisplay"),r=document.getElementById("mobileTextDisplay");i&&(i.textContent=n),r&&(r.textContent=n);const a=document.getElementById("characterCount");a&&(a.textContent=`${n.length}/90 characters`)}async clearAllKeysInstantly(){Object.keys(this.keyHeights).forEach(e=>{this.keyTypeCounts[e]=0,this.keyHeights[e]=this.growthIncrement*this.keyTypeCounts[e],this.updateKeyObject(e)})}increaseHeight(){}decreaseHeight(){}updateRotation(){if(!this.rotationState.isRotating)return;const t=performance.now()-this.rotationState.startTime;if(t>=this.rotationState.rotationDuration){this.container.rotation.y=this.rotationState.targetRotation,this.rotationState.isRotating=!1;return}const n=t/this.rotationState.rotationDuration,i=1-Math.cos(n*Math.PI/2),r=this.rotationState.initialRotation+(this.rotationState.targetRotation-this.rotationState.initialRotation)*i;this.container.rotation.y=r}update(){this.updateWaves(),this.updateIdleAnimation(),this.updateRotation()}startAiRemixAnimation(){}stopAiRemixAnimation(){}updateTheme(e){this.isDarkMode=e,Object.entries(this.keyMaterials).forEach(([t,n])=>{const i=this.keyObjects[t];if(i){const r=e?new cs({color:2434341,transparent:!1}):new tr({color:16579318,metalness:.1,roughness:.2,clearcoat:.8,clearcoatRoughness:.1,emissive:16579318,emissiveIntensity:.3,transparent:!1});n[2]=r,Array.isArray(i.material)&&(i.material[2]=r)}[0,1,3,4,5].forEach(r=>{const a=n[r];a&&a.color.setHex(e?3355443:14540253)})}),Object.values(this.textMaterials).forEach(t=>{t.color.setHex(e?16579318:3948866)}),Object.values(this.outlineObjects).forEach(t=>{t.material&&(t.material.color.setHex(e?16579318:3948866),t.material.opacity=e?.8:.6)}),Object.values(this.baseOutlineObjects).forEach(t=>{t.material&&(t.material.color.setHex(e?16777215:3948866),t.material.opacity=e?.6:.4)})}updateKeyCapFont(e,t){if(!this.loadedFonts[t]){console.warn(`Font ${t} not loaded, keeping current font`);return}this.currentFont=this.loadedFonts[t],Object.entries(this.textObjects).forEach(([n,i])=>{const r=this.keyObjects[n];if(!r)return;r.remove(i),i.geometry.dispose();const a=new tr({color:this.isDarkMode?16579318:3948866,metalness:0,roughness:1}),o=this.createKeyText(n,this.currentFont,a);this.applyFontStyling(o,t),r.add(o),this.textObjects[n]=o,this.textMaterials[n]=a})}applyFontStyling(e,t){const n=e.material;switch(t){case"Georgia":n.roughness=.8,n.metalness=.05,e.scale.set(.95,.95,1);break;case"Roboto Condensed":n.roughness=.9,n.metalness=0,e.scale.set(.85,1.1,1);break;case"Inter":n.roughness=1,n.metalness=0,e.scale.set(1,1,1);break;default:n.roughness=1,n.metalness=0,e.scale.set(1,1,1);break}n.needsUpdate=!0}}const av="modulepreload",ov=function(s){return"/"+s},rc={},xs=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=ov(l),l in rc)return;rc[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":av,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,m)=>{u.addEventListener("load",d),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},lv=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>xs(async()=>{const{default:n}=await Promise.resolve().then(()=>Ki);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)};class lo extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}}class cv extends lo{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class ac extends lo{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class oc extends lo{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var za;(function(s){s.Any="any",s.ApNortheast1="ap-northeast-1",s.ApNortheast2="ap-northeast-2",s.ApSouth1="ap-south-1",s.ApSoutheast1="ap-southeast-1",s.ApSoutheast2="ap-southeast-2",s.CaCentral1="ca-central-1",s.EuCentral1="eu-central-1",s.EuWest1="eu-west-1",s.EuWest2="eu-west-2",s.EuWest3="eu-west-3",s.SaEast1="sa-east-1",s.UsEast1="us-east-1",s.UsWest1="us-west-1",s.UsWest2="us-west-2"})(za||(za={}));var hv=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};class uv{constructor(e,{headers:t={},customFetch:n,region:i=za.Any}={}){this.url=e,this.headers=t,this.region=i,this.fetch=lv(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var n;return hv(this,void 0,void 0,function*(){try{const{headers:i,method:r,body:a}=t;let o={},{region:l}=t;l||(l=this.region);const c=new URL(`${this.url}/${e}`);l&&l!=="any"&&(o["x-region"]=l,c.searchParams.set("forceFunctionRegion",l));let h;a&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&a instanceof Blob||a instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",h=a):typeof a=="string"?(o["Content-Type"]="text/plain",h=a):typeof FormData<"u"&&a instanceof FormData?h=a:(o["Content-Type"]="application/json",h=JSON.stringify(a)));const u=yield this.fetch(c.toString(),{method:r||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),i),body:h}).catch(v=>{throw new cv(v)}),d=u.headers.get("x-relay-error");if(d&&d==="true")throw new ac(u);if(!u.ok)throw new oc(u);let m=((n=u.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),g;return m==="application/json"?g=yield u.json():m==="application/octet-stream"?g=yield u.blob():m==="text/event-stream"?g=u:m==="multipart/form-data"?g=yield u.formData():g=yield u.text(),{data:g,error:null,response:u}}catch(i){return{data:null,error:i,response:i instanceof oc||i instanceof ac?i.context:void 0}}})}}var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dv(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var Pt={},co={},wr={},Ss={},Tr={},Ar={},fv=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},$i=fv();const pv=$i.fetch,dh=$i.fetch.bind($i),fh=$i.Headers,mv=$i.Request,gv=$i.Response,Ki=Object.freeze(Object.defineProperty({__proto__:null,Headers:fh,Request:mv,Response:gv,default:dh,fetch:pv},Symbol.toStringTag,{value:"Module"})),_v=dv(Ki);var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0});let vv=class extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}};Rr.default=vv;var ph=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ar,"__esModule",{value:!0});const yv=ph(_v),xv=ph(Rr);let Sv=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=yv.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Object.assign({},this.headers),this.headers[e]=t,this}then(e,t){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let i=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async r=>{var a,o,l;let c=null,h=null,u=null,d=r.status,m=r.statusText;if(r.ok){if(this.method!=="HEAD"){const p=await r.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?h=p:h=JSON.parse(p))}const v=(a=this.headers.Prefer)===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),f=(o=r.headers.get("content-range"))===null||o===void 0?void 0:o.split("/");v&&f&&f.length>1&&(u=parseInt(f[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(h)&&(h.length>1?(c={code:"PGRST116",details:`Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},h=null,u=null,d=406,m="Not Acceptable"):h.length===1?h=h[0]:h=null)}else{const v=await r.text();try{c=JSON.parse(v),Array.isArray(c)&&r.status===404&&(h=[],c=null,d=200,m="OK")}catch{r.status===404&&v===""?(d=204,m="No Content"):c={message:v}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,d=200,m="OK"),c&&this.shouldThrowOnError)throw new xv.default(c)}return{error:c,data:h,count:u,status:d,statusText:m}});return this.shouldThrowOnError||(i=i.catch(r=>{var a,o,l;return{error:{message:`${(a=r==null?void 0:r.name)!==null&&a!==void 0?a:"FetchError"}: ${r==null?void 0:r.message}`,details:`${(o=r==null?void 0:r.stack)!==null&&o!==void 0?o:""}`,hint:"",code:`${(l=r==null?void 0:r.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(e,t)}returns(){return this}overrideTypes(){return this}};Ar.default=Sv;var Ev=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Tr,"__esModule",{value:!0});const bv=Ev(Ar);let Mv=class extends bv.default{select(e){let t=!1;const n=(e??"*").split("").map(i=>/\s/.test(i)&&!t?"":(i==='"'&&(t=!t),i)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:i,referencedTable:r=i}={}){const a=r?`${r}.order`:"order",o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:""}${e}.${t?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){const i=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(i,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:i=n}={}){const r=typeof i>"u"?"offset":`${i}.offset`,a=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:i=!1,wal:r=!1,format:a="text"}={}){var o;const l=[e?"analyze":null,t?"verbose":null,n?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),c=(o=this.headers.Accept)!==null&&o!==void 0?o:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${a}; for="${c}"; options=${l};`,a==="json"?this:this}rollback(){var e;return((e=this.headers.Prefer)!==null&&e!==void 0?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Tr.default=Mv;var wv=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ss,"__esModule",{value:!0});const Tv=wv(Tr);let Av=class extends Tv.default{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}in(e,t){const n=Array.from(new Set(t)).map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(e,`in.(${n})`),this}contains(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t=="string"?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:n,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const a=n===void 0?"":`(${n})`;return this.url.searchParams.append(e,`${r}fts${a}.${t}`),this}match(e){return Object.entries(e).forEach(([t,n])=>{this.url.searchParams.append(t,`eq.${n}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){const i=n?`${n}.or`:"or";return this.url.searchParams.append(i,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}};Ss.default=Av;var Rv=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(wr,"__esModule",{value:!0});const rs=Rv(Ss);let Cv=class{constructor(e,{headers:t={},schema:n,fetch:i}){this.url=e,this.headers=t,this.schema=n,this.fetch=i}select(e,{head:t=!1,count:n}={}){const i=t?"HEAD":"GET";let r=!1;const a=(e??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",a),n&&(this.headers.Prefer=`count=${n}`),new rs.default({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:t,defaultToNull:n=!0}={}){const i="POST",r=[];if(this.headers.Prefer&&r.push(this.headers.Prefer),t&&r.push(`count=${t}`),n||r.push("missing=default"),this.headers.Prefer=r.join(","),Array.isArray(e)){const a=e.reduce((o,l)=>o.concat(Object.keys(l)),[]);if(a.length>0){const o=[...new Set(a)].map(l=>`"${l}"`);this.url.searchParams.set("columns",o.join(","))}}return new rs.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:i,defaultToNull:r=!0}={}){const a="POST",o=[`resolution=${n?"ignore":"merge"}-duplicates`];if(t!==void 0&&this.url.searchParams.set("on_conflict",t),this.headers.Prefer&&o.push(this.headers.Prefer),i&&o.push(`count=${i}`),r||o.push("missing=default"),this.headers.Prefer=o.join(","),Array.isArray(e)){const l=e.reduce((c,h)=>c.concat(Object.keys(h)),[]);if(l.length>0){const c=[...new Set(l)].map(h=>`"${h}"`);this.url.searchParams.set("columns",c.join(","))}}return new rs.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}update(e,{count:t}={}){const n="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),t&&i.push(`count=${t}`),this.headers.Prefer=i.join(","),new rs.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){const t="DELETE",n=[];return e&&n.push(`count=${e}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new rs.default({method:t,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};wr.default=Cv;var Cr={},Pr={};Object.defineProperty(Pr,"__esModule",{value:!0});Pr.version=void 0;Pr.version="0.0.0-automated";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.DEFAULT_HEADERS=void 0;const Pv=Pr;Cr.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Pv.version}`};var mh=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(co,"__esModule",{value:!0});const Lv=mh(wr),Iv=mh(Ss),Dv=Cr;let Uv=class gh{constructor(e,{headers:t={},schema:n,fetch:i}={}){this.url=e,this.headers=Object.assign(Object.assign({},Dv.DEFAULT_HEADERS),t),this.schemaName=n,this.fetch=i}from(e){const t=new URL(`${this.url}/${e}`);return new Lv.default(t,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new gh(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,t={},{head:n=!1,get:i=!1,count:r}={}){let a;const o=new URL(`${this.url}/rpc/${e}`);let l;n||i?(a=n?"HEAD":"GET",Object.entries(t).filter(([h,u])=>u!==void 0).map(([h,u])=>[h,Array.isArray(u)?`{${u.join(",")}}`:`${u}`]).forEach(([h,u])=>{o.searchParams.append(h,u)})):(a="POST",l=t);const c=Object.assign({},this.headers);return r&&(c.Prefer=`count=${r}`),new Iv.default({method:a,url:o,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};co.default=Uv;var Ji=Ht&&Ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.PostgrestError=Pt.PostgrestBuilder=Pt.PostgrestTransformBuilder=Pt.PostgrestFilterBuilder=Pt.PostgrestQueryBuilder=Pt.PostgrestClient=void 0;const _h=Ji(co);Pt.PostgrestClient=_h.default;const vh=Ji(wr);Pt.PostgrestQueryBuilder=vh.default;const yh=Ji(Ss);Pt.PostgrestFilterBuilder=yh.default;const xh=Ji(Tr);Pt.PostgrestTransformBuilder=xh.default;const Sh=Ji(Ar);Pt.PostgrestBuilder=Sh.default;const Eh=Ji(Rr);Pt.PostgrestError=Eh.default;var Ov=Pt.default={PostgrestClient:_h.default,PostgrestQueryBuilder:vh.default,PostgrestFilterBuilder:yh.default,PostgrestTransformBuilder:xh.default,PostgrestBuilder:Sh.default,PostgrestError:Eh.default};const{PostgrestClient:Nv,PostgrestQueryBuilder:Ly,PostgrestFilterBuilder:Iy,PostgrestTransformBuilder:Dy,PostgrestBuilder:Uy,PostgrestError:Oy}=Ov;function Fv(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const kv=Fv(),Bv="2.11.15",zv=`realtime-js/${Bv}`,Hv="1.0.0",bh=1e4,Gv=1e3;var ds;(function(s){s[s.connecting=0]="connecting",s[s.open=1]="open",s[s.closing=2]="closing",s[s.closed=3]="closed"})(ds||(ds={}));var wt;(function(s){s.closed="closed",s.errored="errored",s.joined="joined",s.joining="joining",s.leaving="leaving"})(wt||(wt={}));var $t;(function(s){s.close="phx_close",s.error="phx_error",s.join="phx_join",s.reply="phx_reply",s.leave="phx_leave",s.access_token="access_token"})($t||($t={}));var Ha;(function(s){s.websocket="websocket"})(Ha||(Ha={}));var ti;(function(s){s.Connecting="connecting",s.Open="open",s.Closing="closing",s.Closed="closed"})(ti||(ti={}));class Vv{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),n=new TextDecoder;return this._decodeBroadcast(e,t,n)}_decodeBroadcast(e,t,n){const i=t.getUint8(1),r=t.getUint8(2);let a=this.HEADER_LENGTH+2;const o=n.decode(e.slice(a,a+i));a=a+i;const l=n.decode(e.slice(a,a+r));a=a+r;const c=JSON.parse(n.decode(e.slice(a,e.byteLength)));return{ref:null,topic:o,event:l,payload:c}}}class Mh{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var et;(function(s){s.abstime="abstime",s.bool="bool",s.date="date",s.daterange="daterange",s.float4="float4",s.float8="float8",s.int2="int2",s.int4="int4",s.int4range="int4range",s.int8="int8",s.int8range="int8range",s.json="json",s.jsonb="jsonb",s.money="money",s.numeric="numeric",s.oid="oid",s.reltime="reltime",s.text="text",s.time="time",s.timestamp="timestamp",s.timestamptz="timestamptz",s.timetz="timetz",s.tsrange="tsrange",s.tstzrange="tstzrange"})(et||(et={}));const lc=(s,e,t={})=>{var n;const i=(n=t.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(e).reduce((r,a)=>(r[a]=Wv(a,s,e,i),r),{})},Wv=(s,e,t,n)=>{const i=e.find(o=>o.name===s),r=i==null?void 0:i.type,a=t[s];return r&&!n.includes(r)?wh(r,a):Ga(a)},wh=(s,e)=>{if(s.charAt(0)==="_"){const t=s.slice(1,s.length);return qv(e,t)}switch(s){case et.bool:return jv(e);case et.float4:case et.float8:case et.int2:case et.int4:case et.int8:case et.numeric:case et.oid:return $v(e);case et.json:case et.jsonb:return Xv(e);case et.timestamp:return Yv(e);case et.abstime:case et.date:case et.daterange:case et.int4range:case et.int8range:case et.money:case et.reltime:case et.text:case et.time:case et.timestamptz:case et.timetz:case et.tsrange:case et.tstzrange:return Ga(e);default:return Ga(e)}},Ga=s=>s,jv=s=>{switch(s){case"t":return!0;case"f":return!1;default:return s}},$v=s=>{if(typeof s=="string"){const e=parseFloat(s);if(!Number.isNaN(e))return e}return s},Xv=s=>{if(typeof s=="string")try{return JSON.parse(s)}catch(e){return console.log(`JSON parse error: ${e}`),s}return s},qv=(s,e)=>{if(typeof s!="string")return s;const t=s.length-1,n=s[t];if(s[0]==="{"&&n==="}"){let r;const a=s.slice(1,t);try{r=JSON.parse("["+a+"]")}catch{r=a?a.split(","):[]}return r.map(o=>wh(e,o))}return s},Yv=s=>typeof s=="string"?s.replace(" ","T"):s,Th=s=>{let e=s;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")};class Sa{constructor(e,t,n={},i=bh){this.channel=e,this.event=t,this.payload=n,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var cc;(function(s){s.SYNC="sync",s.JOIN="join",s.LEAVE="leave"})(cc||(cc={}));class fs{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(t==null?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},i=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=fs.syncState(this.state,i,r,a),this.pendingDiffs.forEach(l=>{this.state=fs.syncDiff(this.state,l,r,a)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},i=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=fs.syncDiff(this.state,i,r,a),o())}),this.onJoin((i,r,a)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:r,newPresences:a})}),this.onLeave((i,r,a)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:r,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,i){const r=this.cloneDeep(e),a=this.transformState(t),o={},l={};return this.map(r,(c,h)=>{a[c]||(l[c]=h)}),this.map(a,(c,h)=>{const u=r[c];if(u){const d=h.map(f=>f.presence_ref),m=u.map(f=>f.presence_ref),g=h.filter(f=>m.indexOf(f.presence_ref)<0),v=u.filter(f=>d.indexOf(f.presence_ref)<0);g.length>0&&(o[c]=g),v.length>0&&(l[c]=v)}else o[c]=h}),this.syncDiff(r,{joins:o,leaves:l},n,i)}static syncDiff(e,t,n,i){const{joins:r,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),i||(i=()=>{}),this.map(r,(o,l)=>{var c;const h=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),h.length>0){const u=e[o].map(m=>m.presence_ref),d=h.filter(m=>u.indexOf(m.presence_ref)<0);e[o].unshift(...d)}n(o,h,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const h=l.map(u=>u.presence_ref);c=c.filter(u=>h.indexOf(u.presence_ref)<0),e[o]=c,i(o,c,l),c.length===0&&delete e[o]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const i=e[n];return"metas"in i?t[n]=i.metas.map(r=>(r.presence_ref=r.phx_ref,delete r.phx_ref,delete r.phx_ref_prev,r)):t[n]=i,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var hc;(function(s){s.ALL="*",s.INSERT="INSERT",s.UPDATE="UPDATE",s.DELETE="DELETE"})(hc||(hc={}));var uc;(function(s){s.BROADCAST="broadcast",s.PRESENCE="presence",s.POSTGRES_CHANGES="postgres_changes",s.SYSTEM="system"})(uc||(uc={}));var mn;(function(s){s.SUBSCRIBED="SUBSCRIBED",s.TIMED_OUT="TIMED_OUT",s.CLOSED="CLOSED",s.CHANNEL_ERROR="CHANNEL_ERROR"})(mn||(mn={}));class ho{constructor(e,t={config:{}},n){this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=wt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new Sa(this,$t.join,this.params,this.timeout),this.rejoinTimer=new Mh(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=wt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=wt.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=wt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=wt.errored,this.rejoinTimer.scheduleTimeout())}),this._on($t.reply,{},(i,r)=>{this._trigger(this._replyEventName(r),i)}),this.presence=new fs(this),this.broadcastEndpointURL=Th(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var n,i;if(this.socket.isConnected()||this.socket.connect(),this.state==wt.closed){const{config:{broadcast:r,presence:a,private:o}}=this.params;this._onError(h=>e==null?void 0:e(mn.CHANNEL_ERROR,h)),this._onClose(()=>e==null?void 0:e(mn.CLOSED));const l={},c={broadcast:r,presence:a,postgres_changes:(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(h=>h.filter))!==null&&i!==void 0?i:[],private:o};this.socket.accessTokenValue&&(l.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:c},l)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:h})=>{var u;if(this.socket.setAuth(),h===void 0){e==null||e(mn.SUBSCRIBED);return}else{const d=this.bindings.postgres_changes,m=(u=d==null?void 0:d.length)!==null&&u!==void 0?u:0,g=[];for(let v=0;v<m;v++){const f=d[v],{filter:{event:p,schema:b,table:_,filter:S}}=f,L=h&&h[v];if(L&&L.event===p&&L.schema===b&&L.table===_&&L.filter===S)g.push(Object.assign(Object.assign({},f),{id:L.id}));else{this.unsubscribe(),this.state=wt.errored,e==null||e(mn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=g,e&&e(mn.SUBSCRIBED);return}}).receive("error",h=>{this.state=wt.errored,e==null||e(mn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{e==null||e(mn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){return this._on(e,t,n)}async send(e,t={}){var n,i;if(!this._canPush()&&e.type==="broadcast"){const{event:r,payload:a}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(r=>{var a,o,l;const c=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&r("ok"),c.receive("ok",()=>r("ok")),c.receive("error",()=>r("error")),c.receive("timeout",()=>r("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=wt.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger($t.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(i=>{n=new Sa(this,$t.leave,{},e),n.receive("ok",()=>{t(),i("ok")}).receive("timeout",()=>{t(),i("timed out")}).receive("error",()=>{i("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(e,t,n){const i=new AbortController,r=setTimeout(()=>i.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:i.signal}));return clearTimeout(r),a}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Sa(this,e,t,n);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var i,r;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:h}=$t;if(n&&[o,l,c,h].indexOf(a)>=0&&n!==this._joinRef())return;let d=this._onMessage(a,t,n);if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(m=>{var g,v,f;return((g=m.filter)===null||g===void 0?void 0:g.event)==="*"||((f=(v=m.filter)===null||v===void 0?void 0:v.event)===null||f===void 0?void 0:f.toLocaleLowerCase())===a}).map(m=>m.callback(d,n)):(r=this.bindings[a])===null||r===void 0||r.filter(m=>{var g,v,f,p,b,_;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in m){const S=m.id,L=(g=m.filter)===null||g===void 0?void 0:g.event;return S&&((v=t.ids)===null||v===void 0?void 0:v.includes(S))&&(L==="*"||(L==null?void 0:L.toLocaleLowerCase())===((f=t.data)===null||f===void 0?void 0:f.type.toLocaleLowerCase()))}else{const S=(b=(p=m==null?void 0:m.filter)===null||p===void 0?void 0:p.event)===null||b===void 0?void 0:b.toLocaleLowerCase();return S==="*"||S===((_=t==null?void 0:t.event)===null||_===void 0?void 0:_.toLocaleLowerCase())}else return m.type.toLocaleLowerCase()===a}).map(m=>{if(typeof d=="object"&&"ids"in d){const g=d.data,{schema:v,table:f,commit_timestamp:p,type:b,errors:_}=g;d=Object.assign(Object.assign({},{schema:v,table:f,commit_timestamp:p,eventType:b,new:{},old:{},errors:_}),this._getPayloadRecords(g))}m.callback(d,n)})}_isClosed(){return this.state===wt.closed}_isJoined(){return this.state===wt.joined}_isJoining(){return this.state===wt.joining}_isLeaving(){return this.state===wt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const i=e.toLocaleLowerCase(),r={type:i,filter:t,callback:n};return this.bindings[i]?this.bindings[i].push(r):this.bindings[i]=[r],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]=this.bindings[n].filter(i=>{var r;return!(((r=i.type)===null||r===void 0?void 0:r.toLocaleLowerCase())===n&&ho.isEqual(i.filter,t))}),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on($t.close,{},e)}_onError(e){this._on($t.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=wt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=lc(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=lc(e.columns,e.old_record)),t}}const dc=()=>{},Kv=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Jv{constructor(e,t){var n;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=bh,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=dc,this.ref=0,this.logger=dc,this.conn=null,this.sendBuffer=[],this.serializer=new Vv,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...o)=>xs(async()=>{const{default:l}=await Promise.resolve().then(()=>Ki);return{default:l}},void 0).then(({default:l})=>l(...o)):a=fetch,(...o)=>a(...o)},this.endPoint=`${e}/${Ha.websocket}`,this.httpEndpoint=Th(e),t!=null&&t.transport?this.transport=t.transport:this.transport=null,t!=null&&t.params&&(this.params=t.params),t!=null&&t.timeout&&(this.timeout=t.timeout),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),t!=null&&t.heartbeatIntervalMs&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs);const i=(n=t==null?void 0:t.params)===null||n===void 0?void 0:n.apikey;if(i&&(this.accessTokenValue=i,this.apiKey=i),this.reconnectAfterMs=t!=null&&t.reconnectAfterMs?t.reconnectAfterMs:r=>[1e3,2e3,5e3,1e4][r-1]||1e4,this.encode=t!=null&&t.encode?t.encode:(r,a)=>a(JSON.stringify(r)),this.decode=t!=null&&t.decode?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new Mh(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(t==null?void 0:t.fetch),t!=null&&t.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(t==null?void 0:t.worker)||!1,this.workerUrl=t==null?void 0:t.workerUrl}this.accessToken=(t==null?void 0:t.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=kv),!this.transport)throw new Error("No transport provided");this.conn=new this.transport(this.endpointURL()),this.setupConnection()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Hv}))}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,t??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(n=>n.teardown()))}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case ds.connecting:return ti.Connecting;case ds.open:return ti.Open;case ds.closing:return ti.Closing;default:return ti.Closed}}isConnected(){return this.connectionState()===ti.Open}channel(e,t={config:{}}){const n=`realtime:${e}`,i=this.getChannels().find(r=>r.topic===n);if(i)return i;{const r=new ho(`realtime:${e}`,t,this);return this.channels.push(r),r}}push(e){const{topic:t,event:n,payload:i,ref:r}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${t} ${n} (${r})`,i),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){let t=e||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(n=>{const i={access_token:t,version:zv};t&&n.updateJoinPayload(i),n.joinedOnce&&n._isJoined()&&n._push($t.access_token,{access_token:t})}))}async sendHeartbeat(){var e;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(e=this.conn)===null||e===void 0||e.close(Gv,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_onConnMessage(e){this.decode(e.data,t=>{let{topic:n,event:i,payload:r,ref:a}=t;n==="phoenix"&&i==="phx_reply"&&this.heartbeatCallback(t.payload.status=="ok"?"ok":"error"),a&&a===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${r.status||""} ${n} ${i} ${a&&"("+a+")"||""}`,r),Array.from(this.channels).filter(o=>o._isMember(n)).forEach(o=>o._trigger(i,r,a)),this.stateChangeCallbacks.message.forEach(o=>o(t))})}_onConnOpen(){this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this.stateChangeCallbacks.open.forEach(e=>e())}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(t=>t(e))}_onConnError(e){this.log("transport",`${e}`),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(t=>t(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger($t.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",i=new URLSearchParams(t);return`${e}${n}${i}`}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([Kv],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}}class uo extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function _t(s){return typeof s=="object"&&s!==null&&"__isStorageError"in s}class Zv extends uo{constructor(e,t,n){super(e),this.name="StorageApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Va extends uo{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var Qv=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};const Ah=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>xs(async()=>{const{default:n}=await Promise.resolve().then(()=>Ki);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)},e0=()=>Qv(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield xs(()=>Promise.resolve().then(()=>Ki),void 0)).Response:Response}),Wa=s=>{if(Array.isArray(s))return s.map(t=>Wa(t));if(typeof s=="function"||s!==Object(s))return s;const e={};return Object.entries(s).forEach(([t,n])=>{const i=t.replace(/([-_][a-z])/gi,r=>r.toUpperCase().replace(/[-_]/g,""));e[i]=Wa(n)}),e},t0=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)};var hi=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};const Ea=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),n0=(s,e,t)=>hi(void 0,void 0,void 0,function*(){const n=yield e0();s instanceof n&&!(t!=null&&t.noResolveJson)?s.json().then(i=>{const r=s.status||500,a=(i==null?void 0:i.statusCode)||r+"";e(new Zv(Ea(i),r,a))}).catch(i=>{e(new Va(Ea(i),i))}):e(new Va(Ea(s),s))}),i0=(s,e,t,n)=>{const i={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"||!n?i:(t0(n)?(i.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i.body=JSON.stringify(n)):i.body=n,Object.assign(Object.assign({},i),t))};function Es(s,e,t,n,i,r){return hi(this,void 0,void 0,function*(){return new Promise((a,o)=>{s(t,i0(e,n,i,r)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>n0(l,o,n))})})}function _r(s,e,t,n){return hi(this,void 0,void 0,function*(){return Es(s,"GET",e,t,n)})}function gn(s,e,t,n,i){return hi(this,void 0,void 0,function*(){return Es(s,"POST",e,n,i,t)})}function ja(s,e,t,n,i){return hi(this,void 0,void 0,function*(){return Es(s,"PUT",e,n,i,t)})}function s0(s,e,t,n){return hi(this,void 0,void 0,function*(){return Es(s,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),n)})}function Rh(s,e,t,n,i){return hi(this,void 0,void 0,function*(){return Es(s,"DELETE",e,n,i,t)})}var Ct=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};const r0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},fc={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class a0{constructor(e,t={},n,i){this.url=e,this.headers=t,this.bucketId=n,this.fetch=Ah(i)}uploadOrUpdate(e,t,n,i){return Ct(this,void 0,void 0,function*(){try{let r;const a=Object.assign(Object.assign({},fc),i);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&n instanceof Blob?(r=new FormData,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",this.encodeMetadata(l)),r.append("",n)):typeof FormData<"u"&&n instanceof FormData?(r=n,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",this.encodeMetadata(l))):(r=n,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),i!=null&&i.headers&&(o=Object.assign(Object.assign({},o),i.headers));const c=this._removeEmptyFolders(t),h=this._getFinalPath(c),u=yield(e=="PUT"?ja:gn)(this.fetch,`${this.url}/object/${h}`,r,Object.assign({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{data:{path:c,id:u.Id,fullPath:u.Key},error:null}}catch(r){if(_t(r))return{data:null,error:r};throw r}})}upload(e,t,n){return Ct(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,n)})}uploadToSignedUrl(e,t,n,i){return Ct(this,void 0,void 0,function*(){const r=this._removeEmptyFolders(e),a=this._getFinalPath(r),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",t);try{let l;const c=Object.assign({upsert:fc.upsert},i),h=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType);const u=yield ja(this.fetch,o.toString(),l,{headers:h});return{data:{path:r,fullPath:u.Key},error:null}}catch(l){if(_t(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return Ct(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e);const i=Object.assign({},this.headers);t!=null&&t.upsert&&(i["x-upsert"]="true");const r=yield gn(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:i}),a=new URL(this.url+r.url),o=a.searchParams.get("token");if(!o)throw new uo("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(n){if(_t(n))return{data:null,error:n};throw n}})}update(e,t,n){return Ct(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,n)})}move(e,t,n){return Ct(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(i){if(_t(i))return{data:null,error:i};throw i}})}copy(e,t,n){return Ct(this,void 0,void 0,function*(){try{return{data:{path:(yield gn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(i){if(_t(i))return{data:null,error:i};throw i}})}createSignedUrl(e,t,n){return Ct(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e),r=yield gn(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:t},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const a=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return r={signedUrl:encodeURI(`${this.url}${r.signedURL}${a}`)},{data:r,error:null}}catch(i){if(_t(i))return{data:null,error:i};throw i}})}createSignedUrls(e,t,n){return Ct(this,void 0,void 0,function*(){try{const i=yield gn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),r=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:i.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${r}`):null})),error:null}}catch(i){if(_t(i))return{data:null,error:i};throw i}})}download(e,t){return Ct(this,void 0,void 0,function*(){const i=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",r=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),a=r?`?${r}`:"";try{const o=this._getFinalPath(e);return{data:yield(yield _r(this.fetch,`${this.url}/${i}/${o}${a}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(_t(o))return{data:null,error:o};throw o}})}info(e){return Ct(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const n=yield _r(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:Wa(n),error:null}}catch(n){if(_t(n))return{data:null,error:n};throw n}})}exists(e){return Ct(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield s0(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(_t(n)&&n instanceof Va){const i=n.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:n}}throw n}})}getPublicUrl(e,t){const n=this._getFinalPath(e),i=[],r=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";r!==""&&i.push(r);const o=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});l!==""&&i.push(l);let c=i.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${n}${c}`)}}}remove(e){return Ct(this,void 0,void 0,function*(){try{return{data:yield Rh(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(_t(t))return{data:null,error:t};throw t}})}list(e,t,n){return Ct(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},r0),t),{prefix:e||""});return{data:yield gn(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},n),error:null}}catch(i){if(_t(i))return{data:null,error:i};throw i}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const o0="2.10.4",l0={"X-Client-Info":`storage-js/${o0}`};var Ci=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};class c0{constructor(e,t={},n,i){const r=new URL(e);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase.")),this.url=r.href,this.headers=Object.assign(Object.assign({},l0),t),this.fetch=Ah(n)}listBuckets(){return Ci(this,void 0,void 0,function*(){try{return{data:yield _r(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(_t(e))return{data:null,error:e};throw e}})}getBucket(e){return Ci(this,void 0,void 0,function*(){try{return{data:yield _r(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(_t(t))return{data:null,error:t};throw t}})}createBucket(e,t={public:!1}){return Ci(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(_t(n))return{data:null,error:n};throw n}})}updateBucket(e,t){return Ci(this,void 0,void 0,function*(){try{return{data:yield ja(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(_t(n))return{data:null,error:n};throw n}})}emptyBucket(e){return Ci(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(_t(t))return{data:null,error:t};throw t}})}deleteBucket(e){return Ci(this,void 0,void 0,function*(){try{return{data:yield Rh(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(_t(t))return{data:null,error:t};throw t}})}}class h0 extends c0{constructor(e,t={},n,i){super(e,t,n,i)}from(e){return new a0(this.url,this.headers,e,this.fetch)}}const u0="2.53.0";let os="";typeof Deno<"u"?os="deno":typeof document<"u"?os="web":typeof navigator<"u"&&navigator.product==="ReactNative"?os="react-native":os="node";const d0={"X-Client-Info":`supabase-js-${os}/${u0}`},f0={headers:d0},p0={schema:"public"},m0={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},g0={};var _0=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};const v0=s=>{let e;return s?e=s:typeof fetch>"u"?e=dh:e=fetch,(...t)=>e(...t)},y0=()=>typeof Headers>"u"?fh:Headers,x0=(s,e,t)=>{const n=v0(t),i=y0();return(r,a)=>_0(void 0,void 0,void 0,function*(){var o;const l=(o=yield e())!==null&&o!==void 0?o:s;let c=new i(a==null?void 0:a.headers);return c.has("apikey")||c.set("apikey",s),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(r,Object.assign(Object.assign({},a),{headers:c}))})};var S0=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};function E0(s){return s.endsWith("/")?s:s+"/"}function b0(s,e){var t,n;const{db:i,auth:r,realtime:a,global:o}=s,{db:l,auth:c,realtime:h,global:u}=e,d={db:Object.assign(Object.assign({},l),i),auth:Object.assign(Object.assign({},c),r),realtime:Object.assign(Object.assign({},h),a),storage:{},global:Object.assign(Object.assign(Object.assign({},u),o),{headers:Object.assign(Object.assign({},(t=u==null?void 0:u.headers)!==null&&t!==void 0?t:{}),(n=o==null?void 0:o.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>S0(this,void 0,void 0,function*(){return""})};return s.accessToken?d.accessToken=s.accessToken:delete d.accessToken,d}const Ch="2.71.1",Ui=30*1e3,$a=3,ba=$a*Ui,M0="http://localhost:9999",w0="supabase.auth.token",T0={"X-Client-Info":`gotrue-js/${Ch}`},Xa="X-Supabase-Api-Version",Ph={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},A0=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,R0=10*60*1e3;class fo extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}}function Be(s){return typeof s=="object"&&s!==null&&"__isAuthError"in s}class C0 extends fo{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function P0(s){return Be(s)&&s.name==="AuthApiError"}class Lh extends fo{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class Bn extends fo{constructor(e,t,n,i){super(e,n,i),this.name=t,this.status=n}}class Rn extends Bn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function L0(s){return Be(s)&&s.name==="AuthSessionMissingError"}class sr extends Bn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class rr extends Bn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class ar extends Bn{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function I0(s){return Be(s)&&s.name==="AuthImplicitGrantRedirectError"}class pc extends Bn{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class qa extends Bn{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Ma(s){return Be(s)&&s.name==="AuthRetryableFetchError"}class mc extends Bn{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}}class Ya extends Bn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const vr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),gc=` 	
\r=`.split(""),D0=(()=>{const s=new Array(128);for(let e=0;e<s.length;e+=1)s[e]=-1;for(let e=0;e<gc.length;e+=1)s[gc[e].charCodeAt(0)]=-2;for(let e=0;e<vr.length;e+=1)s[vr[e].charCodeAt(0)]=e;return s})();function _c(s,e,t){if(s!==null)for(e.queue=e.queue<<8|s,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(vr[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(vr[n]),e.queuedBits-=6}}function Ih(s,e,t){const n=D0[s];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`)}}function vc(s){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},r=a=>{N0(a,n,t)};for(let a=0;a<s.length;a+=1)Ih(s.charCodeAt(a),i,r);return e.join("")}function U0(s,e){if(s<=127){e(s);return}else if(s<=2047){e(192|s>>6),e(128|s&63);return}else if(s<=65535){e(224|s>>12),e(128|s>>6&63),e(128|s&63);return}else if(s<=1114111){e(240|s>>18),e(128|s>>12&63),e(128|s>>6&63),e(128|s&63);return}throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`)}function O0(s,e){for(let t=0;t<s.length;t+=1){let n=s.charCodeAt(t);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(s.charCodeAt(t+1)-56320&65535|i)+65536,t+=1}U0(n,e)}}function N0(s,e,t){if(e.utf8seq===0){if(s<=127){t(s);return}for(let n=1;n<6;n+=1)if(!(s>>7-n&1)){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=s&31;else if(e.utf8seq===3)e.codepoint=s&15;else if(e.utf8seq===4)e.codepoint=s&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(s<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|s&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function F0(s){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};for(let i=0;i<s.length;i+=1)Ih(s.charCodeAt(i),t,n);return new Uint8Array(e)}function k0(s){const e=[];return O0(s,t=>e.push(t)),new Uint8Array(e)}function B0(s){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};return s.forEach(i=>_c(i,t,n)),_c(null,t,n),e.join("")}function z0(s){return Math.round(Date.now()/1e3)+s}function H0(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const e=Math.random()*16|0;return(s=="x"?e:e&3|8).toString(16)})}const jt=()=>typeof window<"u"&&typeof document<"u",Yn={tested:!1,writable:!1},Dh=()=>{if(!jt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Yn.tested)return Yn.writable;const s=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(s,s),globalThis.localStorage.removeItem(s),Yn.tested=!0,Yn.writable=!0}catch{Yn.tested=!0,Yn.writable=!1}return Yn.writable};function G0(s){const e={},t=new URL(s);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((i,r)=>{e[r]=i})}catch{}return t.searchParams.forEach((n,i)=>{e[i]=n}),e}const Uh=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>xs(async()=>{const{default:n}=await Promise.resolve().then(()=>Ki);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)},V0=s=>typeof s=="object"&&s!==null&&"status"in s&&"ok"in s&&"json"in s&&typeof s.json=="function",Oi=async(s,e,t)=>{await s.setItem(e,JSON.stringify(t))},Kn=async(s,e)=>{const t=await s.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},An=async(s,e)=>{await s.removeItem(e)};class Lr{constructor(){this.promise=new Lr.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Lr.promiseConstructor=Promise;function wa(s){const e=s.split(".");if(e.length!==3)throw new Ya("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!A0.test(e[n]))throw new Ya("JWT not in base64url format");return{header:JSON.parse(vc(e[0])),payload:JSON.parse(vc(e[1])),signature:F0(e[2]),raw:{header:e[0],payload:e[1]}}}async function W0(s){return await new Promise(e=>{setTimeout(()=>e(null),s)})}function j0(s,e){return new Promise((n,i)=>{(async()=>{for(let r=0;r<1/0;r++)try{const a=await s(r);if(!e(r,null,a)){n(a);return}}catch(a){if(!e(r,a)){i(a);return}}})()})}function $0(s){return("0"+s.toString(16)).substr(-2)}function X0(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let i="";for(let r=0;r<56;r++)i+=t.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(e),Array.from(e,$0).join("")}async function q0(s){const t=new TextEncoder().encode(s),n=await crypto.subtle.digest("SHA-256",t),i=new Uint8Array(n);return Array.from(i).map(r=>String.fromCharCode(r)).join("")}async function Y0(s){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),s;const t=await q0(s);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Pi(s,e,t=!1){const n=X0();let i=n;t&&(i+="/PASSWORD_RECOVERY"),await Oi(s,`${e}-code-verifier`,i);const r=await Y0(n);return[r,n===r?"plain":"s256"]}const K0=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function J0(s){const e=s.headers.get(Xa);if(!e||!e.match(K0))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Z0(s){if(!s)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(s<=e)throw new Error("JWT has expired")}function Q0(s){switch(s){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const ey=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Li(s){if(!ey.test(s))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ta(){const s={};return new Proxy(s,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function yc(s){return JSON.parse(JSON.stringify(s))}var ty=function(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t};const Zn=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),ny=[502,503,504];async function xc(s){var e;if(!V0(s))throw new qa(Zn(s),0);if(ny.includes(s.status))throw new qa(Zn(s),s.status);let t;try{t=await s.json()}catch(r){throw new Lh(Zn(r),r)}let n;const i=J0(s);if(i&&i.getTime()>=Ph["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new mc(Zn(t),s.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new Rn}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0))throw new mc(Zn(t),s.status,t.weak_password.reasons);throw new C0(Zn(t),s.status||500,n)}const iy=(s,e,t,n)=>{const i={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),t))};async function Ye(s,e,t,n){var i;const r=Object.assign({},n==null?void 0:n.headers);r[Xa]||(r[Xa]=Ph["2024-01-01"].name),n!=null&&n.jwt&&(r.Authorization=`Bearer ${n.jwt}`);const a=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await sy(s,e,t+o,{headers:r,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function sy(s,e,t,n,i,r){const a=iy(e,n,i,r);let o;try{o=await s(t,Object.assign({},a))}catch(l){throw console.error(l),new qa(Zn(l),0)}if(o.ok||await xc(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(l){await xc(l)}}function pn(s){var e;let t=null;ly(s)&&(t=Object.assign({},s),s.expires_at||(t.expires_at=z0(s.expires_in)));const n=(e=s.user)!==null&&e!==void 0?e:s;return{data:{session:t,user:n},error:null}}function Sc(s){const e=pn(s);return!e.error&&s.weak_password&&typeof s.weak_password=="object"&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.message&&typeof s.weak_password.message=="string"&&s.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=s.weak_password),e}function Ln(s){var e;return{data:{user:(e=s.user)!==null&&e!==void 0?e:s},error:null}}function ry(s){return{data:s,error:null}}function ay(s){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:r}=s,a=ty(s,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:r},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function oy(s){return s}function ly(s){return s.access_token&&s.refresh_token&&s.expires_in}const Aa=["global","local","others"];var cy=function(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t};class hy{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=Uh(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,t=Aa[0]){if(Aa.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Aa.join(", ")}`);try{return await Ye(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(Be(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await Ye(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Ln})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=cy(e,["options"]),i=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await Ye(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:ay,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(Be(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await Ye(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ln})}catch(t){if(Be(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,i,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await Ye(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:""},xform:oy});if(h.error)throw h.error;const u=await h.json(),d=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,m=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(g=>{const v=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),f=JSON.parse(g.split(";")[1].split("=")[1]);c[`${f}Page`]=v}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(Be(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){Li(e);try{return await Ye(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ln})}catch(t){if(Be(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){Li(e);try{return await Ye(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Ln})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){Li(e);try{return await Ye(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Ln})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){Li(e.userId);try{const{data:t,error:n}=await Ye(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:t,error:n}}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _deleteFactor(e){Li(e.userId),Li(e.id);try{return{data:await Ye(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(Be(t))return{data:null,error:t};throw t}}}function Ec(s={}){return{getItem:e=>s[e]||null,setItem:(e,t)=>{s[e]=t},removeItem:e=>{delete s[e]}}}function uy(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Ii={debug:!!(globalThis&&Dh()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Oh extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class dy extends Oh{}async function fy(s,e,t){Ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",s,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),Ii.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",s)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(s,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async i=>{if(i){Ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",s,i.name);try{return await t()}finally{Ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",s,i.name)}}else{if(e===0)throw Ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",s),new dy(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);if(Ii.debug)try{const r=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(r,null,"  "))}catch(r){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",r)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}uy();const py={url:M0,storageKey:w0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:T0,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function bc(s,e,t){return await t()}const Di={};class vs{constructor(e){var t,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=vs.nextInstanceID,vs.nextInstanceID+=1,this.instanceID>0&&jt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const i=Object.assign(Object.assign({},py),e);if(this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.persistSession=i.persistSession,this.storageKey=i.storageKey,this.autoRefreshToken=i.autoRefreshToken,this.admin=new hy({url:i.url,headers:i.headers,fetch:i.fetch}),this.url=i.url,this.headers=i.headers,this.fetch=Uh(i.fetch),this.lock=i.lock||bc,this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,i.lock?this.lock=i.lock:jt()&&(!((t=globalThis==null?void 0:globalThis.navigator)===null||t===void 0)&&t.locks)?this.lock=fy:this.lock=bc,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:Dh()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Ec(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=Ec(this.memoryStorage)),jt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(r){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",r)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async r=>{this._debug("received broadcast notification from other tab or client",r),await this._notifyAllSubscribers(r.data.event,r.data.session,!1)})}this.initialize()}get jwks(){var e,t;return(t=(e=Di[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Di[this.storageKey]=Object.assign(Object.assign({},Di[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Di[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Di[this.storageKey]=Object.assign(Object.assign({},Di[this.storageKey]),{cachedAt:e})}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Ch}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const t=G0(window.location.href);let n="none";if(this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce"),jt()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:r}=await this._getSessionFromURL(t,n);if(r){if(this._debug("#_initialize()","error detecting session from URL",r),I0(r)){const l=(e=r.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:r}}return await this._removeSession(),{error:r}}const{session:a,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return Be(t)?{error:t}:{error:new Lh("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,i;try{const r=await Ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:pn}),{data:a,error:o}=r;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(r){if(Be(r))return{data:{user:null,session:null},error:r};throw r}}async signUp(e){var t,n,i;try{let r;if("email"in e){const{email:h,password:u,options:d}=e;let m=null,g=null;this.flowType==="pkce"&&([m,g]=await Pi(this.storage,this.storageKey)),r=await Ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d==null?void 0:d.emailRedirectTo,body:{email:h,password:u,data:(t=d==null?void 0:d.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:m,code_challenge_method:g},xform:pn})}else if("phone"in e){const{phone:h,password:u,options:d}=e;r=await Ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:u,data:(n=d==null?void 0:d.data)!==null&&n!==void 0?n:{},channel:(i=d==null?void 0:d.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:pn})}else throw new rr("You must provide either an email or phone number and a password");const{data:a,error:o}=r;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(r){if(Be(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithPassword(e){try{let t;if("email"in e){const{email:r,password:a,options:o}=e;t=await Ye(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Sc})}else if("phone"in e){const{phone:r,password:a,options:o}=e;t=await Ye(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Sc})}else throw new rr("You must provide either an email or phone number and a password");const{data:n,error:i}=t;return i?{data:{user:null,session:null},error:i}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new sr}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOAuth(e){var t,n,i,r;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(r=e.options)===null||r===void 0?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;if(t==="solana")return await this.signInWithSolana(e);throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}async signInWithSolana(e){var t,n,i,r,a,o,l,c,h,u,d,m;let g,v;if("message"in e)g=e.message,v=e.signature;else{const{chain:f,wallet:p,statement:b,options:_}=e;let S;if(jt())if(typeof p=="object")S=p;else{const A=window;if("solana"in A&&typeof A.solana=="object"&&("signIn"in A.solana&&typeof A.solana.signIn=="function"||"signMessage"in A.solana&&typeof A.solana.signMessage=="function"))S=A.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(_!=null&&_.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=p}const L=new URL((t=_==null?void 0:_.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in S&&S.signIn){const A=await S.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},_==null?void 0:_.signInWithSolana),{version:"1",domain:L.host,uri:L.href}),b?{statement:b}:null));let w;if(Array.isArray(A)&&A[0]&&typeof A[0]=="object")w=A[0];else if(A&&typeof A=="object"&&"signedMessage"in A&&"signature"in A)w=A;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in w&&"signature"in w&&(typeof w.signedMessage=="string"||w.signedMessage instanceof Uint8Array)&&w.signature instanceof Uint8Array)g=typeof w.signedMessage=="string"?w.signedMessage:new TextDecoder().decode(w.signedMessage),v=w.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in S)||typeof S.signMessage!="function"||!("publicKey"in S)||typeof S!="object"||!S.publicKey||!("toBase58"in S.publicKey)||typeof S.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${L.host} wants you to sign in with your Solana account:`,S.publicKey.toBase58(),...b?["",b,""]:[""],"Version: 1",`URI: ${L.href}`,`Issued At: ${(i=(n=_==null?void 0:_.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((r=_==null?void 0:_.signInWithSolana)===null||r===void 0)&&r.notBefore?[`Not Before: ${_.signInWithSolana.notBefore}`]:[],...!((a=_==null?void 0:_.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${_.signInWithSolana.expirationTime}`]:[],...!((o=_==null?void 0:_.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${_.signInWithSolana.chainId}`]:[],...!((l=_==null?void 0:_.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${_.signInWithSolana.nonce}`]:[],...!((c=_==null?void 0:_.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${_.signInWithSolana.requestId}`]:[],...!((u=(h=_==null?void 0:_.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||u===void 0)&&u.length?["Resources",..._.signInWithSolana.resources.map(w=>`- ${w}`)]:[]].join(`
`);const A=await S.signMessage(new TextEncoder().encode(g),"utf8");if(!A||!(A instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");v=A}}try{const{data:f,error:p}=await Ye(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:B0(v)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(m=e.options)===null||m===void 0?void 0:m.captchaToken}}:null),xform:pn});if(p)throw p;return!f||!f.session||!f.user?{data:{user:null,session:null},error:new sr}:(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",f.session)),{data:Object.assign({},f),error:p})}catch(f){if(Be(f))return{data:{user:null,session:null},error:f};throw f}}async _exchangeCodeForSession(e){const t=await Kn(this.storage,`${this.storageKey}-code-verifier`),[n,i]=(t??"").split("/");try{const{data:r,error:a}=await Ye(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:pn});if(await An(this.storage,`${this.storageKey}-code-verifier`),a)throw a;return!r||!r.session||!r.user?{data:{user:null,session:null,redirectType:null},error:new sr}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign(Object.assign({},r),{redirectType:i??null}),error:a})}catch(r){if(Be(r))return{data:{user:null,session:null,redirectType:null},error:r};throw r}}async signInWithIdToken(e){try{const{options:t,provider:n,token:i,access_token:r,nonce:a}=e,o=await Ye(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:r,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:pn}),{data:l,error:c}=o;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new sr}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOtp(e){var t,n,i,r,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,h=null;this.flowType==="pkce"&&([c,h]=await Pi(this.storage,this.storageKey));const{error:u}=await Ye(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l==null?void 0:l.data)!==null&&t!==void 0?t:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:h},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:u}}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:h}=await Ye(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:h}}throw new rr("You must provide either an email or phone number.")}catch(o){if(Be(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(e){var t,n;try{let i,r;"options"in e&&(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo,r=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await Ye(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:i,xform:pn});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if(Be(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(e){var t,n,i;try{let r=null,a=null;return this.flowType==="pkce"&&([r,a]=await Pi(this.storage,this.storageKey)),await Ye(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:r,code_challenge_method:a}),headers:this.headers,xform:ry})}catch(r){if(Be(r))return{data:null,error:r};throw r}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new Rn;const{error:i}=await Ye(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return{data:{user:null,session:null},error:i}})}catch(e){if(Be(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:n,type:i,options:r}=e,{error:a}=await Ye(this.fetch,"POST",t,{headers:this.headers,body:{email:n,type:i,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},redirectTo:r==null?void 0:r.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in e){const{phone:n,type:i,options:r}=e,{data:a,error:o}=await Ye(this.fetch,"POST",t,{headers:this.headers,body:{phone:n,type:i,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}}});return{data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o}}throw new rr("You must provide either an email or phone number and a type")}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Kn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<ba:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await Kn(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=Ta()}if(this.storage.isServer&&e.user){let a=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,c,h)=>(!a&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,h))})}return{data:{session:e},error:null}}const{session:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{session:null},error:r}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await Ye(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ln}):await this._useSession(async t=>{var n,i,r;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Rn}:await Ye(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(r=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0,xform:Ln})})}catch(t){if(Be(t))return L0(t)&&(await this._removeSession(),await An(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t};throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{const{data:i,error:r}=n;if(r)throw r;if(!i.session)throw new Rn;const a=i.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await Pi(this.storage,this.storageKey));const{data:c,error:h}=await Ye(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t==null?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Ln});if(h)throw h;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Rn;const t=Date.now()/1e3;let n=t,i=!0,r=null;const{payload:a}=wa(e.access_token);if(a.exp&&(n=a.exp,i=n<=t),i){const{session:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!o)return{data:{user:null,session:null},error:null};r=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;r={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return{data:{user:r.user,session:r},error:null}}catch(t){if(Be(t))return{data:{session:null,user:null},error:t};throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new Rn;const{session:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{user:null,session:null},error:r}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async _getSessionFromURL(e,t){try{if(!jt())throw new ar("No browser detected.");if(e.error||e.error_description||e.error_code)throw new ar(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new pc("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ar("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new pc("No code detected.");const{data:b,error:_}=await this._exchangeCodeForSession(e.code);if(_)throw _;const S=new URL(window.location.href);return S.searchParams.delete("code"),window.history.replaceState(window.history.state,"",S.toString()),{data:{session:b.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:i,access_token:r,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=e;if(!r||!o||!a||!c)throw new ar("No session defined in URL");const h=Math.round(Date.now()/1e3),u=parseInt(o);let d=h+u;l&&(d=parseInt(l));const m=d-h;m*1e3<=Ui&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${u}s`);const g=d-u;h-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,d,h):h-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,d,h);const{data:v,error:f}=await this._getUser(r);if(f)throw f;const p={provider_token:n,provider_refresh_token:i,access_token:r,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:v.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:e.type},error:null}}catch(n){if(Be(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await Kn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const{data:i,error:r}=t;if(r)return{error:r};const a=(n=i.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(P0(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return e!=="others"&&(await this._removeSession(),await An(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const t=H0(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,i;try{const{data:{session:r},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(r){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",r),console.error(r)}})}async resetPasswordForEmail(e,t={}){let n=null,i=null;this.flowType==="pkce"&&([n,i]=await Pi(this.storage,this.storageKey,!0));try{return await Ye(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(r){if(Be(r))return{data:null,error:r};throw r}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(t){if(Be(t))return{data:null,error:t};throw t}}async linkIdentity(e){var t;try{const{data:n,error:i}=await this._useSession(async r=>{var a,o,l,c,h;const{data:u,error:d}=r;if(d)throw d;const m=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await Ye(this.fetch,"GET",m,{headers:this.headers,jwt:(h=(c=u.session)===null||c===void 0?void 0:c.access_token)!==null&&h!==void 0?h:void 0})});if(i)throw i;return jt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:e.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(Be(n))return{data:{provider:e.provider,url:null},error:n};throw n}}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,i;const{data:r,error:a}=t;if(a)throw a;return await Ye(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(n=r.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const n=Date.now();return await j0(async i=>(i>0&&await W0(200*Math.pow(2,i-1)),this._debug(t,"refreshing attempt",i),await Ye(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:pn})),(i,r)=>{const a=200*Math.pow(2,i);return r&&Ma(r)&&Date.now()+a-n<Ui})}catch(n){if(this._debug(t,"error",n),Be(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),jt()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await Kn(this.storage,this.storageKey);if(i&&this.userStorage){let a=await Kn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:i.user},await Oi(this.userStorage,this.storageKey+"-user",a)),i.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:Ta()}else if(i&&!i.user&&!i.user){const a=await Kn(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(i.user=a.user,await An(this.storage,this.storageKey+"-user"),await Oi(this.storage,this.storageKey,i)):i.user=Ta()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const r=((t=i.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<ba;if(this._debug(n,`session has${r?"":" not"} expired with margin of ${ba}s`),r){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(console.error(a),Ma(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(i.access_token);!o&&(a!=null&&a.user)?(i.user=a.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new Rn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new Lr;const{data:r,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!r.session)throw new Rn;await this._saveSession(r.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",r.session);const o={session:r.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(r){if(this._debug(i,"error",r),Be(r)){const a={session:null,error:r};return Ma(r)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,t,n=!0){const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const r=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){r.push(l)}});if(await Promise.all(a),r.length>0){for(let o=0;o<r.length;o+=1)console.error(r[o]);throw r[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Oi(this.userStorage,this.storageKey+"-user",{user:t.user});const i=Object.assign({},t);delete i.user;const r=yc(i);await Oi(this.storage,this.storageKey,r)}else{const i=yc(t);await Oi(this.storage,this.storageKey,i)}}async _removeSession(){this._debug("#_removeSession()"),await An(this.storage,this.storageKey),await An(this.storage,this.storageKey+"-code-verifier"),await An(this.storage,this.storageKey+"-user"),this.userStorage&&await An(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&jt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ui);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/Ui);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Ui}ms, refresh threshold is ${$a} ticks`),i<=$a&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof Oh)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!jt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){const i=[`provider=${encodeURIComponent(t)}`];if(n!=null&&n.redirectTo&&i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&i.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[r,a]=await Pi(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(r)}`,code_challenge_method:`${encodeURIComponent(a)}`});i.push(o.toString())}if(n!=null&&n.queryParams){const r=new URLSearchParams(n.queryParams);i.push(r.toString())}return n!=null&&n.skipBrowserRedirect&&i.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${i.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:i,error:r}=t;return r?{data:null,error:r}:await Ye(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,i;const{data:r,error:a}=t;if(a)return{data:null,error:a};const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:c}=await Ye(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=r==null?void 0:r.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(e.factorType==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:i,error:r}=t;if(r)return{data:null,error:r};const{data:a,error:o}=await Ye(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:o})})}catch(t){if(Be(t))return{data:null,error:t};throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:i,error:r}=t;return r?{data:null,error:r}:await Ye(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(Be(t))return{data:null,error:t};throw t}})}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?{data:null,error:n}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){const{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};const n=(e==null?void 0:e.factors)||[],i=n.filter(a=>a.factor_type==="totp"&&a.status==="verified"),r=n.filter(a=>a.factor_type==="phone"&&a.status==="verified");return{data:{all:n,totp:i,phone:r},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var t,n;const{data:{session:i},error:r}=e;if(r)return{data:null,error:r};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:a}=wa(i.access_token);let o=null;a.aal&&(o=a.aal);let l=o;((n=(t=i.user.factors)===null||t===void 0?void 0:t.filter(u=>u.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const h=a.amr||[];return{data:{currentLevel:o,nextLevel:l,currentAuthenticationMethods:h},error:null}}))}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+R0>i)return n;const{data:r,error:a}=await Ye(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!r.keys||r.keys.length===0||(this.jwks=r,this.jwks_cached_at=i,n=r.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:m,error:g}=await this.getSession();if(g||!m.session)return{data:null,error:g};n=m.session.access_token}const{header:i,payload:r,signature:a,raw:{header:o,payload:l}}=wa(n);t!=null&&t.allowExpired||Z0(r.exp);const c=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:m}=await this.getUser(n);if(m)throw m;return{data:{claims:r,header:i,signature:a},error:null}}const h=Q0(i.alg),u=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,u,a,k0(`${o}.${l}`)))throw new Ya("Invalid JWT signature");return{data:{claims:r,header:i,signature:a},error:null}}catch(n){if(Be(n))return{data:null,error:n};throw n}}}vs.nextInstanceID=0;const my=vs;class gy extends my{constructor(e){super(e)}}var _y=function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(s,e||[])).next())})};class vy{constructor(e,t,n){var i,r,a;if(this.supabaseUrl=e,this.supabaseKey=t,!e)throw new Error("supabaseUrl is required.");if(!t)throw new Error("supabaseKey is required.");const o=E0(e),l=new URL(o);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const c=`sb-${l.hostname.split(".")[0]}-auth-token`,h={db:p0,realtime:g0,auth:Object.assign(Object.assign({},m0),{storageKey:c}),global:f0},u=b0(n??{},h);this.storageKey=(i=u.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=u.global.headers)!==null&&r!==void 0?r:{},u.accessToken?(this.accessToken=u.accessToken,this.auth=new Proxy({},{get:(d,m)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(m)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=u.auth)!==null&&a!==void 0?a:{},this.headers,u.global.fetch),this.fetch=x0(t,this._getAccessToken.bind(this),u.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},u.realtime)),this.rest=new Nv(new URL("rest/v1",l).href,{headers:this.headers,schema:u.db.schema,fetch:this.fetch}),this.storage=new h0(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),u.accessToken||this._listenForAuthEvents()}get functions(){return new uv(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t;return _y(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(t=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:null})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:i,storageKey:r,flowType:a,lock:o,debug:l},c,h){const u={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new gy({url:this.authUrl.href,headers:Object.assign(Object.assign({},u),c),storageKey:r,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:i,flowType:a,lock:o,debug:l,fetch:h,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(e){return new Jv(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,n)=>{this._handleTokenChanged(t,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(e,t,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const yy=(s,e,t)=>new vy(s,e,t);function xy(){if(typeof window<"u"||typeof process>"u"||process.version===void 0||process.version===null)return!1;const s=process.version.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}xy()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Mc="https://fxturiiqecyvtwbyiygd.supabase.co",wc="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dHVyaWlxZWN5dnR3YnlpeWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjQ5OTcsImV4cCI6MjA2OTMwMDk5N30.sHbi9jxSew1WCPwoST13DAQ_-b0af1c0zWhJfTq7PhM";let Zt;Mc.includes("your_supabase")||wc.includes("your_supabase")?(console.warn("Supabase not configured. Authentication features will be disabled."),Zt={auth:{getSession:()=>Promise.resolve({data:{session:null}}),signUp:()=>Promise.reject(new Error("Supabase not configured")),signInWithPassword:()=>Promise.reject(new Error("Supabase not configured")),signInWithOAuth:()=>Promise.reject(new Error("Supabase not configured")),signOut:()=>Promise.reject(new Error("Supabase not configured")),resetPasswordForEmail:()=>Promise.reject(new Error("Supabase not configured")),updateUser:()=>Promise.reject(new Error("Supabase not configured")),onAuthStateChange:()=>({data:{subscription:{unsubscribe:()=>{}}}})}}):(Zt=yy(Mc,wc,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),Zt.auth.onAuthStateChange((s,e)=>{var n;console.log("Auth state changed:",s,(n=e==null?void 0:e.user)==null?void 0:n.email);const t=new CustomEvent("authStateChange",{detail:{event:s,session:e,user:e==null?void 0:e.user}});document.dispatchEvent(t)}));class Sy{constructor(){Le(this,"currentUser",null);Le(this,"currentSession",null);this.initialize()}async initialize(){const{data:{session:e}}=await Zt.auth.getSession();this.currentSession=e,this.currentUser=(e==null?void 0:e.user)??null}async signUp(e,t){const{data:n,error:i}=await Zt.auth.signUp({email:e,password:t});if(i)throw i;return n}async signIn(e,t){const{data:n,error:i}=await Zt.auth.signInWithPassword({email:e,password:t});if(i)throw i;return this.currentSession=n.session,this.currentUser=n.user,n}async signInWithGoogle(){const{data:e,error:t}=await Zt.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}});if(t)throw t;return e}async signOut(){const{error:e}=await Zt.auth.signOut();if(e)throw e;this.currentSession=null,this.currentUser=null}async resetPassword(e){const{data:t,error:n}=await Zt.auth.resetPasswordForEmail(e,{redirectTo:`${window.location.origin}/reset-password`});if(n)throw n;return t}async updatePassword(e){const{data:t,error:n}=await Zt.auth.updateUser({password:e});if(n)throw n;return t}isAuthenticated(){return!!this.currentUser}getCurrentUser(){return this.currentUser}getCurrentSession(){return this.currentSession}getAccessToken(){var e;return((e=this.currentSession)==null?void 0:e.access_token)??null}}const dn=new Sy;class Ey{constructor(e,t){Le(this,"isDarkMode",!1);Le(this,"keyboard");Le(this,"renderer");Le(this,"maxCharacters");Le(this,"isUpdating");Le(this,"hasInteracted");Le(this,"elements",{heightUpBtn:null,heightDownBtn:null,textDisplay:null,mobileTextDisplay:null,typeButton:null,clearButton:null,characterCount:null,characterBarSegments:null,warning:null});Le(this,"aiButtonFirstUse");Le(this,"fonts");Le(this,"currentFontIndex");Le(this,"typingStats");this.keyboard=e,this.renderer=t,this.maxCharacters=90,this.isUpdating=!1,this.hasInteracted=!1,this.elements={heightUpBtn:document.getElementById("heightUpBtn"),heightDownBtn:document.getElementById("heightDownBtn"),textDisplay:document.getElementById("textDisplay"),mobileTextDisplay:document.getElementById("mobileTextDisplay"),typeButton:document.getElementById("typeButton"),clearButton:document.getElementById("clearButton"),characterCount:document.getElementById("characterCount"),characterBarSegments:document.getElementById("characterBarSegments"),warning:document.getElementById("warning"),typingSpeed:document.getElementById("typingSpeed"),downloadPoster:document.getElementById("downloadPoster"),remixWithAI:document.getElementById("remixWithAI"),fontSize:document.getElementById("fontSize"),typingSpeedDisplay:document.getElementById("typingSpeedDisplay"),fontName:document.getElementById("fontName"),fontPrev:document.getElementById("fontPrev"),fontNext:document.getElementById("fontNext"),previewModal:document.getElementById("previewModal"),previewText:document.getElementById("previewText"),previewClose:document.getElementById("previewClose"),previewDownload:document.getElementById("previewDownload"),previewRemix:document.getElementById("previewRemix"),previewFontSize:document.getElementById("previewFontSize"),previewImage:document.getElementById("previewImage"),keyboardHeightControl:document.getElementById("keyboardHeight"),keyboardHeightText:document.getElementById("keyboardHeightText"),fontSizeControl:document.getElementById("fontSizeControl"),fontSizeText:document.getElementById("fontSizeText"),textInput:document.getElementById("textInput"),closePreview:document.getElementById("closePreview"),printFromPreview:document.getElementById("printFromPreview"),previewAndPrint:document.getElementById("previewAndPrint"),shadowAngle:document.getElementById("shadowAngle")},this.aiButtonFirstUse=!0,this.fonts=[{name:"System",family:"system-ui, -apple-system, sans-serif"},{name:"Georgia",family:"Georgia, serif"},{name:"Inter",family:"Inter, system-ui, sans-serif"},{name:"Roboto Condensed",family:'"Roboto Condensed", "Arial Narrow", "Helvetica Condensed", sans-serif'}],this.currentFontIndex=0,this.typingStats={startTime:null,endTime:null,characterCount:0,currentWPM:0,isTyping:!1},this.setupElements(),this.setupEventListeners(),this.setupAuthenticationSystem(),this.loadThemePreference(),this.updateDisplays("")}setupElements(){this.elements={heightUpBtn:document.getElementById("heightUp"),heightDownBtn:document.getElementById("heightDown"),textDisplay:document.getElementById("textDisplay"),mobileTextDisplay:document.getElementById("mobileTextDisplay"),typeButton:document.getElementById("type"),clearButton:document.getElementById("clearButton"),characterCount:document.getElementById("characterCount"),characterBarSegments:document.getElementById("characterBarSegments"),warning:document.getElementById("warning"),previewModal:document.getElementById("previewModal"),previewImage:document.getElementById("previewImage"),closePreview:document.getElementById("closePreview"),printFromPreview:document.getElementById("printFromPreview"),previewAndPrint:document.getElementById("previewAndPrint"),shadowAngle:document.getElementById("shadowAngle"),fontPrev:document.getElementById("fontPrev"),fontNext:document.getElementById("fontNext"),fontName:document.getElementById("fontName"),typingSpeed:document.getElementById("typingSpeed")},this.setupAIButtonListener()}async modifyTextWithAI(e){try{if(!dn.isAuthenticated())throw new Error("Please sign in to use AI features");const t="https://fxturiiqecyvtwbyiygd.supabase.co",n=dn.getAccessToken();if(!t||!n)throw new Error("Authentication required. Please sign in to continue.");const i=`${t}/functions/v1/openai`,r=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({text:e})});if(!r.ok){if(r.status===401)throw new Error("Authentication expired. Please sign in again.");const o=await r.json().catch(()=>({}));throw new Error(o.error||`Server error: ${r.status} - ${r.statusText}`)}const a=await r.json();if(!a.text)throw new Error("No text received from the server");return a.text}catch(t){console.error("AI Text Generation Error:",t);let n="Unable to generate text. Please try again.";return t instanceof Error&&(t.message.includes("Please sign in")||t.message.includes("Authentication")?n=t.message:t.message.includes("Failed to fetch")?n="Network error. Please check your connection and try again.":t.message==="Please enter some text first"&&(n=t.message)),this.showError(n),e}}showError(e,t=!0){const n=document.createElement("div");t?n.style.cssText=`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #fee2e2;
        color: #991b1b;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: system-ui;
        font-size: 14px;
        border: 1px solid #fecaca;
        z-index: 2000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `:n.style.cssText=`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #d1fae5;
        color: #065f46;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: system-ui;
        font-size: 14px;
        border: 1px solid #a7f3d0;
        z-index: 2000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.3s ease",setTimeout(()=>n.remove(),300)},3e3)}loadThemePreference(){const e=localStorage.getItem("theme");this.isDarkMode=e==="dark",this.applyTheme()}applyTheme(){this.isDarkMode?(document.documentElement.setAttribute("data-theme","dark"),document.body.style.background="#000000",this.keyboard.scene.scene.background=new Ge(0)):(document.documentElement.setAttribute("data-theme","light"),document.body.style.background="#fcfaf6",this.keyboard.scene.scene.background=new Ge("#fcfaf6")),this.keyboard.updateTheme(this.isDarkMode),this.keyboard.scene.updateFloorTheme(this.isDarkMode),this.updateCharacterBar(this.getDisplayText()),localStorage.setItem("theme",this.isDarkMode?"dark":"light")}setupEventListeners(){this.setupButtonListeners(),this.setupTextInputListeners(),this.setupKeyboardListeners(),this.setupPreviewListeners(),this.setupAIButtonListener(),this.setupThemeToggle(),this.setupFontControls(),this.setupCharacterBarEvents()}setupCharacterBarEvents(){document.addEventListener("updateCharacterBar",e=>{const t=e,{text:n}=t.detail;this.updateCharacterBar(n)})}setupButtonListeners(){var e,t,n,i;(e=this.elements.heightUpBtn)==null||e.addEventListener("click",()=>{var r,a;(r=this.elements.heightUpBtn)==null||r.classList.add("active"),(a=this.elements.heightDownBtn)==null||a.classList.remove("active"),this.keyboard.increaseHeight(),this.updateKeyboardFromText(this.getDisplayText())}),(t=this.elements.heightDownBtn)==null||t.addEventListener("click",async()=>{var r,a;(r=this.elements.heightDownBtn)==null||r.classList.add("active"),(a=this.elements.heightUpBtn)==null||a.classList.remove("active"),this.keyboard.decreaseHeight(),await this.keyboard.clear(),setTimeout(()=>{var o,l;(o=this.elements.heightUpBtn)==null||o.classList.add("active"),(l=this.elements.heightDownBtn)==null||l.classList.remove("active"),this.keyboard.increaseHeight(),this.resetTextDisplays()},500)}),(n=this.elements.clearButton)==null||n.addEventListener("click",async()=>{var r,a;(r=this.elements.heightDownBtn)==null||r.classList.add("active"),(a=this.elements.heightUpBtn)==null||a.classList.remove("active"),await this.keyboard.clear(),setTimeout(()=>{var o,l;(o=this.elements.heightUpBtn)==null||o.classList.add("active"),(l=this.elements.heightDownBtn)==null||l.classList.remove("active"),this.keyboard.increaseHeight(),this.resetTextDisplays()},500)}),(i=this.elements.shadowAngle)==null||i.addEventListener("input",r=>{const a=r.target,o=parseInt(a.value)*Math.PI/180;this.keyboard.scene.updateLightPosition(o)})}setupFontControls(){var e,t;(e=this.elements.fontPrev)==null||e.addEventListener("click",()=>{this.currentFontIndex=(this.currentFontIndex-1+this.fonts.length)%this.fonts.length,this.updateFont()}),(t=this.elements.fontNext)==null||t.addEventListener("click",()=>{this.currentFontIndex=(this.currentFontIndex+1)%this.fonts.length,this.updateFont()}),this.updateFont()}updateFont(){const e=this.fonts[this.currentFontIndex];this.elements.fontName&&(this.elements.fontName.textContent=e.name),this.elements.textDisplay&&(this.elements.textDisplay.style.fontFamily=e.family,this.elements.textDisplay.style.fontWeight="500",this.elements.textDisplay.style.letterSpacing="normal"),this.elements.mobileTextDisplay&&(this.elements.mobileTextDisplay.style.fontFamily=e.family,this.elements.mobileTextDisplay.style.fontWeight="500",this.elements.mobileTextDisplay.style.letterSpacing="normal"),this.keyboard.updateKeyCapFont(e.family,e.name)}setupThemeToggle(){var e;(e=this.elements.shadowAngle)==null||e.addEventListener("click",t=>{const n=t.target,i=n.getBoundingClientRect(),r=t.clientX-i.left,a=i.width,o=parseFloat(n.value)/360*a;Math.abs(r-o)<=20&&(t.preventDefault(),this.isDarkMode=!this.isDarkMode,this.applyTheme())})}setupTextInputListeners(){const e=t=>{if(this.isUpdating)return;const n=t.textContent||"";if(this.trackTypingSession(n),!this.hasInteracted&&n.trim()&&(this.hasInteracted=!0),n.length>this.maxCharacters){const i=window.getSelection();let r=0;i&&i.rangeCount>0&&(r=i.getRangeAt(0).startOffset);const a=n.slice(0,this.maxCharacters);t.textContent=a;const o=Math.min(r,a.length);this.setCursorToEnd(t,o),this.updateDisplays(a);return}this.updateDisplays(n,!0)};[this.elements.textDisplay,this.elements.mobileTextDisplay].forEach(t=>{t&&(t.addEventListener("input",()=>{e(t)}),t.addEventListener("focus",()=>{this.hasInteracted||(t.textContent="",this.updateDisplays(""),this.hasInteracted=!0)}),t.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),this.triggerAIRemix())}),t.addEventListener("paste",n=>{var o;n.preventDefault();const r=(((o=n.clipboardData)==null?void 0:o.getData("text"))||"").replace(/\n/g," ").trim();if(this.hasInteracted||(this.hasInteracted=!0,t.textContent=""),window.innerWidth<=480&&t===this.elements.mobileTextDisplay){const c=(t.textContent||"")+r;t.textContent=c.slice(0,this.maxCharacters)}else{const l=window.getSelection();if(!l)return;const h=l.getRangeAt(0).startOffset,u=t.textContent||"",d=u.slice(0,h)+r+u.slice(h);t.textContent=d.slice(0,this.maxCharacters)}this.updateDisplays(t.textContent||"")}))})}setupKeyboardListeners(){document.addEventListener("keydown",e=>{var r,a,o,l;const t=document.getElementById("authModal"),n=t==null?void 0:t.classList.contains("show");!(((r=document.activeElement)==null?void 0:r.tagName)==="INPUT"||((a=document.activeElement)==null?void 0:a.tagName)==="TEXTAREA"||((o=this.elements.textDisplay)==null?void 0:o.matches(":focus"))||((l=this.elements.mobileTextDisplay)==null?void 0:l.matches(":focus")))&&!n&&this.handleUnfocusedKeyPress(e)}),document.addEventListener("keydown",e=>{var t;e.ctrlKey&&e.key==="Enter"&&((t=this.elements.previewAndPrint)==null||t.click())}),document.addEventListener("keydown",e=>{var t,n,i,r;if(e.key===" "||e.code==="Space"){const a=document.getElementById("authModal"),o=a==null?void 0:a.classList.contains("show");!(((t=document.activeElement)==null?void 0:t.tagName)==="INPUT"||((n=document.activeElement)==null?void 0:n.tagName)==="TEXTAREA"||((i=this.elements.textDisplay)==null?void 0:i.matches(":focus"))||((r=this.elements.mobileTextDisplay)==null?void 0:r.matches(":focus")))&&!o&&window.innerWidth>480&&(e.preventDefault(),this.showPreview())}}),this.setupMobileDoubleTap()}handleUnfocusedKeyPress(e){const t=e.key.toLowerCase(),n=this.getDisplayText();if(e.key==="Backspace"){if(n){const i=n.slice(0,-1);this.updateDisplays(i),this.trackTypingSession(i)}return}if((t===" "||e.code==="Space")&&window.innerWidth<=480){if(e.preventDefault(),n.length<this.maxCharacters){const i=this.hasInteracted?n+" ":" ";this.updateDisplays(i),this.trackTypingSession(i),this.hasInteracted=!0}return}if(this.keyboard.keyObjects[t]&&n.length<this.maxCharacters){this.hasInteracted=!0;const i=n+t;this.updateDisplays(i),this.trackTypingSession(i)}}setupMobileDoubleTap(){}setupPreviewListeners(){var e,t,n,i;(e=this.elements.previewAndPrint)==null||e.addEventListener("click",()=>{this.showPreview()}),(t=this.elements.closePreview)==null||t.addEventListener("click",()=>{this.hidePreview()}),(n=this.elements.printFromPreview)==null||n.addEventListener("click",()=>{this.downloadPoster()}),(i=this.elements.previewModal)==null||i.addEventListener("click",r=>{r.target===this.elements.previewModal&&this.hidePreview()}),document.addEventListener("keydown",r=>{var a;r.key==="Escape"&&((a=this.elements.previewModal)==null?void 0:a.style.display)==="block"&&(r.preventDefault(),this.hidePreview())}),document.addEventListener("keyup",r=>{var a;r.key==="Escape"&&((a=this.elements.previewModal)==null?void 0:a.style.display)==="block"&&(r.preventDefault(),r.stopPropagation(),this.hidePreview())})}async triggerAIRemix(){const e=document.getElementById("aiButton");if(!e)return;if(!dn.isAuthenticated()||e.classList.contains("pseudo-disabled")){const n=document.getElementById("authModal");n==null||n.classList.add("show"),this.switchAuthTab("login");return}if(e.disabled)return;this.aiButtonFirstUse&&(e.classList.remove("attention"),this.aiButtonFirstUse=!1);const t=this.getDisplayText();if(!t||t==="type something and click Reword or just hit enter"){const n="Bend the grid. Break the rules. Let letters dance on empty space.";this.hasInteracted=!0,await this.keyboard.animateTypingSequence(n),this.updateCharacterBar(n);return}e.disabled=!0,e.textContent="✦Rewording...";try{t&&t.trim()&&(await this.keyboard.animateBackspaceSequence(t),this.updateDisplays(""));const n=await this.modifyTextWithAI(t);this.hasInteracted=!0,await this.keyboard.animateTypingSequence(n),setTimeout(()=>{const i=document.getElementById("previewAndPrint");i&&(i.classList.remove("bounce"),i.classList.add("bounce"),setTimeout(()=>{i.classList.remove("bounce")},3200))},100)}catch(n){console.error("AI Button Error:",n),this.showError("Unable to process text. Please try again.")}finally{e.disabled=!1,e.textContent="Reword ✦"}}setupAuthenticationSystem(){const e=document.getElementById("authContainer"),t=document.getElementById("loginBtn"),n=document.getElementById("userMenu"),i=document.getElementById("userEmail"),r=document.getElementById("logoutBtn"),a=document.getElementById("authModal"),o=document.getElementById("closeAuthModal"),l=document.getElementById("loginTab"),c=document.getElementById("signupTab"),h=document.getElementById("loginFormElement"),u=document.getElementById("signupFormElement"),d=document.getElementById("googleLoginBtn"),m=document.getElementById("googleSignupBtn");!e||!t||!n||!i||!r||!a||(e.classList.remove("hidden"),t.addEventListener("click",()=>{a.classList.add("show"),this.switchAuthTab("login")}),r.addEventListener("click",async()=>{try{await dn.signOut()}catch(g){console.error("Logout error:",g),this.showError("Failed to sign out. Please try again.")}}),o==null||o.addEventListener("click",()=>{a.classList.remove("show")}),a.addEventListener("click",g=>{g.target===a&&a.classList.remove("show")}),l==null||l.addEventListener("click",()=>this.switchAuthTab("login")),c==null||c.addEventListener("click",()=>this.switchAuthTab("signup")),h==null||h.addEventListener("submit",async g=>{g.preventDefault();const v=g.target,f=v.querySelector("#loginEmail"),p=v.querySelector("#loginPassword");!f||!p||await this.handleLogin(f.value,p.value)}),u==null||u.addEventListener("submit",async g=>{g.preventDefault();const v=g.target,f=v.querySelector("#signupEmail"),p=v.querySelector("#signupPassword"),b=v.querySelector("#confirmPassword");if(!(!f||!p||!b)){if(p.value!==b.value){this.showError("Passwords do not match");return}await this.handleSignup(f.value,p.value)}}),d==null||d.addEventListener("click",async()=>{await this.handleGoogleAuth()}),m==null||m.addEventListener("click",async()=>{await this.handleGoogleAuth()}),document.addEventListener("authStateChange",g=>{const{session:v,user:f}=g.detail;this.updateAuthUI(v,f)}),this.updateAuthUI(dn.getCurrentSession(),dn.getCurrentUser()))}switchAuthTab(e){const t=document.getElementById("loginTab"),n=document.getElementById("signupTab"),i=document.getElementById("loginForm"),r=document.getElementById("signupForm");!t||!n||!i||!r||(e==="login"?(t.classList.add("active"),n.classList.remove("active"),i.classList.remove("hidden"),r.classList.add("hidden")):(n.classList.add("active"),t.classList.remove("active"),r.classList.remove("hidden"),i.classList.add("hidden")))}async handleLogin(e,t){const n=document.getElementById("loginSubmit");if(!n)return;const i=n.textContent;n.disabled=!0,n.textContent="Signing In...";try{await dn.signIn(e,t);const r=document.getElementById("authModal");r==null||r.classList.remove("show")}catch(r){console.error("Login error:",r),this.showError("Failed to sign in. Please check your credentials.")}finally{n.disabled=!1,n.textContent=i}}async handleSignup(e,t){const n=document.getElementById("signupSubmit");if(!n)return;const i=n.textContent;n.disabled=!0,n.textContent="Creating Account...";try{await dn.signUp(e,t),this.showError("Please check your email to verify your account.",!1);const r=document.getElementById("authModal");r==null||r.classList.remove("show")}catch(r){console.error("Signup error:",r),this.showError("Failed to create account. Please try again.")}finally{n.disabled=!1,n.textContent=i}}async handleGoogleAuth(){try{await dn.signInWithGoogle()}catch(e){console.error("Google auth error:",e),this.showError("Failed to sign in with Google. Please try again.")}}updateAuthUI(e,t){const n=document.getElementById("authContainer"),i=document.getElementById("loginBtn"),r=document.getElementById("userMenu"),a=document.getElementById("userEmail"),o=document.getElementById("aiButton");!n||!i||!r||!a||!o||(e&&t?(i.classList.add("hidden"),r.classList.remove("hidden"),a.textContent=t.email||"User",o.disabled=!1,o.classList.remove("pseudo-disabled")):(i.classList.remove("hidden"),r.classList.add("hidden"),o.disabled=!1,o.classList.add("pseudo-disabled")))}setupAIButtonListener(){const e=document.getElementById("aiButton");e&&e.addEventListener("click",async t=>{t.preventDefault(),await this.triggerAIRemix()})}getDisplayText(){var t,n;const e=((n=(t=this.elements.textDisplay)==null?void 0:t.textContent)==null?void 0:n.trim())||"";return this.hasInteracted?e:""}updateDisplays(e,t=!1){const n=!this.hasInteracted&&!e?"type something and click Reword or just hit enter":e,i=!this.hasInteracted&&!e;t?(this.elements.textDisplay&&(i?this.elements.textDisplay.setAttribute("data-placeholder","true"):this.elements.textDisplay.removeAttribute("data-placeholder")),this.elements.mobileTextDisplay&&(i?this.elements.mobileTextDisplay.setAttribute("data-placeholder","true"):this.elements.mobileTextDisplay.removeAttribute("data-placeholder"))):(this.elements.textDisplay&&(this.elements.textDisplay.textContent=n,i?this.elements.textDisplay.setAttribute("data-placeholder","true"):this.elements.textDisplay.removeAttribute("data-placeholder")),this.elements.mobileTextDisplay&&(this.elements.mobileTextDisplay.textContent=n,i?this.elements.mobileTextDisplay.setAttribute("data-placeholder","true"):this.elements.mobileTextDisplay.removeAttribute("data-placeholder"))),this.updateCharacterCount(e),this.updateKeyboardFromText(e),this.updateTypingSpeedDisplay()}resetTextDisplays(){this.hasInteracted=!1,this.elements.textDisplay&&(this.elements.textDisplay.textContent="",this.elements.textDisplay.removeAttribute("data-placeholder"),this.elements.textDisplay.style.direction="ltr",this.elements.textDisplay.style.textAlign="left"),this.elements.mobileTextDisplay&&(this.elements.mobileTextDisplay.textContent="",this.elements.mobileTextDisplay.removeAttribute("data-placeholder"),this.elements.mobileTextDisplay.style.direction="ltr",this.elements.mobileTextDisplay.style.textAlign="left"),this.updateDisplays(""),this.resetTypingStats()}setCursorToEnd(e,t){var n;try{const i=document.createRange(),r=window.getSelection();if(e.childNodes.length>0){const a=e.childNodes[0],o=((n=a.textContent)==null?void 0:n.length)||0,l=t!==void 0?Math.min(t,o):o;i.setStart(a,l),i.setEnd(a,l)}else i.setStart(e,0),i.setEnd(e,0);r==null||r.removeAllRanges(),r==null||r.addRange(i)}catch(i){console.debug("Could not set cursor to end:",i)}}updateCharacterCount(e){const t=e.length;this.elements.characterCount&&(this.elements.characterCount.textContent=`${t}/${this.maxCharacters} characters`),this.elements.characterBarSegments&&this.updateCharacterBar(e)}resetTypingStats(){this.typingStats={startTime:null,endTime:null,characterCount:0,currentWPM:0,isTyping:!1},this.updateTypingSpeedDisplay()}hidePreview(){this.elements.previewModal&&(this.elements.previewModal.style.display="none")}downloadPoster(){try{const e=this.generatePosterImage(),t=document.createElement("a"),n=this.getDisplayText(),i=n?`keycastle-poster-${n.substring(0,20).replace(/[^a-zA-Z0-9]/g,"-")}.png`:"keycastle-poster.png";e.toBlob(r=>{if(r){const a=URL.createObjectURL(r);t.href=a,t.download=i,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(a),this.showError("Poster downloaded successfully!",!1)}},"image/png",1)}catch(e){console.error("Error downloading poster:",e),this.showError("Failed to download poster. Please try again.")}}showPreview(){if(!(!this.elements.previewModal||!this.elements.previewImage))try{const e=this.generatePosterImage();this.elements.previewImage.src=e.toDataURL("image/png"),this.elements.previewModal.style.display="block"}catch(e){console.error("Error generating preview:",e),this.showError("Failed to generate preview. Please try again.")}}roundRect(e,t,n,i,r,a,o=!1,l=!0){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.quadraticCurveTo(t+i,n,t+i,n+a),e.lineTo(t+i,n+r-a),e.quadraticCurveTo(t+i,n+r,t+i-a,n+r),e.lineTo(t+a,n+r),e.quadraticCurveTo(t,n+r,t,n+r-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath(),o&&e.fill(),l&&e.stroke()}drawSegmentLabel(e,t,n,i,r,a,o,l="#000",c="#fff"){e.save(),e.fillStyle=c,this.roundRect(e,i,r,a,o,4,!0,!1);let h=Math.min(12,o*.6),u;const d=n>1?`${t} (${n})`:t;do{if(e.font=`${h}px system-ui, sans-serif`,u=e.measureText(d).width,u<=a-10)break;h-=.5}while(h>8);e.fillStyle=l,e.textAlign="center",e.textBaseline="middle";const m=i+a/2,g=r+o/2;e.fillText(t,m,g),e.restore()}updateTypingSpeedDisplay(){if(!this.elements.typingSpeedDisplay)return;const e=this.typingStats.currentWPM||0;this.elements.typingSpeedDisplay.textContent=`${e} WPM`,e>60?this.elements.typingSpeedDisplay.style.color="#4CAF50":e>30?this.elements.typingSpeedDisplay.style.color="#FFC107":this.elements.typingSpeedDisplay.style.color="#F44336"}trackTypingSession(e){const t=Date.now();if(this.typingStats.isTyping||(this.typingStats.startTime=t,this.typingStats.characterCount=0,this.typingStats.isTyping=!0),this.typingStats.characterCount=e.length,this.typingStats.startTime){const n=(t-this.typingStats.startTime)/6e4;this.typingStats.currentWPM=Math.round(e.length/5/Math.max(.1,n))}this.updateTypingSpeedDisplay()}updateCharacterBar(e){if(!this.elements.characterBarSegments||(this.elements.characterBarSegments.innerHTML="",!e||e==="type something and click Reword or just hit enter"||!this.hasInteracted))return;const t={};if(e.toLowerCase().split("").forEach(a=>{/[a-z0-9]/.test(a)&&(t[a]=(t[a]||0)+1)}),Object.keys(t).length===0)return;const n=this.calculateMaxCharactersForWidth(window.innerWidth),i=Object.entries(t).sort(([,a],[,o])=>o-a).slice(0,n),r=Object.entries(t).slice(n).reduce((a,[,o])=>a+o,0);i.forEach(([a,o],l)=>{this.addCharacterBarSegment(a,o,l===0,l===i.length-1&&r===0)}),r>0&&this.addOthersSegment(r)}addCharacterBarSegment(e,t,n,i){if(!this.elements.characterBarSegments)return;const r=document.createElement("div");r.className="bar-segment",r.style.flexGrow=t.toString();const a=this.getCharacterFillColor(e,t);r.style.background=a,n&&(r.style.borderTopLeftRadius="4px",r.style.borderBottomLeftRadius="4px"),i&&(r.style.borderTopRightRadius="4px",r.style.borderBottomRightRadius="4px");const o=document.createElement("div");o.className="bar-label",o.textContent=`${e} (${t})`;const l=document.createElement("div");l.className="bar-line",r.appendChild(l),r.appendChild(o),this.elements.characterBarSegments.appendChild(r)}getCharacterFillColor(e,t){const n=e.charCodeAt(0),i=n*137.5%360,r=70+n%20,a=50+n%10-5,o=Math.min(.2+t*.02,.8);return`hsla(${i}, ${r}%, ${a}%, ${o})`}addOthersSegment(e){if(!this.elements.characterBarSegments)return;const t=document.createElement("div");t.className="bar-segment",t.style.flexGrow=e.toString();const n=this.isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)";t.style.background=n,t.style.borderTopRightRadius="4px",t.style.borderBottomRightRadius="4px";const i=document.createElement("div");i.className="bar-label",i.textContent=`others (${e})`;const r=document.createElement("div");r.className="bar-line",t.appendChild(r),t.appendChild(i),this.elements.characterBarSegments.appendChild(t)}calculateMaxCharactersForWidth(e){return e<=320?2:e<=480?3:e<=640?4:e<=900?5:e<=1200?6:7}updateKeyboardFromText(e){if(!this.isUpdating){this.isUpdating=!0;try{this.keyboard.updateFromText(e)}catch(t){console.error("Error updating keyboard:",t)}finally{this.isUpdating=!1}}}generatePosterImage(){const e=document.createElement("canvas"),t=e.getContext("2d");if(!t)throw new Error("Could not get canvas context");const n=this.renderer.domElement.width,i=this.renderer.domElement.height;e.width=n,e.height=i,t.drawImage(this.renderer.domElement,0,0);const r=this.getDisplayText();return r&&this.drawPosterText(t,r,n,i),e}drawPosterText(e,t,n,i){const r=window.innerWidth<=480,a=Math.min(n,i)*.08,o=Math.max(36,Math.min(120,a)),l=r?o*.4:o*.28,c=o*.15,h=Math.min(n,i)*.08,u=Math.min(n,i)*.15,d=Math.max(24,Math.min(120,h)),m=Math.max(50,Math.min(200,u)),g={margin:{side:d,top:m},title:{fontSize:o,color:this.isDarkMode?"#ffffff":"#000000",lineHeight:Math.round(o),maxWidth:r?n*.8:n*.7},stats:{font:`500 ${Math.round(l)}px system-ui`,fontSize:Math.round(l),color:this.isDarkMode?"#cccccc":"#333333",spacing:r?32:48},bar:{height:r?12:18,spacing:r?48:60,labelFont:`600 ${Math.round(c)}px system-ui`,bottomMargin:r?72:120,lineHeight:Math.round(c*1.5)}},v=i-g.bar.bottomMargin-10,f=this.drawTitle(e,t,g),p=r?f+20:v-g.stats.spacing-64;this.drawStats(e,t,g,p),this.drawCharacterBar(e,t,g,n,i,r)}drawTitle(e,t,n){const i=this.fonts[this.currentFontIndex],r=Math.round(n.title.fontSize);e.font=`500 ${r}px ${i.family}`,e.fillStyle=n.title.color,e.textAlign="left";const a=t.split(" "),o=this.getTextLines(a,e,n.title.maxWidth);let l=n.margin.top;return o.forEach(c=>{e.fillText(c,n.margin.side,l),l+=n.title.lineHeight}),l}getTextLines(e,t,n){const i=[];let r="";return e.forEach(a=>{const o=r?`${r} ${a}`:a;t.measureText(o).width>n?(i.push(r),r=a):r=o}),r&&i.push(r),i}drawStats(e,t,n,i){const r={};t.toLowerCase().split("").forEach(h=>{this.keyboard.keyObjects[h]&&(r[h]=(r[h]||0)+1)});const a=Object.values(r).reduce((h,u)=>h+u,0),o=Object.keys(r).length,l=this.fonts[this.currentFontIndex].name;e.font=n.stats.font,e.fillStyle=n.stats.color,e.textAlign="left",e.fillText(`${a} characters · ${o} unique keys`,n.margin.side,i),e.font=`700 ${Math.round(n.stats.fontSize)}px system-ui`;const c=Math.round(n.stats.fontSize*1.2);e.fillText(`In use: ${l}`,n.margin.side,i+c)}drawCharacterBar(e,t,n,i,r,a=!1){var p,b;if(!((p=n==null?void 0:n.bar)!=null&&p.bottomMargin)||!((b=n==null?void 0:n.margin)!=null&&b.side)){console.error("Invalid config object for drawCharacterBar");return}const o=r-n.bar.bottomMargin,l=i-n.margin.side*2,c=n.bar.height||30,h={};t.toLowerCase().split("").forEach(_=>{/[a-z0-9]/.test(_)&&(h[_]=(h[_]||0)+1)});const u=Object.values(h).reduce((_,S)=>_+S,0);if(u===0)return;const d=this.calculateMaxCharactersForWidth(i),m=Object.entries(h).sort(([,_],[,S])=>S-_),g=m.slice(0,d),v=m.slice(d).reduce((_,[,S])=>_+S,0);let f=n.margin.side;if(g.forEach(([_,S],L)=>{const A=S/u*l;A>0&&(this.drawCharacterSegment(e,_,S,f,o,A,c,L===0,L===g.length-1&&v===0),f+=A)}),v>0){const _=v/u*l;_>0&&this.drawOthersSegment(e,v,f,o,_,c)}}drawCharacterSegment(e,t,n,i,r,a,o,l=!1,c=!1){if(!t||t.trim()==="")return;const h=Math.max(a,2),u=this.getCharacterColor(t,n);e.strokeStyle=u,e.lineWidth=1,e.beginPath(),this.roundRect(e,i,r,h,o,6,l,c),e.stroke(),this.drawSegmentLabel(e,t,n,i,r,h,o,this.getCharacterColor(t,n))}getCharacterColor(e,t=1){const n=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD","#D4A5A5","#FFD670","#70D6FF","#FF70A6","#89CFF0"],i=e.charCodeAt(0);return n[i%n.length]}drawOthersSegment(e,t,n,i,r,a){e.save();const o=Math.max(r,2),l=this.isDarkMode?"rgba(60, 65, 66, 0.1)":"rgba(0, 0, 0, 0.05)";this.roundRect(e,n,i,o,a,6,!0,!1),e.fillStyle=l,e.fill();const c=this.isDarkMode?"hsl(0, 0%, 60%)":"hsl(0, 0%, 25%)";e.strokeStyle=c,e.lineWidth=1,this.roundRect(e,n,i,o,a,6,!1,!0),e.stroke();const h=this.isDarkMode?"#ffffff":"#000000";this.drawSegmentLabel(e,"...",t,n,i,o,a,h,"transparent"),e.restore()}}class by{constructor(){Le(this,"scene");Le(this,"keyboard");Le(this,"isRunning");this.scene=null,this.keyboard=null,this.isRunning=!1}initialize(){try{this.scene=new Q_,this.keyboard=new rv(this.scene),new Ey(this.keyboard,this.scene.renderer),this.isRunning=!0,this.animate(),this.setupEventListeners()}catch(e){console.error("Failed to initialize application:",e),this.handleInitializationError(e)}}setupEventListeners(){window.addEventListener("resize",()=>{this.scene&&this.scene.handleResize()}),window.addEventListener("error",this.handleGlobalError.bind(this)),window.addEventListener("unhandledrejection",this.handleUnhandledRejection.bind(this))}animate(){if(this.isRunning)try{requestAnimationFrame(this.animate.bind(this)),this.keyboard&&this.keyboard.update(),this.scene&&(this.scene.controls.update(),this.scene.renderer.render(this.scene.scene,this.scene.camera))}catch(e){console.error("Animation loop error:",e),this.handleRuntimeError(e)}}handleInitializationError(e){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fee2e2;
      color: #991b1b;
      padding: 20px;
      border-radius: 8px;
      font-family: system-ui;
      text-align: center;
      z-index: 9999;
    `;const n=e instanceof Error?e.message:String(e);t.innerHTML=`
      <h2>Failed to start application</h2>
     <p>Please refresh the page or try again later.</p>
     <details style="margin-top: 10px; text-align: left; font-size: 12px;">
       <summary>Technical details</summary>
       <pre style="white-space: pre-wrap; margin-top: 5px;">${n}</pre>
     </details>
    `,document.body.appendChild(t)}handleRuntimeError(e){console.error("Runtime error:",e),this.isRunning=!1}handleGlobalError(e){console.error("Global error:",e.error),e.preventDefault()}handleUnhandledRejection(e){console.error("Unhandled promise rejection:",e.reason),e.preventDefault()}shutdown(){this.isRunning=!1,this.scene&&(this.scene.renderer.dispose(),this.scene.controls.dispose()),this.scene&&window.removeEventListener("resize",this.scene.handleResize)}}document.addEventListener("DOMContentLoaded",()=>{const s=new by;s.initialize(),window.addEventListener("pagehide",()=>{s.shutdown()},{once:!0})});
