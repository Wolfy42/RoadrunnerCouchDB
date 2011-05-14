function(keys, values) {
	
	var latestLog = null;
	var latestTimestamp = null;
	
	var log = null;
	var doc = null;
	var timestamp = null;
		
	for (var i in values)  {
		doc = values[i];
		if (doc.type == 'log')  {
			var timestamp = doc.timestamp;
			if (!latestTimestamp || latestTimestamp < timestamp)  {
				latestTimestamp = timestamp;
				latestLog = doc;
			}
		}
	}
	
	if (latestLog == null)  {
		log = {status : 'Registered'};
	}  else  {
		log = {
			timestamp : latestLog.timestamp,
			type : latestLog.type,
			value : latestLog.value,
			logType : latestLog.logType
		};
		if (latestLog.logType == 'LOAD')  {
			log.status = 'Loaded in ' + latestLog.value;
		}  else if (latestLog.logType == 'UNLOAD') {
			log.status = 'Unloaded';
		}  else  if (latestLog.logType == 'UNREGISTER')  {
			log.status = 'Delivered';
		}
	}
	
	return log;
}