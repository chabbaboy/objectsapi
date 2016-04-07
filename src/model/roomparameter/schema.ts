import {Schema,Document,Model} from "mongoose";
import {getParameters,getParameter} from "../roomparameter/helpers"

export const RoomParameterSchema = new Schema({
    name: {type: String, required: true}
});

RoomParameterSchema.static("getParameters",getParameters);
RoomParameterSchema.static("getParameter",getParameter);

export interface IRoomParameter extends  Document{

    name: string;
}

export interface IRoomParameterModel extends Model<IRoomParameter>{

    getParameters:( callback: (error: Error, data: {}) => void ) => void ;
    getParameter:( id:string, callback: (error: Error, data: {}) => void ) => void ;
}

