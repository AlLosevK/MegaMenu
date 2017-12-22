$(".popcountry li").click(function (e) {
    e.preventDefault();
    $(".popcountry li").removeClass('visible');
    $(this).addClass('visible');
})
$(".country").click(function (e) {
    e.preventDefault();
    $(".country").removeClass('country__active');
    $(this).addClass('country__active');
})
//
//$(".search-mob").click(function (e) {
//    e.preventDefault();
//    $(".search-mob").removeClass('search__btn-close');
//    $(this).addClass('search__btn-open');
//    $(".search").fadeIn("slow", function () {});
//})

$(".search-mob").click(function (e) {
    e.preventDefault();
    if ($(".search-mob").hasClass(".search__btn-open")) {
        $(".search-mob").removeClass('search__btn-open');
        $(".search-mob").addClass('search__btn-close');
        $(".search").fadeOut(400);
    } else {
        $(".search-mob").removeClass('search__btn-close');
        $(".search-mob").addClass('search__btn-open');
        $(".search").fadeIn(400);
    };
})

jQuery(document).ready(function ($) {
    $("#menu").mmenu({
        "offCanvas": {
            "position": "right"
        },
        "navbars": [
            {
                "position": "top"
                  },
            {
                "position": "bottom",
                "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                     ]
                  }
               ]
    });
});
