/* Afrendy Bayu, 18Jan2014 */
Ext.define('rcm.model.SapCauseInfo', {
	extend: 'Ext.data.Model',
	requires:[
		'Ext.data.proxy.Ajax'
	],

	fields: ['id','noorder','equip','damage','cause','opart','mainwork','tipe','downtime','biaya'],
    proxy: {
		type: 'ajax',
		api: {
			read: 'php/sapcause/readinfo.php'
        },
        reader: {
            type: 'json',
            root: 'sapcause',
            messageProperty: 'message'
        }
    }
});
