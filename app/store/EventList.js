/* AfrendyBayu 4Des2013 */
Ext.define('rcm.store.EventList', {
    extend: 'Ext.data.Store',
    model: 'rcm.model.EventList',
    requires: 'rcm.model.EventList',
    
    proxy: {
		type: 'ajax',
		url: 'php/event/read.php',
        reader: {
            type: 'json',
            root: 'event',
            messageProperty: 'message'
        }
    }
});
