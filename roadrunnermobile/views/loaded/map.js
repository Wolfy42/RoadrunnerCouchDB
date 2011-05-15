function(doc) {
	if (doc.type && doc.logType && doc.type == 'log')  {
		if (doc.logType == 'LOAD' || doc.logType == 'UNLOAD')  {
			for (var i in doc.items)  {
				emit(doc.items[i], [doc.logType, doc.timestamp]);
			}
		}
	}
}
