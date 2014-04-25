// afrendyBayu,26Jan2014 //
Ext.define('rcm.view.utama.HoSpeedo', {
    xtype: 'tHoSpeedo',
	extend: 'Ext.container.Container',

	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	defaults: {
		flex: 1,
		hideLabel: true
	},

    items: [{
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'stretch'
        },
		items:[{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gas Comp',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvGcUt'
		},{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gen Set',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvGsUt'
		},{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Pump',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvPmUt'
		},{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gas Comp',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpReGcUt'
		},{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gen Set',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpReGsUt'
		},{
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Pump',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpRePmUt'
		}]
	}]
});
