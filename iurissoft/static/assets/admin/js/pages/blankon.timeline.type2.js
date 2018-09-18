var BlankonTimelineType2 = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonTimelineType2.mapMarker();
        },

        // =========================================================================
        // WITH MARKER / GMAP3
        // =========================================================================
        mapMarker: function () {
            if($('#map-marker').length){
                $('#map-marker').gmap3({
                    marker:{
                        address: "Haltern am See, Weseler Str. 151"
                    },
                    map:{
                        options:{
                            zoom: 14
                        }
                    }
                });
            }
        }

    };

}();

// Call main app init
BlankonTimelineType2.init();


