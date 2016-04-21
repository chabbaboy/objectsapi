import {bimObject} from "./bimObjectsData";
var uuid = require('uuid');
import {roomCategoryData} from "./roomCategoryData";
import {roomInstancesData} from "./roomInstancesData";
import {assetGeometriesData} from "./assetGeometriesData";
import {assetMaterijalsData} from "./assetMaterijalsData";
import {assetObjectsData} from "./assetObjectsData";


export function getRandomBimObject():{} {

    let result = {};

    const bimRandomObject  = bimObject[Math.floor(Math.random() * bimObject.length)];
    result["complex"]  = bimRandomObject.complex;

    const bimRandomEntity = bimRandomObject.entity[Math.floor(Math.random() * bimRandomObject.entity.length)];
    result["entity"]= bimRandomEntity.entity;

    const bimRandomModel = bimRandomEntity.model[Math.floor(Math.random() * bimRandomEntity.model.length)];
    result["model"] = bimRandomModel.model;

    const bimRandomLevel = bimRandomModel.level[Math.floor(Math.random() * bimRandomModel.level.length)];
    result["level"] = bimRandomLevel;

    return result;

}

export function getRandomEntireBimObject ():{} {

    let bimObject = getRandomBimObject();

    bimObject["guid"] = uuid.v4();
    bimObject["category"] = roomCategoryData [Math.floor(Math.random() * roomCategoryData.length)].name;  //room category
    bimObject["group"]  = "grupa"; // grupa
    bimObject["space"]  = "Space";  // nista
    bimObject["data"] =  getRandomReformatRoomInstanceData();  //roomintsance

    bimObject["checkouts"]  = {"projects": []};
    

    bimObject["geometry"]  = assetGeometriesData[Math.floor(Math.random() * assetGeometriesData.length)];
    bimObject["material"]  = assetMaterijalsData[Math.floor(Math.random() * assetMaterijalsData.length)];
    bimObject["object"]  = assetObjectsData[Math.floor(Math.random() * assetObjectsData.length)];
    
    return bimObject;
    
}

export function getRandomReformatRoomInstanceData (){

    //take random element from room instances array
    const lvRoomInstances : Number = Math.floor(Math.random() * roomInstancesData.length);
    const lvObject = roomInstancesData[lvRoomInstances];

    const newRoomInstance=[];

        //transform existing object   from : propriety_name  value  >> to : key: propriety_name   value: value
        Object.keys(lvObject).forEach(function(key,index) {

            let lvObj = new Object;
            lvObj.key=""+key+"";
            lvObj.value = lvObject[""+key+""];
            newRoomInstance[index]=lvObj;
        });

    return newRoomInstance;

}

