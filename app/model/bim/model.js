"use strict";
var dataAccess_1 = require("./../../config/dataAccess/dataAccess");
var schema_1 = require("./../../model/bim/schema");
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
exports.BimModel = mongooseConnection.model("bim", schema_1.BimSchema, "bims");
//# sourceMappingURL=model.js.map