function(head, req) {
	// !json templates.head
	// !json templates.tail
	// !json templates.items
	
	var Mustache = require('vendor/couchapp/lib/mustache');
	var path = require("vendor/couchapp/lib/path").init(req);
	
	start({
		"headers": {
			"Content-Type": "text/html"
		}
	});
	
	send(Mustache.to_html(templates.head, null));
		
	send(Mustache.to_html(templates.items.head, null));
	
	var row;
	while(row = getRow()) {
		row.value.link = path.list("logs", "logs", {
			startkey : [row.value.barcode],
			endkey : [row.value.barcode,{}]
		});
		send(Mustache.to_html(templates.items.row, row.value));
	}
	
	send(Mustache.to_html(templates.items.tail, null));
	
	send(Mustache.to_html(templates.tail, null));
}