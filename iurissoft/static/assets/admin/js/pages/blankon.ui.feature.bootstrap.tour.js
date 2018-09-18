var BlankonUiFeatureBootstrapTour = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonUiFeatureBootstrapTour.callModal();
        },

        // =========================================================================
        // CALL MODAL FIRST
        // =========================================================================
        callModal: function () {
            $('#modal-bootstrap-tour').modal(
                {
                    show: true,
                    backdrop: 'static',
                    keyboard: false
                }
            );
        },

        // =========================================================================
        // INITIALIZE THE TOUR
        // =========================================================================
        handleTour: function () {
            // Instance the tour
            var tour = new Tour({
                name: "tour",
                steps: [
                    {
                        element: "#tour-1",
                        title: "Sidebar Navigation",
                        content: "Click for change to sidebar default to sidebar minimize navigation.",
                        placement: "bottom"
                    },
                    {
                        element: "#tour-2",
                        title: "Form Search",
                        content: "Search engine powerfull with autocomplete plugin. Just sample type blankon on here.",
                        placement: "bottom"
                    },
                    {
                        element: "#tour-3",
                        title: "Navbar Messages",
                        content: "All messages shortcut can ben handle on here, plus with animation label for attention user.",
                        placement: "bottom"
                    },
                    {
                        element: "#tour-4",
                        title: "Navbar Notifications",
                        content: "All notifications shortcut can ben handle on here, plus with animation label for attention user.",
                        placement: "bottom"
                    },
                    {
                        element: "#tour-5",
                        title: "Menu Profile",
                        content: "Handle menu profile on here, just simple like this.",
                        placement: "bottom"
                    },
                    {
                        element: "#tour-6",
                        title: "Sidebar Navigation",
                        content: "Click for show sidebar right to content Blankon.",
                        placement: "left"
                    },
                    {
                        element: "#tour-7",
                        title: "Welcome to Bootstrap Tour!",
                        content: "Introduce new users to your product by walking them through it step by step.",
                        placement: "top"
                    },
                    {
                        element: "#tour-8",
                        title: "A super simple setup",
                        content: "Easy is better, right? The tour is up and running with just a few options and steps.",
                        placement: "top"
                    },
                    {
                        element: "#tour-9",
                        title: "Best of all",
                        content: "Yeah! Free as in beer... or speech. Use and abuse, but don't forget to contribute!",
                        placement: "top"
                    },
                    {
                        element: "#tour-10",
                        title: "Flexibilty and expressiveness",
                        content: "There are more options for those who want to get on the dark side.<br>\nPower to the people!",
                        placement: "top",
                        reflex: true
                    },
                    {
                        element: "#tour-11",
                        title: "Automagically expiring step",
                        content: "A new addition: make your tour (or step) completely automatic. You set the duration, Bootstrap\nTour does the rest. For instance, this step will disappear in <em>5</em> seconds.",
                        placement: "top",
                        duration: 5000
                    },
                    {
                        element: "#tour-12",
                        title: "A new shiny Backdrop option",
                        content: "If you need to highlight the current step's element, activate the backdrop and you won't lose\nthe focus anymore!",
                        placement: "top",
                        backdrop: true
                    },
                    {
                        element: "#tour-13",
                        title: "Reflex mode",
                        content: "Reflex mode is enabled, click on the text in the cell to continue!",
                        placement: "top",
                        reflex: true
                    },
                    {
                        title: "And support for orphan steps",
                        content: "If you activate the orphan property, the step(s) are shown centered in the page, and you can\nforget to specify element and placement!",
                        placement: "top",
                        orphan: true
                    }
                ],
                container: "body",
                keyboard: true,
                storage: false,
                debug: false,
                backdrop: false,
                backdropContainer: 'body',
                backdropPadding: 0,
                redirect: true,
                orphan: false,
                duration: false,
                delay: false,
                basePath: "",
                template: "<div class='popover tour'>" +
                "<div class='arrow'></div>" +
                "<h3 class='popover-title'></h3>" +
                "<div class='popover-content'></div>" +
                "<div class='popover-navigation'>" +
                "<button class='btn btn-primary btn-sm' data-role='prev'>« Prev</button>" +
                "<span data-role='separator'></span>" +
                "<button class='btn btn-primary btn-sm' data-role='next'>Next »</button>" +
                "<span data-role='separator'></span>" +
                "<button class='btn btn-danger btn-sm' data-role='end'>End tour</button>" +
                "</div>" +
                "</div>" +
                "</div>",
                afterGetState: function (key, value) {},
                afterSetState: function (key, value) {},
                afterRemoveState: function (key, value) {},
                onStart: function (tour) {},
                onEnd: function (tour) {
                    $('#modal-bootstrap-tour-end').modal(
                        {
                            show: true
                        }
                    );
                },
                onShow: function (tour) {},
                onShown: function (tour) {},
                onHide: function (tour) {},
                onHidden: function (tour) {},
                onNext: function (tour) {},
                onPrev: function (tour) {},
                onPause: function (tour, duration) {},
                onResume: function (tour, duration) {},
                onRedirectError: function (tour) {}
        });

            // Initialize the tour
            tour.init();

            // Start the tour
            tour.start();
        }

    };

}();

// Call main app init
BlankonUiFeatureBootstrapTour.init();