function (newDoc, oldDoc, userCtx ) {
	 
	var module = {};
	module.exports = {};
	// !code vendor/json-schema/lib/validate.js
	var Validator = module.exports;
	
	// !json schema
	var docSchema;
	var type = newDoc.type;
	if (type == 'item')  {
		docSchema = schema.item;
	}  else  {
		throw({forbidden : 'unknown document'});
	}
	
	docSchema.properties._id = {type : 'string', required : true};
	docSchema.properties._rev = {type : 'string', required : true};
	docSchema.properties._revisions = {type : 'object', required : false};
	
	
	var res = Validator.validate(newDoc, docSchema);

	if (res.valid == false)  {
		throw({forbidden : JSON.stringify(res)});
	}
}

