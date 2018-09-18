var BlankonDashboardInvestor = function () {

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
            BlankonDashboardInvestor.counterOverview();
            BlankonDashboardInvestor.gritterNotification();
            BlankonDashboardInvestor.sessionTimeout();
            BlankonDashboardInvestor.totalInvestments();
            BlankonDashboardInvestor.datatableMedianRaised();
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
        // TOTAL INVESTMENTS
        // =========================================================================
        totalInvestments: function () {
            var chart = c3.generate({
                bindto: '#total-investments',
                data: {
                    columns: [
                        ['InvestmentA', 30, 20, 50, 40, 60, 50],
                        ['InvestmentB', 200, 130, 90, 240, 130, 220],
                        ['InvestmentC', 300, 200, 160, 400, 250, 250],
                        ['InvestmentD', 200, 130, 90, 240, 130, 220],
                        ['InvestmentE', 130, 120, 150, 140, 160, 150]
                    ],
                    types: {
                        InvestmentA: 'bar',
                        InvestmentB: 'bar',
                        InvestmentC: 'spline',
                        InvestmentD: 'line',
                        InvestmentE: 'bar'
                    },
                    groups: [
                        ['data 1','data 2']
                    ]
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1', '#37BC9B', '#906094', '#1F77B4']
                },
                axis: {
                    x: {
                        type: 'categorized'
                    }
                }
            });

            // Expand panel
            BlankonDashboardInvestor.expandPanel(chart);
        },

        expandPanel : function (selector) {
            $('[data-action=expand]').on('click', function(){
                if($(this).parents(".panel").hasClass('panel-fullsize'))
                {
                    setTimeout(function () {
                        selector.resize();
                    }, 1000);
                }
                else
                {
                    setTimeout(function () {
                        selector.resize();
                    }, 1000);
                }
            });
        },

        // =========================================================================
        // DATATABLE MEDIAN RAISED
        // =========================================================================
        datatableMedianRaised: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-median-raised');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : globalDataPath+'/datatable-investor.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                }
            });

        }

    };

}();

// Call main app init
BlankonDashboardInvestor.init();
