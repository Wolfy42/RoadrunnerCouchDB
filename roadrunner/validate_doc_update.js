function (newDoc, oldDoc, userCtx ) {
	
	if (newDoc.type == 'log' && oldDoc != null)  {
		throw({forbidden : 'Logs are unchangeable!'});
	}
	if (oldDoc.type == 'log' && newDoc._deleted == true)  {
		throw({forbidden : 'Logs cannot be deleted!'});
	}
}

