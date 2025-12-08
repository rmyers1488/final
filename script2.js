//// JavaScript source code
$(function () {
    //basic slideshow
    slideShow();

    //growl
    $('#growl') // grap eleemnt growl
        .find('.close')
        .on('click', function () {
            $(this)
                .closest('.notice')
                .animate({
                    border: 'none',
                    height: 0,
                    marginBottom: 0,
                    marginTop: '-6px',
                    opacity: 0,
                    paddingBottom: 0,
                    paddigTop: 0,
                    queue: false
                }, 100, function () {
                    $(this).remove()
                });
        });
    //end growl

});

//hide menu
//li of ul of sideBar
//$('.list > li').filter(':not(:first-child)').hide();
//$lastShown;

//update hide/display, only reveil one at once
//$('.title').click(function () {
//    console.log('click');
//    console.log(this);
//    if ($(this).nextAll().is(':visible')) {
//        $('.list > li').filter(':not(:first-child)').hide();
//    } else {
//        $('.list > li').filter(':not(:first-child)').hide();
//        $(this).nextAll().toggle();
//    }

//});


////tooltip
$(document).ready(function () {

    $('.blurp').hover(function (event) {
        let titleText = $(this).attr('title');
        $(this)
            .data('tipText', titleText)
            .removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(titleText)
            .css({
                'position': 'absolute',
                'top': (event.pageY - 10) + 'px',
                'left': (event.pageX - 10) + 'px',
                'z-index': 9999,
                'pointerEvents': 'none',
                'display': 'none'
            })
            .appendTo('body')
            .fadeIn('slow');

    }, function () {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function (event) {
        $('.tooltip')
            .css({
                'top': (event.pageY - 10) + 'px',
                'left': (event.pageX + 20) + 'px'
            });
    });

    $('.uStrengthInfo')
        .hide()
        .css({ 'font-size': 3 + 'px' });

    $(.'robertChar').hide();
    $(.'robertMon').hide();
    //$('.edgeTutor ul li a').on('load', function (e) {
    //    let url = $(this).attr('href') + '#setting';
    //    $('.description').html('loading...').load(url);
    //    e.preventDefault();
    //});

});

////grow's addNotice function
function addNotice(notice) {
    $('<div class="notice"></div>')
        .append('<div class="skin"></div>')
        .append('<a href="#" class="close">close</a>')
        .append($('<div class="content"></div>').html(notice))
        .hide()
        .appendTo('#growl')
        .fadeIn(5000);
}
//growl's notices
setTimeout(function () {
    console.log('growl 1');
    addNotice('<p>Player Information</p>');
}, 1000);
setTimeout(function () {
    addNotice('<p>Player: Robert</p>');
}, 3000);
setTimeout(function () {
    addNotice('<p>Character: Bart</p>');
}, 5000);
setTimeout(function () {
    addNotice('<p>Level 7, Chef, Researcher-Apothecary</p>');
}, 7000);

//image slideshow
function slideShow() {
    let current = $('#images .show');
    let next = current.next().length ? current.next() : current.siblings().first();
    current.hide().removeClass('show');
    next.fadeIn().addClass('show');
    setTimeout(slideShow, 3000);
}
//move box
$('.move1').hover(function (event) {
    console.log('move1');
    $('.moveBox1').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox1').animate({ opacity: '0' }, 500);
});
$('.move2').hover(function (event) {
    $('.moveBox2').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox2').animate({ opacity: '0' }, 500);
});
$('.move3').hover(function (event) {
    $('.moveBox3').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox3').animate({ opacity: '0' }, 500);
});
$('.move4').hover(function (event) {
    $('.moveBox4').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox4').animate({ opacity: '0' }, 500);
});
$('.move5').hover(function (event) {
    $('.moveBox5').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox5').animate({ opacity: '0' }, 500);
});
$('.move6').hover(function (event) {
    $('.moveBox6').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox6').animate({ opacity: '0' }, 500);
});
$('.move7').hover(function (event) {
    $('.moveBox7').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox7').animate({ opacity: '0' }, 500);
});
$('.move8').hover(function (event) {
    $('.moveBox8').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox8').animate({ opacity: '0' }, 500);
});

$('.block').hover(function () {
    $(this).effect('highlight', {}, 1000);
});

//edge Tutor block
$('.uStrength').click(function () {
    if ($('.uStrengthInfo').is(':visible')) {
        $('.uStrengthInfo')
            .animate({ 'font-size': 3 + 'px' }, 1000)
            .hide();
    } else {
        $('.uStrengthInfo')
            .show()
            .animate({ 'font-size': 16 + 'px' }, 1000);
    }
});

$('.title').click(function () {
    $('.robertChar').toggle();
});
$('.robertTeamList').click(function () {
    $('.robertMon').toggle();
});