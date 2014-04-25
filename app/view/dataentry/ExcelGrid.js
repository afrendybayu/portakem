/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.ExcelGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.excelgrid',
	xtype: 'taskExcelGrid',
	id: 'idexcelgrid',
	
	requires: [
		'rcm.view.Util',
		'Ext.grid.plugin.CellEditing',
		'Ext.grid.feature.Grouping',
		'Ext.grid.RowNumberer',
	],
	
	store: 'RunningHour',
    columnLines: true,
    //frame: true,

	initComponent: function() {
		var me=this, ti=rcm.view.Util.UxcolGrid(), // tb=rcm.view.Util.Ublntgl(), tg=rcm.view.Util.Utgl(), 
            cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
            groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
                //groupField: 'Lokasi',
				groupHeaderTpl: '{columnName}: {name} [{rows.length} Unit]',
				enableGroupingMenu: false,
                startCollapsed: true
            }); 
		
        me.plugins = [cellEditingPlugin];
        me.features = [groupingFeature];
        me.selModel = { 
			selType: 'cellmodel'
		};

		me.bbar = [{
			text: 'Compressor',
			icon: 'modul/icons/comp16.png',
			scope: this,
			handler: this.CompClick
		},{
			text: 'Genset',
			scope: this,
			handler: this.GensetClick
		},{
			text: 'Pump',
			scope: this,
			handler: this.PumpClick
		}];

        me.columns = {
            defaults: {
                draggable: false,
                resizable: false,
                hideable: false,
                groupable: false,
            },
            items: ti,
        };
        
        me.callParent(arguments);
		me.addEvents(
			'recordedit'
        );
        cellEditingPlugin.on('edit', me.handleCellEdit, this);
	},
	
	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		if (value == "24:00") {
			metadata.css = 'red';
		} else {
			metadata.css = 'green';
		}
		return colIndex;
	},

    handleCellEdit: function(gridView, e) {
		//var alertText = ' ';   for (property in e) { alertText += property + ':' + e[property]+'; ';   }
		//console.log(alertText);
        var rec = e.grid.getStore().getAt(e.rowIdx), tt=e.field;
		rcmSettings.eqx = rec.get('id');
		rcmSettings.tgl =  "20"+tt.substring(1,3)+"-"+tt.substring(3,5)+"-"+tt.substring(5);
		console.log("handleCellEdit ExcelGrid tgl: "+rcmSettings.tgl);
        this.fireEvent('recordedit', gridView, e);
    },
    
    CompClick: function()	{
		rcmSettings.cat = 5;
		//console.log("rcmSettings.cat: "+rcmSettings.cat)
		this.fireEvent('EqClick', 5);
	},
	
	GensetClick: function()	{
		rcmSettings.cat = 7;
		//console.log("rcmSettings.cat: "+rcmSettings.cat)
		this.fireEvent('EqClick', 7);
	},
	PumpClick: function()	{
		rcmSettings.cat = 6;
		//console.log("rcmSettings.cat: "+rcmSettings.cat)
		this.fireEvent('EqClick', 6);
	}
	
});
