let humanScore = 0;
let computerScore=0;


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
    return `Tie ${humanChoice} and ${computerChoice} are the same!`;
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

function playGame(){
    let round = 1;
    for(let i=round;i<=5; i++){
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();
        console.log(playRound(humanChoice,computerChoice))
    }
    if(humanScore>computerScore){
        return `Rounds are over you won! you scored ${humanScore} while the computer scored ${computerScore}`;
    }
    return `Rounds are over you lost! you scored ${humanScore} while the computer scored ${computerScore}`;
}


console.log(playGame());

