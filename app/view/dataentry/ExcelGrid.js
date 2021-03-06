/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.ExcelGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.excelgrid',
	xtype: 'taskExcelGrid',
	id: 'idexcelgrid',
	
	requires: [
		'rcm.view.Util',
	],
	features: [{ftype:'grouping',
		id:'grRH',
		hideGroupedHeader:true,
		startCollapsed:true}],

	store: 'RunningHour',
    columnLines: true,
	selType: 'cellmodel',

	columns: {
		defaults: {
			draggable: false,
			resizable: false,
			hideable: false,
			groupable: false,
		},
		items: rcm.view.Util.UxcolGrid()
    },
    
    viewConfig: {
        getRowClass: function(record, index) {
			//rcmSettings.asa = record;
            /*
            var c = record.get('k140426');
            if (c.localeCompare("24:00")) {
                return 'price-fall';
            } else {
                return 'price-rise';
            }
            //*/
        }
    },
	
	initComponent: function() {
		var me=this, cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 });
		
		me.plugins = [cellEditingPlugin];
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
		
		me.callParent(arguments);
		me.addEvents(
			'recordedit'
        );
        cellEditingPlugin.on('edit', me.handleCellEdit, this);
	},
	/*
	initComponent: function() {
		var me=this, ti=rcm.view.Util.UxcolGrid(), // tb=rcm.view.Util.Ublntgl(), tg=rcm.view.Util.Utgl(), 
            cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 });

            groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
                //groupField: 'Lokasi',
				groupHeaderTpl: '{columnName}: {name} [{rows.length} Unit]',
				enableGroupingMenu: false,
                startCollapsed: true
            }); 
			//groupingFeature = {ftype:'grouping',startCollapsed: true,groupHeaderTpl: '{columnName}: {name} [{rows.length} Unit]'};
			
        //me.plugins = [cellEditingPlugin];
        //me.features = [groupingFeature];
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
	//*/
	
	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		//alert("jos renderer");
		//console.log("value: "+value+", rowIx: "+rowIndex+", colIx: "+colIndex);
		if(value.localeCompare("24:00")) {
			meta.style = "background-color:green;";
		} else {
			meta.style = "background-color:red;";
		}
		return colIndex;
	},

    handleCellEdit: function(gridView, e) {
		//var alertText = ' ';   for (property in e) { alertText += property + ':' + e[property]+'; ';   }
		//console.log(alertText);
        var rec = e.grid.getStore().getAt(e.rowIdx), tt=e.field;
		rcmSettings.eqx = rec.get('id');
		rcmSettings.tgl =  "20"+tt.substring(1,3)+"-"+tt.substring(3,5)+"-"+tt.substring(5);
		//console.log("handleCellEdit ExcelGrid tgl: "+rcmSettings.tgl);
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
