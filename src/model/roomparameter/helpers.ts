import {RoomParameterSchema,IRoomParameterModel} from "../roomparameter/schema";
import * as mongoose from "mongoose";


var objectIdValidator = function  (id:string) {

    var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    return checkForHexRegExp.test(id);
};

export function getParameters  (  callback: (error: Error, data: {})=> void ) :void {

    const query = [
        {
            $lookup: {
                from: "room_parameters_values",
                localField: "_id",
                foreignField: "pid",
                as: "parameter_values"
            }
        }
    ];

    const model : IRoomParameterModel = this;

    model
        .aggregate(query)
        .exec( (err: Error,docs:{})=> {

            return callback(err, docs);
        });
};

export function getParameter  ( id: string,  callback: (error: Error, data: {})=> void ) :void {

    var query = [
        {$match: {"_id": new mongoose.Types.ObjectId(id)}},
        {
            $lookup: {
                from: "room_parameters_values",
                localField: "_id",
                foreignField: "pid",
                as: "parameter_values"
            }
        }
    ];

    const model : IRoomParameterModel = this;

    model
        .aggregate(query)
        .exec(function (err, docs) {
            //aggregate function returns empty array if no results found
            if (docs.length !=0) {
                return callback(err, docs[0]);
            }
            else {
                return callback(err,{});
            }
        });
};