const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        })
    };

    const winner = document.querySelector('.winner');

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })

        })

        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Comparing hands
                    compareHands(this.textContent, computerChoice);

                    // Update images
                    playerHand.src = `./img/${this.textContent}.png`
                    computerHand.src = `./img/${computerChoice}.png`;
                    setTimeout(() => {
                        // Update images
                        playerHand.src = `./img/rock.png`
                        computerHand.src = `./img/rock.png`;
                        winner.textContent = 'Play again!';

                    }, 3500);
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
            });

        })



        const compareHands = (playerChoice, computerChoice) => {
            

            if (playerChoice === computerChoice) {
                winner.textContent = "It's a draw";
                return;
            }

            if (playerChoice === 'rock') {
                if (computerChoice === 'scissors') {
                    winner.textContent = 'You win..!';
                    playerScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Computer wins';
                    computerScore++;
                    updateScore();
                    return;
                }
            }
            if (playerChoice === 'paper') {
                if (computerChoice === 'rock') {
                    winner.textContent = 'You win..!';
                    playerScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Computer wins';
                    computerScore++;
                    updateScore();
                    return;
                }
            }
            if (playerChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    winner.textContent = 'You win..!';
                    playerScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Computer wins';
                    computerScore++;
                    updateScore();
                    return;
                }
            }
        }


        const updateScore = () => {
            const pScore = document.querySelector('.player-score p');
            const cScore = document.querySelector('.computer-score p');

            pScore.textContent = playerScore;
            cScore.textContent = computerScore;
        }
    };

    startGame();
    playMatch();

}

// Start the game function
game();

