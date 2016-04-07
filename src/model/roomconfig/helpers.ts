import {RoomConfigSchema, IRoomConfigModel,IRoomConfig} from "../roomconfig/schema";


export function getConfig  ( id: string , callback: (error: Error, data: {})=> void ) :void {

    const model : IRoomConfigModel = this;
    model
        .find({user: id})
        .exec( (err: Error,docs:{})=> {

                return callback(err, docs);
        });


};