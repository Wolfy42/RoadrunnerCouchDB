function(doc, req) {
	
	if (doc.type && doc.type == "item" && req.query_params && req.query_params.items ) {
		var items = req.query_params.items;
		for(var i in items) {
			if (items[i] == doc._id)  {
				return true;
			}
		}
	} else {
		return false;
	}
}