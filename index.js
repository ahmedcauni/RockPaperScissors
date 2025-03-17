let humanScore = 0;
let computerScore=0;
let round =1;

/*
function getComputerChoice(){
 let value = Math.random();
 
 if (value <= 0.3)
 {
    return "scissors";

 }
 else if (value <= 0.6){
    return "paper"; 
 }
 else {
    return "rock";
 }
}

function getHumanChoice(){
    let value = prompt("What is your choice?");
    return value.toLowerCase();
}

function playRound(humanChoice,computerChoice){
if (humanChoice === computerChoice){
    return `its a tie you chose ${humanChoice} and the computer chose ${computerChoice} are the same!`;
}
else if ((humanChoice === "rock" && computerChoice ==="scissors") ||
         (humanChoice === "paper" && computerChoice ==="rock") ||
         (humanChoice === "scissors" && computerChoice ==="paper")   ){
            humanScore ++;
            return `You have won you chose ${humanChoice} which beats the computer choice of ${computerChoice}`;

}
else{
    computerScore ++;
    return `You have lost computer chose ${computerChoice} which beats your choice of ${humanChoice}`;

}
}
*/
function playGame(){
    
    for(let i=round;i<=5; i++){
        const playtext=document.querySelector(".playtext");
        playtext.innerText=`This is round ${round}`;

        //humanChoice=getHumanChoice();
        //computerChoice=getComputerChoice();

        const scoretext=document.querySelector(".scoretext");
        scoretext.innerText=`Your score is ${humanScore} and computer score is ${computerScore} `;
        round++;
    }
    const gametext=document.createElement("div");
    gametext.classList.add("gametext")
    document.querySelector(".content");

    if(humanScore>computerScore){
        gametext.innerText= `Rounds are over you won! you scored ${humanScore} while the computer scored ${computerScore}`;
    }
    else if(humanScore === computerScore){
        gametext.innerText= `Rounds are over it's a tie! you scored ${humanScore} and the computer scored ${computerScore}`;
    }
    else{
        gametext.innerText= `Rounds are over you lost! you scored ${humanScore} while the computer scored ${computerScore}`;
    }
    document.querySelector(".content").append(gametext);
}


document.getElementById("playround").addEventListener("click",function(){
    const playtext=document.createElement("div");
    playtext.classList.add("playtext");
    playtext.innerText=`Round have started this is round ${round}`;

    const scoretext=document.createElement("div");
    scoretext.classList.add("scoretext");
    scoretext.innerText=`Your score is ${humanScore} and computer score is ${computerScore}`;
    
    const buttoncollection = document.createElement("div");
    buttoncollection.classList.add("buttoncollection");


    const rockButton = document.createElement("button");
    rockButton.id="rockbutton";
    rockButton.innerText="Rock";

    const paperButton = document.createElement("button");
    paperButton.id="paperbutton";
    paperButton.innerText="Paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.id="scissorsbutton";
    scissorsButton.innerText="Scissors";
    
    buttoncollection.append(rockButton);
    buttoncollection.append(paperButton);
    buttoncollection.append(scissorsButton);

    document.querySelector(".content").append(playtext)
    document.querySelector(".content").append(scoretext)
    document.querySelector(".content").append(buttoncollection)

    playGame();
});