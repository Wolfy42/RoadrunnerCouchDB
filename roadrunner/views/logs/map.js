function(doc) {
	if (doc.type && doc.type == "log")  {
		for (var i in doc.items)  {
			
			emit([doc.items[i], doc.timestamp], {
				logType : doc.logType,
				timestamp : doc.timestamp,
				value : doc.value
			});
		}
	}
}
