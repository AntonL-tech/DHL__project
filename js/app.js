$(function() {

    /*Fixes Header*/
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


    /*navToggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("burger--active");
        nav.toggleClass("show");

    });

    /*Active Nav Link*/

    $("#nav a").on("click", function(event) {
        $("#nav a").removeClass("nav__link--active");
        $(this).addClass("nav__link--active");
    });


    /*Collapse*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

            $(blockId).slideToggle();
            $this.toggleClass("accordion__item--active");

    });

    /*Collapse*/
    $("[data-switch]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("switch");
        $("[data-switch]").removeClass("express__title__item--active");
        $this.addClass("express__title__item--active");

    });

});