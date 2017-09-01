/**
 * Created by chenyu on 2017/8/26.
 */

const PAGESWITCHINGDURATION = 4000;
const SWITCHINGANIMATIONDURATION = 1000;
const ANIMATIONINTERVAL = 500;

$(function () {
    /* navigation bar switch */
    $(".nav_item").children().click(function () {
        var selectedItem = $(".nav_selected");
        var currentItem = $(this);

        selectedItem.removeClass("nav_selected");
        selectedItem.addClass("nav_unselected");

        currentItem.removeClass("nav_unselected");
        currentItem.addClass("nav_selected");

        return false;
    });

    // add the event handler for mouse move in the contact way
    var contactIdList = ["#contact_subscription", "#contact_service", "#contact_weibo"];

    for (var index = 0; index < contactIdList.length; index++) {
        var selector = $(contactIdList[index]);
        selector.mouseenter(function () {
            $(this).children("img").css("display", "inline");
            $(this).children("div").css("display", "none");
        });
        selector.mouseleave(function () {
            $(this).children("img").css("display", "none");
            $(this).children("div").css("display", "block");
        });
    }

    var firstPage = new HomeSwitchingPage(".first", function () {
        /* first page animation */
        var first = $(".first");
        first.css("display", "block");
        first.children(".major").css({"paddingTop": "16%", "opacity": "0"});
        first.children(".sub").css({"marginTop": "7%", "opacity": "0"});
        first.children(".page_icon").css({"marginTop": "9%", "opacity": "0"});

        first.children(".major").animate({paddingTop: "12%", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
        setTimeout(function () {
            first.children(".sub").animate({marginTop: "3%", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
            setTimeout(function () {
                first.children(".page_icon").animate({marginTop: "4%", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
            }, ANIMATIONINTERVAL);
        }, ANIMATIONINTERVAL);
    }, function () {
        $(".first").css("display", "none");
    });

    var secondPage = new HomeSwitchingPage(".second", function () {
        /* second page animation */
        var second = $(".second");
        second.css("display", "block");
        second.find(".left_page").css({"marginRight": "30%", "opacity": 0});
        second.find(".right_page img").css({marginLeft: "100px", opacity: "0"});
        second.find(".right_page .major").css({marginLeft: "70px", opacity: "0"});

        second.find(".left_page").animate({marginRight: "10%", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack")
        $("#second_right_page_icon1").animate({marginLeft: "0px", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
        setTimeout(function () {
            $("#second_right_page_text1").animate({marginLeft: "10px", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
            setTimeout(function () {
                $("#second_right_page_icon2").animate({marginLeft: "0", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
                setTimeout(function () {
                    $("#second_right_page_text2").animate({marginLeft: "10px", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
                    setTimeout(function () {
                        $("#second_right_page_icon3").animate({marginLeft: "0", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
                        setTimeout(function () {
                            $("#second_right_page_text3").animate({marginLeft: "10px", opacity: "1"}, SWITCHINGANIMATIONDURATION, "easeOutBack");
                        }, ANIMATIONINTERVAL);
                    }, ANIMATIONINTERVAL);
                }, ANIMATIONINTERVAL);
            }, ANIMATIONINTERVAL);
        }, ANIMATIONINTERVAL);
    }, function () {
        $(".second").css("display", "none");
    });

    // add a handler to close contact way
    $("#contact_close").click(function () {
        $("#contact").fadeOut("slow");
    });

    // add home page shuffling
    var pageShuffling = new HomePageShuffling([firstPage, secondPage], PAGESWITCHINGDURATION);

    pageShuffling.start();

    $("#next_page").click(function () {
        pageShuffling.manualNext();
    });
});


function HomeSwitchingPage(className, show, hide) {
    this.className = className;
    this.show = show;
    this.hide = hide;
}

function HomePageShuffling(pages, interval) {
    var _pages = pages;
    var _interval = interval;
    var _currentIndex = 0;
    var _intervalHandle = 0;

    function _nextPage() {
        _pages[_currentIndex].hide();
        _currentIndex++;
        if (_currentIndex == _pages.length) {
            _currentIndex = 0;
        }
        _pages[_currentIndex].show();
    }

    function _start() {
        _pages[_currentIndex].show();
        _intervalHandle = setInterval(function () {
            _nextPage();
        }, _interval);
    }

    function _stop() {
        if (_intervalHandle != 0)
        {
            clearInterval(_intervalHandle);
        }
    }

    function _manualNext () {
        if (_intervalHandle != 0)
        {
            _stop();
            _start();
        }
        this._nextPage();
    }

    return {
        start : _start,
        stop : _stop,
        manualNext: _manualNext
    }
}