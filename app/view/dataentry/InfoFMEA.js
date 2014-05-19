/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.InfoFMEA', {
	extend: 'Ext.grid.Panel',
	xtype: 'infofmea',
	
	store: 'EventInfo',
    columnLines: true,

	columns: {
		defaults: {
			draggable: false,
			resizable: false,
			hideable: false,
			groupable: false,
		},
		items: [
			{ xtype:'rownumberer',width:25 },
			{ text: 'Equipment',  dataIndex: 'eql', flex: 1 },
			{ text: 'Object Part', dataIndex: 'opart', width:200 },
			{ text: 'Failure Mode', dataIndex: 'mode', width:200 },
			{ text: 'Cause', dataIndex: 'cause', width:130 },
			{ text: 'Action', dataIndex: 'aksi', width:130 }
		],
    },
	
	initComponent: function() {
		var me=this;
		
		
		me.callParent(arguments);
	}
	
});
