function(head, req) {
	// !json templates.head
	// !json templates.tail
	// !json templates.items
	// !code vendor/Mustache/mustache.js

	start({
		"headers": {
			"Content-Type": "text/html"
		}
	});
	
	send(Mustache.to_html(templates.head, null));
		
	send(Mustache.to_html(templates.items.head, null));
	
	var row;
	while(row = getRow()) {
		send(Mustache.to_html(templates.items.row, row.value));
	}
	
	send(Mustache.to_html(templates.items.tail, null));
	
	send(Mustache.to_html(templates.tail, null));
}