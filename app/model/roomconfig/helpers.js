"use strict";
function getConfig(id, callback) {
    var model = this;
    model
        .find({ user: id })
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getConfig = getConfig;
;
//# sourceMappingURL=helpers.js.map