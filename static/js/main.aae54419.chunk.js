(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(16)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c);a(13),a(14),a(15);const s=e=>{let{piece:t,index:a,onDragStart:n,onDrop:c}=e;return r.a.createElement("div",{className:"PuzzlePiece",draggable:!0,onDragStart:e=>n(e,a),onDrop:e=>c(e,a),onDragOver:e=>e.preventDefault()},r.a.createElement("img",{src:t,alt:"Puzzle piece ".concat(a)}))};var o=()=>{const[e,t]=Object(n.useState)(null),[a,c]=Object(n.useState)([]),[l,o]=Object(n.useState)([]),[i,u]=Object(n.useState)(!1),[m,d]=Object(n.useState)(0),[g,p]=Object(n.useState)(0),[f,E]=Object(n.useState)(!1),h=Object(n.useRef)(null),v=Object(n.useRef)(null),b=e=>{const t=h.current;if(t){const a=t.getContext("2d"),n=e.width/4,r=e.height/4,l=[];t.width=n,t.height=r;for(let c=0;c<4;c++)for(let s=0;s<4;s++)a.clearRect(0,0,t.width,t.height),a.drawImage(e,s*n,c*r,n,r,0,0,n,r),l.push(t.toDataURL());c(l),o(O(l))}},O=e=>{const t=[...e];for(let a=t.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[t[a],t[e]]=[t[e],t[a]]}return t},z=(e,t)=>{e.dataTransfer.setData("pieceIndex",t),f||f||(E(!0),v.current=setInterval(()=>{p(e=>e+1)},1e3))},S=(e,t)=>{const a=parseInt(e.dataTransfer.getData("pieceIndex"),10);if(a===t)return;const n=[...l];[n[a],n[t]]=[n[t],n[a]],o(n),w(n)},w=e=>{JSON.stringify(e)===JSON.stringify(a)&&(u(!0),clearInterval(v.current),E(!1),d(g))};return Object(n.useEffect)(()=>()=>{clearInterval(v.current)},[]),r.a.createElement("div",{className:"PuzzleContainer"},r.a.createElement("div",{className:"center"},!e&&r.a.createElement("div",{className:"animatedMessage"},"Insert your image here"),!e&&r.a.createElement("input",{type:"file",onChange:e=>{const a=e.target.files[0];if(a){const e=new Image;e.src=URL.createObjectURL(a),e.onload=(()=>{t(e),b(e)})}}})),r.a.createElement("div",{className:"PuzzleBoard"},r.a.createElement("div",{className:"PuzzleGrid"},l.map((e,t)=>r.a.createElement(s,{key:t,piece:e,index:t,onDragStart:z,onDrop:S})))),r.a.createElement("div",{className:"RightSide"},e&&r.a.createElement("img",{src:e.src,alt:"Original uploaded"}),i&&r.a.createElement("div",{className:"CompletionMessage"},r.a.createElement("h2",null,"Congratulations!"),r.a.createElement("p",null,"You have spent ",m," seconds to complete the puzzle."),r.a.createElement("button",{onClick:()=>{t(null),c([]),o([]),u(!1),p(0),d(0)}},"Play Again"))),r.a.createElement("canvas",{ref:h,style:{display:"none"}}))};var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to the Jigsaw Puzzle Game!"),r.a.createElement("p",null,"Your favorite image to explore jigsaw."),r.a.createElement(o,null)," ")};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)))}],[[4,1,2]]]);
//# sourceMappingURL=main.aae54419.chunk.js.map