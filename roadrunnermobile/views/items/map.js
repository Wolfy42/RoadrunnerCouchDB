function(doc)  {
	if (doc.type && doc.type == 'item')  {
		emit(null, doc.name);
	}
}