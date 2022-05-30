const Choices = ["rock", "paper", "scissors"]; 
let playerScore = 0; 
let computerScore = 0;

function computerPlay() {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  const computerItem = Choices[computerRandomIndex]; 

  return computerItem; 

} 

// set parentDiv to the div class "buttons"
const parentDiv = document.getElementById("parent");
// create div for results in DOM tree
const divComputerChoice = document.createElement("div"); 
const divResults = document.createElement("div"); 

// Append div for results into DOM tree
parentDiv.appendChild(divComputerChoice);
parentDiv.appendChild(divResults);




function playround(playerSelection, computerSelection) { 
    if (playerScore + computerScore == 5){ 
        return;
    } else if(playerSelection === computerSelection) { 
            playerScore++
            computerScore++
    } else if(playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
           
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++ 
            
    } else if(playerSelection === "rock" && computerSelection === "paper") { 
            computerScore++
            
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
           
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            
    } else if(playerSelection === "scissors" && computerSelection === "rock") { 
            computerScore++
           
    }
    
};

//TODO: make function that keeps score 



const buttons = document.querySelector('.buttons'); 

buttons.addEventListener('click', function(e) { 
    if (playerScore + computerScore == 5){
        console.log("game total is now 5 fam") 
        return;
    }

        switch(e.target.id){ 
            case 'Rock-button':
            playerSelection = "rock"
            let computerSelection = computerPlay(); 
            divComputerChoice.innerHTML = "The computer chose " + computerSelection; 
            let finalOutput = playround(playerSelection, computerSelection)
            divResults.innerHTML = finalOutput;  
            console.log(playerScore, computerScore);
            break; 
            
            case 'Paper-button': 
            playerSelection = "paper"
            let computerSelection2 = computerPlay(); 
            divComputerChoice.innerHTML = "The computer chose " + computerSelection2; 
            let finalOutput2 = playround(playerSelection, computerSelection2)
            divResults.innerHTML = finalOutput2; 
            console.log(playerScore, computerScore); 
            break;

            case 'Scissors-button': 
            playerSelection = "scissors"
            let computerSelection3 = computerPlay(); 
            divComputerChoice.innerHTML = "The computer chose " + computerSelection3; 
            let finalOutput3 = playround(playerSelection, computerSelection3)
            divResults.innerHTML = finalOutput3;  
            console.log(playerScore, computerScore);
            break; 
        }
}); 













