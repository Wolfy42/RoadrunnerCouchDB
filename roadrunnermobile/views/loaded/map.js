function(doc) {
	if (doc.type && doc.type == 'log')  {
		emit([doc.item, doc.logType], doc);
	}
}
