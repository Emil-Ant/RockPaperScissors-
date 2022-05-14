const Choices = ["Rock", "Paper", "Scissors"]; 

function computerPlays(Choices) {
  //generate random index from the array 
  const computerRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  const computerItem = Choices[computerRandomIndex]; 

  return computerItem; 

} 

function userPlays(Choices) {
    //generate random index from the array 
    const userRandomIndex = [Math.floor(Math.random() * Choices.length)]; 
    //retrieve item that corresponds to the generated index 
    const userItem = Choices[userRandomIndex]; 

    return userItem; 
  

} 

const computerRound1 = computerPlays(Choices); 
const playerRound1 = userPlays(Choices); 





