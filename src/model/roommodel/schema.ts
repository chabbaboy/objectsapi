import {Schema,Document,Model} from "mongoose";
import {getModels} from "./helpers";

export const RoomModelSchema = new Schema({
    model_id: {type: String, required: true},
    model_name: {type: String, required: true},
    sync_date: {type: Date, required: true}
});

RoomModelSchema.static("getModels",getModels);

export interface IRoomModel extends Document{
    model_name: string;
    Plan: Array<string>;
    count: number;
}

export interface IRoomModelModel extends Model<IRoomModel>{

    getModels: ( callback: (error: Error, data: {}) => void ) => void ;
}