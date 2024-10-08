let btn=document.createElement("button");
btn.innerText="clicked me !"; 
console.log(btn);

btn.style.backgroundColor="red";
btn.style.color="white";

let div=document.querySelector("div");
div.prepend(btn);

