"use strict";
var dataAccess_1 = require("./../../config/dataAccess/dataAccess");
var schema_1 = require("../roommodel/schema");
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
exports.RoomModelModel = mongooseConnection.model("room_model", schema_1.RoomModelSchema, "room_models");
//# sourceMappingURL=model.js.map