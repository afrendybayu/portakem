// afrendyBayu,26Jan2014 //
Ext.define('rcm.view.lapobama.AvReChart', {
    xtype: 'tAvReChart',
	extend: 'Ext.panel.Panel',
	//extend: 'Ext.container.Container',
	requires: [
		'rcm.view.MonthYear',
		'rcm.view.lapobama.BlnAv'
	],
	
	dockedItems: [{
		xtype: 'taskBlnAv',
		dock: 'top'
	//*
	},{
		xtype: 'label',
		text: ' * Klik data kolom grafik untuk melihat detail',
		dock: 'bottom'
	//*/
    }],
	
	layout: {
        type: 'hbox',
        align: 'stretch',
		columns: 2,
        
	},

	defaults: {
		flex: 1,
		hideLabel: true
	},

	
    /*
    items: [{
		xtype: 'panel',
		layout: {
			type: 'hbox',
			align: 'stretch',
		},
		border:0,
		items:[{
			xtype: 'tAvHome',
			flex: 1,
			fldY: ['av2014'],
			jdl: 'Availability',
		},{
			xtype: 'tReHome',
			flex: 1,
			fldY: ['av2014'],
			jdl: 'Reliability',
		}]
	}]
	//*/
    //*
	items: [{
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'stretch',
		},
		border:0,
		items:[{
			xtype: 'tAvGroup',
			flex: 1,
			fldY: ['av2014'],
			jdl: 'Availability',
		},{
			width: '60%',
			layout: {
				type: 'vbox',
				align: 'stretch',
			},
			items: [{
				//height: '33.3%',
				flex: 4,
				layout: {
					type: 'hbox',
					align: 'stretch',
				},
				border: 0,
				items:[{
					width: '50%',
					xtype: 'tAvHome',
					fldY: ['av2014'],
					jdl: 'Availability',
					subJdl: 'Gas Compressor'
				},{
					//*
					xtype: 'tReHome',
					width: '50%',
					height: '33.3%',
					jdl: 'Reliability',
					//*/
				}]
			},{
				//height: '23.3%',
				flex: 3,
				layout: {
					type: 'hbox',
					align: 'stretch',
				},
				//border: 0,
				items:[{
					width: '50%',
					xtype: 'tAvSpeedo',
					fldY: ['av2014'],
					jdl: 'Availability',
					dstore: 'AvSpeedo'
				},{
					width: '50%',
					xtype: 'tAvSpeedo',
					fldY: ['re2014'],
					jdl: 'Reliability',
					dstore: 'ReSpeedo'
				}]
			},{
				//height: '43.3%',
				flex: 5,
				layout: {
					type: 'hbox',
					align: 'stretch',
				},
				border: 0,
				items:[{
					width: '50%',
					//xtype: 'tAvReUnitx',
					xtype: 'tAv2Thn',
					fldY: ['av2014'],
					jdl: 'Availability',
				},{
					//xtype: 'tAvReUnitx',
					xtype: 'tAv2Thn',
					width: '50%',
					//height: '33.3%',
					jdl: 'Reliability',
				}]
			}]
		}]
	}]
	//*/
	
});
