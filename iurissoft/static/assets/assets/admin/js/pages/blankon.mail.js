var BlankonMail = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMail.checkGroup();
            BlankonMail.checkAction();
            BlankonMail.starAction();
            BlankonMail.readMail();
            BlankonMail.bootstrapWYSIHTML5();
        },

        // =========================================================================
        // CHECK GROUP
        // =========================================================================
        checkGroup: function () {
            $('.mail-group-checkbox').click(function () {
                $('.mail-checkbox').prop('checked', $(this).is(":checked"));
            });
        },

        // =========================================================================
        // CHECK LIST
        // =========================================================================
        checkAction: function () {
            $('.ckbox input').click(function(){
                var list = $(this);
                if(list.is(':checked')){
                    list.closest('tr').addClass('selected');
                } else {
                    list.closest('tr').removeClass('selected');
                }
            });
        },

        // =========================================================================
        // STAR
        // =========================================================================
        starAction: function () {
            $('.star').click(function(){
                if(!$(this).hasClass('star-checked')) {
                    $(this).addClass('star-checked');
                }
                else
                    $(this).removeClass('star-checked');
                return false;
            });
        },

        // =========================================================================
        // READ MAIL
        // =========================================================================
        readMail: function () {
            $('.table-email .media').click(function(){
                location.href="mail-view.html";
            });
        },

        // =========================================================================
        // BOOTSTRAP WYSIHTML5
        // =========================================================================
        bootstrapWYSIHTML5: function () {
            if($('#compose-editor').length){
                $('#compose-editor').wysihtml5({});
            }
        }

    };

}();

// Call main app init
BlankonMail.init();

