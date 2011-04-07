function(doc) {
	if (doc.type && doc.logType && doc.type == 'log')  {
		if (doc.logType == 'LOAD' || doc.logType == 'UNLOAD')  {
			emit([doc.item, doc.timestamp, doc.logType], null);
		}
	}
}
