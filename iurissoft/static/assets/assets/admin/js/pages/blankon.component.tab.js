var BlankonComponentTab = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonComponentTab.componentTabs();
        },

        // =========================================================================
        // TABS COMPONENT
        // =========================================================================
        componentTabs: function () {

            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio fadeout
                $('#js-grid-tabs-fadeout').cubeportfolio({
                    filters: '#js-filters-tabs-fadeout',
                    defaultFilter: '.tab-1',
                    animationType: 'fadeOut',
                    gridAdjustment: 'default',
                    displayType: 'default'
                });

            })(jQuery, window, document);

            $('a[href="#tab5-2"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio quicksand
                    $('#js-grid-tabs-quicksand').cubeportfolio({
                        filters: '#js-filters-tabs-quicksand',
                        defaultFilter: '.tab-1',
                        animationType: 'quicksand',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-3"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio bounceLeft
                    $('#js-grid-tabs-bounceLeft').cubeportfolio({
                        filters: '#js-filters-tabs-bounceLeft',
                        defaultFilter: '.tab-1',
                        animationType: 'bounceLeft',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-4"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio bounceTop
                    $('#js-grid-tabs-bounceTop').cubeportfolio({
                        filters: '#js-filters-tabs-bounceTop',
                        defaultFilter: '.tab-1',
                        animationType: 'bounceTop',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-5"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio bounceBottom
                    $('#js-grid-tabs-bounceBottom').cubeportfolio({
                        filters: '#js-filters-tabs-bounceBottom',
                        defaultFilter: '.tab-1',
                        animationType: 'bounceBottom',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-6"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio moveLeft
                    $('#js-grid-tabs-moveLeft').cubeportfolio({
                        filters: '#js-filters-tabs-moveLeft',
                        defaultFilter: '.tab-1',
                        animationType: 'moveLeft',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-7"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio slideLeft
                    $('#js-grid-tabs-slideLeft').cubeportfolio({
                        filters: '#js-filters-tabs-slideLeft',
                        defaultFilter: '.tab-1',
                        animationType: 'slideLeft',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-8"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio fadeOutTop
                    $('#js-grid-tabs-fadeOutTop').cubeportfolio({
                        filters: '#js-filters-tabs-fadeOutTop',
                        defaultFilter: '.tab-1',
                        animationType: 'fadeOutTop',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-9"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio sequentially
                    $('#js-grid-tabs-sequentially').cubeportfolio({
                        filters: '#js-filters-tabs-sequentially',
                        defaultFilter: '.tab-1',
                        animationType: 'sequentially',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-10"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio skew
                    $('#js-grid-tabs-skew').cubeportfolio({
                        filters: '#js-filters-tabs-skew',
                        defaultFilter: '.tab-1',
                        animationType: 'skew',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-11"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio slideDelay
                    $('#js-grid-tabs-slideDelay').cubeportfolio({
                        filters: '#js-filters-tabs-slideDelay',
                        defaultFilter: '.tab-1',
                        animationType: 'slideDelay',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-12"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio 3dflip
                    $('#js-grid-tabs-3dflip').cubeportfolio({
                        filters: '#js-filters-tabs-3dflip',
                        defaultFilter: '.tab-1',
                        animationType: '3dflip',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-13"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio rotateSides
                    $('#js-grid-tabs-rotateSides').cubeportfolio({
                        filters: '#js-filters-tabs-rotateSides',
                        defaultFilter: '.tab-1',
                        animationType: 'rotateSides',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-14"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio flipOutDelay
                    $('#js-grid-tabs-flipOutDelay').cubeportfolio({
                        filters: '#js-filters-tabs-flipOutDelay',
                        defaultFilter: '.tab-1',
                        animationType: 'flipOutDelay',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-15"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio flipOut
                    $('#js-grid-tabs-flipOut').cubeportfolio({
                        filters: '#js-filters-tabs-flipOut',
                        defaultFilter: '.tab-1',
                        animationType: 'flipOut',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-16"]').on('shown.bs.tab', function () {
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
            });

            $('a[href="#tab5-17"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio foldLeft
                    $('#js-grid-tabs-foldLeft').cubeportfolio({
                        filters: '#js-filters-tabs-foldLeft',
                        defaultFilter: '.tab-1',
                        animationType: 'foldLeft',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-18"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio scaleDown
                    $('#js-grid-tabs-scaleDown').cubeportfolio({
                        filters: '#js-filters-tabs-scaleDown',
                        defaultFilter: '.tab-1',
                        animationType: 'scaleDown',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-19"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio scaleSides
                    $('#js-grid-tabs-scaleSides').cubeportfolio({
                        filters: '#js-filters-tabs-scaleSides',
                        defaultFilter: '.tab-1',
                        animationType: 'scaleSides',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-20"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio frontRow
                    $('#js-grid-tabs-frontRow').cubeportfolio({
                        filters: '#js-filters-tabs-frontRow',
                        defaultFilter: '.tab-1',
                        animationType: 'frontRow',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-21"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio flipBottom
                    $('#js-grid-tabs-flipBottom').cubeportfolio({
                        filters: '#js-filters-tabs-flipBottom',
                        defaultFilter: '.tab-1',
                        animationType: 'flipBottom',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

            $('a[href="#tab5-22"]').on('shown.bs.tab', function () {
                (function($, window, document, undefined) {
                    'use strict';

                    // init cubeportfolio rotateRoom
                    $('#js-grid-tabs-rotateRoom').cubeportfolio({
                        filters: '#js-filters-tabs-rotateRoom',
                        defaultFilter: '.tab-1',
                        animationType: 'rotateRoom',
                        gridAdjustment: 'default',
                        displayType: 'default'
                    });

                })(jQuery, window, document);
            });

        }

    };

}();

// Call main app init
BlankonComponentTab.init();