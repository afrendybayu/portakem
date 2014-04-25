/* AfrendyBayu, 14Nov2013 */
//var fieldss = Ext.create('rcm.view.Util');
//console.log(fieldss);

Ext.define('rcm.model.SingleRunning', {
    extend: 'Ext.data.Model',
    requires:[
		'Ext.data.proxy.Ajax',
    ],
    
    fields: [
        { name: 'eq' },
        { name: 'rh' },
        { name: 'tgl' },
        { name: 'cat' },
    ],

    proxy: {
		type: 'ajax',
		api: {
			create: 'php/srunning/create.php',
			update: 'php/srunning/update.php',
			destroy: 'php/srunning/delete.php'
        },
        reader: {
            type: 'json',
            root: 'srunning',
            messageProperty: 'message'
        }
    }
	//*/
});
