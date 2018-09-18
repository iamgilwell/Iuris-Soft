var BlankonComponentIconWeather = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconWeather.handleAddMultipleAttribute();
            BlankonComponentIconWeather.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.list-weather-icons .example').each(function( index ) {
                $(this).attr('data-icon',$(this).find('.class').contents().text());
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.list-weather-icons .example', {
                text: function(trigger) {
                    return '<i class="'+trigger.getAttribute('data-icon')+'"></i>';
                }
            });
            $('.list-weather-icons .example').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon '+$(this).data('icon').replace('wi wi-',''),
                    type: 'success',
                    animation: {
                        open  : 'animated bounceInRight',
                        close : 'animated bounceOutRight',
                        easing: 'swing', // easing
                        speed: 500 // opening & closing animation speed
                    }
                });
                n.setTimeout(2000);
            });
        }

    };

}();

// Call main app init
BlankonComponentIconWeather.init();
