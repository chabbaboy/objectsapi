import {Schema,Document,Model} from "mongoose";

export const RoomInstanceSchema = new Schema({
    model_id: {type: String, required: true},
    Plan: {type: String, required: true}
});

export interface IRoomInstance extends Document{
    model_id: string;
    Plan: string;
}

export  interface IRoomInstanceModel extends Model<IRoomInstance>{

}
