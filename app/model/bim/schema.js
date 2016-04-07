"use strict";
var mongoose_1 = require("mongoose");
var helpers_1 = require("./helpers");
exports.BimSchema = new mongoose_1.Schema({
    guid: { type: String },
    complex: { type: String },
    entity: { type: String },
    model: { type: String },
    category: { type: String },
    group: { type: String },
    level: { type: String },
    space: { type: String },
    data: mongoose_1.Schema.Types.Mixed,
    checkouts: mongoose_1.Schema.Types.Mixed,
    geometry: mongoose_1.Schema.Types.Mixed,
    material: mongoose_1.Schema.Types.Mixed,
});
exports.BimSchema.static("getBims", helpers_1.getBims);
//# sourceMappingURL=schema.js.map