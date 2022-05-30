const Choices = ["rock", "paper", "scissors"]; 

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
    if(playerSelection === computerSelection) { 
        return "It's a tie!"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    } else if(playerSelection === "paper" && computerSelection === "scissors") { 
        return "You lose! Scissors beats paper!" 
    } else if(playerSelection === "rock" && computerSelection === "paper") { 
        return "You lose! Paper beats rock!"
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!"
    } else if(playerSelection === "scissors" && computerSelection === "rock") { 
        return "You lose! Rock beats scissors!"
    }
}


function game() {
    // for(let i = 0; i < 5; i++) { 
         const computerSelection = computerPlay();
         console.log("Computer selected " + computerSelection);
         divResults.textContent = "Computer Selected " + computerSelection;
        // }  
    } 





const buttons = document.querySelector('.buttons'); 

buttons.addEventListener('click', function(e) { 
    switch(e.target.id){ 
        case 'Rock-button':
          playerSelection = "rock"
          let computerSelection = computerPlay(); 
          divComputerChoice.innerHTML = "The computer chose " + computerSelection; 
          let finalOutput = playround(playerSelection, computerSelection)
          divResults.innerHTML = finalOutput;  
          break; 
          
          case 'Paper-button': 
          playerSelection = "paper"
          let computerSelection2 = computerPlay(); 
          divComputerChoice.innerHTML = "The computer chose " + computerSelection2; 
          let finalOutput2 = playround(playerSelection, computerSelection2)
          divResults.innerHTML = finalOutput2;  
          break;

        case 'Scissors-button': 
          playerSelection = "scissors"
          let computerSelection3 = computerPlay(); 
          divComputerChoice.innerHTML = "The computer chose " + computerSelection3; 
          let finalOutput3 = playround(playerSelection, computerSelection3)
          divResults.innerHTML = finalOutput3;  
          break; 
    }
}); 













