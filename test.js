$(function () {
    $(window).on('touchmove.noScroll', function(e) {
        e.preventDefault();
    });

    $(document).on('focusin', 'input, textarea', function() {
        $('.content').addClass('unfixed');
    })
        .on('focusout', 'input, textarea', function () {
            $('.content').removeClass('unfixed');
        });
});