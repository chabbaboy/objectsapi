"use strict";
var dataAccess_1 = require("./../../config/dataAccess/dataAccess");
var schema_1 = require("./../../model/roomconfig/schema");
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
exports.RoomConfigModel = mongooseConnection.model("room_config", schema_1.RoomConfigSchema, "room_config");
//# sourceMappingURL=model.js.map