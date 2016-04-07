"use strict";
var model_1 = require("../model/bim/model");
var uuid = require('uuid');
function insertBims() {
    var dataData = [
        {
            "model_id": "A",
            "datum": "Wed Mar 09 2010 19:44:42 GMT+0100 (Central European Standard Time)"
        },
        {
            "model_id": "B",
            "datum": "Wed Mar 09 2010 19:44:42 GMT+0100 (Central European Standard Time)"
        }
    ];
    var complexData = ["Complex 1", "Complex 2", "Complex 3", "Complex 4", "Complex 5"];
    var entityData = ["entity 1", "entity 2", "entity 3", "entity 4", "entity 5"];
    var modelData = ["model 1", "model 2", "model 3", "model 4", "model 5"];
    var categoryData = ["category 1", "category 2", "category 3", "category 4", "category 5"];
    for (var i = 0; i < 10000; i++) {
        console.log("insertovan data :" + i);
        var bimValues = new model_1.BimModel();
        bimValues.guid = uuid.v4();
        bimValues.complex = complexData[Math.floor(Math.random() * complexData.length)];
        bimValues.entity = entityData[Math.floor(Math.random() * entityData.length)];
        bimValues.model = modelData[Math.floor(Math.random() * modelData.length)];
        bimValues.category = categoryData[Math.floor(Math.random() * categoryData.length)]; //room category
        bimValues.group = "grupa"; // grupa
        bimValues.level = "Lvel 1";
        bimValues.space = "Space"; // nista
        bimValues.data = dataData; //roomintsance
        bimValues.checkouts = { "projects": [] };
        bimValues.geometry = [{}];
        bimValues.material = [{}];
        bimValues.save(function (err) {
            console.log("evo me u save- u ");
        });
    }
}
exports.insertBims = insertBims;
function insertBims2() {
    var bimObject = [
        {
            "complex": "RPC_Trelleborg",
            "entity": [
                {
                    "entity": "RPC_Trelleborg_Inredning",
                    "model": [
                        {
                            "model": "RPC-By01",
                            "level": [
                                "Plan 11",
                                "Plan 115",
                                "Plan 09",
                                "Plan 10"
                            ]
                        },
                        {
                            "model": "A40B_00415__M",
                            "level": [
                                "By15-Plan 01"
                            ]
                        },
                        {
                            "model": "A40B_00419__M",
                            "level": [
                                "By19-Plan 04",
                                "By19-Plan 03",
                                "By19-Plan 07",
                                "By19-Plan 01",
                                "By19-Plan 05"
                            ]
                        },
                        {
                            "model": "A40B_00420__M",
                            "level": [
                                "By20-Plan 03",
                                "By20-Plan 05",
                                "By20-Plan 04",
                                "By01 - Plan 03"
                            ]
                        },
                        {
                            "model": "A40B_00401__M",
                            "level": [
                                "By01 - Plan 03",
                                "By01 - Plan 04",
                                "By01 - Plan 05",
                                "By01 - Plan 06"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "complex": "Stadsgården",
            "entity": [
                {
                    "entity": "Stadsgården1",
                    "model": [
                        {
                            "model": "Stadsgården1",
                            "level": [
                                "Plan 0",
                                "Plan 1",
                                "Plan 2",
                                "Plan 3",
                                "Plan 4",
                                "Plan 5",
                                "Plan 6",
                                "Plan 7"
                            ]
                        }
                    ]
                },
                {
                    "entity": "Stadsgården2",
                    "model": [
                        {
                            "model": "Stadsgården2",
                            "level": [
                                "Plan 0",
                                "Plan 1",
                                "Plan 2"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "complex": "NKS",
            "entity": [
                {
                    "entity": "NKS Lös Inredning",
                    "model": [
                        {
                            "model": "U120",
                            "level": [
                                "01",
                                "02",
                                "03",
                                "04",
                                "05",
                                "06",
                                "07"
                            ]
                        },
                        {
                            "model": "U121",
                            "level": [
                                "01",
                                "02",
                                "03",
                                "04",
                                "05"
                            ]
                        },
                        {
                            "model": "U130",
                            "level": [
                                "04",
                                "05",
                                "06",
                                "07"
                            ]
                        },
                        {
                            "model": "U140",
                            "level": [
                                "01",
                                "02",
                                "03",
                                "04"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            "complex": "FRIIDROTTS- & SPORTARENOR",
            "entity": [
                {
                    "entity": "FRIIDROTTS- & SPORTARENOR",
                    "model": [
                        {
                            "model": "Friidrott-Sporthall",
                            "level": [
                                "Plan +28,54",
                                "Plan +33,34",
                                "Plan +32,14",
                                "Plan +36,44"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            "complex": "VATTEN",
            "entity": [
                {
                    "entity": "STOCKHOLM VATTEN",
                    "model": [
                        {
                            "model": "STV Högdalen",
                            "level": [
                                "Plan 3",
                                "Plan 4"
                            ]
                        },
                        {
                            "model": "STV Ulvsunda",
                            "level": [
                                "Plan 4",
                                "Plan 5",
                                "Plan 6",
                                "Plan 7"
                            ]
                        },
                        {
                            "model": "sthlmv",
                            "level": [
                                "Plan 1",
                                "Plan 2"
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    var bimRandomObject = bimObject[Math.floor(Math.random() * bimObject.length)];
    var complexData = bimRandomObject.complex;
    console.log("complexData: " + complexData);
    var bimRandomEntity = bimRandomObject.entity[Math.floor(Math.random() * bimRandomObject.entity.length)];
    var entityData = bimRandomEntity.entity;
    console.log("entityData: " + entityData);
    var bimRandomModel = bimRandomEntity.model[Math.floor(Math.random() * bimRandomEntity.model.length)];
    var modelData = bimRandomModel.model;
    console.log("modelData: " + modelData);
    var bimRandomLevel = bimRandomModel.level[Math.floor(Math.random() * bimRandomModel.level.length)];
    var levelData = bimRandomLevel;
    console.log("levelData: " + levelData);
    /*
    
        const categoryData = ["category 1", "category 2", "category 3", "category 4", "category 5"];
        const bimValues = new Array;
    */
    /*
        for (let i = 0; i < 100000; i++) {
    
            let bimObject = {};
    
            console.log("insertovan data :" + i);
    
            bimObject["guid"] = uuid.v4();
            bimObject["complex"] = complexData [Math.floor(Math.random() * complexData.length)];
            bimObject["entity"] = entityData [Math.floor(Math.random() * entityData.length)];
            bimObject["model"] = modelData [Math.floor(Math.random() * modelData.length)];
            bimObject["category"] = categoryData [Math.floor(Math.random() * categoryData.length)];
    
            bimValues.push(bimObject);
    
    
        }
    
        BimModel.collection.insert(bimValues);
    */
}
exports.insertBims2 = insertBims2;
//# sourceMappingURL=import.js.map