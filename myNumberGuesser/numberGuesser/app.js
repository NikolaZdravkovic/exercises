let correctNum = Math.floor(Math.random() * 10) + 1;
console.log(correctNum);
let guessesLeft = 3;
let min = 1;
let max = 10;




//Event listen

document.getElementById('btn').addEventListener('click', function () {
    let number = document.getElementById('number');
    let guess = parseInt(number.value);
    if (isNaN(guess) || guess < min || guess > max) {

         alert(`Please enter a number between ${min} and ${max}!`);
        

    };

    if (guess === correctNum) {

        // Game over - won  //if they won stavljamo u true;
        //  alert(`${correctNum} is correct, YOU WIN!`);
         swal("Good job!",  `${correctNum} is correct, YOU WIN!`, "success");
         number.value = '';
    } else {

        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {

            // Game over - lost
            // alert(`Game Over, you lost. The correct number was ${correctNum}`);
            swal("Game Over!", `you lost. The correct number was ${correctNum}`, "error");
            window.location.reload();
        } else {

            // Clear Input
            number.value = '';

            // Tell user its the wrong number

            // alert(`${guess} is not correct, ${guessesLeft} guesses left`);
            swal("Wrong number!", `${guess} is not correct, ${guessesLeft} guesses left`, "error");
        };



    };
}
);

document.getElementById('btnInfo').addEventListener('click',function(){
    swal("About this project", "This is one of my first projects in JavaScript, and I know it may not look very attractive but please do consider that I will try to upgrade this code and add some more complexity to it. For now, I wish you Farewell and I hope you like it!  :) ");
})

