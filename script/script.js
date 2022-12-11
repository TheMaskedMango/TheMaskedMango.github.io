$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$("h4").click(function(){
    $("h4").removeClass("active");
    $("h4").css('background-color', 'darkslateblue');
    $(this).addClass("active");
    $(this).css('background-color', 'indianred');
});