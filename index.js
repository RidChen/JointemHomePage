/**
 * Created by chenyu on 2017/8/26.
 */

$(function () {
    /* navigation bar switch */
    $(".nav_item").children().click(function () {
        var selectedItem = $(".nav_selected");
        var currentItem = $(this);

        selectedItem.removeClass("navSelected");
        selectedItem.addClass("navUnselected");

        currentItem.removeClass("navUnselected");
        currentItem.addClass("navSelected");

        return false;
    });

    // calculate window size
    // $(".wrapper").css("height", document.body.clientHeight);

    /* first page animation */
    $(".first > .major").animate({paddingTop: "12%", opacity: "1"}, 1300, "easeOutBack");
    $(".first > .sub").animate({marginTop: "3%", opacity: "1"}, 1300, "easeOutBack");
    $(".first > .page_icon").animate({marginTop: "4%", opacity: "1"}, 1300, "easeOutBack");

    /* second page animation */
    $(".second .left_page").animate({marginRight: "10%", opacity: "1"}, 1300, "easeOutBack");
    $("#second_right_page_icon1").animate({marginLeft: "0px", opacity: "1"}, 1300, "easeOutBack");
    setTimeout(function () {
        $("#second_right_page_text1").animate({marginLeft: "10px", opacity: "1"}, 1300, "easeOutBack");
        setTimeout(function () {
            $("#second_right_page_icon2").animate({marginLeft: "0", opacity: "1"}, 1300, "easeOutBack");
            setTimeout(function () {
                $("#second_right_page_text2").animate({marginLeft: "10px", opacity: "1"}, 1300, "easeOutBack");
                setTimeout(function () {
                    $("#second_right_page_icon3").animate({marginLeft: "0", opacity: "1"}, 1300, "easeOutBack");
                    setTimeout(function () {
                        $("#second_right_page_text3").animate({marginLeft: "10px", opacity: "1"}, 1300, "easeOutBack");
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
});