const Choices = ["rock", "paper", "scissors"]; 

function computerPlays(Choices) {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  const computerItem = Choices[computerRandomIndex]; 

  return computerItem; 

} 




function playing(playerSelection, computerSelection) { 
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
        return "You win! Scissors beat scissors!"
    } else if(playerSelection === "scissors" && computerSelection === "rock") { 
        return "You lose! Rock beats scissors!"
    }
}

// const computerSelection = computerPlays(Choices);  
// const playerSelection = "rock"; 

// console.log(computerPlays(Choices)); 

// console.log(playing(playerSelection, computerSelection)); 





