(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function a(){}function L(e){return e()}function E(){return Object.create(null)}function _(e){e.forEach(L)}function S(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function P(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode.removeChild(e)}function q(e){return document.createElement(e)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const f=[],A=[],h=[],O=[],F=Promise.resolve();let y=!1;function T(){y||(y=!0,F.then(j))}function b(e){h.push(e)}const g=new Set;let m=0;function j(){const e=$;do{for(;m<f.length;){const t=f[m];m++,d(t),D(t.$$)}for(d(null),f.length=0,m=0;A.length;)A.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];g.has(n)||(g.add(n),n())}h.length=0}while(f.length);for(;O.length;)O.pop()();y=!1,g.clear(),d(e)}function D(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const H=new Set;function K(e,t){e&&e.i&&(H.delete(e),e.i(t))}function z(e,t,n,s){const{fragment:r,on_mount:c,on_destroy:i,after_update:p}=e.$$;r&&r.m(t,n),s||b(()=>{const u=c.map(L).filter(S);i?i.push(...u):_(u),e.$$.on_mount=[]}),p.forEach(b)}function G(e,t){const n=e.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(f.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,s,r,c,i,p=[-1]){const u=$;d(e);const o=e.$$={fragment:null,ctx:null,props:c,update:a,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:E(),dirty:p,skip_bound:!1,root:t.target||u.$$.root};i&&i(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(l,k,...v)=>{const w=v.length?v[0]:k;return o.ctx&&r(o.ctx[l],o.ctx[l]=w)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](w),x&&J(e,l)),k}):[],o.update(),x=!0,_(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const l=C(t.target);o.fragment&&o.fragment.l(l),l.forEach(N)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),j()}d(u)}class R{$destroy(){G(this,1),this.$destroy=a}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=q("main"),t.innerHTML=`<h1>D\xE9mos du cours <em>IFT1016</em></h1> 
    <section>1</section> 
    <section>2</section> 
    <section>3</section> 
    <section>4</section> 
    <section>5</section>`,B(t,"class","svelte-dmmqr2")},m(n,s){P(n,t,s)},p:a,i:a,o:a,d(n){n&&N(t)}}}class V extends R{constructor(t){super(),Q(this,t,null,U,I,{})}}new V({target:document.getElementById("app")});
