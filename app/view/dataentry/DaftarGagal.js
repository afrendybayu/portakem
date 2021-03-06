/* AfrendyBayu, 13Nov2013 */

var filters = {
        ftype: 'filters',
        // encode and local configuration options defined previously for easier reuse
        //encode: encode, // json encode the filter query
        local: true,   // defaults to false (remote filtering)

        // Filters are most naturally placed in the column definition, but can also be
        // added here.
        filters: [{
            type: 'boolean',
            dataIndex: 'id'
        }]
};

Ext.define('rcm.view.dataentry.DaftarGagal', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.daftarGagal',
	xtype: 'taskDaftarGagal',
	//id: 'daftargagal',
	store: 'DaftarGagal',
	
	requires: [
		'rcm.view.dataentry.BlnGagal',
	],
	columnLines: true,
	enableColumnHide: false,
	
	viewConfig: {
        getRowClass: function(record, index) {
            var c = record.get('event');
            if (c.localeCompare("Breakdown")==0) {
                return 'rusak';
			} else if (c.localeCompare("Stand By")==0) {
                return 'sip';
            } else {
                return 'baik';
            }
        }
    },
    
    features: [filters],
    loadMask: true,
    
	dockedItems: [{
		dock: 'top',
		xtype: 'tblnGagal',
    }],
	

	initComponent: function() {
		var me=this, ceditp=Ext.create('Ext.grid.plugin.RowEditing');//clicksToEdit: 1
		//me.plugins = [ceditp];
		/*
		var fl = Ext.create('Ext.ux.grid.FiltersFeature', { 
			local: local,   // defaults to false (remote filtering)
			filters: [{
				type: 'boolean',
				dataIndex: 'visible'
			}]
		});
		
		//*/
		/*
		me.features = [{
			ftype: 'filters',
			// encode and local configuration options defined previously for easier reuse
			encode: false, // json encode the filter query
			local: true,   // defaults to false (remote filtering)

			// Filters are most naturally placed in the column definition, but can also be
			// added here.
			filters: [{
				type: 'boolean',
				dataIndex: 'visible'
			}]
		}];
		//*/
		me.listeners = {
			itemclick: function(dv, record, item, index, e) {
				//me.rowClick(record.get('id'), record.get('idevent'));	//	record.raw.value
				//console.log("ide: "+record.get('idevent')+", ev: "+record.idevent);
				//rcmSettings.asa = record.;
				//alert("unit_id: "+record.get('eqid')+", event: "+record.get('idevent'));
				me.row1Click(record.get('eqid'));
			},
			itemdblclick: function(dv, record, item, index, e)	{
			//	alert("double click");
				me.row2Click(record.get('id'), record.get('idevent'));	//	record.raw.value
			}
		},
		
		me.columns = {	
			items: [
			{ xtype:'rownumberer',width:25 },
			{ header:'Lokasi',dataIndex:'lok',width:100,filter: { 	type: 'string'  } },
			{ header:'Nama Unit',dataIndex:'nama',width:135,filter: { type: 'string' } },
			{ header:'Kejadian',dataIndex:'event',width:75, tdCls: 'x-change-cell',
			//*	
				filter: {
					type: 'string',
					store: 'EventList'
				}//*/
			},
			{ header:'Unit Down',
				columns: 
					[	{ header: 'Tanggal', dataIndex: 'downt', width:80,
							editor: {
								xtype: 'datefield',
								allowBlank: false,
								format: 'd-m-Y',
								minValue: '01-01-2006',
								minText: 'Tanggal kejadian unit down harus diisi !',
								//maxValue: Ext.Date.format(new Date(),'d-m-Y')
								maxValue: new Date()
						} },
						{ header:'Jam',dataIndex:'downj',width:60,editor: {xtype:'timefield',format:'H:i'} }
					]
			},{ text:'Mulai Perbaikan', 
				columns: 
					[	{ header:'Tanggal',dataIndex:'startt',width:80, 
							editor: {
								xtype:'datefield',
								allowBlank:true,
								format:'d-m-Y',
								minValue:'01-01-2006',
								minText:'Tanggal kejadian unit down harus diisi !',
								maxValue:Ext.Date.format(new Date(),'d-m-Y')
						} },
						{ header:'Jam',dataIndex:'startj',width:60,editor:{xtype:'timefield',allowBlank:true,format:'H:i'} }
					]
			},{ text:'Selesai Perbaikan',
				columns: 
					[	{ header: 'Tanggal', dataIndex: 'endt', width:80, 
							editor: {
								xtype: 'datefield',
								allowBlank: true,
								format: 'd-m-Y',
								minValue: '01-01-2006',
								minText: 'Tanggal kejadian unit down harus diisi !',
								maxValue: Ext.Date.format(new Date(), 'd-m-Y')
						} },
						{ header: 'Jam', dataIndex: 'endj', width:60, editor: {xtype: 'timefield',allowBlank:true,format:'H:i'} }
					]
			},{ header: 'Unit Running', 
				columns: 
					[	{ header: 'Tanggal', dataIndex: 'upt', width:80, 
							editor: {
								xtype: 'datefield',
								allowBlank: false,
								format: 'd-m-Y',
								minValue: '01-01-2006',
								minText: 'Tanggal kejadian unit down harus diisi !',
								maxValue: Ext.Date.format(new Date(), 'd-m-Y')
						} },
						{ header:'Jam',dataIndex:'upj',width:60,editor: {xtype:'timefield',format:'H:i'} }
					]
			}, { header: 'Mode Kegagalan / Keterangan', dataIndex: 'fm', flex:1
			}, {
				xtype:'actioncolumn',
				width:25,
				icon: 'modul/icons/edit.png',  // Use a URL in the icon config
				tooltip: 'Edit Kejadian',
				handler: Ext.bind(me.hdlEditDGClick, me)
				//handler: hdlEditDGClick
				/*
				function(grid, rowIndex, colIndex) {
					var rec = grid.getStore().getAt(rowIndex);
					//alert("Edit kejadian "+ rec.get('event')+" "+rec.get('nama'));
					//grid.getStore().removeAt(rowIndex);
				}
				//*/
			}, {
				xtype:'actioncolumn',
				width:25,
				icon: 'modul/icons/delete.gif',  // Use a URL in the icon config
				tooltip: 'Hapus Kejadian',
				handler: Ext.bind(me.hdlHapusDGClick, me)
				/*
				handler: function(grid, rowIndex, colIndex) {
					var rec = grid.getStore().getAt(rowIndex);
					var hps = rec.get('event')+" "+rec.get('nama');
					Ext.MessageBox.confirm(hps,'Hapus '+hps+' ?',function(btn){
						if (btn === 'yes') {
							//grid.getStore().removeAt(rowIndex);
						}
					});
				}
				//*/
			}
		]};
		me.callParent(arguments);
		me.addEvents(
			'editDGClick',
			'hapusDGClick'
        );
        
	},

	row1Click: function(id)	{
		//alert(id);
		//this.fireEvent('infoDetailGagal', id,ev);
		//rcmSettings.asa = record;
		//rcmSettings.sas = record.raw.value;
	},

	row2Click: function(id, ev, dv, record, item, index, e)	{
		//alert(id);
		this.fireEvent('infoDetailGagal', id,ev);
		//rcmSettings.asa = record;
		//rcmSettings.sas = record.raw.value;
	},

	hdlEditDGClick: function(grid, row, col, column, e) {
		var rec = grid.getStore().getAt(row);
		//alert("Edit kejadian "+ rec.get('event')+" "+rec.get('nama')+", id: "+rec.get('id'));
		//grid.getStore().removeAt(rowIndex);
		this.fireEvent('editDGClick', rec);
	},
	
	hdlHapusDGClick: function(grid, row, col, column, e) {
		var rec = grid.getStore().getAt(row);
		//alert("hapus kejadian "+ rec.get('event')+" "+rec.get('nama'));
		//grid.getStore().removeAt(rowIndex);
		this.fireEvent('hapusDGClick', rec, row, col);
	}
});
