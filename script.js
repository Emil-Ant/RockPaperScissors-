const Choices = ["rock", "paper", "scissors"]; 

function computerPlay() {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  const computerItem = Choices[computerRandomIndex]; 

  return computerItem; 

} 



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
         const computerSelection = computerPlay();
         console.log("Computer selected " + computerSelection);
}


const buttons = document.querySelector('.buttons'); 

buttons.addEventListener('click', function(e) { 
    switch(e.target.id){ 
        case 'Rock-button':
          playerSelection = "rock"
          let computerSelection = computerPlay(); 
          console.log("Computer selection is " + computerSelection); 
          console.log(playround(playerSelection, computerSelection)); 
          break; 
          
          case 'Paper-button': 
          playerSelection = "paper"
          let computerSelection2 = computerPlay(); 
          console.log("Computer selection is " + computerSelection2); 
          console.log(playround(playerSelection, computerSelection2)); 
          break;

        case 'Scissors-button': 
          playerSelection = "scissors"
          let computerSelection3 = computerPlay(); 
          console.log("Computer selection is " + computerSelection3); 
          console.log(playround(playerSelection, computerSelection3)); 
          break; 
    }
}); 








