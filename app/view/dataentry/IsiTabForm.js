/* Afrendy Bayu, 25Nov2013 */

Ext.define('rcm.view.dataentry.IsiTabForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.isiFormGagal',
	xtype: 'taskIsiFormGagal',
	require: [
		'Ext.form.TextField',
		'Ext.grid.Panel',
	],
	
	fieldDefaults: {
            msgTarget: 'side',
            //invalidCls: '' //unset the invalidCls so individual fields do not get styled as invalid
	},
	plugins: {
		ptype: 'datatip'
	},
	listeners: {
		fieldvaliditychange: function() {
			this.updateErrorState(Ext.getCmp('idtfevent').getSubmitValue());
		},
		fielderrorchange: function() {
			this.updateErrorState(Ext.getCmp('idtfevent').getSubmitValue());
		}
	},
	
	dockedItems: [{
		cls: Ext.baseCSSPrefix + 'dd-drop-ok',
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '5 0 0 0',

            items: [{
                xtype: 'component',
                id: 'formErrorState',
                invalidCls: Ext.baseCSSPrefix + 'form-invalid-icon',
                validCls: Ext.baseCSSPrefix + 'dd-drop-icon',
                baseCls: 'form-error-state',
                flex: 1,
                validText: 'Form is valid',
                invalidText: 'Form has errors',
                tipTpl: Ext.create('Ext.XTemplate', '<ul class="' + Ext.plainListCls + '"><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),

                getTip: function() {
                    var tip = this.tip;
                    if (!tip) {
                        tip = this.tip = Ext.widget('tooltip', {
                            target: this.el,
                            title: 'Error Details:',
                            minWidth: 200,
                            autoHide: false,
                            anchor: 'top',
                            mouseOffset: [-11, -2],
                            closable: true,
                            constrainPosition: false,
                            cls: 'errors-tip'
                        });
                        tip.show();
                    }
                    return tip;
                },

                setErrors: function(errors) {
                    var me = this,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    // Update CSS class and tooltip content
                    if (errors.length) {
                        me.addCls(me.invalidCls);
                        me.removeCls(me.validCls);
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                    } else {
                        me.addCls(me.validCls);
                        me.removeCls(me.invalidCls);
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            }, {
				xtype: 'button',
                text: 'Batal',
                width: 70,
                id: 'cancel-task-fg-btn',
				icon: 'modul/icons/cross.gif',
				margin: '0 10 0 0'
			/*
			}, {
				xtype: 'button',
                text: 'Hapus',
                width: 70,
                id: 'clear-task-fg-btn',
				//icon: 'modul/icons/cross.gif',
				margin: '0 10 0 10',
				//handler: this.hapusIsi
				handler: function()	{
					//alert("hapus");
					Ext.getCmp('idtfevent').setValue('');
					Ext.getCmp('timedown').setValue('');
					Ext.getCmp('dateup').setValue('');
					Ext.getCmp('timeup').setValue('');
					var enddate = field.up('form').down('#datedown');
					
				}
			//*/
            }, {
                xtype: 'button',
                //formBind: true,
                id:'save-task-fg-btn',
                icon: 'modul/icons/savedisk.png',
                disabled: true,
                text: 'Simpan Data',
                width: 140,
                handler: function() {
					var ev = Ext.getCmp('idtfevent').getValue();
                    if (ev && ev>0)	{
						
					}
                }
            }]
	}],

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
					id: 'idtfevent',
					displayField:   'name',
					//defaultMargins: {top: 0, right: 5, bottom: 0, left: 0},
					valueField: 'value',
					queryMode: 'local',
					store:          Ext.create('Ext.data.Store', {
						fields : ['name', 'value'],
						data   : [
							{name : 'Stand By',  value: 1},
							{name : 'PM', value: 2},
							{name : 'Corrective', value: 3},
							{name : 'Breakdown', value: 4}
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
					xtype: 'combo',
					mode: 'local',
					//triggerAction:  'all',
					forceSelection: true,
					editable: false,
					fieldLabel: 'Penyebab',
					emptyText: 'Pilih Tipe PM ... ',
					name: 'tipepm',
					id: 'tipepm',
					displayField: 'nama',
					valueField: 'id',
					multiSelect: true,
					queryMode: 'local',
					combineErrors: true,
					store: 'PM',
					maxWidth: 405,
					allowBlank: false
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
					xtype: 'datefield',
					name: 'datedown',
					id: 'datedown',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					margin: '0 5 0 0',
					vtype: 'daterange',
					endDateField: 'dateup',
					maxWidth: 200,
					allowBlank: false
				}, {
					xtype: 'timefield',
					vtype: 'timerange',
					name: 'timedown',
					id: 'timedown',
					endTimeField: 'timeup',
					startDateField: 'datedown',
					endDateField: 'dateup',
					emptyText: 'Pilih jam ...',
					labelAlign: 'top',
					format: 'H:i',
					maxWidth: 200,
					anchor: '100%',
					allowBlank: false
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
					xtype : 'datefield',
					name : 'datemulai',
					id : 'datemulai',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					maxWidth: 200,
					//allowBlank: false
				},{
					xtype: 'timefield',
					name: 'timemulai',
					id: 'timemulai',
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
						id: 'dateup',
						vtype: 'daterange',
						startDateField: 'datedown',
						startTimeField: 'timedown',
						endTimeField: 'timeup',
						endDateField: 'dateup',
						fieldLabel: 'Tanggal',
						format: 'd-m-Y',
						emptyText: 'Pilih Tanggal ... ',
						margin: '0 5 0 0',
						maxWidth: 200,
						allowBlank: false
					}, {
						xtype: 'timefield',
						name: 'timeup',
						id: 'timeup',
						//vtype: 'timerange',
						startTimeField: 'timedown',
						startDateField: 'datedown',
						endDateField: 'dateup',
						emptyText: 'Pilih jam ...',
						labelAlign: 'top',
						format: 'H:i',
						maxWidth: 200,
						anchor: '100%',
						allowBlank: false
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
					xtype : 'datefield',
					name : 'dateselesai',
					id : 'dateselesai',
					fieldLabel: 'Tanggal',
					format: 'd-m-Y',
					emptyText: 'Pilih Tanggal ... ',
					maxWidth: 200,
					//allowBlank: false
				}, {
					xtype: 'timefield',
					name: 'timeselesai',
					id: 'timeselesai',
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
					{ xtype:'rownumberer',width:25 },
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
				id: 'idtfket',
				fieldLabel: 'Keterangan',
				height: 80,
				//anchor: '100%'
			},{			// 9 Pelaksana
				xtype: 'textfield',
				hidden: true,
				fieldLabel: 'Pelaksana',
				msgTarget: 'side',
				name: 'exe',
				id: 'idexe',
				allowBlank: false,
				tooltip: 'Masukkan pelaksana pekerjaan',
				minLength: 2,
				combineErrors: true,
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
	
	hapusIsi: function()	{
		alert("hapus");
	},
	
	updateErrorState: function(a) {		
		var me = this, errorCmp, fields, errors;
		var ev = Ext.getCmp('idtfevent').getSubmitValue(),
			dd = Ext.getCmp('datedown').getSubmitValue(),
			td = Ext.getCmp('timedown').getSubmitValue(),
			du = Ext.getCmp('dateup').getSubmitValue(),
			tu = Ext.getCmp('timeup').getSubmitValue();
		var ex = Ext.getCmp('idexe').getSubmitValue();
		//console.log("ev: "+ev+", dd: "+dd+", td: "+td+", du"+du+", tu: "+tu);
		//if (ev && ev==1)	{		// standby
		if (a==1) {
			if (dd && td && du && tu)	{
				Ext.getCmp('save-task-fg-btn').enable();
			} else {
				Ext.getCmp('save-task-fg-btn').disable();
			}
		}
		else if (a==2)	{	// PM
		//else if (ev && ev==2)	{	// PM
			var pm = Ext.getCmp('tipepm').getSubmitValue();
			
			//console.log("pm: "+pm);
			if (dd && td && du && tu && pm && ex)	{
				Ext.getCmp('save-task-fg-btn').enable();
			} else {
				Ext.getCmp('save-task-fg-btn').disable();
			}
		}
		else if (a==3 || a==4)	{	// CR | BD
			//console.log("ev: "+ev+",pjg: "+ex.length);
			if (dd && td && du && tu && ex && ex.length>=2)	{
				Ext.getCmp('save-task-fg-btn').enable();
			} else {
				Ext.getCmp('save-task-fg-btn').disable();
			}
		}
		else {
			Ext.getCmp('save-task-fg-btn').disable();
		}
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
		var ev = Ext.getCmp('idtfevent').getSubmitValue();
		console.log("masuk pilih Event ev: "+ev);
		this.fireEvent('plhEventGagalXY', n);
		if (n==1)	{
			mx[1].setVisible(false);
			mx[3].setVisible(false);
			mx[5].setVisible(false);
			mx[6].setVisible(false);
			mx[7].setVisible(false);
			mx[9].setVisible(false);
		} 
		else if (n==2)	{
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
		console.log("seleksi event: "+n);
		this.updateErrorState(n);
	},
	
	setNilai: function(rec)	{
		alert("masuk SetNilai: "+rec.get('event'));
		//Ext.getCmp('idtfevent').setValue(rec.get('event'));
		Ext.getCmp('idtfevent').setValue(1);
		//Ext.getCmp('idtfevent').setValue('PM');
		rcmSettings.asa = Ext.getCmp('idtfevent');
	}
});
