import {RoomModelSchema, IRoomModelModel,IRoomModel} from "../roommodel/schema";
import {RoomInstanceModel} from "../roominstance/model"


export function getModels  (  callback: (error: Error, data: {})=> void ) :void {

    var query = [
        {
            $group: {
                "_id": {model_name: "$model_id"},
                "Plan": {$addToSet: "$Plan"},
                "room_instances": {$sum: 1}
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
        {$sort: {model_name: 1, Plan: 1}}
    ];

    const model : IRoomModelModel = this;
    RoomInstanceModel
        .aggregate(query)
        .exec( (err: Error,docs:{})=> {

            return callback(err, docs);
        });

};