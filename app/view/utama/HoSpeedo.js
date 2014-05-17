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
			id: 'AvGC',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gas Comp',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvGcUt'
		},{
			id: 'AvGS',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gen Set',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvGsUt'
		},{
			id: 'AvPm',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Pump',
			subjdl: 'Avail '+rcm.view.Util.Ublnini(),
			dstore: 'SpAvPmUt'
		},{
			id: 'ReGC',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gas Comp',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpReGcUt'
		},{
			id: 'ReGS',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Gen Set',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpReGsUt'
		},{
			id: 'RePm',
			flex: 1,
			xtype: 'tAvSpeedo',
			jdl: 'Pump',
			subjdl: 'Reliability '+rcm.view.Util.Ublnini(),
			dstore: 'SpRePmUt'
		}]
	}]
});
