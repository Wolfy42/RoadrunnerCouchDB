function(doc) {
	if (doc.type && doc.type == "item" && doc.name)  {
		emit(null, {
			barcode : doc._id,
			name : doc.name
		});
	}
}
