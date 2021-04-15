// function that loads the "home.html" page on start
function start() {
    //$("body").css("background-color", "pink");
    $("#nav-bar a:first").click();
}

$(window).on("load", start);

// function that loads each page of the navigation bar on click
function loadpage(e){

    e.preventDefault();
    $("#nav-bar a.active").removeClass("active");
    $(this).addClass("active");

    let href = $(this).attr("href");
    
    if (href == "featured.html") {
        $("#content").load(href, slideshow);
    } else {
        $("#content").load(href);   
    }
}

$(document).on("click", "#nav-bar a", loadpage);

function slideshow() {

    $('#slideshow').slick({
        prevArrow: null,
        nextArrow: null,
        autoplay: true,
        fade: true,
      });
}