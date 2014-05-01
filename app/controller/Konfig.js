/* AfrendyBayu,3Jan2014 */

Ext.define('rcm.controller.Konfig', {
    extend: 'Ext.app.Controller',
    views: [
		'konfig.Nav',
    ],
    
    models: [
		'Hirarki'
	],

    stores: [
		'Hirarki'
    ],
    
    refs: [{
		ref: 'taskNavK',
		selector: 'taskNavK'
	}],

	init: function() {
		var me = this;
        me.control({
			'taskNavK': {
				listdrop: me.hirListDrop,
				delListDrop: me.delListDrop
			},
        });
    },
    
    hirListDrop: function(list, overList, position)	{
		var listsStore = this.getHirarkiStore();
		alert("dipindah: "+list.get('id')+", ovList: "+overList.get('id')+", posisi "+position);
		Ext.Msg.show({
            title: 'Hapus Hirarki Unit ?',
            msg: 'Serious lo ???<br/>Pindah hirarki Unit ?',
			buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
				}
			}
		});
	},
	
	deleteList: function(list) {
        var me = this,
            listTree = me.getTaskNavK();
            selModel = listTree.getSelectionModel(),
			listsStore = me.getHirarkiStore();
        //    filters, tasks, store;
		listName = list.get('text'),	//tasksStore = me.getTasksStore(),            
        Ext.Msg.show({
            title: 'Hapus Hirarki Unit ?',
            msg: 'Serious lo ???<br/>Are you sure you want to permanently delete the "' + listName + '" list and all its tasks?',
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
					
					list.parentNode.removeChild(list);
                    //alert("JOs");
                    //listsStore.sync();
                    /*
                    listsStore.sync({
                        success: function()	{
							alert("terhapus");
						},
                        failure: function(batch, options) {
                            var error = batch.exceptions[0].getError(),
                                msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                            Ext.MessageBox.show({
                                title: 'Delete List Failed',
                                msg: msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    });

                    // save the existing filters
                    /*
                    filters = tasksStore.filters.getRange(0, tasksStore.filters.getCount() - 1);
                    // clear the filters in the tasks store, we need to do this because tasksStore.queryBy only queries based on the current filter,
                    // but we need to query all lists in the store
                    tasksStore.clearFilter();
                    // recursively remove any tasks from the store that are associated with the list being deleted or any of its children.
                    (function deleteTasks(list) {
                        tasks = tasksStore.queryBy(function(task, id) {
                            return task.get('list_id') === list.get('id');
                        });
                        tasksStore.remove(tasks.getRange(0, tasks.getCount() - 1), !isLocal);

                        list.eachChild(function(child) {
                            deleteTasks(child);
                        });
                    })(list);
                    // reapply the filters
                    tasksStore.filter(filters);

                    // destroy the tree node on the server
                    list.parentNode.removeChild(list);
                    listsStore.sync({
                        failure: function(batch, options) {
                            var error = batch.exceptions[0].getError(),
                                msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                            Ext.MessageBox.show({
                                title: 'Delete List Failed',
                                msg: msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    });

                    if(isLocal) {
                        // only need to sync the tasks store when using local storage.
                        // when using an ajax proxy we will allow the server to handle deleting any tasks associated with the deleted list(s)
                        tasksStore.sync();
                    }
					//*/
                    // If there is no selection, or the selection no longer exists in the store (it was part of the deleted node(s))
                    // then select the "All Lists" root
                    /*
                    if (!selModel.hasSelection() || !listsStore.getNodeById(selModel.getSelection()[0].getId())) {
                        selModel.select(0);
                    }
                    //*/
                    // refresh the list view so the task counts will be accurate
                    //*/
                    
                    listTree.refreshView();
                }
            }
        });

    },
	
	delListDrop: function(view, rowIndex, colIndex, column, e)	{
        this.deleteList(view.getRecord(view.findTargetByEvent(e)));
	},
    
    
});
