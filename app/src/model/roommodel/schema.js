"use strict";
var mongoose_1 = require("mongoose");
var helpers_1 = require("./helpers");
exports.RoomModelSchema = new mongoose_1.Schema({
    model_id: { type: String, required: true },
    model_name: { type: String, required: true },
    sync_date: { type: Date, required: true }
});
exports.RoomModelSchema.static("getModels", helpers_1.getModels);
//# sourceMappingURL=schema.js.map