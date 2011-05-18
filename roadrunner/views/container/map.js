function(doc) {
	if (doc.type == 'container')  {
		emit(null, doc.name);
	}
}
