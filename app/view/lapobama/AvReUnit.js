// afrendyBayu,26Jan2014 //
Ext.define('rcm.view.lapobama.AvReUnit', {
    xtype: 'tAvReUnitx',
	extend: 'Ext.panel.Panel',
	layout: 'fit',
	//border: 0,
	
	initComponent: function() {
		var me=this;
		me.items = [{
			xtype: 'highchart',

			series : [{
				type: 'column',
				dataIndex: 'av2014',
				name: 'av2014',
				showInLegend: false,
			},{
				type: 'spline',
				dataIndex: 'av2014',
				name: 'av2014',
				showInLegend: false,
				marker: {
                	lineWidth: 2,
                	lineColor: Highcharts.getOptions().colors[2],
                	fillColor: 'white'
                }
			}],
			store: 'AvReUnit',
			xField: 'm',

			chartConfig: {
				chart: {
					type: 'spline',
					zoomType: 'x',
					animation : {
						duration: 1500,
						easing: 'swing'
					}
				},
				title : {
					text: this.jdl,
				},
				xAxis : [{
					title : {
						text : 'Waktu',
					},
				}],
				yAxis : {
					max: 100,
					title : {
						text : 'Persen [%]'
					}
				},
				plotOptions : {
					series : {
						animation : {
							duration : 1000,
							easing : 'swing'
						}
					},
					column: {
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: Highcharts.getOptions().colors[3],
                            style: {
                                fontWeight: 'bold',
                            },
                            formatter: function() {
                                return this.y+'%';
                            }
                        },
					}
				},
				tooltip : {
					formatter : function() {
						return '<b>'+this.series.name+'</b><br/>'+this.x+': '+this.y+'%';
					}
				},
				credits : {
					text : 'hc'
				},
				legend : {
					layout : 'vertical',
					align : 'right',
					verticalAlign : 'top',
					x : -10,
					y : 100,
					borderWidth : 0
				}
			}
		}];
		me.callParent(arguments);
	}
});
