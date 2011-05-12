function (newDoc, oldDoc, userCtx ) {
	 
	var module = {};
	module.exports = {};
	// !code vendor/json-schema/lib/validate.js
	var Validator = module.exports;
	
	// !code util.js
	// !json schema
	var docSchema;
	var type = newDoc.type;
	if (type == 'item')  {
		docSchema = schema.item;
	}  else if (type == 'log')  {
		docSchema = schema.log;
		newDoc.items = objectToArray(newDoc.items);
	}  else if (type == 'delivery')  {
		docSchema = schema.delivery;
		newDoc.items = objectToArray(newDoc.items);
	}  else if (type == 'container')  {
		docSchema = schema.container;
		newDoc.sensors = objectToArray(newDoc.sensors);
	}  else  {
		throw({forbidden : 'unknown document'});
	}
	
	// for CouchDB
	docSchema.properties._id = {type : 'string', required : true};
	docSchema.properties._rev = {type : 'string', required : false};
	docSchema.properties._revisions = {type : 'object', required : false};
	// for Doctrine
	docSchema.properties.doctrine_metadata = {type : 'object', required : false};
	
	var res = Validator.validate(newDoc, docSchema);

	if (res.valid == false)  {
		throw({forbidden : JSON.stringify(res)});
	}
}

