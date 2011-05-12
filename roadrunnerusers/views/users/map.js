function(doc) {
	if (doc.type && doc.type == "user")  {
		emit([doc.name], {
			name : doc.name,
			roles: doc.roles
		});
	}
}
