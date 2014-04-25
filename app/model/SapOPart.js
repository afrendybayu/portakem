/* Afrendy Bayu, 18Jan2014 */
Ext.define('rcm.model.SapOPart', {
	extend: 'Ext.data.Model',
	requires:[
		'Ext.data.proxy.Ajax'
	],

	fields: [ 'nama', 'opart','jml' ],
    proxy: {
		type: 'ajax',
		api: {
			read: 'php/sapopart/read.php'
        },
        reader: {
            type: 'json',
            root: 'sapopart',
            messageProperty: 'message'
        }
    }
});
