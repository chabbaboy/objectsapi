import {Router, Request, Response} from "express";
import {RoomConfigModel} from "../model/roomconfig/model";

export class ConfigRouter {

    public router:Router = Router();

    getRouter():Router {

        this.router.get('/config/:user', (req:Request, res:Response)=> {

            RoomConfigModel.getConfig(req.params.user, function (err, docs) {

                return   res.json(docs);
            });
        });

        return this.router;

    }
}