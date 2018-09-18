var BlankonMapIcon = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMapIcon.mapIcon();
            BlankonMapIcon.handleAddMultipleAttribute();
            BlankonMapIcon.handleCopyClipboardIcon();
        },

        // =========================================================================
        // MAP ICON
        // =========================================================================
        mapIcon: function () {
            function initialize() {
                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(-33.9, 151.2),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [
                        {stylers: [{ visibility: 'simplified' }]},
                        {elementType: 'labels', stylers: [{ visibility: 'off' }]}
                    ]
                };
                var map = new google.maps.Map(document.getElementById('map-icons'), mapOptions);

                var marker1 = new Marker({
                    map: map,
                    zIndex: 10,
                    title: 'Map Icons',
                    position:  new google.maps.LatLng(-33.890542, 151.274856),
                    icon: {
                        path: MAP_PIN,
                        fillColor: '#0E77E9',
                        fillOpacity: 1,
                        strokeColor: '',
                        strokeWeight: 0,
                        scale: 1/2
                    },
                    label: '<i class="map-icon-walking"></i>'
                });

                var marker2 = new Marker({
                    map: map,
                    zIndex: 20,
                    title: 'Map Icons',
                    position:  new google.maps.LatLng(-33.923036, 151.259052),
                    icon: {
                        path: SQUARE_PIN,
                        fillColor: '#0E77E9',
                        fillOpacity: 1,
                        strokeColor: '',
                        strokeWeight: 0,
                        scale: 1/2
                    },
                    label: '<i class="map-icon-cafe"></i>'
                });

                var marker3 = new Marker({
                    map: map,
                    zIndex: 30,
                    title: 'Map Icons',
                    position:  new google.maps.LatLng(-34.028249, 151.157507),
                    icon: {
                        path: SHEILD,
                        fillColor: '#0E77E9',
                        fillOpacity: 1,
                        strokeColor: '',
                        strokeWeight: 0,
                        scale: 1/2
                    },
                    label: '<i class="map-icon-car-wash"></i>'
                });

                var marker4 = new Marker({
                    map: map,
                    zIndex: 40,
                    title: 'Map Icons',
                    position:  new google.maps.LatLng(-33.80010128657071, 151.28747820854187),
                    icon: {
                        path: ROUTE,
                        fillColor: '#0E77E9',
                        fillOpacity: 1,
                        strokeColor: '',
                        strokeWeight: 0,
                        scale: 1/2
                    },
                    label: '<i class="map-icon-male"></i>'
                });
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        },

        // =========================================================================
        // ADD MULTIPLE ATTRIBUTE ON LIST ICONS
        // =========================================================================
        handleAddMultipleAttribute: function () {
            $('.icon-maps-example').each(function( index ) {
                $(this).attr('data-icons',$(this).find('span').attr('class'));
            });
        },

        // =========================================================================
        // COPY CLIPBOARD ICONS
        // =========================================================================
        handleCopyClipboardIcon: function () {
            var clipboard = new Clipboard('.icon-maps-example', {
                text: function(trigger) {
                    return '<span aria-hidden="true" class="'+trigger.getAttribute('data-icons')+'"></span>';
                }
            });
            $('.icon-maps-example').on('click', function () {
                var n = noty({
                    theme: 'relax',
                    layout: 'topRight',
                    text: 'Copy icon '+$(this).data('icons').replace('map-icon-',''),
                    type: 'success',
                    animation: {
                        open  : 'animated bounceInRight',
                        close : 'animated bounceOutRight',
                        easing: 'swing', // easing
                        speed: 500 // opening & closing animation speed
                    }
                });
                n.setTimeout(2000);
            });
        }

    };

}();

// Call main app init
BlankonMapIcon.init();


