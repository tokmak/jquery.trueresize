$(function() {

    var $frame = $('#frame');

    $('.btn').click(function() {

        var width = $frame.css('width').replace('px', '');
        width = (width > 900) ? 600 : 900;

        $frame.animate({ width:width }, { duration:2000 });
    });

});
