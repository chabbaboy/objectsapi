"use strict";
var express = require("express");
var RoomConfigRoutes_1 = require("../RoomConfigRoutes");
var RoomModelRoutes_1 = require("../RoomModelRoutes");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "useRoutes", {
        get: function () {
            app.use("/api", new RoomConfigRoutes_1.ConfigRouter().getRouter());
            app.use("/api", new RoomModelRoutes_1.RoomModelRouter().getRouter());
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
exports.BaseRoutes = BaseRoutes;
//# sourceMappingURL=BaseRoutes.js.map