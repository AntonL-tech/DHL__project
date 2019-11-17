$(function() {

    /*Fixes Header*/
    let menu = $("#header-menu");
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let menuH;
    let headerH;
    let showExpress = true;

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

        let $this = $(this);
        $("[data-switch]").removeClass("express__title__item--active");
        $this.addClass("express__title__item--active");
    });

    /*Switch*/
/*    $('#accordion_1,#accordion_2').onclick(function (event) {
        console.log(event)
    })*/

    $('#accordion_1').on("click", function (event) {
        if(!showExpress){
            $("#show-express").removeClass("accordion--show");
            $("#show-logistic").addClass("accordion--show");
            showExpress = true;
        }
    });
    $('#accordion_2').on("click", function (event) {
        if(showExpress){
            $("#show-logistic").removeClass("accordion--show");
            $("#show-express").addClass("accordion--show");
            showExpress = false;
        }
    })
});