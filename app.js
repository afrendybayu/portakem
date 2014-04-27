
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        "Extensible": "./modul/extensible-1.5.2/src/",
        "Extensible.example": "./modul/extensible-1.5.2/examples/",
        "Chart" : "./modul/Chart/"
    }
});

Ext.apply(Ext.form.field.VTypes, {
	daterange: function(val, field) {
		var date = field.parseDate(val);

		if (!date) {
			return false;
		}
		if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
			var start = field.up('form').down('#' + field.startDateField);
			start.setMaxValue(date);
			start.validate();
			this.dateRangeMax = date;
		}
		else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
			var end = field.up('form').down('#' + field.endDateField);
			end.setMinValue(date);
			end.validate();
			this.dateRangeMin = date;
		}
		return true;
	},
	daterangeText: 'Start date must be less than end date',
});

Ext.application({
    name: 'rcm',
    autoCreateViewport: true,

    controllers: [
		'DataEntry',
		'Laporan'
	],
    //models: ['DaftarGagal'],
    //stores: ['DaftarGagal'],
    //launch: function() {
	//	consolle.log("Launching rcm app");
    //}
});
