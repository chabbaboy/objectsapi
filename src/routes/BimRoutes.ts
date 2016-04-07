import {Router, Request, Response} from "express";
 import {BimModel} from "../model/bim/model";

export class BimRouter {

    public router:Router = Router();

    getRouter():Router {

        this.router.get('/bims', (req:Request, res:Response)=> {

            BimModel.getBims( function (err, docs) {

                return   res.json(docs);
            });
        });
/*
        this.router.get('/bims2', async function (req, res) {

            const data = await BimModel.getBims2;

            res.json(data);
        });
*/
        return this.router;

    }
}