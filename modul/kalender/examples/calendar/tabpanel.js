/*!
 * Extensible 1.5.2
 * Copyright(c) 2010-2013 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.Loader.setConfig({
    //enabled: true,
    //disableCaching: false,
    paths: {
        "Extensible": "../../src",
        "Extensible.example": ".."
    }
});
Ext.require([
    'Ext.TabPanel',
    'Extensible.calendar.data.MemoryEventStore',
    'Extensible.calendar.CalendarPanel',
    'Extensible.example.calendar.data.Events'
]);

Ext.onReady(function(){
    
    var eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
        // defined in ../data/Events.js
        data: Ext.create('Extensible.example.calendar.data.Events')
    });

    Ext.create('Ext.TabPanel', {
        //renderTo: 'tabpanel',
        renderTo: document.body,
        width: 700,
        height: 500,
        activeTab: 1,
        items: [{
				title: 'General Info',
				contentEl: 'general-tab',
				bodyStyle: 'padding: 20px;'
			}, {
				xtype: 'extensible.calendarpanel',
				title: 'Calendar',
				eventStore: eventStore,
				width: 700,
				height: 500,
				activeItem: 4,
				// this is a good idea since we are in a TabPanel and we don't want
				// the user switching tabs on us while we are editing an event:
				editModal: true
			}]
    });
});
