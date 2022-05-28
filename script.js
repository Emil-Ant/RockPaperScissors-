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
    // for(let i = 0; i < 5; i++) { 
         let response = prompt("What are you selecting? select either rock, paper or scissors"); 
         let playerSelection = response.toLowerCase();
         const computerSelection = computerPlay();
         console.log("Computer selected " + computerSelection);
         console.log(playround(playerSelection, computerSelection)); 
        // }  
    } 


const buttons = document.querySelectorAll("button"); 


// buttons.forEach((button) => { 
//     button.addEventListener('click', () => { 
//         console.log(button.id); 
//     });
// });

