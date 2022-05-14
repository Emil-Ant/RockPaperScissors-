const Choices = ["Rock", "Paper", "Scissors"]; 

function computerPlays(Choices) {
  //generate random index from the array 
  const randomIndex = [Math.floor(Math.random() * Choices.length)]; 
  //retrieve item that corresponds to the generated index 
  const item = Choices[randomIndex]; 

  return item; 

} 

const computerChoice = computerPlays(Choices); 
