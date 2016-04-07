"use strict";
var express_1 = require("express");
var model_1 = require("../model/roommodel/model");
var RoomModelRouter = (function () {
    function RoomModelRouter() {
        this.router = express_1.Router();
    }
    RoomModelRouter.prototype.getRouter = function () {
        this.router.get('/models', function (req, res) {
            model_1.RoomModelModel.getModels(function (err, docs) {
                return res.json(docs);
            });
        });
        return this.router;
    };
    return RoomModelRouter;
}());
exports.RoomModelRouter = RoomModelRouter;
//# sourceMappingURL=RoomModelRoutes.js.map