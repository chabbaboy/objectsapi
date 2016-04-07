import {DataAccess} from "./../../config/dataAccess/dataAccess";
import {BimSchema,IBim,IBimModel} from "./../../model/bim/schema";

var mongooseConnection = DataAccess.mongooseConnection;

export const BimModel: IBimModel = <IBimModel> mongooseConnection.model<IBim>("bim",BimSchema,"bims");