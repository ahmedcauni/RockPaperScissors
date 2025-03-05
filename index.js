

function getComputerChoice(){
 let value = Math.random();
 
 if (value <= 0.3)
 {
    return "Scissors";

 }
 else if (value <= 0.6){
    return "Paper"; 
 }
 else {
    return "Rock";
 }
}

function getHumanChoice(){
    let value = prompt("What is your choice?");
    return value;
}

for(i=0;i<1;i++){
    console.log(getHumanChoice())
}