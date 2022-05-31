const Choices = ["rock", "paper", "scissors"]; 
let playerScore = 0; 
let computerScore = 0;
let response; 
let computerSelection;
let round; 


function computerPlay() {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  computerSelection = Choices[computerRandomIndex]; 
  return; 

} 

// set parentDiv to the div class "buttons"
const parentDiv = document.getElementById("parent");
// create div for results in DOM tree
const divComputerChoice = document.createElement("div"); 
const divResults = document.createElement("div");
// const divResults = document.createElement("div"); 

// Append div for results into DOM tree
parentDiv.appendChild(divComputerChoice);
// adds div for results (TODO : see if I can even use it )
parentDiv.appendChild(divResults);





function playround(playerSelection, computerSelection) { 
      let tie = "It's a tie!"; 
      let win = " ,you win!";
      let lose = " ,you lose!";
      let paperrock = "Paper beats rock";
      let paperscissors = "Scissors beats paper";
      let rockscissors = "Rock beats scissors";
      if(playerSelection === computerSelection) { 
        response = tie; 
        return

    } else if(playerSelection === "paper" && computerSelection === "rock") {
        response = paperrock + win;
        console.log(response);
        return
           
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        response = paperscissors + lose; 
        console.log(response);
        return
            
    } else if(playerSelection === "rock" && computerSelection === "paper") { 
        response = paperrock + lose; 
        console.log(response);
        return
            
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        response = rockscissors + win;
        console.log(response);
        return

    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        response = paperscissors + win;
        console.log(response); 
        return 
            
    } else if(playerSelection === "scissors" && computerSelection === "rock") { 
        response = rockscissors + lose; 
        console.log(response);
        return
           
    }

};

//TODO: make function that keeps score 
function game() { 

  playround()
  

}


// event listeners 
const buttons = document.querySelector('.buttons'); 

buttons.addEventListener('click', function(e) { 
        switch(e.target.id){ 
            case 'Rock-button':
            playerSelection = "rock"
            break; 
            
            case 'Paper-button': 
            playerSelection = "paper" 
            break;

            case 'Scissors-button': 
            playerSelection = "scissors"
            break; 
        }
}); 

//TODO: add even listener to launch game at any click rather than launch computerplay() at each click 












