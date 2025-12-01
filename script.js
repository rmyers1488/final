// JavaScript source code
console.log('final script');
$(document).ready(function () {
    console.log('final');
    //basic slideshow
    slideShow();

    //tooltip
    $('.blurp').hover(function (event) {
        console.log('tooltip');
        const titleText = $(this).attr('title');
        $(this)
            .data('tipText', titleText)
            .removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(titleText)
            .css({
                'position': 'absolute',
                'top': (event.pageY - 10) + 'px',
                'left': (event.pageX - 10) + 'px',
                'z- index': 9999,
                'pointerEvent': 'none',
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
                'left': (event.pageX - 10) + 'px'
            });
    });


    //1up damage display7.21
    $('<span class="oneUp">Kansas City: Mega City!</span>')
        .addClass('adding')
        .insertAfter('.campaign');
    $('.campaign')
        .click(function (e) {
            doOneUp(this, function () {
                $(this).prev().text('Added');
            });
            e.preventDefault();
        });

    //gym bage ui dialog7.19
    $('.campaign').click(function () {
        $('#gymBages').dialog('open');
    });
    $('#gymBages').dialog({
        autoOpen: false,
        height: 150,
        modal: true,
        resizable: false
    });

    //hide menu
    //$('.robertMenu').filter(':not(:first-child)').hide();
    //$('.robertTeam').filter(':not(:first-child)').hide();
    $('.robertCharList').hide();
    $('.robertMon').hide();

    //growl tags 7.20
    setTimeout(function () {
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

    $('#growl')
        //.find('.close')
        .on('click', '.close', function () {
            e.preventDefault();
            //console.log('growl');
            $(this)
                .closest('.notice')
                .animate({
                    border: 'none',
                    height: 0,
                    marginBottom: 0,
                    marginTop: '-8px',
                    opacity: 0,
                    paddingBottom: 0,
                    paddingTop: 0,
                    queue: false
                }, 500, function () {
                    $(this).remove();
                });
        });
    //menu hide

    //menu open/close hover
    $('.robertChar').on('click', function () {
        console.log('rob char');
        //    $('.robertMenu').filter(':not(:first-child').toggle();
        $('.robertCharList').toggle();
        //}, function () {
        //    //    $('.robertMenu').filter(':not(:first-child').toggle();
        //    $('.robertCharList').toggle();
    });
    $('.robertTeamList').on('click', function () {
        $('.robertMon').toggle();
        //        $('.robertTeam').filter(':not(:first-child').toggle();
        //}, function () {
        //    $('.robertMon').toggle();
        ////        $('.robertTeam').filter(':not(:first-child').toggle();
    });

    //menu stay in place
    //$(window).scroll(function () {
    //    $('.menu').css('top', $(document).scrollTop());
    //});

    //growl's addNotice 7.20
    function addNotice(notice) {
        $('<div class="notice"></div>')
            .append('<div class="skin"></div>')
            .append('<a href="#" class="close">close</a>')
            .append($('<div class="content"></div>').html(notice))
            .hide()
            .appendTo('#growl')
            .fadeIn(1000);
    }
});
//$(function () {
//    //grwol start
    
    
//});
//image slideshow
function slideShow() {
    let current = $('#images .show');
    let next = current.next().length ? current.next() : current.siblings().first();
    current.hide().removeClass('show');
    next.fadeIn().addClass('show');
    setTimeout(slideShow, 3000);
}

//#('#images').click(function () {
//    let scrollAmount = $(this).width() - $(this).parent().width();
//    let currentPos = Math.abs(parseInt($(this).css('left')));
//    let remainingScroll = scrollAmount - currentPos;
//    let nextScroll = Math.floor($(this).parent().width() / 2);
//    if (remainingScroll < nextScroll) {
//        nextScroll = remainingScroll;
//    }
//    if (currentPos < scrollAmount) {
//        $(this).animate({ 'left': '-=' + nextScroll }, 'slow');
//    } else {
//        $(this).animate({ 'left': '0', 'fast'});
//    }
//});

//function showMove(move) {

//    move.animate({ opacity: '1' });
//}
//move box
$('.move1').hover(function (event) {
    console.log('move1');
    $('.moveBox1').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox1').animate({opacity: '0'},500);
});
$('.move2').hover(function (event) {
    $('.moveBox2').animate({ opacity: '1' }, 1000);
}, function () {
    $('.moveBox2').animate({opacity: '0'},500);
});
$('.move3').hover(function (event) {
    $('.moveBox3').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox3').animate({opacity: '0'},500);
});
$('.move4').hover(function (event) {
    $('.moveBox4').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox4').animate({opacity: '0'},500);
});
$('.move5').hover(function (event) {
    $('.moveBox5').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox5').animate({opacity: '0'},500);
});
$('.move6').hover(function (event) {
    $('.moveBox6').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox6').animate({opacity: '0'},500);
});
$('.move7').hover(function (event) {
    $('.moveBox7').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox7').animate({opacity: '0'},500);
});
$('.move8').hover(function (event) {
    $('.moveBox8').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox8').animate({opacity: '0'},500);
});

//pokemon info blup


//hieghlight stat block
$('.statBlock').hover(function () {
    $(this).effect('highlight', {}, 1000);
});
$('.rightBox').hover(function () {
    $(this).effect('highlight', {}, 1000);
});
$('.edgeTutor').hover(function () {
    $(this).effect('highlight', {}, 1000);
});



//one up: 7.21
function doOneUp(which, callback) {
    $(which)
        .next()
        .show()
        .animate({
            top: "-=50px",
            opacity: "toggle"
        }, 1000,
        function () {
            $(this)
                .css({ top: "" })
                .hide('slow', callback)
                .remove();
        });
}