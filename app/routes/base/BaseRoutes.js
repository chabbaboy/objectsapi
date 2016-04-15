"use strict";
var express = require("express");
var RoomConfigRoutes_1 = require("../RoomConfigRoutes");
var RoomModelRoutes_1 = require("../RoomModelRoutes");
var RoomParametersRoutes_1 = require("../RoomParametersRoutes");
var BimRoutes_1 = require("../BimRoutes");
var app = express();
function useRoutes(app) {
    app.use('/api', new RoomConfigRoutes_1.ConfigRouter().getRouter());
    app.use("/api", new RoomModelRoutes_1.RoomModelRouter().getRouter());
    app.use("/api", new RoomParametersRoutes_1.RoomParametersRouter().getRouter());
    app.use("/api", new BimRoutes_1.BimRouter().getRouter());
}
exports.useRoutes = useRoutes;
//# sourceMappingURL=BaseRoutes.js.map