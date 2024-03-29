/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=window,Ce=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),fe=new WeakMap;let et=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&fe.set(t,e))}return e}toString(){return this.cssText}};const u=i=>new et(typeof i=="string"?i:i+"",void 0,je),N=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,r,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new et(t,i,je)},Mt=(i,e)=>{Ce?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),r=ce.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=t.cssText,i.appendChild(o)})},Te=Ce?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return u(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pe;const de=window,Le=de.trustedTypes,ht=Le?Le.emptyScript:"",Se=de.reactiveElementPolyfillSupport,ye={toAttribute(i,e){switch(e){case Boolean:i=i?ht:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},tt=(i,e)=>e!==i&&(e==e||i==i),Me={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:tt},me="finalized";let Q=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const r=this._$Ep(o,t);r!==void 0&&(this._$Ev.set(r,o),e.push(r))}),e}static createProperty(e,t=Me){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,o,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Me}static finalize(){if(this.hasOwnProperty(me))return!1;this[me]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of o)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)t.unshift(Te(r))}else e!==void 0&&t.push(Te(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Me){var r;const n=this.constructor._$Ep(e,o);if(n!==void 0&&o.reflect===!0){const s=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:ye).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var o;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const s=r.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:ye;this._$El=n,this[n]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let r=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||tt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(o)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Q[me]=!0,Q.elementProperties=new Map,Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Se==null||Se({ReactiveElement:Q}),((pe=de.reactiveElementVersions)!==null&&pe!==void 0?pe:de.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;const ge=window,X=ge.trustedTypes,ke=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,De="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,it="?"+f,At=`<${it}>`,Z=document,K=()=>Z.createComment(""),$=i=>i===null||typeof i!="object"&&typeof i!="function",ot=Array.isArray,xt=i=>ot(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,Oe=/>/g,E=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Pe=/"/g,rt=/^(?:script|style|textarea|title)$/i,bt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),l=bt(1),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ge=new WeakMap,O=Z.createTreeWalker(Z,129,null,!1);function nt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(e):e}const Nt=(i,e)=>{const t=i.length-1,o=[];let r,n=e===2?"<svg>":"",s=q;for(let d=0;d<t;d++){const c=i[d];let g,I,p=-1,h=0;for(;h<c.length&&(s.lastIndex=h,I=s.exec(c),I!==null);)h=s.lastIndex,s===q?I[1]==="!--"?s=Ee:I[1]!==void 0?s=Oe:I[2]!==void 0?(rt.test(I[2])&&(r=RegExp("</"+I[2],"g")),s=E):I[3]!==void 0&&(s=E):s===E?I[0]===">"?(s=r??q,p=-1):I[1]===void 0?p=-2:(p=s.lastIndex-I[2].length,g=I[1],s=I[3]===void 0?E:I[3]==='"'?Pe:Ze):s===Pe||s===Ze?s=E:s===Ee||s===Oe?s=q:(s=E,r=void 0);const y=s===E&&i[d+1].startsWith("/>")?" ":"";n+=s===q?c+At:p>=0?(o.push(g),c.slice(0,p)+De+c.slice(p)+f+y):c+f+(p===-2?(o.push(void 0),d):y)}return[nt(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),o]};let ve=class st{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0;const d=e.length-1,c=this.parts,[g,I]=Nt(e,t);if(this.el=st.createElement(g,o),O.currentNode=this.el.content,t===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(r=O.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const h of r.getAttributeNames())if(h.endsWith(De)||h.startsWith(f)){const y=I[s++];if(p.push(h),y!==void 0){const se=r.getAttribute(y.toLowerCase()+De).split(f),ae=/([.?@])?(.*)/.exec(y);c.push({type:1,index:n,name:ae[2],strings:se,ctor:ae[1]==="."?mt:ae[1]==="?"?vt:ae[1]==="@"?Ct:ue})}else c.push({type:6,index:n})}for(const h of p)r.removeAttribute(h)}if(rt.test(r.tagName)){const p=r.textContent.split(f),h=p.length-1;if(h>0){r.textContent=X?X.emptyScript:"";for(let y=0;y<h;y++)r.append(p[y],K()),O.nextNode(),c.push({type:2,index:++n});r.append(p[h],K())}}}else if(r.nodeType===8)if(r.data===it)c.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(f,p+1))!==-1;)c.push({type:7,index:n}),p+=f.length-1}n++}}static createElement(e,t){const o=Z.createElement("template");return o.innerHTML=e,o}};function R(i,e,t=i,o){var r,n,s,d;if(e===T)return e;let c=o!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[o]:t._$Cl;const g=$(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==g&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),g===void 0?c=void 0:(c=new g(i),c._$AT(i,t,o)),o!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[o]=c:t._$Cl=c),c!==void 0&&(e=R(i,c._$AS(i,e.values),c,o)),e}class yt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Z).importNode(o,!0);O.currentNode=n;let s=O.nextNode(),d=0,c=0,g=r[0];for(;g!==void 0;){if(d===g.index){let I;g.type===2?I=new te(s,s.nextSibling,this,e):g.type===1?I=new g.ctor(s,g.name,g.strings,this,e):g.type===6&&(I=new jt(s,this,e)),this._$AV.push(I),g=r[++c]}d!==(g==null?void 0:g.index)&&(s=O.nextNode(),d++)}return O.currentNode=Z,n}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class te{constructor(e,t,o,r){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),$(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&$(this._$AH)?this._$AA.nextSibling.data=e:this.$(Z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ve.createElement(nt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(o);else{const s=new yt(n,this),d=s.u(this.options);s.v(o),this.$(d),this._$AH=s}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new ve(e)),t}T(e){ot(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new te(this.k(K()),this.k(K()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let ue=class{constructor(e,t,o,r,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,r){const n=this.strings;let s=!1;if(n===void 0)e=R(this,e,t,0),s=!$(e)||e!==this._$AH&&e!==T,s&&(this._$AH=e);else{const d=e;let c,g;for(e=n[0],c=0;c<n.length-1;c++)g=R(this,d[o+c],t,c),g===T&&(g=this._$AH[c]),s||(s=!$(g)||g!==this._$AH[c]),g===x?e=x:e!==x&&(e+=(g??"")+n[c+1]),this._$AH[c]=g}s&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},mt=class extends ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}};const Dt=X?X.emptyScript:"";let vt=class extends ue{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,Dt):this.element.removeAttribute(this.name)}},Ct=class extends ue{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=R(this,e,t,0))!==null&&o!==void 0?o:x)===T)return;const r=this._$AH,n=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==x&&(r===x||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},jt=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}};const Ue=ge.litHtmlPolyfillSupport;Ue==null||Ue(ve,te),((he=ge.litHtmlVersions)!==null&&he!==void 0?he:ge.litHtmlVersions=[]).push("2.8.0");const zt=(i,e,t)=>{var o,r;const n=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let s=n._$litPart$;if(s===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=s=new te(e.insertBefore(K(),d),d,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,be;class b extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return T}}b.finalized=!0,b._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:b});const Ye=globalThis.litElementPolyfillSupport;Ye==null||Ye({LitElement:b});((be=globalThis.litElementVersions)!==null&&be!==void 0?be:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=i=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(i,e):((t,o)=>{const{kind:r,elements:n}=o;return{kind:r,elements:n,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},ft=(i,e,t)=>{e.constructor.createProperty(t,i)};function a(i){return(e,t)=>t!==void 0?ft(i,e,t):wt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tt(i){return a({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ct=i=>(...e)=>({_$litDirective$:i,values:e});let lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=ct(class extends lt{constructor(i){var e;if(super(i),i.type!==at.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,o;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}const r=i.element.classList;this.it.forEach(n=>{n in e||(r.remove(n),this.it.delete(n))});for(const n in e){const s=!!e[n];s===this.it.has(n)||!((o=this.nt)===null||o===void 0)&&o.has(n)||(s?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return T}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt="important",Lt=" !"+dt,gt=ct(class extends lt{constructor(i){var e;if(super(i),i.type!==at.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const o=i[t];return o==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ht===void 0){this.ht=new Set;for(const o in e)this.ht.add(o);return this.render(e)}this.ht.forEach(o=>{e[o]==null&&(this.ht.delete(o),o.includes("-")?t.removeProperty(o):t[o]="")});for(const o in e){const r=e[o];if(r!=null){this.ht.add(o);const n=typeof r=="string"&&r.endsWith(Lt);o.includes("-")||n?t.setProperty(o,n?r.slice(0,-11):r,n?dt:""):t[o]=r}}return T}});N`
  :host {
    /* Core colors */
    --color-radix-green-1: #00ab84;
    --color-radix-green-2: #00c389;
    --color-radix-green-3: #21ffbe;
    --color-radix-blue-1: #060f8f;
    --color-radix-blue-2: #052cc0;
    --color-radix-blue-3: #20e4ff;
    --color-light: #ffffff;
    --color-dark: #000000;

    /* Accent colors */
    --color-accent-red: #ef4136;
    --color-accent-blue: #00aeef;
    --color-accent-yellow: #fff200;
    --color-alert: #e59700;
    --color-radix-error-red-1: #c82020;
    --color-radix-error-red-2: #fcebeb;

    /* Neutral colors */
    --color-grey-1: #003057;
    --color-grey-2: #8a8fa4;
    --color-grey-3: #ced0d6;
    --color-grey-4: #e2e5ed;
    --color-grey-5: #f4f5f9;
  }
`;const D=N`
  :host {
    font-family: 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  :host([mode='light']) {
    --radix-popover-background: color-mix(in srgb, #f4f5f9 20%, transparent);
    --radix-popover-background-hover: var(--color-radix-blue-1);
    --radix-popover-border-color: var(--color-radix-blue-2);
    --radix-popover-text-color: var(--color-grey-1);

    --radix-popover-tabs-background: color-mix(
      in srgb,
      var(--color-grey-2) 15%,
      transparent
    );
    --radix-popover-tabs-button-active-background: var(--color-light);

    --radix-link-color: var(--color-radix-blue-2);

    --radix-card-background: var(--color-light);
    --radix-card-text-color: var(--color-grey-1);
    --radix-card-text-dimmed-color: var(--color-grey-2);
    --radix-card-inverted-background: var(--color-grey-1);
    --radix-card-inverted-text-color: var(--color-light);

    --radix-avatar-border-color: var(--color-grey-5);

    --radix-button-background: var(--color-light);
    --radix-button-text-color: var(--color-radix-blue-2);
    --radix-connect-now-disabled-button-background: color-mix(
      in srgb,
      var(--color-light) 40%,
      transparent
    );
    --radix-connect-now-disabled-button-text: var(--color-light);

    color: var(--color-grey-1);
  }

  :host([mode='dark']) {
    --radix-popover-background: color-mix(in srgb, #f4f5f9 20%, transparent);
    --radix-popover-background-hover: var(--color-radix-blue-1);
    --radix-popover-border-color: var(--color-radix-blue-2);
    --radix-popover-text-color: var(--color-light);

    --radix-popover-tabs-background: color-mix(
      in srgb,
      var(--color-dark) 60%,
      transparent
    );
    --radix-popover-tabs-button-active-text-color: var(--color-light);
    --radix-popover-tabs-button-active-background: #515151;

    --radix-link-color: var(--color-white);

    --radix-card-background: #515151;
    --radix-card-text-color: var(--color-light);
    --radix-card-text-dimmed-color: var(--color-grey-3);
    --radix-card-inverted-background: var(--color-grey-5);
    --radix-card-inverted-text-color: var(--color-grey-1);

    --radix-avatar-border-color: #656565;

    --radix-button-background: color-mix(
      in srgb,
      var(--color-dark) 40%,
      transparent
    );
    --radix-button-text-color: var(--color-light);
    --radix-connect-now-disabled-button-background: color-mix(
      in srgb,
      var(--color-dark) 40%,
      transparent
    );
    --radix-connect-now-disabled-button-text: color-mix(
      in srgb,
      var(--color-light) 20%,
      transparent
    );

    color: var(--color-light);
  }

  button {
    font-weight: 500;
    transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);
    border-radius: 12px;
    border: none;
    background: var(--radix-button-background);
    color: var(--radix-button-text-color);
    font-size: 14px;
    font-weight: 600;
  }

  :host([theme='radix-blue']) {
    --radix-connect-button-background: var(--color-radix-blue-2);
    --radix-connect-button-background-hover: var(--color-radix-blue-1);
    --radix-connect-button-border-color: var(--color-radix-blue-2);
    --radix-connect-button-text-color: var(--color-light);
  }

  :host([theme='black']) {
    --radix-connect-button-background: var(--color-dark);
    --radix-connect-button-background-hover: #3e3e3e;
    --radix-connect-button-border-color: var(--color-dark);
    --radix-connect-button-text-color: var(--color-light);
  }

  :host([theme='white-with-outline']) {
    --radix-connect-button-background: var(--color-light);
    --radix-connect-button-background-hover: var(--color-grey-5);
    --radix-connect-button-border-color: var(--color-dark);
    --radix-connect-button-text-color: var(--color-dark);
  }

  :host([theme='white']) {
    --radix-connect-button-background: var(--color-light);
    --radix-connect-button-background-hover: var(--color-grey-5);
    --radix-connect-button-border-color: var(--color-light);
    --radix-connect-button-text-color: var(--color-dark);
  }
`,H={pending:"pending",success:"success",error:"error",default:"default"},v={light:"light",dark:"dark"};var St=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,ze=(i,e,t,o)=>{for(var r=o>1?void 0:o?kt(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&St(e,t,r),r};let _=class extends b{constructor(){super(...arguments),this.theme=v.light,this.active="sharing"}onClick(i,e){this.dispatchEvent(new CustomEvent("onClick",{detail:{value:i,event:e},bubbles:!0,composed:!0}))}render(){return l`
      <div class="tabs">
        <button
          @click=${i=>this.onClick("sharing",i)}
          class=${j({active:this.active==="sharing"})}
        >
          Sharing
        </button>
        <button
          @click=${i=>this.onClick("requests",i)}
          class=${j({active:this.active==="requests"})}
        >
          Requests
        </button>
        <div class="active-indicator"></div>
      </div>
    `}};_.styles=[D,N`
      :host {
        display: block;
        width: 100%;
        user-select: none;
      }

      .tabs {
        width: calc(100% - 10px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        padding: 5px;
        border-radius: 12px;
        position: relative;
        background: var(--radix-popover-tabs-background);
      }

      button {
        border: unset;
        font-size: 14px;
        background: transparent;
        text-align: center;
        flex: 1;
        border-radius: 8px;
        font-weight: 600;
        color: var(--radix-popover-text-color);
        width: 100%;
        height: 32px;
        z-index: 1;
        margin: 0;
        padding: 0;
      }

      button:not(.active) {
        cursor: pointer;
      }

      .active-indicator {
        width: calc(50% - 5px);
        height: 32px;
        border-radius: 8px;
        position: absolute;
        box-shadow: 0px 4px 5px 0px #0000001a;
        background: var(--radix-popover-tabs-button-active-background);
        top: 5px;
        transition: transform 0.125s cubic-bezier(0.45, 0, 0.55, 1);
      }

      :host([active='sharing']) .active-indicator {
        transform: translateX(5px);
      }

      :host([active='requests']) .active-indicator {
        transform: translateX(calc(100% + 5px));
      }

      button:focus,
      button:focus-visible {
        outline: 0px auto -webkit-focus-ring-color;
      }
    `];ze([a({type:String,reflect:!0})],_.prototype,"theme",2);ze([a({type:String,reflect:!0})],_.prototype,"active",2);_=ze([m("radix-tabs-menu")],_);const Et=i=>{if(typeof btoa=="function")return btoa(i);if(typeof Buffer=="function")return Buffer.from(i,"utf-8").toString("base64");throw new Error("Failed to determine the platform specific encoder")},We="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNzU4XzE0NjkpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMTkgNi40MUwxNy41OSA1TDEyIDEwLjU5TDYuNDEgNUw1IDYuNDFMMTAuNTkgMTJMNSAxNy41OUw2LjQxIDE5TDEyIDEzLjQxTDE3LjU5IDE5TDE5IDE3LjU5TDEzLjQxIDEyTDE5IDYuNDFaIgogICAgICAgICAgICBmaWxsPSIjMzIzMjMyIiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xNzU4XzE0NjkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiAvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgogICAg";var Ot=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,J=(i,e,t,o)=>{for(var r=o>1?void 0:o?Zt(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&Ot(e,t,r),r};let L=class extends b{constructor(){super(...arguments),this.mode=v.light,this.connected=!1,this.compact=!1,this.isMobile=!1,this.height=0}connectedCallback(){super.connectedCallback(),setTimeout(()=>{const i=this.shadowRoot.getElementById("radix-popover-content");this.resizeObserver=new ResizeObserver(()=>{i&&i.scrollHeight&&(this.height=i.scrollHeight)}),this.resizeObserver.observe(this)})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.resizeObserver)==null||i.unobserve(this)}closePopover(){this.dispatchEvent(new CustomEvent("onClosePopover",{bubbles:!0,composed:!0}))}drawPopover(){const i=this.mode==="light"?"#E7E7E7":"#808080",e=this.height,t=13,o=8,r=344,n=e,s=12,d=s/2,c=`
      <linearGradient id="gradient" x1="461.192" y1="52.4476" x2="81.1033" y2="460.678" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CE0D98" />
          <stop offset="0.210873" stop-color="#052CC0" />
          <stop offset="0.479167" stop-color="#20E4FF" />
          <stop offset="0.729604" stop-color="#052CC0" />
          <stop offset="1" stop-color="#21FFBE" />
      </linearGradient>`,g=(h,y,se)=>`
      L ${h-se} ${y} 
      L ${h} 1
      L ${h+se} ${y}`,I=this.compact?r-30:300,p=`
    <svg viewBox="0 0 345 ${e+1}"  fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  >
        <path
            d="${[`M ${t} ${o}`,g(I,o,7),`L ${r-s} ${o}`,`C ${r-d} ${o} ${r} ${o+d} ${r} ${o+s}`,`L ${r} ${n-s}`,`C ${r} ${n-d} ${r-d} ${n} ${r-s} ${n}`,`L ${t} ${n}`,`C ${t-d} ${n} ${t-s} ${n-d} ${t-s} ${n-s}`,`L ${t-s} ${o+s}`,`C ${t-s} ${o+d} ${t-d} ${o} ${t} ${o}`,"Z"].join(" ")}"
            
            stroke-width="1"
            stroke-opacity="${this.connected?1:0}"
            fill="${i}"
            fill-opacity="0.98"
            stroke="url(#gradient)"
        />
        <defs>
          ${c}
        </defs>
     </svg>
    `;return`data:image/svg+xml;base64,${Et(p)}`}render(){return this.isMobile?l`<div id="radix-mobile-popover-content">
          <button
            id="close-button"
            @click=${()=>{this.closePopover()}}
          ></button>
          <div id="content"><slot></slot></div>
          <button
            id="close-button-blue"
            @click=${()=>{this.closePopover()}}
          >
            Close
          </button>
        </div>`:l`<style>
            :host {
              background-image: url(${this.drawPopover()});
            }
          </style>
          <div id="radix-popover-content">
            <slot />
          </div>`}};L.styles=[D,N`
      :host {
        user-select: none;
        display: inline-flex;
        background-position: center top;
        background-repeat: no-repeat;
        justify-content: center;
        align-items: flex-start;
        padding: 18px 12px 10px;
      }

      #radix-popover-content {
        width: 344px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        min-height: 130px;
      }
      #content {
        width: 288px;
      }
      #radix-mobile-popover-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        min-height: 130px;
        background-color: var(--radix-card-background);
        padding: 1rem;
        border-radius: 12px;
        max-width: 344px;
      }

      #close-button {
        -webkit-mask-image: url(${u(We)});
        mask-image: url(${u(We)});
        background-color: var(--radix-card-text-color);
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        align-self: flex-start;
        cursor: pointer;
      }
      #close-button:hover {
        opacity: 0.8;
      }

      #close-button-blue {
        background-color: var(--color-radix-blue-2);
        color: var(--color-light);
        padding: 0.7rem 1rem;
        font-size: 14px;
        width: 100%;
        cursor: pointer;
        max-width: 236px;
      }
    `];J([a({type:String,reflect:!0})],L.prototype,"mode",2);J([a({type:Boolean})],L.prototype,"connected",2);J([a({type:Boolean})],L.prototype,"compact",2);J([a({type:Boolean})],L.prototype,"isMobile",2);J([Tt()],L.prototype,"height",2);L=J([m("radix-popover")],L);const Pt=32,Gt=32,le=138,Be=l`<div class="loading-spinner-container">
  <div class="loading-spinner"></div>
</div>`,Ut=N`
  .loading-spinner-container {
    display: flex;
  }

  @container (max-width: ${le-16}px) {
    .loading-spinner-container {
      margin-left: 0;
      margin-right: 0;
    }
  }

  button.gradient > .loading-spinner {
    border-right-color: var(--color-light);
    border-left-color: color-mix(in srgb, var(--color-light) 30%, transparent);
    border-top-color: color-mix(in srgb, var(--color-light) 30%, transparent);
    border-bottom-color: color-mix(
      in srgb,
      var(--color-light) 30%,
      transparent
    );
  }

  .loading-spinner {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    border: 2px solid var(--radix-connect-button-text-color);
    border-left-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-top-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-bottom-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    align-self: center;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Qe="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzYzNzEgMTEuNzE4M0M1LjUxNDM0IDExLjcxODMgNS4yNzcyNiAxMS41OTg2IDUuMTI4NjIgMTEuMzkyNUwyLjAyNDQyIDcuMDcwOTdIMFY1LjQ5NzU4SDIuNDI0ODhDMi42NzY3MSA1LjQ5NzU4IDIuOTEyNTYgNS42MTg1MiAzLjA1OTk3IDUuODIzMzdMNS41OTY2NCA5LjM1MzkxTDkuNDY3MzcgMC40NzEzOThDOS41OTI2NiAwLjE4NTEwNCA5Ljg3Mzk3IDAgMTAuMTg0OCAwSDE1LjAyMzVWMS41NzMzOEgxMC42OTdMNi40ODExIDExLjI0NjlDNi4zNjgwOSAxMS41MDYxIDYuMTI2MDkgMTEuNjgzOCA1Ljg0NjAxIDExLjcxMzRDNS44MjAyMSAxMS43MTcxIDUuNzkxOTYgMTEuNzE4MyA1Ljc2MzcxIDExLjcxODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",Yt="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTM4IDQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGcgZmlsdGVyPSJ1cmwoI3RvcC1sZWZ0LXRlYWwpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTAuNDA2MzI5IC0zNC40OTU3QzE2LjYxMSAtNDEuODMzMSAzNC42MTc0IC0zNy4wMjU4IDQwLjYyNSAtMjMuNzU4M0M0Ni42MzI1IC0xMC40OTA4IDM4LjM2NjEgNi4yMTI4NiAyMi4xNjE1IDEzLjU1MDNDNS45NTY4NiAyMC44ODc3IC00Mi41MTI3IC0xLjE3MzYgLTQ4LjUyMDIgLTE0LjQ0MTFDLTU0LjUyNzcgLTI3LjcwODcgLTE1Ljc5ODMgLTI3LjE1ODMgMC40MDYzMjkgLTM0LjQ5NTdaIgogICAgICAgICAgICBmaWxsPSIjMjFGRkJFIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJ0b3AtbGVmdC10ZWFsIiB4PSItNzkuMzQzIiB5PSItNjguMTI1NCIgd2lkdGg9IjE1MiIgaGVpZ2h0PSIxMTMiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTUuMDk3OSIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KCgogICAgPGcgZmlsdGVyPSJ1cmwoI2JvdHRvbS1yaWdodC1henVyZSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNNzcuOTQ4MiAyOC40NjdDODYuNzM2MiAyMi4wODY5IDk4LjA5NSAyMi43NDc4IDEwMy4zMTkgMjkuOTQzQzEwOC41NDIgMzcuMTM4MiAxMDUuNjUzIDQ4LjE0MzIgOTYuODY0OSA1NC41MjMzQzg4LjA3NjggNjAuOTAzNCA1Ni4zNzk5IDUzLjY3MDMgNTEuMTU2MiA0Ni40NzUxQzQ1LjkzMjUgMzkuMjc5OCA2OS4xNjAxIDM0Ljg0NzEgNzcuOTQ4MiAyOC40NjdaIgogICAgICAgICAgICBmaWxsPSIjMjBFNEZGIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtYXp1cmUiIHg9IjI2LjM5OTciIHk9IjAuMDgyNzcxMyIgd2lkdGg9IjEwMyIgaGVpZ2h0PSI4MSIKICAgICAgICAgICAgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KCgogICAgPGcgZmlsdGVyPSJ1cmwoI2JvdHRvbS1sZWZ0LWJsdWUpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE2LjE0MjEgMjkuNTA5QzI2LjkyNjYgMzQuMDQyNyAzMi41MTE2IDQ1LjIyOTIgMjguNjE2NCA1NC40OTQ5QzI0LjcyMTMgNjMuNzYwNiAxMi44MjExIDY3LjU5NjYgMi4wMzY1OCA2My4wNjNDLTguNzQ3OTIgNTguNTI5MyAtMTkuMjc4MSAyNC4wOTA0IC0xNS4zODMgMTQuODI0N0MtMTEuNDg3OCA1LjU1OTAzIDUuMzU3NjUgMjQuOTc1NCAxNi4xNDIxIDI5LjUwOVoiCiAgICAgICAgICAgIGZpbGw9IiMwNjBGOEYiIC8+CgogICAgICAgIDxmaWx0ZXIgaWQ9ImJvdHRvbS1sZWZ0LWJsdWUiIHg9Ii0zNi4yMTA3IiB5PSItNy42NDk0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjkzIgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgoKICAgIDxnIGZpbHRlcj0idXJsKCNib3R0b20tcmlnaHQtcHVycGxlKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMjAuMTM1IDE2LjI2MTNDMTAzLjU3IDE3LjMyMDkgODkuNDM4MiA3LjE4NTI1IDg4LjU3MDcgLTYuMzc3MThDODcuNzAzMiAtMTkuOTM5NiAxMDAuNDI4IC0zMS43OTMgMTE2Ljk5MyAtMzIuODUyNkMxMzMuNTU4IC0zMy45MTIxIDE2OC41ODkgMS4zMzIzMiAxNjkuNDU2IDE0Ljg5NDdDMTcwLjMyNCAyOC40NTcyIDEzNi42OTkgMTUuMjAxOCAxMjAuMTM1IDE2LjI2MTNaIgogICAgICAgICAgICBmaWxsPSIjRkY0M0NBIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtcHVycGxlIiB4PSI0OC41Mjg5IiB5PSItNzIuODc1OSIgd2lkdGg9IjE2MSIgaGVpZ2h0PSIxMzQiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjAiIC8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2c+Cjwvc3ZnPgogICAg",Wt="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDIgNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBmaWx0ZXI9InVybCgjdG9wLWxlZnQtdGVhbCkiCiAgICAgICAgICAgIGQ9Ik0tNS4wMjMyMyAtMTUuMTI2NUMzLjYwMTggLTE5LjU0MTMgMTQuMTAyOCAtMTQuMzU5NyAxOC40MzE1IC0zLjU1Mjk5QzIyLjc2MDEgNy4yNTM2OCAxOS4yNzcyIDE5LjU5MzEgMTAuNjUyMiAyNC4wMDc5QzIuMDI3MTMgMjguNDIyNyAtMjYuODg0NiA3LjM3NTg3IC0zMS4yMTMzIC0zLjQzMDhDLTM1LjU0MTkgLTE0LjIzNzUgLTEzLjY0ODMgLTEwLjcxMTcgLTUuMDIzMjMgLTE1LjEyNjVaIgogICAgICAgICAgICBmaWxsPSIjMjFGRkJFIiAvPgogICAgICAgIDxmaWx0ZXIgaWQ9InRvcC1sZWZ0LXRlYWwiIHg9Ii01MS43NzM3IiB5PSItMzYuNzAxOSIgd2lkdGg9IjkyLjA2NTQiIGhlaWdodD0iODEuMzA5NiIKICAgICAgICAgICAgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGZpbHRlcj0idXJsKCNib3R0b20tcmlnaHQtYXp1cmUpIgogICAgICAgICAgICBkPSJNMjYuNjA3OSAyOS40NjdDMzQuMzgyIDIzLjA4NjkgNDQuNDMwMiAyMy43NDc3IDQ5LjA1MTIgMzAuOTQzQzUzLjY3MjEgMzguMTM4MiA1MS4xMTYgNDkuMTQzMiA0My4zNDIgNTUuNTIzM0MzNS41Njc5IDYxLjkwMzQgNy41MjgzNiA1NC42NzAzIDIuOTA3NCA0Ny40NzUxQy0xLjcxMzU3IDQwLjI3OTggMTguODMzOSAzNS44NDcxIDI2LjYwNzkgMjkuNDY3WiIKICAgICAgICAgICAgZmlsbD0iIzIwRTRGRiIgLz4KICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtYXp1cmUiIHg9Ii0xNy43NjE4IiB5PSI1LjA4Mjc2IiB3aWR0aD0iODkuMTE0NSIgaGVpZ2h0PSI3Mi45IgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZmlsdGVyPSJ1cmwoI2JvdHRvbS1sZWZ0LWJsdWUpIgogICAgICAgICAgICBkPSJNMTQuMjc5NiAyOS41MDlDMjMuODE5NyAzNC4wNDI3IDI4Ljc2MDIgNDUuMjI5MiAyNS4zMTQ1IDU0LjQ5NDlDMjEuODY4OCA2My43NjA1IDExLjM0MTcgNjcuNTk2NiAxLjgwMTU4IDYzLjA2M0MtNy43Mzg1NSA1OC41MjkzIC0xNy4wNTM3IDI0LjA5MDQgLTEzLjYwOCAxNC44MjQ3Qy0xMC4xNjIzIDUuNTU5MDQgNC43Mzk0NSAyNC45NzU0IDE0LjI3OTYgMjkuNTA5WiIKICAgICAgICAgICAgZmlsbD0iIzA2MEY4RiIgLz4KICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tbGVmdC1ibHVlIiB4PSItMzQuMzQwMiIgeT0iLTcuNjQ5NDEiIHdpZHRoPSI4MC43NTE5IiBoZWlnaHQ9IjkyLjYxNzIiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAiIC8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBmaWx0ZXI9InVybCgjdG9wLXJpZ2h0LXB1cnBsZSkiCiAgICAgICAgICAgIGQ9Ik01NC4yNDk4IDI3LjQwMDFDMzkuNTA5MSAyOC40NjU5IDI2Ljk4NjUgMTkuMjA0IDI2LjI3OTggNi43MTI5NkMyNS41NzMgLTUuNzc4MDQgMzYuOTQ5NyAtMTYuNzY4IDUxLjY5MDMgLTE3LjgzMzhDNjYuNDMxIC0xOC44OTk3IDk3LjQyNDYgMTMuMzgzMSA5OC4xMzE0IDI1Ljg3NDFDOTguODM4MSAzOC4zNjUxIDY4Ljk5MDQgMjYuMzM0MiA1NC4yNDk4IDI3LjQwMDFaIgogICAgICAgICAgICBmaWxsPSIjRkY0M0NBIiAvPgogICAgICAgIDxmaWx0ZXIgaWQ9InRvcC1yaWdodC1wdXJwbGUiIHg9IjYuMjQ4NTIiIHk9Ii0zNy44NTk2IiB3aWR0aD0iMTExLjg5NSIgaGVpZ2h0PSI4OS40NTA2IgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgo8L3N2Zz4KICAgIA==",He="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC40IiB5PSIwLjQiIHdpZHRoPSIyMS4yIiBoZWlnaHQ9IjIxLjIiIHJ4PSIxMC42IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuOCIvPgo8bWFzayBpZD0ibWFzazBfMTg5N18xODg5IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPgo8cmVjdCB4PSIwLjI0OTc1NiIgeT0iMC41IiB3aWR0aD0iMjEuNTExIiBoZWlnaHQ9IjIxLjUxMSIgcng9IjEwLjc1NTUiIGZpbGw9IiNGNEY1RjkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4OTdfMTg4OSkiPgo8Y2lyY2xlIG9wYWNpdHk9IjAuMiIgY3g9IjguODc0MDIiIGN5PSI5LjEyNSIgcj0iMy45NzUiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIxMy4xMjQzIiBjeT0iOS4xMjUiIHI9IjMuOTc1IiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTIxLjM0OTMgMjEuNUMyMS4zNDkzIDI1LjMwMzQgMTguNDMwNiAyOC4zNSAxNC44NzQzIDI4LjM1QzExLjMxOCAyOC4zNSA4LjM5OTI3IDI1LjMwMzQgOC4zOTkyNyAyMS41QzguMzk5MjcgMTcuNjk2NiAxMS4zMTggMTQuNjUgMTQuODc0MyAxNC42NUMxOC40MzA2IDE0LjY1IDIxLjM0OTMgMTcuNjk2NiAyMS4zNDkzIDIxLjVaIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTEzLjM0OTUgMjEuNUMxMy4zNDk1IDI1LjMwMzQgMTAuNDMwOCAyOC4zNSA2Ljg3NDUxIDI4LjM1QzMuMzE4MjIgMjguMzUgMC4zOTk1MTIgMjUuMzAzNCAwLjM5OTUxMiAyMS41QzAuMzk5NTEyIDE3LjY5NjYgMy4zMTgyMiAxNC42NSA2Ljg3NDUxIDE0LjY1QzEwLjQzMDggMTQuNjUgMTMuMzQ5NSAxNy42OTY2IDEzLjM0OTUgMjEuNVoiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KPGNpcmNsZSBjeD0iMTEiIGN5PSI5IiByPSI0LjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIGQ9Ik0xNy4zNDkzIDIxLjVDMTcuMzQ5MyAyNS4zMDM0IDE0LjQzMDYgMjguMzUgMTAuODc0MyAyOC4zNUM3LjMxNzk4IDI4LjM1IDQuMzk5MjcgMjUuMzAzNCA0LjM5OTI3IDIxLjVDNC4zOTkyNyAxNy42OTY2IDcuMzE3OTggMTQuNjUgMTAuODc0MyAxNC42NUMxNC40MzA2IDE0LjY1IDE3LjM0OTMgMTcuNjk2NiAxNy4zNDkzIDIxLjVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuOCIvPgo8L2c+Cjwvc3ZnPgo=",Xe="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEwLjUgMC41QzQuOTggMC41IDAuNSA0Ljk4IDAuNSAxMC41QzAuNSAxNi4wMiA0Ljk4IDIwLjUgMTAuNSAyMC41QzE2LjAyIDIwLjUgMjAuNSAxNi4wMiAyMC41IDEwLjVDMjAuNSA0Ljk4IDE2LjAyIDAuNSAxMC41IDAuNVpNMTAuNSAxOC41QzYuMDkgMTguNSAyLjUgMTQuOTEgMi41IDEwLjVDMi41IDYuMDkgNi4wOSAyLjUgMTAuNSAyLjVDMTQuOTEgMi41IDE4LjUgNi4wOSAxOC41IDEwLjVDMTguNSAxNC45MSAxNC45MSAxOC41IDEwLjUgMTguNVpNMTUuMDkgNi4wOEw4LjUgMTIuNjdMNS45MSAxMC4wOUw0LjUgMTEuNUw4LjUgMTUuNUwxNi41IDcuNUwxNS4wOSA2LjA4WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+CiAgICA=",Re="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTE1Ljk2ODkgOC41MjA4N0wxNC40NzkzIDcuMDMxMjNMMTEuNSAxMC4wMTA1TDguNTIwNzIgNy4wMzEyM0w3LjAzMTA4IDguNTIwODdMMTAuMDEwNCAxMS41MDAxTDcuMDMxMDggMTQuNDc5NEw4LjUyMDcyIDE1Ljk2OTFMMTEuNSAxMi45ODk4TDE0LjQ3OTMgMTUuOTY5MUwxNS45Njg5IDE0LjQ3OTRMMTIuOTg5NiAxMS41MDAxTDE1Ljk2ODkgOC41MjA4N1pNMTguOTQ4MiA0LjA1MTk1QzE0Ljg0NDIgLTAuMDUyMDAyNCA4LjE1NTc2IC0wLjA1MjAwMjcgNC4wNTE4MSA0LjA1MTk1Qy0wLjA1MjE0NTMgOC4xNTU5IC0wLjA1MjE0NTYgMTQuODQ0NCA0LjA1MTgxIDE4Ljk0ODNDOC4xNTU3NiAyMy4wNTIzIDE0Ljg0NDIgMjMuMDUyMyAxOC45NDgyIDE4Ljk0ODNDMjMuMDUyMSAxNC44NDQ0IDIzLjA1MjEgOC4xNTU5MSAxOC45NDgyIDQuMDUxOTVaTTUuNTQxNDUgMTcuNDU4N0MyLjI1Njc5IDE0LjE3NCAyLjI1Njc5IDguODI2MjQgNS41NDE0NSA1LjU0MTU5QzguODI2MSAyLjI1Njk0IDE0LjE3MzkgMi4yNTY5NCAxNy40NTg2IDUuNTQxNTlDMjAuNzQzMiA4LjgyNjI0IDIwLjc0MzIgMTQuMTc0IDE3LjQ1ODYgMTcuNDU4N0MxNC4xNzM5IDIwLjc0MzMgOC44MjYxIDIwLjc0MzMgNS41NDE0NSAxNy40NTg3WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+CiAgICA=";var Bt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,ie=(i,e,t,o)=>{for(var r=o>1?void 0:o?Qt(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&Bt(e,t,r),r};let P=class extends b{constructor(){super(...arguments),this.status=H.default,this.connected=!1,this.fullWidth=!1,this.theme="radix-blue"}onClick(i){this.dispatchEvent(new CustomEvent("onClick",{detail:i,bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{const i=this.shadowRoot.querySelector("button");this.resizeObserver=new ResizeObserver(()=>{this.dispatchEvent(new CustomEvent("onResize",{bubbles:!0,composed:!1,detail:i}))}),this.resizeObserver.observe(i)})}disconnectedCallback(){var i;super.disconnectedCallback();const e=this.shadowRoot.querySelector("button");(i=this.resizeObserver)==null||i.unobserve(e)}render(){const i=()=>this.status===H.pending&&this.connected?l`${Be} <slot></slot>`:this.status===H.pending?Be:!this.connected&&["success","error"].includes(this.status)?"":l`<slot></slot>`,e=this.status!=="pending"&&!this.connected,t=this.connected;return l`
      <button
        @click=${this.onClick}
        class=${j({logo:e,gradient:t})}
        aria-label="Radix Connect Button"
      >
        ${i()}
      </button>
    `}};P.styles=[D,Ut,N`
      :host {
        width: max(var(--radix-connect-button-width, 138px), 40px);
        min-width: 40px;
        display: flex;
        justify-content: flex-end;
        container-type: inline-size;
        user-select: none;
        --radix-connect-button-text-color: var(--color-light);
      }

      :host([full-width]) > button {
        width: 100%;
      }

      :host([full-width]) {
        width: 100%;
        display: inline-block;
      }

      ::slotted(*) {
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        width: auto;
      }

      .gradient ::slotted(*) {
        padding: 0 4px;
      }

      button {
        width: max(var(--radix-connect-button-width, 138px), 40px);
        height: var(--radix-connect-button-height, 40px);
        min-width: ${Gt}px;
        min-height: ${Pt}px;
        border-radius: var(--radix-connect-button-border-radius, 0);
        background-color: var(--radix-connect-button-background);
        border: 1px solid var(--radix-connect-button-border-color);
        color: var(--radix-connect-button-text-color);
        font-size: 14px;
        align-content: center;
        align-items: center;
        font-family: inherit;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);

        display: flex;
        gap: 3px;
        justify-content: center;
        padding: 0 10px;
      }

      button::before {
        min-height: 0.94em;
        min-width: 1.25em;
        display: block;
        -webkit-mask-position: center right;
        mask-position: center right;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        background-color: var(--radix-connect-button-text-color);
        width: 16px;
      }

      button:hover {
        background-color: var(--radix-connect-button-background-hover);
      }

      button.logo::before {
        content: '';
        mask-image: url(${u(Qe)});
        -webkit-mask-image: url(${u(Qe)});
      }

      button.gradient.logo::before {
        background-color: var(--color-light);
      }

      :host([status='pending']) > button.gradient::before {
        display: none;
      }

      button.gradient {
        border: 1px solid transparent;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: cover;
        background-position: center;
        background-color: var(--color-radix-blue-2);
        color: var(--color-light);
        background-image: url(${u(Yt)});
        padding-right: 7px;
      }

      button.gradient::before {
        content: '';
        background-color: var(--color-light);
      }

      :host([status='default']) > button.gradient::before {
        mask-image: url(${u(He)});
        -webkit-mask-image: url(${u(He)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      :host([status='success']) > button::before {
        mask-image: url(${u(Xe)});
        -webkit-mask-image: url(${u(Xe)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      :host([status='error']) > button::before {
        mask-image: url(${u(Re)});
        -webkit-mask-image: url(${u(Re)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      button.gradient:hover {
        background-color: var(--color-radix-blue-1);
      }

      button:focus,
      button:focus-visible {
        outline: 0px auto -webkit-focus-ring-color;
      }

      @container (width < ${le-.1}px) {
        button {
          width: var(--radix-connect-button-height, 40px);
          max-width: ${le}px;
          max-height: ${le}px;
          justify-content: center;
          padding: 0;
        }
        button::before {
          -webkit-mask-position: center;
          mask-position: center;
        }
        button.gradient {
          background-image: url(${u(Wt)});
          padding: 0;
        }
        button.logo::before {
          font-size: 16px;
        }
        ::slotted(*) {
          display: none;
        }
      }
    `];ie([a({type:String,reflect:!0})],P.prototype,"status",2);ie([a({type:Boolean})],P.prototype,"connected",2);ie([a({type:Boolean,reflect:!0})],P.prototype,"fullWidth",2);ie([a({type:String,reflect:!0})],P.prototype,"theme",2);P=ie([m("radix-button")],P);const Ve="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDU5Xzg3NikiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMiAyLjVDNi40OCAyLjUgMiA2Ljk4IDIgMTIuNUMyIDE4LjAyIDYuNDggMjIuNSAxMiAyMi41QzE3LjUyIDIyLjUgMjIgMTguMDIgMjIgMTIuNUMyMiA2Ljk4IDE3LjUyIDIuNSAxMiAyLjVaTTEyIDIwLjVDNy41OCAyMC41IDQgMTYuOTIgNCAxMi41QzQgOC4wOCA3LjU4IDQuNSAxMiA0LjVDMTYuNDIgNC41IDIwIDguMDggMjAgMTIuNUMyMCAxNi45MiAxNi40MiAyMC41IDEyIDIwLjVaIgogICAgICAgICAgICBmaWxsPSIjMDAzMDU3IiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDU5Xzg3NiI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIgLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4KICAgIA==",Je="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDU5Xzg5NikiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMkMyIDE3LjUyIDYuNDggMjIgMTIgMjJDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJDMjIgNi40OCAxNy41MiAyIDEyIDJaTTkuMjkgMTYuMjlMNS43IDEyLjdDNS4zMSAxMi4zMSA1LjMxIDExLjY4IDUuNyAxMS4yOUM2LjA5IDEwLjkgNi43MiAxMC45IDcuMTEgMTEuMjlMMTAgMTQuMTdMMTYuODggNy4yOUMxNy4yNyA2LjkgMTcuOSA2LjkgMTguMjkgNy4yOUMxOC42OCA3LjY4IDE4LjY4IDguMzEgMTguMjkgOC43TDEwLjcgMTYuMjlDMTAuMzIgMTYuNjggOS42OCAxNi42OCA5LjI5IDE2LjI5WiIKICAgICAgICAgICAgZmlsbD0iIzAwMzA1NyIgLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTA1OV84OTYiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiAvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgogICAg",Fe="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN0eWxlPi5zcGlubmVyX2FqUFl7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7YW5pbWF0aW9uOnNwaW5uZXJfQXRhQiAuNzVzIGluZmluaXRlIGxpbmVhcn1Aa2V5ZnJhbWVzIHNwaW5uZXJfQXRhQnsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19PC9zdHlsZT48cGF0aCBkPSJNMTIsMUExMSwxMSwwLDEsMCwyMywxMiwxMSwxMSwwLDAsMCwxMiwxWm0wLDE5YTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyLDIwWiIgb3BhY2l0eT0iLjI1Ii8+PHBhdGggZD0iTTEwLjE0LDEuMTZhMTEsMTEsMCwwLDAtOSw4LjkyQTEuNTksMS41OSwwLDAsMCwyLjQ2LDEyLDEuNTIsMS41MiwwLDAsMCw0LjExLDEwLjdhOCw4LDAsMCwxLDYuNjYtNi42MUExLjQyLDEuNDIsMCwwLDAsMTIsMi42OWgwQTEuNTcsMS41NywwLDAsMCwxMC4xNCwxLjE2WiIgY2xhc3M9InNwaW5uZXJfYWpQWSIvPjwvc3ZnPg==",qe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjE0XzI4NDkpIj4KICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMkMyIDE3LjUyIDYuNDggMjIgMTIgMjJDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJDMjIgNi40OCAxNy41MiAyIDEyIDJaTSAxMS4xOTQzIDEyIEwgOCA4LjgwNTcxIEwgOC44MDU3MSA4IEwgMTIgMTEuMTk0MyBMIDE1LjE5NDMgOCBMIDE2IDguODA1NzEgTCAxMi44MDU3IDEyIEwgMTYgMTUuMTk0MyBMIDE1LjE5NDMgMTYgTCAxMiAxMi44MDU3IEwgOC44MDU3MSAxNiBMIDggMTUuMTk0MyBaIiBmaWxsPSIjOEE4RkE0Ii8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF82MTRfMjg0OSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgo8L3N2Zz4=",Ht=i=>{const e=new Date;return i.getDate()==e.getDate()&&i.getMonth()==e.getMonth()&&i.getFullYear()==e.getFullYear()},ut=(i,e=" ")=>{const t=new Date(Number(i)),o=Ht(t),r=t.toLocaleTimeString("en-Gb",{hour:"numeric",minute:"numeric",hour12:!1});return o?`Today${e}${r}`:`${t.getDate()} ${t.toLocaleString("en-US",{month:"short"})}${e}${r}`};var Xt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,oe=(i,e,t,o)=>{for(var r=o>1?void 0:o?Rt(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&Xt(e,t,r),r};let G=class extends b{constructor(){super(...arguments),this.mode=v.light,this.header=""}render(){const i=()=>this.timestamp?l`<div class="timestamp">${ut(this.timestamp)}</div>`:"",e=`${this.icon?"30px":""} 1fr ${this.timestamp?"60px":""}`;return l`<div class="card" style=${gt({gridTemplateColumns:e})}>
      <i></i>
      <div class="content">
        <span>${this.header}</span>
        <slot />
      </div>
      ${i()}
    </div>`}};G.styles=[D,N`
      :host {
        background-color: var(--radix-card-background);
        color: var(--radix-card-text-color);
        display: block;
        padding: 11px 20px;
        user-select: none;
        border-radius: 12px;
        width: 100%;
        box-sizing: border-box;
      }

      :host(.inverted) {
        background-color: var(--radix-card-inverted-background);
        color: var(--radix-card-inverted-text-color);
      }

      :host(.inverted) .card i::before {
        background-color: var(--radix-card-inverted-text-color);
      }

      :host(.dimmed) .card i::before {
        background-color: var(--radix-card-text-dimmed-color);
      }

      :host(.dimmed) .content {
        color: var(--radix-card-text-dimmed-color);
      }

      .timestamp {
        text-align: right;
        color: var(--radix-card-text-dimmed-color);
        font-size: 12px;
      }

      .card {
        display: grid;
        align-items: center;
        column-gap: 10px;
      }

      i::before {
        content: '';
        display: block;
        -webkit-mask-size: cover;
        mask-size: cover;
        background-color: var(--radix-card-text-color);
      }

      span {
        display: block;
        font-weight: 600;
        font-size: 14px;
      }

      p {
        margin: 0;
      }

      :host([icon='unchecked']) i::before {
        -webkit-mask-image: url(${u(Ve)});
        mask-image: url(${u(Ve)});
        width: 24px;
        height: 24px;
      }

      :host([icon='pending']) i::before {
        -webkit-mask-image: url(${u(Fe)});
        mask-image: url(${u(Fe)});
        width: 24px;
        height: 24px;
      }

      :host([icon='checked']) i::before {
        -webkit-mask-image: url(${u(Je)});
        mask-image: url(${u(Je)});
        width: 24px;
        height: 24px;
      }

      :host([icon='error']) i::before {
        -webkit-mask-image: url(${u(qe)});
        mask-image: url(${u(qe)});
        width: 24px;
        height: 24px;
      }
    `];oe([a({type:String,reflect:!0})],G.prototype,"mode",2);oe([a({type:String,reflect:!0})],G.prototype,"icon",2);oe([a({type:String})],G.prototype,"header",2);oe([a({type:String,reflect:!0})],G.prototype,"timestamp",2);G=oe([m("radix-card")],G);const Ke="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0MDNfMTI3MSkiPgo8cGF0aCBkPSJNNS45OTkzNSAzLjgzMzk4VjUuMTY3MzJIMTAuMzkyN0wyLjY2NjAyIDEyLjg5NEwzLjYwNjAyIDEzLjgzNEwxMS4zMzI3IDYuMTA3MzJWMTAuNTAwN0gxMi42NjZWMy44MzM5OEg1Ljk5OTM1WiIgZmlsbD0iIzhBOEZBNCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE0MDNfMTI3MSI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";var Vt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Ie=(i,e,t,o)=>{for(var r=o>1?void 0:o?Jt(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&Vt(e,t,r),r};let V=class extends b{constructor(){super(...arguments),this.mode=v.light,this.href="",this.displayText=""}render(){return l`<a target="_blank" href=${this.href} class="link"
      >${this.displayText}
      <i class="icon-north-east-arrow"></i>
    </a>`}};V.styles=[D,N`
      .link {
        color: var(--radix-link-color);
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .icon-north-east-arrow::before {
        content: '';
        display: block;
        -webkit-mask-size: cover;
        mask-size: cover;
        background-color: var(--radix-card-text-dimmed-color);
        -webkit-mask-image: url(${u(Ke)});
        mask-image: url(${u(Ke)});
        width: 16px;
        height: 16px;
      }
    `];Ie([a({type:String,reflect:!0})],V.prototype,"mode",2);Ie([a({type:String})],V.prototype,"href",2);Ie([a({type:String})],V.prototype,"displayText",2);V=Ie([m("radix-link")],V);const Ft="data:image/png;base64,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",qt="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIG9wYWNpdHk9IjAuOCI+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iMC44IgogICAgICAgICAgICBkPSJNOC4xMjQ5OCAwLjU0MTc0OEgyLjE2NjY1QzEuNTcwODEgMC41NDE3NDggMS4wODMzMSAxLjAyOTI1IDEuMDgzMzEgMS42MjUwOFY4LjY2Njc1QzEuMDgzMzEgOC45NjQ2NiAxLjMyNzA2IDkuMjA4NDEgMS42MjQ5OCA5LjIwODQxQzEuOTIyOSA5LjIwODQxIDIuMTY2NjUgOC45NjQ2NiAyLjE2NjY1IDguNjY2NzVWMi4xNjY3NUMyLjE2NjY1IDEuODY4ODMgMi40MTA0IDEuNjI1MDggMi43MDgzMSAxLjYyNTA4SDguMTI0OThDOC40MjI5IDEuNjI1MDggOC42NjY2NSAxLjM4MTMzIDguNjY2NjUgMS4wODM0MUM4LjY2NjY1IDAuNzg1NDk4IDguNDIyOSAwLjU0MTc0OCA4LjEyNDk4IDAuNTQxNzQ4Wk0xMC4yOTE2IDIuNzA4NDFINC4zMzMzMUMzLjczNzQ4IDIuNzA4NDEgMy4yNDk5OCAzLjE5NTkxIDMuMjQ5OTggMy43OTE3NVYxMS4zNzUxQzMuMjQ5OTggMTEuOTcwOSAzLjczNzQ4IDEyLjQ1ODQgNC4zMzMzMSAxMi40NTg0SDEwLjI5MTZDMTAuODg3NSAxMi40NTg0IDExLjM3NSAxMS45NzA5IDExLjM3NSAxMS4zNzUxVjMuNzkxNzVDMTEuMzc1IDMuMTk1OTEgMTAuODg3NSAyLjcwODQxIDEwLjI5MTYgMi43MDg0MVpNOS43NDk5OCAxMS4zNzUxSDQuODc0OThDNC41NzcwNiAxMS4zNzUxIDQuMzMzMzEgMTEuMTMxMyA0LjMzMzMxIDEwLjgzMzRWNC4zMzM0MUM0LjMzMzMxIDQuMDM1NSA0LjU3NzA2IDMuNzkxNzUgNC44NzQ5OCAzLjc5MTc1SDkuNzQ5OThDMTAuMDQ3OSAzLjc5MTc1IDEwLjI5MTYgNC4wMzU1IDEwLjI5MTYgNC4zMzM0MVYxMC44MzM0QzEwLjI5MTYgMTEuMTMxMyAxMC4wNDc5IDExLjM3NTEgOS43NDk5OCAxMS4zNzUxWiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiIC8+CiAgICA8L2c+Cjwvc3ZnPgogICAg",It=i=>i?`${i.slice(0,4)}...${i.slice(i.length-6,i.length)}`:"";var Kt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,re=(i,e,t,o)=>{for(var r=o>1?void 0:o?$t(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&Kt(e,t,r),r};let U=class extends b{constructor(){super(...arguments),this.mode=v.light,this.address="",this.label="",this.appearanceId=0}render(){return l` <span class="label">${this.label}</span>
      <a
        class="address"
        target="_blank"
        href=${`${this.address}`}
        @click=${i=>{i.preventDefault(),this.dispatchEvent(new CustomEvent("onLinkClick",{bubbles:!0,composed:!0,detail:{type:"account",data:this.address}}))}}
      >
        ${It(this.address)}<i
          @click=${i=>{i.preventDefault(),i.stopImmediatePropagation(),navigator.clipboard.writeText(this.address)}}
        ></i>
      </a>`}};U.styles=[D,N`
      :host {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: 0.5rem;
        border-radius: 12px;
        color: var(--color-light);
        font-size: 14px;
        height: 40px;
        align-items: center;
        padding: 0 20px;
      }

      .label {
        font-weight: 600;
        color: var(--color-light);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 10px;
      }

      a {
        color: var(--color-light);
        display: flex;
        align-items: center;
        gap: 4px;
        opacity: 0.8;
        font-size: 12px;
      }

      i {
        background-image: url(${u(qt)});
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        width: 13px;
        height: 13px;
      }

      .label,
      a,
      i {
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
      }

      :host([appearanceId='0']) {
        background: linear-gradient(276.58deg, #01e2a0 -0.6%, #052cc0 102.8%);
      }

      :host([appearanceId='1']) {
        background: linear-gradient(
          276.33deg,
          #ff43ca -14.55%,
          #052cc0 102.71%
        );
      }

      :host([appearanceId='2']) {
        background: linear-gradient(
          276.33deg,
          #20e4ff -14.55%,
          #052cc0 102.71%
        );
      }

      :host([appearanceId='3']) {
        background: linear-gradient(94.8deg, #00ab84 -1.2%, #052cc0 103.67%);
      }

      :host([appearanceId='4']) {
        background: linear-gradient(94.62deg, #ce0d98 -10.14%, #052cc0 104.1%);
      }

      :host([appearanceId='5']) {
        background: linear-gradient(
          276.33deg,
          #052cc0 -14.55%,
          #0dcae4 102.71%
        );
      }

      :host([appearanceId='6']) {
        background: linear-gradient(90.89deg, #003057 -2.21%, #03d597 102.16%);
      }

      :host([appearanceId='7']) {
        background: linear-gradient(276.23deg, #f31dbe -2.1%, #003057 102.67%);
      }

      :host([appearanceId='8']) {
        background: linear-gradient(276.48deg, #003057 -0.14%, #052cc0 102.77%);
      }

      :host([appearanceId='9']) {
        background: linear-gradient(276.32deg, #1af4b5 -5.15%, #0ba97d 102.7%);
      }

      :host([appearanceId='10']) {
        background: linear-gradient(276.23deg, #e225b3 -2.1%, #7e0d5f 102.67%);
      }

      :host([appearanceId='11']) {
        background: linear-gradient(276.48deg, #1f48e2 -0.14%, #040b72 102.77%);
      }
    `];re([a({type:String,reflect:!0})],U.prototype,"mode",2);re([a({type:String})],U.prototype,"address",2);re([a({type:String})],U.prototype,"label",2);re([a({type:Number,reflect:!0})],U.prototype,"appearanceId",2);U=re([m("radix-account")],U);var _t=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,k=(i,e,t,o)=>{for(var r=o>1?void 0:o?ei(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&_t(e,t,r),r};let C=class extends b{constructor(){super(...arguments),this.mode=v.light,this.type="dataRequest",this.status="pending",this.showCancel=!1,this.timestamp="",this.id="",this.transactionIntentHash=""}render(){const i=this.getIconFromStatus(),e=this.getStylingFromStatus(),t={sendTransaction:{pending:"Pending Transaction",fail:"Transaction Failed",cancelled:"Transaction Cancelled",success:"Send transaction",content:l`
          ${this.renderTxIntentHash()}
          ${this.getRequestContentTemplate("Open your Radix Wallet app to review the transaction")}
        `},dataRequest:{pending:"Data Request Pending",fail:"Data Request Rejected",cancelled:"Data Request Rejected",success:"Data Request",content:this.getRequestContentTemplate("Open Your Radix Wallet App to complete the request")},loginRequest:{pending:"Login Request Pending",fail:"Login Request Rejected",cancelled:"Login Request Rejected",success:"Login Request",content:this.getRequestContentTemplate("Open Your Radix Wallet App to complete the request")}};return l`<radix-card
      icon="${i}"
      class=${e}
      mode=${this.mode}
      timestamp="${this.timestamp}"
      header="${t[this.type][this.status]}"
    >
      ${t[this.type].content}
    </radix-card>`}getRequestContentTemplate(i){return this.status==="pending"?l`<div class="request-content">
          ${i}
          ${this.showCancel?l`<div class="cancel" @click=${this.onCancel}>Cancel</div>`:""}
        </div>`:""}getIconFromStatus(){return this.status==="pending"?"pending":this.status==="cancelled"||this.status==="fail"?"error":"checked"}getStylingFromStatus(){return j({dimmed:this.status==="fail"||this.status==="cancelled",inverted:this.status==="pending"})}onCancel(i){this.dispatchEvent(new CustomEvent("onCancelRequestItem",{detail:{...i,id:this.id},bubbles:!0,composed:!0}))}renderTxIntentHash(){return this.transactionIntentHash?l`<div class="transaction">
          <span class="text-dimmed">ID:</span>
          <radix-link
            displayText="${It(this.transactionIntentHash)}"
            mode=${this.mode}
            @click=${i=>{i.preventDefault(),this.dispatchEvent(new CustomEvent("onLinkClick",{bubbles:!0,composed:!0,detail:{type:"transaction",data:this.transactionIntentHash}}))}}
          ></radix-link>
        </div>`:""}};C.styles=[D,N`
      :host {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
      }

      .text-dimmed {
        color: var(--radix-card-text-dimmed-color);
        margin-right: 5px;
      }

      .transaction {
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .cancel {
        cursor: pointer;
        text-decoration: underline;
      }

      .request-content {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
      }
    `];k([a({type:String,reflect:!0})],C.prototype,"mode",2);k([a({type:String})],C.prototype,"type",2);k([a({type:String})],C.prototype,"status",2);k([a({type:Boolean})],C.prototype,"showCancel",2);k([a({type:String})],C.prototype,"timestamp",2);k([a({type:String})],C.prototype,"id",2);k([a({type:String})],C.prototype,"transactionIntentHash",2);C=k([m("radix-request-card")],C);var ti=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,we=(i,e,t,o)=>{for(var r=o>1?void 0:o?ii(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&ti(e,t,r),r};let ee=class extends b{constructor(){super(...arguments),this.mode=v.light,this.requestItems=[]}render(){return(this.requestItems||[]).map(i=>l`<radix-request-card
        type="${i.type}"
        status="${i.status}"
        id="${i.id}"
        ?showCancel="${i.showCancel}"
        @onCancel=${e=>{this.dispatchEvent(new CustomEvent("onCancel",{detail:e.detail,bubbles:!0,composed:!0}))}}
        timestamp=${i.timestamp}
        mode=${this.mode}
      ></radix-request-card>`)}};ee.styles=[D];we([a({type:String,reflect:!0})],ee.prototype,"mode",2);we([a({type:Array})],ee.prototype,"requestItems",2);ee=we([m("radix-request-cards")],ee);var oi=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,W=(i,e,t,o)=>{for(var r=o>1?void 0:o?ri(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&oi(e,t,r),r};let z=class extends b{constructor(){super(...arguments),this.mode=v.light,this.isMobile=!1,this.status=H.default,this.isWalletLinked=!1,this.isExtensionAvailable=!1,this.requestItems=[]}render(){let i=this.renderConnectTemplate();return this.isMobile?i=this.renderMobileTemplate():this.isExtensionAvailable?this.isWalletLinked?this.status===H.pending&&(i=this.renderRequestItemsTemplate()):i=this.renderCeNotLinkedTemplate():i=this.renderCeNotInstalledTemplate(),l`
      <div class="wrapper connect-your-wallet">
        <img class="logo" src=${Ft} />
        <span class="text connect">Connect Your Radix Wallet</span>
      </div>
      ${i}
    `}renderMobileTemplate(){return l` <div class="mobile-wrapper">
      <div class="header">Mobile dApps are coming soon.</div>
      <div class="content">
        For now, please connect to Radix dApps using a desktop web browser.
      </div>
    </div>`}renderRequestItemsTemplate(){return l`<radix-request-cards
      class="request-cards"
      mode=${this.mode}
      .requestItems=${this.requestItems}
    ></radix-request-cards>`}connectNowButtonTemplate(){const i=!this.isExtensionAvailable||!this.isWalletLinked;return l`<button
      class="${j({"connect-now":!0,disabled:i})}"
      @click=${()=>{i||this.dispatchEvent(new CustomEvent("onConnect",{bubbles:!0,composed:!0}))}}
    >
      Connect Now
    </button>`}renderCeNotInstalledTemplate(){return l`<div class="info">
        Before you can connect your Radix Wallet, you need the Radix Connector
        browser extension.
      </div>

      <div class="cta-link">
        <radix-link
          mode=${this.mode}
          href="http://wallet.radixdlt.com/"
          displayText="Download and Setup Guide"
          @click=${()=>{this.dispatchEvent(new CustomEvent("onLinkClick",{bubbles:!0,composed:!0,detail:{type:"setupGuide"}}))}}
        ></radix-link>
      </div>

      ${this.connectNowButtonTemplate()} `}renderCeNotLinkedTemplate(){return l`<div class="info">
        To connect your Radix Wallet, you need to link it to your Radix
        Connector browser extension using a QR code.
      </div>

      <button
        class="${j({"connect-now":!0})}"
        @click=${()=>{this.dispatchEvent(new CustomEvent("onLinkClick",{bubbles:!0,composed:!0,detail:{type:"showQrCode"}}))}}
      >
        Open QR Code to Link Wallet
      </button>

      <div class="cta-link">
        <radix-link
          mode=${this.mode}
          href="http://wallet.radixdlt.com/"
          displayText="Download and Setup Guide"
          @click=${()=>{this.dispatchEvent(new CustomEvent("onLinkClick",{bubbles:!0,composed:!0,detail:{type:"setupGuide"}}))}}
        ></radix-link>
      </div>

      ${this.connectNowButtonTemplate()} `}renderConnectTemplate(){return l` ${this.connectNowButtonTemplate()} `}};z.styles=[D,N`
      :host {
        width: 100%;
      }
      .wrapper.connect-your-wallet {
        display: flex;
        align-items: center;
        margin: 1rem 0.5rem 1.5rem;
        justify-content: center;
      }

      .request-cards {
        display: block;
        max-height: 410px;
        overflow-y: auto;
      }

      .card {
        margin-bottom: 10px;
      }
      .info {
        margin-bottom: 20px;
        font-size: 14px;
        text-align: center;
      }

      .connect-now {
        width: 100%;
        color: #fff;
        border-radius: 12px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
      }

      .connect-now:not(.disabled) {
        background: var(--color-radix-blue-2);
        cursor: pointer;
      }

      .connect-now.disabled {
        background: var(--radix-connect-now-disabled-button-background);
        color: var(--radix-connect-now-disabled-button-text);
      }

      .cta-link {
        display: flex;
        justify-content: center;
        margin: 25px 0 20px;
      }

      .logo {
        width: 46px;
        align-self: center;
      }

      .text.connect {
        color: var(--color-text-primary);
        font-size: 18px;
        width: 7.2rem;
        margin-left: 1rem;
        font-weight: 600;
        text-align: left;
      }

      .subtitle {
        color: var(--radix-card-text-dimmed-color);
      }

      .mobile-wrapper {
        display: flex;
        flex-direction: column;
        text-align: center;

        align-items: center;
        margin-bottom: 18px;
        margin-top: 25px;
        font-size: 14px;
      }

      .mobile-wrapper .header {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .mobile-wrapper .content {
        font-size: 16px;
        margin-bottom: 5px;
      }
      button {
        font-family: 'IBM Plex Sans', sans-serif;
      }
    `];W([a({type:String,reflect:!0})],z.prototype,"mode",2);W([a({type:Boolean})],z.prototype,"isMobile",2);W([a({type:String})],z.prototype,"status",2);W([a({type:Boolean})],z.prototype,"isWalletLinked",2);W([a({type:Boolean})],z.prototype,"isExtensionAvailable",2);W([a({type:Array})],z.prototype,"requestItems",2);z=W([m("radix-not-connected-page")],z);const ni="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC43MjcyNzMiIHk9IjAuNzI3MjczIiB3aWR0aD0iNjIuNTQ1NSIgaGVpZ2h0PSI2Mi41NDU1IiByeD0iMzEuMjcyNyIgZmlsbD0iI0UyRTVFRCIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPG1hc2sgaWQ9Im1hc2swXzExMjgxXzQxNDAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjEiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCAiPgo8cmVjdCB4PSIwLjcyNjU2MiIgeT0iMS4zMzUwOCIgd2lkdGg9IjYyLjU3NzQiIGhlaWdodD0iNjIuNTc3NCIgcng9IjMxLjI4ODciIGZpbGw9IiNGNEY1RjkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzExMjgxXzQxNDApIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNS44MTcxIiBjeT0iMjYuNTQ1NSIgcj0iMTIiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIxLjQ1NDU1Ii8+CjxjaXJjbGUgb3BhY2l0eT0iMC4yIiBjeD0iMzguMTgwNCIgY3k9IjI2LjU0NTUiIHI9IjEyIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMS40NTQ1NSIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik02Mi41NDQyIDYyLjU0NTVDNjIuNTQ0MiA3My44Mjg5IDUzLjg3OTYgODIuOTA5MSA0My4yNzE1IDgyLjkwOTFDMzIuNjYzNCA4Mi45MDkxIDIzLjk5ODggNzMuODI4OSAyMy45OTg4IDYyLjU0NTVDMjMuOTk4OCA1MS4yNjIxIDMyLjY2MzQgNDIuMTgxOSA0My4yNzE1IDQyLjE4MTlDNTMuODc5NiA0Mi4xODE5IDYyLjU0NDIgNTEuMjYyMSA2Mi41NDQyIDYyLjU0NTVaIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMS40NTQ1NSIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0zOS4yNzE3IDYyLjU0NTVDMzkuMjcxNyA3My44Mjg5IDMwLjYwNzEgODIuOTA5MSAxOS45OTkgODIuOTA5MUM5LjM5MDkgODIuOTA5MSAwLjcyNjI5NiA3My44Mjg5IDAuNzI2Mjk2IDYyLjU0NTVDMC43MjYyOTYgNTEuMjYyMSA5LjM5MDkgNDIuMTgxOSAxOS45OTkgNDIuMTgxOUMzMC42MDcxIDQyLjE4MTkgMzkuMjcxNyA1MS4yNjIxIDM5LjI3MTcgNjIuNTQ1NVoiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIxLjQ1NDU1Ii8+CjxjaXJjbGUgY3g9IjMxLjk5OTEiIGN5PSIyNi4xODE5IiByPSIxMi4zNjM2IiBmaWxsPSIjRTJFNUVEIiBmaWxsLW9wYWNpdHk9IjAuNSIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPHBhdGggZD0iTTUwLjkwODUgNjIuNTQ1NUM1MC45MDg1IDczLjgyODkgNDIuMjQzOSA4Mi45MDkxIDMxLjYzNTcgODIuOTA5MUMyMS4wMjc2IDgyLjkwOTEgMTIuMzYzIDczLjgyODkgMTIuMzYzIDYyLjU0NTVDMTIuMzYzIDUxLjI2MjEgMjEuMDI3NiA0Mi4xODE5IDMxLjYzNTcgNDIuMTgxOUM0Mi4yNDM5IDQyLjE4MTkgNTAuOTA4NSA1MS4yNjIxIDUwLjkwODUgNjIuNTQ1NVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMTI4MV80MTQwKSIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExMjgxXzQxNDAiIHgxPSIzMS42MzU3IiB5MT0iNDUuMDkxIiB4Mj0iMzEuNjM1NyIgeTI9IjU3LjgxODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0UyRTVFRCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMkU1RUQiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,F=(i,e,t,o)=>{for(var r=o>1?void 0:o?ai(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&si(e,t,r),r};let S=class extends b{constructor(){super(...arguments),this.mode=v.light,this.persona="",this.personaData=[]}render(){return l`<radix-card mode=${this.mode}>
      <div
        class=${j({center:(this.personaData||[]).length<2,"persona-card":!0})}
      >
        <div class="placeholder">
          <div
            class=${j({avatar:!!this.avatarUrl})}
            style=${gt({backgroundImage:`url(${u(this.avatarUrl)})`})}
          ></div>
        </div>
        <div class="content">
          <span class="persona">${this.persona}</span>
          <ul>
            ${(this.personaData||[]).map(i=>l`<li>${i}</li>`)}
          </ul>
        </div>
      </div></radix-card
    >`}};S.styles=[D,N`
      :host {
        display: flex;
        width: 100%;
      }

      .avatar {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        align-self: center;
        border: 2px solid var(--radix-avatar-border-color);
      }

      .placeholder {
        width: 64px;
        height: 64px;
        background-image: url(${u(ni)});
      }

      .persona-card {
        display: grid;
        gap: 20px;
        align-items: flex-start;
        grid-template-columns: 1fr 230px;
      }

      .persona-card.center {
        align-items: center;
      }

      .persona {
        font-size: 14px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        white-space: nowrap;
      }

      ul {
        margin-top: 5px;
        margin-bottom: 0;
        padding-inline-start: 20px;
      }

      li {
        font-size: 12px;
        word-break: break-word;
        line-height: 18px;
      }
    `];F([a({type:String,reflect:!0})],S.prototype,"mode",2);F([a({type:String,reflect:!0})],S.prototype,"icon",2);F([a({type:String})],S.prototype,"persona",2);F([a({type:String})],S.prototype,"avatarUrl",2);F([a({type:Array})],S.prototype,"personaData",2);S=F([m("radix-persona-card")],S);const $e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMTg4XzQyOCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMy43Mzc4IDQuNzYyNUMxMi42NTAzIDMuNjc1IDExLjE1NzggMyA5LjUwMDMxIDNDNi4xODUzMSAzIDMuNTA3ODEgNS42ODUgMy41MDc4MSA5QzMuNTA3ODEgMTIuMzE1IDYuMTg1MzEgMTUgOS41MDAzMSAxNUMxMi4yOTc4IDE1IDE0LjYzMDMgMTMuMDg3NSAxNS4yOTc4IDEwLjVIMTMuNzM3OEMxMy4xMjI4IDEyLjI0NzUgMTEuNDU3OCAxMy41IDkuNTAwMzEgMTMuNUM3LjAxNzgxIDEzLjUgNS4wMDAzMSAxMS40ODI1IDUuMDAwMzEgOUM1LjAwMDMxIDYuNTE3NSA3LjAxNzgxIDQuNSA5LjUwMDMxIDQuNUMxMC43NDUzIDQuNSAxMS44NTUzIDUuMDE3NSAxMi42NjUzIDUuODM1TDEwLjI1MDMgOC4yNUgxNS41MDAzVjNMMTMuNzM3OCA0Ljc2MjVaIgogICAgICAgICAgICBmaWxsPSIjMDUyQ0MwIiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTg4XzQyOCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiIC8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+CiAgICA=",_e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMTg4XzQyNCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMi43NSA1LjI1TDExLjY5MjUgNi4zMDc1TDEzLjYyNzUgOC4yNUg2VjkuNzVIMTMuNjI3NUwxMS42OTI1IDExLjY4NUwxMi43NSAxMi43NUwxNi41IDlMMTIuNzUgNS4yNVpNMyAzLjc1SDlWMi4yNUgzQzIuMTc1IDIuMjUgMS41IDIuOTI1IDEuNSAzLjc1VjE0LjI1QzEuNSAxNS4wNzUgMi4xNzUgMTUuNzUgMyAxNS43NUg5VjE0LjI1SDNWMy43NVoiCiAgICAgICAgICAgIGZpbGw9IiMwNTJDQzAiIC8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzExODhfNDI0Ij4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4KICAgIA==",pt=N`
  :host {
    width: 100%;
  }

  .header {
    font-size: 12px;
    font-weight: 400;
    margin: 15px 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    text-align: center;
  }
  .content {
    max-height: 360px;
    overflow: auto;
    width: 100%;
    margin-bottom: 0;
    position: relative;
    -webkit-mask-image: linear-gradient(180deg, black 90%, transparent 100%);
    mask-image: linear-gradient(180deg, black 90%, transparent 95%);
  }
`;var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,B=(i,e,t,o)=>{for(var r=o>1?void 0:o?li(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&ci(e,t,r),r};let w=class extends b{constructor(){super(...arguments),this.mode=v.light,this.avatarUrl="",this.persona="",this.dAppName="",this.personaData=[],this.accounts=[]}onUpdateData(i){this.dispatchEvent(new CustomEvent("onUpdateData",{detail:i,bubbles:!0,composed:!0}))}onLogout(i){this.dispatchEvent(new CustomEvent("onLogout",{detail:i,bubbles:!0,composed:!0}))}render(){return l` <div class="header">Sharing with ${this.dAppName}</div>
      <div class="content">
        <radix-persona-card
          avatarUrl=${this.avatarUrl}
          mode=${this.mode}
          persona=${this.persona}
          .personaData=${this.personaData}
        ></radix-persona-card>
        <div>
          ${(this.accounts||[]).map(({label:i,address:e,appearanceId:t})=>l`<radix-account
                label=${i}
                address=${e}
                appearanceId=${t}
              ></radix-account>`)}
        </div>
      </div>
      <div class="buttons">
        <button id="update-data" @click=${this.onUpdateData}>
          Update Data Sharing
        </button>
        <button id="logout" @click=${this.onLogout}>Log Out</button>
      </div>`}};w.styles=[D,pt,N`
      :host {
        width: 100%;
      }
      .content {
        max-height: 193px;
        overflow-x: hidden;
        padding-bottom: 19px;
      }
      .buttons {
        display: grid;
        bottom: 0;
        width: 100%;
        grid-template-columns: 1fr 143px;
        grid-gap: 10px;
        width: 100%;
        padding-top: 5px;
        align-items: end;
      }
      button {
        padding: 11px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }

      button::before {
        content: '';
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: var(--radix-button-text-color);
        display: block;
        width: 20px;
        height: 20px;
      }

      #update-data,
      #logout {
        cursor: pointer;
      }

      #update-data::before {
        -webkit-mask-image: url(${u($e)});
        mask-image: url(${u($e)});
      }

      #logout::before {
        -webkit-mask-image: url(${u(_e)});
        mask-image: url(${u(_e)});
      }
    `];B([a({type:String,reflect:!0})],w.prototype,"mode",2);B([a({type:String})],w.prototype,"avatarUrl",2);B([a({type:String})],w.prototype,"persona",2);B([a({type:String})],w.prototype,"dAppName",2);B([a({type:Array})],w.prototype,"personaData",2);B([a({type:Array})],w.prototype,"accounts",2);w=B([m("radix-sharing-page")],w);var di=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,ne=(i,e,t,o)=>{for(var r=o>1?void 0:o?gi(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&di(e,t,r),r};let Y=class extends b{constructor(){super(...arguments),this.mode=v.light,this.requestItems=[],this.dAppName="",this.loggedInTimestamp=""}render(){return l`
      <div class="header">Connected to ${this.dAppName}</div>
      <slot name="subheader"></slot>
      ${this.loggedInTimestamp?l`<div class="subheader">
            Since logged in: ${ut(this.loggedInTimestamp,", ")}
          </div>`:""}
      <div class="content">
        ${(this.requestItems||[]).map(i=>l`<radix-request-card
            type="${i.type}"
            status="${i.status}"
            id="${i.id}"
            transactionIntentHash="${i.transactionIntentHash}"
            ?showCancel="${i.showCancel}"
            @onCancel=${e=>{this.dispatchEvent(new CustomEvent("onCancel",{detail:e.detail,bubbles:!0,composed:!0}))}}
            timestamp=${i.timestamp}
            mode=${this.mode}
          ></radix-request-card>`)}
      </div>
    `}};Y.styles=[D,pt,N`
      .subheader {
        color: var(--radix-card-text-dimmed-color);
        margin-top: -12px;
        margin-bottom: 15px;
        text-align: center;
        font-size: 12px;
      }

      .content {
        padding-bottom: 25px;
      }
    `];ne([a({type:String,reflect:!0})],Y.prototype,"mode",2);ne([a({type:Array})],Y.prototype,"requestItems",2);ne([a({type:String})],Y.prototype,"dAppName",2);ne([a({type:String})],Y.prototype,"loggedInTimestamp",2);Y=ne([m("radix-requests-page")],Y);var ui=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,A=(i,e,t,o)=>{for(var r=o>1?void 0:o?Ii(e,t):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&ui(e,t,r),r};let M=class extends b{constructor(){super(),this.theme="radix-blue",this.dAppName="",this.personaLabel="",this.connected=!1,this.status=H.default,this.loggedInTimestamp="",this.showPopoverMenu=!1,this.requestItems=[],this.accounts=[],this.personaData=[],this.isMobile=!1,this.isWalletLinked=!1,this.isExtensionAvailable=!1,this.fullWidth=!1,this.activeTab="sharing",this.mode="light",this.avatarUrl="",this.compact=!1,this.windowClickEventHandler=i=>{this.showPopoverMenu&&(this.contains(i.target)||(this.showPopoverMenu=!1))},document.addEventListener("click",this.windowClickEventHandler)}get hasSharedData(){return!!(this.accounts.length||this.personaData.length)}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("onRender",{bubbles:!0,composed:!0}))}disconnectedCallback(){document.removeEventListener("click",this.windowClickEventHandler),this.dispatchEvent(new CustomEvent("onDestroy",{bubbles:!0,composed:!0}))}togglePopoverMenu(){this.showPopoverMenu=!this.showPopoverMenu,this.showPopoverMenu&&this.dispatchEvent(new CustomEvent("onShowPopover",{bubbles:!0,composed:!0}))}closePopover(){this.showPopoverMenu=!1}connectButtonTemplate(){const i=this.connected?this.personaLabel:"Connect";return l` <radix-button
      status=${this.status}
      theme=${this.theme}
      ?connected=${this.connected}
      ?fullWidth=${this.fullWidth}
      @onClick=${this.togglePopoverMenu}
      @onResize=${e=>{this.compact=e.detail.offsetWidth===40}}
      ><div>${i}</div></radix-button
    >`}connectTemplate(){if(!this.connected)return l` <radix-not-connected-page
      mode=${this.mode}
      status=${this.status}
      ?isMobile=${this.isMobile}
      .requestItems=${this.requestItems}
      ?isWalletLinked=${this.isWalletLinked}
      ?isExtensionAvailable=${this.isExtensionAvailable}
    >
    </radix-not-connected-page>`}renderSharingTemplate(){return l` <radix-sharing-page
      mode=${this.mode}
      dAppName=${this.dAppName}
      avatarUrl=${this.avatarUrl}
      persona=${this.personaLabel}
      .personaData=${(this.personaData||[]).map(i=>i.value)}
      .accounts=${this.accounts}
      @onLogout=${()=>{this.dispatchEvent(new CustomEvent("onDisconnect",{bubbles:!0,composed:!0}))}}
      @onUpdateData=${()=>{this.dispatchEvent(new CustomEvent("onUpdateSharedData",{bubbles:!0,composed:!0}))}}
    ></radix-sharing-page>`}renderRequestItemsTemplate(){return l` <radix-requests-page
      mode=${this.mode}
      loggedInTimestamp=${this.loggedInTimestamp}
      dAppName=${this.dAppName}
      .requestItems=${this.requestItems}
    ></radix-requests-page>`}popoverTemplate(){return this.showPopoverMenu?l` <radix-popover
      mode="${this.mode}"
      ?connected=${this.connected}
      ?compact=${this.compact}
      ?isMobile=${this.isMobile}
      @onClosePopover=${()=>{this.closePopover()}}
      class=${j({popover:!0,"show-popover":this.showPopoverMenu,mobile:this.isMobile})}
    >
      ${this.connected?l`
            <radix-tabs-menu
              active=${this.activeTab}
              mode=${this.mode}
              @onClick="${i=>{this.activeTab=i.detail.value}}"
            ></radix-tabs-menu>

            ${this.activeTab==="sharing"?this.renderSharingTemplate():this.renderRequestItemsTemplate()}
          `:this.connectTemplate()}
    </radix-popover>`:""}render(){return l`${this.connectButtonTemplate()} ${this.popoverTemplate()}`}};M.styles=N`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;500;600;700&display=swap');

    :root {
      font-family: 'IBM Plex Sans';
      font-weight: 400;
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :host {
      text-align: left;
      font-family: 'IBM Plex Sans';
      position: relative;
      z-index: 1000;
      display: inline-block;

      /* Core colors */
      --color-radix-green-1: #00ab84;
      --color-radix-green-2: #00c389;
      --color-radix-green-3: #21ffbe;
      --color-radix-blue-1: #060f8f;
      --color-radix-blue-2: #052cc0;
      --color-radix-blue-3: #20e4ff;
      --color-light: #ffffff;
      --color-dark: #000000;

      /* Accent colors */
      --color-accent-red: #ef4136;
      --color-accent-blue: #00aeef;
      --color-accent-yellow: #fff200;
      --color-alert: #e59700;
      --color-radix-error-red-1: #c82020;
      --color-radix-error-red-2: #fcebeb;

      /* Neutral colors */
      --color-grey-1: #003057;
      --color-grey-2: #8a8fa4;
      --color-grey-3: #ced0d6;
      --color-grey-4: #e2e5ed;
      --color-grey-5: #f4f5f9;
    }

    .popover {
      position: absolute;
      top: calc(100% + 0.5rem);
      right: 0;
    }

    .mobile.popover {
      position: fixed;
      top: 0;
      left: 0;
      right: unset;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.4);
    }

    @-webkit-keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }

    radix-popover {
      opacity: 0;
    }
    radix-popover.show-popover {
      -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  `;A([a({type:String})],M.prototype,"theme",2);A([a({type:String})],M.prototype,"dAppName",2);A([a({type:String})],M.prototype,"personaLabel",2);A([a({type:Boolean})],M.prototype,"connected",2);A([a({type:String})],M.prototype,"status",2);A([a({type:String})],M.prototype,"loggedInTimestamp",2);A([a({type:Boolean})],M.prototype,"showPopoverMenu",2);A([a({type:Array})],M.prototype,"requestItems",2);A([a({type:Array})],M.prototype,"accounts",2);A([a({type:Array})],M.prototype,"personaData",2);A([a({type:Boolean})],M.prototype,"isMobile",2);A([a({type:Boolean})],M.prototype,"isWalletLinked",2);A([a({type:Boolean})],M.prototype,"isExtensionAvailable",2);A([a({type:Boolean})],M.prototype,"fullWidth",2);A([a({type:String})],M.prototype,"activeTab",2);A([a({type:String})],M.prototype,"mode",2);A([a({type:String})],M.prototype,"avatarUrl",2);A([a({type:Boolean,state:!0})],M.prototype,"compact",2);M=A([m("radix-connect-button")],M);export{M as ConnectButton,v as RadixButtonMode,H as RadixButtonStatus};
