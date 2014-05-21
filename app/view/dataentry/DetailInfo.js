/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.DetailInfo', {
	extend: 'Ext.panel.Panel',
	xtype: 'detailInfo',
	
	layout: 'border',
	items: [{
			region: 'west',
			width: '26%',
			xtype: 'propgrid',
			weight: 100
		}, {
			title: 'Failure List',
			//collapsible: true,
			//collapsed: true,
			id: 'idinfofmea',
			title: 'Unit Failure List',
			region: 'center',
			flex: 1,
			xtype: 'infofmea'
		},{
			split: true,
			id: 'htmleddet',
			region: 'south',
			xtype: 'htmleditor',
			flex: 1
	}]
});
