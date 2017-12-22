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
