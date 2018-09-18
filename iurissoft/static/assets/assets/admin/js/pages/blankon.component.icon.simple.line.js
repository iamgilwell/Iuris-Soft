var BlankonComponentIconSimpleLine = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentIconSimpleLine.handleAddMultipleAttribute();
            BlankonComponentIconSimpleLine.handleCopyClipboardIcon();
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.icon-preview-box .preview').each(function( index ) {
                $(this).attr('data-icon',$(this).find('.name').contents().text());
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.icon-preview-box .preview', {
                text: function(trigger) {
                    return '<i class="'+trigger.getAttribute('data-icon')+'"></i>';
                }
            });
            $('.icon-preview-box .preview').on('click', function () {
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
BlankonComponentIconSimpleLine.init();
