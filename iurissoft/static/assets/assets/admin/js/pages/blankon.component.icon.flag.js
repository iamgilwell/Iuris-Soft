var BlankonComponentIconFlag = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconFlag.handleAddMultipleAttribute();
            BlankonComponentIconFlag.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.flag-wrapper').each(function( index ) {
                $(this).attr('data-icon',$(this).find('div').attr('class').replace('img-thumbnail ','').replace('flag-icon-background',''));
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.flag-wrapper', {
                text: function(trigger) {
                    return '<div class="'+trigger.getAttribute('data-icon')+'"></div>';
                }
            });
            $('.flag-wrapper').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon country '+$(this).data('icon').replace('flag flag-icon',''),
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
BlankonComponentIconFlag.init();
