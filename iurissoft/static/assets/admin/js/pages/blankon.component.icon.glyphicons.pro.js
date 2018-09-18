var BlankonComponentIconGlyphiconsPro = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconGlyphiconsPro.handleAddMultipleAttribute();
            BlankonComponentIconGlyphiconsPro.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.bs-glyphicons-pro-list a').each(function( index ) {
                $(this).attr('data-icon',$(this).attr('class'));
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.bs-glyphicons-pro-list a', {
                text: function(trigger) {
                    return '<a class="'+trigger.getAttribute('data-icon')+'"><i></i></a>';
                }
            });
            $('.bs-glyphicons-pro-list a').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon '+$(this).data('icon').replace('glyphicons',''),
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
BlankonComponentIconGlyphiconsPro.init();
