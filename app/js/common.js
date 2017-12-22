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
