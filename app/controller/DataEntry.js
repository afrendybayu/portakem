/* AfrendyBayu,12Nov2013 */

Ext.define('rcm.controller.DataEntry', {
    extend: 'Ext.app.Controller',

    views: [
		'AppHeader',
		'Navigation',
		'Content',
		'Tanggalan',
		'Util',

        'dataentry.DaftarGagal',
        'dataentry.ExcelGrid',
        'dataentry.FormGagal',
        'dataentry.TabForm',
        'dataentry.IsiTabForm',
        
        'laporan.Chart',
        'laporan.UploadFile',
        'laporan.SapCause',
        'laporan.SapDamage',
        'laporan.SapOPart',
        'laporan.GridCause',
        'laporan.GridCauseInfo',
        'laporan.WOComp',
        'laporan.EPO',

        'lapobama.AvReUnit',
        'lapobama.AvReChart',
        'lapobama.Av2Thn',
        'lapobama.AvHome',
        'lapobama.SpeedoAv',
        'lapobama.AvGroup',
        'lapobama.ReHome',
        
        'utama.HoChart','utama.HoSpeedo',
        'utama.HoPie','utama.HoHistori',
        'utama.GridWO','utama.GridOrderC',
        
        'rcm.view.konfig.Nav'
    ],
    
    models: ['DaftarGagal','RunningHour','Hirarki',
		'Cause','OPart','Equip','FMode','Event','Aksi','PM',
		'SapCause','SapDamage','SapOPart',
		'SapCauseInfo',
		'AvReUnit','AvHome','ReHome','AvGroup','AvSpeedo',
    ],

    stores: [
		'SpAvGcUt','SpAvGsUt','SpAvPmUt','SpReGcUt','SpReGsUt','SpRePmUt',
		'DaftarGagal','RunningHour','Hirarki',
		'Cause','FMode','OPart','Equip','Event','Aksi','PM',
		'SapCause','SapDamage','SapOPart',
		'SapCauseInfo','SapDamageInfo',
		'AvReUnit','AvHome','ReHome','AvGroup','AvSpeedo','ReSpeedo',
		'HoTeco','HoMan','HoOrderC',
		'SapEPO',
		'ConMon','ConMonUnit'
		
    ],

	refs: [{
		ref: 'taskNav',
		selector: 'taskNav'
	},{
		ref: 'taskBlnAv',
		selector: 'taskBlnAv'
	},{
		ref: 'tAv2Thn',
		selector: 'tAv2Thn'
	},{
		ref: 'tAvHome',
		selector: 'tAvHome'
	},{
		ref: 'tReHome',
		selector: 'tReHome'
	},{
		ref: 'tAvGroup',
		selector: 'tAvGroup'
	},{
		ref: 'tAvSpeedo',
		selector: 'tAvSpeedo'
	},{
		ref: 'tAvReChart',
		selector: 'tAvReChart'
	},{
		ref: 'taskExcelGrid',
		selector: 'taskExcelGrid'
	},{
		ref: 'taskTanggalan',
		selector: 'taskTanggalan'
	},{
		ref: 'taskFormGagal',
		selector: 'taskFormGagal',
		xtype: 'taskFormGagal',
		autoCreate: true
	},{
		ref: 'taskDaftarGagal',
		selector: 'taskDaftarGagal',
		xtype: 'taskDaftarGagal',
		autoCreate: true
	},{
		ref: 'taskIsiFormGagal',
		selector: 'taskIsiFormGagal',
		xtype: 'taskIsiFormGagal',
		autoCreate: true
	},{
		ref: 'taskGridCause',
		selector: 'taskGridCause',
		xtype: 'taskGridCause',
		autoCreate: true
	},{
		ref: 'causechart',
		selector: 'causechart',
		xtype: 'causechart',
		autoCreate: true
    }],

	init: function() {
		var me = this;
        me.control({
			'taskNav': {
				hirUAvRe: me.hirUnitAvRe,
			},
			'tAvHome': {
				AvHomeCl: me.AvHomeClick,
			},
			'tReHome': {
				ReHomeCl: me.AvHomeClick,
			},
			'tAvGroup': {
				AvGroupCl: me.AvGroupClick,
			},
			'taskExcelGrid': {
				recordedit: me.updateGrid,
				EqClick: me.equipClick
				//specialkey: me.handleSpecialKey,
			},
			'taskIsiFormGagal': {
				plhEquipGagal: me.pilihEqClick,
				plhOPartGagal: me.pilihOPartClick,
				plhFMEA: me.pilihGridFMEA,
				plhModeGagal: me.pilihModeClick,
				plhCauseGagal: me.pilihCauseClick,
				plhAksiGagal: me.pilihAksiClick,
				plhEventGagalXY: me.pilihEventGagalXY
			},
			'taskDaftarGagal': {
				editDGClick: me.pilihEditDGClick,
				hapusDGClick: me.pilihHapusDGClick
			},
			'taskTanggalan': {
				klikKalender: me.KalenderClick
			},
			'#delete-task-btn': {
				click: me.handleDeleteClick
			},
			'#cancel-task-fg-btn': {
				click: me.hideFormGagal
			},
			'#save-task-fg-btn': {
				click: me.simpanGagalClick
			},
			'#tambah-fmea-btn': {
				click: me.tambahFMEAClick
			},
			'#samadown-fmea-btn': {
				click: me.samadownFMEAClick
			},
			'#samarun-fmea-btn': {
				click: me.samarunFMEAClick
			},
			'taskGridCause': {
				gridCauseFilter: me.grafikCauseClick,
				clrChartCause: me.grafikCauseClear
			},
			'causechart': {
				chartFilterCause: me.grafikCauseClick
			}
        });
    },

	AvHomeClick: function(d, nama)	{
		this.getAvGroupStore().load({ params:{gr:d.x} });
		this.getTAvGroup().setTitle('Availability & Reliability');
		this.getTAvGroup().setSubTitle(nama+" "+d.series.name);
		this.getTAvGroup().waktu = d.series.name;
	},
	AvGroupClick: function(d,nama) 	{
		var plh=this.getAvGroupStore().getAt(d.point.x).data,
			wkt=this.getTAvGroup().waktu;
		Ext.getCmp('iflAvRe').setText(plh.nama+", id:"+plh.id+", w: "+wkt);
		this.getTAvSpeedo().chartConfig.min = rcm.view.Util.Ubb(plh.av);
		this.getAvSpeedoStore().getAt(0).set('av',plh.av);
		this.getReSpeedoStore().getAt(0).set('av',plh.re);
		this.getTAvSpeedo().setTitle(plh.kode);
		this.getTAvSpeedo().setSubTitle("Availability "+wkt);
		this.getAvReUnitStore().load({ params:{tgl:wkt, eq:plh.id} });
		//this.getTAvReChart().items.items[1].items.items[0].items.items[0].setTitle('Reliability '+wkt);

		var sp  = this.getTAvReChart().items.items[0].items.items[1],
			sp2 = sp.items.items[1].items.items[1],
			sp3 = sp.items.items[2];
		sp2.setTitle(plh.kode);
		sp2.setSubTitle('Reliability '+wkt);
		
		var jdl2 = rcm.view.Util.Ujdl2(wkt);
		sp3.items.items[0].setTitle("Availability "+jdl2);
		sp3.items.items[1].setTitle("Reliability "+jdl2);
	},

	hirUnitAvRe: function(a)	{
		var tab=rcmSettings.tab.split("_");
		if ((tab[0].localeCompare("tu")==0) && (tab[1]=='re') && (a.unit>0))	{
			Ext.getCmp('iflAvRe').setText(a.text);
			var wkt=Ext.getCmp('iblnAvReU').getValue();
			this.getAvReUnitStore().load({ params:{tgl:wkt, eq:a.id} });
			
			this.getTAvReChart().items.items[0].items.items[0].items.items[0].setTitle('Availability '+rcm.view.Util.U1th(wkt));
			this.getTAvReChart().items.items[1].items.items[0].items.items[0].setTitle('Reliability '+rcm.view.Util.U1th(wkt));
			//rcmSettings.bongkar = this.getTAvReChart().items.items[1].items.items[1].items.items[0];
			this.getTAv2Thn().items.items[0].setTitle('Avalaibility '+rcm.view.Util.U2th(wkt));
			this.getTAvReChart().items.items[1].items.items[1].items.items[0].setTitle(a.text);
			this.getTAvReChart().items.items[1].items.items[1].items.items[0].setSubTitle('Availability '+rcm.view.Util.Uspeedo(wkt));
			//this.getTAv2Thn().items.items[0].setTitle('Avalaibility '+rcm.view.Util.U1th(wkt));
		}
	},

    grafikCauseClear: function()	{
		var tab=rcmSettings.tsp.split("_");
		if ((tab[0].localeCompare("ts")==0) && (tab[1]=='ca'))	{
			this.getSapCauseInfoStore().clearFilter();
		} else if ((tab[0].localeCompare("ts")==0) && (tab[1]=='da'))	{
			this.getSapDamageInfoStore().clearFilter();
		}
		
	},
	
    grafikCauseClick: function(n)	{
		if (n.param=="dam")	{
			this.getSapDamageInfoStore().clearFilter(true);
			this.getSapDamageInfoStore().filter('damage',n.kode);
		} else if (n.param=="cau")	{
			this.getSapCauseInfoStore().clearFilter(true);
			this.getSapCauseInfoStore().filter('cause',n.kode);
		}
		//*/
	},

	ubahFieldRH: function()	{
		this.getRunningHourModel().setFields(rcm.view.Util.Ublntgl());
	},

	onLaunch: function() {
		
        //var RunningStore = this.getRunningHourStore();
        //RunningStore.load({
		//	callback: this.onRunningLoad,
		//	scope: this
        //});
        //*/
        Ext.apply(Ext.form.field.VTypes, {
			daterange: function(val, field) {
				var date = field.parseDate(val);

				if (!date) {
					return false;
				}
				if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
					var start = field.up('form').down('#' + field.startDateField);
					console.log("date bawah diubah");
					
					start.setMaxValue(date);
					start.validate();
					this.dateRangeMax = date;
				}
				else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
					var end = field.up('form').down('#' + field.endDateField);
					
					end.setMinValue(date);
					end.validate();
					this.dateRangeMin = date;
				}
				return true;
			},
			daterangeText: 'Start date must be less than end date',
			timerange: function(val, field)	{
				var time = field.parseDate(val);
				if(!time){
					return;
				}
				if (field.startTimeField && (!this.timeRangeMax || (time.getTime() != this.timeRangeMax.getTime()))) {
					var start = field.up('form').down('#' + field.startTimeField);
					//start.maxValue = time.getHours()+":"+time.getMinutes();
					//start.maxValue = time;
					start.validate();
					this.timeRangeMax = time;
				} 
				else if (field.endTimeField && (!this.timeRangeMin || (time.getTime() != this.timeRangeMin.getTime()))) {
					var endtime = field.up('form').down('#' + field.endTimeField);
					var sttdate = field.up('form').down('#' + field.startDateField);
					var enddate = field.up('form').down('#' + field.endDateField);
					
					//var sttdate = Ext.getCmp(field.startDateField);
					//var enddate = Ext.getCmp(field.endDateField);
					
					rcmSettings.bongkar = sttdate;
				   // rcmSettings.asa = enddate.getValue();
					
					
					console.log("start date: "+sttdate.getValue()+", stopdate: "+enddate.getValue());
					if (sttdate.getValue().getTime() === enddate.getValue().getTime())	{
						console.log(">>>>>>>>>>>>> waktu SAMA");
						endtime.setMinValue(time);
					} else {
						console.log(">>>>>>>>>>>>>  beda");
						endtime.setMinValue("00:00");
					}
					//console.log("jam: "+time.getHours()+", menit: "+time.getMinutes());
					//var jam = time.getHours()+":"+time.getMinutes();

					endtime.validate();
					this.timeRangeMin = time;
				}
				return true;
			},
			timerangeText: 'Start Time must be less than end time',
		});
		this.ubahFieldRH();
        console.log("ini muncul: onLaunch");
    },
    
    onDaftarGagalLoad: function() {
		console.log("masuk callback onDaftarGagalLoad");
    },
    
	onRunningLoad: function() {
		console.log("masuk callback onRunningLoad");
		//var stationsList = this.getDaftarGagalList();
		//console.log("masuk callback onStationsLoad ..."+stationsList);
        //stationsList.getSelectionModel().select(0);
        //console.log("selesai callback onStationsLoad ");
    },
    
    handleSpecialKey: function(field, e) {
		console.log("masuk handleSpecialKey");
        if(e.getKey() === e.ENTER) {
			alert("dienter"+field.value)
        }
    },
    
    tambahFMEAClick: function() {
		var rec = new rcm.model.Event({
            eql:'',ideql:'',opart:'',idopart:'',mode:'',idmode:'',cause:'',idcause:'',aksi:'',idaksi:''
        });
        this.getEventStore().insert(0, rec);
		//edit.startEditByPosition({ row: 0, column: 1 });
	},

    samadownFMEAClick: function() {
		var taskFormGagal = this.getTaskFormGagal(),
            form = taskFormGagal.down('form').getForm();
		var	dd = this.getDate(form.findField('datedown').getValue()), 
			td = this.getTime(form.findField('timedown').getValue());
		//alert(rcm.view.Util.Udate(dd));
		form.findField('datemulai').setValue(rcm.view.Util.Udate(dd));
		form.findField('timemulai').setValue(rcm.view.Util.Utime(td));
	},
    
    samarunFMEAClick: function() {
		var taskFormGagal = this.getTaskFormGagal(),
            form = taskFormGagal.down('form').getForm();
		var	dd = this.getDate(form.findField('dateup').getValue()), 
			td = this.getTime(form.findField('timeup').getValue());
		//alert(rcm.view.Util.Udate(dd));
		form.findField('dateselesai').setValue(rcm.view.Util.Udate(dd));
		form.findField('timeselesai').setValue(rcm.view.Util.Utime(td));
	},
    
    simpanRH: function (task)	{
		var me = this,
			sR = Ext.create('rcm.model.SingleRunning');
		sR.set('eq', rcmSettings.eqx);	sR.set('cat', rcmSettings.cat);
		sR.set('rh', task.value);		sR.set('tgl', task.field);

		sR.save({
            success: function(task, operation) {
				console.log(" task sukses setelah sukses ");
				me.getRunningHourStore().reload();
            },
            failure: function(task, operation) {
                var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                Ext.MessageBox.show({
                    title: 'Update Task Failed',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        });
	},
    
	pilihEditDGClick: function(grid, row, col, column, e)	{
		var me = this,
            taskFormGagal = me.getTaskFormGagal(),
			form =  taskFormGagal.down('form').getForm(),
			sDG = Ext.create('rcm.model.DaftarGagal');
		
		taskFormGagal.show();
	},
	
	refreshRH: function()	{
		console.log("----- mulai refreshRHr");
		me.getRunningHourStore().reload();
		console.log("----- selesai refreshRHr");
	},
	
	pilihHapusDGClick: function(task, successCallback)	{	// grid, row, col, column, e
		//me.getRunningHourStore().reload();
		var ee=task.get('event')+" "+task.get('nama');
		Ext.Msg.show({
            title: ee,
            msg: 'Hapus Kejadian '+ee,
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
                    task.destroy({
                        success: function(task, operation) {
							console.log("----- mulai running hour");
							//me.getDaftarGagalStore().remove(task);
							//me.refreshRH();
							//this.getRunningHourStore().reload();
							
                        },
                        failure: function(task, operation) {
                            var error = operation.getError(),
                                msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                            Ext.MessageBox.show({
                                title: 'Hapus Kejadian Gagal',
                                msg: msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    });
                }
            }
        });
        me.getRunningHourStore().reload();
        console.log("----- selesai running hour");
	},
    
    pilihEventGagalXY: function(n)	{
		var me = this,taskFormGagal = me.getTaskFormGagal();
		if (n=='1')	taskFormGagal.setWidth(500);
		else if  (n=='2')		taskFormGagal.setWidth(700);
		else	taskFormGagal.setWidth(900);
	},
    
    pilihEqClick: function(dd, drow) {
		//console.log("Controller DataEntry pilih Eq --> cat "+dd.data.cat+" id: "+drow.ideq);
		//this.getEventStore().set('ideql',drow.ideq);
		this.getOPartStore().clearFilter(true);
		this.getOPartStore().filter('cat',dd.data.cat);
		
		this.getFModeStore().clearFilter(true);
		this.getFModeStore().filter('cat',dd.data.cat);
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('ideql',drow.ideq);
		rec.set('cat',dd.data.cat);
		//rcmSettings.bongkar = this.getEventStore().getRange();
	},
	
	pilihOPartClick: function(dd, drow)	{
		//console.log("Controller DataEntry pilihOPartClick row: "+drow.row);
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('idopart',drow.opart);
	},
	
	pilihModeClick: function(dd, drow)	{
		//console.log("Controller DataEntry pilihModeClick row: "+drow.row);
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('idmode',drow.kode);
	},
	
	pilihCauseClick: function(dd, drow)	{
		//console.log("Controller DataEntry pilihCauseClick row: "+drow.row);
		//var alertText = ' ';   for (property in drow) { alertText += property + ':' + drow[property]+'; ';   }
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('idcause',drow.cause);
	}, 
	
	pilihAksiClick: function(dd, drow)	{
		//console.log("Controller DataEntry pilihAksiClick row: "+drow.row);
		//var alertText = ' ';   for (property in drow) { alertText += property + ':' + drow[property]+'; ';   }
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('idaksi',drow.aksi);
	}, 
	
	pilihGridFMEA: function(row)	{
		console.log("Controller DataEntry pilihGridFMEA row: ");
		//var rec = this.getEventStore().getRange()[row];
		//this.getOPartStore().clearFilter(true);
		//this.getOPartStore().filter('cat',row.data.cat);
		//this.getFModeStore().clearFilter(true);
		//this.getFModeStore().filter('cat',row.data.cat);
	},
    
    updateGrid: function(view, e) {
        var me=this, tv=e.value; drow=this.getRunningHourStore().getAt(e.rowIdx);
        //var at=e.row;
        //rcmSettings.asa = this.getRunningHourStore().getAt(e.rowIdx).data;
        //var alertText = ' ';   for (property in e) { alertText += property + ':' + e[property]+'; ';   }
		console.log("updateGrid isi: "+tv);

		if ((tv=='')||(tv==e.originalValue))	{		//||
			console.log("updateGrid numpang lewat");
		} else if (tv==e.originalValue)	{
			console.log("update nilai, sudah beda");
		} else if ((tv==24)||(tv=="24:00"))	{
			this.simpanRH(e);
		} else {
			this.buildFormGagal(e);
		}
	},
	
	equipClick: function(catx)	{
		//console.log("diklik: "+rcmSettings.cat+" tgl: "+rcmSettings.tgl);
		var t;
		if (rcmSettings.tgl=='0')	t=new Date();
		else t = new Date(rcmSettings.tgl);
		var pt = ''+(t.getYear()-100)+rcm.view.Util.Upad(t.getMonth()+1)+rcm.view.Util.Upad(t.getDate())+'';
		Ext.suspendLayouts();
		this.getTaskExcelGrid().reconfigure(this.getRunningHourStore().load({ params:{tgl:pt, cat:catx} }), rcm.view.Util.UxcolGrid());
		Ext.resumeLayouts(true);
	},
	
	buildFormGagal: function(e)	{
		var me = this,
            taskFormGagal = me.getTaskFormGagal(),
			form =  taskFormGagal.down('form').getForm(),
			sDG = Ext.create('rcm.model.DaftarGagal'),
			dRHs = this.getRunningHourStore().getAt(e.rowIdx).data,
			dRHsJ = dRHs.eq+" @"+dRHs.Lokasi;
		
		sDG.set('eq',rcmSettings.eqx); sDG.set('nama',dRHsJ); 
		sDG.set('downt',rcmSettings.tgl); //sDG.set('server','rcmSettings.server');
		taskFormGagal.down('form').getForm().reset();
		
		form.findField('eq').setValue(dRHsJ);
		form.findField('fgid').setValue(dRHs.id); 
		//console.log("sebelum show: buildFormGagal >> id: "+dRHs.id+", eq:"+dRHsJ);
		form.findField('datedown').setValue(rcmSettings.tgl);
		Ext.getCmp('TFTmbl').hide();
		Ext.getCmp('TFGrid').hide();
		Ext.getCmp('TFmt').hide();
		Ext.getCmp('TFst').hide();
		Ext.getCmp('TFpm').hide();
		taskFormGagal.down('form').loadRecord(sDG);
		taskFormGagal.setTitle('Form Notifikasi ' + dRHsJ);
		me.getEventStore().loadData([],false);
		taskFormGagal.setWidth(500);
		taskFormGagal.show();
		this.getEquipStore().load({ params:{unit:dRHs.id} });
		this.getOPartStore().load({ params:{unit:dRHs.id} });
		this.getFModeStore().load({ params:{unit:dRHs.id} });
		this.getPMStore().load({ params:{unit:dRHs.id} });
	},
	
	simpanGagalClick: function(button, e)	{
		console.log("simpan data FormGagal: "+rcmSettings.eqx);
		this.simpanFormGagal();
		this.getTaskFormGagal().close();
	},
	
	getDate: function (w) {
		var t = new Date(w);
		return t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();
	},

	getTime: function (w) {
		var t = new Date(w);
		return t.getHours()+':'+t.getMinutes();
	},
	
	simpanFormGagal: function()	{
		//console.log("simpan data simpanFormGagal: "+rcmSettings.eqx);
		var taskFormGagal = this.getTaskFormGagal(),
            windowEl = taskFormGagal.getEl(),
            form = taskFormGagal.down('form').getForm(),
            me = this,
            task = form.getRecord();

		var	id = form.findField('fgid').getValue(), eq = form.findField('eq'), 
			event = form.findField('tfevent').getValue(), tipeev = form.findField('tipepm').getValue(),
			ket = form.findField('tfket').getValue(), exe = form.findField('exe').getValue(),
			dd = this.getDate(form.findField('datedown').getValue()), 
			td = this.getTime(form.findField('timedown').getValue()),
			dm = this.getDate(form.findField('datemulai').getValue()), 
			tm = this.getTime(form.findField('timemulai').getValue()),
			ds = this.getDate(form.findField('dateselesai').getValue()), 
			ts = this.getTime(form.findField('timeselesai').getValue()),
			du = this.getDate(form.findField('dateup').getValue()), 
			tu = this.getTime(form.findField('timeup').getValue());
		
		var rec = new rcm.model.DaftarGagal({
			id:'u'+id,downt:dd,downj:td,startt:dm,startj:tm,endt:ds,endj:ts,upt:du,upj:tu,
			event:event,tipeev:tipeev,ket:ket,exe:exe,server:rcmSettings.server
        });
        
        //*
        rec.save({
            success: function(respon, operation) {
				var resp = operation.request.scope.reader.jsonData["tasks"];
				var recx = me.getEventStore().getRange();
				if (event!=1)	{
					for (var i=0, len1=resp.length; i<len1; ++i) {
						for (var j=0,len2=recx.length; j<len2; ++j)	{
							if (recx[j].data.ideql==resp[i].eq)	{
								recx[j].set('iddown',resp[i].id);
							}
						}
					}
					me.getEventStore().sync();
					//me.getEventStore().removeAll();
				}
				me.getDaftarGagalStore().reload();
				me.getRunningHourStore().reload();
            },
            failure: function(task, operation) {
                var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                Ext.MessageBox.show({
                    title: 'Update Task Failed',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        });
	},
	
	suksesDG: function()	{
		//console.log("masuk suksesDG");
	},
	
	hideFormGagal: function() {
		this.getTaskFormGagal().close();
	},
	
	KalenderClick: function(dt)	{
		rcmSettings.tgl = dt;
		var tab=rcmSettings.tab.split("_");
		//alert("tab: "+tab[0]+", no: "+tab[1]);
		if ((tab[0].localeCompare("tu")==0) && (tab[1]==0))	{
			var t = new Date(dt);
			var pt = ''+(t.getYear()-100)+rcm.view.Util.Upad(t.getMonth()+1)+rcm.view.Util.Upad(t.getDate())+'';
			this.ubahFieldRH();

			Ext.suspendLayouts();
			this.getTaskExcelGrid().reconfigure(this.getRunningHourStore().load({ params:{tgl:pt, cat:rcmSettings.cat} }), rcm.view.Util.UxcolGrid());
			Ext.resumeLayouts(true);
		}
	}
});
