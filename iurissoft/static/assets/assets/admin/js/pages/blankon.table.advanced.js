'use strict';
var BlankonTableAdvanced = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var getBaseURL = BlankonApp.handleBaseURL();

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonTableAdvanced.callModal();
            BlankonTableAdvanced.handleDatatable();
            BlankonTableAdvanced.handleAJAXSimulation();
            BlankonTableAdvanced.handleDatatableColors();
        },

        // =========================================================================
        // CALL MODAL FIRST
        // =========================================================================
        callModal: function () {
            $('#modal-feature-datatable').modal(
                {
                    show: true,
                    keyboard: false
                }
            );
        },

        // =========================================================================
        // DATATABLE INIT
        // =========================================================================
        handleDatatable: function () {
            // Updates "Select all" control in a data table
            function updateDataTableSelectAllCtrl(table){
                var $table             = table.table().node();
                var $chkbox_all        = $('tbody input[type="checkbox"]', $table);
                var $chkbox_checked    = $('tbody input[type="checkbox"]:checked', $table);
                var chkbox_select_all  = $('thead input[name="select_all"]', $table).get(0);

                // If none of the checkboxes are checked
                if($chkbox_checked.length === 0){
                    chkbox_select_all.checked = false;
                    if('indeterminate' in chkbox_select_all){
                        chkbox_select_all.indeterminate = false;
                    }

                    // If all of the checkboxes are checked
                } else if ($chkbox_checked.length === $chkbox_all.length){
                    chkbox_select_all.checked = true;
                    if('indeterminate' in chkbox_select_all){
                        chkbox_select_all.indeterminate = false;
                    }

                    // If some of the checkboxes are checked
                } else {
                    chkbox_select_all.checked = true;
                    if('indeterminate' in chkbox_select_all){
                        chkbox_select_all.indeterminate = true;
                    }
                }
            }

            // Array holding selected row IDs
            var rows_selected = [];

            var responsiveHelper;
            var breakpointDefinition = {
                tablet: 1024,
                phone_landscape : 480,
                phone_portrait : 320
            };
            var tableID = $('#datatable-sample');
            var table = $('#datatable-sample').DataTable({
                'ajax': {
                    'url': getBaseURL+'/assets/admin/data/table-advanced/datatable-sample.json'
                },
                'columnDefs': [
                    {
                        'targets': 0,
                        'searchable': false,
                        'orderable': false,
                        'className': 'dt-body-center',
                        'render': function (data, type, full, meta){
                            return '<div class="ckbox ckbox-primary">' +
                                '<input id="checkbox-item-'+data+'" type="checkbox" name="select_all" value="1" class="display-hide">' +
                                '<label for="checkbox-item-'+data+'"></label>' +
                                '</div>';
                        }
                    },
                    {
                        'targets': [2, 3, 7],
                        'sortable': false
                    },
                    {
                        'targets': 7,
                        'class': 'text-center',
                        'render': function ( data, type, full, meta ) {
                            return '<div class="btn-group">' +
                                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                                '<i class="fa fa-cogs"></i>' +
                                '</button>' +
                                '<ul class="dropdown-menu pull-right">' +
                                '<li>' +
                                '<a href="#" class="btn-view">View</a>' +
                                '</li>' +
                                '<li><a href="#" class="btn-edit">Edit</a></li>' +
                                '<li role="separator" class="divider"></li>' +
                                '<li><a href="#" class="btn-delete">Delete</a></li>' +
                                '</ul>' +
                                '</div>'
                        }
                    }
                ],
                'order': [[1, 'asc']],
                'autoWidth' : false,
                'iDisplayLength': 10,
                'lengthMenu': [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
                'select': true,
                'dom': 'Blfrtip',
                buttons: [
                    {
                        extend: 'collection',
                        text: 'Export',
                        buttons: [
                            {
                                extend: 'copy',
                                exportOptions: {
                                    columns: [1,2,3,4,5,6]
                                }
                            },
                            {
                                extend: 'excel',
                                exportOptions: {
                                    columns: [1,2,3,4,5,6]
                                }
                            },
                            {
                                extend: 'csv',
                                exportOptions: {
                                    columns: [1,2,3,4,5,6]
                                }
                            },
                            {
                                extend: 'pdf',
                                exportOptions: {
                                    columns: [1,2,3,4,5,6]
                                }
                            },
                            {
                                extend: 'print',
                                exportOptions: {
                                    columns: [1,2,3,4,5,6]
                                }
                            }
                        ]
                    }
                ],
                'pagingType': 'full_numbers_no_ellipses',
                'preDrawCallback': function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(tableID, breakpointDefinition);
                    }
                },
                'rowCallback' : function (nRow, row, data, dataIndex) {
                    // Get row ID
                    var rowId = data[0];

                    // If row ID is in the list of selected row IDs
                    if($.inArray(rowId, rows_selected) !== -1){
                        $(row).find('input[type="checkbox"]').prop('checked', true);
                        $(row).addClass('selected');
                    }

                    responsiveHelper.createExpandIcon(nRow);
                },
                'drawCallback' : function(oSettings) {
                    responsiveHelper.respond();
                    // call dropdown bootstrap
                    $('body .dropdown-toggle').dropdown();
                    // call actions on last column datatable
                    BlankonTableAdvanced.handleActionViewDatatable();
                    BlankonTableAdvanced.handleActionEditDatatable();
                    BlankonTableAdvanced.handleActionDeleteDatatable();
                }
            });

            // Change language dinamically
            $('.change-language').on('click', function () {

                // Change state language
                $('.text-language').text($(this).data('title'));

                table.destroy();
                table = null;

                var tableLanguage = BlankonTableAdvanced.handleNotificationDatatable('Table language '+$(this).data('title'));

                var rows_selected = [];

                var responsiveHelper;
                var breakpointDefinition = {
                    tablet: 1024,
                    phone_landscape : 480,
                    phone_portrait : 320
                };
                var tableID = $('#datatable-sample');
                table = $('#datatable-sample').DataTable( {
                    'language': {
                        'url': getBaseURL+'/assets/global/plugins/bower_components/datatables/i18n/'+$(this).data('language')+'.json'
                    },
                    'ajax': {
                        'url': getBaseURL+'/assets/admin/data/table-advanced/datatable-sample.json'
                    },
                    'columnDefs': [
                        {
                            'targets': 0,
                            'searchable': false,
                            'orderable': false,
                            'className': 'dt-body-center',
                            'render': function (data, type, full, meta){
                                return '<div class="ckbox ckbox-primary">' +
                                    '<input id="checkbox-item-'+data+'" type="checkbox" name="select_all" value="1" class="display-hide">' +
                                    '<label for="checkbox-item-'+data+'"></label>' +
                                    '</div>';
                            }
                        },
                        {
                            'targets': [2, 3, 7],
                            'sortable': false
                        },
                        {
                            'targets': 7,
                            'class': 'text-center',
                            'render': function ( data, type, full, meta ) {
                                return '<div class="btn-group">' +
                                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                                    '<i class="fa fa-cogs"></i>' +
                                    '</button>' +
                                    '<ul class="dropdown-menu pull-right">' +
                                    '<li>' +
                                    '<a href="#" class="btn-view">View</a>' +
                                    '</li>' +
                                    '<li><a href="#" class="btn-edit">Edit</a></li>' +
                                    '<li role="separator" class="divider"></li>' +
                                    '<li><a href="#" class="btn-delete">Delete</a></li>' +
                                    '</ul>' +
                                    '</div>'
                            }
                        }
                    ],
                    'order': [[1, 'asc']],
                    'autoWidth' : false,
                    'iDisplayLength': 10,
                    'lengthMenu': [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
                    'select': true,
                    'dom': 'Blfrtip',
                    buttons: [
                        {
                            extend: 'collection',
                            text: 'Export',
                            buttons: [
                                {
                                    extend: 'copy',
                                    exportOptions: {
                                        columns: [1,2,3,4,5,6]
                                    }
                                },
                                {
                                    extend: 'excel',
                                    exportOptions: {
                                        columns: [1,2,3,4,5,6]
                                    }
                                },
                                {
                                    extend: 'csv',
                                    exportOptions: {
                                        columns: [1,2,3,4,5,6]
                                    }
                                },
                                {
                                    extend: 'pdf',
                                    exportOptions: {
                                        columns: [1,2,3,4,5,6]
                                    }
                                },
                                {
                                    extend: 'print',
                                    exportOptions: {
                                        columns: [1,2,3,4,5,6]
                                    }
                                }
                            ]
                        }
                    ],
                    'pagingType': 'full_numbers_no_ellipses',
                    'preDrawCallback': function () {
                        // Initialize the responsive datatables helper once.
                        if (!responsiveHelper) {
                            responsiveHelper = new ResponsiveDatatablesHelper(tableID, breakpointDefinition);
                        }
                    },
                    'rowCallback' : function (nRow, row, data, dataIndex) {
                        // Get row ID
                        var rowId = data[0];

                        // If row ID is in the list of selected row IDs
                        if($.inArray(rowId, rows_selected) !== -1){
                            $(row).find('input[type="checkbox"]').prop('checked', true);
                            $(row).addClass('selected');
                        }

                        responsiveHelper.createExpandIcon(nRow);
                    },
                    'drawCallback' : function(oSettings) {
                        responsiveHelper.respond();
                        // call dropdown bootstrap
                        $('body .dropdown-toggle').dropdown();
                        // call actions on last column datatable
                        BlankonTableAdvanced.handleActionViewDatatable();
                        BlankonTableAdvanced.handleActionEditDatatable();
                        BlankonTableAdvanced.handleActionDeleteDatatable();
                        // Call notifications
                        tableLanguage;
                    }
                } );
            });

            // Toggle column
            $('a.toggle-column').on( 'click', function (e) {
                e.preventDefault();

                // Change state
                $(this).parents('li').toggleClass('selected');

                // Get the column API object
                var column = table.column( $(this).attr('data-column') );

                // Toggle the visibility
                column.visible( ! column.visible() );

                // Call notifications
                BlankonTableAdvanced.handleNotificationDatatable($(this).text()+' Column');

            } );

            // Handle click on checkbox
            $('#datatable-sample tbody').on('click', '.ckbox, input[type="checkbox"]', function(e){
                var $row = $(this).closest('tr');

                // Get row data
                var data = table.row($row).data();

                // Get row ID
                var rowId = data[0];

                // Determine whether row ID is in the list of selected row IDs
                var index = $.inArray(rowId, rows_selected);

                // If checkbox is checked and row ID is not in list of selected row IDs
                if(this.checked && index === -1){
                    rows_selected.push(rowId);

                    // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
                } else if (!this.checked && index !== -1){
                    rows_selected.splice(index, 1);
                }

                if(this.checked){
                    $row.addClass('selected');
                } else {
                    $row.removeClass('selected');
                }

                // Update state of "Select all" control
                updateDataTableSelectAllCtrl(table);

                // Prevent click event from propagating to parent
                e.stopPropagation();
            });

            // Handle click on table cells with checkboxes
            $('#datatable-sample').on('click', 'tbody td', function(e){
                if($(this).is(':last-child')){
                    return false;
                }else{
                    $(this).parent().find('input[type="checkbox"]').trigger('click');
                }
            });

            // Handle click on "Select all" control
            $('#datatable-sample thead input[name="select_all"]').on('click', function(e){
                if(this.checked){
                    $('#datatable-sample tbody input[type="checkbox"]:not(:checked)').trigger('click');
                } else {
                    $('#datatable-sample tbody input[type="checkbox"]:checked').trigger('click');
                }

                // Prevent click event from propagating to parent
                e.stopPropagation();
            });

            // Handle table draw event
            table.on('draw', function(){
                // Update state of "Select all" control
                updateDataTableSelectAllCtrl(table);
            });

            // Handle form submission event
            $('#frm-example').on('submit', function(e){
                var form = this;

                // Iterate over all selected checkboxes
                $.each(rows_selected, function(index, rowId){
                    // Create a hidden element
                    $(form).append(
                        $('<input>')
                            .attr('type', 'hidden')
                            .attr('name', 'id[]')
                            .val(rowId)
                    );
                });

                // FOR DEMONSTRATION ONLY

                // Output form data to a console
                $('#example-console').text($(form).serialize());
                console.log("Form submission", $(form).serialize());

                // Remove added elements
                $('input[name="id\[\]"]', form).remove();

                // Prevent actual form submission
                e.preventDefault();
            });
        },

        // =========================================================================
        // DATATABLE AJAX SIMULATION USING JQUERY MOCKJAX
        // =========================================================================
        handleAJAXSimulation: function () {
            // AJAX emulation
            $.mockjax({
                'url': getBaseURL+'/assets/admin/data/table-advanced/datatable-sample.json',
                responseTime: 200,
                responseText: {
                    "data": [
                        ["1","Tiger Nixon","System Architect","Edinburgh","5421","2011\/04\/25","$320,800"],
                        ["2","Garrett Winters","Accountant","Tokyo","8422","2011\/07\/25","$170,750"],
                        ["3","Ashton Cox","Junior Technical Author","San Francisco","1562","2009\/01\/12","$86,000"],
                        ["4","Cedric Kelly","Senior Javascript Developer","Edinburgh","6224","2012\/03\/29","$433,060"],
                        ["5","Airi Satou","Accountant","Tokyo","5407","2008\/11\/28","$162,700"],
                        ["6","Brielle Williamson","Integration Specialist","New York","4804","2012\/12\/02","$372,000"],
                        ["7","Herrod Chandler","Sales Assistant","San Francisco","9608","2012\/08\/06","$137,500"],
                        ["8","Rhona Davidson","Integration Specialist","Tokyo","6200","2010\/10\/14","$327,900"],
                        ["9","Colleen Hurst","Javascript Developer","San Francisco","2360","2009\/09\/15","$205,500"],
                        ["10","Sonya Frost","Software Engineer","Edinburgh","1667","2008\/12\/13","$103,600"],
                        ["11","Jena Gaines","Office Manager","London","3814","2008\/12\/19","$90,560"],
                        ["12","Quinn Flynn","Support Lead","Edinburgh","9497","2013\/03\/03","$342,000"],
                        ["13","Charde Marshall","Regional Director","San Francisco","6741","2008\/10\/16","$470,600"],
                        ["14","Haley Kennedy","Senior Marketing Designer","London","3597","2012\/12\/18","$313,500"],
                        ["15","Tatyana Fitzpatrick","Regional Director","London","1965","2010\/03\/17","$385,750"],
                        ["16","Michael Silva","Marketing Designer","London","1581","2012\/11\/27","$198,500"],
                        ["17","Paul Byrd","Chief Financial Officer (CFO)","New York","3059","2010\/06\/09","$725,000"],
                        ["18","Gloria Little","Systems Administrator","New York","1721","2009\/04\/10","$237,500"],
                        ["19","Bradley Greer","Software Engineer","London","2558","2012\/10\/13","$132,000"],
                        ["20","Dai Rios","Personnel Lead","Edinburgh","2290","2012\/09\/26","$217,500"],
                        ["21","Jenette Caldwell","Development Lead","New York","1937","2011\/09\/03","$345,000"],
                        ["22","Yuri Berry","Chief Marketing Officer (CMO)","New York","6154","2009\/06\/25","$675,000"],
                        ["23","Caesar Vance","Pre-Sales Support","New York","8330","2011\/12\/12","$106,450"],
                        ["24","Doris Wilder","Sales Assistant","Sidney","3023","2010\/09\/20","$85,600"],
                        ["25","Angelica Ramos","Chief Executive Officer (CEO)","London","5797","2009\/10\/09","$1,200,000"],
                        ["26","Gavin Joyce","Developer","Edinburgh","8822","2010\/12\/22","$92,575"],
                        ["27","Jennifer Chang","Regional Director","Singapore","9239","2010\/11\/14","$357,650"],
                        ["28","Brenden Wagner","Software Engineer","San Francisco","1314","2011\/06\/07","$206,850"],
                        ["29","Fiona Green","Chief Operating Officer (COO)","San Francisco","2947","2010\/03\/11","$850,000"],
                        ["30","Shou Itou","Regional Marketing","Tokyo","8899","2011\/08\/14","$163,000"],
                        ["31","Michelle House","Integration Specialist","Sidney","2769","2011\/06\/02","$95,400"],
                        ["32","Suki Burks","Developer","London","6832","2009\/10\/22","$114,500"],
                        ["33","Prescott Bartlett","Technical Author","London","3606","2011\/05\/07","$145,000"],
                        ["34","Gavin Cortez","Team Leader","San Francisco","2860","2008\/10\/26","$235,500"],
                        ["35","Martena Mccray","Post-Sales support","Edinburgh","8240","2011\/03\/09","$324,050"],
                        ["36","Unity Butler","Marketing Designer","San Francisco","5384","2009\/12\/09","$85,675"],
                        ["37","Howard Hatfield","Office Manager","San Francisco","7031","2008\/12\/16","$164,500"],
                        ["38","Hope Fuentes","Secretary","San Francisco","6318","2010\/02\/12","$109,850"],
                        ["39","Vivian Harrell","Financial Controller","San Francisco","9422","2009\/02\/14","$452,500"],
                        ["40","Timothy Mooney","Office Manager","London","7580","2008\/12\/11","$136,200"],
                        ["41","Jackson Bradshaw","Director","New York","1042","2008\/09\/26","$645,750"],
                        ["42","Olivia Liang","Support Engineer","Singapore","2120","2011\/02\/03","$234,500"],
                        ["43","Bruno Nash","Software Engineer","London","6222","2011\/05\/03","$163,500"],
                        ["44","Sakura Yamamoto","Support Engineer","Tokyo","9383","2009\/08\/19","$139,575"],
                        ["45","Thor Walton","Developer","New York","8327","2013\/08\/11","$98,540"],
                        ["46","Finn Camacho","Support Engineer","San Francisco","2927","2009\/07\/07","$87,500"],
                        ["47","Serge Baldwin","Data Coordinator","Singapore","8352","2012\/04\/09","$138,575"],
                        ["48","Zenaida Frank","Software Engineer","New York","7439","2010\/01\/04","$125,250"],
                        ["49","Zorita Serrano","Software Engineer","San Francisco","4389","2012\/06\/01","$115,000"],
                        ["50","Jennifer Acosta","Junior Javascript Developer","Edinburgh","3431","2013\/02\/01","$75,650"],
                        ["51","Cara Stevens","Sales Assistant","New York","3990","2011\/12\/06","$145,600"],
                        ["52","Hermione Butler","Regional Director","London","1016","2011\/03\/21","$356,250"],
                        ["53","Lael Greer","Systems Administrator","London","6733","2009\/02\/27","$103,500"],
                        ["54","Jonas Alexander","Developer","San Francisco","8196","2010\/07\/14","$86,500"],
                        ["55","Shad Decker","Regional Director","Edinburgh","6373","2008\/11\/13","$183,000"],
                        ["56","Michael Bruce","Javascript Developer","Singapore","5384","2011\/06\/27","$183,000"],
                        ["57","Donna Snider","Customer Support","New York","4226","2011\/01\/25","$112,000"]
                    ]
                }
            });
        },

        // =========================================================================
        // ACTION VIEW ROW DATATABLES
        // =========================================================================
        handleActionViewDatatable: function () {
            $('#datatable-sample').on('click', '.btn-view', function(){
                showModalDialog(this);
            });

            $('#modal-view-datatable').modal({ show: false });

            $('#modal-view-datatable').on('show.bs.modal', function (e){
                var $dlg = $(this);

                var $tr    = $($dlg.data('btn')).closest('tr');
                var $table = $($dlg.data('btn')).closest('table');
                var data = $table.DataTable().row($tr).data();

                var html = '<form class="form-horizontal">' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Name :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[1]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Position :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[2]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Office :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[3]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Extn. :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[4]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Start Date :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[5]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Salary :</label>' +
                    '<div class="col-sm-10">' +
                    '<p class="form-control-static">' + $('<div/>').text(data[6]).html() + '</p>'+
                    '</div>' +
                    '</div>' +
                    '</form>';

                $('.row-name', $dlg).html(data[1]);

                $('.modal-body', $dlg).html(html);
            });

            function showModalDialog(elBtn){
                $('#modal-view-datatable').data('btn', elBtn);
                $('#modal-view-datatable').modal('show');
            }
        },

        // =========================================================================
        // ACTION EDIT ROW DATATABLES
        // =========================================================================
        handleActionEditDatatable: function () {
            $('#datatable-sample').on('click', '.btn-edit', function(){
                showModalDialog(this);
            });

            $('#modal-edit-datatable').modal({ show: false });

            $('#modal-edit-datatable').on('show.bs.modal', function (e){
                var $dlg = $(this);

                var $tr    = $($dlg.data('btn')).closest('tr');
                var $table = $($dlg.data('btn')).closest('table');
                var data = $table.DataTable().row($tr).data();

                var html = '<form class="form-horizontal">' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Name</label>' +
                    '<div class="col-sm-10">' +
                    '<input type="hidden" value="' + $('<div/>').text(data[0]).html() + '">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[1]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Position</label>' +
                    '<div class="col-sm-10">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[2]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Office</label>' +
                    '<div class="col-sm-10">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[3]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Extn.</label>' +
                    '<div class="col-sm-10">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[4]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Start Date</label>' +
                    '<div class="col-sm-10">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[5]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Salary</label>' +
                    '<div class="col-sm-10">' +
                    '<input class="form-control" type="text" value="' + $('<div/>').text(data[6]).html() + '">' +
                    '</div>' +
                    '</div>' +
                    '</form>';

                $('.row-name', $dlg).html(data[1]);

                $('.modal-body', $dlg).html(html);
            });

            function showModalDialog(elBtn){
                $('#modal-edit-datatable').data('btn', elBtn);
                $('#modal-edit-datatable').modal('show');
            }
        },

        // =========================================================================
        // ACTION DELETE ROW DATATABLES
        // =========================================================================
        handleActionDeleteDatatable: function () {
            $('#datatable-sample').on('click', '.btn-delete', function(){
                showModalDialog(this);
            });

            $('#modal-delete-datatable').modal({ show: false });

            $('#modal-delete-datatable').on('show.bs.modal', function (e){
                var $dlg = $(this);

                var $tr    = $($dlg.data('btn')).closest('tr');
                var $table = $($dlg.data('btn')).closest('table');
                var data = $table.DataTable().row($tr).data();

                $('.row-name', $dlg).html(data[1]);
            });

            function showModalDialog(elBtn){
                $('#modal-delete-datatable').data('btn', elBtn);
                $('#modal-delete-datatable').modal('show');
            }
        },

        handleNotificationDatatable: function (e) {
            // Call notification state
            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: e,
                // (string | mandatory) the text inside the notification
                text: 'Success changed!',
                // (string | optional) the image to display on the left
                image: BlankonApp.handleBaseURL()+'/assets/global/img/icon/64/check.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                class_name: 'gritter-position'
            });

            // You can have it return a unique id, this can be used to manually remove it later using
            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 1000);
        },

        // =========================================================================
        // DATATABLE COLORS
        // =========================================================================
        handleDatatableColors: function () {
            $('.dropdown-table-colors .dropdown-list').on('click', function () {
                if($('.table-default, .table-primary, .table-danger, .table-success, .table-info, .table-warning, .table-lilac, .table-inverse').length){
                    $('.table-default, .table-primary, .table-danger, .table-success, .table-info, .table-warning, .table-lilac, .table-inverse').removeClass();
                }
                $('#datatable-sample').addClass('table table-middle table-striped table-bordered table-condensed dataTable table-'+$(this).data('color'));

                // Call notifications
                BlankonTableAdvanced.handleNotificationDatatable('Table color '+$(this).data('color'));
            });
        }

    };

}();

// Call main app init
BlankonTableAdvanced.init();