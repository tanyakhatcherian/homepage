// function that loads the "home.html" page on start
function start() {
    //$("body").css("background-color", "pink");
    $("#nav-bar a:eq(0)").click();
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
        autoplaySpeed: 2000,
        fade: true,
      });
}

$.ajaxSetup({
    cache: false
});

// UPDATED SELECTOR TO BE MORE SPECIFIC

$('#teaware_filters input[type="checkbox"]').click(filterProduct);

function filterProduct(){

    var checked = $('#teaware_filters input[type="checkbox"]:checked');
    var productsDiv = $('.products > div');
    if (checked.length > 0) {
        
        // 1. HIDE EVERYTHING
        // 2. IDENTIFY THE ACTIVATED FILTERS
        // 3. DISPLAY ITEMS THAT MEET THE CRITERIA

        productsDiv.hide();

        // CONVENIENT WAY TO RETRIEVE ALL ACTIVATED FILTERS
        var filterArray = $("#teaware_filters input:checked");

        // FOR SIMPLICITY, WE ARE NOT GOING TO "AND-COMBINE" FILTERS (EX. "SHOW ME MUGS THAT ARE ALSO LOW PRICE")
        // INSTEAD, WE GO "OR-COMBINE" (EX. "SHOW ME MUGS AS WELL AS LOW PRICE ITEMS")

        $.each(filterArray, function(i,o){

            $(".productItem[data-"+o.name+"='"+o.value+"']").show();

        });

    } else {

        productsDiv.show();
        
    }

}