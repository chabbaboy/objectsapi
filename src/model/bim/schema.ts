import {Schema,Document,Model} from "mongoose";
import {getBims,getBimByGuid,getBimsCount,getBimComplex} from "./helpers"

export const BimSchema = new Schema({

    guid: {type: String},
    complex: Schema.Types.Mixed,
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
BimSchema.static("getBimsCount",getBimsCount);
BimSchema.static("getBimByGuid",getBimByGuid);
BimSchema.static("getBimComplex",getBimComplex);


export interface IBim extends  Document{
    guid: string;
    complex: Object;
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

    getBims: ( data:Array, options:Object, callback: (error: Error, data: {}) => void ) => void ;
    getBimByGuid: ( guid:string,options:Object, callback: (error: Error, data: {}) => void ) => void ;
    getBimsCount: ( data:Array,callback: (error: Error, data: {}) => void ) => void ;
    getBimComplex: (callback: (error: Error, data: {}) => void ) => void ;


}
export interface IBimOptions {
    limit: number;
    skip: number;
    sort : string;
    projection :  Array;
}
export interface IBimOptionsRaw {
    limit: number;
    skip: number;
    sort : string;
    projection :  Array;
}
export interface IBimOptionsProcessed {
    limit: number;
    skip: number;
    sort : string;
    projection :  Object;
}

