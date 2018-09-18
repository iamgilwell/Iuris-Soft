var BlankonTableSamples = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonTableSamples.tabTable();
            BlankonTableSamples.chartDay();
        },

        // =========================================================================
        // TABS TABLE
        // =========================================================================
        tabTable: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio unfold
                $('#js-grid-tabs-unfold').cubeportfolio({
                    filters: '#js-filters-tabs-unfold',
                    defaultFilter: '.tab-1',
                    animationType: 'unfold',
                    gridAdjustment: 'default',
                    displayType: 'default'
                });

            })(jQuery, window, document);
        },

        chartDay: function () {
            $(".pie").peity("pie", {
                fill: ["#81B71A", "#d7d7d7"]
            });
        }

    };

}();

// Call main app init
BlankonTableSamples.init();