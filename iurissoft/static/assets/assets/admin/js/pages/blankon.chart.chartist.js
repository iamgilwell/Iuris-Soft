var BlankonChartChartist = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartChartist.handleTabs();
        },

        // =========================================================================
        // HANDLE TABS
        // =========================================================================
        handleTabs: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio unfold
                $('#js-grid-tabs-unfold').cubeportfolio({
                    filters: '#js-filters-tabs-unfold',
                    defaultFilter: '.tab-1',
                    animationType: 'scaleDown',
                    gridAdjustment: 'default',
                    displayType: 'default'
                });

            })(jQuery, window, document);
        }



    };

}();

// Call main app init
BlankonChartChartist.init();