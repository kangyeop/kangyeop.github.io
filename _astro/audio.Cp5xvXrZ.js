import{r as c}from"./index.BVOCwoKb.js";var f={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function E(){if(p)return l;p=1;var d=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(s,t,e){var n=null;if(e!==void 0&&(n=""+e),t.key!==void 0&&(n=""+t.key),"key"in t){e={};for(var i in t)i!=="key"&&(e[i]=t[i])}else e=t;return t=e.ref,{$$typeof:d,type:s,key:n,ref:t!==void 0?t:null,props:e}}return l.Fragment=a,l.jsx=o,l.jsxs=o,l}var R;function h(){return R||(R=1,f.exports=E()),f.exports}var u=h();function k({audioSrc:d,autoPlay:a=!1,startTime:o=0}){const s=c.useRef(null),[t,e]=c.useState(!1),[n,i]=c.useState(!0);c.useEffect(()=>{if(s.current&&a){s.current.currentTime=o;const r=s.current.play();r!==void 0&&r.then(()=>{e(!0)}).catch(x=>{console.log("자동 재생 실패:",x),e(!1)})}},[a,o]);const m=()=>{const r=s.current;t?(r.pause(),e(!1)):r.play().then(()=>{e(!0)}).catch(x=>{console.log("재생 실패:",x)})},v=()=>{const r=s.current;r.muted=!r.muted,i(r.muted)};return u.jsxs("div",{className:"audio-player",children:[u.jsx("audio",{ref:s,src:d,muted:n,onEnded:()=>e(!1)}),u.jsxs("div",{className:"controls",children:[u.jsx("p",{className:"music_info",children:"이다능 - 세상 그 누구보다 소중해"}),u.jsx("button",{onClick:m,children:t?"일시정지":"재생"}),u.jsx("button",{onClick:v,children:n?"음소거 해제":"음소거"})]})]})}export{k as default};
