let boxes=document.querySelectorAll(".box");
let resets=document.querySelector("#reset") ;
let newGames=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let runO=true ;
 
const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

 //const resetGame=()=>{
   // run0=true ;
  //  enableBtn();
 //} 
 function resetGame(){      // to call the rset button 
    boxes.forEach(box=>{
   box.textContent="" ;  // reset each cell to empty
   box.disabled=false ;  // renable the cell to be clickable
 
    });

    runO=false ; //   reset the player O
    
    msgContainer.classList.add("hide") ;  // hide the winner message
    msg.innerText="" ; // clear the winner message
 }
newGames.addEventListener('click',resetGame)
 
const checkDraw=()=>{
    // check if all cells are filled
    let isDraw=true ;
    boxes.forEach(box=>{
        if(box.innerText===''){
            isDraw=false ;   // if any cell is still empty its not draw
        }
    });
    if(isDraw){
        displayDraw(); 
    }
};
const displayDraw=()=>{
    msg.innerText="It's a draw" ;
    msgContainer.classList.remove("hide");
    disbtn();

}

boxes.forEach(box=>{
   box.addEventListener("click" ,()=>{
    console.log("click event");

    if(runO==true)
    {
        box.innerText="O";
        runO=false ;
    }
    else{
         box.innerText="X"
         runO=true ;
    }
    box.disabled=true;
    
   checkWinner();
   checkDraw();
   });

});

const disabledBtn=()=>{
    for(let boxx of boxes)
    {
        boxx.disabled=true ;
    }
   };

   const enableBtn=()=>{
    for(let boxx of boxes)
    {
        boxx.disabled=false ;
    }
   }

const showWinner=(winner)=>{
 msg.innerText=`Congratulation Winner is ${winner}`;
 msgContainer.classList.remove("hide") ;
 disabledBtn();
}

const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        let posVal1=boxes[pattern[0]].innerText ;
        let posVal2=boxes[pattern[1]].innerText ;
        let posVal3=boxes[pattern[2]].innerText ;

        if(posVal1 !="" && posVal2!="" && posVal3 !="")
            {
                if(posVal1==posVal2 && posVal2==posVal3)
                {
                    console.log("Winner",posVal1);
                   
                    showWinner(posVal1);
                   
                }
            } 
    }
    
}