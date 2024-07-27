$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    // copyrights Year Auto-update
    function newDate() {
        return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = + newDate();

});


AOS.init();
AOS.refresh();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:false,
            loop:true
        }
    }
})


document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});