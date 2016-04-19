import {BimSchema,IBim,IBimModel,IBimOptionsRaw,IBimOptionsProcessed} from "../bim/schema";
import * as mongoose from "mongoose";

/**
 * function parse array sent in request body and output desired format
 * input format : [{ "complex.name":"Stadsgården",    "entity" : "Stadsgården1" ,    "level":["Plan 0" ,"Plan 1","Plan 4"]   }]
 * output format ( addapted for mongoose )

 { '$or':    [ { 'complex.name': 'Stadsgården',        entity: 'Stadsgården1',        level: 'Plan 0' },
               { 'complex.name': 'Stadsgården',        entity: 'Stadsgården1',        level: 'Plan 1' },
               { 'complex.name': 'Stadsgården',        entity: 'Stadsgården1',        level: 'Plan 4' } ] }

 * @param data
 * @returns {{$or: Array}}
 */
function getTransformedBimObject(data) {

    let orQuery = [];

    for (let i = 0; i < data.length; i++) {

        let levels = data[i].level;

        for (let j = 0; j < levels.length; j++) {

            let tempObject = {};
            tempObject["complex.name"] = data[i]["complex.name"];
            tempObject["entity"] = data[i]["entity"];
            tempObject["level"] = levels[j];
            orQuery.push(tempObject);
        }
    }

    const query = {"$or": orQuery};

    return query;
}

/**
 * function takes url option which are defined as an object and parse it and prepare it for mongoose use
 * input object    {limit: n, skip: m, projection:[ dataToShow]}
 * output object   {limit: n, skip: m, projection:{ _id:0, dataToShow[i]: 1} }
 * @param data
 * @returns {{}}
 */
function transformBimObjectOptions(data) {

    let result = {};
    let projection = {_id: 0};

    result["limit"] = (data.hasOwnProperty("limit")) ? data.limit : 100;
    result["skip"] = (data.hasOwnProperty("skip")) ? data.skip : 0;

    if (data.hasOwnProperty("projection")) {

        if (Object.prototype.toString.call(data.projection) === '[object Array]') {

            for (let j = 0; j < data.projection.length; j++) {
                projection[data.projection[j]] = 1;
            }

        } else {
            projection[data.projection] = 1;
        }
    }

    result["projection"] = projection;


    return result;
}

export function getBimsCount(data:Array, callback:(error:Error, data:{})=> void):void {

    const query = getTransformedBimObject(data);

    const model:IBimModel = this;

    model
        .count(query)
        .exec((err:Error, docs:{})=> {

            return callback(err, docs);
        });
};


export function getBims(data:Array, options:IBimOptionsRaw, callback:(error:Error, data:{})=> void):void {

    const query = getTransformedBimObject(data);
    const bimOptions = transformBimObjectOptions(options);
    const model:IBimModel = this;

    model
        .find(query, bimOptions["projection"] )
        .limit(Number(bimOptions["limit"]))
        .skip(Number(bimOptions["skip"]))
        .exec((err:Error, docs:{})=> {

            return callback(err, docs);
        });
};


export function getBimByGuid(guid,options:IBimOptionsRaw, callback:(error:Error, data:{})=> void):void {

    const query = {"guid": guid};

    const bimOptions = transformBimObjectOptions(options);

    const model:IBimModel = this;

    model
        .findOne(query,bimOptions["projection"]  )
        .exec((err:Error, docs:{})=> {

            return callback(err, docs);
        });
};

export function getBimComplex( callback:(error:Error, data:{})=> void):void {

    const query =[

            {  $group:  {
                "_id": {  complex: "$complex.name",entity:"$entity","level":"$level" },
                "documents_no": { $sum: 1 }
            }
            },
            { $group: {
                "_id": {complex: "$_id.complex", entity:"$_id.entity"} ,
                "level": {   "$push": {
                    "name": "$_id.level",
                    "document_no": "$documents_no"
                }
                },
                "documents_no": { "$sum": "$documents_no" }
            }
            },
            {
                $group: {
                    "_id": {complex: "$_id.complex"} ,
                    "entity": {   "$push": {
                        "name": "$_id.entity",
                        "level": "$level",
                        "documents_no": "$documents_no"
                    }

                    },
                    "documents_no": { "$sum": "$documents_no" }
                }
            },
            {
                $project: { _id:0, complex : "$_id.complex",  entity : "$entity",documents_no:"$documents_no"}
            }
        ];

    const model:IBimModel = this;

    model
        .aggregate(query )
        .exec((err:Error, docs:{})=> {

            return callback(err, docs);
        });
};