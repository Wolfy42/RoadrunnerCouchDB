function(doc) {
	if (doc.type == 'log')  {
		if (doc.logType == 'POSSENSOR')  {
			var lat = doc.value.split(',')[0];
			var long = doc.value.split(',')[1];
			for (var i in doc.items)  {
				emit([doc.items[i],lat,long], {
					timestamp: doc.timestamp,
					lat: lat,
					long: long
				});
			}
		}
	}
}
