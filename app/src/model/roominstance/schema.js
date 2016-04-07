"use strict";
var mongoose_1 = require("mongoose");
exports.RoomInstanceSchema = new mongoose_1.Schema({
    model_id: { type: String, required: true },
    Plan: { type: String, required: true }
});
//# sourceMappingURL=schema.js.map