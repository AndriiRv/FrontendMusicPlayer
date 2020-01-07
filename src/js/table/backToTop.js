import $ from "jquery";

let backToTop = $('#backToTop');
// if (backToTop.length) {
    let scrollTrigger = 100,
        doBackToTop = function () {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                backToTop.fadeIn();
                backToTop.addClass('show');
            } else {
                backToTop.removeClass('show');
                backToTop.fadeOut();
            }
        };
    doBackToTop();
    $(window).on('scroll', function () {
        doBackToTop();
    });
    backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
// }