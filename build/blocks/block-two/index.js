(()=>{"use strict";var e,t={317:()=>{const e=window.wp.blocks,t=window.wp.element,o=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,r=JSON.parse('{"u2":"create-block/block-two"}');(0,e.registerBlockType)(r.u2,{edit:function(e){const{attributes:r,setAttributes:n}=e,a=(0,o.useBlockProps)({tagName:"div",className:"my-richtext",value:r.content,placeholder:"テキストを入力...",style:{color:r.color||null},onChange:e=>{n({content:e})}});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichText,a),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:"Chon mau"},(0,t.createElement)(l.SelectControl,{value:r.color,options:[{value:"",label:"Chon mau"},{value:"red",label:"Mau do"},{value:"blue",label:"Mau xanh"}],onChange:e=>{n({color:e})}}))))},save:function(e){const{attributes:l}=e,r=o.useBlockProps.save({tagName:"div",className:"my-richtext",value:l.content,style:{color:l.color||null}});return(0,t.createElement)(o.RichText.Content,r)}})}},o={};function l(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,o,r,n)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,r,n]=e[u],c=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](o[s])))?o.splice(s--,1):(c=!1,n<a&&(a=n));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={172:0,290:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[a,c,s]=o,i=0;if(a.some((t=>0!==e[t]))){for(r in c)l.o(c,r)&&(l.m[r]=c[r]);if(s)var u=s(l)}for(t&&t(o);i<a.length;i++)n=a[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(u)},o=globalThis.webpackChunkdev_blocks=globalThis.webpackChunkdev_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=l.O(void 0,[290],(()=>l(317)));r=l.O(r)})();