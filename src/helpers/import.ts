import {BimModel} from "../model/bim/model";
import { getRandomEntireBimObject}from "./functions";


export function insertBimObjects():void {
    // Array contains Object combinations for complex,entity,model,level

    const bimValues = new Array;

    for (let i = 0; i <100000; i++) {

        const lvBimObject = getRandomEntireBimObject();

        bimValues.push(lvBimObject);
    }
    console.log("insert bimObjects starts");
    BimModel.collection.insert(bimValues,  function onInsert(err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.info('%d documents were successfully stored.', bimValues.length);
        }
    });





}
