"use strict";
function getBims(callback) {
    var model = this;
    model
        .find({})
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getBims = getBims;
;
//# sourceMappingURL=helpers.js.map