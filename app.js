$(document).ready(function () {

    let $div1 = $('<div id="div1"></div>');
    $div1.append($('<label id="lbl1">1. </label>'));
    let $btn1 = $('<button id="btn1">Click Here</button>');
    $btn1.on('click', function (e) {
        alert('Have a nice day...or else.');
    });
    $div1.append($btn1);
    $('body').append($div1);


    // 2. put a textbox and a button, click the button and it triggers an alert with the textbox contents

    let $div2 = $('<div id="div2"></div>');
    $div2.append($('<label id="lbl2">2. </label>'));
    let $tbox2 = $('<textarea id="tbox2"></textarea>');
    $div2.append($tbox2);
    let $btn2 = $('<button id="btn2">What?</button>');
    $btn2.on('click', function (e) {
        alert($tbox2.val());
    });
    $div2.append($btn2);
    $('body').append($div2);

    // 3. color changing div with mouseover and mouseout

    let $div3 = $('<div id="div3"></div>');
    $div3.append($('<label id="lbl3">3. </label>'));
    let $div31 = $('<div id="div31" style="height:100px; width:100px; display:inline-block;"></div>');
    $div31.on('mouseover', function () {
        $div31.css('background-color', 'red');
    });
    $div31.on('mouseout', function () {
        $div31.css('background-color', 'inherit');
    });

    $div3.append($div31);
    $('body').append($div3);
    //------------------------------

    // 4. paragraph text color change

    let $div4 = $('<div id="div4"></div>');
    $div4.append($('<label id="lbl4">4. </label>'));
    let $p4 = $('<p id="p4" style="display: inline-block;">This is a paragraph.</p>');
    $p4.on('click', function () {
        $p4.css('color', getRandomColor());
    });
    $div4.append($p4);
    $('body').append($div4);

    // 5. put a button and empty div, when clicked add a span with my name  

    let $div5 = $('<div id="div5"></div>');
    $div5.append($('<label id="lbl5">5. </label>'));

    let $div51 = $('<div id="div51" style="display: inline-block;"></div>');

    let $btn5 = $('<button id="btn5">Who is the author?</button>');
    $btn5.on('click', function () {
        let $span5 = $('<span id="span5">Maddie Conaway</span>');
        $div51.append($span5);
    });
    $div5.append($btn5);
    $div5.append($div51);
    $('body').append($div5);

    // 6. create and populate an unordered list from an array 

    let $div6 = $('<div id="div6"></div>');
    $div6.append($('<label id="lbl6">6. </label>'));

    let $ul6 = $('<ul id="ul6"></ul>');
    let $btn6 = $('<button id="btn6">Click Here</button>')
    $btn6.on('click', function () {
        let arrNames = ['Brit', 'Alex', 'Danni', 'Alden', 'Leila', 'Carmen', 'Josie', 'Meredith', 'Mel', 'Chelsey', 'Catherine Gail'];
        arrNames.forEach(function (item) {
            let $li6 = $('<li>' + item + '</li>');
            $ul6.append($li6);
        });
    });
    $div6.append($btn6);
    $div6.append($ul6);
    $('body').append($div6);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
