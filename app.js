
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        "Extensible": "./modul/extensible-1.5.2/src/",
        "Extensible.example": "./modul/extensible-1.5.2/examples/",
        "Chart" : "./modul/Chart/"
    }
});


Ext.application({
    name: 'rcm',
    autoCreateViewport: true,

    controllers: [
		'DataEntry',
		'Konfig'
	],
    //models: ['DaftarGagal'],
    //stores: ['DaftarGagal'],
    //launch: function() {
	//	consolle.log("Launching rcm app");
    //}
});
