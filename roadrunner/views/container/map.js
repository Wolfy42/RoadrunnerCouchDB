function(doc) {
	if (doc.type == 'container')  {
		emit(doc.id, {
			name: doc.name,
			sensors: doc.sensors
		});
	}
}
