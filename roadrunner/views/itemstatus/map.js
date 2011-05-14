function(doc) {
	if (doc.type)  {
		if (doc.type == 'item')  {
			emit(doc._id, {
				type : 'item'
			});
		}  else if (doc.type == 'log')  {
			var logType = doc.logType;
			if (logType == 'LOAD' || logType == 'UNLOAD' || logType == 'UNREGISTER')  {
				for (var i in doc.items)  {
					emit(doc.items[i],{
						type : 'log',
						logType : logType,
						timestamp : doc.timestamp,
						value : doc.value
					});
				}
			}
		}
	}
}
