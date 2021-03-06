/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.laporan.Chart', {
	extend: 'Ext.tab.Panel',

    xtype: 'tabChart',
    requires: [
		'rcm.view.laporan.SapChartDet',
		'rcm.view.laporan.EPO',
		'rcm.view.laporan.ConMon',
    ],
    
	initComponent: function() {
		var me=this;
		me.items = [{
				id: 'ts_in',
				title: 'Input Laporan',
				xtype: 'uploadfile',
				margin: '10 10',
			},{
				id: 'ts_mo',
				title: 'Maintenance Order',
				xtype:'tEPO',
			},{
				id: 'ts_wo',
				title: 'WO Compliance',
				xtype:'tWOComp'
			},{
				id: 'ts_hi',
				title: 'Condition Monitoring',
				xtype:'tConMon'
			},{
				id: 'ts_pdm',
				title: 'Histori',
				xtype:'tHistori'
			},{
				id: 'ts_ca',
				title: 'Cause',
				xtype: 'tSapDet',
				jdlGr: 'Grafik Cause Frequent',
				jdlTb: 'Tabel Cause Frequent',
				jdlDet: 'Info Detail Chart Cause Frequent',
				param: 'Cause',
				dstore: 'SapCause',
				dstoreD:'SapCauseInfo',
				btnFilter: 'cau'
			},{
				id: 'ts_da',
				title: 'Damage',
				xtype: 'tSapDet',
				jdlGr: 'Grafik Damage Frequent',
				jdlTb: 'Tabel Damage Frequent',
				jdlDet: 'Info Detail Chart Damage Frequent',
				param: 'Damage',
				dstore: 'SapDamage',
				dstoreD:'SapDamageInfo',
				btnFilter: 'dam'
			},{
				id: 'ts_ob',
				title: 'Object Part',
				xtype: 'tSapDet',
				jdlGr: 'Grafik Object Part Frequent',
				jdlTb: 'Tabel Object Part Frequent',
				jdlDet: 'Info Detail Chart Object Part Frequent',
				param: 'Object part',
				dstore: 'SapOPart',
				dstoreD:'SapOPartInfo',
				btnFilter: 'opt'
			},{
				id: 'ts_sm',
				title: 'Symptom',
				xtype: 'tSapDet',
				jdlGr: 'Grafik Symptom Frequent',
				jdlTb: 'Tabel Symptom Frequent',
				jdlDet: 'Info Detail Chart Symptom Frequent',
				param: 'Symptom',
				dstore: 'SapSymptom',
				dstoreD:'SapSymptomInfo',
				btnFilter: 'sym'
		}];

		me.callParent(arguments);
		this.on('tabchange', me.handleSapTab, this);
	},
	handleSapTab: function()	{
		rcmSettings.tsp = this.getActiveTab().getId();
	}
});
