var BlankonUiFeatureGridStack = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonUiFeatureGridStack.handleGridStack();
        },

        // =========================================================================
        // HANDLE GRID STACK
        // =========================================================================
        handleGridStack: function () {
            var options = {
                cell_height: 80,
                vertical_margin: 20
            };
            $('.grid-stack').gridstack(options);
        }

    };

}();

// Call main app init
BlankonUiFeatureGridStack.init();