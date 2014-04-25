// afrendyBayu,26Jan2014 //
Ext.define('rcm.view.laporan.EPO', {
    xtype: 'tEPO',
	extend: 'Ext.container.Container',

	requires: [
		'rcm.view.laporan.EPOCol',
		'rcm.view.laporan.EPOPie'
	//	'rcm.view.laporan.WOStack'
	],
	
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
			xtype: 'panel',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [{
					xtype: 'tAvSpeedo',
					subjdl: 'Availability ',
					flex: 1,
					jdl: '3 < n < 7 hari'
				},{
					xtype: 'tAvSpeedo',
					subjdl: 'Availability ',
					flex: 1,
					jdl: '7 < n < 30 hari'
				},{
					xtype: 'tAvSpeedo',
					subjdl: 'Availability ',
					flex: 1,
					jdl: '30 < n < 59 hari'
				},{
					xtype: 'tAvSpeedo',
					subjdl: 'Availability ',
					flex: 1,
					jdl: 'n > 60 hari'
			}]
		},{
			xtype: 'panel',
			//flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [{
					flex: 1,
					xtype: 'label',
					text: 'Jml: 3449, %-to-Total: 84.83 %'
				},{
					flex: 1,
					xtype: 'label',
					text: 'Jml: 255, %-to-Total: 6.27 %'
				},{
					flex: 1,
					xtype: 'label',
					text: 'Jml: 56, %-to-Total: 1.38 %'
				},{
					flex: 1,
					xtype: 'label',
					text: 'Jml: 306, %-to-Total: 7.52 %'
			}]
		},{
			xtype: 'panel',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [{
					xtype: 'tEPOCol',
					flex: 1,
					jdl: 'Work Order Number'
				},{
					xtype: 'tEPOPie',
					flex: 1
			}]
		}]
	}]
});
