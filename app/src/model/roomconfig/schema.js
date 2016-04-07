"use strict";
var mongoose_1 = require("mongoose");
var helpers_1 = require("./helpers");
exports.RoomConfigSchema = new mongoose_1.Schema({
    user: { type: String, required: false },
    model: mongoose_1.Schema.Types.Mixed,
    date: { type: Date, required: false }
});
exports.RoomConfigSchema.static("getConfig", helpers_1.getConfig);
//# sourceMappingURL=schema.js.map