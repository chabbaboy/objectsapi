import {Router, Request, Response} from "express";
 import {BimModel} from "../model/bim/model";
import * as url from "url";

export class BimRouter {

    public router:Router = Router();

    getRouter():Router {

        this.router.post('/objects', (req:Request, res:Response)=> {

            console.log("router find all")

            var url_parts = url.parse(req.url, true);

            BimModel.getBims(req.body,url_parts.query, function (err, docs) {

                return   res.json(docs);
            });
        });

        this.router.get('/objects/:guid', (req:Request, res:Response)=> {

            console.log("router find One")

            var url_parts = url.parse(req.url, true);

            BimModel.getBimByGuid(req.params.guid ,url_parts.query, function (err, docs) {

                return   res.json(docs);
            });
        });
        
        this.router.post('/objects', (req:Request, res:Response)=> {

            console.log("router find all")

            var url_parts = url.parse(req.url, true);

            BimModel.getBims(req.body,url_parts.query, function (err, docs) {

                return   res.json(docs);
            });
        });
        this.router.post('/objects/count', (req:Request, res:Response)=> {

            console.log("router count")

            BimModel.getBimsCount(req.body, function (err, docs) {

                return   res.json(docs);
            });
        });

        return this.router;

    }
}