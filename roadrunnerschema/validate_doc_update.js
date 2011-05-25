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
		//Just if a unknown document will be inserted/updated there will be an error
		if (newDoc._deleted == true)  {
			return;
		}  else  {
			throw({forbidden : 'Unknown document!'});
		}
	}
	
	// for CouchDB
	docSchema.properties._id = {type : 'string', required : true};
	docSchema.properties._rev = {type : 'string', required : false};
	docSchema.properties._attachments = {type : 'object', required : false};
	docSchema.properties._revisions = {type : 'object', required : false};
	// for Doctrine
	docSchema.properties.doctrine_metadata = {type : 'object', required : false};
	
	var res = Validator.validate(newDoc, docSchema);

	if (res.valid == false)  {
		throw({forbidden : JSON.stringify(res)});
	}
}

