Ext.define('rcm.view.Content', {
    extend: 'Ext.tab.Panel',
    xtype: 'content',
	
	require: [
		'Ext.panel.Panel',
		'Extensible.calendar.data.MemoryEventStore',
		'Extensible.calendar.CalendarPanel',
		'Extensible.example.calendar.data.Events'
	],

    layout: {
        type: 'card',
        deferredRender: true
    },
	plain: true,
    autoScroll: true,
    activeTab: rcmSettings.tab,
    
    initComponent: function() {
		var me=this;
		me.items = [{
			id: 'tu_ho',
			title: 'Dashboard Home',
			icon: 'modul/icons/Dashboard.png',
			xtype: 'tHoChart',
		},{	
			id: 'tu_re',
			title: 'Reliability',
			icon: 'modul/icons/report.png',
			xtype: 'tAvReChart',
		},{
			id: 'tu_sap',
			title: 'SAP Report',
			icon: 'modul/icons/report_check.png',
			xtype: 'tabChart',
		},{
			id: 'tu_pr',
			title: 'Prestasi Mesin',
			icon: 'modul/icons/perform.png',
		},{
			id: 'tu_rh',
			title: 'Runnning Hour',
			icon: 'modul/icons/edit1.png',
			//layout: 'accordion',
			xtype: 'tabpanel',
			items: [{
				title: 'Data Running Hour',
				xtype: 'excelgrid',
				id: 'app-runninghour',
				//iconCls: 'icon-grid',
				icon: 'modul/icons/application_go.png'
			},{
				//layout: 'accordion',
				align: 'stretch',
				title: 'Daftar DownTime Unit',
				icon: 'modul/icons/grid.png',
				layout: {
					type: 'border'
				},
				items: [{
						xtype: 'daftarGagal',
						region: 'center',
						id: 'app-gagal',
						flex: 1,
					},{
						collapsible: true,
						split: true,
						minHeight: 300,
						maxHeight: 400,
						region: 'south',
						title: 'Info Detail DownTime',
						html: 'testing dulu',
						icon: 'modul/icons/more.png',
				}]
			/*
			},{
				id: 'tu_ag',
				title: 'Agenda & Aktivitas',
				icon: 'modul/icons/calender.png',
				
				xtype: 'extensible.calendarpanel',
				//eventStore: Ext.create('Extensible.calendar.data.MemoryEventStore', {
				//	data: Ext.create('Extensible.example.calendar.data.Events')
				//}),
			//*/
			}]
		},{
			id: 'tu_kf',
			title: 'Konfigurasi',
			icon: 'modul/icons/config.png',
			xtype: 'tabpanel',
			items: [{
				title: 'Hirarki dan Unit',
				xtype: 'taskNav',
				id: 'app-runninghour',
				//iconCls: 'icon-grid',
				icon: 'modul/icons/application_go.png'
			},{
				xtype: 'excelgrid',
				
			}]
		}];
		
		me.callParent(arguments);
		me.addEvents(
            /**
             * @event edit
             * Fires when a record is edited using the CellEditing plugin or the statuscolumn
             * @param {SimpleTasks.model.Task} task     The task record that was edited
             */
			//'recordedit'
        );
        this.on('tabchange', me.handleContentTab, this);
	},
	handleContentTab: function()	{
		rcmSettings.tab = this.getActiveTab().getId();
		var tab = this.getActiveTab();
		if (tab.getId()=="tTC")	{
			this.insert((this.items.length-1),{
				 title: 'Tab ' + (this.items.length), xtype: 'isiFormGagal'
			});
			this.setActiveTab(this.items.length-2);
		}
		
		console.log("tab: "+tab.title+", id: "+this.getActiveTab().getId()+" view/Content.js");
		console.log("tab: "+rcmSettings.tab);
	},
	
	TambahClick: function()	{
		console.log("tambah: ");
		rcmSettings.sas = this.getEl();//.getActiveTab();
		console.log("tab: "+rcmSettings.sas);
	},
	
	KurangClick: function()	{
		console.log("Kurang: ");
	}
})
