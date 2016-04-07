"use strict";
var mongoose = require("mongoose");
var objectIdValidator = function (id) {
    var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    return checkForHexRegExp.test(id);
};
function getParameters(callback) {
    var query = [
        {
            $lookup: {
                from: "room_parameters_values",
                localField: "_id",
                foreignField: "pid",
                as: "parameter_values"
            }
        }
    ];
    var model = this;
    model
        .aggregate(query)
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getParameters = getParameters;
;
function getParameter(id, callback) {
    var query = [
        { $match: { "_id": new mongoose.Types.ObjectId(id) } },
        {
            $lookup: {
                from: "room_parameters_values",
                localField: "_id",
                foreignField: "pid",
                as: "parameter_values"
            }
        }
    ];
    var model = this;
    model
        .aggregate(query)
        .exec(function (err, docs) {
        //aggregate function returns empty array if no results found
        if (docs.length != 0) {
            return callback(err, docs[0]);
        }
        else {
            return callback(err, {});
        }
    });
}
exports.getParameter = getParameter;
;
//# sourceMappingURL=helpers.js.map