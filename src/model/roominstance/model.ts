import {IRoomInstance,IRoomInstanceModel,RoomInstanceSchema} from "../roominstance/schema";
import {DataAccess} from "../../config/dataAccess/dataAccess";

var mongooseConnection = DataAccess.mongooseConnection;

export const RoomInstanceModel : IRoomInstanceModel =
       <IRoomInstanceModel> mongooseConnection.model<IRoomInstance>("room_instance",RoomInstanceSchema,"room_instances");


