(()=>{"use strict";var e,o={227:()=>{const e=window.wp.blocks,o=window.wp.element,r=window.wp.i18n,t=window.wp.blockEditor,n=JSON.parse('{"u2":"create-block/dev-blocks"}');(0,e.registerBlockType)(n.u2,{edit:function(){return(0,o.createElement)("p",(0,t.useBlockProps)(),(0,r.__)("Dev Blocks – hello from the editor!","dev-blocks"))},save:function(){return(0,o.createElement)("p",t.useBlockProps.save(),"Dev Blocks – hello from the saved content!")}})}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return o[e](l,l.exports,t),l.exports}t.m=o,e=[],t.O=(o,r,n,l)=>{if(!r){var s=1/0;for(v=0;v<e.length;v++){for(var[r,n,l]=e[v],c=!0,i=0;i<r.length;i++)(!1&l||s>=l)&&Object.keys(t.O).every((e=>t.O[e](r[i])))?r.splice(i--,1):(c=!1,l<s&&(s=l));if(c){e.splice(v--,1);var a=n();void 0!==a&&(o=a)}}return o}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[r,n,l]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={826:0,431:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var n,l,[s,c,i]=r,a=0;if(s.some((o=>0!==e[o]))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(i)var v=i(t)}for(o&&o(r);a<s.length;a++)l=s[a],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(v)},r=globalThis.webpackChunkdev_blocks=globalThis.webpackChunkdev_blocks||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var n=t.O(void 0,[431],(()=>t(227)));n=t.O(n)})();