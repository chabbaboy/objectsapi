"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var BaseRoutes_1 = require("./routes/base/BaseRoutes");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
BaseRoutes_1.useRoutes(app);
app.listen(3000);
//# sourceMappingURL=app.js.map