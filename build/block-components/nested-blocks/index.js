(()=>{"use strict";var e,r={720:()=>{const e=window.wp.blocks,r=window.wp.element,o=(window.wp.i18n,window.wp.blockEditor),n=JSON.parse('{"u2":"learn-gutenberg/nested-blocks"}');(0,e.registerBlockType)(n.u2,{edit:function(){const e=(0,o.useBlockProps)();return(0,r.createElement)("div",e,(0,r.createElement)(o.InnerBlocks,{allowedBlocks:["core/image","core/paragraph","learn-gutenberg/static-block"],template:[["core/image",{}],["core/heading",{placeholder:"Book Title"}],["core/paragraph",{placeholder:"Summary"}]],orientation:"horizontal"}))},save:function(){const e=o.useBlockProps.save();return(0,r.createElement)("div",e,(0,r.createElement)(o.InnerBlocks.Content,null))}})}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,o,t,a)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,t,a]=e[p],i=!0,c=0;c<o.length;c++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(p--,1);var s=t();void 0!==s&&(r=s)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,t,a]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={811:0,393:0};n.O.j=r=>0===e[r];var r=(r,o)=>{var t,a,[l,i,c]=o,s=0;if(l.some((r=>0!==e[r]))){for(t in i)n.o(i,t)&&(n.m[t]=i[t]);if(c)var p=c(n)}for(r&&r(o);s<l.length;s++)a=l[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},o=globalThis.webpackChunklearn_gutenberg=globalThis.webpackChunklearn_gutenberg||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var t=n.O(void 0,[393],(()=>n(720)));t=n.O(t)})();