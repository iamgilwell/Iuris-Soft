'use strict';
var BlankonProjectClients = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonProjectClients.listClientAll();
            BlankonProjectClients.listClientCorporate();
            BlankonProjectClients.listClientIndividual();
            BlankonProjectClients.listClientOther();
        },

        // =========================================================================
        // DATATABLE LIST CLIENT ALL
        // =========================================================================
        listClientAll: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-client-all');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : BlankonApp.handleBaseURL()+'/assets/admin/data/project-clients/all.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                },
                fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {

                    // Create element on row
                    var imgTag = '<img src="'+aData[0]+'" alt="..." class="img-circle"/> '+aData[1];
                    if(aData[3] == 'corporate'){
                        var spanTag = '<span class="label label-danger text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'individual'){
                        var spanTag = '<span class="label label-warning text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'other'){
                        var spanTag = '<span class="label label-primary text-capitalize">'+aData[3]+'</span>';
                    }

                    if(aData[6] == 'active'){
                        var spanTagStatus = '<span class="fg-success text-capitalize">'+aData[6]+'</span>';
                    }
                    if(aData[6] == 'not active'){
                        var spanTagStatus = '<span class="fg-danger text-capitalize">'+aData[6]+'</span>';
                    }

                    $('td:eq(0)', nRow).html(imgTag);
                    $('td:eq(1)', nRow).html(aData[2]);
                    $('td:eq(2)', nRow).html(spanTag);
                    $('td:eq(3)', nRow).html(aData[4]);
                    $('td:eq(4)', nRow).html('<div class="text-right">'+aData[5]+'</div>');
                    $('td:eq(5)', nRow).html('<div class="text-center">'+spanTagStatus+'</div>');

                    return nRow;
                },
                aoColumnDefs: [ { "bSortable": false, "aTargets": [ 2, 5 ] } ]
            });

        },

        // =========================================================================
        // DATATABLE LIST CLIENT CORPORATE
        // =========================================================================
        listClientCorporate: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-client-corporate');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : BlankonApp.handleBaseURL()+'/assets/admin/data/project-clients/corporate.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                },
                fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {

                    // Create element on row
                    var imgTag = '<img src="'+aData[0]+'" alt="..." class="img-circle"/> '+aData[1];
                    if(aData[3] == 'corporate'){
                        var spanTag = '<span class="label label-danger text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'individual'){
                        var spanTag = '<span class="label label-warning text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'other'){
                        var spanTag = '<span class="label label-primary text-capitalize">'+aData[3]+'</span>';
                    }

                    if(aData[6] == 'active'){
                        var spanTagStatus = '<span class="fg-success text-capitalize">'+aData[6]+'</span>';
                    }
                    if(aData[6] == 'not active'){
                        var spanTagStatus = '<span class="fg-danger text-capitalize">'+aData[6]+'</span>';
                    }

                    $('td:eq(0)', nRow).html(imgTag);
                    $('td:eq(1)', nRow).html(aData[2]);
                    $('td:eq(2)', nRow).html(spanTag);
                    $('td:eq(3)', nRow).html(aData[4]);
                    $('td:eq(4)', nRow).html('<div class="text-right">'+aData[5]+'</div>');
                    $('td:eq(5)', nRow).html('<div class="text-center">'+spanTagStatus+'</div>');

                    return nRow;
                },
                aoColumnDefs: [ { "bSortable": false, "aTargets": [ 2, 5 ] } ]
            });

        },

        // =========================================================================
        // DATATABLE LIST CLIENT INDIVIDUAL
        // =========================================================================
        listClientIndividual: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-client-individual');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : BlankonApp.handleBaseURL()+'/assets/admin/data/project-clients/individual.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                },
                fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {

                    // Create element on row
                    var imgTag = '<img src="'+aData[0]+'" alt="..." class="img-circle"/> '+aData[1];
                    if(aData[3] == 'corporate'){
                        var spanTag = '<span class="label label-danger text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'individual'){
                        var spanTag = '<span class="label label-warning text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'other'){
                        var spanTag = '<span class="label label-primary text-capitalize">'+aData[3]+'</span>';
                    }

                    if(aData[6] == 'active'){
                        var spanTagStatus = '<span class="fg-success text-capitalize">'+aData[6]+'</span>';
                    }
                    if(aData[6] == 'not active'){
                        var spanTagStatus = '<span class="fg-danger text-capitalize">'+aData[6]+'</span>';
                    }

                    $('td:eq(0)', nRow).html(imgTag);
                    $('td:eq(1)', nRow).html(aData[2]);
                    $('td:eq(2)', nRow).html(spanTag);
                    $('td:eq(3)', nRow).html(aData[4]);
                    $('td:eq(4)', nRow).html('<div class="text-right">'+aData[5]+'</div>');
                    $('td:eq(5)', nRow).html('<div class="text-center">'+spanTagStatus+'</div>');

                    return nRow;
                },
                aoColumnDefs: [ { "bSortable": false, "aTargets": [ 2, 5 ] } ]
            });
        },

        // =========================================================================
        // DATATABLE LIST CLIENT OTHER
        // =========================================================================
        listClientOther: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-client-other');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : BlankonApp.handleBaseURL()+'/assets/admin/data/project-clients/other.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                },
                fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {

                    // Create element on row
                    var imgTag = '<img src="'+aData[0]+'" alt="..." class="img-circle"/> '+aData[1];
                    if(aData[3] == 'corporate'){
                        var spanTag = '<span class="label label-danger text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'individual'){
                        var spanTag = '<span class="label label-warning text-capitalize">'+aData[3]+'</span>';
                    }
                    if(aData[3] == 'other'){
                        var spanTag = '<span class="label label-primary text-capitalize">'+aData[3]+'</span>';
                    }

                    if(aData[6] == 'active'){
                        var spanTagStatus = '<span class="fg-success text-capitalize">'+aData[6]+'</span>';
                    }
                    if(aData[6] == 'not active'){
                        var spanTagStatus = '<span class="fg-danger text-capitalize">'+aData[6]+'</span>';
                    }

                    $('td:eq(0)', nRow).html(imgTag);
                    $('td:eq(1)', nRow).html(aData[2]);
                    $('td:eq(2)', nRow).html(spanTag);
                    $('td:eq(3)', nRow).html(aData[4]);
                    $('td:eq(4)', nRow).html('<div class="text-right">'+aData[5]+'</div>');
                    $('td:eq(5)', nRow).html('<div class="text-center">'+spanTagStatus+'</div>');

                    return nRow;
                },
                aoColumnDefs: [ { "bSortable": false, "aTargets": [ 2, 5 ] } ]
            });

        }

    };

}();

// Call main app init
BlankonProjectClients.init();