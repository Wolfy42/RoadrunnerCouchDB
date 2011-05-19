function(keys, values) {
	
	var result;
	var firstTimestamp;
	
	var currentTimestamp;
	var currentDoc;
	
	for (var i in values)  {
		currentDoc = values[i];
		if (!firstTimestamp || firstTimestamp > currentDoc.timestamp)  {
			firstTimestamp = currentDoc.timestamp;
			result = currentDoc;
		}
	}
	return currentDoc;
}