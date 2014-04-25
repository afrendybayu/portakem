/* Afrendy Bayu, 25Nov2013 */
Ext.define('rcm.view.dataentry.IsiTabForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.isiFormGagal',
	xtype: 'taskIsiFormGagal',
	require: [
		'Ext.form.TextField',
		'Ext.grid.Panel'
	],

	initComponent: function() {
		var me=this,ed=Ext.create('Ext.grid.plugin.CellEditing',{ clicksToEdit: 1	});
		
		me.items = [{	// 0 tipe kejadian
				xtype: 'fieldcontainer',
				fieldLabel: 'Tipe Kejadian',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
					xtype:          'combo',
					mode:           'local',
					triggerAction:  'all',
					forceSelection: true,
					editable:       false,
					emptyText:      'Pilih Tipe Kejadian ... ',
					name:           'tfevent',
					displayField:   'name',
					//defaultMargins: {top: 0, right: 5, bottom: 0, left: 0},
					valueField:     'value',
					queryMode: 'local',
					store:          Ext.create('Ext.data.Store', {
						fields : ['name', 'value'],
						data   : [
							{name : 'Stand By',  value: '1'},
							{name : 'PM', value: '2'},
							{name : 'Corrective', value: '3'},
							{name : 'Breakdown', value: '4'}
						]
					}),
					maxWidth: 405,
					listConfig: {
						listeners: {
							itemclick: function(list, record) {
								me.pilihEventG(record.raw.value);
							}
						}
					}
				}]
			},{			// 1 Tipe PM
				xtype: 'fieldcontainer',
				id: 'TFpm',
				fieldLabel: 'Tipe PM',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
					xtype:          'combo',
					mode:           'local',
					triggerAction:  'all',
					forceSelection: true,
					editable:       false,
					fieldLabel:     'Penyebab',
					emptyText:      'Pilih Tipe PM ... ',
					name:           'tipepm',
					displayField:   'nama',
					valueField:     'id',
					multiSelect: true,
					queryMode: 'local',
					store: 'PM',
					maxWidth: 405,
				}]
			},{			// 2 Unit Stop
				xtype: 'fieldcontainer',
				fieldLabel: 'Unit Stop',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
					xtype     : 'datefield',
					name      : 'datedown',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					margin: '0 5 0 0',
					maxWidth: 200,
					allowBlank: false
				}, {
					xtype: 'timefield',
					name: 'timedown',
					emptyText: 'Pilih jam ...',
					labelAlign: 'top',
					format: 'H:i',
					maxWidth: 200,
					anchor: '100%'
				}]
			},{			// 3 Mulai Tindakan
				xtype: 'fieldcontainer',
				fieldLabel: 'Mulai Tindakan',
				id: 'TFmt',
				//name: 'timemulai',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
					xtype     : 'datefield',
					name      : 'datemulai',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					maxWidth: 200,
					//allowBlank: false
				},{
					xtype: 'timefield',
					name: 'timemulai',
					emptyText: 'Pilih jam ...',
					labelAlign: 'top',
					format: 'H:i',
					maxWidth: 200,
					margin: '0 5 0 5',
					anchor: '100%'
				},{
					xtype: 'button',
					text: 'Sejak Unit Stop',
					name: 'timemulai',
					maxWidth: 120,
					id: 'samadown-fmea-btn',
					//params: {'datedown','datemulai','timedown','timemulai'},
					icon: 'modul/icons/connect.png'
				//*/
				}]
			},{			// 4 Unit Beroperasi
				xtype: 'fieldcontainer',
				fieldLabel: 'Unit Beroperasi',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
						xtype: 'datefield',
						name: 'dateup',
						fieldLabel: 'Tanggal',
						format: 'd-m-Y',
						emptyText: 'Pilih Tanggal ... ',
						margin: '0 5 0 0',
						maxWidth: 200,
						allowBlank: false
					}, {
						xtype: 'timefield',
						name: 'timeup',
						emptyText: 'Pilih jam ...',
						labelAlign: 'top',
						format: 'H:i',
						maxWidth: 200,
						anchor: '100%'
				}]
			},{			// 5 Selesai Tindakan
				xtype: 'fieldcontainer',
				fieldLabel: 'Selesai Tindakan',
				combineErrors: true,
				msgTarget : 'side',
				id: 'TFst',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
					xtype     : 'datefield',
					name      : 'dateselesai',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					maxWidth: 200,
					//allowBlank: false
				}, {
					xtype: 'timefield',
					name: 'timeselesai',
					emptyText: 'Pilih jam ...',
					labelAlign: 'top',
					format: 'H:i',
					maxWidth: 200,
					anchor: '100%',
					margin: '0 5 0 5'
				},{
					xtype: 'button',
					text: 'Sejak Unit Operasi',
					name: 'timemulai',
					maxWidth: 120,
					id: 'samarun-fmea-btn',
					//id: 'samawaktu-fmea-btn',
					//params: {'dateup','dateselesai','timeup','timeselesai'},
					icon: 'modul/icons/connect.png'
				}]
			
			
			//*
			},{			// 6 Kegagalan Button
				xtype: 'fieldcontainer',
				fieldLabel: 'Kegagalan',
				id: 'TFTmbl',
				combineErrors: true,
				msgTarget : 'side',
				layout: 'hbox',
				defaults: {
					flex: 1,
					hideLabel: true
				},
				items: [{
						xtype: 'button',
						id: 'tambah-fmea-btn',
						icon: 'modul/icons/add.png',
						margin: '0 0 0 665',
						text: 'Tambah',
						maxWidth: 80
				}]
			},{			// 7 Grid FMEA
				xtype: 'gridpanel',
				layout: 'fit',
				id: 'TFGrid',
				height: 100,
				plugins: [ed],
				listeners: {
					'cellclick' : me.rowFMEAclick
				},
				store: 'Event',
				columns: [
					{ text: "Equipment", dataIndex: 'eql', width:150, editor: {
						xtype: 'combo', store: 'Equip',editable: false,	emptyText: 'Pilih Equipment... ',
						queryParam: 'tipe',name : 'eql',displayField: 'nama',valueField: 'nama',queryMode: 'local',
						listConfig: { listeners: { itemclick: function(list, record) { me.pilihEquipGagal(record,list); } } }
					} },
					{ text: "Object Part", dataIndex: 'opart', flex:1, editor: {
						xtype: 'combo', editable: false, emptyText: 'Pilih Object Part.. ', store: 'OPart',queryMode: 'local',
						queryParam: 'tipe',name : 'opart',displayField: 'nama',valueField: 'nama',
						listConfig: { listeners: { itemclick: function(list, record) { me.pilihOPartGagal(record); } } }
					} },
					{ text: "Failure Mode", dataIndex: 'mode', width:220,editor: {
						xtype: 'combo', store: 'FMode',editable: false,	emptyText: 'Pilih Mode... ',queryMode: 'local',
						queryParam: 'tipe',name : 'mode',displayField: 'nama',valueField: 'nama',
						listConfig: { listeners: { itemclick: function(list, record) { me.pilihModeGagal(record,list); } } }
					} },
					{ text: "Cause", dataIndex: 'cause', width:200, editor: {
						xtype: 'combo', store: 'Cause',editable: false,	emptyText: 'Pilih Penyebab... ',
						queryParam: 'tipe',name : 'cause',displayField: 'nama',valueField: 'nama',queryMode: 'local',
						listConfig: { listeners: { itemclick: function(list, record) { me.pilihCauseGagal(record); }}, 
								getInnerTpl: function() {	return '<div data-qtip="{nama}: {ket}">{nama}</div>'; }}, 
					} },
					{ text: "Tindakan", dataIndex: 'aksi', width:100, editor: {
						xtype: 'combo', store: 'Aksi',editable: false,	emptyText: 'Pilih Tindakan... ',
						queryParam: 'tipe',name : 'aksi',displayField: 'nama',valueField: 'nama',queryMode: 'local',
						listConfig: { listeners: { itemclick: function(list, record) { me.pilihAksiGagal(record); } } }
					} },
					{ xtype:'actioncolumn',	width:25,
					  icon: 'modul/icons/delete.gif', tooltip: 'Hapus',
							handler: function(grid, rowIndex, colIndex) {
								var rec = grid.getStore().getAt(rowIndex);
								//console.log("HApus rowIndex: "+rowIndex+", rec: "+rec.get('idg'));
								alert("Hapus " + rec.get('eq'));
									grid.getStore().removeAt(rowIndex);
						}
					}
				]
			},{			// 8 KetEditor	
				xtype: 'htmleditor',
				name: 'tfket',
				fieldLabel: 'Keterangan',
				height: 80,
				//anchor: '100%'
			},{			// 9 Pelaksana
				xtype: 'textfield',
				hidden: true,
				fieldLabel: 'Pelaksana',
				msgTarget: 'side',
				name: 'exe',
				//combineErrors: true,
				defaults: {
					flex: 1,
					hideLabel: true
				}
			
		}];
		me.callParent(arguments);
		me.addEvents(
			'plhOPartGagal',
			'plhEquipGagal',
			'plhModeGagal',
			'plhCauseGagal',
			'plhAksiGagal',
			'plhEventGagalXY'
        );
	},
	
	rowFMEAclick: function(grid, td, cellIndex, record, tr, rowIndex){
		var asa = grid.getStore().getAt(rowIndex);
		rcmSettings.asa = {row: rowIndex, col: cellIndex};
	},

	pilihOPartGagal: function(n) {
		//console.log("tambahOPartGagal: "+n.data.cat+" id: "+n.data.id+" baris: "+rcmSettings.asa);
		rcmSettings.asa.opart = n.data.id;	// w
		this.fireEvent('plhOPartGagal', n, rcmSettings.asa);
	},
	
	pilihEquipGagal: function(n)	{
		rcmSettings.asa.cat = n.data.cat;
		rcmSettings.asa.ideq = n.data.idt;
		//console.log("pilihEquipGagal: "+n.data.cat+" id: "+n.data.idt+" id: "+rcmSettings.asa.idt+" row: "+rcmSettings.asa.row);
		this.fireEvent('plhEquipGagal', n, rcmSettings.asa);
	},
	
	pilihModeGagal: function(n)	{
		rcmSettings.asa.mode = n.data.id;
		rcmSettings.asa.kode = n.data.kode;
		this.fireEvent('plhModeGagal', n, rcmSettings.asa);
	},
	
	pilihCauseGagal: function(n)	{
		rcmSettings.asa.cause = n.data.id;
		this.fireEvent('plhCauseGagal', n, rcmSettings.asa);
	},
	
	pilihAksiGagal: function(n)	{
		rcmSettings.asa.aksi = n.data.id;
		this.fireEvent('plhAksiGagal', n, rcmSettings.asa);
	},
	
	pilihEventG: function(n)	{
		var mx = this.items.items;
		this.fireEvent('plhEventGagalXY', n);
		if (n=="1")	{
			mx[1].setVisible(false);
			mx[3].setVisible(false);
			mx[5].setVisible(false);
			mx[6].setVisible(false);
			mx[7].setVisible(false);
			mx[9].setVisible(false);
		} 
		else if (n=="2")	{
			mx[1].setVisible(true);
			mx[3].setVisible(true);
			mx[5].setVisible(true);
			mx[6].setVisible(false);
			mx[7].setVisible(false);
			mx[9].setVisible(true);
			
		} else	{ // BD & CR
			mx[1].setVisible(false);
			mx[3].setVisible(true);
			mx[5].setVisible(true);
			mx[6].setVisible(true);
			mx[7].setVisible(true);
			mx[9].setVisible(true);
		}
	}
});
