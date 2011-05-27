function(doc) {
	var logType;
	if (doc.type && doc.logType && doc.type == 'log')  {
		if (doc.logType == 'LOAD' || doc.logType == 'UNLOAD' || doc.logType == 'UNREGISTER')  {
			
			if (doc.logType == 'LOAD')  {
				logType = 'LOAD';
			}  else  {
				logType = 'UNLOAD';
			}
			for (var i in doc.items)  {
				emit(doc.items[i], [logType, doc.timestamp]);
			}
		}
	}
}
