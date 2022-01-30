const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'
const computerPlay = function (){
    let randomModuloThree = Math.floor(Math.random()*3);
    let play = function(num){
        if (num === 0){
            return ROCK;
        }
        else if (num === 1){
            return PAPER;
        }
        else{
            return SCISSORS;
        }        
    }
    return play(randomModuloThree);
};

const playRound = function(playerSelection, computerSelection){
    playerSelectionUpperCase = playerSelection.toUpperCase();
    console.log(playerSelectionUpperCase);
    if(playerSelectionUpperCase === computerSelection){
        //alert( `It's a draw, both chose ${playerSelectionUpperCase}`)
        return 'draw';
    }
    else if(
        (playerSelectionUpperCase === ROCK && computerSelection === SCISSORS) ||
        (playerSelectionUpperCase === PAPER && computerSelection === ROCK) ||
        (playerSelectionUpperCase === SCISSORS && computerSelection === PAPER)
    ){
        //alert(`You win! ${playerSelectionUpperCase} beats ${computerSelection} !`);
        return 'player';
    }
    else{
        //alert(`You lose! ${computerSelection} beats ${playerSelectionUpperCase} !`);
        return 'computer';
    }
}
let computer_score = 0;
let player_score = 0;
const game = function(playerSelection){

    const score = function(str){
        if(str === 'computer'){
            computer_score++;
        }
        else if(str === 'player'){
            player_score++;
        }
    }
    score( playRound(playerSelection,computerPlay()) );
    drawScoreBoard();
    if(computer_score === 5){
        alert("Computer wins!");
        removeClick();
    }
    if(player_score === 5){
        alert("Player wins!");
        removeClick();
    }

}

/* Adding Event Listener*/
const buttons = document.querySelectorAll("button");
console.log(buttons);

function select(){
    game(this.textContent)
}

buttons.forEach(button => button.addEventListener('click',select));

const removeClick = function(){
    buttons.forEach(button => button.removeEventListener('click',select));
}

/* Score Board */
const drawScoreBoard = function(){
    const body = document.querySelector('body');
    const oldBoard = document.querySelector('.board');
    if(oldBoard){
        body.removeChild(oldBoard);
    }
    console.log(body);
    const scoreBoard = document.createElement('div');
    scoreBoard.classList.add("board");

    const playerScore = document.createElement('span');
    playerScore.textContent = `Player Score: ${player_score}`;
    playerScore.classList.add("score");
    
    const computerScore = document.createElement('span');
    computerScore.textContent = `Computer Score: ${computer_score}`;
    computerScore.classList.add("score");

    scoreBoard.appendChild(playerScore);
    scoreBoard.appendChild(computerScore);
    body.appendChild(scoreBoard);
}