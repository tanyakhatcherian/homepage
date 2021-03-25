function start() {
    //$("body").css("background-color", "pink");
    $("#nav-bar a:first").click();
}

$(window).on("load", start);

function loadpage(e){

    e.preventDefault();
    $("#nav-bar a.active").removeClass("active");
    $(this).addClass("active");

    let href = $(this).attr("href");
    $("#content").load(href);
}

$(document).on("click", "#nav-bar a", loadpage)