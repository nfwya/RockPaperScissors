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
        alert( `It's a draw, both chose ${playerSelectionUpperCase}`)
        return 'draw';
    }
    else if(
        (playerSelectionUpperCase === ROCK && computerSelection === SCISSORS) ||
        (playerSelectionUpperCase === PAPER && computerSelection === ROCK) ||
        (playerSelectionUpperCase === SCISSORS && computerSelection === PAPER)
    ){
        alert(`You win! ${playerSelectionUpperCase} beats ${computerSelection} !`);
        return 'player';
    }
    else{
        alert(`You lose! ${computerSelection} beats ${playerSelectionUpperCase} !`);
        return 'computer';
    }
}

const game = function(){
    let computer_score = 0;
    let player_score = 0;
    const score = function(str){
        if(str === 'computer'){
            computer_score++;
        }
        else if(str === 'player'){
            player_score++;
        }
    }
    for(let i = 0; i<5; i++){
        console.log(`i=${i}}`);
        const result = playRound( prompt("Please enter ROCK/PAPER/SCISSORS:"), computerPlay() );
        console.log(result);
        score(result);        
    }
    if( computer_score > player_score ){
        alert(`You lose! Computer Score:${computer_score}, Your score:${player_score}`);
    }
    else if ( player_score > computer_score ){
        alert(`You win! Your score:${player_score}, Computer:score:${computer_score}`);
    }
    else{
        alert(`It's a draw! Both scored: ${player_score}`)
    }
}
game();