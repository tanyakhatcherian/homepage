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


// filtering for teas + sale
// the product filter is working, but the caffiene filter is faulty for example if i click "green, low" it should show the item that is green tea with low caffiene, but it doesn't it shows both green teas, it only works with caffiene-free caffiene which i see is whats being called in the function but i don't know how to apply it to all filters of caffiene level. can you help me troubleshoot? i think whats happening is that as soon as the first condition is met it stops which is why caffiene free is showing first.. so how do i fix it? if i can fix the jquery it'll be fixed on the teas html as well. further, can i copy+paste this function again below and change the variable names to work with my teaware page? 

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