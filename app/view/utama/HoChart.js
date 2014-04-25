// afrendyBayu,26Jan2014 //
Ext.define('rcm.view.utama.HoChart', {
    xtype: 'tHoChart',
	extend: 'Ext.container.Container',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	defaults: {
		flex: 1,
		hideLabel: true
	},

    items: [{
		xtype: 'container',
		layout: {
			type: 'vbox',
			align: 'stretch'
        },
		items:[{
			height: 140,
			xtype: 'tHoSpeedo',
		},{
			icon: 'modul/icons/accept.png',
			title: 'WO Compliance',
			xtype: 'panel',
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'tGridWO',
				//text: 'label HoChart',
				flex: 2
			},{
				xtype: 'tHoPie',
				flex: 2,
				jdl: 'WO Compliance'
			},{
				xtype: 'tHoHistori',
				flex: 3,
				jdl: 'Histori'
			}],
			flex: 1
		},{
			icon: 'modul/icons/dollar.png',
			xtype: 'tGridOrderC',
			flex: 1,
			title: 'Order Costing'
		}]
	}]
});
