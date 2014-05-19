/* AfrendyBayu, 13Nov2013 */
Ext.define('rcm.view.dataentry.DaftarGagal', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.daftarGagal',
	xtype: 'taskDaftarGagal',
	//id: 'daftargagal',
	
    
	store: 'DaftarGagal',
	/*
	listeners: {
		itemclick: function(dv, record, item, index, e) {
			
			rowClick(record.get('id'), record.raw.value);
			alert(record.get('id'));
		}
	},
	//*/
	
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

	initComponent: function() {
		var me=this, ceditp=Ext.create('Ext.grid.plugin.RowEditing');//clicksToEdit: 1
		me.plugins = [ceditp];
		
		me.listeners = {
			itemclick: function(dv, record, item, index, e) {
				me.rowClick(record.get('id'), record, item, index, e);	//	record.raw.value
			}
		},
		
		me.columns = {	
			items: [
			{ xtype:'rownumberer',width:25 },
			{ header:'Lokasi',dataIndex:'lok',width:100 },
			{ header:'Nama Unit',dataIndex:'nama',width:135 },
			{ header:'Kejadian',dataIndex:'event',width:75, tdCls: 'x-change-cell' },
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

	rowClick: function(id, dv, record, item, index, e)	{
		//alert(id);
		this.fireEvent('infoDetailGagal', id);
		//rcmSettings.asa = record;
		//rcmSettings.sas = record.raw.value;
	},

	hdlEditDGClick: function(grid, row, col, column, e) {
		var rec = grid.getStore().getAt(row);
		alert("Edit kejadian "+ rec.get('event')+" "+rec.get('nama'));
		//grid.getStore().removeAt(rowIndex);
		//this.fireEvent('editDGClick', grid, row, col);
	},
	
	hdlHapusDGClick: function(grid, row, col, column, e) {
		var rec = grid.getStore().getAt(row);
		//alert("hapus kejadian "+ rec.get('event')+" "+rec.get('nama'));
		//grid.getStore().removeAt(rowIndex);
		this.fireEvent('hapusDGClick', rec, row, col);
	}
});
