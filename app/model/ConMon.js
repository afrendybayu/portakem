/* Afrendy Bayu, 3Des2013 */
Ext.define('rcm.model.ConMon', {
	extend: 'Ext.data.Model',
	requires:[
		'Ext.data.proxy.Ajax'
	],

	fields: [ 'thn',
		{ name:'jml',type:'int' }],
    proxy: {
		type: 'ajax',
		api: {
			read: 'php/conmon/rConMon.php'
        },
        reader: {
            type: 'json',
            root: 'conmonth',
            messageProperty: 'message'
        }
    }
});
