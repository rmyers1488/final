// JavaScript source code
console.log('final script');
$(document).ready(function () {
    console.log('final');
    //basic slideshow
    slideShow();

    //1up damage display
    $('<span>Kansas City: Mega City!</span>')
        .addClass('adding')
        .insertAfter('.campaign');
    $('.campaign')
        .click(function (e) {
            doOneUp(this, function () {
                $(this).prev().text('Added');
            });
            e.preventDefault();
        })

    //gym bage ui dialog
    $('.campaign').click(function () {
        $('#gymBages').dialog('open');
    });
    $('#gymBages').dialog({
        autoOpen: false;
        height: 280,
        modal: true,
        resizable: false,
        buttons: {
            Continue: function () {
                $(this).dialog('close');
            }
        }
    });

    //hide menu
    $('robertMenu').filter(':not(:first-child)').hide();
    $('robertTeam').filter(':not(:first-child)').hide();

    //img scroll onclick
    //$('.imgContainer').click(function () {
    //    let numberOfPicks = $(this).find('div > img').length;
    //    let last = $(this).data('last');
    //    let next = Math.floor(Math.random() * numberOfPics);
    //    if (next == last) {
    //        next = (next + 1) % numberOfPicks;
    //    }
    //    $(this)
    //        .data('last', next)
    //        .scrollTo('#pic_scroller>img:eq(' + next + ')', { duration: 1000 });
    //});

    //hoverintet
    //$('.robertList li ul').css({
    //    display: 'none',
    //    left: 'auto'
    //});
    //$('.robertList li').hoverIntent(function () {
    //    $(this)
    //        .find('ul')
    //        .stop(true, true)
    //        .slideDown('fast');
    //}, function () {
    //    $(this)
    //        .find('ul')
    //        .stop(true, true)
    //        .fadeOut('fast');
    //});
    //menu


    //slideshwo widget
    //gallery.triger = $('.imageBlock .trigger');
    //gallery.content = $('.images');
    //gallery.scroll = false;
    //gallery.width = 400;
    //gallery.innerWidth = gallery.content.width();
    //gallery.timer = false;
    //gallery.init();
});

//menu hide

//menu open/close hover
$('.robertMenu').hover(function () {
    $('.robertMenu').filter(':not(:first-child').toggle();
    $('.robertTeam').hover(function () {
        $('.robertTeam').filter(':not(first-child').toggle();
    }, function () {
        $('.robertTeam').filter(':not(first-child').toggle();
    });
}, function () {
    $('robertMenu').filter(':not(first-child').toggle();
});

//menu stay in place
$(window).scroll(function () {
    $('.menu').css('top', $(document).scrollTop());
});
//let $window = $(window);
//let $menu = $('.menu');
//$window.scroll(function () {
//    if (!$menu.hasClass('fixed') && ($window.scrollTop >
//        $menu.offset().top)) {
//        $menu.addClass('fixed').data('top', $navigation.
//            offset().top);
//    } else if ($menu.hasClass('fixed') $$ ($window.scrollTop() <
//        $menu.data('top'))) {
//            $menu.removeClass('fixed');
//    }
//});

//growl's addNotice
function addNotice(notice) {
    $('<div class="notice"></div>')
        .append('<div class="skin"></div>')
        .append('<a href="#" class="close">close</a>')
        .append($('<div class="content"></div>').html(notice))
        .hide()
        .appendTo('#growl')
        .fadeIn(1000);
}
//growl tags
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

$(function () {
    //grwol start
    
    $('#growl')
        .find('.close')
        .on('click', function () {
            console.log('growl');
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
                }, 5000, function () {
                    $(this).remove();
                });
        });
});
//image slideshow
function slideShow() {
    let current = $('#images .show');
    let next = current.next().length ? current.next() : current.siblings().first();
    current.hide().removeClass('show');
    next.fadeIn().addClass('show');
    setTimeout(slideShow, 3000);
}
//image scroll
//$('#images').resizable();
//$('#images').toggle(function () {
//    let scrollAmount = $(this).width() - $(this).parent().width();
//    $(this).animate({ 'left': '-=' + scrollAmount }, 'slow');
//}, function () {
//    $(this).animate({ 'left': '0' }, 'slow');
//});
#('#images').click(function () {
    let scrollAmount = $(this).width() - $(this).parent().width();
    let currentPos = Math.abs(parseInt($(this).css('left')));
    let remainingScroll = scrollAmount - currentPos;
    let nextScroll = Math.floor($(this).parent().width() / 2);
    if (remainingScroll < nextScroll) {
        nextScroll = remainingScroll;
    }
    if (currentPos < scrollAmount) {
        $(this).animate({ 'left': '-=' + nextScroll }, 'slow');
    } else {
        $(this).animate({ 'left': '0', 'fast'});
    }
});
//slideshow widget
//gallery = {};
//gallery.offset = function () {
//    let left = gallery.content.position().left;
//    if (gallery.scroll == '>') {
//        if (left < 0) {
//            left += gallery.width;
//        }
//    } else {
//        if (left <= 0 && left >= ((gallery.innerWidth * -1) +
//            (gallery.width * 2))) {
//            left -= gallery.width;
//        }
//    }
//    return left + 'px';
//}
//gallery.slide = function () {
//    if (gallery.timer) {
//        clearTimeout(gallery.timer);
//    }
//    if (gallery.scroll) {
//        $(gallery.content).stop(true, true).animate({ left: gallery.offset() }, 500);
//        gallery.timer = setTimeout(gallery.slide, 1000);
//    }
//}
//gallery.direction = function (e, which) {
//    let x = e.pageX - which.offset().left;
//    gallery.scroll = (x >= gallery.width / 2) ? ">" : "<";
//}
//gallery.init = function () {
//    $(gallery.trigger)
//        .mouseout(function () { gallery.scroll = false; })
//        .mousemove(function (e) { gallery.direction(e, gallery.trigger); })
//        .mouseover(function (e) {
//            gallery.direction(e, gallery.trigger);
//            gallery.slide();
//        });
//}

function showMove(move) {
    
    move.animate({opacity: '1'})
}
//move box
$('.move1').hover(function (event) {
    $('.moveBox1').animate({opacity: '1'},1000);
}, function () {
    $('.moveBox1').animate({opacity: '0'},500);
});
$('.move2').hover(function (event) {
    $('.moveBox2').animate({opacity: '1'},1000);
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

//tooltip
$('.blurp').hover(function (event) {
    console.log('tooltip');
    let titleText = $(this).attr('title');
    $(this)
        .data('tipText', titleText)
        .removeAttr('title');
    $('<p class="tooltip"></p>')
        .text(titleText)
        .css({
            'top': (event.pageY - 10) + 'px',
            'left': (event.pageX - 10) + 'px'
        })
        .fadeIn('slow');
}, function () {
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
}).mousemove(function (event) {
    $('.tooltip')
        .css({
            'top': (event.pageY - 10) + 'px',
            'left': (event.pageY - 10) + 'px'
        });


});

//one up: move damage
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
