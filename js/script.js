
/*Change color on scroll for Navbar*/
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);
});

//Get the current year
$('#year').text(new Date().getFullYear());

//slider configuration
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'

});

// Video Play - from stackOverflow
$(function () {
    // Auto play modal video
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

//Scrollspy & smoothscrolling
$('body').scrollspy({ target: '#main-nav' });

//Smooth Scroll
$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {

            window.location.hash = hash;
        })
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
});
