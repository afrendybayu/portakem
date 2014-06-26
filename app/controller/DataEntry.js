/* AfrendyBayu,12Nov2013 */

Ext.define('rcm.controller.DataEntry', {
    extend: 'Ext.app.Controller',

    views: [
		'Util',
		'AppHeader',
		'Navigation',
		'Content',
		'Tanggalan',
		'DataTip',

        'dataentry.DaftarGagal',
        'dataentry.ExcelGrid',
        'dataentry.FormGagal',
        //'dataentry.TabForm',
        'dataentry.IsiTabForm',
        'dataentry.PropGrid',
        'dataentry.DetailInfo',
        'dataentry.InfoFMEA',
        'dataentry.DetailInfo',
        'dataentry.BlnGagal',
        'dataentry.FMEAGrid',
        
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
        
        'Ext.ux.grid.FiltersFeature'
        
        //'konfig.Nav',
        //'konfig.DropZone'
    ],
    
    models: ['DaftarGagal','RunningHour','Hirarki',
		'Cause','OPart','Equip','FMode','Event','Aksi','PM',
		'SapCause','SapDamage','SapOPart', 'SapCauseInfo',
		'AvReUnit','AvHome','ReHome','AvGroup','AvSpeedo',
		//'DetailGagal'
    ],

    stores: [
		'SpAvGcUt','SpAvGsUt','SpAvPmUt','SpReGcUt','SpReGsUt','SpRePmUt',
		'DaftarGagal','RunningHour','Hirarki',
		'Cause','FMode','OPart','Equip','Event','Aksi','PM',
		'SapCause','SapDamage','SapOPart',
		'SapCauseInfo','SapDamageInfo',
		'AvReUnit','AvHome','ReHome','AvGroup','AvSpeedo','ReSpeedo',
		'HoTeco','HoMan','HoOrderC','SapEPO',
		'ConMon','ConMonUnit',
		'DetailGagal','EventInfo','Note','EventList'
		
    ],

	refs: [{
		ref: 'taskNav',
		selector: 'taskNav'
	/*
	},{
		ref: 'taskNavK',
		selector: 'taskNavK'
	//*/
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
	/*
	},{
		ref: 'taskFormGagal',
		selector: 'taskFormGagal'
	//*/
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
		ref: 'taskFMEAGrid',
		selector: 'taskFMEAGrid',
		xtype: 'taskFMEAGrid',
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
			/*
			'taskNavK': {
				listdrop: me.hirListDrop,
				delListDrop: me.delListDrop
			},
			//*/
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
				//plhFMEA: me.pilihGridFMEA,
				plhEventGagalXY: me.pilihEventGagalXY
			},
			'taskFMEAGrid': {
				plhFilterFMEA: me.pilihFMEAFilter,
				plhEquipGagal: me.pilihEqClick,
				plhOPartGagal: me.pilihOPartClick,
				plhModeGagal: me.pilihModeClick,
				plhCauseGagal: me.pilihCauseClick,
				plhAksiGagal: me.pilihAksiClick,
			},
			'taskDaftarGagal': {
				editDGClick: me.pilihEditDGClick,
				hapusDGClick: me.pilihHapusDGClick,
				infoDetailGagal: me.pilihInfoDetailGagalClick
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
			'#update-rh': {
				click: me.updateGagalClick
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
			'#btnCariDGx': {
				click: me.cariDaftarGagal
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

	AvHomeClick: function(d, nama, id)	{
		//console.log("group: "+id);
		this.getAvGroupStore().load({ params:{gr:id, tgl: d.series.name} });
		this.getTAvGroup().setTitle('Availability & Reliability');
		this.getTAvGroup().setSubTitle(nama+" "+d.series.name);
		this.getTAvGroup().waktu = d.series.name;
	},
	AvGroupClick: function(d,nama) 	{
		var plh=this.getAvGroupStore().getAt(d.point.x).data,
			wkt=this.getTAvGroup().waktu;
		//Ext.getCmp('iflAvRe').setText(plh.nama+", id:"+plh.id+", w: "+wkt);
		Ext.getCmp('iflAvRe').setText(plh.nama+", "+wkt);
		this.getTAvSpeedo().chartConfig.min = rcm.view.Util.Ubb(plh.av);
		this.getAvSpeedoStore().getAt(0).set('av',plh.av);
		this.getReSpeedoStore().getAt(0).set('av',plh.re);
		this.getTAvSpeedo().setTitle(plh.kode);
		this.getTAvSpeedo().setSubTitle("Availability "+wkt);
		this.getAvReUnitStore().load({ params:{tgl:wkt, eq:plh.id} });
		//this.getTAvReChart().items.items[1].items.items[0].items.items[0].setTitle('Reliability '+wkt);
		
		Ext.getCmp('spAvR').setTitle(plh.kode);
		Ext.getCmp('spAvR').setSubTitle("Availability "+wkt);
		
		Ext.getCmp('spReR').setTitle(plh.kode);
		Ext.getCmp('spReR').setSubTitle("Reliability "+wkt);
		
		Ext.getCmp('Av2Thn').setTitle("Availability "+plh.kode+" Annually");
		Ext.getCmp('Re2Thn').setTitle("Reliability "+plh.kode+" Annually");
		
		/*
		var sp  = this.getTAvReChart().items.items[0].items.items[1],
			sp2 = sp.items.items[1].items.items[1],
			sp3 = sp.items.items[2];
		//sp2.setTitle(plh.kode);
		//sp2.setSubTitle('Reliability '+wkt);
		
		var jdl2 = rcm.view.Util.Ujdl2(wkt); alert("jdl2: "+jdl2);
		//Ext.getCmp('spAvR').setTitle("Availability "+jdl2);
		sp3.items.items[0].setTitle("Availability "+jdl2);
		sp3.items.items[1].setTitle("Reliability "+jdl2);
		//*/
	},
	
	cariDaftarGagal: function()	{
		//alert(Ext.getCmp("iblnDG").getValue());
		this.getDaftarGagalStore().load({ params:{ tgl:Ext.getCmp("iblnDG").getValue() } });
	},

	hirUnitAvRe: function(a)	{
		var tab=rcmSettings.tab.split("_");
		if ((tab[0].localeCompare("tu")==0) && (tab[1]=='re') && (a.unit>0))	{
			Ext.getCmp('iflAvRe').setText(a.text);
			var wkt=Ext.getCmp('iblnAvReU').getValue();
			this.getAvReUnitStore().load({ params:{tgl:wkt, eq:a.id} });
			
			//Ext.getCmp('spAvR').
			//this.getTAvReChart().items.items[0].items.items[0].items.items[0].setTitle('Availability '+rcm.view.Util.U1th(wkt));
			//this.getTAvReChart().items.items[1].items.items[0].items.items[0].setTitle('Reliability '+rcm.view.Util.U1th(wkt));
			//rcmSettings.bongkar = this.getTAvReChart().items.items[1].items.items[1].items.items[0];
			//this.getTAv2Thn().items.items[0].setTitle('Avalaibility '+rcm.view.Util.U2th(wkt));
			//this.getTAvReChart().items.items[1].items.items[1].items.items[0].setTitle(a.text);
			//this.getTAvReChart().items.items[1].items.items[1].items.items[0].setSubTitle('Availability '+rcm.view.Util.Uspeedo(wkt));
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

        //RunningStore.load({
		//	callback: this.onRunningLoad,
		//	scope: this
        //});
        //*/
        
        //Ext.QuickTips.init();
        var me = this;
        Ext.getCmp('htmleddet').setReadOnly(true);
        
        this.getEventListStore().load();
        //*
        Ext.apply(Ext.form.field.VTypes, {
			daterange: function(val, field) {
				var date = field.parseDate(val);

				if (!date) {
					return false;
				}
				if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
					var start = Ext.getCmp('datedown').getValue();
					var enddate = Ext.getCmp('dateup').getValue();
					
					//console.log("startd: "+Date.parse(start)+", enddate: "+Date.parse(enddate));
					
					var endtime = field.up('form').down('#' + field.endTimeField);
					if (Date.parse(start)==Date.parse(enddate))	{
						if (Ext.getCmp('timedown').getValue())	{
							var sttime = field.up('form').down('#' + field.startTimeField);
							endtime.setMinValue(sttime.getSubmitValue());
							//console.log("tgl up SAMA: "+sttime.getSubmitValue());
						}
					}
					else {
						endtime.setMinValue("00:00");
					}
					
					//start.setMaxValue(date);
					//start.validate();
					this.dateRangeMax = date;
					
					/*
					if (Date.parse(start.getValue()) == Date.parse(enddate.getValue()))	{
						//endtime.setMinValue(sttime.getSubmitValue());
						console.log("tgl up SAMA");
					}
					else {
						console.log("tgl up BEDAAAA, st: "+start.getValue()+", stop: "+enddate.getValue());
						//endtime.setMinValue("00:00");
					}
					
					
					start.setMaxValue(date);
					start.validate();
					this.dateRangeMax = date;
					//*/
				}
				else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
					//console.log("tanggal down");
		
					
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
					//console.log("pilih jam up");
					//var startt = Ext.getCmp('timedown').getValue();
					var start = field.up('form').down('#' + field.startTimeField);
					start.maxValue = time.getHours()+":"+time.getMinutes();
					
					//console.log("st max: "+start.maxValue);
					start.validate();
					this.timeRangeMax = time;
				}
				else if (field.endTimeField && (!this.timeRangeMin || (time.getTime() != this.timeRangeMin.getTime()))) {
					if (Ext.getCmp('dateup').getValue())	{
						//console.log("pilih jam down");
						
						var startd = Ext.getCmp('datedown').getValue();
						var endd = Ext.getCmp('dateup').getValue();
						var endtime = field.up('form').down('#' + field.endTimeField);
						if (Date.parse(startd)==Date.parse(endd))	{
							endtime.setMinValue(Ext.getCmp('timedown').getSubmitValue());
							//endtime.validate();
						}
						else {
							endtime.setMinValue("00:00");
						}					
					}
					
					
					//endtime.validate();
					//this.timeRangeMin = time;
				}
				/*
				//console.log("pencet: "+ val+", parse: "+field.parseDate(val));
				var time = field.parseDate(val);
				//console.log("aaa");
				if(!time){
					return;
				}
				//console.log("bbb");
				if (field.startTimeField && (!this.timeRangeMax || (time.getTime() != this.timeRangeMax.getTime()))) {
					var start = field.up('form').down('#' + field.startTimeField);
					//start.maxValue = time.getHours()+":"+time.getMinutes();
					//start.maxValue = time;
					//console.log("sebelah situ");
					start.validate();
					this.timeRangeMax = time;
				} 
				else if (field.endTimeField && (!this.timeRangeMin || (time.getTime() != this.timeRangeMin.getTime()))) {
					var endtime = field.up('form').down('#' + field.endTimeField);
					var sttdate = field.up('form').down('#' + field.startDateField);
					var enddate = field.up('form').down('#' + field.endDateField);
					
					//console.log("parse st: "+Date.parse(sttdate.getValue())+", en: "+Date.parse(enddate.getValue()));
					//console.log("start date: "+sttdate.getValue()+", stopdate: "+enddate.getValue());
					//console.log("sebelah sini");

					endtime.validate();
					this.timeRangeMin = time;
				}
				//*/
				return true;
			},
			timerangeText: 'Start Time must be less than end time',
		});
		//*/
		this.ubahFieldRH();
        //console.log("ini muncul: onLaunch");
    },

    onDaftarGagalLoad: function() {
		//console.log("masuk callback onDaftarGagalLoad");
		
    },
    
	onRunningLoad: function() {
		//console.log("masuk callback onRunningLoad");
		//var stationsList = this.getDaftarGagalList();
		//console.log("masuk callback onStationsLoad ..."+stationsList);
        //stationsList.getSelectionModel().select(0);
        //console.log("selesai callback onStationsLoad ");
    },
    
    handleSpecialKey: function(field, e) {
		//console.log("masuk handleSpecialKey");
        if(e.getKey() === e.ENTER) {
			alert("dienter"+field.value)
        }
    },
    
    tambahFMEAClick: function() {
		alert("tambahFMEAClick ");
		var rec = new rcm.model.Event({
            eql:'',ideql:'',opart:'',idopart:'',mode:'',idmode:'',cause:'',idcause:'',aksi:'',idaksi:''
        });
        this.getEventStore().insert(0, rec);
        this.getTaskFMEAGrid().getView().refresh();
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
				//console.log(" task sukses setelah sukses ");
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
    
    pilihInfoDetailGagalClick: function(id, ev)	{
		this.getDetailGagalStore().load({ params:{id:id} });
		// var jD = 
		this.getEventInfoStore().load({ 
			params:{id:id},
			scope: this,
			callback: function(rec, operation, success) {
				if (success) {
					rcmSettings.asa = rec;
				}
			}
		});
		
		//Ext.getCmp('htmleddet').getToolbar().hide();
		this.getNoteStore().load({ 
			params:{id:id},
			scope: this,
			callback: function(rec, operation, success) {
				if (success) {
					Ext.getCmp('htmleddet').setValue(rec[0].get('ket'));
				}
			}
		});
		//Ext.getCmp('htmleddet').setValue(n.getAt(0).get('ket'));
		//Ext.getCmp('htmleddet').setReadOnly(true)
		
		
		var html = Ext.getCmp('idinfofmea');
		if (ev>2)	{
			html.expand();
		}
		else 	{	//
			html.collapse();
		}
		//*/
		/*
		if (jD.getCount()>0)
			html.setTitle("Unit Failure List [ "+jD.getCount()+" failure ]");
		else 
			html.setTitle("Unit Failure List ");
		//*/
		
		Ext.getCmp('bgDetail').expand();
	},

	refreshRH: function()	{
		//console.log("----- mulai refreshRHr");
		this.getRunningHourStore().reload();
		//console.log("----- selesai refreshRHr");
	},
	
	pilihHapusDGClick: function(task, successCallback)	{	// grid, row, col, column, e
		//me.getRunningHourStore().reload();
		rcmSettings.ccc = this;
		var de = this;
		var ee=task.get('event')+" "+task.get('nama');
		Ext.Msg.show({
            title: ee,
            msg: 'Hapus Kejadian '+ee,
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
                    task.destroy({
                        success: function(task, operation) {
							//console.log("----- mulai running hour");
							de.refreshRH();
							de.getTaskDaftarGagal().getView().refresh();
							//rcmSettings.aaa = this;
							//console.log("----- sukses cek running hour");
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
	},
    
    pilihEventGagalXY: function(n)	{
		var me = this;
		var taskFormGagal = me.getTaskFormGagal();
		if (n=='1')	taskFormGagal.setWidth(500);
		else if  (n=='2')		taskFormGagal.setWidth(700);
		else	taskFormGagal.setWidth(970);
	},
    
    pilihFMEAFilter: function(n) {
		//console.log("pilihFMEAGagal r: "+n.row+", c: "+n.col+" cat: "+n.cat);
		
		var me=this;
		//rcmSettings.aaaa = me.getEventStore();
		//alert("pilihFMEAGagal "+me.getEventStore()+"<--");
		if (n.col==2)	{		// col 2 = OPart
			//console.log("masuk Opart");
			me.getOPartStore().clearFilter(true);
			me.getOPartStore().filter('cat',n.cat);
		}
		else if (n.col==3)	{	// col 3 = FMode
			//console.log("masuk FMode");
			me.getFModeStore().clearFilter(true);
			me.getFModeStore().filter('cat',n.cat);
		}
	},
    
    pilihEqClick: function(drow) {
		var me=this, rec=me.getEventStore().getRange()[drow.row];
		
		//console.log("ideq: "+drow.ideq+", cat: "+drow.cat+", row: "+drow.row);
		rec.set('ideql',drow.ideq);
		rec.set('cat',drow.cat);
		//rcmSettings.bongkar = this.getEventStore().getRange();
	},
	
	pilihOPartClick: function(dd, drow)	{
		//alert(rcmSettings.asa.row);
		//alert("Controller DataEntry pilihOPartClick row: "+drow.row);
		var rec = this.getEventStore().getRange()[drow.row];
		rec.set('idopart',drow.opart);
	},
	
	pilihModeClick: function(dd, drow)	{
		//console.log("Controller DataEntry pilihModeClick row: "+drow.row);
		var rec = this.getEventStore().getRange()[drow.row];
		//alert("idmode: "+drow.mode);
		rec.set('idmode',drow.mode);
		//rec.set('idmode',drow.kode);
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
		//console.log("Controller DataEntry pilihGridFMEA row: ");
		//var rec = this.getEventStore().getRange()[row];
		//this.getOPartStore().clearFilter(true);
		//this.getOPartStore().filter('cat',row.data.cat);
		//this.getFModeStore().clearFilter(true);
		//this.getFModeStore().filter('cat',row.data.cat);
	},
	
	updateAVReDash: function()	{
		var m = this;
		/*
		m.getSpAvGcUtStore().load();
		m.getSpAvGsUtStore().load();
		m.getSpAvPmUtStore().load();
		m.getSpRePmUtStore().load();
		m.getSpReGsUtStore().load();
		m.getSpReGcUtStore().load();
		//*/
		
		//var avgs = m.getSpAvGsUtStore().load();
		//alert(avgs.getAt(0).get('av'));
		//m.getSpAvGsUtStore().getAt(0).set('av',avgs.getAt(0).get('av'));
		//	this.getAvSpeedoStore().getAt(0).set('av',plh.av);
		//rcmSettings.asa = m.getSpAvGsUtStore();
		//m.getSpReGsUtStore().load();
	},
    
    updateGrid: function(view, e) {
        var me=this, tv=e.value; //drow=me.getRunningHourStore().getAt(e.rowIdx);
        //var at=e.row;
        //rcmSettings.asa = this.getRunningHourStore().getAt(e.rowIdx).data;
        //var alertText = ' ';   for (property in e) { alertText += property + ':' + e[property]+'; ';   }
		//console.log("updateGrid isi: "+tv);

		if ((tv=='')||(tv==e.originalValue))	{		//||
			//console.log("updateGrid numpang lewat");
		} else if (tv==e.originalValue)	{
			//console.log("update nilai, sudah beda");
		} else if ((tv==24)||(tv=="24:00"))	{
			this.simpanRH(e);
		} else if (tv=="69be4597788ab6909cdc1159afd9512a")	{
			
		} else {
			me.buildFormGagal(e);
		}
	},
	
	equipClick: function(catx)	{
		//console.log("diklik: "+rcmSettings.cat+" tgl: "+rcmSettings.tgl);
		var t;
		if (rcmSettings.tgl.localeCompare("0")==0)	{
			t=new Date();
			//console.log("masuk sini: "+ t);
		}
		else t = new Date(rcmSettings.tgl);
		//else t = rcmSettings.tgl;
		var pt = ''+(t.getYear()-100)+"-"+rcm.view.Util.Upad(t.getMonth()+1)+"-"+rcm.view.Util.Upad(t.getDate())+'';
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
		me.getEquipStore().load({ params:{unit:dRHs.id} });
		me.getOPartStore().load({ params:{unit:dRHs.id} });
		me.getFModeStore().load({ params:{unit:dRHs.id} });
		me.getPMStore().load({ params:{unit:dRHs.id} });
	},
	
	simpanGagalClick: function(button, e)	{
		//console.log("simpan data FormGagal: "+rcmSettings.eqx);
		this.simpanFormGagal();
		this.getTaskFormGagal().close();
		
		this.updateAVReDash();
	},

	pilihEditDGClick: function(rec)	{
		var me = this, ev = rec.get('idevent'), un = rec.get('eqid'),
            taskFormGagal = me.getTaskFormGagal();
		
		taskFormGagal.down('form').getForm().reset();
		
		me.getTaskIsiFormGagal().pilihEventG(rec.get('idevent'));
		me.getTaskIsiFormGagal().setNilai(rec);
		if (ev==2)	{
			me.getPMStore().load({ 
				params:{unit:un},
				scope: this,
				callback: function(dt, operation, success) {
					if (success) {
						Ext.getCmp('tipepm').setValue(rec.get('tipeev').split(","));
					}
				}
			});
			
		}
		
		if (ev>2)	{
			me.getEquipStore().load({ params:{unit:un} });
			me.getOPartStore().load({ params:{unit:un} });
			me.getFModeStore().load({ params:{unit:un} });
			me.getEventStore().load({ params:{down:rec.get('id')} });
		}
		//Ext.getCmp('idtfket').setValue('cobacoab');

		taskFormGagal.setTitle('Edit Form Notifikasi');
		taskFormGagal.show();
		//alert(a);
	},

	
	getDate: function (w) {
		var t = new Date(w);
		return t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();
	},

	getTime: function (w) {
		var t = new Date(w);
		return t.getHours()+':'+t.getMinutes();
	},
	
	ambilDataForm: function()	{
		var taskFormGagal = this.getTaskFormGagal(),
            windowEl = taskFormGagal.getEl(),
            form = taskFormGagal.down('form').getForm(),
            me = this,
            task = form.getRecord(),
            o = {};

		o.id = form.findField('fgid').getValue();
		o.eq = form.findField('eq'), cat = rcmSettings.cat;
		o.event = form.findField('tfevent').getValue();
		o.tipeev = form.findField('tipepm').getValue();
		o.ket = form.findField('tfket').getValue();
		o.exe = form.findField('exe').getValue();
		o.dd = this.getDate(form.findField('datedown').getValue()); 
		o.td = this.getTime(form.findField('timedown').getValue());
		o.dm = this.getDate(form.findField('datemulai').getValue()); 
		o.tm = this.getTime(form.findField('timemulai').getValue());
		o.ds = this.getDate(form.findField('dateselesai').getValue()); 
		o.ts = this.getTime(form.findField('timeselesai').getValue());
		o.du = this.getDate(form.findField('dateup').getValue()); 
		o.tu = this.getTime(form.findField('timeup').getValue());
		
		return o;
	},
	
	updateGagalClick: function()	{
		var me=this, o = me.ambilDataForm();
		/*
		alert("id:"+o.id+"\nevent:"+o.event+"\ndd: "+o.dd+"\ndt: "+o.td+"\ndm: "+o.dm+"\ndt: "+o.tm+
			"\nds:"+o.ds+"\nts:"+o.ts+"\ndu: "+o.du+"\ntu: "+o.tu+"\nevent: "+o.event+"\ntipeev: "+o.tipeev+
			"\nket:"+o.ket+"\nexe:"+o.exe+"\nserver: "+rcmSettings.server+"\ncat: "+rcmSettings.cat);
		//*/
		var rec = new rcm.model.DaftarGagal({ edit:1,
			id:o.id,downt:o.dd,downj:o.td,startt:o.dm,startj:o.tm,endt:o.ds,endj:o.ts,upt:o.du,upj:o.tu,
			event:o.event,tipeev:o.tipeev,ket:o.ket,exe:o.exe,server:rcmSettings.server,cat:rcmSettings.cat
        });
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
        
        
        //*
		if (o.event>2)	{
			this.getEventStore().save();
			//alert("event: "+o.event);
		}
        //*/
		me.getTaskFormGagal().close();
		me.updateAVReDash();
		//console.log("skalian update depan");
	},
	
	simpanFormGagal: function()	{
		//alert(this.getTaskIsiFormGagal().getCmp('save-task-fg-btn').getText());
		//console.log("simpan data simpanFormGagal: "+rcmSettings.eqx);
		var taskFormGagal = this.getTaskFormGagal(),
            windowEl = taskFormGagal.getEl(),
            form = taskFormGagal.down('form').getForm(),
            me = this,
            task = form.getRecord();

		var	id = form.findField('fgid').getValue(),
			eq = form.findField('eq'), cat = rcmSettings.cat,
			event = form.findField('tfevent').getValue(),
			tipeev = form.findField('tipepm').getValue(),
			ket = form.findField('tfket').getValue(),
			exe = form.findField('exe').getValue(),
			dd = this.getDate(form.findField('datedown').getValue()), 
			td = this.getTime(form.findField('timedown').getValue()),
			dm = this.getDate(form.findField('datemulai').getValue()), 
			tm = this.getTime(form.findField('timemulai').getValue()),
			ds = this.getDate(form.findField('dateselesai').getValue()), 
			ts = this.getTime(form.findField('timeselesai').getValue()),
			du = this.getDate(form.findField('dateup').getValue()), 
			tu = this.getTime(form.findField('timeup').getValue());
		
		
		//alert("fm: "+mode);
		//*
		var rec = new rcm.model.DaftarGagal({ edit:0,
			id:'u'+id,downt:dd,downj:td,startt:dm,startj:tm,endt:ds,endj:ts,upt:du,upj:tu,
			event:event,tipeev:tipeev,ket:ket,exe:exe,server:rcmSettings.server,cat:rcmSettings.cat
        });
        
        //*
        rec.save({				// update
            success: function(respon, operation) {
				var resp = operation.request.scope.reader.jsonData["tasks"];
				var recx = me.getEventStore().getRange();
				if (event>2)	{
					for (var i=0, len1=resp.length; i<len1; ++i) {
						for (var j=0,len2=recx.length; j<len2; ++j)	{
							if (recx[j].data.ideql==resp[i].eq)	{
								recx[j].set('iddown',resp[i].id);
							}
						}
					}
					console.log("masuk sini");
					me.getEventStore().sync({
						//*
						success: function()	{
							me.getDaftarGagalStore().reload();
							me.getRunningHourStore().reload();
							console.log("sukses getEventStore");
						},
						failure: function()	{
							me.getDaftarGagalStore().reload();
							me.getRunningHourStore().reload();
							console.log("gagal getEventStore");
						}
										
					});				// create ()
					//*/
					//me.getEventStore().removeAll();
					console.log("keluar selamat !!!");
				}
				else {
					me.getDaftarGagalStore().reload();
					me.getRunningHourStore().reload();
				}
				//me.getDaftarGagalStore().reload();
				//me.getRunningHourStore().reload();
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
                me.getDaftarGagalStore().reload();
				me.getRunningHourStore().reload();
            }
        });
        //*/
	},
	
	suksesDG: function()	{
		//console.log("masuk suksesDG");
	},
	
	hideFormGagal: function() {
		this.getTaskFormGagal().close();
		this.getRunningHourStore().reload();
	},
	
	KalenderClick: function(pt)	{
		rcmSettings.tgl = pt;
		var tab=rcmSettings.tab.split("_");
		//console.log("tab: "+tab[0]+", no: "+tab[1]);
		if ((tab[0].localeCompare("tu")==0) && (tab[1].localeCompare("rh")==0))	{
			this.ubahFieldRH();
			//*
			Ext.suspendLayouts();
			this.getTaskExcelGrid().reconfigure(this.getRunningHourStore().load({ params:{tgl:pt, cat:rcmSettings.cat} }), rcm.view.Util.UxcolGrid());
			rcmSettings.asa = this.getTaskExcelGrid();
			Ext.resumeLayouts(true);
			//*/
		}
	}
});
