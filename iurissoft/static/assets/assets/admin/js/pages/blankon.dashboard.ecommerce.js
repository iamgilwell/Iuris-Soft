var BlankonDashboardEcommerce = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboardEcommerce.counterOverview();
            BlankonDashboardEcommerce.gritterNotification();
            BlankonDashboardEcommerce.sessionTimeout();
            BlankonDashboardEcommerce.marketChartWidget();
            BlankonDashboardEcommerce.marketStatus();
            BlankonDashboardEcommerce.salesChart();
            BlankonDashboardEcommerce.mapOrderLocations();
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
        // MARKET CHART
        // =========================================================================
        marketChartWidget: function () {
            $(window).resize(function() {
                window.line.redraw();
            });
            function marketChart(){
                window.line = Morris.Line({
                    element: 'market-chart',
                    data: [
                        { y: '2008', a: 30, b: 20, c: 10 },
                        { y: '2009', a: 20,  b: 50, c: 67 },
                        { y: '2010', a: 25,  b: 40, c: 32 },
                        { y: '2011', a: 27,  b: 60, c: 78 },
                        { y: '2012', a: 34,  b: 50, c: 12 },
                        { y: '2013', a: 40,  b: 70, c: 78 },
                        { y: '2014', a: 41, b: 60, c: 52 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b', 'c'],
                    labels: ['Apple', 'Android', 'Windows Phone'],
                    lineColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointFillColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointStrokeColors: ['#FFFFFF'],
                    lineWidth: '5px',
                    hideHover: true,
                    grid: false,
                    gridTextColor: '#FFFFFF',
                    resize: true,
                    redraw: true
                });
            }
            marketChart();
        },

        // =========================================================================
        // MARKET STATUS
        // =========================================================================
        marketStatus: function () {
            var piedata = [
                { label: "Apple", data: [[1,40]], color: '#906094'},
                { label: "Android", data: [[1,20]], color: '#8CC152'},
                { label: "Windows Phone", data: [[1,50]], color: '#F6BB42'}
            ];

            function labelFormatter(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            $.plot('#market-status-chart', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 500,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        },

        // =========================================================================
        // SALES CHART
        // =========================================================================
        salesChart: function () {
            $('#market-today-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-average-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-total-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
        },

        // =========================================================================
        // ORDER LOCATIONS
        // =========================================================================
        mapOrderLocations: function () {
            if($('#map-order-locations').length){
                $('#map-order-locations').gmap3({
                    map:{
                        options:{
                            center:[46.578498,2.457275],
                            zoom: 5
                        }
                    },
                    marker:{
                        values:[
                            {latLng:[48.8620722, 2.352047], data:"Windows phone sold 45"},
                            {address:"86000 Poitiers, France", data:"Apple sold 453"},
                            {address:"66000 Perpignan, France", data:"Android sold 344", options:{icon: "http://maps.google.com/mapfiles/marker_green.png"}}
                        ],
                        options:{
                            draggable: false
                        },
                        events:{
                            mouseover: function(marker, event, context){
                                var map = $(this).gmap3("get"),
                                    infowindow = $(this).gmap3({get:{name:"infowindow"}});
                                if (infowindow){
                                    infowindow.open(map, marker);
                                    infowindow.setContent(context.data);
                                } else {
                                    $(this).gmap3({
                                        infowindow:{
                                            anchor:marker,
                                            options:{content: context.data}
                                        }
                                    });
                                }
                            },
                            mouseout: function(){
                                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                                if (infowindow){
                                    infowindow.close();
                                }
                            }
                        }
                    }
                });
            }
        },

    };

}();

// Call main app init
BlankonDashboardEcommerce.init();
