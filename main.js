const game = function() {
  let pScore = 0;
  let cScore = 0;

  // !start the game
  const startGame = function() {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", function() {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // Play Match
  const playMatch = function() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    // Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach(option => {
      option.addEventListener("click", function() {
        // !computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // here is where w e call compare hands

        compareHands(this.textContent, computerChoice);
        // Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-socre p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  // ! check who's winning

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    // check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    // check rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    // check paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // check scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // Is call all the inner Function
  startGame();
  playMatch();
};

// start the game function
game();
