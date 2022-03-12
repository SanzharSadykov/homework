import $ from "jquery"

$(document).ready(function () {
    $('.nav h1').on('click', function() {
        $('.nav h1').removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            console.log('class removed');
        } else {
            $(this).addClass('active');
            console.log('class added');
        }
    });
});