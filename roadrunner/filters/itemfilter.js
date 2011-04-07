function(doc, req) {
	
	if (doc.type && doc.type == "item" && req.query && req.query.items) {
		
		var items = req.query.items;
		
		if (items.indexOf(doc._id) != -1)  {
			return true;
		}
	}
	
	return false;
}