(()=>{"use strict";var e,r={610:()=>{const e=window.wp.blocks,r=window.wp.element,n=window.wp.i18n,t=window.wp.blockEditor,o=window.wp.data,i=JSON.parse('{"u2":"learn-gutenberg/dynamic-block"}');(0,e.registerBlockType)(i.u2,{edit:function(){const e=(0,o.useSelect)((e=>e("core").getEntityRecords("postType","post")),[]);return(0,r.createElement)("div",(0,t.useBlockProps)(),!e&&(0,n.__)("Loading","learn-gutenberg"),e&&0===e.length&&(0,n.__)("No Posts","learn-gutenberg"),e&&e.length>0&&(0,r.createElement)("a",{href:e[0].link},e[0].title.rendered))}})}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,t),i.exports}t.m=r,e=[],t.O=(r,n,o,i)=>{if(!n){var l=1/0;for(p=0;p<e.length;p++){for(var[n,o,i]=e[p],a=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(p--,1);var c=o();void 0!==c&&(r=c)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,o,i]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={109:0,11:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,i,[l,a,s]=n,c=0;if(l.some((r=>0!==e[r]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var p=s(t)}for(r&&r(n);c<l.length;c++)i=l[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},n=globalThis.webpackChunklearn_gutenberg=globalThis.webpackChunklearn_gutenberg||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[11],(()=>t(610)));o=t.O(o)})();