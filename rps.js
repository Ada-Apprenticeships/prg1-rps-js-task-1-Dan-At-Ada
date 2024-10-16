function rockPaperScissors(player1, player2) {
  // "rock", "paper", "scissors"

  if(player1 === player2) 
  {
    return "draw"
  }
  
   
}



// Testing
rockPaperScissors("rock", "scissors")
console.log(rockPaperScissors("rock","scissors"))






// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}