$(function() {

    let menu = $("#header-menu");
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let menuH;
    let headerH;

    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
         introH = intro.innerHeight();
         menuH = menu.innerHeight();
         headerH = header.innerHeight();
         scrollPos = $(this).scrollTop();

        if(scrollPos > (introH + menuH + headerH)) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});