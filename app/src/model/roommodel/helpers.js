"use strict";
function getModels(callback) {
    var query = [
        {
            $group: {
                "_id": { model_name: "$model_id" },
                "Plan": { $addToSet: "$Plan" },
                "room_instances": { $sum: 1 }
            }
        },
        {
            $lookup: {
                from: "room_models",
                localField: "_id.model_id",
                foreignField: "model_id",
                as: "model_name"
            }
        },
        {
            $project: {
                _id: 0, model_name: "$_id.model_name", Plan: "$Plan", count: "$room_instances"
            }
        },
        { $sort: { model_name: 1, Plan: 1 } }
    ];
    var model = this;
    model
        .aggregate(query)
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getModels = getModels;
;
//# sourceMappingURL=helpers.js.map