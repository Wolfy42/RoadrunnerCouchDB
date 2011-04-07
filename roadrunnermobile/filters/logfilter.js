function(doc, req) {
	if (doc.type && doc.type == "log") {
		return true;
	} else {
		return false;
	}
}