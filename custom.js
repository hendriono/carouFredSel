$(function () {
    $("#foo").carouFredSel({
        curcular: false,
        infinite: false,
        auto: {
            pauseOnHover: 'resume',
            onPauseStart: function (percentage, duration) {
                $(this).trigger('configuration', ['width', function (value) {
                    $('#timer').stop().animate({
                        width: value
                    }, {
                        duration: duration,
                        easing: 'linear'
                    });
                }]);
            },
            onPauseEnd: function (percentage, duration) {
                $('#timer').stop().width(0);
            },
            onPausePause: function (percentage, duration) {
                $('#timer').stop();
            }
        },
        prev: {
            button: "#foo_prev",
            key: "left"
        },
        next: {
            button: "#foo_next",
            key: "right"
        },
        pagination: "#foo_pag"
    });
});