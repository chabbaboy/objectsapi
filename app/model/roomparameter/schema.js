"use strict";
var mongoose_1 = require("mongoose");
var helpers_1 = require("../roomparameter/helpers");
exports.RoomParameterSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.RoomParameterSchema.static("getParameters", helpers_1.getParameters);
exports.RoomParameterSchema.static("getParameter", helpers_1.getParameter);
//# sourceMappingURL=schema.js.map