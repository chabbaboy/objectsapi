import {BimSchema,IBim,IBimModel} from "../bim/schema";
import * as mongoose from "mongoose";

export function  getBims (  callback: (error: Error, data: {})=> void ) :void {

    const model : IBimModel = this;

    model
        .find({})
        .exec( (err: Error,docs:{})=> {

            return callback(err, docs);
        });
};
