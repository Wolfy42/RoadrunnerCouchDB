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
		for (var i in doc.items)  {
			if (items.indexOf(doc.items[i]) != -1)  {
				return true
			}
		}
	}
	return false;
}