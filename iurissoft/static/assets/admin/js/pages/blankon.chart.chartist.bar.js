var BlankonChartChartistBar = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartChartistBar.bipolarBarChart();
            BlankonChartChartistBar.overlappingBars();
            BlankonChartChartistBar.addPeaksCircles();
            BlankonChartChartistBar.multiLineLabels();
            BlankonChartChartistBar.stackedBarChart();
            BlankonChartChartistBar.horizontalBarChart();
            BlankonChartChartistBar.extremeResponsiveConfiguration();
            BlankonChartChartistBar.distributedSeries();
            BlankonChartChartistBar.labelPlacement();
        },

        // =========================================================================
        // BI-POLAR BAR CHART
        // =========================================================================
        bipolarBarChart: function () {
            var data = {

                labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],

                series: [

                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]

                ]

            };

            var options = {

                high: 10,

                low: -10,

                axisX: {

                    labelInterpolationFnc: function(value, index) {

                        return index % 2 === 0 ? value : null;

                    }

                }

            };

            new Chartist.Bar('.ct-bipolar-bar-chart', data, options);
        },

        // =========================================================================
        // OVERLAPPING BARS
        // =========================================================================
        overlappingBars: function () {
            var data = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
                ]
            };

            var options = {
                seriesBarDistance: 10
            };

            var responsiveOptions = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
            ];

            new Chartist.Bar('.ct-overlapping-bars', data, options, responsiveOptions);
        },

        // =========================================================================
        // ADD PEAKS CIRCLES
        // =========================================================================
        addPeaksCircles: function () {
            // Create a simple bi-polar bar chart
            var chart = new Chartist.Bar('.ct-add-peak-circles', {
                labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
                series: [
                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                ]
            }, {
                high: 10,
                low: -10,
                axisX: {
                    labelInterpolationFnc: function(value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            });

            // Listen for draw events on the bar chart
            chart.on('draw', function(data) {
                // If this draw event is of type bar we can use the data to create additional content
                if(data.type === 'bar') {
                    // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
                    data.group.append(new Chartist.Svg('circle', {
                        cx: data.x2,
                        cy: data.y2,
                        r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
                    }, 'ct-slice-pie'));
                }
            });
        },

        // =========================================================================
        // MULTI-LINE LABELS
        // =========================================================================
        multiLineLabels: function () {
            new Chartist.Bar('.ct-multi-line-labels', {
                labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
                series: [
                    [60000, 40000, 80000, 70000],
                    [40000, 30000, 70000, 65000],
                    [8000, 3000, 10000, 6000]
                ]
            }, {
                seriesBarDistance: 10,
                axisX: {
                    offset: 60
                },
                axisY: {
                    offset: 80,
                    labelInterpolationFnc: function(value) {
                        return value + ' CHF'
                    },
                    scaleMinSpace: 15
                }
            });
        },

        // =========================================================================
        // STACKED BAR CHART
        // =========================================================================
        stackedBarChart: function () {
            new Chartist.Bar('.ct-stacked-bar-chart', {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            }, {
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function(value) {
                        return (value / 1000) + 'k';
                    }
                }
            }).on('draw', function(data) {
                    if(data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 30px'
                        });
                    }
                });
        },

        // =========================================================================
        // HORIZONTAL BAR CHART
        // =========================================================================
        horizontalBarChart: function () {
            new Chartist.Bar('.ct-horizontal-bar-chart', {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            }, {
                seriesBarDistance: 10,
                reverseData: true,
                horizontalBars: true,
                axisY: {
                    offset: 70
                }
            });
        },

        // =========================================================================
        // EXTREME RESPONSIVE CONFIGURATION
        // =========================================================================
        extremeResponsiveConfiguration: function () {
            new Chartist.Bar('.ct-extreme-responsive-configuration', {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [5, 4, 3, 7],
                    [3, 2, 9, 5],
                    [1, 5, 8, 4],
                    [2, 3, 4, 6],
                    [4, 1, 2, 1]
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
                    seriesBarDistance: 15
                }]
            ]);
        },

        // =========================================================================
        // DISTRIBUTED SERIES
        // =========================================================================
        distributedSeries: function () {
            new Chartist.Bar('.ct-distributed-series', {
                labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                series: [20, 60, 120, 200, 180, 20, 10]
            }, {
                distributeSeries: true
            });
        },

        // =========================================================================
        // LABEL PLACEMENT
        // =========================================================================
        labelPlacement: function () {
            new Chartist.Bar('.ct-label-placement', {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            }, {
                axisX: {
                    // On the x-axis start means top and end means bottom
                    position: 'start'
                },
                axisY: {
                    // On the y-axis start means left and end means right
                    position: 'end'
                }
            });
        }

    };

}();

// Call main app init
BlankonChartChartistBar.init();