/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.DetailInfo', {
	extend: 'Ext.panel.Panel',
	xtype: 'detailInfo',

    layout: 'border',
	items: [{
			region: 'center',
			//region: 'west',
			//width: 400,
			xtype: 'propgrid',
			//weight: 300
		}, {
			region: 'east',
			html: 'propgrid',
			flex: 1,
			weight: 100
		//*
		}, {
			region: 'east',
			flex: 1,
			//minWidth: 80,
			html: 'South Eastern'
		//*/
	}],

	initComponent: function() {
		var me=this;
		
		
		me.callParent(arguments);
	}
	
});
