Ext.define('rcm.view.konfig.Nav', {
    extend: 'Ext.tree.Panel',
    //alias: 'widget.taskNavK',
    xtype: 'taskNavK',
	requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.tree.plugin.TreeViewDragDrop',
        'Ext.grid.column.Action'
    ],
    
    hideHeaders: true,
    //rootVisible: false,
    store: 'Hirarki',
	title: 'Hirarki',

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		items: [{
				//iconCls: 'tasks-new-folder',
				icon: 'modul/icons/new_folder.png',
				tooltip: 'Tambah Hirarki'
			},{
				iconCls: 'tasks-delete-list',
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
    }],
	//*/
	/*
    viewConfig: {
        plugins: {
            //ptype: 'tasksdragdrop',
            //dragText: 'Drag to reorder',
            //ddGroup: 'task'
        }
    },
    //*/
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
        
        me.callParent(arguments);
	}
	
	/*
    items: [{
		xtype: 'treecolumn',
		dataIndex: 'id',
	}],
    listeners: {
        itemclick: function(s,r) {
			//this.fireEvent('hirUAvRe', r.data);
        }
    }
    //*/
});
