function(head, req) {
	// !json templates.head
	// !json templates.tail
	// !json templates.logs
	
	var Mustache = require('vendor/couchapp/lib/mustache');
	var path = require("vendor/couchapp/lib/path").init(req);
	
	start({
		"headers": {
			"Content-Type": "text/html"
		}
	});
	
	send(Mustache.to_html(templates.head, null));
		
	send(Mustache.to_html(templates.logs.head, {item : req.query.startkey}));
	
	var row;
	while(row = getRow()) {
		row.value.timestamp = new Date(row.value.timestamp).toGMTString();
		send(Mustache.to_html(templates.logs.row, row.value));
	}
	
	send(Mustache.to_html(templates.logs.tail, {backLink : path.list("items", "items")}));
	
	send(Mustache.to_html(templates.tail, null));
}