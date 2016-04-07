"use strict";
var dataAccess_1 = require("./../../config/dataAccess/dataAccess");
var schema_1 = require("../roomparameter/schema");
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
exports.RoomParameterModel = mongooseConnection.model("room_parameter", schema_1.RoomParameterSchema, "room_parameters");
//# sourceMappingURL=model.js.map