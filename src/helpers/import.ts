import {BimModel} from "../model/bim/model";
import { getRandomEntireBimObject}from "./functions";


export function insertBims2():void {
    // Array contains Object combinations for complex,entity,model,level

    const bimValues = new Array;

    for (let i = 0; i <100000; i++) {

        const lvBimObject = getRandomEntireBimObject();

        bimValues.push(lvBimObject);

    }
    BimModel.collection.insert(bimValues);

    console.log("insert gotov");
}


export function insertBims():void {
    /*
     const dataData:Array<any> = [
     {
     "model_id": "A",
     "datum": "Wed Mar 09 2010 19:44:42 GMT+0100 (Central European Standard Time)"
     },
     {
     "model_id": "B",
     "datum": "Wed Mar 09 2010 19:44:42 GMT+0100 (Central European Standard Time)"
     }
     ];

     const complexData = ["Complex 1", "Complex 2", "Complex 3", "Complex 4", "Complex 5"];
     const entityData = ["entity 1", "entity 2", "entity 3", "entity 4", "entity 5"];
     const modelData = ["model 1", "model 2", "model 3", "model 4", "model 5"];
     const categoryData = ["category 1", "category 2", "category 3", "category 4", "category 5"];

     for (let i = 0; i < 10000; i++) {
     console.log("insertovan data :" + i);

     const bimValues = new BimModel();
     bimValues.guid = uuid.v4();
     bimValues.complex = complexData [Math.floor(Math.random() * complexData.length)];
     bimValues.entity = entityData [Math.floor(Math.random() * entityData.length)];
     bimValues.model = modelData [Math.floor(Math.random() * modelData.length)];
     bimValues.category = categoryData [Math.floor(Math.random() * categoryData.length)];  //room category
     bimValues.group = "grupa"; // grupa
     bimValues.level = "Lvel 1";
     bimValues.space = "Space";  // nista
     bimValues.data = dataData;   //roomintsance
     bimValues.checkouts = {"projects": []};
     bimValues.geometry = [{}];
     bimValues.material = [{}];

     bimValues.save(function (err:Error) {
     console.log("evo me u save- u ");


     });
     }
     */

}

