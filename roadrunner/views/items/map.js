function(doc) {
	if (doc.type && doc.type == "item" && doc.name)  {
		emit(doc._id, {
			barcode : doc._id,
			name : doc.name
		});
	}
}
