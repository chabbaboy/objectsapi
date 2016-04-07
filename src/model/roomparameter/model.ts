import {DataAccess} from "./../../config/dataAccess/dataAccess";
import {IRoomParameter,IRoomParameterModel,RoomParameterSchema} from "../roomparameter/schema";

var mongooseConnection = DataAccess.mongooseConnection;

export const RoomParameterModel : IRoomParameterModel =
    <IRoomParameterModel> mongooseConnection.model<IRoomParameter>("room_parameter",RoomParameterSchema,"room_parameters");


