import {Schema,Document,Model} from "mongoose";
import {getBims} from "./helpers"

export const BimSchema = new Schema({

    guid: {type: String},
    complex: {type: String},
    entity :  {type: String},
    model :  {type: String},
    category :  {type: String},
    group : {type: String},
    level : {type: String},
    space :  { type: String},
    data: Schema.Types.Mixed,
    checkouts: Schema.Types.Mixed,
    geometry: Schema.Types.Mixed,
    material: Schema.Types.Mixed,
});

BimSchema.static("getBims",getBims);

/*
BimSchema.static("getBims2", async function () {
    const data = await this.find({}).exec();

    return Promise.resolve({
        _id: 2,
        _inner: data
    });
});
*/
export interface IBim extends  Document{
    guid: string;
    complex: string;
    entity : string;
    model :  string;
    category :  string;
    group : string;
    level : string;
    space : string;
    data:  Array<Object>;
    checkouts: {};
    geometry: Array<Object>;
    material: Array<Object>;
}
export interface IBimModel extends Model<IBim>{

    getBims: ( callback: (error: Error, data: {}) => void ) => void ;
  //  getBims2: ( callback: (error: Error, data: {}) => void ) => void ;
}

