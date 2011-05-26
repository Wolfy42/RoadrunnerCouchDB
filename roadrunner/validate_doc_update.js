function (newDoc, oldDoc, userCtx ) {
	
	var admin = 'admin';
	var office = 'office';
	var driver = 'driver';
	
	//Admin is allowed to do anything
	if (userCtx.roles.indexOf(admin) != -1)  {
		return;
	}
	
	if (newDoc.type == 'log' && oldDoc != null)  {
		throw({forbidden : 'Logs are unchangeable!'});
	}
	if (oldDoc && oldDoc.type == 'log' && newDoc._deleted == true)  {
		throw({forbidden : 'Logs cannot be deleted!'});
	}
	if (newDoc._deleted && newDoc._deleted == true)  {
		if (userCtx.roles.indexOf(office) == -1)  {
			throw({forbidden : 'Insufficient rights!'});
		}
	}
}

