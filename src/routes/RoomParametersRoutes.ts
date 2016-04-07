import {Router, Request, Response} from "express";
import {RoomParameterModel} from "../model/roomparameter/model";

export class RoomParametersRouter {
    public router: Router = Router();

    getRouter():Router{

        this.router.get('/parameters', (req:Request, res:Response)=> {

            RoomParameterModel.getParameters( function (err, docs) {

                return   res.json(docs);
            });
        });

        this.router.get('/parameter/:parameter', (req:Request, res:Response)=> {

            RoomParameterModel.getParameter( req.params.parameter, function (err, docs) {

                return   res.json(docs);
            });
        });

        return this.router;
    }
}