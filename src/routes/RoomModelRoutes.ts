import {Router, Request, Response} from "express";
import {RoomModelModel} from "../model/roommodel/model";

export class RoomModelRouter {

    public router:Router = Router();

    getRouter():Router {

        this.router.get('/models', (req:Request, res:Response)=> {

            RoomModelModel.getModels( function (err, docs) {

                return   res.json(docs);
            });
        });

        return this.router;

    }
}