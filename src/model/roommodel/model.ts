import {DataAccess} from "./../../config/dataAccess/dataAccess";
import {RoomModelSchema,IRoomModel,IRoomModelModel} from "../roommodel/schema";

var mongooseConnection = DataAccess.mongooseConnection;

export var RoomModelModel : IRoomModelModel = <IRoomModelModel > mongooseConnection.model<IRoomModel>("room_model",RoomModelSchema,"room_models");



