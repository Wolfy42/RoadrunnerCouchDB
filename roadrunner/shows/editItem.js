function(doc, req)	{
	// !json templates.head
	// !json templates.tail
	// !json templates.scripts
	// !json templates.editItem
	
	var Mustache = require("vendor/couchapp/lib/mustache");

	var html;
	
	start({
		"headers": {
			"Content-Type": "text/html"
		}
	});
	
	html = Mustache.to_html(templates.head, null);
		
	var data = {
		name : doc.name,
		barcode : doc._id,
		doc : JSON.stringify(doc)
	};
	
	var partials = {
		scripts : templates.scripts	
	};
	
	html += Mustache.to_html(templates.editItem.form, data, partials);

	html += Mustache.to_html(templates.tail, null);
	
	return html;
}
