import {DataAccess} from "./../../config/dataAccess/dataAccess";
import {RoomConfigSchema,IRoomConfig} from "./../../model/roomconfig/schema";
import {IRoomConfigModel} from "./schema";

var mongooseConnection = DataAccess.mongooseConnection;

export var RoomConfigModel : IRoomConfigModel = <IRoomConfigModel > mongooseConnection.model<IRoomConfig>("room_config",RoomConfigSchema,"room_config");



