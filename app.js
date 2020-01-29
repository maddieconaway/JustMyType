$(document).ready(function (e) {

    $(document).on('keyup keydown', function (e) {

        if (e.shiftKey) {
            $('.upper').show();
            $('.lower').hide();
        } else {
            $('.upper').hide();
            $('.lower').show();

        }
    });

    $(document).keypress(function (e) {
        let k = $('#' + e.which);
        $(k).css('background-color', 'brown');
        $(document).keyup(function (e) {
            $(k).css('background-color', '');
        });
    });

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    sentences.forEach(function (sentence) {
        $('#sentence').text(sentence);
        // while (nbrOfChars < sentence.length) {
        // }
    });
    // let nbrOfChars = 0;
    let pixelVal = 4
    $(document).keypress(function () {
        $('#yellow-block').css('left', pixelVal + 'px');
        pixelVal = pixelVal + 4
    });
});
