"use strict";
var express_1 = require("express");
var model_1 = require("../model/bim/model");
var BimRouter = (function () {
    function BimRouter() {
        this.router = express_1.Router();
    }
    BimRouter.prototype.getRouter = function () {
        this.router.get('/bims', function (req, res) {
            model_1.BimModel.getBims(function (err, docs) {
                return res.json(docs);
            });
        });
        /*
                this.router.get('/bims2', async function (req, res) {
        
                    const data = await BimModel.getBims2;
        
                    res.json(data);
                });
        */
        return this.router;
    };
    return BimRouter;
}());
exports.BimRouter = BimRouter;
//# sourceMappingURL=BimRoutes.js.map