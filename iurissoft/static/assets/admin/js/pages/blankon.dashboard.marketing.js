var BlankonDashboardMarketing = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalPluginsPath = BlankonApp.handleBaseURL()+'/assets/global/plugins/bower_components';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboardMarketing.counterOverview();
            BlankonDashboardMarketing.gritterNotification();
            BlankonDashboardMarketing.sessionTimeout();
            BlankonDashboardMarketing.dashboardDaterangepicker();
            BlankonDashboardMarketing.marketingChart();
            BlankonDashboardMarketing.mapContinents();
            BlankonDashboardMarketing.chartShareOfSales();
            BlankonDashboardMarketing.chartTopProducts();
            BlankonDashboardMarketing.chartTopCustomers();
            BlankonDashboardMarketing.shortcutOverview();
            BlankonDashboardMarketing.overviewFacebookChart();
            BlankonDashboardMarketing.overviewTwitterChart();
            BlankonDashboardMarketing.overviewYoutubeChart();
        },

        // =========================================================================
        // COUNTER OVERVIEW
        // =========================================================================
        counterOverview: function () {
            if($('.counter').length){
                $('.counter').counterUp({
                    delay: 10,
                    time: 4000
                });
            }
        },

        // =========================================================================
        // GRITTER NOTIFICATION
        // =========================================================================
        gritterNotification: function () {
            // display marketing alert only once
            if($('#wrapper').css('opacity')) {
                if (!$.cookie('intro')) {

                    // Gritter notification intro 1
                    setTimeout(function () {
                        var unique_id = $.gritter.add({
                            // (string | mandatory) the heading of the notification
                            title: 'Welcome to Blankon',
                            // (string | mandatory) the text inside the notification
                            text: 'Blankon is a theme fullpack admin template powered by Twitter bootstrap 3 front-end framework.',
                            // (string | optional) the image to display on the left
                            image: globalImgPath+'/icon/64/contact.png',
                            // (bool | optional) if you want it to fade out on its own or just sit there
                            sticky: false,
                            // (int | optional) the time you want it to be alive for before fading out
                            time: ''
                        });

                        // You can have it return a unique id, this can be used to manually remove it later using
                        setTimeout(function () {
                            $.gritter.remove(unique_id, {
                                fade: true,
                                speed: 'slow'
                            });
                        }, 12000);
                    }, 5000);

                    // Gritter notification intro 2
                    setTimeout(function () {
                        $.gritter.add({
                            // (string | mandatory) the heading of the notification
                            title: 'Playing sounds',
                            // (string | mandatory) the text inside the notification
                            text: 'Blankon made for playing small sounds, will help you with this task. Please make your sound system is active',
                            // (string | optional) the image to display on the left
                            image: globalImgPath+'/icon/64/sound.png',
                            // (bool | optional) if you want it to fade out on its own or just sit there
                            sticky: true,
                            // (int | optional) the time you want it to be alive for before fading out
                            time: ''
                        });
                    }, 8000);

                    // Set cookie intro
                    $.cookie('intro',1, {expires: 1});
                }
            }
        },

        // =========================================================================
        // SESSION TIMEOUT
        // =========================================================================
        sessionTimeout: function () {
            if($('.demo-dashboard-session').length){
                $.sessionTimeout({
                    title: 'JUST DEMO Your session is about to expire!',
                    logoutButton: 'Logout',
                    keepAliveButton: 'Stay Connected',
                    message: 'Your session will be locked in 2 minute',
                    keepAliveUrl: '#',
                    logoutUrl: 'page-signin.html',
                    redirUrl: 'page-lock-screen.html',
                    ignoreUserActivity: true,
                    warnAfter: 120000,
                    redirAfter: 240000
                });
            }
        },

        // =========================================================================
        // DASHBOARD DATE RANGE PICKER
        // =========================================================================
        dashboardDaterangepicker: function () {
            if (!jQuery().daterangepicker) {
                return;
            }

            $('#dashboard-report-range').daterangepicker({
                    opens: 'left',
                    startDate: moment().subtract('days', 29),
                    endDate: moment(),
                    minDate: '01/01/2012',
                    maxDate: '12/31/2020',
                    dateLimit: {
                        days: 60
                    },
                    showDropdowns: false,
                    showWeekNumbers: true,
                    timePicker: true,
                    timePickerIncrement: 1,
                    timePicker12Hour: true,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                        'Last 7 Days': [moment().subtract('days', 6), moment()],
                        'Last 30 Days': [moment().subtract('days', 29), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                    buttonClasses: ['btn btn-sm'],
                    applyClass: 'btn-success',
                    cancelClass: 'btn-default',
                    format: 'MM/DD/YYYY',
                    separator: ' to ',
                    locale: {
                        applyLabel: 'Apply',
                        fromLabel: 'From',
                        toLabel: 'To',
                        customRangeLabel: 'Custom Range',
                        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        firstDay: 1
                    }
                },
                function (start, end) {
                    $('#dashboard-report-range span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }
            );


            $('#dashboard-report-range span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            $('#dashboard-report-range').show();
        },

        // =========================================================================
        // MARKETING CHART
        // =========================================================================
        marketingChart: function () {
            new Chartist.Bar('.ct-marketing-chart', {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                series: [
                    [5, 4, 3, 7, 5, 4, 3, 7, 3, 2, 4, 4],
                    [3, 2, 9, 5, 3, 2, 9, 5, 7, 7, 2, 2],
                    [1, 5, 8, 4, 1, 5, 8, 4, 2, 3, 6, 2],
                    [2, 3, 4, 6, 1, 5, 8, 4, 2, 3, 5, 2]
                ]
            }, {
                // Default mobile configuration
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value.split(/\s+/).map(function(word) {
                            return word[0];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            }, [
                // Options override for media > 400px
                ['screen and (min-width: 400px)', {
                    reverseData: true,
                    horizontalBars: true,
                    axisX: {
                        labelInterpolationFnc: Chartist.noop
                    },
                    axisY: {
                        offset: 60
                    }
                }],
                // Options override for media > 800px
                ['screen and (min-width: 800px)', {
                    stackBars: false,
                    seriesBarDistance: 10
                }],
                // Options override for media > 1000px
                ['screen and (min-width: 1000px)', {
                    reverseData: false,
                    horizontalBars: false,
                    seriesBarDistance: 10
                }]
            ]);
        },

        // =========================================================================
        // CONTINENTS MAP
        // =========================================================================
        mapContinents: function () {
            if($('#continents').length){
                // Optimalisation: Store the references outside the event handler:
                var $window = $(window);
                function checkWidth() {
                    var windowsize = $window.width();
                    // Check if view screen on greater then 720px and smaller then 1024px
                    if (windowsize > 1024) {
                        $('.map-continent').width(752);
                    }
                    if (windowsize < 800) {
                        $('.map-continent').width(500);
                    }
                    if (windowsize < 500) {
                        $('.map-continent').width(280);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);

                // Data Visualization
                var max = 0,
                    min = Number.MAX_VALUE,
                    cc;

                //find maximum and minimum values
                for (cc in sample_data)
                {
                    if (parseFloat(sample_data[cc]) > max)
                    {
                        max = parseFloat(sample_data[cc]);
                    }
                    if (parseFloat(sample_data[cc]) < min)
                    {
                        min = parseFloat(sample_data[cc]);
                    }
                }

                $('#asia-map').vectorMap({
                    map: 'asia_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#81b71a', '#8CC152'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
                $('#europe-map').vectorMap({
                    map: 'europe_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#E9573F', '#ba4a34'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
                $('#australia-map').vectorMap({
                    map: 'australia_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#C8EEFF', '#006491'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
                $('#africa-map').vectorMap({
                    map: 'africa_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#37BC9B', '#28846e'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
                $('#northamerica-map').vectorMap({
                    map: 'north-america_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#906094', '#6e4972'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
                $('#southamerica-map').vectorMap({
                    map: 'south-america_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#5577B4', '#455b8c'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function(event, label, code)
                    {
                        console.log(code)
                        label.html('<div class="map-tooltip"><h4 class="header" style="margin: 0 0 5px 0;">'+code.toUpperCase()+' : '+sample_data[code]+'</h4><p class="description" style="margin-bottom: 0;">Customer ID (Click for detail)</p></div>');
                    },
                    onRegionClick: function(element, code, region)
                    {
                        var message = region + ' ('+code.toUpperCase()+')'
                            + ' which have total customers: '
                            + sample_data[code] + ' People';

                        alert(message);
                    }
                });
            }
        },

        // =========================================================================
        // SHARE OF SALES
        // =========================================================================
        chartShareOfSales: function () {
            var piedata = [
                { label: "Computers", data: [[1,40]], color: '#37BC9B'},
                { label: "Games", data: [[1,20]], color: '#8CC152'},
                { label: "Cell Phones", data: [[1,50]], color: '#00B1E1'},
                { label: "TV & Home Theaters", data: [[1,90]], color: '#E9573F'},
                { label: "Cameras", data: [[1,80]], color: '#906094'}
            ];

            function labelFormatter(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            $.plot('#chart-share-of-sales', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 0.9,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        },

        // =========================================================================
        // TOP 5 PRODUCTS
        // =========================================================================
        chartTopProducts: function () {
            var bardata = [ ["Iphone 7", 5], ["3D Glasses", 20], ["Laptop 21 Inch", 18], ["TV Flat", 8], ["MacBook Pro Retina", 13] ];

            $.plot("#chart-top-products", [ bardata ], {
                series: {
                    lines: {
                        lineWidth: 1
                    },
                    bars: {
                        show: true,
                        barWidth: 0.5,
                        align: "center",
                        lineWidth: 0,
                        fillColor: "#81b71a"
                    }
                },
                grid: {
                    borderColor: '#ddd',
                    borderWidth: 1,
                    labelMargin: 10
                },
                xaxis: {
                    mode: "categories",
                    tickLength: 0
                }
            });
        },

        // =========================================================================
        // TOP 5 CUSTOMERS
        // =========================================================================
        chartTopCustomers: function () {
            var bardata = [ ["#432", 13], ["#23", 34], ["#789", 23], ["#6734", 8], ["#121", 11] ];

            $.plot("#chart-top-customers", [ bardata ], {
                series: {
                    lines: {
                        lineWidth: 1
                    },
                    bars: {
                        show: true,
                        barWidth: 0.5,
                        align: "center",
                        lineWidth: 0,
                        fillColor: "#00B1E1"
                    }
                },
                grid: {
                    borderColor: '#ddd',
                    borderWidth: 1,
                    labelMargin: 10
                },
                xaxis: {
                    mode: "categories",
                    tickLength: 0
                }
            });
        },

        // =========================================================================
        // SHORTCUT OVERVIEW
        // =========================================================================
        shortcutOverview: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#grid-container').cubeportfolio({
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
        },

        // =========================================================================
        // OVERVIEW FACEBOOK CHART
        // =========================================================================
        overviewFacebookChart: function () {
            var chart = new Chartist.Line('.ct-widget-social-overview-facebook', {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [20, 45, 57, 68, 89, 107, 120],
                    [15, 30, 70, 80, 67, 78, 110]
                ]
            }, {
                low: 0
            });

            // Let's put a sequence number aside so we can use it in the event callbacks
            var seq = 0,
                delays = 80,
                durations = 500;

            // Once the chart is fully created we reset the sequence
            chart.on('created', function() {
                seq = 0;
            });

            // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
            chart.on('draw', function(data) {
                seq++;

                if(data.type === 'line') {
                    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                    data.element.animate({
                        opacity: {
                            // The delay when we like to start the animation
                            begin: seq * delays + 1000,
                            // Duration of the animation
                            dur: durations,
                            // The value where the animation should start
                            from: 0,
                            // The value where it should end
                            to: 1
                        }
                    });
                } else if(data.type === 'label' && data.axis === 'x') {
                    data.element.animate({
                        y: {
                            begin: seq * delays,
                            dur: durations,
                            from: data.y + 100,
                            to: data.y,
                            // We can specify an easing function from Chartist.Svg.Easing
                            easing: 'easeOutQuart'
                        }
                    });
                } else if(data.type === 'label' && data.axis === 'y') {
                    data.element.animate({
                        x: {
                            begin: seq * delays,
                            dur: durations,
                            from: data.x - 100,
                            to: data.x,
                            easing: 'easeOutQuart'
                        }
                    });
                } else if(data.type === 'point') {
                    data.element.animate({
                        x1: {
                            begin: seq * delays,
                            dur: durations,
                            from: data.x - 10,
                            to: data.x,
                            easing: 'easeOutQuart'
                        },
                        x2: {
                            begin: seq * delays,
                            dur: durations,
                            from: data.x - 10,
                            to: data.x,
                            easing: 'easeOutQuart'
                        },
                        opacity: {
                            begin: seq * delays,
                            dur: durations,
                            from: 0,
                            to: 1,
                            easing: 'easeOutQuart'
                        }
                    });
                } else if(data.type === 'grid') {
                    // Using data.axis we get x or y which we can use to construct our animation definition objects
                    var pos1Animation = {
                        begin: seq * delays,
                        dur: durations,
                        from: data[data.axis.units.pos + '1'] - 30,
                        to: data[data.axis.units.pos + '1'],
                        easing: 'easeOutQuart'
                    };

                    var pos2Animation = {
                        begin: seq * delays,
                        dur: durations,
                        from: data[data.axis.units.pos + '2'] - 100,
                        to: data[data.axis.units.pos + '2'],
                        easing: 'easeOutQuart'
                    };

                    var animations = {};
                    animations[data.axis.units.pos + '1'] = pos1Animation;
                    animations[data.axis.units.pos + '2'] = pos2Animation;
                    animations['opacity'] = {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    };

                    data.element.animate(animations);
                }
            });

            // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
            chart.on('created', function() {
                if(window.__exampleAnimateTimeout) {
                    clearTimeout(window.__exampleAnimateTimeout);
                    window.__exampleAnimateTimeout = null;
                }
                window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
            });
        },

        // =========================================================================
        // OVERVIEW TWITTER CHART
        // =========================================================================
        overviewTwitterChart: function () {
            new Chartist.Line('.ct-widget-social-overview-twitter', {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [80, 110, 70, 90, 50, 40, 60]
                ]
            }, {
                low: 0,
                showArea: true
            });
        },

        // =========================================================================
        // OVERVIEW YOUTUBE CHART
        // =========================================================================
        overviewYoutubeChart: function () {
            new Chartist.Line('.ct-widget-social-overview-youtube', {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [20, 45, 57, 68, 89, 107, 120],
                    [15, 30, 70, 80, 67, 78, 110]
                ]
            }, {
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                axisX: {
                    showLabel: true,
                    showGrid: false
                }
            });
        }

    };

}();

// Call main app init
BlankonDashboardMarketing.init();
