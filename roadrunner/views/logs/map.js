function(doc) {
	if (doc.type && doc.type == "log")  {
		emit([doc.item, doc.timestamp], {
			logType : doc.logType,
			timestamp : doc.timestamp,
			description : doc.description
		});
	}
}
