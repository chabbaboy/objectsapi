"use strict";
var express_1 = require("express");
var model_1 = require("../model/roomparameter/model");
var RoomParametersRouter = (function () {
    function RoomParametersRouter() {
        this.router = express_1.Router();
    }
    RoomParametersRouter.prototype.getRouter = function () {
        this.router.get('/parameters', function (req, res) {
            model_1.RoomParameterModel.getParameters(function (err, docs) {
                return res.json(docs);
            });
        });
        this.router.get('/parameter/:parameter', function (req, res) {
            model_1.RoomParameterModel.getParameter(req.params.parameter, function (err, docs) {
                return res.json(docs);
            });
        });
        return this.router;
    };
    return RoomParametersRouter;
}());
exports.RoomParametersRouter = RoomParametersRouter;
//# sourceMappingURL=RoomParametersRoutes.js.map