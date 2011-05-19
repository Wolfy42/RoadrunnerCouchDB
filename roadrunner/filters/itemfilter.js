function(doc, req) {
	if (!req.query || !req.query.items || !doc.type)  {
		return false;
	}
	var items = req.query.items;
	
	if (doc.type == "item") {
		if (items.indexOf(doc._id) != -1)  {
			return true;
		}
	}  else if (doc.type == "delivery")  {
		var deliveryItems = doc.doctrine_metadata.associations.items;
		for (var i in deliveryItems)  {
			if (items.indexOf(deliveryItems[i]) != -1)  {
				return true;
			}
		}
	}
	return false;
}