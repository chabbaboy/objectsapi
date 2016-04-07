import {Schema,Document,Model} from "mongoose";
import {getConfig} from "./helpers";

export const RoomConfigSchema = new Schema({
            user: {type: String, required: false},
            model: Schema.Types.Mixed,
            date: {type: Date, required: false}
        });

 RoomConfigSchema.static("getConfig",getConfig);


export interface IRoomConfig extends Document{
    user: string;
    model: {[index: string]: Array<string>};
    date: Date ;
}


export interface IRoomConfigModel extends Model<IRoomConfig>{

    getConfig: ( id: string , callback: (error: Error, data: {}) => void ) => void ;


}