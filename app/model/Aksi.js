/* Afrendy Bayu, 3Des2013 */
Ext.define('rcm.model.Aksi', {
	extend: 'Ext.data.Model',
	requires:[
		'Ext.data.proxy.Ajax'
	],

	fields: [ 'ket','nama', 'id' ],
    proxy: {
		type: 'ajax',
		api: {
			read: 'php/aksi/read.php?'
        },
        reader: {
            type: 'json',
            root: 'aksi',
            messageProperty: 'message'
        }
    }
});
