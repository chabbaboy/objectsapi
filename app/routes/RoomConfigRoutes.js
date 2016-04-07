"use strict";
var express_1 = require("express");
var model_1 = require("../model/roomconfig/model");
var ConfigRouter = (function () {
    function ConfigRouter() {
        this.router = express_1.Router();
    }
    ConfigRouter.prototype.getRouter = function () {
        this.router.get('/config/:user', function (req, res) {
            model_1.RoomConfigModel.getConfig(req.params.user, function (err, docs) {
                return res.json(docs);
            });
        });
        return this.router;
    };
    return ConfigRouter;
}());
exports.ConfigRouter = ConfigRouter;
//# sourceMappingURL=RoomConfigRoutes.js.map