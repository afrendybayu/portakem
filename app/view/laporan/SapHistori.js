// afrendyBayu,15Feb2014 //
Ext.define('rcm.view.laporan.SapHistori', {
    xtype: 'tHistori',
	extend: 'Chart.ux.Highcharts',
	
	require: [
	
	],

	loadMask: true,
	dockedItems: [{
		xtype: 'taskBlnAv',
		dock: 'top'
    }],
	
	series : [{
			type: 'column',
			dataIndex: 'teco',
			name: 'Within',
			marker: {
               	lineWidth: 2,
               	lineColor: 'green',
			}
		},{
			type: 'column',
			dataIndex: 'open',
			name: 'Overdue',
			marker: {
               	lineWidth: 2,
               	lineColor: 'white',
               	//fillColor: 'white'
			}
		},{
			type: 'spline',
			dataIndex: 'persen',
			name: '% Past Due',
			yAxis: 1
	}],
	
	store: 'SapHistori',
	xField: 'bulan',
	
	initComponent: function() {
		var me=this;
		me.chartConfig = {
			chart: {
				type: 'column',
				zoomType: 'xy',
				animation : {
					duration: 1500,
					easing: 'swing'
				},
				backgroundColor: '#d9e9ef'
			},
			colors: ['#10ae3d', '#f32727', '#0000FF'],
			title : {
				text: 'Histori '+rcm.view.Util.U1th(),
				x: -50
			},
			xAxis : [{
				title : {
					text : 'Waktu',
				},
			}],
			yAxis : [{
				//max: 100,
				title : {
					text : '# Work Orders'
				},
				/*
				plotLines : [{
					value : 0,
					width : 1,
					color : '#808080'
				}]
				//*/
			},{
				max: 100,
				min: 0,
				title : {
					text : 'Persen [%]'
				},
				/*
				plotLines : [{
					value : 98,
					color : 'red',
					dashStyle: 'ShortDash',
					width : 2,
					zIndex: 100,
					label : {
						text : 'Compliance Target >95%'
					}
				}],
				//*/
				opposite: true
			}],
			plotOptions : {
				series : {
					animation : {
						duration : 1000,
						easing : 'swing'
					}
				}
			},
			tooltip : {
				formatter : function() {
					return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
				}
			},
			legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 10,
				borderWidth : 0
			},
			credits : {
				text : 'hc'
			}
		};
		me.callParent(arguments);
	}
});
