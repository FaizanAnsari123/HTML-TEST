// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="pink";
// div.style.fontSize="19px";
// div.innerText="hey ! faiz ";

// let p=document.querySelector("p");
// console.log(p.setAttribute("class","newClass"));

let  btn=document.createElement("button");
btn.innerText="Clicked me" ;
let div=document.querySelector("div");
div.append(btn);
btn.style.backgroundColor="pink";
btn.style.border="1px solid aquamarine";


let heading=document.createElement("h1");
heading.innerHTML="I am Faizz" ;
document.querySelector("body").prepend(heading);
