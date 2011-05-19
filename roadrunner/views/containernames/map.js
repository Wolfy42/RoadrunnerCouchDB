function(doc) {
	if (doc.type == 'container')  {
		emit(null, {
			name: doc.name,
			id: doc._id
		});
	}
}
