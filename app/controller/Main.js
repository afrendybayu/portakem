/* AfrendyBayu,12Nov2013 */

Ext.define('rcm.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [
        'AppHeader',
        'Navigation',
        'Content',
    ],
    
    models: [
	//	'DaftarGagal', 'RunningHour'
	],		// creates getter named 'getDaftarGagalModel'

    stores: [
	//	'DaftarGagal',				// creates getter named 'getDaftarGagalStore'
    //   'RunningHour',
    ],

	refs: [{
//		ref: 'excelgrid',
//		selector: 'excelgrid'
	}],

	init: function() {
		var me = this;
        me.control({

        });
    },


});
