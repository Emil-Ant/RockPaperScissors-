const Choices = ["rock", "paper", "scissors"]; 
let playerScore = 0; 
let computerScore = 0;
let response; 
let computerSelection;
let round = 0; 
let roundDisplay = document.querySelector(".totalRoundDisplay");
let gameChoices; 
let resultAnnounce;
let playerDisplay = document.querySelector(".playerDisplay"); 
let computerDisplay = document.querySelector(".computerDisplay");


function computerPlay() {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  computerSelection = Choices[computerRandomIndex]; 
  return; 

} 




// function to play a round NOTE: playerSelection argument here only temporary before adding event listeners and all that jazz
function playround() { 
      computerPlay();  
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
        gameChoices = "PAPERROCK";
        return
           
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        response = paperscissors + lose; 
        gameChoices = "PAPERSCISSORS";
        return
            
    } else if(playerSelection === "rock" && computerSelection === "paper") { 
        response = paperrock + lose; 
        gameChoices = "ROCKPAPER";
        return
            
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        response = rockscissors + win;
        gameChoices = "ROCKSCISSORS";
        return

    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        response = paperscissors + win;
        gameChoices = "SCISSORSPAPER"
        return 
            
    } else if(playerSelection === "scissors" && computerSelection === "rock") { 
        response = rockscissors + lose; 
        gameChoices = "SCISSORSROCK"
        return
           
    }

};

//TODO major: make function that keeps score 
function game() { 
    playround()
    round++;
    roundDisplay.textContent = "Total number of rounds: " + round;
    if(gameChoices == "PAPERROCK" || gameChoices == "ROCKSCISSORS" || gameChoices == "SCISSORSPAPER" ) { 
        playerScore++;
        playerDisplay.textContent = "Your score is " + playerScore;
    } else if(gameChoices == "PAPERSCISSORS" || gameChoices == "ROCKPAPER" || gameChoices == "SCISSORSROCK" ) { 
        computerScore++;
        computerDisplay.textContent = "Computer score is " + computerScore
    }
    if(round == 5) { 
        if(playerScore > computerScore) { 
            resultAnnounce = "You have won against the PC! Amazing";
        } else if(playerScore < computerScore) { 
            resultAnnounce = "Damn, you lost against the CPU, that's some cheeeese";
        } else if (playerscore == computerScore) { 
            resultAnnounce = "It's a draw!"
        }
    alert(resultAnnounce); 
    round = 0; 
    roundDisplay.textContent = "";
    playerScore = 0;
    playerDisplay.textContent = "";
    computerScore = 0;
    computerDisplay.textContent = "";
    return resultAnnounce;
    }


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

buttons.addEventListener("click", () => game());
//TODO: add even listener to launch game at any click rather than launch computerplay() at each click 












