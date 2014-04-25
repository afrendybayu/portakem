Ext.define('rcm.view.Tanggalan', {
	extend: 'Ext.picker.Date',
	alias: 'widget.tanggalan',
    xtype: 'taskTanggalan',
	minHeight: 75,
	//height: 100,
	layout: 'fit',
	todayText : 'Hari ini',

//*
    initComponent: function() {
		var me=this;
		me.items=[{
				xtype: 'datepicker',
				id: 'app-nav-picker',
				cls: 'ext-cal-nav-picker',
			}];
		me.listeners= {
			'select': {
				fn: function(dp, dt){
					//console.log("Tanggalan.js select");
					this.fireEvent('klikKalender', dt);
				},
				scope: this
			}
		};
		me.callParent();
	}
});
