/* AfrendyBayu, 14Nov2013 */
Ext.define('rcm.view.dataentry.FormGagal', {
	extend: 'Ext.window.Window',
	xtype: 'taskFormGagal',
	requires: [
		'Ext.tab.Panel',
		'rcm.view.dataentry.TabForm',
		'rcm.view.dataentry.IsiTabForm',
	],
	
	closeAction: 'hide',
	//modal: true,
	//width: 500,
	x:100,
	y:42,
	//height: 500,
	minWidth: 500,
	layout: 'fit',
	/*
	dockedItems: [{
		xtype: 'container',
		dock: 'bottom',
		layout: {
			type: 'hbox',
			align: 'middle'
		},
		padding: '10 10 5',
		items: [{
				xtype: 'button',
				formBind: true,
				text: 'Batal',
			},{
				xtype: 'button',
				formBind: true,
				disabled: true,
				text: 'Simpan',
				handler: function() {
					var form = this.up('form').getForm();
					form.submit({
						clientValidation: true,
						url: '',
                        success: function(form, action) {
                           //...
                        },
                        failure: function(form, action) {
                            //...
                        }
					});
				}
		}]
	}],
	//*/
	
	initComponent: function() {
		var me=this;
		/*
		me.buttons = [{
				text: 'Batal',
				id: 'cancel-task-fg-btn',
				icon: 'modul/icons/cross.gif',
			},
				'->'
			,{
				text: '<b>Simpan</b>',
				icon: 'modul/icons/savedisk.png',
				id: 'save-task-fg-btn',
				handler: function() {
					var i, dd;
					var tabx = Ext.getCmp('remove-this-tab');
					for(i=1; i<me.items.length; i++)	{
						//dd = me.remove();	//me.getId()
						rcmSettings.grid = me.getComponent("TF"+i);
						console.log("dihapus: "+dd+ ", id: ");
					}
				}
		}],
		//*/
        me.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            items: [{
				xtype: 'displayfield',
				name: 'eq',
				labelAlign: 'left',
				labelWidth: 120,
				fieldLabel: '<b>Function Location</b>',
			},{
				//xtype: 'tabFormGagal',
				xtype: 'isiFormGagal',
			
			},{
				xtype: 'hiddenfield',
				name: 'fgid',
				value: 'idhidden'
			}],
		}]
		me.callParent(arguments);
		
	}
});
