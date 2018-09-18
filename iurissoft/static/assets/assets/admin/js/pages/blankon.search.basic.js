var BlankonSearchBasicPage = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonSearchBasicPage.searchTabs();
        },

        // =========================================================================
        // TABS SEARCH
        // =========================================================================
        searchTabs: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#js-grid-tabs').cubeportfolio({
                    filters: '#js-filters-tabs',
                    defaultFilter: '.web',
                    animationType: 'slideLeft',
                    gridAdjustment: 'default',
                    displayType: 'default',
                    caption: ''
                });
            })(jQuery, window, document);

        }

    };

}();

// Call main app init
BlankonSearchBasicPage.init();