var BlankonUiFeatureNotifications = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonUiFeatureNotifications.initNoty();
        },

        // =========================================================================
        // INIT NOTY
        // =========================================================================
        initNoty: function () {
            window.anim = {};
            window.anim.open = 'flipInX';
            window.anim.close = 'flipOutX';

            $('#anim-open').on('change', function (e) {
                window.anim.open = $(this).val();
            });

            $('#anim-close').on('change', function (e) {
                window.anim.close = $(this).val();
            });
            $('.runner').on('click', function (e) {

                var notes = [];

                notes['alert'] = 'Best check yo self, you\'re not looking too good.';
                notes['error'] = 'Change a few things up and try submitting again.';
                notes['success'] = 'You successfully read this important alert message.';
                notes['information'] = 'This alert needs your attention, but it\'s not super important.';
                notes['warning'] = '<strong>Warning!</strong> <br /> Best check yo self, you\'re not looking too good.';
                notes['confirm'] = 'Do you want to continue?';

                e.preventDefault();

                var self = $(this);

                if (self.data('layout') == 'inline') {
                    $(self.data('custom')).noty({
                        text        : notes[self.data('type')],
                        type        : self.data('type'),
                        theme       : 'relax',
                        dismissQueue: true,
                        animation   : {
                            open  : 'animated bounceInRight',
                            close : 'animated bounceOutRight'
                        },
                        buttons     : (self.data('type') != 'confirm') ? false : [
                            {addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {

                                // this = button element
                                // $noty = $noty element

                                $noty.close();
                                $(self.data('custom')).noty({force: true, text: 'You clicked "Ok" button', type: 'success'});
                            }
                            },
                            {addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
                                $noty.close();
                                $(self.data('custom')).noty({force: true, text: 'You clicked "Cancel" button', type: 'error'});
                            }
                            }
                        ]
                    });
                    return false;
                }

                noty({
                    text        : notes[self.data('type')],
                    type        : self.data('type'),
                    theme       : 'relax',
                    dismissQueue: true,
                    layout      : self.data('layout'),
                    animation   : {
                        open  : 'animated ' + window.anim.open,
                        close : 'animated ' + window.anim.close
                    },
                    buttons     : (self.data('type') != 'confirm') ? false : [
                        {addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {

                            // this = button element
                            // $noty = $noty element

                            $noty.close();
                            noty({force: true, theme: 'relax', animation: {
                                open  : 'animated ' + window.anim.open,
                                close : 'animated ' + window.anim.close
                            }, text: 'You clicked "Ok" button', type: 'success', layout: self.data('layout')});
                        }
                        },
                        {addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
                            $noty.close();
                            noty({force: true, theme: 'relax', animation: {
                                open  : 'animated bounceIn',
                                close : 'animated bounceOut'
                            }, text: 'You clicked "Cancel" button', type: 'error', layout: self.data('layout')});
                        }
                        }
                    ]
                });
                return false;
            });
        }

    };

}();

// Call main app init
BlankonUiFeatureNotifications.init();