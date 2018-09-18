var BlankonTableColor = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonTableColor.changeColor();
        },

        // =========================================================================
        // ANIMATE TRIGGER
        // =========================================================================
        changeColor: function () {
            $('#trigger-change-color li a').on('click', function () {
                $(this).closest('.panel').find('.table').removeClass().addClass('table table-striped '+$(this).data('class'));
            });
        }

    };

}();

// Call main app init
BlankonTableColor.init();