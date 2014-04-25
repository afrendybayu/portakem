/* AfrendyBayu, 20Jan2014 */
Ext.define('rcm.view.laporan.GridWork', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridWork',
	xtype: 'tGridWork',
    border: 0,
	store: 'HoMan',
	
	initComponent: function() {
		var me=this;//, sumFt=Ext.create('Ext.grid.feature.Summary');
		me.features = [{ftype: 'summary'}];
		me.columns = {	
			items: [
			{ xtype:'rownumberer',width:25 },
			{ header:'Work Centre',dataIndex:'nama',flex:1, 
				summaryRenderer: function() {
					return Ext.String.format('TOTAL ALL WO'); 
				} 
			},
			{ header:'Open',dataIndex:'open',flex:1,summaryType:'sum' },
			{ header:'Teco',dataIndex:'teco',flex:1,summaryType:'sum' },
			{ header:'Total Work Order<br/>Per Work Centre',dataIndex:'tot',flex:1,summaryType:'sum' },
			{ header:'WO Compliance',dataIndex:'woc',width:110,xtype:'templatecolumn',tpl:'{woc} %',
				summaryRenderer: function() {
					return Ext.String.format('diitung saja %'); 
				}
			}
		]};
		me.callParent(arguments);
		me.addEvents(
        );
	}
});
