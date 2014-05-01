/* AfrendyBayu,1Mei2014, terpisah */

Ext.define('rcm.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [
		'konfig.Nav',
    ],
    
    models: [
		'Hirarki'
	],

    stores: [
		'Hirarki'
    ],

	refs: [{
		ref: 'taskNavK',
		selector: 'taskNavK'
	}],

	init: function() {
		var me = this;
        me.control({
			'taskNavK': {
				listdrop: me.hirListDrop,
				delListDrop: me.delListDrop
			},
        });
    },
	
	

});
