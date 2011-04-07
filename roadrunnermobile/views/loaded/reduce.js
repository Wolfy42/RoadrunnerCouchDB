function(keys, values) {
	
	var key;
	var item;
	var timestamp;
	var logType;
	
	var lastItem;
	var loadedItems = [];

	for(var i in keys) {
		
		key = keys[i];
		//key[1] is the _id of the log-Document
		item = key[0][0];
		timestamp = key[0][1];
		logType = key[0][2];
		
		if (!lastItem || lastItem != item)  {
			lastItem = item;
			if (logType == 'LOAD')  {
				loadedItems.push({'item':item, 'timestamp':timestamp});
			}
		}
	}

	return loadedItems;
}