var BlankonChartPeity = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartPeity.pieChartPeity();
            BlankonChartPeity.donutChartPeity();
            BlankonChartPeity.lineChartPeity();
            BlankonChartPeity.barChartPeity();
            BlankonChartPeity.colourChartPeity();
            BlankonChartPeity.sizeChartPeity();
            BlankonChartPeity.updatingChartPeity();
            BlankonChartPeity.eventsChartPeity();
        },

        // =========================================================================
        // PEITY CHART / PIE
        // =========================================================================
        pieChartPeity: function () {
            $("span.pie").peity("pie");
        },

        // =========================================================================
        // PEITY CHART / DONUT
        // =========================================================================
        donutChartPeity: function () {
            $('.donut').peity('donut');
        },

        // =========================================================================
        // PEITY CHART / LINE
        // =========================================================================
        lineChartPeity: function () {
            $(".line").peity("line");
        },

        // =========================================================================
        // PEITY CHART / BAR
        // =========================================================================
        barChartPeity: function () {
            $(".bar").peity("bar");
        },

        // =========================================================================
        // PEITY CHART / COLOURS DYNAMICALLY
        // =========================================================================
        colourChartPeity: function () {
            $(".bar-colours-1").peity("bar", {
                fill: ["red", "green", "blue"]
            });

            $(".bar-colours-2").peity("bar", {
                fill: function(value) {
                    return value > 0 ? "green" : "red"
                }
            });

            $(".bar-colours-3").peity("bar", {
                fill: function(_, i, all) {
                    var g = parseInt((i / all.length) * 255)
                    return "rgb(255, " + g + ", 0)"
                }
            });

            $(".pie-colours-1").peity("pie", {
                fill: ["cyan", "magenta", "yellow", "black"]
            });

            $(".pie-colours-2").peity("pie", {
                fill: function(_, i, all) {
                    var g = parseInt((i / all.length) * 255)
                    return "rgb(255, " + g + ", 0)"
                }
            });
        },

        // =========================================================================
        // PEITY CHART / SIZE
        // =========================================================================
        sizeChartPeity: function () {
            $(".data-attributes span").peity("donut");
        },

        // =========================================================================
        // PEITY CHART / UPDATING
        // =========================================================================
        updatingChartPeity: function () {
            var updatingChart = $(".updating-chart").peity("line", { width: 64 })

            setInterval(function() {
                var random = Math.round(Math.random() * 10)
                var values = updatingChart.text().split(",")
                values.shift()
                values.push(random)

                updatingChart
                    .text(values.join(","))
                    .change()
            }, 1000);
        },

        // =========================================================================
        // PEITY CHART / EVENTS
        // =========================================================================
        eventsChartPeity: function () {
            $('select').change(function() {
                var text = $(this).val() + '/' + 5;

                $(this)
                    .siblings('span.graph')
                    .text(text)
                    .change();

                $('#notice').text('Chart updated: ' + text)
            }).change();

            $('span.graph').peity('pie');
        }

    };

}();

// Call main app init
BlankonChartPeity.init();