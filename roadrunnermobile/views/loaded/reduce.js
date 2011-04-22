function(keys, values) {
	
	var value;
	var timestamp;
	
	var latestValue;
	var latestTimestamp;

	for (var i in values)  {
		
		value = values[i];
		timestamp = value[1];
		
		if (!latestTimestamp || latestTimestamp < timestamp)  {
			latestTimestamp = timestamp;
			latestValue = value;
		}  
	}	
	return latestValue;
}