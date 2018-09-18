var BlankonDashboardRealestate = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img',
        globalDataPath = BlankonApp.handleBaseURL()+'/assets/admin/data';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboardRealestate.counterOverview();
            BlankonDashboardRealestate.gritterNotification();
            BlankonDashboardRealestate.sessionTimeout();
            BlankonDashboardRealestate.salesPrice();
            BlankonDashboardRealestate.monthInventory();
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
        // SALES PRICE
        // =========================================================================
        salesPrice: function () {
            $('.sales-price .percentage').easyPieChart(
                {
                    lineWidth: 10,
                    scaleColor: '#ffffff',
                    barColor: '#8CC152',
                    trackColor: '#E8E8E8'
                }
            );
        },

        // =========================================================================
        // LINE CHART WITH TOOLTIPS
        // =========================================================================
        monthInventory: function () {
            new Chartist.Line('.ct-month-inventory', {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                series: [
                    {
                        name: '<span style="margin-bottom: 10px;">'+'Month Inventory'+'</span>',
                        data: [3, 4, 2, 6, 8, 10, 12, 9, 13, 15, 17, 19]
                    }
                ]
            }, {
                low: 0,
                showArea: true
            });

            var $chart = $('.ct-month-inventory');

            var $toolTip = $chart
                .append('<div class="tooltips"></div>')
                .find('.tooltips')
                .hide();

            $chart.on('mouseenter', '.ct-point', function() {
                var $point = $(this),
                    value = $point.attr('ct:value'),
                    seriesName = $point.parent().attr('ct:series-name');
                $toolTip.html(seriesName + '<br>' + value).show();
            });

            $chart.on('mouseleave', '.ct-point', function() {
                $toolTip.hide();
            });

            $chart.on('mousemove', function(event) {
                $toolTip.css({
                    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
                    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
                });
            });
        }

    };

}();

// Call main app init
BlankonDashboardRealestate.init();
