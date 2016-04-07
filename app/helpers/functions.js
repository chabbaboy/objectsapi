"use strict";
var bimObjectsData_1 = require("./bimObjectsData");
var uuid = require('uuid');
var roomCategoryData_1 = require("./roomCategoryData");
var roomInstancesData_1 = require("./roomInstancesData");
var assetGeometriesData_1 = require("./assetGeometriesData");
var assetMaterijalsData_1 = require("./assetMaterijalsData");
var assetObjectsData_1 = require("./assetObjectsData");
function getRandomBimObject() {
    var result = {};
    var bimRandomObject = bimObjectsData_1.bimObject[Math.floor(Math.random() * bimObjectsData_1.bimObject.length)];
    result["complex"] = bimRandomObject.complex;
    var bimRandomEntity = bimRandomObject.entity[Math.floor(Math.random() * bimRandomObject.entity.length)];
    result["entity"] = bimRandomEntity.entity;
    var bimRandomModel = bimRandomEntity.model[Math.floor(Math.random() * bimRandomEntity.model.length)];
    result["model"] = bimRandomModel.model;
    var bimRandomLevel = bimRandomModel.level[Math.floor(Math.random() * bimRandomModel.level.length)];
    result["level"] = bimRandomLevel;
    return result;
}
exports.getRandomBimObject = getRandomBimObject;
function getRandomEntireBimObject() {
    var bimObject = getRandomBimObject();
    bimObject["guid"] = uuid.v4();
    bimObject["category"] = roomCategoryData_1.roomCategoryData[Math.floor(Math.random() * roomCategoryData_1.roomCategoryData.length)].name; //room category
    bimObject["group"] = "grupa"; // grupa
    bimObject["space"] = "Space"; // nista
    bimObject["data"] = getRandomReformatRoomInstanceData(); //roomintsance
    bimObject["checkouts"] = { "projects": [] };
    bimObject["geometry"] = assetGeometriesData_1.assetGeometriesData[Math.floor(Math.random() * assetGeometriesData_1.assetGeometriesData.length)];
    bimObject["material"] = assetMaterijalsData_1.assetMaterijalsData[Math.floor(Math.random() * assetMaterijalsData_1.assetMaterijalsData.length)];
    bimObject["object"] = assetObjectsData_1.assetObjectsData[Math.floor(Math.random() * assetObjectsData_1.assetObjectsData.length)];
    return bimObject;
}
exports.getRandomEntireBimObject = getRandomEntireBimObject;
function getRandomReformatRoomInstanceData() {
    //take random element from room instances array
    var lvRoomInstances = Math.floor(Math.random() * roomInstancesData_1.roomInstancesData.length);
    var lvObject = roomInstancesData_1.roomInstancesData[lvRoomInstances];
    var newRoomInstance = [];
    //transform existing object   from : propriety_name  value  >> to : key: propriety_name   value: value
    Object.keys(lvObject).forEach(function (key, index) {
        var lvObj = new Object;
        lvObj.key = "" + key + "";
        lvObj.value = lvObject["" + key + ""];
        newRoomInstance[index] = lvObj;
    });
    return newRoomInstance;
}
exports.getRandomReformatRoomInstanceData = getRandomReformatRoomInstanceData;
//# sourceMappingURL=functions.js.map