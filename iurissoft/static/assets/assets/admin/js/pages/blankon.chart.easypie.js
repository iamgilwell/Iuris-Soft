var BlankonChartEasypie = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartEasypie.pieChartPeity();
        },

        // =========================================================================
        // PEITY CHART / PIE
        // =========================================================================
        pieChartPeity: function () {
            $('.easy-pie-chart .percentage').easyPieChart();
        }

    };

}();

// Call main app init
BlankonChartEasypie.init();