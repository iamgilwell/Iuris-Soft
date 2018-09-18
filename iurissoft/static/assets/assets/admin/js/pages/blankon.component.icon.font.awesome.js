var BlankonComponentIconFontAwesome = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconFontAwesome.handleAddMultipleAttribute();
            BlankonComponentIconFontAwesome.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.fontawesome-icon-list a').attr('href', 'javascript:void(0)');
            $('.fa-hover a').each(function( index ) {
                $(this).attr('data-icon',$(this).contents().text());
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.fa-hover a', {
                text: function(trigger) {
                    return '<i class="fa fa-'+trigger.getAttribute('data-icon')+'"></i>';
                }
            });
            $('.fa-hover a').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon '+$(this).data('icon'),
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
BlankonComponentIconFontAwesome.init();
