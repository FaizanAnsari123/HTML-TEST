let userScore=0 ;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const winSound=document.querySelector("#win-sound");
const looseSound=document.querySelector("#lose-sound");
const drawSound=document.querySelector("#draw-sound");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["stone","paper","scissor"]
    const randomIdx=Math.floor(Math.random()*3) ;
    return option[randomIdx] ;

   
}

const drawGame =()=>{
    
    msg.innerText='game draw ! play again' ;
    drawSound.play();
    msg.style.backgroundColor="#081b31" ;
}

const showWinner=(userWin ,userChoice,compChoice)=>{
 if(userWin){
    userScore++ ;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
    winSound.play();
    msg.style.backgroundColor="green" 
 }
 else
 {
    compScore++ ;
    compScorePara.innerText=compScore;
    msg.innerText=`you Loose! ${compChoice} beats ${userChoice}`;
    looseSound.play();
    msg.style.backgroundColor="red" 
 }
}

const playerGame=(userChoice)=>{
   console.log("choice clicked =" ,userChoice);
   const compChoice=genCompChoice();  
   console.log("compChoice=",compChoice);

   if(userChoice===compChoice)
    {
    drawGame()
    }
    else{
        let userWin=true ;
        if(userChoice==="stone")
        {
            // paper scissor
         userWin=compChoice === "paper"?false:true;
        }
        else if(userChoice==="paper")
        {  
            // stone scissor
           userWin=compChoice === "scissor"?false:true;
        }
        
        else
        {
            userWin=compChoice === "stone"?false:true;
        }

        showWinner(userWin ,userChoice,compChoice)
    }
}


choices.forEach((choice )=>{
 choice.addEventListener('click',()=>{
    const userChoice=choice.getAttribute("id")
    
 
    
    playerGame(userChoice);
 })
});