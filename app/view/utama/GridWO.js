/* AfrendyBayu, 20Jan2014 */
Ext.define('rcm.view.utama.GridWO', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridWO',
	xtype: 'tGridWO',
    
	store: 'HoMan',
	
	initComponent: function() {
		var me=this;
		me.features = [{ftype: 'summary'}];
		me.columns = {
			items: [
			{ xtype:'rownumberer',width:25 },
			{ header:'Work Centre',dataIndex:'nama',flex:1, 
				summaryRenderer: function() {
					return Ext.String.format('TOTAL ALL WO'); 
				} 
			},
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
