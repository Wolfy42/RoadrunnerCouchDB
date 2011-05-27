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
		log = latestLog;
		if (log.logType == 'LOAD')  {
			log.status = 'Loaded in ' + log.value;
		}  else if (log.logType == 'UNLOAD') {
			log.status = 'Unloaded from ' +  log.value;
		}  else  if (log.logType == 'UNREGISTER')  {
			log.status = 'Delivered from ' + log.value;
		}
	}
	
	return log;
}