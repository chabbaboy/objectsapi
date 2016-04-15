
import * as express from "express";
import * as bodyParser from "body-parser"
import {useRoutes} from "./routes/base/BaseRoutes"


const app:express.Application = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

useRoutes(app);

app.listen(3000);






