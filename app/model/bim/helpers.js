"use strict";
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
    var orQuery = [];
    for (var i = 0; i < data.length; i++) {
        var levels = data[i].level;
        for (var j = 0; j < levels.length; j++) {
            var tempObject = {};
            tempObject["complex.name"] = data[i]["complex.name"];
            tempObject["entity"] = data[i]["entity"];
            tempObject["level"] = levels[j];
            orQuery.push(tempObject);
        }
    }
    var query = { "$or": orQuery };
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
    var result = {};
    var projection = { _id: 0 };
    result["limit"] = (data.hasOwnProperty("limit")) ? data.limit : 100;
    result["skip"] = (data.hasOwnProperty("skip")) ? data.skip : 0;
    if (data.hasOwnProperty("projection")) {
        if (Object.prototype.toString.call(data.projection) === '[object Array]') {
            for (var j = 0; j < data.projection.length; j++) {
                projection[data.projection[j]] = 1;
            }
        }
        else {
            projection[data.projection] = 1;
        }
    }
    result["projection"] = projection;
    return result;
}
function getBimsCount(data, callback) {
    var query = getTransformedBimObject(data);
    var model = this;
    model
        .count(query)
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getBimsCount = getBimsCount;
;
function getBims(data, options, callback) {
    var query = getTransformedBimObject(data);
    var bimOptions = transformBimObjectOptions(options);
    var model = this;
    model
        .find(query, bimOptions["projection"])
        .limit(Number(bimOptions["limit"]))
        .skip(Number(bimOptions["skip"]))
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getBims = getBims;
;
function getBimByGuid(guid, options, callback) {
    var query = { "guid": guid };
    var bimOptions = transformBimObjectOptions(options);
    var model = this;
    model
        .findOne(query, bimOptions["projection"])
        .exec(function (err, docs) {
        return callback(err, docs);
    });
}
exports.getBimByGuid = getBimByGuid;
;
//# sourceMappingURL=helpers.js.map