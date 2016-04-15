"use strict";
var express_1 = require("express");
var model_1 = require("../model/bim/model");
var url = require("url");
var BimRouter = (function () {
    function BimRouter() {
        this.router = express_1.Router();
    }
    BimRouter.prototype.getRouter = function () {
        this.router.post('/objects', function (req, res) {
            console.log("router find all");
            var url_parts = url.parse(req.url, true);
            model_1.BimModel.getBims(req.body, url_parts.query, function (err, docs) {
                return res.json(docs);
            });
        });
        this.router.get('/objects/:guid', function (req, res) {
            console.log("router find One");
            var url_parts = url.parse(req.url, true);
            model_1.BimModel.getBimByGuid(req.params.guid, url_parts.query, function (err, docs) {
                return res.json(docs);
            });
        });
        this.router.post('/objects', function (req, res) {
            console.log("router find all");
            var url_parts = url.parse(req.url, true);
            model_1.BimModel.getBims(req.body, url_parts.query, function (err, docs) {
                return res.json(docs);
            });
        });
        this.router.post('/objects/count', function (req, res) {
            console.log("router count");
            model_1.BimModel.getBimsCount(req.body, function (err, docs) {
                return res.json(docs);
            });
        });
        return this.router;
    };
    return BimRouter;
}());
exports.BimRouter = BimRouter;
//# sourceMappingURL=BimRoutes.js.map