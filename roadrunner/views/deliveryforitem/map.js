function(doc) {
	if (doc.type && doc.type == "delivery")  {
		var items = doc.doctrine_metadata.associations.items;
		for (var i in items)  {
			emit(items[i], doc._id);
		}
	}
}
