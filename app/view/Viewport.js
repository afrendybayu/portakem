Ext.define('rcm.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
		'Chart.ux.Highcharts',
		'Chart.ux.Highcharts.Serie',
		'Chart.ux.Highcharts.SplineSerie',
		'Chart.ux.Highcharts.GaugeSerie',
		'Chart.ux.Highcharts.ColumnSerie',
		'Chart.ux.Highcharts.BarSerie',
		'Chart.ux.Highcharts.PieSerie'
    ],
    layout: 'border',

	dockedItems: [
		/*
		dock: 'left',
		title: 'South Sumatera Extension',
		icon: 'modul/icons/bullets.png',
		width: 210,
		minWidth:210,
		collapsed : true,
		collapsible: true,
		split: true,
		layout: {
            type: 'border'
        },

		items: [{
			region: 'center',
			xtype: 'taskNav',
			align: 'stretch',
			flex: 1,
		}, {
			align: 'stretch',
			region: 'south',
			xtype: 'tanggalan',
			height: 200,
		}]
		//*/
	],

    items: [{
	//*
		region: 'north',
        xtype: 'appHeader',
    }, {
		region: 'center',
		xtype: 'content'
	//*
	}, {
	
		region: 'west',
		//title: 'Navigasi',
		title: 'South Sumatera Extension',
		icon: 'modul/icons/bullets.png',
		width: 210,
		minWidth:210,
		collapsed : true,
		collapsible: true,
		split: true,
		layout: {
            type: 'border'
        },

		items: [{
			region: 'center',
			xtype: 'taskNav',
			align: 'stretch',
			flex: 1,
		}, {
			align: 'stretch',
			region: 'south',
			xtype: 'tanggalan',
			height: 200,
		}]
	//*/
    }]
});
