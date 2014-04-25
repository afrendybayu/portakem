/* Afrendy Bayu, 30Nov2013 */
Ext.define('rcm.view.dataentry.TabForm', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabFormGagal',
	
	require: [
		'rcm.view.dataentry.IsiTabForm',
		'Ext.form.FieldSet',
	],
	
	plain: true,

	initComponent: function() {
		var me=this;
		me.items = [{
				title: 'Event 1',
				xtype: 'isiFormGagal'
			},{
				id: 'tTF',
				icon: 'modul/icons/add.gif',
		}];
		me.buttons = [{
				text: 'Batal',
				id: 'cancel-task-fg-btn',
				icon: 'modul/icons/cross.gif',
			},
				'->'
			,{
			/*
				text: 'Tambah',
				id: 'add-task-fg-btn',
				icon: 'modul/icons/add.gif',
				handler: function() {
					console.log("tombol tambah ...");
					me.handleFGTab();
				}
			},{
			//*/
				text: '<b>Simpan</b>',
				icon: 'modul/icons/savedisk.png',
				id: 'save-task-fg-btn',
				handler: function() {
					console.log("tombol simpan ...Respon LELET hapus tab !!: "+me.items.length);
					var i, dd;
					var tabx = Ext.getCmp('remove-this-tab');
					for(i=1; i<me.items.length; i++)	{
						//dd = me.remove();	//me.getId()
						rcmSettings.grid = me.getComponent("TF"+i);
						console.log("dihapus: "+dd+ ", id: ");
					}
				}
			}]
		me.callParent(arguments);
		this.on('tabchange', me.handleFGTab, this);
	},
	
	handleFGTab: function()	{
		var tab = this.getActiveTab();
		if (tab.getId()=="tTF")	{
			this.insert((this.items.length-1),{
				title: 'Event ' + (this.items.length),
				closable: true,
				itemId: ('TF'+this.items.length),
				xtype: 'isiFormGagal'
			});
			this.setActiveTab(this.items.length-2);
		}
		
		console.log("tab: "+tab.title+", id: "+this.getId());
		
	}
});
