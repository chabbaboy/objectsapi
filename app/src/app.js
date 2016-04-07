"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var RoomConfigRoutes_1 = require("./routes/RoomConfigRoutes");
var RoomModelRoutes_1 = require("./routes/RoomModelRoutes");
var app = express();
app.use(bodyParser.json());
var config = new RoomConfigRoutes_1.ConfigRouter();
var model = new RoomModelRoutes_1.RoomModelRouter();
app.use('/api', config.getRouter());
app.use("/api", model.getRouter());
app.listen(3000);
//# sourceMappingURL=app.js.map