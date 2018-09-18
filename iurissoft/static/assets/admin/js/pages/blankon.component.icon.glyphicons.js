var BlankonComponentIconGlyphicons = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconGlyphicons.handleAddMultipleAttribute();
            BlankonComponentIconGlyphicons.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.bs-glyphicons-list li').each(function( index ) {
                $(this).attr('data-icon',$(this).find('.glyphicon-class').contents().text());
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.bs-glyphicons-list li', {
                text: function(trigger) {
                    return '<i class="'+trigger.getAttribute('data-icon')+'"></i>';
                }
            });
            $('.bs-glyphicons-list li').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon '+$(this).data('icon').replace('glyphicon glyphicon-',''),
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
BlankonComponentIconGlyphicons.init();
