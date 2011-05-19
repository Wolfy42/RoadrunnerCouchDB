function(doc) {
	if (doc.type && doc.type == "log")  {
		for (var i in doc.items)  {
			
			emit([doc.items[i], doc.timestamp], {
				logType : doc.logType,
				value : doc.value,
				timestamp : Math.floor(doc.timestamp / 1000),
			});
		}
	}
}
