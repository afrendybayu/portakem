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
	//title: 'Hirarki',
	
	//*
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
				iconCls: 'tasks-new-folder',
				tooltip: 'New Folder'
			},{
				//iconCls: 'tasks-delete-folder',
				//id: 'delete-folder-btn',
				tooltip: 'Delete Folder'
		}]
	}],

    viewConfig: {
        plugins: {
            //ptype: 'treeviewdragdrop',
            ptype: 'tasksdragdrop',
            dragText: 'Drag to reorder',
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
            },{
                xtype: 'actioncolumn',
                width: 24,
                icon: './modul/icons/hapus.png',
                //iconCls: 'x-hidden',
                tooltip: 'Delete',
                handler: Ext.bind(me.handleDeleteClick, me)
            }
        ];
        me.tbar= [{
				xtype: 'component',
				html: '<b>Hirarki</b>'
			},'->',{
            /*
                text: 'Expand All',
                scope: this,
                handler: this.onExpandAllClick
            }, {
			//*/
                text: 'Collapse All',
                scope: this,
                handler: this.onCollapseAllClick
		}],
		
        me.addEvents(
			'listdrop','delListDrop'
		);
        
        me.callParent(arguments);
        me.on('beforeedit', me.handleBeforeEdit, me);
        me.relayEvents(me.getView(), ['listdrop'])
	},
	//*/
    
    handleBeforeEdit: function(editingPlugin, e) {
		//alert("id: "+e.record.get('id'));
        return e.record.get('id') !== -1;
    },
    
    handleDeleteClick: function(gridView, rowIndex, colIndex, column, e) {
        this.fireEvent('delListDrop', gridView, rowIndex, colIndex, column, e);
    },
    
    refreshView: function() {
        this.getView().refresh();
    },
    
    onCollapseAllClick: function(){
        var toolbar = this.down('toolbar');
        
        toolbar.disable();
        this.collapseAll(function() {
            toolbar.enable();
        });
    },
    /*
    onExpandAllClick: function(){
        var me = this,
            toolbar = me.down('toolbar');
            
        me.getEl().mask('Expanding tree...');
        toolbar.disable();
                    
        this.expandAll(function() {
            me.getEl().unmask();
            toolbar.enable();
        });
    }
    //*/
});
