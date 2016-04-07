"use strict";
function getConfig(id, callback) {
    this
        .findOne({ user: id })
        .exec();
}
exports.getConfig = getConfig;
;
//# sourceMappingURL=helper.js.map