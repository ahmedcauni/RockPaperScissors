

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

for(i=0;i<5;i++){
    console.log(getComputerChoice())
}