/* AfrendyBayu 11Feb2014 */
Ext.define('rcm.model.ReHome', {
    extend: 'Ext.data.Model',
    requires:[
		'Ext.data.proxy.Ajax',
    ],
    fields: [ 'm',
				{ name:'re',type:'float' }],

    proxy: {
		type: 'ajax',
		api: {
			read: 'php/obafuncloc/rReHome.php'
        },
		reader: {
            type: 'json',
            root: 'rehome',
            messageProperty: 'message'
        }
    }
});
