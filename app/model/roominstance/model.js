"use strict";
var schema_1 = require("../roominstance/schema");
var dataAccess_1 = require("../../config/dataAccess/dataAccess");
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
exports.RoomInstanceModel = mongooseConnection.model("room_instance", schema_1.RoomInstanceSchema, "room_instances");
//# sourceMappingURL=model.js.map