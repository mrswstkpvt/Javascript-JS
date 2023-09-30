'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🥳 Correct Guess !';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent=10;
// document.querySelector('.number').textContent=13;
// document.querySelector('.guess').value=12;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent=secretNumber; 
let score = 20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;

};
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof (guess));

    if (!guess) {
        displayMessage = "⛔️ No Input!"
    }

    else if (guess === secretNumber) {
        displayMessage = "Correct Guess!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '40rem';
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    else if(guess!=secretNumber)
    {
        if (score > 1) {
            displayMessage = guess>secretNumber?'too high!':'too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage = 'You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }

    }

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         displayMessage = 'too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         displayMessage = 'You lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         displayMessage = 'too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         displayMessage = 'You lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage = 'Start Guessing... ';
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});   
