$(document).ready(function () {
    console.log('final');

    //tooltip
    $('.blurp').hover(function (event) {
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

    
});