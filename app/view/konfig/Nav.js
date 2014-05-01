Ext.define('rcm.view.konfig.Nav', {
    extend: 'Ext.tree.Panel',
    //alias: 'widget.taskNavK',
    xtype: 'taskNavK',
	requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.tree.plugin.TreeViewDragDrop',
        'Ext.grid.column.Action',
        'rcm.view.konfig.DragDrop'
    ],
    
    hideHeaders: true,
    //rootVisible: false,
    store: 'Hirarki',
	title: 'Hirarki',

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		items: [{
				iconCls: 'tasks-new-folder',
				//icon: 'modul/icons/new_folder.png',
				tooltip: 'Tambah Hirarki'
			},{
				iconCls: 'tasks-delete-folder',
				//id: 'delete-list-btn',
				tooltip: 'Hapus Hirarki'
			},{
				//iconCls: 'tasks-new-folder',
				tooltip: 'New Folder'
			},{
				//iconCls: 'tasks-delete-folder',
				//id: 'delete-folder-btn',
				tooltip: 'Delete Folder'
		}]
    },{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Expand All',
                handler: function(){
                    this.expandAll();
                }
            }, {
                text: 'Collapse All',
                handler: function(){
                    this.collapseAll();
                }
		}]
	}],

    viewConfig: {
        plugins: {
            //ptype: 'treeviewdragdrop',
            ptype: 'tasksdragdrop',
            //dragText: 'Drag to reorder',
            //ddGroup: 'Hirarki'
        },
        /*
        listeners: {       
			drop: function (node, data, overModel, dropPosition) {         
				alert('CHANGE');       
                        },         
                    }   
		}
		//*/
    },

    initComponent: function() {
        var me = this;
        me.plugins = [me.cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing')];
        me.columns = [{
				xtype: 'treecolumn',
                dataIndex: 'text',
                flex: 1,
                editor: {
                    xtype: 'textfield',
                    selectOnFocus: true,
                    allowOnlyWhitespace: false
                },
                //renderer: Ext.bind(me.renderName, me)
            },{
                xtype: 'actioncolumn',
                width: 24,
                icon: './modul/icons/hapus.png',
                //iconCls: 'x-hidden',
                tooltip: 'Delete',
                //handler: Ext.bind(me.handleDeleteClick, me)
            }
        ];
        me.addEvents(
			'listdrop'
		);
        
        me.callParent(arguments);
        me.on('beforeedit', me.handleBeforeEdit, me);
        
        
        /*
        view.on('beforedrop', function(node, data, overModel, dropPosition, dropHandlers) {
			// Defer the handling
			dropHandlers.wait = true;
			Ext.MessageBox.confirm('Drop', 'Are you sure', function(btn){
				if (btn === 'yes') {
					dropHandlers.processDrop();
				} else {
					dropHandlers.cancelDrop();
				}
			});
		});
		//*/
	},
	//*/
    
    handleBeforeEdit: function(editingPlugin, e) {
		rcmSettings.bongkar = e.record;
		//alert("id: "+e.record.get('id'));
        return e.record.get('id') !== -1;
    },
    
});
