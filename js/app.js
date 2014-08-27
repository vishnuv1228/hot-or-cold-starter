$(document).ready(function() {
    /*--- Declaring variables ---*/
    var count = 0;
    $count = $('#count');
    guessList = $('#guessList');
    random = randomNum();
    feedback = $('#feedback');
    userGuess = $('#userGuess');
    guessButton = $('#guessButton');

    /*--- newGame Function---*/
    $('.new').click(function () {
        count = 0;
        $count.text(count);
        random = randomNum();
        feedback.text('Make your Guess!');
        guessList.empty();
        guessButton.prop('disabled',false);
        guessList.prop('disabled', false);
    });
    /*--- Generate Random Number ---*/
    function randomNum() {
        return Math.floor((Math.random() * 100) + 1);
    }

    /*--- Track Guesses ---*/
    function guessTrack () {
            count++;
            $count.text(count);
            guessList.append('<li>' + userGuess.val() + '</li>');


    }
    /*--- Determining Feedback---*/
    guessButton.click(function () {
        if(userGuess.val() >= 1 && userGuess.val() <= 100) {
            feedback.text((giveFeedback(Math.abs(userGuess.val() - random))));
            guessTrack();
        }
        else{
            alert('Please supply a number from 1 to 100');
        }
        return false;
    });

    function giveFeedback(random) {
        if (random === 0) {
            feedback.text('You are Correct!');
            guessButton.prop('disabled',true);
            guessList.prop('disabled', true);

        }
        else if (random <=1 || random <= 4) {
            feedback.text('Liquid Nitrogen');
        }
        else if (random <= 5 || random <= 9) {
            feedback.text('Boiling Hot');
        }
        else if (random <= 10 || random <= 19) {
            feedback.text ('Hot!');
        }
        else if (random <= 20 || random <= 29) {
            feedback.text('Warm');
        }
        else if (random <= 30 || random <= 39) {
            feedback.text('Chilly');
        }
        else if (random <= 40 || random <= 50) {
            feedback.text('Cold');
        }
        else {
            feedback.text('Too Cold!');
        }
    }

// Display information modal box
    $('.what').click(function () {
        $('.overlay').fadeIn(1000);
    });

    // Hide information modal box
    $('a.close').click(function () {
        $('.overlay').fadeOut(1000);
    });
});
