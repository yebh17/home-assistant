function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.trustedTypes,h=l?l.emptyScript:"",a=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{e?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=d){var i,r;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(r=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:c.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var s,i,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),l=t.converter,h=null!==(r=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==r?r:c.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.2");const _=globalThis.trustedTypes,f=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,$="?"+v,y=`<${$}>`,m=document,b=(t="")=>m.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,k=/"/g,T=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),U=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),I=new WeakMap,M=m.createTreeWalker(m,129,null,!1),B=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=C;for(let e=0;e<s;e++){const s=t[e];let l,h,a=-1,c=0;for(;c<s.length&&(o.lastIndex=c,h=o.exec(s),null!==h);)c=o.lastIndex,o===C?"!--"===h[1]?o=E:void 0!==h[1]?o=S:void 0!==h[2]?(T.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=x):void 0!==h[3]&&(o=x):o===x?">"===h[0]?(o=null!=r?r:C,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?x:'"'===h[3]?k:O):o===k||o===O?o=x:o===E||o===S?o=C:(o=x,r=void 0);const u=o===x&&t[e+1].startsWith("/>")?" ":"";n+=o===C?s+y:a>=0?(i.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+v+u):s+v+(-2===a?(i.push(void 0),e):u)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[h,a]=B(t,e);if(this.el=R.createElement(h,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const s=a[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?F:"@"===e[1]?W:L})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(T.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],b()),M.nextNode(),l.push({type:2,index:++r});i.append(t[e],b())}}}else if(8===i.nodeType)if(i.data===$)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)l.push({type:7,index:r}),t+=v.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function N(t,e,s=t,i){var r,n,o,l;if(e===U)return e;let h=void 0!==i?null===(r=s._$Cl)||void 0===r?void 0:r[i]:s._$Cu;const a=w(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=h:s._$Cu=h),void 0!==h&&(e=N(t,h._$AS(t,e.values),h,i)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(s,!0);M.currentNode=r;let n=M.nextNode(),o=0,l=0,h=i[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new V(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new q(n,this,t)),this.v.push(e),h=i[++l]}o!==(null==h?void 0:h.index)&&(n=M.nextNode(),o++)}return r}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),w(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==H&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(s);else{const t=new D(r,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new R(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new V(this.M(b()),this.M(b()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,s,i,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=N(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=N(this,i[s+o],e,o),l===U&&(l=this._$AH[o]),n||(n=!w(l)||l!==this._$AH[o]),l===H?t=H:t!==H&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.C(t)}C(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends L{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===H?void 0:t}}const j=_?_.emptyScript:"";class F extends L{constructor(){super(...arguments),this.type=4}C(t){t&&t!==H?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class W extends L{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=N(this,t,e,0))&&void 0!==s?s:H)===U)return;const i=this._$AH,r=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,K;null==G||G(R,V),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.4");class J extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new V(e.insertBefore(b(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}J.finalized=!0,J._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:J});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:J}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y;null===(Y=window.HTMLSlotElement)||void 0===Y||Y.prototype.assignedElements;class tt{}tt.LuminanceBreakingPoint=192,tt.LightColor="#fff",tt.DarkColor="rgba(0,0,0,0.7)",tt.DarkOffColor="rgba(0,0,0,0.5)",tt.WarmColor="#ffda95",tt.ColdColor="#f5f5ff",tt.DefaultColor="warm",tt.OffColor="#666",tt.GradientOffset=10,tt.DefaultOneIcon="mdi:lightbulb",tt.DefaultTwoIcon="mdi:lightbulb-multiple",tt.DefaultMoreIcon="mdi:lightbulb-group",tt.TimeCacheInterval=1500;class et{constructor(t,e,s){"string"==typeof t?this.parse(t):(this._red=t,this._green=null!=e?e:0,this._blue=null!=s?s:0)}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,s){return this.getLuminance()+s<tt.LuminanceBreakingPoint?t:e}parse(t,e=!0){if(t.startsWith("#"))if(3==(t=t.substring(1)).length)this._red=parseInt(t.substring(0,1)+t.substring(0,1),16),this._green=parseInt(t.substring(1,2)+t.substring(1,2),16),this._blue=parseInt(t.substring(2,3)+t.substring(2,3),16);else{if(6!=t.length)throw new Error("Hex color format should have 3 or 6 letters");this._red=parseInt(t.substring(0,2),16),this._green=parseInt(t.substring(2,4),16),this._blue=parseInt(t.substring(4,6),16)}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a]: "+t);this._red=parseInt(e[1]),this._green=parseInt(e[2]),this._blue=parseInt(e[3])}}}toString(){return`rgb(${this._red}, ${this._green}, ${this._blue})`}}class st{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof et)return[t];if(t instanceof st)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,s){if(this._colors.length<3)return this._colors[0].getForeground(t,e,s);let i=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,s)&&i++;return i>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=tt.GradientOffset;let s=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,i=0;for(let r=1;r<this._colors.length;r++)i+=t,r+1==this._colors.length&&(s+=`, ${this._colors[r]} ${100-e}%`),s+=`, ${this._colors[r]} ${Math.round(i)}%`;return`linear-gradient(90deg, ${s})`}}class it{constructor(t,e=!1){this.value=t,this.dontCache=e}}class rt{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),s=this._lastValues[t];if(s&&e-s.time<this._cacheInterval)return s.value;let i=this._factories[t](),r=!1;if(i instanceof it){const t=i;i=t.value,r=t.dontCache}return r||this.setValue(t,i),i}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class nt{constructor(t){const e=t.split(".")[0];if("light"!=e)throw new Error(`Unsupported entity type: ${e}. The only supported type is 'light'.`);this._entity_id=t,this.initTimeCache()}set hass(t){this._hass=t,this._entity=this._hass.states[this._entity_id]}getAttributes(){return this._entity.attributes}initTimeCache(){this._cache=new rt(tt.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new it(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("value",(()=>new it(this.valueGetFactory(),this.getDontCacheValue())))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheValue(){return this.getDontCacheState()||null==this._entity.attributes.brightness}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnValue&&this._cache.setValue("value",this._lastOnValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("value",0)}notifyValueChanged(t){t>0&&(this._lastOnValue=t),this._cache.setValue("value",t),this._cache.setValue("state",t>0?"on":"off")}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id})}valueGetFactory(){var t;if(this.isOff())return 0;const e=null!==(t=this.getAttributes().brightness)&&void 0!==t?t:1;return this._lastOnValue=Math.round(100*e/255),this._lastOnValue}get value(){return this._cache.getValue("value")}set value(t){t<0?t=0:t>100&&(t=100),this.notifyValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){return this._entity.attributes.friendly_name}getBackground(){const t=this.getAttributes().rgb_color;if(!t)return this._lastBackground?this._lastBackground:null;const e=new et(t[0],t[1],t[2]);return this._lastBackground=new st([e]),new st([this._lastBackground])}}class ot{static getLightContainer(t){let e=this._containers[t];return e||(e=new nt(t),this._containers[t]=e),e}}ot._containers={};class lt{constructor(t,e){if(!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>ot.getLightContainer(t)))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t))}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get value(){return this.valueGetFactory()}set value(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].value=t);if(0==e.length)return void this._lights.forEach((e=>e.value=t));const s=this.value,i=t-s,r=i>0?100-this.value:this.value,n=i/r;this._lights.forEach((e=>{if(e.value==s)return void(e.value=t);const r=i>0?100-e.value:e.value,o=Math.round(r*n);let l=e.value+o;l<1&&t>0&&(l=1),e.value=l}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((s=>{s.isOn()&&(e++,t+=s.value)})),0==e)return 0;return t/e*1}getIcon(){return this._lights.length>2?tt.DefaultMoreIcon:this._lights.length>1?tt.DefaultTwoIcon:this._lights[0].getIcon()||tt.DefaultOneIcon}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),t}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new st(t)}}let ht=class extends J{setConfig(t){this._config=t;const e=[];t.entity&&e.push(t.entity),t.entities&&t.entities.forEach((t=>e.push(t))),this._ctrl=new lt(e,class{static getColor(t){switch(t){case"warm":return new et(tt.WarmColor);case"cold":return new et(tt.ColdColor);default:return new et(t)}}}.getColor(t.defaultColor||tt.DefaultColor)),this._offBackground=new st([new et(this._config.offColor||tt.OffColor)])}getCardSize(){return 3}changed(t){var e,s;if(t){const t=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-slider")).value;null!=t&&(this._ctrl.value=parseInt(t))}else{(null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("ha-switch")).checked?this._ctrl.turnOn():this._ctrl.turnOff()}this.updateStyles()}calculateCurrentShadow(){if(this._ctrl.isOff())return this._config.disableOffShadow?"0px 0px 0px white":"inset 0px 0px 10px rgba(0,0,0,0.2)";const t=this.renderRoot.querySelector("ha-card");if(!t)return"";const e=100-this._ctrl.value,s=20+.95*e*(t.clientHeight/100);let i=t.clientHeight/2;e>70&&(i-=(i-20)*(e-70)/30);let r=.65;return e>60&&(r-=(r-.5)*(e-60)/40),`inset 0px -${s}px ${i}px -20px rgba(0,0,0,${r})`}getCurrentBackground(){return this._ctrl.isOff()?this._offBackground:this._ctrl.getBackground()||this._offBackground}updateStyles(){const t=this.getCurrentBackground()||this._offBackground,e=this._ctrl.isOn()&&this._ctrl.value>50?-(10-(this._ctrl.value-50)/5):0,s=this._ctrl.isOn()&&this._ctrl.value<=50?tt.LightColor:t.getForeground(tt.LightColor,this._ctrl.isOn()?tt.DarkColor:tt.DarkOffColor,e);this.style.setProperty("--hue-background",t.toString()),this.style.setProperty("--hue-box-shadow",this.calculateCurrentShadow()),this.style.setProperty("--hue-text-color",s)}render(){this._ctrl.hass=this.hass;const t=this._config.allowZero?0:1,e=this._config.title||this._ctrl.getTitle();return P`<ha-card>
            <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
            <h2>${e}</h2>
            <ha-switch .checked=${this._ctrl.isOn()} .disabled=${this._ctrl.isUnavailable()} .haptic=true @change=${()=>this.changed(!1)}></ha-switch>

            <ha-slider .min=${t} .max=${100} .step=${1} .disabled=${!this._config.allowZero&&this._ctrl.isOff()} .value=${this._ctrl.value}
            pin @change=${()=>this.changed(!0)}
            ignore-bar-touch
            ></ha-slider>
        </ha-card>`}firstUpdated(){(null==this._config.hueBorders||this._config.hueBorders)&&(this.renderRoot.querySelector("ha-card").className="hue-borders"),this.updated()}updated(){this.updateStyles()}connectedCallback(){super.connectedCallback(),this.updateStyles()}};ht.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,s)})`
    ha-card
    {
        height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow),
            var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) /* default_ha_shadows */
        );
    }
    ha-card.hue-borders
    {
        border-radius:10px;
        box-shadow:var(--hue-box-shadow), 0px 2px 3px rgba(0,0,0,0.85);
    }
    ha-icon
    {
        position:absolute;
        left:22px;
        top:17px;
        transform:scale(2);
        color:var(--hue-text-color);
        transition:all 0.3s ease-out 0s;
    }
    h2
    {
        padding-top:0.5em;
        margin:0px 60px 0px 70px;
        min-height:22px;
        vertical-align:top;
        font-weight:400;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        color:var(--hue-text-color);
        transition:all 0.3s ease-out 0s;
    }
    ha-switch
    {
        position:absolute;
        right:14px;
        top:22px;
    }
    ha-slider
    {
        position:absolute;
        bottom:0;
        width:100%;
    }
    `,t([function(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):X(t,e)}()],ht.prototype,"hass",void 0),ht=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("hue-like-light-card")],ht);export{ht as HueLikeLightCard};
