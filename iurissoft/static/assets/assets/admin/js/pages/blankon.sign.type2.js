var BlankonSignType2 = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonSignType2.signBackstretch();
        },

        // =========================================================================
        // BACKSTRETCH
        // =========================================================================
        signBackstretch: function () {
            // Duration is the amount of time in between slides,
            // and fade is value that determines how quickly the next image will fade in
            $.backstretch([
                BlankonSign.signBaseURL()+'/img/bg/1.jpg',
                BlankonSign.signBaseURL()+'/img/bg/2.jpg'
            ], {duration: 5000, fade: 750});

            // Setting login on yii version
            if($('.yii2').length){
                $.backstretch([
                    BlankonSign.signBaseURL()+'/img/bg/1.jpg',
                    BlankonSign.signBaseURL()+'/img/bg/2.jpg'
                ], {duration: 5000, fade: 750});
            }

            // Setting login on yii version
            if($('.laravel').length){
                $.backstretch([
                    BlankonSign.signBaseURL()+'/img/bg/1.jpg',
                    BlankonSign.signBaseURL()+'/img/bg/2.jpg'
                ], {duration: 5000, fade: 750});
            }
        }

    };

}();

// Call main app init
BlankonSignType2.init();