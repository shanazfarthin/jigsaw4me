(this["webpackJsonpjigsaw-puzzle"]=this["webpackJsonpjigsaw-puzzle"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=(c(13),c(14),c(15),c(0));const l=e=>{let{piece:t,index:c,onDragStart:s,onDrop:n}=e;return Object(i.jsx)("div",{className:"PuzzlePiece",draggable:!0,onDragStart:e=>s(e,c),onDrop:e=>n(e,c),onDragOver:e=>e.preventDefault(),children:Object(i.jsx)("img",{src:t,alt:"Puzzle piece ".concat(c)})})};var o=()=>{const[e,t]=Object(s.useState)(null),[c,n]=Object(s.useState)([]),[a,r]=Object(s.useState)([]),[o,j]=Object(s.useState)(!1),[d,u]=Object(s.useState)(0),[h,b]=Object(s.useState)(0),[O,g]=Object(s.useState)(!1),p=Object(s.useRef)(null),x=Object(s.useRef)(null),f=e=>{const t=p.current;if(t){const c=t.getContext("2d"),s=e.width/4,a=e.height/4,i=[];t.width=s,t.height=a;for(let n=0;n<4;n++)for(let r=0;r<4;r++)c.clearRect(0,0,t.width,t.height),c.drawImage(e,r*s,n*a,s,a,0,0,s,a),i.push(t.toDataURL());n(i),r(m(i))}},m=e=>{const t=[...e];for(let c=t.length-1;c>0;c--){const e=Math.floor(Math.random()*(c+1));[t[c],t[e]]=[t[e],t[c]]}return t},v=(e,t)=>{e.dataTransfer.setData("pieceIndex",t),O||O||(g(!0),x.current=setInterval((()=>{b((e=>e+1))}),1e3))},z=(e,t)=>{const c=parseInt(e.dataTransfer.getData("pieceIndex"),10);if(c===t)return;const s=[...a];[s[c],s[t]]=[s[t],s[c]],r(s),S(s)},S=e=>{JSON.stringify(e)===JSON.stringify(c)&&(j(!0),clearInterval(x.current),g(!1),u(h))};return Object(s.useEffect)((()=>()=>{clearInterval(x.current)}),[]),Object(i.jsxs)("div",{className:"PuzzleContainer",children:[Object(i.jsxs)("div",{className:"center",children:[!e&&Object(i.jsx)("div",{className:"animatedMessage",children:"Insert your image here"}),!e&&Object(i.jsx)("input",{type:"file",onChange:e=>{const c=e.target.files[0];if(c){const e=new Image;e.src=URL.createObjectURL(c),e.onload=()=>{t(e),f(e)}}}})]}),Object(i.jsx)("div",{className:"PuzzleBoard",children:Object(i.jsx)("div",{className:"PuzzleGrid",children:a.map(((e,t)=>Object(i.jsx)(l,{piece:e,index:t,onDragStart:v,onDrop:z},t)))})}),Object(i.jsxs)("div",{className:"RightSide",children:[e&&Object(i.jsx)("img",{src:e.src,alt:"Original uploaded"}),o&&Object(i.jsxs)("div",{className:"CompletionMessage",children:[Object(i.jsx)("h3",{children:"Congratulations!"}),Object(i.jsxs)("p",{children:["You have spent ",Object(i.jsx)("b",{children:d})," seconds to complete the puzzle."]}),Object(i.jsx)("button",{onClick:()=>{t(null),n([]),r([]),j(!1),b(0),u(0)},children:"Play Again"})]})]}),Object(i.jsx)("canvas",{ref:p,style:{display:"none"}})]})};var j=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Welcome to the Jigsaw Puzzle Game!"}),Object(i.jsx)("h2",{children:"Your favorite image to explore jigsaw."}),Object(i.jsx)(o,{})," "]})};r.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9be3b254.chunk.js.map