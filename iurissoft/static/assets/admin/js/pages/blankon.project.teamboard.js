var BlankonProjectTeamBoard = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonProjectTeamBoard.handleTabs();
        },

        // =========================================================================
        // HANDLE TABS
        // =========================================================================
        handleTabs: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#js-grid-lightbox-teamboard').cubeportfolio({
                    filters: '#js-filters-lightbox-teamboard1, #js-filters-lightbox-teamboard2',
                    search: '#js-search-teamboard',
                    loadMore: '#js-loadMore-lightbox-teamboard',
                    loadMoreAction: 'click',
                    layoutMode: 'grid',
                    mediaQueries: [{
                        width: 1500,
                        cols: 5
                    }, {
                        width: 1100,
                        cols: 4
                    }, {
                        width: 800,
                        cols: 3
                    }, {
                        width: 480,
                        cols: 2
                    }, {
                        width: 320,
                        cols: 1
                    }],
                    defaultFilter: '*',
                    animationType: 'rotateSides',
                    gapHorizontal: 10,
                    gapVertical: 10,
                    gridAdjustment: 'responsive',
                    caption: 'zoom',
                    displayType: 'sequentially',
                    displayTypeSpeed: 100,

                    // lightbox
                    lightboxDelegate: '.cbp-lightbox',
                    lightboxGallery: true,
                    lightboxTitleSrc: 'data-title',
                    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

                    // singlePageInline
                    singlePageInlineDelegate: '.cbp-singlePageInline',
                    singlePageInlinePosition: 'below',
                    singlePageInlineInFocus: true,
                    singlePageInlineCallback: function(url, element) {
                        // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                        var t = this;

                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'html',
                            timeout: 10000
                        })
                            .done(function(result) {

                                t.updateSinglePageInline(result);

                            })
                            .fail(function() {
                                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                            });
                    },
                });
            })(jQuery, window, document);
        }

    };

}();

// Call main app init
BlankonProjectTeamBoard.init();