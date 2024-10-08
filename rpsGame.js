let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice =()=>{
  // rock , paper ,scissor
  const options=["Rock","Paper","Scissor"];
  const randomIndex=Math.floor(Math.random()*3);
  return options[randomIndex];
}

const drawGame= () =>{
  console.log(" game was draw ");
};

 const showWinner=(userWin ) =>{
    if(userWin){
      console.log("you win !");
    }
    else{
    console.log("you lose !");
    }
 }
 
const playgame=(userChoice) =>{
  console.log("user choice =" , userChoice);
  //generate computer choice
  const compChoice=genCompChoice();
  console.log("com choice =", compChoice);

  if(userChoice===compChoice){
   // draw game
   drawGame();
  }
  else{
    let userWin=true;
      if(userChoice==="rock"){
        // paper ,scissor
       userWin = compChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper"){
        // rock ,scissor
         userWin = compChoice === "scissor" ? false : true;
      }
      else{
        // rock,paper
         userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin);
  }
};



choices.forEach( (choice)=>{
choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id");
    playgame(userChoice);
  }); 
});