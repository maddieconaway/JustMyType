$(document).ready(function (e) {

    //controls shift key display
    $(document).on('keyup keydown', function (e) {

        if (e.shiftKey) {
            $('.upper').show();
            $('.lower').hide();
        } else {
            $('.upper').hide();
            $('.lower').show();

        }
    });

    //controls key press display
    $(document).keypress(function (e) {
        let k = $('#' + e.which);
        $(k).css('background-color', 'brown');
        $(document).keyup(function (e) {
            $(k).css('background-color', '');
        });
    });

    //initialize
    let sentencePtr = 0;
    let letterPtr = 0;
    let timerStart = new Date();
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let letters = sentences[sentencePtr].split('');
    $('#sentence').text(sentences[sentencePtr]);
    let divPos = setBoxPosition(20);
    setLetterDisplay(letters[letterPtr]);
    setFeedbackDisplay('');
    let oops = 0;
    let gameover = false;

    //typing game function
    $(document).keypress(function (e) {
        if (e.which == letters[letterPtr].charCodeAt()) {
            setFeedbackDisplay('C');
            divPos = setBoxPosition(divPos + 17.4);
            letterPtr++;
            if (letterPtr == sentences[sentencePtr].length) {
                //reset for the next sentence and reset the yellow-box, reset feedback
                sentencePtr++;
                if (sentencePtr == sentences.length) {
                    gameover = true;
                }
                if (!gameover) {
                    letters = sentences[sentencePtr].split('');
                    $('#sentence').text(sentences[sentencePtr]);
                    letterPtr = 0;
                    divPos = setBoxPosition(20);
                    setFeedbackDisplay('R');
                }
            }
            setLetterDisplay(letters[letterPtr]);
        } else {
            setFeedbackDisplay('X');
            oops++;
        }
        if (gameover) {
            setLetterDisplay('');
            $('#sentence').css('color', 'white');
            setBoxPosition(2000);

            let timerEnd = new Date();
            let diff = Math.abs(new Date(timerEnd) - new Date(timerStart));
            let minutes = Math.floor(diff / 60000);
            let wpm = 54 / minutes - 2 * oops;
            $('#feedback').find('span').remove();
            $('#feedback').append('<span class="gameover">Game Over! Words per minute: ' + wpm + ' Number of errors: ' + oops + ' Play again? </span>');
            $('#feedback').append('<button id="btnYes" onClick="window.location.reload();">Yes</button>&nbsp;');
            $('#feedback').append('<button id="btnNo">No</button>');
        }
    });

    function setBoxPosition(pos) {
        //sets the yellow-box position, then returns that position value

        $('#yellow-block').css('left', pos + 'px');
        return pos;
    }

    function setLetterDisplay(val) {
        //sets the letter display. if the expected character is a space then display <space>

        if (val == ' ') {
            $('#target-letter').text('<space>');
        } else {
            $('#target-letter').text(val);
        }
    }

    function setFeedbackDisplay(val) {
        //sets the feedback display according to val

        switch (val) {
            case 'X':
                $('#feedback').find('span').remove();
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
                break;
            case 'C':
                $('#feedback').find('span').remove();
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                break;
            case 'R':
                $('#feedback').find('span').remove();

                break;
        }

    }
});
