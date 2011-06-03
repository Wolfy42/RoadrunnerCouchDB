function(doc)  {
	if (doc.type == 'delivery')  {
		var items = doc.doctrine_metadata.associations.items;
		for (var i in items)  {
			emit(null,
			{
				_id : items[i],
				from : doc.from_address,
				to : doc.to_address
			})
		};
	}
}