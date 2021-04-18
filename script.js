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
        autoplaySpeed: 2000,
        fade: true,
      });
}

// filtering for teas + sale
// the product filter is working, but the caffiene filter is faulty for example if i click "green, low" it should show the item that is green tea with low caffiene, but it doesn't it shows both green teas, it only works with caffiene-free caffiene which i see is whats being called in the function but i don't know how to apply it to all filters of caffiene level. can you help me troubleshoot? i think whats happening is that as soon as the first condition is met it stops which is why caffiene free is showing first.. so how do i fix it? if i can fix the jquery it'll be fixed on the teas html as well. further, can i copy+paste this function again below and change the variable names to work with my teaware page? 

$('input[type="checkbox"]').click(function() {
    // Cache These Variables
    var $checked = $('input[type="checkbox"]:checked');
    var $productsDiv = $('.products > div');
    var $caffieneCheckBox = $('input[type="checkbox"][value="level"]');

    if ($checked.length > 0) {
        $productsDiv.hide();
        if ($checked.length == 1 && $caffieneCheckBox.is(':checked')) {
              $('.products > div[data-caffiene=' + $caffieneCheckBox.attr('id') + ']').show();
        } 
        // If Others are also Checked
        else {
            $checked.not($caffieneCheckBox).each(function() {
                var dataCaffiene = '';
                if ($caffieneCheckBox.is(':checked')) {
                    dataCaffiene = '[data-caffiene=' + $caffieneCheckBox.attr('id') + ']';
                }
                $('.products >div[data-category=' + this.id + ']' + dataCaffiene).show();
            });
        }
    } else {
        $productsDiv.show();
    }
});