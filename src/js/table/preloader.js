import $ from "jquery";

$(document).ready(function () {
    let preloader = $('#preloader');
    let svg_anm = preloader.find('.animation');
    svg_anm.fadeOut();
    preloader.delay(1000).fadeOut('slow');
});