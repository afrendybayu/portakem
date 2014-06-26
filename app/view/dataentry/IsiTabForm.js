/* Afrendy Bayu, 25Nov2013 */

Ext.define('rcm.view.dataentry.IsiTabForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.isiFormGagal',
	xtype: 'taskIsiFormGagal',
	require: [
		'Ext.form.TextField',
		'Ext.grid.Panel',
		'rcm.view.dataentry.FMEAGrid'
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
                /*
                handler: function() {
					var ev = Ext.getCmp('idtfevent').getValue();
                    if (ev && ev>0)	{
						
					}
                }
                //*/
            }, {
				xtype: 'button',
                //formBind: true,
                id:'update-rh',
                icon: 'modul/icons/savedisk.png',
                hidden: true,
                text: 'Update',
                width: 140
                /*
                handler: function() {
					var ev = Ext.getCmp('updateRh').getValue();
					//alert("updteeeeeeeee");
                }
				//*/
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
					name: 'timedown',
					id: 'timedown',
					vtype: 'timerange',
					endTimeField: 'timeup',		
					
					
					//startDateField: 'datedown',
					//startTimeField: 'timedown',	
					//endDateField: 'dateup',
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
						endTimeField: 'timeup', // diakses ketika tanggal sama !!!
						startTimeField: 'timedown',		// diakses untuk cari waktu down !!!
						
						//endDateField: 'dateup',
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
						vtype: 'timerange',
						startTimeField: 'timedown',
						
						startDateField: 'datedown',
						endDateField: 'dateup',
						
						//endTimeField: 'timeup',
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
						margin: '0 0 0 720',
						text: 'Tambah',
						maxWidth: 80
				}]
			},{			// 7 Grid FMEA
				//xtype: 'gridpanel',
				layout: 'fit',
				id: 'TFGrid',
				height: 120,
				xtype: 'taskFMEAGrid',
				/*
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
					{ text: "Object Part", dataIndex: 'opart', width:250, editor: {
						xtype: 'combo', editable: false, emptyText: 'Pilih Object Part.. ', store: 'OPart',queryMode: 'local',
						queryParam: 'tipe',name : 'opart',displayField: 'nama',valueField: 'nama',
						listConfig: { listeners: { itemclick: function(list,record) { me.pilihOPartGagal(record, list); } } }
					} },
					{ text: "Failure Mode", dataIndex: 'mode', width:200,editor: {
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
				//*/
			},{			// 8 KetEditor	
				//margin: '0 5 0 0',
				//xtype: 'htmleditor',
				width:509,
				xtype: 'textarea',
				name: 'tfket',
				id: 'idtfket',
				fieldLabel: 'Keterangan',
				msgTarget: 'side',
				flex: 1,
				height: 80,
				//anchor: '100%'
			},{			// 9 Pelaksana
				xtype: 'textfield',
				width:509,
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
		var x = {row: rowIndex, col: cellIndex, cat: asa.get('cat')};
		
		console.log("baris: "+x.row+", kolom: "+x.col+", cat: "+x.cat);
		rcmSettings.asa = x;
		this.fireEvent('plhFilterFMEA');
	},

	pilihOPartGagal: function(n, l) {
		//rcmSettings.aaaa = n;
		//alert(this.getView().getRow(0));
		rcmSettings.asa.opart = n.data.id;	// w
		//this.fireEvent('plhFilterFMEA');
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
		//aaaa = n;	
		this.fireEvent('plhModeGagal', n, rcmSettings.asa);
		//var a;
		//a.mode = n.data.id;		a.kode = n.data.kode;
		//alert("id: "+n.data.id+", kode:"+n.data.kode);
		//this.fireEvent('plhModeGagal', n, n.data);
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
		//var mx = this.items.items;
		var ev = Ext.getCmp('idtfevent').getSubmitValue();
		//console.log("masuk pilih Event ev: "+ev);
		this.fireEvent('plhEventGagalXY', n);
		if (n==1)	{		// StandBy
			Ext.getCmp('TFpm').setVisible(false);
			Ext.getCmp('TFmt').setVisible(false);
			Ext.getCmp('TFst').setVisible(false);
			Ext.getCmp('TFTmbl').setVisible(false);
			Ext.getCmp('TFGrid').setVisible(false);
			Ext.getCmp('idexe').setVisible(false);
		} 
		else if (n==2)	{
			Ext.getCmp('TFpm').setVisible(true);
			Ext.getCmp('TFmt').setVisible(true);
			Ext.getCmp('TFst').setVisible(true);
			Ext.getCmp('TFTmbl').setVisible(false);
			Ext.getCmp('idexe').setVisible(true);
			Ext.getCmp('TFGrid').setVisible(false);
			//*/
		} else	{ // BD & CR
			Ext.getCmp('TFpm').setVisible(false);
			Ext.getCmp('TFmt').setVisible(true);
			Ext.getCmp('TFst').setVisible(true);
			Ext.getCmp('TFTmbl').setVisible(true);
			Ext.getCmp('idexe').setVisible(true);
			Ext.getCmp('TFGrid').setVisible(true);
		}
		//console.log("seleksi event: "+n);
		this.updateErrorState(n);
		//console.log("seleksi event lagi: "+n);
	},
	
	
	remove: function() {
		var what, a = arguments, L = a.length, ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	},
	
	setNilai: function(rec)	{
		Ext.getCmp('save-task-fg-btn').setVisible(false);
		Ext.getCmp('update-rh').setVisible(true);
		
		//alert("masuk SetNilai: **"+rec.get('ket')+", pm: "+rec.get('tipeev'));
		var ev = parseInt(rec.get('idevent'));
		Ext.getCmp('fmEq').setValue(rec.get('nama')+" @"+rec.get('lok'));
		Ext.getCmp('fgid').setValue(rec.get('id'));
		Ext.getCmp('idtfevent').setValue(ev);
		Ext.getCmp('datedown').setValue(rec.get('downt'));
		Ext.getCmp('timedown').setValue(rec.get('downj'));
		Ext.getCmp('dateup').setValue(rec.get('upt'));
		Ext.getCmp('timeup').setValue(rec.get('upj'));
		Ext.getCmp('idexe').setValue(rec.get('exe'));
		Ext.getCmp('idtfket').setValue(rec.get('ket'));
		Ext.getCmp('datemulai').setValue(rec.get('startt'));
		Ext.getCmp('timemulai').setValue(rec.get('startj'));
		Ext.getCmp('dateselesai').setValue(rec.get('endt'));
		Ext.getCmp('timeselesai').setValue(rec.get('endj'));
		
		
		//return (rec.get('tipeev'));
	},
	
	ubahButton: function(x)	{
		//if (x==1)
			//Ext.getCmp('save-task-fg-btn').setText("Update");
	}
});
