var BlankonDashboardRetail = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboardRetail.gritterNotification();
            BlankonDashboardRetail.sessionTimeout();
            BlankonDashboardRetail.counterOverview();
            BlankonDashboardRetail.counterGender();
            BlankonDashboardRetail.mapWorldVisualization();
            BlankonDashboardRetail.mapWorldMarkers();
            BlankonDashboardRetail.topProductChart();
            BlankonDashboardRetail.topStoreChart();
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
        // COUNTER OVERVIEW
        // =========================================================================
        counterOverview: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 4000
            });
        },

        // =========================================================================
        // COUNTER GENDER
        // =========================================================================
        counterGender: function () {
            $('.easy-pie-chart .percentage').easyPieChart();
        },

        // =========================================================================
        // WORLD MAP VISUALIZATION
        // =========================================================================
        mapWorldVisualization: function () {
            var gdpData = {
                "AF": 16.63,
                "AL": 11.58,
                "DZ": 158.97,
                "AO": 85.81,
                "AG": 1.1,
                "AR": 351.02,
                "AM": 8.83,
                "AU": 1219.72,
                "AT": 366.26,
                "AZ": 52.17,
                "BS": 7.54,
                "BH": 21.73,
                "BD": 105.4,
                "BB": 3.96,
                "BY": 52.89,
                "BE": 461.33,
                "BZ": 1.43,
                "BJ": 6.49,
                "BT": 1.4,
                "BO": 19.18,
                "BA": 16.2,
                "BW": 12.5,
                "BR": 2023.53,
                "BN": 11.96,
                "BG": 44.84,
                "BF": 8.67,
                "BI": 1.47,
                "KH": 11.36,
                "CM": 21.88,
                "CA": 1563.66,
                "CV": 1.57,
                "CF": 2.11,
                "TD": 7.59,
                "CL": 199.18,
                "CN": 5745.13,
                "CO": 283.11,
                "KM": 0.56,
                "CD": 12.6,
                "CG": 11.88,
                "CR": 35.02,
                "CI": 22.38,
                "HR": 59.92,
                "CY": 22.75,
                "CZ": 195.23,
                "DK": 304.56,
                "DJ": 1.14,
                "DM": 0.38,
                "DO": 50.87,
                "EC": 61.49,
                "EG": 216.83,
                "SV": 21.8,
                "GQ": 14.55,
                "ER": 2.25,
                "EE": 19.22,
                "ET": 30.94,
                "FJ": 3.15,
                "FI": 231.98,
                "FR": 2555.44,
                "GA": 12.56,
                "GM": 1.04,
                "GE": 11.23,
                "DE": 3305.9,
                "GH": 18.06,
                "GR": 305.01,
                "GD": 0.65,
                "GT": 40.77,
                "GN": 4.34,
                "GW": 0.83,
                "GY": 2.2,
                "HT": 6.5,
                "HN": 15.34,
                "HK": 226.49,
                "HU": 132.28,
                "IS": 12.77,
                "IN": 1430.02,
                "ID": 695.06,
                "IR": 337.9,
                "IQ": 84.14,
                "IE": 204.14,
                "IL": 201.25,
                "IT": 2036.69,
                "JM": 13.74,
                "JP": 5390.9,
                "JO": 27.13,
                "KZ": 129.76,
                "KE": 32.42,
                "KI": 0.15,
                "KR": 986.26,
                "UNDEFINED": 5.73,
                "KW": 117.32,
                "KG": 4.44,
                "LA": 6.34,
                "LV": 23.39,
                "LB": 39.15,
                "LS": 1.8,
                "LR": 0.98,
                "LY": 77.91,
                "LT": 35.73,
                "LU": 52.43,
                "MK": 9.58,
                "MG": 8.33,
                "MW": 5.04,
                "MY": 218.95,
                "MV": 1.43,
                "ML": 9.08,
                "MT": 7.8,
                "MR": 3.49,
                "MU": 9.43,
                "MX": 1004.04,
                "MD": 5.36,
                "MN": 5.81,
                "ME": 3.88,
                "MA": 91.7,
                "MZ": 10.21,
                "MM": 35.65,
                "NA": 11.45,
                "NP": 15.11,
                "NL": 770.31,
                "NZ": 138,
                "NI": 6.38,
                "NE": 5.6,
                "NG": 206.66,
                "NO": 413.51,
                "OM": 53.78,
                "PK": 174.79,
                "PA": 27.2,
                "PG": 8.81,
                "PY": 17.17,
                "PE": 153.55,
                "PH": 189.06,
                "PL": 438.88,
                "PT": 223.7,
                "QA": 126.52,
                "RO": 158.39,
                "RU": 1476.91,
                "RW": 5.69,
                "WS": 0.55,
                "ST": 0.19,
                "SA": 434.44,
                "SN": 12.66,
                "RS": 38.92,
                "SC": 0.92,
                "SL": 1.9,
                "SG": 217.38,
                "SK": 86.26,
                "SI": 46.44,
                "SB": 0.67,
                "ZA": 354.41,
                "ES": 1374.78,
                "LK": 48.24,
                "KN": 0.56,
                "LC": 1,
                "VC": 0.58,
                "SD": 65.93,
                "SR": 3.3,
                "SZ": 3.17,
                "SE": 444.59,
                "CH": 522.44,
                "SY": 59.63,
                "TW": 426.98,
                "TJ": 5.58,
                "TZ": 22.43,
                "TH": 312.61,
                "TL": 0.62,
                "TG": 3.07,
                "TO": 0.3,
                "TT": 21.2,
                "TN": 43.86,
                "TR": 729.05,
                "TM": 0,
                "UG": 17.12,
                "UA": 136.56,
                "AE": 239.65,
                "GB": 2258.57,
                "US": 14624.18,
                "UY": 40.71,
                "UZ": 37.72,
                "VU": 0.72,
                "VE": 285.21,
                "VN": 101.99,
                "YE": 30.02,
                "ZM": 15.69,
                "ZW": 5.57
            };

            $('#map-world-visualization').vectorMap({
                map: 'world_mill_en',
                series: {
                    regions: [{
                        values: gdpData,
                        scale: ['#81B71A', '#457619'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionTipShow: function(e, el, code){
                    el.html(el.html()+' (GDP - $'+gdpData[code]+')');
                }
            });
        },

        // =========================================================================
        // WORLD MAP MARKERS
        // =========================================================================
        mapWorldMarkers: function () {
            $('a[href="#markers"]').on('shown.bs.tab', function () {
                $('#map-world-markers').vectorMap({
                    map: 'world_mill_en',
                    scaleColors: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial',
                    hoverOpacity: 0.7,
                    hoverColor: false,
                    markerStyle: {
                        initial: {
                            fill: '#81B71A',
                            stroke: '#383f47'
                        }
                    },
                    backgroundColor: '#383f47',
                    markers: [
                        {latLng: [41.90, 12.45], name: 'Vatican City'},
                        {latLng: [43.73, 7.41], name: 'Monaco'},
                        {latLng: [-0.52, 166.93], name: 'Nauru'},
                        {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                        {latLng: [43.93, 12.46], name: 'San Marino'},
                        {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                        {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                        {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                        {latLng: [3.2, 73.22], name: 'Maldives'},
                        {latLng: [35.88, 14.5], name: 'Malta'},
                        {latLng: [12.05, -61.75], name: 'Grenada'},
                        {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                        {latLng: [13.16, -59.55], name: 'Barbados'},
                        {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                        {latLng: [-4.61, 55.45], name: 'Seychelles'},
                        {latLng: [7.35, 134.46], name: 'Palau'},
                        {latLng: [42.5, 1.51], name: 'Andorra'},
                        {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                        {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                        {latLng: [1.3, 103.8], name: 'Singapore'},
                        {latLng: [1.46, 173.03], name: 'Kiribati'},
                        {latLng: [-21.13, -175.2], name: 'Tonga'},
                        {latLng: [15.3, -61.38], name: 'Dominica'},
                        {latLng: [-20.2, 57.5], name: 'Mauritius'},
                        {latLng: [26.02, 50.55], name: 'Bahrain'},
                        {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
                    ]
                });
            });
        },

        // =========================================================================
        // TOP PRODUCT
        // =========================================================================
        topProductChart: function () {
            $('.top-product-chart').horizBarChart({
                selector: '.bar',
                speed: 3000
            });
        },

        // =========================================================================
        // TOP STORES
        // =========================================================================
        topStoreChart: function () {
            $('a[href="#tab-store"]').on('shown.bs.tab', function (e) {
                $('.top-store-chart').horizBarChart({
                    selector: '.bar',
                    speed: 3000
                });
            })
        }

    };

}();

// Call main app init
BlankonDashboardRetail.init();
