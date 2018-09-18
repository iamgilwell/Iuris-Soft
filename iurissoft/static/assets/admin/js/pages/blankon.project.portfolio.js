var BlankonProjectPortfolio = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonProjectPortfolio.CubeportfolioTeam();
        },

        // =========================================================================
        // CUBEPORTFOLIO TEAM
        // =========================================================================
        CubeportfolioTeam: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#grid-container').cubeportfolio({
                    filters: '#filters-container',
                    loadMore: '#loadMore-container',
                    loadMoreAction: 'click',
                    layoutMode: 'grid',
                    defaultFilter: '*',
                    animationType: 'quicksand',
                    gapHorizontal: 35,
                    gapVertical: 30,
                    gridAdjustment: 'responsive',
                    mediaQueries: [{
                        width: 1100,
                        cols: 4
                    }, {
                        width: 800,
                        cols: 3
                    }, {
                        width: 500,
                        cols: 2
                    }, {
                        width: 320,
                        cols: 1
                    }],
                    caption: 'overlayBottomReveal',
                    displayType: 'sequentially',
                    displayTypeSpeed: 80,

                    // lightbox
                    lightboxDelegate: '.cbp-lightbox',
                    lightboxGallery: true,
                    lightboxTitleSrc: 'data-title',
                    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

                    // singlePage popup
                    singlePageDelegate: '.cbp-singlePage',
                    singlePageDeeplinking: true,
                    singlePageStickyNavigation: true,
                    singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
                    singlePageCallback: function(url, element) {
                        // to update singlePage content use the following method: this.updateSinglePage(yourContent)
                        var t = this;

                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'html',
                            timeout: 10000
                        })
                            .done(function(result) {
                                t.updateSinglePage(result);
                            })
                            .fail(function() {
                                t.updateSinglePage('AJAX Error! Please refresh the page!');
                            });
                    },
                });

            })(jQuery, window, document);
        }

    };

}();

// Call main app init
BlankonProjectPortfolio.init();