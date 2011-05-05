function(doc)  {
	if (doc.type && doc.type == 'item')  {
		emit(doc._id, 
		{
			name: doc.name, 
			tempMin: doc.tempMin, 
			tempMax: doc.tempMax  
		});
	}
}