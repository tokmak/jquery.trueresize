;(function($) {

    var timer;

    $(window).resize(function() {
        (function() {
            timer && clearTimeout(timer);
            timer = setTimeout(function() {
                timer = null;
                $(window).trigger('trueresize');
            }, 20);
        })();
    });

})(jQuery);