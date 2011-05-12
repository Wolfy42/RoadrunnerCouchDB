function(doc) {
	if (doc.type && doc.type == "delivery")  {
		
		emit(doc._id, {
			from_address : doc.from_address,
			to_address : doc.to_address,
			created_at : doc.created_at,
			modified_at : doc.modified_at,
			items: doc.items
		});
	}
}
