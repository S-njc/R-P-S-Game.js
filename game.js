const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Error - Please enter: Rock, Paper, Scissors!';
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  // Map the random number to a choice
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'Error - Computer choice could not be determined';
  }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return ('Game was a tie.');
    }
    
    if (userChoice === 'Rock'){
        if (computerChoice === 'Paper'){
            return "Computer Wins, Try again";
        }
        else (computerChoice === 'Scissors')
            return "You win, Well done!";
        
    }
    
    if (userChoice === 'Paper'){
        if (computerChoice === 'Scissors'){
            return "Computer Wins, Try again";
        }
        else (computerChoice === 'Rock')
            return "You win, Well done!";
        
    }

    if (userChoice === 'Scissors'){
        if (computerChoice === 'Rock'){
            return "Computer Wins, Try again";
        }
        else (computerChoice === 'Paper')
            return "You win, Well done!";
        
    }
        
};

const playGame = () => {
    const userChoice = getUserChoice('Paper');  //Enter Choice here!
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('Computer Chose: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
    console.log('Play again?')
};

playGame()