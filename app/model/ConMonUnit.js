/* Afrendy Bayu, 3Des2013 */
Ext.define('rcm.model.ConMonUnit', {
	extend: 'Ext.data.Model',
	requires:[
		'Ext.data.proxy.Ajax'
	],

	fields: [ 'thn',
		{ name:'gp',type:'int' },
		{ name:'gs',type:'int' },
		{ name:'pm',type:'int' }],
    proxy: {
		type: 'ajax',
		api: {
			read: 'php/conmon/rConMonUnit.php'
        },
        reader: {
            type: 'json',
            root: 'conmonunit',
            messageProperty: 'message'
        }
    }
});
